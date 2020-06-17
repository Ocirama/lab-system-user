package lt.ocirama.labsystem.converters;

import lt.ocirama.labsystem.model.dto.UserForm;
import lt.ocirama.labsystem.model.entities.UserEntity;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Component
public class UserFormConverter {

  public UserEntity convert(UserForm userForm) {
    return UserEntity.builder()
        .results(new ArrayList<>())
        .name(userForm.getName())
        .username(userForm.getUsername())
        .role(userForm.getRole())
        .build();
  }
}
