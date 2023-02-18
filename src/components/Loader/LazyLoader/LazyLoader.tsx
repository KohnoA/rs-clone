import { useState, useRef, useEffect } from 'react';
import LoaderFav from '../LoaderFav/LoaderFav';
import styles from './LazyLoader.module.scss';

export interface ILazyLoader {
    src?: string;
    alt: string;
    className?: string
    onLoad?(): void;
}

const LazyLoader: React.FC<ILazyLoader> = (props: ILazyLoader) => {
    const {src, alt='', className} = props;
    const [isLoading, setIsLoading] = useState(true)
    const imgRef = useRef<HTMLImageElement | null>(null)

    useEffect(() => {
      if(imgRef.current) {
        imgRef.current.onload = () => setIsLoading(false)
      }
    }, [])
    
    return (
        <div className={styles.loader__wrapper}>
            {isLoading && <LoaderFav/>}
           <img className={className} ref={imgRef} src={src} alt={alt}/> 
        </div>
    );
};

export default LazyLoader;