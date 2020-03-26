package lt.ocirama.labsystem.converters;

import lt.ocirama.labsystem.model.dto.CustomerSave;
import lt.ocirama.labsystem.model.entities.CustomerEntity;
import lt.ocirama.labsystem.repositories.CustomerRepository;
import org.springframework.stereotype.Component;

import java.util.Objects;
@Component
public class CustomerEntityConverter {
    private final CustomerRepository customerRepository;

    public CustomerEntityConverter(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public CustomerEntity convert(CustomerSave customer) {
        CustomerEntity result;

        if (Objects.isNull(customer.getId())) {
            result = new CustomerEntity();
            result.setTitle(customer.getTitle());
        } else {
            result = customerRepository.findOneById(customer.getId());
            result.setTitle(customer.getTitle());

        }

        return result;
    }
}
