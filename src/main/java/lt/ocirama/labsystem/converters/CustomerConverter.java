package lt.ocirama.labsystem.converters;

import lt.ocirama.labsystem.model.dto.Customer;
import lt.ocirama.labsystem.model.dto.Order;
import lt.ocirama.labsystem.model.entities.CustomerEntity;
import lt.ocirama.labsystem.model.entities.OrderEntity;
import org.springframework.stereotype.Component;

import java.util.List;

import static java.util.stream.Collectors.toList;
@Component
public class CustomerConverter {

    public List<Customer> convert(List<CustomerEntity> customers) {
        return customers.stream()
                .map(this::convert)
                .collect(toList());
    }

    public Customer convert(CustomerEntity customer) {
        if (customer == null) {
            throw new IllegalArgumentException("Customer is required");
        }
        return new Customer(
                customer.getId(),
                customer.getTitle());
    }
}
