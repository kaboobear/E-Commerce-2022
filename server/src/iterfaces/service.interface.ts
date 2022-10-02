import { Repository } from 'typeorm';

interface Service<T> {
  repository: Repository<T>;
}

export { Service };
