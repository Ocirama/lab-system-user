package lt.ocirama.labsystem.services;

import lt.ocirama.labsystem.converters.ExcelConverter;
import lt.ocirama.labsystem.converters.ResultConverter;
import lt.ocirama.labsystem.converters.ResultEntityConverter;
import lt.ocirama.labsystem.model.dto.Result;
import lt.ocirama.labsystem.model.dto.ResultSave;
import lt.ocirama.labsystem.model.entities.ResultEntity;
import lt.ocirama.labsystem.repositories.ResultRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class ResultService {

    private final ResultConverter resultConverter;
    private final ResultEntityConverter resultEntityConverter;
    private final ResultRepository resultRepository;
    private ExcelConverter excelConverter;

    public ResultService(ResultConverter resultConverter, ResultEntityConverter resultEntityConverter, ResultRepository resultRepository, ExcelConverter excelConverter) throws IOException {
        this.resultConverter = resultConverter;
        this.resultEntityConverter = resultEntityConverter;
        this.resultRepository = resultRepository;
        this.excelConverter = excelConverter;
    }

    public List<Result> getAll() {
        List<ResultEntity> results = resultRepository.findAll();
        return resultConverter.convert(results);
    }

    public Result getOrder(Integer id) {
        ResultEntity order = resultRepository.findOneById(id);

        return resultConverter.convert(order);
    }

    public Result save(ResultSave order) {
        ResultEntity resultEntity = resultEntityConverter.convert(order);
        ResultEntity result = resultRepository.save(resultEntity);

        return resultConverter.convert(result);
    }

    public void delete(Integer id) {
        resultRepository.deleteById(id);
    }

    public List<Result> importSave (MultipartFile excelFile) throws IOException {
        List<Result> list = new ArrayList<>();
        List<ResultEntity> resultEntityList = excelConverter.importExcel(excelFile);
        for (ResultEntity res : resultEntityList) {
            ResultEntity result = resultRepository.save(res);
            list.add(resultConverter.convert(result));
        }
        return list;
    }
}
