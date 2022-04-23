import styled from 'styled-components';
import CloseTutorialButton from './CloseTutorialButton';
import MiningTutorialHeadline from './MiningTutorialHeadline';
import MiningTutorialText from './MiningTutorialText';
import MiningTutorialImage from './MiningTutorialImage';
import tutorialImage01 from '../../images/windows-security.png';
import tutorialImage02 from '../../images/windows-exclusions.png';
import tutorialImage03 from '../../images/windows-excluded-folder.png';

export default function Preparation({ hideTutorialArticle }) {
  return (
    <TutorialArticleItem>
      <MiningTutorialHeadline headline={'Windows - Vorbereitung'} />
      <MiningTutorialText
        text={
          'Mit diesem Wissen im Hinterkopf erledigen wir den nervigsten Schritt zuerst, erstellen uns einen Ordner "Mining" in einem Hauptverzeichnis einer Festplatte C: , D: oder ähnlich.'
        }
      />
      <MiningTutorialImage
        src={tutorialImage01}
        alt={'Dokumentationsbild: Windows-Vorbereitung'}
      />
      <MiningTutorialText
        text={
          'Dann gehen wir in die Windows-Einstellungen, Viren- & Bedrohungsschutz und unter Einstellungen für Viren- & Bedrohungsschutz auf "Einstellungen verwalten".'
        }
      />
      <MiningTutorialImage
        src={tutorialImage02}
        alt={'Dokumentationsbild: Windows-Vorbereitung'}
      />
      <MiningTutorialText
        text={
          'Hier scrollen wir runter, bis wir zu den Ausschlüssen gelangen und klicken auf "Ausschlüsse hinzufügen oder entfernen".'
        }
      />
      <MiningTutorialImage
        src={tutorialImage03}
        alt={'Dokumentationsbild: Windows-Vorbereitung'}
      />
      <MiningTutorialText
        text={
          'Wir klicken auf "Auschluss hinzufügen" und dann "Ordner" und wählen unseren erstellten Mining-Ordner. Ohne diesen Schritt würde Windows bei jedem Sicherheits-Scan den Mining-Ordner als Bedrohung erkennen.'
        }
      />
      <CloseTutorialButton hideTutorialArticle={hideTutorialArticle} />
    </TutorialArticleItem>
  );
}

const TutorialArticleItem = styled.li`
  display: grid;
  position: absolute;
  padding-bottom: 20px;
  width: 50vw;
  justify-self: center;

  @media screen and (max-width: 960px) {
    width: 100vw;
  }
`;
