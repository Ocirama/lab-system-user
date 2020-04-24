package lt.ocirama.labsystem.controllers;

import lt.ocirama.labsystem.model.dto.Sample;
import lt.ocirama.labsystem.model.dto.SampleSave;
import lt.ocirama.labsystem.model.dto.TotalMoisture;
import lt.ocirama.labsystem.model.dto.TotalMoistureSave;
import lt.ocirama.labsystem.services.TotalMoistureService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/lei/journals")
public class JournalController {


    private final TotalMoistureService totalMoistureService;

    public JournalController(TotalMoistureService totalMoistureService) {
        this.totalMoistureService = totalMoistureService;
    }


    @GetMapping
    public List<TotalMoisture> getAll() {
        return totalMoistureService.getAll();
    }

    @GetMapping("/{id}")
    public TotalMoisture getTotalMoisture(@PathVariable Integer id) {
        return totalMoistureService.getTotalMoisture(id);
    }

    @PostMapping
    public TotalMoisture save(@RequestBody TotalMoistureSave totalMoistureSave) {
        return totalMoistureService.save(totalMoistureSave);
    }
    @PostMapping("/second")
    public TotalMoisture save2(@RequestBody TotalMoistureSave totalMoistureSave) {
        return totalMoistureService.save2(totalMoistureSave);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        totalMoistureService.delete(id);

        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
