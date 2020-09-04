package lt.ocirama.labsystem.converters;

import lt.ocirama.labsystem.model.entities.ResultEntity;
import lt.ocirama.labsystem.repositories.ResultRepository;
import lt.ocirama.labsystem.repositories.UserRepository;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Component
public class ExcelConverter {
    private ResultRepository resultRepository;
    private UserRepository userRepository;
    List<ResultEntity> res = new ArrayList<ResultEntity>();

    public ExcelConverter(ResultRepository resultRepository, UserRepository userRepository) {
        this.resultRepository = resultRepository;
        this.userRepository = userRepository;
    }

    LocalDate localDate = LocalDate.now();

    public List<ResultEntity> importExcel(MultipartFile excelFile) throws IOException {
        ResultEntity result;

        XSSFWorkbook workbook = new XSSFWorkbook(excelFile.getInputStream());
        XSSFSheet worksheet = workbook.getSheetAt(0);

        for (int i = 1; i < worksheet.getPhysicalNumberOfRows(); i++) {

            result = new ResultEntity();
            XSSFRow row = worksheet.getRow(i);
            result.setId(resultRepository.findTopByOrderByIdDesc().getId() + 1);
            result.setUser(userRepository.findByUsername(row.getCell(0).getStringCellValue()));
            result.setCustomerId(row.getCell(0).getStringCellValue());
            result.setProtocolId(row.getCell(1).getStringCellValue());
            result.setSampleId(row.getCell(2).getStringCellValue());
            result.setCalorificValue((int) row.getCell(3).getNumericCellValue());
            result.setTotalMoistureValue((int) row.getCell(4).getNumericCellValue());
            result.setAshValue((int) row.getCell(5).getNumericCellValue());
            result.setDate(Date.valueOf(localDate));
            res.add(result);
        }
        System.out.println(res);
        return res;
    }
}
