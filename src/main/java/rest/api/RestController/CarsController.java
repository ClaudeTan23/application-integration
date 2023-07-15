package rest.api.RestController;

import java.io.IOException;
import java.nio.file.Paths;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import rest.api.Entity.Cars;
import rest.api.Entity.SearchCar;
import rest.api.Repository.CarsRepo;
import rest.api.Service.SearchCarService;

@CrossOrigin()
@RestController
public class CarsController 
{
    @Autowired
    CarsRepo carsRepo;

    @Autowired
    SearchCarService carService;

    @RequestMapping(value = "/cars", method = RequestMethod.GET)
    public List<Cars> ViewCars()
    {
        List<Cars> cars = carsRepo.findAllCars();

        return cars;
    }

    @RequestMapping(value = "/search", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity<List<Cars>> SearchCars(@RequestBody SearchCar searchParam)
    {
        if(searchParam.getCol() != null)
        {
            return ResponseEntity.ok(carService.SearchCars(searchParam.getCol(), searchParam.getVal()));

        } else 
        {
            return ResponseEntity.badRequest().build();
        }
    }

    @RequestMapping(value = "/add-car", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity<Cars> AddCars(@RequestBody Cars car)
    {
        Cars AddNewCar = carsRepo.save(car);

        return ResponseEntity.ok(AddNewCar);
    }

    @RequestMapping(value = "/delete-car", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity<String> DeleteCars(@RequestBody Cars car)
    {
        carsRepo.deleteById(Long.valueOf(car.getId()));

        return ResponseEntity.ok("deleted");
    }

    @RequestMapping(value = "/edit-car", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity<String> EditCars(@RequestBody Cars car)
    {
        carsRepo.save(car);

        return ResponseEntity.ok("edited");
    }

    
}
