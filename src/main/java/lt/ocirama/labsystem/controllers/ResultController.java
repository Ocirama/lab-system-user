package lt.ocirama.labsystem.controllers;


import lt.ocirama.labsystem.model.dto.Result;
import lt.ocirama.labsystem.model.dto.ResultSave;
import lt.ocirama.labsystem.services.ResultService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/lei/results")
public class ResultController {

    private final ResultService resultService;

    public ResultController(ResultService resultService) {
        this.resultService = resultService;
    }


    @GetMapping
    public List<Result> getAll() {
        return resultService.getAll();
    }

    @GetMapping("/{id}")
    public Result getUniversity(@PathVariable Integer id) {
        return resultService.getOrder(id);
    }

    @PostMapping
    public Result save(@RequestBody ResultSave order) {
        return resultService.save(order);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        resultService.delete(id);

        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
