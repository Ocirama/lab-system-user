package lt.ocirama.labsystem.converters;

import lt.ocirama.labsystem.model.dto.Result;
import lt.ocirama.labsystem.model.dto.ResultSave;
import lt.ocirama.labsystem.model.dto.User;
import lt.ocirama.labsystem.model.dto.UserSave;
import lt.ocirama.labsystem.model.entities.ResultEntity;
import lt.ocirama.labsystem.model.entities.UserEntity;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.function.Function;

import static java.util.stream.Collectors.toList;

@Component
public class UserConverter {

    public User convert(UserEntity userEntity) {
        return User.builder()
                .id(userEntity.getId())
                .username(userEntity.getUsername())
                .name(userEntity.getName())
                .role(userEntity.getRole())
                .build();
    }
    public List<User> convert(List<UserEntity> users) {
        return users.stream().map(this::convert).collect(toList());
    }

    public UserSave convertWithResults(
            UserEntity userEntity,
            Function<List<ResultEntity>, List<ResultSave>> resultMapper
    ) {
        return UserSave.builder()
                .results(resultMapper.apply(userEntity.getResults()))
                .id(userEntity.getId())
                .username(userEntity.getUsername())
                .name(userEntity.getName())
                .role(userEntity.getRole())
                .build();
    }
}
