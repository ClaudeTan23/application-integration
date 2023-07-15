package rest.api.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import rest.api.Entity.Cars;
import rest.api.Repository.CarsRepo;

@Service
public class SearchCarService 
{
    @Autowired
    CarsRepo carsRepo;

    public List<Cars> SearchCars(String col, String val)
    {
        List<Cars> cars = new ArrayList<Cars>();

        String column = String.valueOf(col.trim());

        if(column.equals("make_by"))
        {
            cars = carsRepo.searchMakeBy(val);
            System.out.println(val);
            return cars;

        } else if(column.equals("model")) 
        {
            cars = carsRepo.searchModel(val);
            return cars;

        } else if(column.equals("price"))
        {
            cars = carsRepo.searchPrice(val);
            return cars;

        } else if(column.equals("registration_date"))
        {
            cars = carsRepo.searchRegistration(val);
            return cars;
        }
        
        return cars;

    }
}
