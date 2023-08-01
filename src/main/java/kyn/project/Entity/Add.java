package kyn.project.Entity;

import org.springframework.web.multipart.MultipartFile;

public class Add
{
    String name;
    
    String location;

    MultipartFile image;

    public String getName()
    {
        return this.name;
    }

    public String setName(String name)
    {
        return this.name = name;
    }

    public String getLocation()
    {
        return this.location;
    }

    public String setLocation(String location)
    {
        return this.location = location;
    }

    public MultipartFile getImage()
    {
        return this.image;
    }

    public MultipartFile setImage(MultipartFile image)
    {
        return this.image = image;
    }
}
