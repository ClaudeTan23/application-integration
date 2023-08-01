package kyn.project.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import kyn.project.Entity.ResponseBody;
import kyn.project.Entity.User;
import kyn.project.Repository.UserRepo;

@Service
public class LoginService 
{
    @Autowired
    UserRepo userRepo;

    @Autowired
    PasswordEncoder passwordEncoder;

    public ResponseBody Run(User user)
    {
        User findUser = userRepo.findByUsername(user.getUsername());
        ResponseBody res = new ResponseBody();

        if(findUser != null)
        {
            Boolean checkPassword = passwordEncoder.matches(user.getPassword(), findUser.getPassword());
            
            if(checkPassword)
            {
                res.setId(String.valueOf(findUser.getId()));
                res.setStatus("ok");
                res.setToken(findUser.getPassword());
                res.setType("basic");

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
