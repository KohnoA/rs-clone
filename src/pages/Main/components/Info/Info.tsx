import styles from './Info.module.scss';

const Info: React.FC = () => {
  return (
    <div className={ styles.component }>
      <h3 className={ styles.title }>What is IEAT?</h3>

      <div className={ styles.wrapper }>
        <div>
          <div>Image</div>
          <div>Sub title</div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tempora fugit provident quae, dolorum consequuntur placeat, cum impedit perspiciatis ullam aperiam obcaecati. Deserunt veritatis inventore, modi molestias nemo accusantium repellendus.</p>
        </div>

        <div>
          <div>Image</div>
          <div>Sub title</div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tempora fugit provident quae, dolorum consequuntur placeat, cum impedit perspiciatis ullam aperiam obcaecati. Deserunt veritatis inventore, modi molestias nemo accusantium repellendus.</p>
        </div>
        
        <div>
          <div>Image</div>
          <div>Sub title</div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tempora fugit provident quae, dolorum consequuntur placeat, cum impedit perspiciatis ullam aperiam obcaecati. Deserunt veritatis inventore, modi molestias nemo accusantium repellendus.</p>
        </div>
      </div>
    </div>
  );
}

export default Info;