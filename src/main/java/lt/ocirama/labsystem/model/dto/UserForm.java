package lt.ocirama.labsystem.model.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Getter
@Setter
public class UserForm {

  @NotBlank(message = "Please fill in the field")
  @Size(min = 3, max = 50, message = "User name must be between 3 and 50 characters")
  private String name;

  @NotBlank(message = "Please fill in the field")
  @Pattern(regexp = "[a-zA-Z]+", message = "Only uppercase and lowercase letters are allowed")
  private String username;

  @NotBlank(message = "Please fill in the field")
  @Pattern(regexp = "[a-zA-Z]+", message = "Only uppercase and lowercase letters are allowed")
  private String role;

  @NotBlank(message = "Please fill in the field")
  @Size(min = 8, max = 60, message = "Password must be between 8 and 60 characters")
  private String password;
}
