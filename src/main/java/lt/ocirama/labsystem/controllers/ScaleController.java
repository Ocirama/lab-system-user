package lt.ocirama.labsystem.controllers;


import com.fazecast.jSerialComm.SerialPort;
import lt.ocirama.labsystem.model.dto.Sample;
import lt.ocirama.labsystem.model.dto.SampleSave;
import lt.ocirama.labsystem.services.ScaleService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/lei/scales")
public class ScaleController {

    private final ScaleService scaleService;

    public ScaleController(ScaleService scaleService) {
        this.scaleService = scaleService;
    }

    @GetMapping
    public Double Pasverti() {

        SerialPort sl = scaleService.SvarstykliuJungtis();
        Double svoris = scaleService.Pasverti(sl);
        sl.closePort();
        return svoris;
    }


}

