package lt.ocirama.labsystem.controllers;


import lt.ocirama.labsystem.model.dto.Result;
import lt.ocirama.labsystem.model.dto.User;
import lt.ocirama.labsystem.model.dto.UserForm;
import lt.ocirama.labsystem.model.dto.UserSave;
import lt.ocirama.labsystem.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/lei/users")
@CrossOrigin
public class UserController {

  private final UserService userService;

  public UserController(UserService userService) {
    this.userService = userService;
  }

  @GetMapping
  public List<User> getAll() {
    return userService.getAll();
  }

  @GetMapping("/{id}")
  public UserSave getUser(
      @AuthenticationPrincipal String userId
  ) {
    return userService.getUser(Integer.parseInt(userId));
  }

  @PutMapping
  public UserSave updateUser(
      @RequestBody @Valid UserForm userform,
      @AuthenticationPrincipal String userId
  ) {
    return userService.updateUser(userform, Integer.parseInt(userId));
  }

  @PostMapping
  public UserSave saveUser(@RequestBody @Valid UserForm user) {
    return userService.saveUser(user);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> delete(@PathVariable Integer id) {
    userService.delete(id);
    return ResponseEntity.status(HttpStatus.OK).build();
  }
}
