package lt.ocirama.labsystem.controllers;

import lt.ocirama.labsystem.model.dto.Customer;
import lt.ocirama.labsystem.model.dto.CustomerSave;
import lt.ocirama.labsystem.services.CustomerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/lei/customers")
public class CustomerController {

    private final CustomerService customerService;

    public CustomerController(CustomerService customerService) { this.customerService = customerService;
    }


    @GetMapping
    public List<Customer> getAll() {
        return customerService.getAll();
    }

    @GetMapping("/{id}")
    public Customer getCustomer(@PathVariable Integer id) {
        return customerService.getCustomer(id);
    }

    @PostMapping
    public Customer save(@RequestBody CustomerSave customer) {
        return customerService.save(customer);
    }

    @DeleteMapping("/{title}")
    public ResponseEntity<Void> delete(@PathVariable String title) {
        customerService.delete(title);

        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
