package lt.ocirama.labsystem.controllers;

import java.util.List;
import lt.ocirama.labsystem.model.dto.Tray;
import lt.ocirama.labsystem.model.dto.TraySave;
import lt.ocirama.labsystem.services.TrayService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/lei/trays")
public class TrayController {

    private final TrayService trayService;

    public TrayController(TrayService trayService) {
        this.trayService = trayService;
    }


    @GetMapping
    public List<Tray> getAll() {
        return trayService.getAll();
    }

    @GetMapping("/{id}")
    public Tray getTray(@PathVariable String id) {
        return trayService.getTray(id);
    }

    @PostMapping
    public Tray save(@RequestBody TraySave tray) {
        return trayService.save(tray);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        trayService.delete(id);

        return ResponseEntity.status(HttpStatus.OK).build();
    }
}

