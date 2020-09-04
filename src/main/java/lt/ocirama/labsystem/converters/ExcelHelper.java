package lt.ocirama.labsystem.converters;

import lt.ocirama.labsystem.model.entities.ResultEntity;
import lt.ocirama.labsystem.repositories.UserRepository;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Component
public class ExcelHelper {
    private final UserRepository userRepository;

    public ExcelHelper(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public static String TYPE = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    static String[] HEADERs = {"Id", "Customer", "Protocol", "Sample", "Ash", "Moisture", "Calorific"};
    static String SHEET = "Sheet1";


    public static boolean hasExcelFormat(MultipartFile file) {

        if (!TYPE.equals(file.getContentType())) {
            return false;
        }

        return true;
    }

    public List<ResultEntity> excelToData(InputStream is) {
        try {
            Workbook workbook = new XSSFWorkbook(is);

            Sheet sheet = workbook.getSheet(SHEET);
            Iterator<Row> rows = sheet.iterator();

            List<ResultEntity> results = new ArrayList<ResultEntity>();

            int rowNumber = 0;
            while (rows.hasNext()) {
                Row currentRow = rows.next();

                // skip header
                if (rowNumber == 0) {
                    rowNumber++;
                    continue;
                }

                Iterator<Cell> cellsInRow = currentRow.iterator();


                ResultEntity result = new ResultEntity();

                int cellIdx = 0;
                while (cellsInRow.hasNext()) {
                    Cell currentCell = cellsInRow.next();
                    switch (cellIdx) {
                        case 0:
                            System.out.println(currentCell.getNumericCellValue());
                            result.setId((int) currentCell.getNumericCellValue());
                            break;

                        case 1:
                            System.out.println(currentCell.getStringCellValue());
                            String value = currentCell.getStringCellValue();
                            result.setCustomerId(value);
                            result.setUser(userRepository.findByUsername(value));
                            break;
                        case 2:
                            System.out.println(currentCell.getNumericCellValue());
                            result.setProtocolId(String.valueOf(currentCell.getNumericCellValue()));
                            break;
                        case 3:
                            System.out.println(currentCell.getStringCellValue());
                            result.setSampleId(currentCell.getStringCellValue());
                            break;
                        case 4:
                            System.out.println(currentCell.getNumericCellValue());
                            result.setAshValue(currentCell.getNumericCellValue());
                            break;
                        case 5:
                            System.out.println(currentCell.getNumericCellValue());
                            result.setTotalMoistureValue(currentCell.getNumericCellValue());
                            break;
                        case 6:
                            System.out.println(currentCell.getNumericCellValue());
                            result.setCalorificValue((int) currentCell.getNumericCellValue());
                            break;
                        default:
                            break;
                    }
                    cellIdx++;
                }
                results.add(result);
            }

            workbook.close();

            return results;
        } catch (IOException e) {
            throw new RuntimeException("fail to parse Excel file: " + e.getMessage());
        }
    }
}
