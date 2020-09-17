package lt.ocirama.labsystem.converters;

import lt.ocirama.labsystem.model.dto.ResultSave;
import lt.ocirama.labsystem.model.dto.UserSave;
import lt.ocirama.labsystem.model.entities.ResultEntity;
import lt.ocirama.labsystem.model.entities.UserEntity;
import lt.ocirama.labsystem.repositories.ResultRepository;
import lt.ocirama.labsystem.repositories.UserRepository;

import java.time.LocalDate;
import java.util.Objects;

public class UserEntityConverter {
    private final UserRepository userRepository;

    public UserEntityConverter(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    LocalDate localDate = LocalDate.now();

    public UserEntity convert(UserSave order) {
        UserEntity user;

        if (Objects.isNull(order.getId())) {
            user = new UserEntity();
            user.setName(order.getName());
            user.setUsername(order.getUsername());
        } else {
            user = userRepository.findOneById(order.getId());
            user.setName(order.getName());
            user.setUsername(order.getUsername());
        }

        return user;
    }
}
