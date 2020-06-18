package lt.ocirama.labsystem.converters;

import static java.util.stream.Collectors.toList;

import java.time.LocalDateTime;
import java.util.Comparator;
import java.util.List;
import java.util.function.Function;

import lt.ocirama.labsystem.model.dto.Result;
import lt.ocirama.labsystem.model.dto.ResultSave;
import lt.ocirama.labsystem.model.dto.User;
import lt.ocirama.labsystem.model.entities.ResultEntity;
import lt.ocirama.labsystem.model.entities.UserEntity;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class ResultConverter {


    public Result convert(ResultEntity resultEntity) {

        return Result.builder()
                .id(resultEntity.getId())
                .customerId(resultEntity.getCustomerId())
                .protocolId(resultEntity.getProtocolId())
                .sampleId(resultEntity.getSampleId())
                .ashValue(resultEntity.getAshValue())
                .calorificValue(resultEntity.getCalorificValue())
                .totalMoistureValue(resultEntity.getTotalMoistureValue())
                .date(resultEntity.getDate())
                .build();
    }

    public List<Result> convert(List<ResultEntity> results) {
        return results.stream().map(this::convert).collect(toList());
    }

    public ResultSave convertWithUser(
            ResultEntity resultEntity,
            Function<UserEntity, User> userMapper
    ) {
        return ResultSave.builder()
                .user(userMapper.apply(resultEntity.getUser()))
                .id(resultEntity.getId())
                .customerId(resultEntity.getProtocolId())
                .protocolId(resultEntity.getProtocolId())
                .sampleId(resultEntity.getSampleId())
                .ashValue(resultEntity.getAshValue())
                .calorificValue(resultEntity.getCalorificValue())
                .totalMoistureValue(resultEntity.getTotalMoistureValue())
                .date(resultEntity.getDate())
                .build();
    }

    public List<ResultSave> convertWithUser(
            List<ResultEntity> results,
            Function<UserEntity, User> userMapper
    ) {
        return results.stream().map((entity) -> convertWithUser(entity, userMapper)).collect(toList());
    }
}
