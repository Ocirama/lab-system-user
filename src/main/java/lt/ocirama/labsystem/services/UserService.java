package lt.ocirama.labsystem.services;

import lt.ocirama.labsystem.converters.ResultConverter;
import lt.ocirama.labsystem.converters.UserConverter;
import lt.ocirama.labsystem.converters.UserFormConverter;
import lt.ocirama.labsystem.model.dto.User;
import lt.ocirama.labsystem.model.dto.UserForm;
import lt.ocirama.labsystem.model.dto.UserSave;
import lt.ocirama.labsystem.model.entities.UserEntity;
import lt.ocirama.labsystem.model.exception.InvalidValuesException;
import lt.ocirama.labsystem.repositories.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final UserFormConverter userFormConverter;
    private final UserConverter userConverter;
    private final PasswordEncoder passwordEncoder;
    private final ResultConverter resultConverter;

    public UserService(
            UserRepository userRepository,
            UserFormConverter userFormConverter,
            UserConverter userConverter,
            PasswordEncoder passwordEncoder,
            ResultConverter resultConverter
    ) {
        this.userRepository = userRepository;
        this.userFormConverter = userFormConverter;
        this.userConverter = userConverter;
        this.passwordEncoder = passwordEncoder;
        this.resultConverter = resultConverter;
    }

    public UserSave getUser(Integer id) {
        return userConverter
                .convertWithResults(
                        userRepository.findOneById(id),
                        (result) -> resultConverter.convertWithUser(result, userConverter::convert)
                );
    }
    public List<User> getAll() {
        List<UserEntity> users = userRepository.findAll();
        return userConverter.convert(users);
    }
    public void delete(Integer id) {
        userRepository.deleteById(id);
    }

    public UserSave saveUser(UserForm userForm) {
        if (!userRepository.existsByUsername(userForm.getUsername())) {
            UserEntity userEntity = userFormConverter.convert(userForm);
            userEntity.setPassword(passwordEncoder.encode(userForm.getPassword()));
            userEntity = userRepository.save(userEntity);
            return userConverter.convertWithResults(
                    userEntity,
                    (result) -> resultConverter.convertWithUser(result, userConverter::convert)
            );
        }
        throw new InvalidValuesException().addError("username", "User with this username already exists");
    }

    @Transactional
    public UserSave updateUser(UserForm userForm, Integer authorizedUserId) {
        UserEntity userEntity = userRepository.findOneById(authorizedUserId);

        if (!userEntity.getUsername().equals(userForm.getUsername())
        ) {
            if (userRepository.existsByUsername(userForm.getUsername())) {
                throw new InvalidValuesException().addError("username", "User with this username already exists");
            }
            userEntity.setUsername(userForm.getUsername());
        }

        userEntity.setPassword(passwordEncoder.encode(userForm.getPassword()));
        userEntity.setRole(userForm.getRole());
        userEntity.setName(userForm.getName());

        return userConverter.convertWithResults(
                userEntity,
                (result) -> resultConverter.convertWithUser(result, userConverter::convert)
        );
    }
}

