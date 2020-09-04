package lt.ocirama.labsystem.services;

import lt.ocirama.labsystem.converters.ExcelHelper;
import lt.ocirama.labsystem.model.entities.ResultEntity;
import lt.ocirama.labsystem.repositories.ExcelRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class ExcelService {

    private final ExcelRepository repository;
    private final ExcelHelper excelHelper;

    public ExcelService(ExcelRepository repository, ExcelHelper excelHelper) {
        this.repository = repository;
        this.excelHelper = excelHelper;
    }


    public void save(MultipartFile file) {
        try {
            List<ResultEntity> results = excelHelper.excelToData(file.getInputStream());
            repository.saveAll(results);
        } catch (IOException e) {
            throw new RuntimeException("fail to store excel data: " + e.getMessage());
        }
    }

    public List<ResultEntity> getAllTutorials() {
        return repository.findAll();
    }
}
