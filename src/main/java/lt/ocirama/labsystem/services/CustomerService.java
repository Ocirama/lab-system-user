package lt.ocirama.labsystem.services;

import lt.ocirama.labsystem.converters.CustomerConverter;
import lt.ocirama.labsystem.converters.CustomerEntityConverter;
import lt.ocirama.labsystem.model.dto.Customer;
import lt.ocirama.labsystem.model.dto.CustomerSave;
import lt.ocirama.labsystem.model.entities.CustomerEntity;
import lt.ocirama.labsystem.repositories.CustomerRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService {
    private final CustomerConverter customerConverter;
    private final CustomerEntityConverter customerEntityConverter;
    private final CustomerRepository customerRepository;

    public CustomerService(CustomerConverter customerConverter, CustomerEntityConverter customerEntityConverter, CustomerRepository customerRepository) {
        this.customerConverter = customerConverter;
        this.customerEntityConverter = customerEntityConverter;
        this.customerRepository = customerRepository;
    }


    public List<Customer> getAll() {
        List<CustomerEntity> customers = customerRepository.findAll();

        return customerConverter.convert(customers);
    }

    public Customer getCustomer(Integer id) {
        CustomerEntity customer = customerRepository.findOneById(id);

        return customerConverter.convert(customer);
    }

    public Customer save(CustomerSave customer) {
        CustomerEntity customerEntity = customerEntityConverter.convert(customer);
        CustomerEntity result = customerRepository.save(customerEntity);

        return customerConverter.convert(result);
    }

    public void delete(String title) {
        customerRepository.deleteByTitle(title);
    }
}

