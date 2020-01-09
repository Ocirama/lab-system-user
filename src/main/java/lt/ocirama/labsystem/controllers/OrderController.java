package lt.ocirama.labsystem.controllers;

import java.util.List;
import lt.ocirama.labsystem.model.dto.Order;
import lt.ocirama.labsystem.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/lei/orders")
public class OrderController {

    private final OrderService orderService;

@Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }
    @GetMapping()
    public List<String> getAllOrders(){
    return orderService.getOrders();
    }
}
