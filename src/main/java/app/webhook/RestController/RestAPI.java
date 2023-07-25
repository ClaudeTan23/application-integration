package app.webhook.RestController;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import app.webhook.Model.Body;

@CrossOrigin("*")
@RestController
public class RestAPI 
{
    @Value("${Slack.Webhook.URL}")
    public String URL;

    @RequestMapping(value = "/msg", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public String Webhook(@RequestBody Body body)
    {
        RestTemplate restTemplate = new RestTemplate();
        HttpEntity<Body> request = new HttpEntity<>(body);

        ResponseEntity<String> response = restTemplate.exchange(URL, HttpMethod.POST, request, String.class);
        System.out.println(response.getBody());

        return response.getBody();
    }    
}
