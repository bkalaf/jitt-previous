import { useContxt } from '../hooks/useContxt';
import { FileSystemContext } from './FileSystemContext';

// console.log('normalize', path.normalize('C:\\Users\\bobby\\OneDrive\\Desktop\\Code\\jitt\\package.json'))
// console.log('resolve', path.resolve('C:\\Users\\bobby\\OneDrive\\Desktop\\Code\\jitt\\package.json'))
// console.log('parse', path.parse('C:/Users/bobby/OneDrive/Desktop/Code/jitt/package.json'))

export function useFileSystem() {
    return useContxt('FileSystemContext', FileSystemContext);
}
