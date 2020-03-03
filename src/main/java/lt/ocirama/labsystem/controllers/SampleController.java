package lt.ocirama.labsystem.controllers;

import java.util.List;
import lt.ocirama.labsystem.model.dto.Sample;
import lt.ocirama.labsystem.model.dto.SampleSave;
import lt.ocirama.labsystem.services.SampleService;
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
@RequestMapping("/lei/samples")
public class SampleController {

    private final SampleService sampleService;

    public SampleController(SampleService sampleService) {
        this.sampleService = sampleService;
    }


    @GetMapping
    public List<Sample> getAll() {
        return sampleService.getAll();
    }

    @GetMapping("/{id}")
    public Sample getSample(@PathVariable Integer id) {
        return sampleService.getSample(id);
    }
@CrossOrigin
    @GetMapping("/list/{id}")
    public List<Sample> getAllbyProtocol(@PathVariable String id) {
        return sampleService.getAllByProtocol(id);
    }

    @PostMapping
    public Sample save(@RequestBody SampleSave sample) {
        return sampleService.save(sample);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        sampleService.delete(id);

        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
