package lt.ocirama.labsystem.controllers;

import lt.ocirama.labsystem.model.dto.Order;
import lt.ocirama.labsystem.model.dto.OrderSave;
import lt.ocirama.labsystem.services.OrderService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/lei/orders")
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }


    @GetMapping
    public List<Order> getAll() {
        return orderService.getAll();
    }

    @GetMapping("/{id}")
    public Order getUniversity(@PathVariable Integer id) {
        return orderService.getOrder(id);
    }

    @PostMapping
    public Order save(@RequestBody OrderSave order) {
        return orderService.save(order);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        orderService.delete(id);

        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
