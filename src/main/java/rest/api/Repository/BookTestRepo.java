package rest.api.Repository;

import org.springframework.data.repository.CrudRepository;

import rest.api.Entity.BookTest;

public interface BookTestRepo extends CrudRepository<BookTest, Long>
{
        
}
