package oauth2.app.Controller;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.memory.UserAttribute;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClientService;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController 
{

    @Autowired
    OAuth2AuthorizedClientService auth2AuthorizedClientService;

    @GetMapping("/")
    public String Home(Principal principal, Model model, OAuth2AuthenticationToken auth)
    {
        model.addAttribute("user", auth.getPrincipal().getAttributes().get("name"));
        System.out.println(auth.getPrincipal().getAttributes().get("name"));

        return "index";
    } 

    @GetMapping("/signin")
    public String Login()
    {
        return "login";
    } 
}
