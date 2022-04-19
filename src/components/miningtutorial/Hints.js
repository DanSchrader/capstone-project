import styled from 'styled-components';
import TextSeparator from '../TextSeparator';
import MiningTutorialHeadline from '../MiningTutorialHeadline';
import MiningTutorialText from '../MiningTutorialText';

export default function Hints() {
  return (
    <TutorialArticleItem id={'hints'}>
      <MiningTutorialHeadline headline={'Hinweise vorab'} />
      <MiningTutorialText
        text={
          'Transparenterweise sei erstmal erwähnt, dass Raptoreum-Mining - wie auch das Mining der meisten anderen Coins - in Deutschland aktuell NICHT profitabel ist.'
        }
      />
      <MiningTutorialText
        text={
          'Die Strompreise sind hoch und die Werte der meisten Kryptowährungen aufgrund von Marktkorrekturen und politischen Auslösern drastisch gefallen.'
        }
      />
      <MiningTutorialText
        text={
          'Minen sollte zur Zeit nur, wer an die Zukunft des Coins glaubt, den er minen möchte. Aufgrund der Ethereum-Umstellung auf PoS, kann CPU-Mining jedoch durchaus profitabel werden. Es ist eine Frage der eigenen Einschätzung und jedermanns eigenes Risiko.'
        }
      />
      <TextSeparator />
    </TutorialArticleItem>
  );
}

const TutorialArticleItem = styled.li`
  display: grid;
  position: absolute;
`;
