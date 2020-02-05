package lt.ocirama.labsystem.services;

import lt.ocirama.labsystem.converters.SampleConverter;
import lt.ocirama.labsystem.converters.SampleEntityConverter;
import lt.ocirama.labsystem.model.SampleEntity;
import lt.ocirama.labsystem.model.dto.Sample;
import lt.ocirama.labsystem.model.dto.SampleSave;
import lt.ocirama.labsystem.repositories.SampleRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SampleService {
    private final SampleConverter sampleConverter;
    private final SampleEntityConverter sampleEntityConverter;
    private final SampleRepository sampleRepository;

    public SampleService(SampleConverter sampleConverter, SampleEntityConverter sampleEntityConverter, SampleRepository sampleRepository) {
        this.sampleConverter = sampleConverter;
        this.sampleEntityConverter = sampleEntityConverter;
        this.sampleRepository = sampleRepository;
    }


    public List<Sample> getAll() {
        List<SampleEntity> samples = sampleRepository.findAll();

        return sampleConverter.convert(samples);
    }

    public Sample getSample(Integer id) {
        SampleEntity sample = sampleRepository.findOneById(id);

        return sampleConverter.convert(sample);
    }

    public Sample save(SampleSave sample) {
        SampleEntity sampleEntity = sampleEntityConverter.convert(sample);
        SampleEntity result = sampleRepository.save(sampleEntity);

        return sampleConverter.convert(result);
    }

    public void delete(Integer id) {
        sampleRepository.deleteById(id);
    }
}
