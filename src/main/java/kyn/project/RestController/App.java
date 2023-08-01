package kyn.project.RestController;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.concurrent.TimeUnit;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.StreamingHttpOutputMessage.Body;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.util.JSONPObject;

import kyn.project.Entity.Add;
import kyn.project.Entity.Neighbour;
import kyn.project.Entity.ResponseBody;
import kyn.project.Entity.User;
import kyn.project.Repository.NeighbourRepo;
import kyn.project.Repository.UserRepo;
import kyn.project.Service.LoginService;
import kyn.project.Service.RegisterService;

@CrossOrigin("*")
@RestController
public class App 
{
    @Autowired
    RegisterService registerService;

    @Autowired
    LoginService loginService;

    @Autowired
    NeighbourRepo neighbourRepo;

    @Autowired
    UserRepo userRepo;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String Index()
    {
        return "{'ok': 'asd'}";
    }

    @RequestMapping(value = "/register", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public String Register(@RequestBody User user)
    {
        System.out.println(user.getUsername());
        return registerService.Run(user);
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseBody Login(@RequestBody User user)
    {
        return loginService.Run(user);
    }

    @RequestMapping(value = "/oauth", method = RequestMethod.GET)
    public ResponseBody Oauth(HttpServletRequest request, HttpServletResponse response)
    {
        ResponseBody res = new ResponseBody();
        String token = request.getParameter("token");
        String type  = request.getParameter("type");

        if(token != null && type != null)
        {
            if(type.equals("fb"))
            {
                RestTemplate restTemplate = new RestTemplate();
       
                ResponseEntity<ResponseBody> responses = restTemplate.exchange("https://graph.facebook.com/me?access_token="+ token +"&fields=id,name", HttpMethod.GET, null, ResponseBody.class);
                System.out.println(responses.getStatusCode().value());
                if(responses.getStatusCode().value() == 200)
                {
                    res.setName(responses.getBody().getName());
                    res.setToken(token);
                    res.setType("fb");
                    res.setStatus("ok");

                    return res;

                } else 
                {
                    res.setStatus("fail");

                    return res;
                }

            } else if(type.equals("google"))
            {
                RestTemplate restTemplate = new RestTemplate();
       
                ResponseEntity<ResponseBody> responses = restTemplate.exchange("https://www.googleapis.com/drive/v3/about?fields=user&access_token=" + token, HttpMethod.GET, null, ResponseBody.class);
                
                if(responses.getStatusCode().value() == 200) 
                {
                    res.setName(responses.getBody().getUser().getDisplayName());
                    res.setToken(token);
                    res.setType("google");
                    res.setStatus("ok");

                    return res;

                } else 
                {
                    res.setStatus("fail");

                    return res;
                }

            } else if(type.equals("basic"))
            {
                String userId = request.getHeader("uid");
                User checkUser = userRepo.findWithId(userId);

                if(checkUser != null)
                {
                    if(checkUser.getPassword().equals(token))
                    {
                        res.setName(checkUser.getUsername());
                        res.setToken(token);
                        res.setType("basic");
                        res.setStatus("ok");


                        return res;

                    } else 
                    {
                        res.setStatus("fail");

                        return res;
                    }

                } else 
                {
                    res.setStatus("fail");

                    return res;
                }

            } else 
            {
                res.setStatus("fail");

                return res;
            }

        } else 
        {
            res.setStatus("fail");

            return res;
        }
        
    }

    @RequestMapping(value = "/neighbour", method = RequestMethod.GET)
    public List<Neighbour> Data()
    {
        return neighbourRepo.findAll();
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public ResponseBody Add(@RequestParam("image") MultipartFile file, @RequestParam("name") String name, @RequestParam("location") String location) throws IOException, InterruptedException 
    {
        ResponseBody res = new ResponseBody();
        String txt = String.valueOf(System.currentTimeMillis());
        Path filePath = Paths.get(System.getProperty("user.dir"), "src", "main", "resources", "static", "image");

        if(Files.notExists(filePath)) Files.createDirectory(filePath);

        if(Files.notExists(Paths.get(filePath.toString(), file.getOriginalFilename()))) Files.write(Paths.get(filePath.toString(), txt + ".png"), file.getBytes());

        Neighbour neighbour = new Neighbour();
        neighbour.setName(name);
        neighbour.setLocation(location);
        neighbour.setImage(txt + ".png");

        neighbourRepo.save(neighbour);
        res.setStatus("ok");

        TimeUnit.SECONDS.sleep(1);

        return res;
    }

    @RequestMapping(value = "/neighbour/{id}", method = RequestMethod.GET)
    public ResponseBody Neighbour(@PathVariable String id)
    {
        ResponseBody res = new ResponseBody();

        if(id != null)
        {
            Neighbour neighbour = neighbourRepo.findWithId(id);

            if(neighbour != null)
            {
                res.setNeighbour(neighbour);
                res.setStatus("ok");

                return res;

            } else 
            {
                res.setStatus("fail");

                return res;
            }

        } else 
        {
            res.setStatus("fail");

            return res;
        }
    }

    @RequestMapping(value = "/edit", method = RequestMethod.POST)
    public ResponseBody EditNeighbour(@RequestParam("id") String id, @RequestParam("name") String name, @RequestParam("location") String location, MultipartFile file) throws IOException, InterruptedException 
    {
        ResponseBody res = new ResponseBody();

        if(id != null)
        {
            Neighbour getNeighbour = neighbourRepo.findWithId(id);

            if(getNeighbour != null)
            {
                getNeighbour.setName(name);
                getNeighbour.setLocation(name);

                // System.out.println(file);

                // if(file != null)
                // {
                //     String txt = String.valueOf(System.currentTimeMillis());
                //     Path filePath = Paths.get(System.getProperty("user.dir"), "src", "main", "resources", "static", "image");

                //     if(Files.notExists(filePath)) Files.createDirectory(filePath);

                //     if(Files.notExists(Paths.get(filePath.toString(), file.getOriginalFilename()))) Files.write(Paths.get(filePath.toString(), txt + ".png"), file.getBytes());

                //     getNeighbour.setImage(txt + ".png");

                //     neighbourRepo.save(getNeighbour);

                // } else 
                // {
                //     neighbourRepo.save(getNeighbour);
                // }
                
                neighbourRepo.save(getNeighbour);

                res.setStatus("ok");

                return res;

            } else 
            {
                res.setStatus("fail");

                return res;
            }

        } else 
        {
            res.setStatus("fail");

            return res;
        }
    }

    @RequestMapping(value = "/delete", method = RequestMethod.POST)
    public ResponseBody DeleteNeighbour(@RequestParam("id") String id)
    {
        ResponseBody res = new ResponseBody();

        if(id != null)
        {
            Neighbour getNeighbour = neighbourRepo.findWithId(id);

            if(getNeighbour != null)
            {
                neighbourRepo.delete(getNeighbour);

                res.setStatus("ok");

                return res;

            } else 
            {
                res.setStatus("fail");

                return res;
            }

        } else 
        {
            res.setStatus("fail");

            return res;
        }
    }

}
