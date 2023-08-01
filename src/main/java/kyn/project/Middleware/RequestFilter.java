package kyn.project.Middleware;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.filter.OncePerRequestFilter;

import kyn.project.Entity.ResponseBody;
import kyn.project.Entity.User;
import kyn.project.Repository.UserRepo;

@Component
public class RequestFilter extends OncePerRequestFilter
{
    @Autowired
    UserRepo userRepo;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException 
    {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        response.setHeader("Access-Control-Max-Age", "3600");
        response.setHeader("Access-Control-Allow-Headers", "authorization, content-type, xsrf-token, type, uid");
        response.addHeader("Access-Control-Expose-Headers", "xsrf-token");

        String[] uri = request.getRequestURI().split("/");
        List<String> uriList = Arrays.asList(uri);
        
        if(request.getRequestURI().equals("/register") || request.getRequestURI().equals("/login") || request.getRequestURI().equals("/oauth"))
        {
            filterChain.doFilter(request, response);

        } else if(uriList.size() == 3 && uriList.get(0).equals("") && uriList.get(1).equals("image"))
        {
            filterChain.doFilter(request, response);

        } else 
        {
            String token = request.getHeader("authorization");
            String type  = request.getHeader("type");

            if(token != null && type != null)
            {
                if(type.equals("fb"))
                {
                    RestTemplate restTemplate = new RestTemplate();
        
                    ResponseEntity<ResponseBody> responses = restTemplate.exchange("https://graph.facebook.com/me?access_token="+ token +"&fields=id,name", HttpMethod.GET, null, ResponseBody.class);

                    if(responses.getStatusCode().value() == 200)
                    {
                        filterChain.doFilter(request, response);

                    } else 
                    {
                        response.setStatus(403);
                        response.setHeader("result", "fail");
                    }

                } else if(type.equals("google"))
                {
                    RestTemplate restTemplate = new RestTemplate();
        
                    ResponseEntity<ResponseBody> responses = restTemplate.exchange("https://www.googleapis.com/drive/v3/about?fields=user&access_token=" + token, HttpMethod.GET, null, ResponseBody.class);
                    
                    if(responses.getStatusCode().value() == 200) 
                    {
                        filterChain.doFilter(request, response);

                    } else 
                    {
                        response.setStatus(403);
                        response.setHeader("result", "fail");
                    }

                } else if(type.equals("basic"))
                {
                    String userId = request.getHeader("uid");
                    User checkUser = userRepo.findWithId(userId);

                    if(checkUser != null)
                    {
                        if(checkUser.getPassword().equals(token))
                        {
                            filterChain.doFilter(request, response);

                        } else 
                        {
                            response.setStatus(403);
                            response.setHeader("result", "fail");
                        }

                    } else 
                    {
                        response.setStatus(403);
                        response.setHeader("result", "fail");
                    }

                } else 
                {
                    response.setStatus(403);
                    response.setHeader("result", "fail");
                }

            } else 
            {
                response.setStatus(403);
                response.setHeader("result", "fail");
            }

            // filterChain.doFilter(request, response);

        }
        
    }
   
}
