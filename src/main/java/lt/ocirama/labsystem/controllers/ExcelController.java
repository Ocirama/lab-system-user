package lt.ocirama.labsystem.controllers;

import lt.ocirama.labsystem.converters.ExcelHelper;
import lt.ocirama.labsystem.converters.ResponseMessage;
import lt.ocirama.labsystem.model.entities.ResultEntity;
import lt.ocirama.labsystem.services.ExcelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@CrossOrigin
@Controller
@RequestMapping("/lei/excel")
public class ExcelController {
    @Autowired
    ExcelService excelService;


    @PostMapping("/upload")
    public ResponseEntity<ResponseMessage> uploadFile(@RequestParam("file") MultipartFile file) {
        String message = "";

        if (ExcelHelper.hasExcelFormat(file)) {

                excelService.save(file);

        }

        message = "Please upload an excel file!";
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResponseMessage(message));
    }

    /*@GetMapping("/results")
    public ResponseEntity<List<ResultEntity>> getAllTutorials() {
        try {
            List<ResultEntity> tutorials = excelService.getAllTutorials();

            if (tutorials.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(tutorials, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }*/
}
