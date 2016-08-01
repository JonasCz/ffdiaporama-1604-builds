<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="fr_FR">
<context>
    <name>0010</name>
    <message>
        <location filename="fake/fake.cpp" line="3"/>
        <source>How ffDiaporama works</source>
        <translation>Principes de fonctionnement de ffDiaporama</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="4"/>
        <source> This section contains general information on the concepts and methods of use of ffDiaporama </source>
        <translation> Cette section contient des informations générales sur les concepts et les méthodes d&apos;utilisation de ffDiaporama</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="5"/>
        <source>Index</source>
        <translation>Sommaire</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="6"/>
        <source>Functional principles</source>
        <oldsource>&lt;a href=&quot;0011.html&quot;&gt;Functional principles&lt;/a&gt;</oldsource>
        <translation>Principes de fonctionnement de ffDiaporama</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="7"/>
        <source>Predefined title slide</source>
        <oldsource>&lt;a href=&quot;0012.html&quot;&gt;Predefined title slide&lt;/a&gt;</oldsource>
        <translation>Diapositives titre prédéfinies</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="8"/>
        <source>The &quot;Visible&quot; property of blocks and the management of the breaks</source>
        <oldsource>&lt;a href=&quot;0014.html&quot;&gt;The &quot;Visible&quot; property of blocks and the management of the breaks&lt;/a&gt;</oldsource>
        <translation>La propriété « Visible » des blocs et la gestion des pauses</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="9"/>
        <source>All shots regulations versus current shot regulations</source>
        <oldsource>&lt;a href=&quot;0015.html&quot;&gt;All shots regulations versus current shot regulations&lt;/a&gt;</oldsource>
        <translation>Le réglage pour tous les plans et le réglage pour le plan en cours</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="10"/>
        <source>Style sheets</source>
        <translation>Les feuilles de style</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="11"/>
        <source>Dynamic variables</source>
        <translation>Les variables dynamiques</translation>
    </message>
</context>
<context>
    <name>0011</name>
    <message>
        <location filename="fake/fake.cpp" line="12"/>
        <location filename="fake/fake.cpp" line="13"/>
        <source>Functional principles</source>
        <translation>Principes de fonctionnement de ffDiaporama</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="14"/>
        <source>The main control element of ffDiaporama is the timeline. The timeline lists the slides which compose the project.</source>
        <translation>L’élément principal dans ffDiaporama est la barre de temps. La barre de temps liste les diapositives qui composent le projet.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="15"/>
        <source>It consists of 3 tracks: </source>
        <translation>Elle est constituée de 3 pistes :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="16"/>
        <source>the background track</source>
        <translation>La piste d’arrière plan</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="17"/>
        <source>the mounting track</source>
        <translation>La piste du montage</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="18"/>
        <source>and the music track.</source>
        <translation>Et la piste musical.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="19"/>
        <source>The slides</source>
        <translation>Les diapositives</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="20"/>
        <source>Slides are shown one after another, in the order in which they appear in the time line.</source>
        <translation>Les diapositives sont affichées les unes après les autres, dans l’ordre dans lequel elles apparaissent dans la barre de temps.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="21"/>
        <source>The following diagram shows how slides function:</source>
        <translation>Le schéma suivant symbolise les principes de fonctionnement des diapositives :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="22"/>
        <source>The upper part of the diagram represents four slides: A, B, C and D. </source>
        <translation>Sur la partie haute du schéma sont représentées les diapositives A, B, C et D.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="23"/>
        <source>Each slide possesses an entering transition (symbolized on the diagram by a small rectangle labelled T). The transitions can have different durations (symbolized on the diagram by the lengths TA&apos;, TB&apos;, etc.): It is possible to define the duration of the entering transition for each slide separately (or to indicate no transition: duration=0).</source>
        <translation>Chaque diapositive possède une transition entrante (symbolisée sur le schéma par un petit carré T). Les transitions n’ont pas toute la même durée (symbolisée sur le schéma par les longueurs TB’, TC’, etc…) : il est en effet possible de définir diapositive par diapositive la durée de la transition entrante (ou bien d’indiquer pas de transition : durée=0).</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="24"/>
        <source>Each slide possesses a duration which is appropriate for it (symbolized on the diagram by the lengths B&apos;, C&apos;, etc.): Some last only a few seconds while others can last several minutes. The durations are expressed in seconds but are not necessarily whole numbers: a slide might last 12.234 seconds.</source>
        <translation>Chaque diapositive possède une durée qui lui est propre (symbolisée sur le schéma par les longueurs B’, C’, etc…): Certaines peuvent ne durer que quelques secondes alors que d’autres peuvent durer plusieurs minutes. Les durées sont exprimées en seconde mais ne sont pas forcément des valeurs entières : Une diapositive peut très bien durer 12,234 secondes.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="25"/>
        <source>Each slide is a composite, an assembly of one or more multimedia elements which are animated over time. The animation is realized through shots.</source>
        <translation>Chaque diapositive est une composition. C’est-à-dire un assemblage de un ou plusieurs éléments multimédia qui sont animés dans le temps. L’animation dans le temps est réalisée au travers de plan.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="26"/>
        <source>Each slide can define a new background (that is shown under the multimedia elements of the slide if they don&apos;t fill out the whole screen).</source>
        <translation>Chaque diapositive peut définir un nouvel arrière-plan (ce qui apparaît sous les éléments multimédia de la diapositive quand ils ne remplissent pas l’écran entier).</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="27"/>
        <source>Each slide can define a new musical play-list.</source>
        <translation>Chaque diapositive peut définir une nouvelle liste de lecture de fichiers musicaux.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="28"/>
        <source>Slides which do not define a background use the background defined in a previous slide. So in the following example: </source>
        <translation>Les diapositives qui ne définissent pas d’arrière-plan, utilisent l’arrière-plan défini dans une diapositive précédente. Ainsi dans l’exemple suivant :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="29"/>
        <source>Slide 1: Defines a background</source>
        <translation>Diapositive 1 – Définit un arrière-plan</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="30"/>
        <source>Slide 2: Does not define a background and therefore uses the background defined by slide 1</source>
        <translation>Diapositive 2 – Ne définit pas d’arrière-plan et utilise donc l’arrière-plan définit par la diapositive 1</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="31"/>
        <source>Slide 3: Does not define a background and therefore uses the background defined by slide 1</source>
        <translation>Diapositive 3 – Ne définit pas d’arrière-plan et utilise donc l’arrière-plan définit par la diapositive 1</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="32"/>
        <source>Slide 4: Defines a background</source>
        <translation>Diapositive 4 – Définit un arrière-plan</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="33"/>
        <source>Slide 5: Does not define a background and therefore uses the background defined by slide 4</source>
        <translation>Diapositive 5 – Ne définit pas d’arrière-plan et utilise donc l’arrière-plan définit par la diapositive 4</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="34"/>
        <source>The same principle applies to the musical play-lists. As long as slides do not define a new play-list, they use the last defined play-list.</source>
        <translation>Le même principe est appliqué aux listes de lecture des fichiers musicaux. Tant que les diapositives ne définissent pas de nouvelle liste de lecture, elles utilisent la dernière liste de lecture définie.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="35"/>
        <location filename="fake/fake.cpp" line="44"/>
        <location filename="fake/fake.cpp" line="57"/>
        <location filename="fake/fake.cpp" line="66"/>
        <source>Remarks:</source>
        <translation>A noter :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="36"/>
        <source>The total duration of the project is not equal to the sum of the durations of the slides because the transitions make the slides overlap: Two slides of 10 seconds, each with a transition of 1 second, will give a total duration for the project of 19 seconds (and not 20 seconds)!</source>
        <translation>La durée totale du montage n’est pas égale à la somme des durées des diapositives car les transitions font que les diapositives se chevauchent : Deux diapositives de 10 secondes possédant chacune une transition de 1 seconde donnera une durée totale pour le montage de 19 secondes (et non pas de 20 secondes) !</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="37"/>
        <source>Shots and blocks</source>
        <translation>Les plans et les blocs</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="38"/>
        <source>The lower part of the diagram represents the composition of slide C. </source>
        <translation>La partie basse du schéma représente la diapositive C.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="39"/>
        <source>Each slide comprises one or more shots. The shots are represented on the diagram by rectangles C1, C2, C3, etc...</source>
        <translation>Chaque diapositive est définie avec de 1 à plusieurs plans. Les plans sont symbolisés sur le schéma par les rectangles C1, C2, C3, etc…</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="40"/>
        <source>Each shot has its own duration (symbolized on the diagram by the lengths C1 &apos;, C2 &apos;, C3 &apos;, etc.). Some shots can last only seconds while others can last several minutes. Some shots can have a duration of zero. (The durations are expressed in seconds but are not necessarily whole numbers: A shot can very well last 12.234 seconds).</source>
        <translation>Chaque plan possède sa propre durée (symbolisée sur le schéma par les longueurs C1’, C2’, C3’, etc…). Certains plans peuvent ne durer que quelques secondes alors que d’autres peuvent durer plusieurs minutes. Certains plans peuvent avoir une durée égale à 0. (Les durées sont exprimées en seconde mais ne sont pas forcément des valeurs entières : Un plan peut très bien durer 12,234 secondes).</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="41"/>
        <source>The shots can contain several multimedia objects. The multimedia objects are integrated into blocks which can be of three types: title (containing only text), images (or photos), or video.</source>
        <translation>Les plans peuvent contenir plusieurs objets multimédia. Les objets multimédia sont intégrés dans des blocs qui peuvent être de type titre (ne contenir que du texte), de type image (ou photo) ou de type vidéo.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="42"/>
        <source>The blocks define where and how the multimedia object appears on the screen. Each block can have a different framing that defines what is visible from the multimedia object within the block.</source>
        <translation>Les blocs définissent où et comment les objets multimédia apparaîssent sur l’écran. Chaque bloc peut avoir un cadrage différent qui définit qu’elle partie de l’objet multimédia est visible.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="43"/>
        <source>The background of the shots is transparent. This means that if the image does not fill the whole screen, the background will appear.</source>
        <translation>Les plans sont transparents. C’est à dire que si l’image obtenue ne remplit pas tout l’écran, l’arrière-plan (fond d’écran) apparaîtra.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="45"/>
        <source>The shots define the arrangement of blocks (multimedia objects) at any given moment.</source>
        <translation>Les plans définissent l’organisation des blocs (objets multimédia) à un instant donné.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="46"/>
        <source>The shot animations are generated by the transformation of these arrangements from one shot to another.</source>
        <translation>Les animations de plans sont générées par la transformation des organisations d’un plan à un autre.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="47"/>
        <source>The lengths of the shot animations are defined by the shot durations.</source>
        <translation>Les durées des animations de plan sont définies par les durées des plans.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="48"/>
        <source>Specifically, if in the foreground, a block containing an image occupies the whole screen, and then in the following shot the same block occupies only a small part of the screen, then the animation will consist of the transformation of the image from the whole screen into that small part of the screen.</source>
        <translation>Concrètement, si dans le premier plan, une photo occupe tout l’écran, puis n’occupe qu’une petite partie de l’écran dans le plan suivant, alors l’animation consistera en la transformation de la photo de tout l’écran (plan précédent) vers la petite partie de l’écran (plan suivant).</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="49"/>
        <source>Example:</source>
        <translation>Exemple :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="50"/>
        <source>Let&apos;s have 3 shots within a slide:</source>
        <translation>Voici une diapositive qui comprend 3 plans :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="51"/>
        <source>Shot 1: Image using the whole screen: Duration=2 seconds.</source>
        <translation>Plan 1 : Photo occupant tout l’écran : Durée 2 secondes.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="52"/>
        <source>Shot 2: Image using only the bottom right screen quarter: Duration 3 seconds.</source>
        <translation>Plan 2 : Photo n’occupant que le quart inférieur droit de l’écran : Durée 3 secondes.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="53"/>
        <source>Shot 3: Image again using the whole screen: Duration=2 seconds.</source>
        <translation>Plan 3 : Photo occupant à nouveau tout l’écran : Durée 2 secondes.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="54"/>
        <source>Result:</source>
        <translation>Résultat : </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="55"/>
        <source>The image will be shown on the whole screen for 2 seconds, will shrink gradually over 3 seconds towards the right lower quarter of the screen, and then will grow again for 2 seconds until it once more occupies the whole screen.</source>
        <translation>La photo sera affichée sur tout l’écran pendant 2 secondes puis se réduira progressivement vers le quart inférieur droit de l’écran pendant 3 secondes puis s’agrandira jusqu’à occuper à nouveau tout l’écran pendant 2 secondes.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="56"/>
        <source>The slide will end as soon as the image has reached the position defined in shot 3.</source>
        <translation>La diapositive prendra fin dès que la photo aura atteint la position définie dans le plan 3.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="58"/>
        <source>The transformations are gradual: in the example you will see the image being gradually reduced.</source>
        <translation>Les transformations s’effectuent progressivement : Dans l’exemple vous verrez l’image se réduire progressivement.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="59"/>
        <source>The transformations are made over the whole duration of the following shot.</source>
        <translation>Les transformations s’effectuent durant toute la durée du plan suivant.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="60"/>
        <source>The framing definition of the objects in each block can vary from one shot to another. The following example shows three different definitions from the same block:</source>
        <translation>La définition des objets de chaque bloc peut varier d’un plan à l’autre : Dans l’exemple suivant, sont représentés trois définitions différentes d’un même bloc :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="61"/>
        <source>1st shot: The image is complete.</source>
        <translation>1er plan : L’image est entière.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="62"/>
        <source>2nd shot: The image is re-framed on the statue.</source>
        <translation>2eme plan : L’image est recadrée sur la statue.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="63"/>
        <source>3rd shot: The image is re-framed on the pedestrians.</source>
        <translation>3eme plan : L’image est recadrée sur les promeneurs.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="64"/>
        <source>If we apply these framing definitions to the previous 3 shots: </source>
        <translation>Si on applique ces définitions à l’exemple des 3 plans précédents :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="65"/>
        <source>The complete image will be shown on all the screen for 2 seconds, then it will be reduced gradually towards the right lower quarter of the screen over 3 seconds while zooming in on the statue, then it will grow again over 2 seconds until it once more occupies the whole screen while the &quot;camera&quot; moves towards the pedestrians.</source>
        <translation>La photo complète sera affichée sur tout l’écran pendant 2 secondes puis se réduira progressivement en zoomant sur la statue vers le quart inférieur droit de l’écran pendant 3 secondes puis s’agrandira jusqu’à occuper à nouveau tout l’écran en se déplaçant vers les promeneurs pendant 2 secondes.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="67"/>
        <source>ffDiaporama can manage up to several hundreds slides in a single project.</source>
        <translation>ffDiaporama peut gérer jusqu’à plusieurs centaines de diapositives dans un seul montage.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="68"/>
        <source>Each slide can consist of tens of shots.</source>
        <translation>Chaque diapositive peut être composée de plusieurs (dizaines) de plans.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="69"/>
        <source>Each slide can contain tens of blocks.</source>
        <translation>Chaque diapositive peut contenir plusieurs (dizaines) de blocs.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="70"/>
        <source>Blocks can be visible on some shots and invisible on other.</source>
        <translation>Les blocs peuvent être visibles sur certains plans et invisibles sur d’autres plans.</translation>
    </message>
</context>
<context>
    <name>0012</name>
    <message>
        <location filename="fake/fake.cpp" line="71"/>
        <source>Predefined title slide</source>
        <translation>Diapositives titre prédéfinies</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="72"/>
        <source> Predefined title slide are complete slides including formatting and animations. </source>
        <translation>Les diapositives titre prédéfinies sont des diapositives complètes incluant la mise en forme et les animations.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="73"/>
        <source>The main interest of these slides is to standardize the slides within a project or across projects. </source>
        <translation>L&apos;intérêt principal de ces diapositives est de normaliser des diapositives à l&apos;intérieur d&apos;un projet ou entre plusieurs projets.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="74"/>
        <source>ffDiaporama included many Predefined title slides, but you can also define your own Predefined title slides. </source>
        <translation>ffDiaporama comprend de nombreuses diapositives titre prédéfinis, mais vous pouvez également définir vos propres diapositives titre prédéfinis.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="75"/>
        <source>To do this, create a standard slide using the &lt;a href=&quot;0119.html&quot;&gt;Slide properties dialog box&lt;/a&gt; and save your slide as a model using: </source>
        <translation>Pour faire cela, créer une diapositive standard en utilisant la boîte de dialogue &lt;a href=&quot;0119.html&quot;&gt;Propriétés de la diapositive&lt;/a&gt; et enregistrer votre diapositive comme un modèle en utilisant la fonction :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="76"/>
        <source> Save as model function.</source>
        <translation> Enregistrer comme modèle.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="77"/>
        <source>Remarks:</source>
        <translation>A noter :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="78"/>
        <source>Predefined title slides are defined according to the following three categories: </source>
        <translation>Les diapositives titre prédéfinies sont définies comme faisant parties des trois catégories suivantes :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="79"/>
        <source>Project title</source>
        <translation>Titre de projet</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="80"/>
        <source>This type of slide is usually used early in the project as the opening credits. </source>
        <translation>Ce type de diapositive est généralement utilisé au début du projet comme générique d&apos;ouverture.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="81"/>
        <source>The texts variables that are used by the models of this slide type are based only on project information. For more information on project information, see: &lt;a href=&quot;0108.html&quot;&gt;Project properties dialog&lt;/a&gt;</source>
        <translation>Les variables de textes qui sont utilisées par les modèles de ce type de diapositive sont basées uniquement sur les informations du projet. Pour plus d&apos;informations sur les informations du projet, voir : Boite de dialogue de &lt;a href=&quot;0108.html&quot;&gt;Propriétés du projet&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="82"/>
        <source>Chapter title</source>
        <translation>Titre du chapitre</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="83"/>
        <source>This type of slide is usually used several times in the project to mark the beginning of the chapter. </source>
        <translation>Ce type de diapositive est généralement utilisé plusieurs fois dans le projet pour marquer le début des chapitres.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="84"/>
        <source>The texts variables that are used by the models of this slide type are based on project information and on chapter information.</source>
        <translation>Les variables de textes qui sont utilisées par les modèles de ce type de diapositive sont basées sur les informations du projet et sur les informations de chapitre.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="85"/>
        <source>Credit title</source>
        <translation>Générique</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="86"/>
        <source>This type of slide is usually used at the end of the project as the end credits. </source>
        <translation>Ce type de diapositive est généralement utilisé à la fin du projet comme générique de fin.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="87"/>
        <source>The texts variables that are used by the models of this slide type are generally computed. For more information on texts variables, see: &lt;a href=&quot;0013.html&quot;&gt;Dynamic variables&lt;/a&gt;</source>
        <translation>Les variables de textes qui sont utilisés par les modèles de ce type de diapositive sont généralement calculées. Pour plus d&apos;informations sur les variables de textes, voir: &lt;a href=&quot;0013.html&quot;&gt;Variables dynamiques&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="88"/>
        <source>Within each category, the predefined title slides are classified into the following types: </source>
        <translation>Dans chaque catégorie, les diapositives titre prédéfinis sont classées selon les sous-catégories suivantes :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="89"/>
        <source>Statics models</source>
        <translation>Titre sans animation</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="90"/>
        <source>This type lists statics models ie without animations.</source>
        <translation>Ce type liste les modèles statiques c&apos;est à dire sans animations.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="91"/>
        <source>Animated models</source>
        <translation>Titre animé</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="92"/>
        <source>This type lists animated models ie with several shots.</source>
        <translation>Ce type liste les modèles animés c&apos;est à dire contenant plusieurs plans.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="93"/>
        <source>Custom models</source>
        <translation>Titres personalisés</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="94"/>
        <source>This type lists the templates that you saved with the &lt;B&gt;&lt;I&gt;Save as model&lt;/I&gt;&lt;/B&gt; function of the &lt;a href=&quot;0119.html&quot;&gt;Slide properties&lt;/a&gt; dialog box.</source>
        <translation>Ce type liste les modèles que vous avez enregistré avec la fonction &lt;I&gt;&lt;B&gt;Enregistrer comme modèle&lt;/I&gt;&lt;/B&gt; de la boite de dialogue &lt;a href=&quot;0119.html&quot;&gt;Propriétés de la diapositive&lt;/a&gt;.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="95"/>
        <source>The resources used by the models you create are not moved. So, if you include a photo in a model, the model will only be valid until the picture will not move. This is why it is recommended, to think resources included before creating a new model.</source>
        <translation>Les ressources utilisés par les modèles que vous créez ne sont pas déplacées. Ainsi, si vous incluez une photo dans un modèle, le modèle ne sera valide que tant que la photo ne sera pas déplacée. C&apos;est pourquoi il est recommendé, de bien réflechir aux ressources incluses avant de créer un nouveau modèle.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="96"/>
        <source>It will always be possible to create slides from a model using the &lt;a href=&quot;0103.html&quot;&gt;Add or modify a predefined title slide dialog box&lt;/a&gt; then convert it to a standard slide using this function: </source>
        <translation>Il sera toujours possible de créer des diapositives à partir d&apos;un modèle en utilisant la boite de dialogue &lt;a href=&quot;0103.html&quot;&gt;Ajouter ou éditer une diapositive titre prédéfinie&lt;/a&gt; puis de convertir cette diapositive en diapositive standard à l&apos;aide de la fonction :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="97"/>
        <source> Convert to standard slide</source>
        <translation> Convertir en diapositive standard</translation>
    </message>
</context>
<context>
    <name>0013</name>
    <message>
        <location filename="fake/fake.cpp" line="98"/>
        <source>Dynamic variables</source>
        <translation>Les variables dynamiques</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="99"/>
        <source>The big interest of variables is that they are inserted into text (see: &lt;a href=&quot;0120.html&quot;&gt;Edit text dialog&lt;/a&gt;) and are transformed into values ​​only when they are used.</source>
        <oldsource>The big interest of variables is that they are inserted into text (see: &lt;a href=&quot;0120.html&quot;&gt;Edit text dialog&lt;/a&gt;) and are transformed into values ââonly when they are used.</oldsource>
        <translation>Le gros intérêts des variables est qu&apos;elles sont insérées dans des textes (voir: &lt;a href=&quot;0120.html&quot;&gt;Boite de dialogue Editer un text&lt;/a&gt;) et ne sont transformées en valeurs qu&apos;au moment où elles sont utilisées.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="100"/>
        <source>It&apos;s why variables are used in many parts of the application (slide, thumbnails, predefined titles slides, video tags, xbmc nfo, etc...)</source>
        <translation>C&apos;est pourquoi les variables sont utilisées dans de nombreuses parties de l&apos;application (diapositives, vignettes, diapositives titres prédéfinis, tags des vidéos, fichier nfo pour xbmc, etc ..)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="101"/>
        <source>The following table lists all the available variables:</source>
        <oldsource>The following table lists all the available variables: </oldsource>
        <translation>Le tableau ci-dessous répertorie toutes les variables disponibles :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="102"/>
        <source>Category</source>
        <translation>Catégorie</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="103"/>
        <source>Variable</source>
        <translation>Variable</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="104"/>
        <source>Content</source>
        <translation>Contenu</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="105"/>
        <source>Project properties values</source>
        <translation>Valeurs des propriétés du projet</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="106"/>
        <source>%PTT%</source>
        <translation>%PTT%</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="107"/>
        <source>Value of the &lt;B&gt;&lt;I&gt;Project title&lt;/I&gt;&lt;/B&gt; field of the &lt;a href=&quot;0108.html&quot;&gt;Project properties&lt;/a&gt;</source>
        <translation>Valeur du champ &lt;B&gt;&lt;I&gt;Titre du projet&lt;/I&gt;&lt;/B&gt; des &lt;a href=&quot;0108.html&quot;&gt;Propriétés du projet&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="108"/>
        <source>%PAU%</source>
        <translation>%PAU%</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="109"/>
        <source>Value of the &lt;B&gt;&lt;I&gt;Project author&lt;/I&gt;&lt;/B&gt; field of the &lt;a href=&quot;0108.html&quot;&gt;Project properties&lt;/a&gt;</source>
        <translation>Valeur du champ &lt;B&gt;&lt;I&gt;Auteur du projet&lt;/I&gt;&lt;/B&gt; des &lt;a href=&quot;0108.html&quot;&gt;Propriétés du projet&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="110"/>
        <source>%PAI%</source>
        <translation>%PAI%</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="111"/>
        <source>Value of the &lt;B&gt;&lt;I&gt;Project author&lt;/I&gt;&lt;/B&gt; field of the &lt;a href=&quot;0108.html&quot;&gt;Project properties&lt;/a&gt; displayed as &lt;U&gt;Author presents&lt;/U&gt;</source>
        <translation>Valeur du champ &lt;B&gt;&lt;I&gt;Auteur du projet&lt;/I&gt;&lt;/B&gt; des &lt;a href=&quot;0108.html&quot;&gt;Propriétés du projet&lt;/a&gt; affichée sous la forme &lt;U&gt;Auteur présente&lt;/U&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="112"/>
        <source>%PAP%</source>
        <translation>%PAP%</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="113"/>
        <source>Value of the &lt;B&gt;&lt;I&gt;Project author&lt;/I&gt;&lt;/B&gt; field of the &lt;a href=&quot;0108.html&quot;&gt;Project properties&lt;/a&gt; displayed as &lt;U&gt;A Author production&lt;/U&gt;</source>
        <translation>Valeur du champ &lt;B&gt;&lt;I&gt;Auteur du projet&lt;/I&gt;&lt;/B&gt; des &lt;a href=&quot;0108.html&quot;&gt;Propriétés du projet&lt;/a&gt; affichée sous la forme &lt;U&gt;Une production Auteur&lt;/U&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="114"/>
        <source>%PAL%</source>
        <translation>%PAL%</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="115"/>
        <source>Value of the &lt;B&gt;&lt;I&gt;Project album&lt;/I&gt;&lt;/B&gt; field of the &lt;a href=&quot;0108.html&quot;&gt;Project properties&lt;/a&gt;</source>
        <translation>Valeur du champ &lt;B&gt;&lt;I&gt;Album&lt;/I&gt;&lt;/B&gt; des &lt;a href=&quot;0108.html&quot;&gt;Propriétés du projet&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="116"/>
        <source>%PLN%</source>
        <translation>%PLN%</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="117"/>
        <source>Value of the &lt;B&gt;&lt;I&gt;Project location name&lt;/I&gt;&lt;/B&gt; field of the &lt;a href=&quot;0108.html&quot;&gt;Project properties&lt;/a&gt;</source>
        <translation>Valeur du champ &lt;B&gt;&lt;I&gt;Nom de la localisation&lt;/I&gt;&lt;/B&gt; des &lt;a href=&quot;0108.html&quot;&gt;Propriétés du projet&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="118"/>
        <source>%PLA%</source>
        <translation>%PLA%</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="119"/>
        <source>Value of the &lt;B&gt;&lt;I&gt;Project location address&lt;/I&gt;&lt;/B&gt; field of the &lt;a href=&quot;0108.html&quot;&gt;Project properties&lt;/a&gt;</source>
        <translation>Valeur du champ &lt;B&gt;&lt;I&gt;Adresse de la localisation&lt;/I&gt;&lt;/B&gt; des &lt;a href=&quot;0108.html&quot;&gt;Propriétés du projet&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="120"/>
        <source>%PCT%</source>
        <translation>%PCT%</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="121"/>
        <source>Value of the &lt;B&gt;&lt;I&gt;Project comment&lt;/I&gt;&lt;/B&gt; field of the &lt;a href=&quot;0108.html&quot;&gt;Project properties&lt;/a&gt;</source>
        <translation>Valeur du champ &lt;B&gt;&lt;I&gt;Commentaire&lt;/I&gt;&lt;/B&gt; des &lt;a href=&quot;0108.html&quot;&gt;Propriétés du projet&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="122"/>
        <source>%PDD%</source>
        <translation>%PDD%</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="123"/>
        <source>Duration of the project displayed as &lt;U&gt;hh:mm:ss&lt;/U&gt;</source>
        <translation>Durée du projet affichée sous la forme &lt;U&gt;hh:mm:ss&lt;/U&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="124"/>
        <source>%PSC%</source>
        <translation>%PSC%</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="125"/>
        <source>Project slide count (Number of slide in the project)</source>
        <translation>Nombre de diapositive dans le projet</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="126"/>
        <source>%PLD%</source>
        <translation>%PLD%</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="127"/>
        <source>Long date (The form of the display depends on geographical information provided by the computer, depending on the current language)</source>
        <translation>Date longue (La forme de l&apos;affichage dépend des informations géographiques renseignées sur l&apos;ordinateur, en fonction de la langue en cour)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="128"/>
        <source>%PSD%</source>
        <translation>%PSD%</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="129"/>
        <source>Short date (The form of the display depends on &lt;B&gt;&lt;I&gt;Short date format&lt;/I&gt;&lt;/B&gt; selected in the &lt;a href=&quot;0101.html&quot;&gt;Application options dialog&lt;/a&gt;)</source>
        <translation>Date courte (La forme de l&apos;affichage dépend du &lt;B&gt;&lt;I&gt;format de date courte&lt;/I&gt;&lt;/B&gt; sélectionné dans la boîte de dialogue &lt;a href=&quot;0101.html&quot;&gt;Options de l&apos;application&lt;/a&gt;)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="130"/>
        <source>%PYR%</source>
        <translation>%PYR%</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="131"/>
        <source>Year (The year of the event date as a four digit number)</source>
        <translation>Année (L&apos;année de la date de l&apos;événement sous la forme d&apos;un nombre à quatre chiffres)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="132"/>
        <source>%PMM%</source>
        <translation>%PMM%</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="133"/>
        <source>Month (The month of the event date as a name, depending on the current language: January, February, etc...)</source>
        <translation>Mois (Le mois de la date de l&apos;événement sous la forme d&apos;un nom, en fonction de la langue en cour: Janvier, Février, etc...)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="134"/>
        <source>%PMD%</source>
        <translation>%PMD%</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="135"/>
        <source>Month as number (The month of the event date as a two digit number)</source>
        <translation>Mois en chiffre (Le mois de la date de l&apos;événement sous la forme d&apos;un nombre à deux chiffres)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="136"/>
        <source>%PDY%</source>
        <translation>%PDY%</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="137"/>
        <source>Day (The day of the event date as a two digit number)</source>
        <translation>Jours (Le jours de la date de l&apos;événement sous la forme d&apos;un nombre à deux chiffres)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="138"/>
        <source>%PDW%</source>
        <translation>%PDW%</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="139"/>
        <source>Day of week (The day of week of the event date as a name, depending on the current language: Monday, Thuesday, etc...)</source>
        <translation>Jours de la semaine (Le jours de la semaine de la date de l&apos;événement sous la forme d&apos;un nom, en fonction de la langue en cour: Lundi, Mardi, etc...)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="140"/>
        <source>Current slide values</source>
        <translation>Valeurs de la diapositive en cour</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="141"/>
        <source>%CSN%</source>
        <translation>%CSN%</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="142"/>
        <source>Value of the &lt;B&gt;&lt;I&gt;Slide name&lt;/I&gt;&lt;/B&gt; field of the slide as defined in the &lt;U&gt;Slide settings zone&lt;/U&gt; of the &lt;a href=&quot;0119.html&quot;&gt;Slide properties dialog&lt;/a&gt;</source>
        <translation>Valeur du champ &lt;B&gt;&lt;I&gt;Titre de la diapositive&lt;/I&gt;&lt;/B&gt; tel que défini dans la zone &lt;U&gt;de réglage de la diapositive&lt;/U&gt; de la boite de dialogue &lt;a href=&quot;0119.html&quot;&gt;Propriétés de la diapositive&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="143"/>
        <source>%CSR%</source>
        <translation>%CSR%</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="144"/>
        <source>Current slide number</source>
        <translation>Numéro de la diapositive en cour</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="145"/>
        <source>Chapters values</source>
        <translation>Valeurs du chapitre en cour</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="146"/>
        <source>%CCN%</source>
        <translation>%CCN%</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="147"/>
        <source>Value of the &lt;B&gt;&lt;I&gt;Chapter name&lt;/I&gt;&lt;/B&gt; field of the latest slide which defined &lt;U&gt;Chapters information&lt;/U&gt;. (Chapters information may be defined in &lt;a href=&quot;0105.html&quot;&gt;Chapter properties dialog&lt;/a&gt; or in &lt;a href=&quot;0103.html&quot;&gt;Predefined title slide dialog&lt;/a&gt;).</source>
        <translation>Valeur du champ &lt;B&gt;&lt;I&gt;Nom du chapitre&lt;/I&gt;&lt;/B&gt; de la derniere diapositive définissant &lt;U&gt;Des informations de chapitrage&lt;/U&gt;. (Les informations de chapitrage sont définies soit dans la boite de dialogue &lt;a href=&quot;0105.html&quot;&gt;Propriétés du chapitrage&lt;/a&gt; soit dans la boite de dialogue &lt;a href=&quot;0103.html&quot;&gt;Ajouter ou éditer une diapositive titre prédéfinie&lt;/a&gt;).</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="148"/>
        <source>%CCR%</source>
        <translation>%CCR%</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="149"/>
        <source>Current chapter number</source>
        <translation>Numéro de chapitre en cour</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="150"/>
        <source>%CCI%</source>
        <translation>%CCI%</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="151"/>
        <source>Current chapter number displayed as &lt;U&gt;Chapter N°&lt;/U&gt; (depending on the current language)</source>
        <oldsource>Current chapter number displayed as &lt;U&gt;Chapter NÂ°&lt;/U&gt; (depending on the current language)</oldsource>
        <translation>Numéro de chapitre en cour affiché sous la forme &lt;U&gt;Chapitre N°&lt;/U&gt; (en fonction de la langue en cour)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="152"/>
        <source>%CCD%</source>
        <translation>%CCD%</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="153"/>
        <source>Current chapter duration</source>
        <translation>Durée du chapitre en cour</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="154"/>
        <source>%CCT%</source>
        <translation>%CCT%</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="155"/>
        <source>Chapter count (Number of chapter in the project)</source>
        <translation>Nombre de chapitre dans le projet</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="156"/>
        <source>%CLN%</source>
        <translation>%CLN%</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="157"/>
        <source>Current chapter location name (if one is defined or project&apos;s location name).</source>
        <translation>Nom de la localisation du chapitre (si une localisation est définie, sinon la localisation du projet).</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="158"/>
        <source>%CLA%</source>
        <translation>%CLA%</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="159"/>
        <source>Current chapter location address (if one is defined or project&apos;s location address).</source>
        <translation>Adresse de la localisation du chapitre (si une localisation est définie, sinon la localisation du projet).</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="160"/>
        <source>%CLD%</source>
        <translation>%CLD%</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="161"/>
        <source>Long date of the chapter (if one is defined or project&apos;s date). (The form of the display depends on geographical information provided by the computer, depending on the current language)</source>
        <translation>Date longue du chapitre (si une date est définie, sinon la date du projet). (La forme de l&apos;affichage dépend des informations géographiques renseignées sur l&apos;ordinateur, en fonction de la langue en cour)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="162"/>
        <source>%CSD%</source>
        <translation>%CSD%</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="163"/>
        <source>Short date of the chapter (if one is defined or project&apos;s date). (The form of the display depends on &lt;B&gt;&lt;I&gt;Short date format&lt;/I&gt;&lt;/B&gt; selected in the &lt;a href=&quot;0101.html&quot;&gt;Application options dialog&lt;/a&gt;)</source>
        <translation>Date courte du chapitre (si une date est définie, sinon la date du projet). (La forme de l&apos;affichage dépend du &lt;B&gt;&lt;I&gt;format de date courte&lt;/I&gt;&lt;/B&gt; sélectionné dans la boîte de dialogue &lt;a href=&quot;0101.html&quot;&gt;Options de l&apos;application&lt;/a&gt;)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="164"/>
        <source>%CYR%</source>
        <translation>%CYR%</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="165"/>
        <source>Year of the chapter&apos;s date (if one is defined or year of project&apos;s date), as a four digit number.</source>
        <translation>L&apos;année de la date du chapitre en cour (si une date est définie, sinon la date du projet) sous la forme d&apos;un nombre à quatre chiffres.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="166"/>
        <source>%CMM%</source>
        <translation>%CMM%</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="167"/>
        <source>Month of the chapter&apos;s date (if one is defined or month of project&apos;s date) as a name (depending on the current language: January, February, etc...)</source>
        <translation>Le mois de la date du chapitre en cour (si une date est définie, sinon la date du projet) sous la forme d&apos;un nom (en fonction de la langue en cour: Janvier, Février, etc...)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="168"/>
        <source>%CMD%</source>
        <translation>%CMD%</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="169"/>
        <source>Month of the chapter&apos;s date (if one is defined or month of project&apos;s date) as a two digit number.</source>
        <translation>Le mois de la date du chapitre en cour (si une date est définie, sinon la date du projet) sous la forme d&apos;un nombre à deux chiffres.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="170"/>
        <source>%CDY%</source>
        <translation>%CDY%</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="171"/>
        <source>Day of the chapter&apos;s date (if one is defined or day of project&apos;s date) as a two digit number.</source>
        <translation>Le jour de la date du chapitre en cour (si une date est définie, sinon la date du projet) sous la forme d&apos;un nombre à deux chiffres.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="172"/>
        <source>%CDW%</source>
        <translation>%CDW%</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="173"/>
        <source>Day of week of the chapter&apos;s date (if one is defined or day of project&apos;s date) as a a name (depending on the current language: Monday, Thuesday, etc...)</source>
        <translation>Le jour de la semaine de la date du chapitre en cour (si une date est définie, sinon la date du projet) sous la forme d&apos;un nom (en fonction de la langue en cour: Lundi, Mardi, etc...)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="174"/>
        <source>Various values</source>
        <translation>Valeurs diverses</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="175"/>
        <source>%FFD%</source>
        <translation>%FFD%</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="176"/>
        <source>ffDiaporama version as &lt;U&gt;ffDiaporama 1.7 (20130919)&lt;/U&gt;</source>
        <translation>Version de ffDiaporama sous la forme &lt;U&gt;ffDiaporama 1.7 (20130919)&lt;/U&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="177"/>
        <source>%CPY%</source>
        <translation>%CPY%</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="178"/>
        <source>Copyright of the project construct as &lt;U&gt;© Year - Author&lt;/U&gt; with &lt;B&gt;&lt;I&gt;Year&lt;/I&gt;&lt;/B&gt; is the year of today&apos;s date and &lt;B&gt;&lt;I&gt;Author&lt;/I&gt;&lt;/B&gt; is the value of the &lt;B&gt;&lt;I&gt;Project author&lt;/I&gt;&lt;/B&gt; field of the &lt;a href=&quot;0108.html&quot;&gt;Project properties&lt;/a&gt;</source>
        <oldsource>Copyright of the project construct as &lt;U&gt;Â© Year - Author&lt;/U&gt; with &lt;B&gt;&lt;I&gt;Year&lt;/I&gt;&lt;/B&gt; is the year of today&apos;s date and &lt;B&gt;&lt;I&gt;Author&lt;/I&gt;&lt;/B&gt; is the value of the &lt;B&gt;&lt;I&gt;Project author&lt;/I&gt;&lt;/B&gt; field of the &lt;a href=&quot;0108.html&quot;&gt;Project properties&lt;/a&gt;</oldsource>
        <translation>Copyright du project sous la forme &lt;U&gt;© Année - Auteur&lt;/U&gt; avec &lt;B&gt;&lt;I&gt;Année&lt;/I&gt;&lt;/B&gt; correspondant à l&apos;année d&apos;aujourd&apos;hui et &lt;B&gt;&lt;I&gt;Auteur&lt;/I&gt;&lt;/B&gt; correspondant à la valeur du champ &lt;B&gt;&lt;I&gt;Auteur du projet&lt;/I&gt;&lt;/B&gt; des &lt;a href=&quot;0108.html&quot;&gt;Propriétés du projet&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="179"/>
        <source>%END%</source>
        <translation>%END%</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="180"/>
        <source>The end (depending on the current language)</source>
        <translation>Fin (en fonction de la langue en cour)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="181"/>
        <source>%STA%</source>
        <translation>%STA%</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="182"/>
        <source>A full text composed of: Project done the &lt;U&gt;&lt;B&gt;&lt;I&gt;short date&lt;/I&gt;&lt;/B&gt;&lt;/U&gt; with «&lt;U&gt;&lt;B&gt;&lt;I&gt;ffDiaporama version&lt;/I&gt;&lt;/B&gt;&lt;/U&gt;» on a &lt;U&gt;&lt;B&gt;&lt;I&gt;Operating system&lt;/I&gt;&lt;/B&gt;&lt;/U&gt; (&lt;U&gt;&lt;B&gt;&lt;I&gt;Number of Core/CPU&lt;/I&gt;&lt;/B&gt;&lt;/U&gt; Core/CPU) computer.</source>
        <oldsource>A full text composed of: Project done the &lt;U&gt;&lt;B&gt;&lt;I&gt;short date&lt;/I&gt;&lt;/B&gt;&lt;/U&gt; with Â«&lt;U&gt;&lt;B&gt;&lt;I&gt;ffDiaporama version&lt;/I&gt;&lt;/B&gt;&lt;/U&gt;Â» on a &lt;U&gt;&lt;B&gt;&lt;I&gt;Operating system&lt;/I&gt;&lt;/B&gt;&lt;/U&gt; (&lt;U&gt;&lt;B&gt;&lt;I&gt;Number of Core/CPU&lt;/I&gt;&lt;/B&gt;&lt;/U&gt; Core/CPU) computer.</oldsource>
        <translation>Un texte complet composé de : Projet réalisé le &lt;U&gt;&lt;B&gt;&lt;I&gt;date courte&lt;/I&gt;&lt;/B&gt;&lt;/U&gt; avec «&lt;U&gt;&lt;B&gt;&lt;I&gt;version de ffDiaporama&lt;/I&gt;&lt;/B&gt;&lt;/U&gt;» sur un PC &lt;U&gt;&lt;B&gt;&lt;I&gt;Système d&apos;exploitation du PC&lt;/I&gt;&lt;/B&gt;&lt;/U&gt; (&lt;U&gt;&lt;B&gt;&lt;I&gt;Nomber de Core/CPU&lt;/I&gt;&lt;/B&gt;&lt;/U&gt; Core/CPU).</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="183"/>
        <source>%STP%</source>
        <translation>%STP%</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="184"/>
        <source>A full text composed of project statistics (Number of slides, project duration, list of chapters, list of musics, how many photo, vector images, videos and predefined title slides, etc...) </source>
        <translation>Un texte complet composé des statistiques du projet (Nombre de diapositive, durée du projet, liste des chapitres, liste des musiques, nombre de photo, de clip-art, de vidéo et de titre prédéfinis, etc...)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="185"/>
        <source>%STM%</source>
        <translation>%STM%</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="186"/>
        <source>A full text composed of list of musics</source>
        <translation>Un texte complet composé de la liste des musiques</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="187"/>
        <source>%TLD%</source>
        <translation>%TLD%</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="188"/>
        <source>Current date as long date format (The form of the display depends on geographical information provided by the computer, depending on the current language)</source>
        <translation>La date d&apos;aujourd&apos;hui en forme longue (La forme de l&apos;affichage dépend des informations géographiques renseignées sur l&apos;ordinateur, en fonction de la langue en cours)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="189"/>
        <source>%TSD%</source>
        <translation>%TSD%</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="190"/>
        <source>Current date as short date format (The form of the display depends on &lt;B&gt;&lt;I&gt;Short date format&lt;/I&gt;&lt;/B&gt; selected in the &lt;a href=&quot;0101.html&quot;&gt;Application options dialog&lt;/a&gt;)</source>
        <translation>La date d&apos;aujourd&apos;hui en forme courte (La forme de l&apos;affichage dépend du &lt;B&gt;&lt;I&gt;format de date courte&lt;/I&gt;&lt;/B&gt; sélectionné dans la boîte de dialogue &lt;a href=&quot;0101.html&quot;&gt;Options de l&apos;application&lt;/a&gt;)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="191"/>
        <source>%TYR%</source>
        <translation>%TYR%</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="192"/>
        <source>Current date&apos;s year as a four digit number</source>
        <translation>L&apos;année d&apos;aujourd&apos;hui sous la forme d&apos;un nombre à quatre chiffres</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="193"/>
        <source>%TMM%</source>
        <translation>%TMM%</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="194"/>
        <source>Current date&apos;s month as a name (depending on the current language: January, February, etc...)</source>
        <translation>Mois d&apos;aujourd&apos;hui sous la forme nom (en fonction de la langue en cour: Janvier, Février, etc...)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="195"/>
        <source>%TMD%</source>
        <translation>%TMD%</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="196"/>
        <source>Current date&apos;s month as as a two digit number</source>
        <translation>Le mois d&apos;aujourd&apos;hui sous la forme d&apos;un nombre à deux chiffres</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="197"/>
        <source>%TDY%</source>
        <translation>%TDY%</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="198"/>
        <source>Current date&apos;s day as a two digit number</source>
        <translation>Le jours d&apos;aujourd&apos;hui sous la forme d&apos;un nombre à deux chiffres</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="199"/>
        <source>%TDW%</source>
        <translation>%TDW%</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="200"/>
        <source>Current date&apos;s day of week as a a name (depending on the current language: Monday, Thuesday, etc...)</source>
        <translation>Jours de la semaine d&apos;aujourd&apos;hui sous la forme d&apos;un nom (en fonction de la langue en cour: Lundi, Mardi, etc...)</translation>
    </message>
</context>
<context>
    <name>0014</name>
    <message>
        <location filename="fake/fake.cpp" line="201"/>
        <source>The &quot;Visible&quot; property of blocks and the management of the breaks</source>
        <translation>La propriété « Visible » des blocs et la gestion des pauses</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="202"/>
        <source>Blocks have a visible/invisible property. In the following example, the one image is inserted 3 times (in 3 different blocks) into the same slide.</source>
        <translation>Les blocs possèdent une propriété Visible ou invisible. Dans l’exemple suivant, l’image est insérée 3 fois (dans 3 blocs) dans la même diapositive.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="203"/>
        <source>The first block consists of the whole image filling the whole screen</source>
        <translation>Le premier bloc défini l’image entière remplissant tout l’écran</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="204"/>
        <source>The second block consists of the image re-framed on the statue and positioned in an ellipse at the right of the screen</source>
        <translation>Le deuxième bloc défini l’image recadrée sur la statue et positionnée sous forme d’ellipse dans la partie droite de l’écran</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="205"/>
        <source>The third block consists of the image re-framed on the pedestrians and also positioned in an ellipse at the right of the screen</source>
        <translation>Le troisième bloc défini l’image recadrée sur les marcheurs et positionnée également sous forme d’ellipse dans la partie droite de l’écran</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="206"/>
        <source>The statue and the pedestrians have their visibility property set to invisible on the 1st shot.</source>
        <translation>La statue et les marcheurs ont leur propriété positionné sur invisible sur le 1er plan.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="207"/>
        <source>Then the statue becomes visible on the 2nd shot.</source>
        <translation>Puis la statue devient visible sur le 2eme plan.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="208"/>
        <source>Finally, the statue once more becomes invisible on the 3rd shot and the pedestrians become visible.</source>
        <translation>Enfin, la statue redevient invisible sur le 3eme plan et les marcheurs deviennent visibles.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="209"/>
        <source>Result:</source>
        <translation>Résultat : </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="210"/>
        <source>For 2 seconds, the 1st shot is shown and we see only the whole image which occupies all the screen</source>
        <translation>Pendant 2 secondes, le 1er plan est affiché et on ne voit que l’image entière qui occupe tout l’écran</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="211"/>
        <source>Over the next 2 seconds, the statue appears</source>
        <translation>Les 2 secondes suivantes, la statue apparaît</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="212"/>
        <source>Over a further 2 seconds, the statue is replaced by the pedestrians</source>
        <translation>Les 2 secondes encore suivantes, la statue est remplacée par les marcheurs</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="213"/>
        <source>This example is really very simple, because it is also possible to animate the appearance and the disappearance of blocks.</source>
        <translation>Cet exemple est vraiment très simple, car il est également possible d’animer l’apparition et la disparition des blocs.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="214"/>
        <source>Indeed, as shown previously, animations are generated by the transformation of the arrangement from one shot to another.</source>
        <translation>En effet, comme évoqué précédemment, les animations de plans sont générées par la transformation des organisations d’un plan à un autre.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="215"/>
        <source>So, if on the 1st shot, the statue occupied the left lower quarter of the screen rather than the same position as on the 2nd shot, then instead of simply appearing for 2 seconds on the 2nd shot, it would appear by growing out of the left lower quarter of the screen.</source>
        <translation>Ainsi, si sur le 1er plan, la statue occupait le petit coin inférieur gauche de l’écran au lieu de la même position que sur le 2eme plan, alors au lieu de simplement apparaître pendant 2 secondes sur le 2eme plan, elle apparaîtrait en s’agrandissant depuis le petit coin inférieur gauche de l’écran.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="216"/>
        <source>Using videos:</source>
        <translation>Utilisation de vidéos :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="217"/>
        <source>You should note that videos are paused when they are invisible.</source>
        <translation>A noter que dans le cas de vidéos, celles-ci sont mises en pause quand elles sont invisibles.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="218"/>
        <source>Therefore a video can be displayed for several seconds in the 1st shot, then be made invisible and thus paused in a 2nd shot, then be visible in a 3rd shot and resume playing, from where it stopped at the end of the 1st shot.</source>
        <translation>Ainsi, une vidéo peut être diffusée pendant quelques secondes dans un 1er plan, puis être passée en invisible et donc en pause dans un second plan, puis repasser visible sur un 3eme plan et reprendre sa diffusion, là où elle en était restée à la fin du 1er plan.</translation>
    </message>
</context>
<context>
    <name>0015</name>
    <message>
        <location filename="fake/fake.cpp" line="219"/>
        <source>All shots regulations versus current shot regulations</source>
        <oldsource>How ffDiaporama works: All shots regulations versus current shot regulations</oldsource>
        <translation>Les réglages pour tous les plans et les réglages pour le plan en cour</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="220"/>
        <source>There are two types of settings in the &lt;a href=&quot;0119.html&quot;&gt;Slide properties dialog&lt;/a&gt;:</source>
        <translation>Il existe deux types de paramètres dans la boîte de dialogue &lt;a href=&quot;0119.html&quot;&gt;Propriétés de la diapositive&lt;/a&gt; :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="221"/>
        <source>&lt;B&gt;The settings which apply to the current shot.&lt;/B&gt; These settings are made shot by shot. So, every shot possesses its own settings and the passage from a shot to the other one is defined by the passage from one setting to an other one creating a shot animation: these are called Ken Burns effects. Here are some some: </source>
        <translation>&lt;B&gt;Les réglages qui s’appliquent au plan en cour.&lt;/B&gt;  Ces réglages d’images sont effectués plan par plan. Ainsi, chaque plan possède ses propres réglages et le passage d’un plan à un autre défini le passage d’un réglage à un autre créant une animation de plan : c’est ce qu’on appel des effets Ken Burns. En voici quelques uns :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="222"/>
        <source>Zoom on a portion of the image</source>
        <translation>Zoom sur une portion de l’image</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="223"/>
        <source>Scrolling from a portion of the image to an other one</source>
        <translation>Scrolling d’une portion de l’image à une autre</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="224"/>
        <source>Clarification or darkening of a portion of the image</source>
        <translation>Éclaircissement ou assombrissement d’une portion de l’image</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="225"/>
        <location filename="fake/fake.cpp" line="229"/>
        <source>etc...</source>
        <translation>etc...</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="226"/>
        <source>&lt;B&gt;The settings which apply to all shots.&lt;/B&gt; These settings are made globally, that is their effects will be visible on all the shots of the slide. Here are some: </source>
        <oldsource>&lt;B&gt;The settings which apply to all shots.&lt;/B&gt; These settings are made globally, that is their effects will be visible on all the shots of the slide. Here are some some: </oldsource>
        <translation>&lt;B&gt;Les réglages qui s’appliquent à tous les plans.&lt;/B&gt; Ces réglages d’images sont effectués globalement, c’est à dire que leurs effets seront visibles sur tous les plans de la diapositive. En voici quelques uns : </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="227"/>
        <source>Text and text format</source>
        <translation>Texte et format de texte</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="228"/>
        <source>Shape form</source>
        <oldsource>Blur/Sharpen</oldsource>
        <translation>Forme des blocs</translation>
    </message>
</context>
<context>
    <name>0016</name>
    <message>
        <location filename="fake/fake.cpp" line="230"/>
        <source>Style sheets</source>
        <translation>Les feuilles de style</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="231"/>
        <source>ffDiaporama uses a style sheet system to facilitate the settings for various things.</source>
        <translation>ffDiaporama utilise un système de feuille de style pour faciliter le réglage de nombreuses choses.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="232"/>
        <source>Style sheets exist for:</source>
        <translation>Ainsi, les feuilles de styles existent pour :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="233"/>
        <source>Controlling the block coordinates, including the parameters of size, position and block rotation, and also the framing style.</source>
        <translation>Le réglage des coordonnées des blocs qui inclue les paramètres de tailles, positions et rotations des blocs, mais aussi le style de cadrage des images.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="234"/>
        <source>Controlling the block shape, which includes the parameters of form, opacity, shadow and block borders.</source>
        <translation>Le réglage de la forme des blocs qui inclue les paramètres de formes, d’opacité, d’ombre et de bordure des blocs.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="235"/>
        <source>Controlling image framing, which includes the parameters of geometrical constraint and size.</source>
        <translation>Le réglage du cadrages des images qui inclue les paramètres de contrainte géométrique et de taille.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="236"/>
        <source>Formatting text, which includes the parameters of font, character attributes, alignment and text shadow.</source>
        <translation>Le réglage des textes qui inclue les paramètres de police de caractère, d’attribut de caractère, d’alignement de texte et d’ombre.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="237"/>
        <source>Controlling text background, which includes the parameters of background (color, brush, etc.).</source>
        <translation>Le réglage d’arrière plan des textes qui inclue les paramètres d’arrière plan (couleur, brosse, etc …).</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="238"/>
        <source> Open the style menu:</source>
        <translation>Appel le menu des styles :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="239"/>
        <source>The first part of the menu lists the known styles. </source>
        <translation>La première partie du menu liste les styles connus. </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="240"/>
        <source>If the current settings correspond to a known style, this style is marked with an asterisk.</source>
        <translation>Si les réglages actuels correspondent à un style connu, celui-ci apparaît précédé d’une *.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="241"/>
        <source>The standard styles of ffDiaporama are marked with this icon: </source>
        <oldsource>The standard styles of ffDiaporama are marked with the </oldsource>
        <translation>Les styles standards de ffDiaporama apparaissent précédé de cette icône :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="242"/>
        <source>Standard styles that you have modified and styles which you created are marked with this icon: </source>
        <oldsource>Standard styles that you have modified and styles which you created are marked with the </oldsource>
        <translation>Les styles standards que vous avez modifié et les styles que vous avez créés apparaissent précédé de cette icône : </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="243"/>
        <source>The second part of the menu allows you to modify the style list. </source>
        <translation>La deuxième partie du menu vous permet de modifier la liste des styles.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="244"/>
        <source>Create a new style: allows you to create a new style with the current settings. When you select this option, a dialog appears asking you to name the new style.</source>
        <translation>Créer un nouveau style : Permet d’enregistrer un nouveau style avec les réglages actuels. Quand vous sélectionnez cette option, une boite apparaît vous demandant de nommer le nouveau style.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="245"/>
        <source>Modify an existing style: allows you to change the settings of an existing style by using the current settings. When you select this option, the list of known styles appears. Select the style to be modified.</source>
        <translation>Modifier un style existant : Permet de changer les réglages d’un style existant en utilisant les réglages actuels. Quand vous sélectionnez cette option, la liste des styles connus apparaît. Sélectionner le style à modifier.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="246"/>
        <source>Manage styles: opens the Manage style dialog.</source>
        <translation>Gérer les styles : Permet d’appeler la boite de dialogue de Gestion des styles.</translation>
    </message>
</context>
<context>
    <name>0020</name>
    <message>
        <location filename="fake/fake.cpp" line="247"/>
        <source>Interface description</source>
        <translation>Description de l’interface</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="250"/>
        <source>The main window</source>
        <translation>La fenêtre principale</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="251"/>
        <source>The toolbar</source>
        <translation>La barre d’outils</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="252"/>
        <source>The timeline</source>
        <translation>La barre de temps</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="255"/>
        <source>Configuration dialog boxes</source>
        <translation>Boites de dialogues de configuration</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="257"/>
        <source>Manage devices</source>
        <translation>Gérer les profils de génération</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="261"/>
        <source>Editing dialog boxes</source>
        <translation>Boites de dialogues d&apos;édition</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="266"/>
        <source>Chapter properties</source>
        <translation>Propriétés du chapitre</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="272"/>
        <source>Add or modify a location</source>
        <translation>Ajouter ou modifier une localisation</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="273"/>
        <source>Cut a sound file</source>
        <translation>Couper un fichier musical</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="274"/>
        <source>Dialog boxes related to the project</source>
        <translation>Boites de dialogues relatives au projet</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="277"/>
        <source>Export project</source>
        <translation>Exporter le projet</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="275"/>
        <source>Project properties</source>
        <translation>Propriétés du projet</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="278"/>
        <source>Various dialog boxes</source>
        <translation>Boites de dialogues diverses</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="279"/>
        <source>Select files</source>
        <translation>Sélectionner des fichiers</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="280"/>
        <source>File information</source>
        <translation>Information sur le fichier</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="281"/>
        <source>Manage favorite</source>
        <translation>Gérer les favoris</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="282"/>
        <source>Manage style</source>
        <translation>Gestion des styles</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="267"/>
        <source>Music properties</source>
        <translation>Propriétés de la musique</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="276"/>
        <source>Render video</source>
        <translation>Générer le film</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="259"/>
        <source>Ruler properties</source>
        <translation>Propriétés des guides</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="263"/>
        <source>Slide properties</source>
        <translation>Propriétés de la diapositive</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="271"/>
        <source>Edit text</source>
        <translation>Editer le texte</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="254"/>
        <source>Dialog boxes</source>
        <oldsource> Dialog boxes </oldsource>
        <translation>Les boites de dialogue</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="248"/>
        <source> This section contains information about using ffDiaporama. </source>
        <translation> Cette section contient des informations sur l&apos;utilisation ffDiaporama.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="249"/>
        <source>Index</source>
        <translation>Sommaire</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="256"/>
        <source>Application options</source>
        <oldsource> &lt;a href=&quot;0101.html&quot;&gt;Application options&lt;/a&gt;</oldsource>
        <translation>Options de l&apos;application</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="262"/>
        <source>Add or modify a predefined title slide</source>
        <oldsource> &lt;a href=&quot;0103.html&quot;&gt;Add or modify a predefined title slide&lt;/a&gt;</oldsource>
        <translation>Ajouter ou éditer une diapositive titre prédéfinie</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="265"/>
        <source>Background properties</source>
        <oldsource> &lt;a href=&quot;0104.html&quot;&gt;Background properties&lt;/a&gt;</oldsource>
        <translation>Propriétés de l&apos;arrière plan</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="258"/>
        <source>Check configuration</source>
        <oldsource> &lt;a href=&quot;0106.html&quot;&gt;Check configuration&lt;/a&gt;</oldsource>
        <translation>Vérification de la configuration</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="270"/>
        <source>Correct, reframe or cut image or video</source>
        <oldsource> &lt;a href=&quot;0110.html&quot;&gt;Correct, reframe or cut image or video&lt;/a&gt;</oldsource>
        <translation>Recadrer, corriger et/ou couper une image ou une vidéo</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="260"/>
        <source>Edit thumbnail model</source>
        <oldsource> &lt;a href=&quot;0117.html&quot;&gt;Edit thumbnail model&lt;/a&gt;</oldsource>
        <translation>Modifier un modèle de vignette</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="264"/>
        <source>Set first shot duration for a set of slides</source>
        <oldsource> &lt;a href=&quot;0118.html&quot;&gt;Set first shot duration for a set of slides&lt;/a&gt;</oldsource>
        <translation>Définir la durée du 1er plan pour un groupe de diapositive</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="269"/>
        <source>Select transition duration for a set of slides</source>
        <oldsource> &lt;a href=&quot;0121.html&quot;&gt;Select transition duration for a set of slides&lt;/a&gt;</oldsource>
        <translation>Définir la durée des transitions pour un groupe de diapositive</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="268"/>
        <source>Transition properties</source>
        <oldsource> &lt;a href=&quot;0122.html&quot;&gt;Transition properties&lt;/a&gt;</oldsource>
        <translation>Propriétés de la transition</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="253"/>
        <source>The multimedia file browser</source>
        <oldsource> &lt;a href=&quot;0024.html&quot;&gt;The multimedia file browser&lt;/a&gt;</oldsource>
        <translation>L’explorateur de fichiers multimédia</translation>
    </message>
</context>
<context>
    <name>0021</name>
    <message>
        <location filename="fake/fake.cpp" line="283"/>
        <source>The main window</source>
        <translation>La fenêtre principale</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="284"/>
        <source>The main window of ffDiaporama allows all the common tasks of slide management.</source>
        <translation>La fenêtre principale de ffDiaporama permet d’effectuer toutes les tâches courantes de gestion des diapositives.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="285"/>
        <source>The general principle is:</source>
        <translation>Le principe général est :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="287"/>
        <source>Organize slides</source>
        <translation>Organiser les diapositives</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="288"/>
        <source>Adjust slides and create animations</source>
        <translation>Ajuster les diapositives et créer des animations</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="289"/>
        <source>To manage slides, ffDiaporama provides three display modes:</source>
        <translation>Pour gérer les diapositives, ffDiaporama propose trois modes d’affichages :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="290"/>
        <source>File mode</source>
        <translation>Le mode fichier</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="291"/>
        <location filename="fake/fake.cpp" line="305"/>
        <source>In this mode, the main window is divided into 3 zones: </source>
        <translation>Dans ce mode, la fenêtre principale est découpée en 3 zones :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="292"/>
        <location filename="fake/fake.cpp" line="299"/>
        <location filename="fake/fake.cpp" line="306"/>
        <source>The &lt;a href=&quot;0022.html&quot;&gt;toolbar&lt;/a&gt; and menu at the top</source>
        <oldsource>The toolbar and menu at the top</oldsource>
        <translation>La &lt;a href=&quot;0022.html&quot;&gt;barre de bouton&lt;/a&gt; et de menu en haut</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="286"/>
        <source>Add files and titles to the &lt;a href=&quot;0023.html&quot;&gt;timeline&lt;/a&gt; in the form of slides</source>
        <translation>Ajouter des fichiers et des titres dans la &lt;a href=&quot;0023.html&quot;&gt;barre de temps&lt;/a&gt; sous forme de diapositive</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="293"/>
        <location filename="fake/fake.cpp" line="300"/>
        <location filename="fake/fake.cpp" line="307"/>
        <source>The &lt;a href=&quot;0023.html&quot;&gt;timeline&lt;/a&gt;</source>
        <translation>La &lt;a href=&quot;0023.html&quot;&gt;barre de temps&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="294"/>
        <source>The &lt;a href=&quot;0024.html&quot;&gt;multimedia file browser&lt;/a&gt;</source>
        <translation>L’&lt;a href=&quot;0024.html&quot;&gt;explorateur de fichiers multimédia&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="295"/>
        <source> In this mode, you can display the multimedia files present on your hard disks and insert them using Drag &amp; Drop into the &lt;a href=&quot;0023.html&quot;&gt;timeline&lt;/a&gt; to create your slide show. </source>
        <translation> Dans ce mode, vous pouvez visualiser les fichiers multimédia présents sur vos disques durs et les amener par Drag &amp; Drop vers la &lt;a href=&quot;0023.html&quot;&gt;barre de temps&lt;/a&gt; pour créer votre diaporama.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="296"/>
        <location filename="fake/fake.cpp" line="303"/>
        <source>A small multimedia player is displayed above on the right, near the toolbar and menu, to allow you to preview the slide show. </source>
        <translation>Un petit lecteur multimédia est afficher en haut à droite, à coté de la barre de bouton et de menu, pour vous permettre de prévisualiser le diaporama.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="297"/>
        <source>Sheet mode</source>
        <translation>Le mode partition</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="298"/>
        <source>In this mode, the main window is divided into 2 zones: </source>
        <translation>Dans ce mode, la fenêtre principale est découpée en 2 zones :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="301"/>
        <source> In this mode, the &lt;a href=&quot;0023.html&quot;&gt;timeline&lt;/a&gt; is displayed on several lines to show as much slides as possible of the slide show. Slides are shown as on a musical score, in the form of line and at the end of a line, we pass over to the beginning og the following line. </source>
        <translation>Dans ce mode, la &lt;a href=&quot;0023.html&quot;&gt;barre de temps&lt;/a&gt; est affichée sur plusieurs lignes afin de visualiser le plus possible de diapositives du diaporama. Les diapositives sont affichées comme sur une partition musicale, sous forme de ligne et à la fin d’une ligne, on passe à la ligne suivante.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="302"/>
        <source>You can reorganize your slides by moving them using Drag &amp; Drop within the &lt;a href=&quot;0023.html&quot;&gt;timeline&lt;/a&gt;. </source>
        <translation>Vous pouvez réorganiser vos diapositives en les déplaçant par Drag &amp; Drop à l’intérieur de la &lt;a href=&quot;0023.html&quot;&gt;barre de temps&lt;/a&gt;.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="304"/>
        <source>Preview mode</source>
        <translation>Le mode prévisualisation</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="308"/>
        <source>A big multimedia player</source>
        <translation>Un grand lecteur multimédia</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="309"/>
        <source> In this mode, you can preview your slide show in big size. </source>
        <translation> Dans ce mode, vous pouvez prévisualiser votre diaporama dans une grande taille.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="310"/>
        <source>You can modify your slides and preview your changes in the multimedia player </source>
        <translation>Vous pouvez modifier vos diapositives et prévisualiser vos changements dans le lecteur multimédia</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="311"/>
        <source>To change display mode, use the buttons located in the status bar, to the right, at the bottom of the main window.</source>
        <oldsource>To change display mode, use the buttons located in the status bar, to the right, at the bottom of the main window. </oldsource>
        <translation>Pour changer de mode d’affichage, utiliser les boutons situés dans la barre d’état, à droite, au bas de la fenêtre principal.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="312"/>
        <source> Switch display to file mode</source>
        <translation>Bascule l’affichage en mode fichier</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="313"/>
        <source> Switch display to sheet mode</source>
        <translation> Basculer l&apos;affichage en mode partition</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="314"/>
        <source> Switch display to preview mode</source>
        <translation> Basculer l&apos;affichage en mode prévisualisation</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="315"/>
        <source>The editing of slides is done:</source>
        <oldsource> The editing of slides is done: </oldsource>
        <translation>La gestion des diapositives s’effectue :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="316"/>
        <source>by using the buttons of the &lt;a href=&quot;0022.html&quot;&gt;toolbar&lt;/a&gt;</source>
        <oldsource>by using the buttons of the toolbar</oldsource>
        <translation>soit à l’aide des boutons de la &lt;a href=&quot;0022.html&quot;&gt;barre d’outils&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="317"/>
        <source>by using contextual menus (right click on an element)</source>
        <translation>soit en utilisant des menus contextuels (click droit sur un élément)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="318"/>
        <source>by double clicking on elements of the slide</source>
        <translation>soit en double clickant sur des éléments</translation>
    </message>
</context>
<context>
    <name>0022</name>
    <message>
        <location filename="fake/fake.cpp" line="319"/>
        <source>The toolbar</source>
        <translation>La barre d’outils</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="320"/>
        <source>These buttons are grouped under four tabs: File / Project / Render and Help</source>
        <translation>Les boutons de la barre d’outils sont regroupés dans quatre onglets : Fichier / Projet / Générer le film et Aide</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="321"/>
        <source>The project management commands</source>
        <translation>Les commandes de gestion des projets</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="322"/>
        <source>The following table summarizes the main project management commands:</source>
        <translation>Le tableau suivant résume les principales commandes du menu fichier :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="323"/>
        <location filename="fake/fake.cpp" line="357"/>
        <location filename="fake/fake.cpp" line="395"/>
        <location filename="fake/fake.cpp" line="413"/>
        <source>Toolbar button</source>
        <translation>Bouton dans la barre d’outils</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="324"/>
        <source>Project menu command</source>
        <translation>Commande du menu Projet</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="325"/>
        <location filename="fake/fake.cpp" line="359"/>
        <source>Keyboard shortcut</source>
        <translation>Raccourcie clavier</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="326"/>
        <location filename="fake/fake.cpp" line="360"/>
        <location filename="fake/fake.cpp" line="397"/>
        <location filename="fake/fake.cpp" line="415"/>
        <source>Action</source>
        <translation>Action</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="327"/>
        <source>New</source>
        <translation>Nouveau</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="328"/>
        <source>CTRL+N</source>
        <translation>CTRL+N</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="329"/>
        <source>Allows you to create a new blank project. The &lt;a href=&quot;0108.html&quot;&gt;project properties dialog&lt;/a&gt; appears and allows you to setup the new project. </source>
        <oldsource>Allows you to create a new blank project using the default project settings as defined in the Application settings. </oldsource>
        <translation>Permet de créer un nouveau projet vierge en utilisant les paramètres de projet par défaut définis dans la &lt;a href=&quot;0108.html&quot;&gt;boite de configuration&lt;/a&gt;.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="330"/>
        <location filename="fake/fake.cpp" line="338"/>
        <location filename="fake/fake.cpp" line="354"/>
        <source>(If the current project has unsaved modifications, ffDiaporama prompts you to save it.)</source>
        <translation>(Si le projet en cours a des modifications qui n’ont pas encore été sauvegardé, ffDiaporama propose de sauvegarder le projet en cours.)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="331"/>
        <source>Open</source>
        <translation>Ouvrir</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="332"/>
        <source>CTRL+O</source>
        <translation>CTRL+O</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="333"/>
        <source>Allows you to open an existing project. The file selection dialog appears and allows you to select the project to be opened. </source>
        <translation>Permet d’ouvrir un projet déjà existant. La boite de sélection de fichier apparaît et vous permet de sélectionner le projet à ouvrir.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="334"/>
        <source>(If the current project has unsaved modifications, ffDiaporama prompts you to save it.) </source>
        <translation>(Si le projet en cours a des modifications qui n’ont pas encore été sauvegardé, ffDiaporama propose de sauvegarder le projet en cours.)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="335"/>
        <source>Remark: if the project contains files which were moved or renamed, ffDiaporama will fail to open them again. In that case, a dialog appears allowing you to select a new file.</source>
        <translation>Note : Si le projet contient des fichiers qui ont été déplacés ou renommés, ffDiaporama n’arrivera pas à les ré-ouvrir. Dans ce cas, une boite de dialogue apparaît vous permettant de sélectionner un nouveau fichier.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="336"/>
        <source>Open recent</source>
        <translation>Ouvrir récent</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="337"/>
        <source>Allows you to reopen a recently opened project. ffDiaporama stores a list of the last ten projects.</source>
        <translation>Permet d’ouvrir un projet ouvert récemment. ffDiaporama mémorise une liste des dix derniers projets utilisés.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="339"/>
        <source>Save</source>
        <translation>Enregistrer</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="340"/>
        <source>CTRL+S</source>
        <translation>CTRL+S</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="341"/>
        <source>Allows you to save the current project in a project file.</source>
        <translation>Permet d’enregistrer le projet en cours dans un fichier projet.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="342"/>
        <source>If you have not saved previously the project, a file selection dialog appears and allows you to select a destination file.</source>
        <oldsource>Allows you to reopen a recently opened project. ffDiaporama stores a list of the last ten projects.&lt;BR&gt;(If the current project has unsaved modifications, ffDiaporama prompts you to save it.)</oldsource>
        <translation>Si vous n’aviez pas encore sauvegarder le projet, la boite de sélection de fichier à enregistrer apparaît et vous permet de sélectionner un fichier de destination.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="343"/>
        <source>Save as</source>
        <translation>Enregistrer sous</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="344"/>
        <location filename="fake/fake.cpp" line="362"/>
        <source>Opens a sub-menu giving you access to the following functions</source>
        <oldsource>Allows you to save the current project in a different file.</oldsource>
        <translation>Ouvre un sous-menu vous permettant de choisir parmis les fonctions suivantes</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="345"/>
        <source>Save as: Allows you to save the current project in a different file. The &lt;a href=&quot;0109.html&quot;&gt;file selection dialog&lt;/a&gt; appears and allows you to select a destination file.</source>
        <oldsource>The file selection dialog appears and allows you to select a destination file.</oldsource>
        <translation>Enregistrer sous: Permet de sauvegarder le projet en cours dans un nouveau fichier. La boite de &lt;a href=&quot;0109.html&quot;&gt;sélection de fichier&lt;/a&gt; à enregistrer apparaît et vous permet de sélectionner un fichier de destination.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="346"/>
        <source>Export project: Export current project and all used files in a new folder. The &lt;a href=&quot;0107.html&quot;&gt;export project dialog&lt;/a&gt; appears and allows you to setup the export.</source>
        <translation>Exporter le project: Exporter le projet en cours et tous les fichiers qu&apos;il utilise dans un nouveau dossier. La boite &lt;a href=&quot;0107.html&quot;&gt;exporter le project&lt;/a&gt; apparaît et vous permet de définir les paramètres de l&apos;export.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="347"/>
        <source>Project properties</source>
        <translation>Propriétés du projet</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="348"/>
        <source>Allows you to open the &lt;a href=&quot;0108.html&quot;&gt;project properties dialog&lt;/a&gt;</source>
        <translation>Vous permet d&apos;ouvrir la boite &lt;a href=&quot;0108.html&quot;&gt;Définir les propriétés du projet&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="350"/>
        <source>Allows you to define applications settings. The &lt;a href=&quot;0101.html&quot;&gt;application settings dialog&lt;/a&gt; appears.</source>
        <translation>Vous permet de définir les options de l&apos;application. La boite &lt;a href=&quot;0101.html&quot;&gt;Options de l&apos;application&lt;/a&gt; apparaît.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="363"/>
        <source>Add empty slide: Allows you to add an empty slide : the new empty slide is appended to the project and is displayed in the &lt;a href=&quot;0023.html&quot;&gt;timeline&lt;/a&gt;.</source>
        <translation>Ajouter une diapositive vide : Vous permet d&apos;ajouter une diapositive vide : La nouvelle diapositive est ajoutée au projet et est affichée dans la &lt;a href=&quot;0023.html&quot;&gt;barre de temps&lt;/a&gt;.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="364"/>
        <source>Add a predefined title slide: Allows you to add a slide based on a model. The &lt;a href=&quot;0103.html&quot;&gt;predefined title slide properties dialog&lt;/a&gt; appears.</source>
        <translation>Ajouter une diapositive titre prédéfinie : Vous permet d&apos;ajouter une diapositive titre basée sur un modèle: La boite &lt;a href=&quot;0103.html&quot;&gt;Editer les propriétés d&apos;une diapositive titre prédéfinie&lt;/a&gt; apparaît.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="371"/>
        <source>Allows you to add the slides of an existing project to the end the current project: a &lt;a href=&quot;0109.html&quot;&gt;file selection dialog&lt;/a&gt; appears and allows you to select a project file. Slides, slide settings, music and background of the project are added to the current project.</source>
        <translation>Permet d&apos;ajouter les diapositives d&apos;un projet existant à la fin du projet en cours : La boîte de dialogue de &lt;a href=&quot;0109.html&quot;&gt;sélection de fichier&lt;/a&gt; apparaît et vous permet de sélectionner un fichier de projet. Les diapositives, paramètres du diaporama, musique et fond de diapositives du projet sont ajoutés au projet en cours.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="374"/>
        <source>Allows you to cut the current slide (remove it from the &lt;a href=&quot;0023.html&quot;&gt;timeline&lt;/a&gt; and put it in the clipboard).</source>
        <translation>Vous permet de couper la diapositive en cours (la supprime de la &lt;a href=&quot;0023.html&quot;&gt;barre de temps&lt;/a&gt; et la place dans le presse papier).  </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="384"/>
        <source>Depending on the slide type, open the &lt;a href=&quot;0119.html&quot;&gt;slide properties dialog&lt;/a&gt; if it&apos;s a standard slide or open the &lt;a href=&quot;0103.html&quot;&gt;predefined title slide properties dialog&lt;/a&gt; if it&apos;s a predefined title slide. (Equivalent to a double click on the mounting track)</source>
        <translation>En fonction du type de diapositive, ouvre la boite de dialogue&lt;a href=&quot;0119.html&quot;&gt;Editer les propriétés d&apos;une diapositive&lt;/a&gt; s&apos;il s&apos;agit d&apos;une diapositive standard ou ouvre la boite de dialogue &lt;a href=&quot;0103.html&quot;&gt;Editer les propriétés d&apos;une diapositive titre prédéfinie&lt;/a&gt; s&apos;il s&apos;agit d&apos;une diapositive titre prédéfinie. (équivalent à un double click sur la piste de montage)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="392"/>
        <source>It is possible to add slides by Drag and Drop directly using the file browser. Drag photos or videos onto the &lt;a href=&quot;0023.html&quot;&gt;timeline&lt;/a&gt; and slides are created at the point you release the files.</source>
        <translation>Il est possible d&apos;ajouter des diapositives par Drag and Drop directement en utilisant l&apos;explorateur de fichiers. Pour cela, faites glisser des photos ou des vidéos sur la &lt;a href=&quot;0023.html&quot;&gt;barre de temps&lt;/a&gt; et les diapositives seront créés à l&apos;endroit où vous relâcherez les fichiers.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="404"/>
        <source>Allows you to render the video in a lossless format. Lossless format is not destructive, so it is possible to render several times the same video without losing in quality. The &lt;a href=&quot;0115.html&quot;&gt;render movie dialog&lt;/a&gt; appears.</source>
        <translation>Permet de générer la vidéo dans un format sans perte. Le format Lossless n&apos;est pas destructif, il est donc possible de générer plusieurs fois la même vidéo sans perdre en qualité. La boite de dialogue &lt;a href=&quot;0115.html&quot;&gt;Générer le film du projet&lt;/a&gt; apparaît. </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="406"/>
        <source>Allows you to render the video using the &lt;a href=&quot;0115.html&quot;&gt;Advanced render movie dialog&lt;/a&gt;.</source>
        <translation>Vous permet de générer le film du projet en utilisant la boite de dialogue &lt;a href=&quot;0115.html&quot;&gt;Générer le film du projet en mode avancé&lt;/a&gt;.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="407"/>
        <source>Export Soundtrack</source>
        <translation>Exporter la piste sonore</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="408"/>
        <source>Allows you to render only the sound track of the project. The &lt;a href=&quot;0115.html&quot;&gt;render movie dialog&lt;/a&gt; appears.</source>
        <translation>Vous permet de ne générerque la bande son du projet. La boite de dialogue &lt;a href=&quot;0115.html&quot;&gt;Générer le film du projet&lt;/a&gt; apparaît.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="349"/>
        <source>Settings</source>
        <translation>Options</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="351"/>
        <source>Quit</source>
        <translation>Quitter</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="352"/>
        <source>CTRL+W</source>
        <translation>CTRL+W</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="353"/>
        <source>Allows you to exit ffDiaporama.</source>
        <translation>Permet de quitter ffDiaporama.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="355"/>
        <source>The slide management commands</source>
        <translation>Les commandes de gestion des diapositives</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="356"/>
        <source>The following table summarizes the slide management commands:</source>
        <translation>Le tableau suivant résume les principales commandes de gestion des diapositives :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="358"/>
        <source>Edit menu command</source>
        <translation>Commande du menu Edition</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="361"/>
        <source>Add title</source>
        <translation>Ajouter une diapositive titre</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="365"/>
        <source>Add a map: Allows you to add a Google Maps map. The &lt;a href=&quot;0110.html&quot;&gt;correct, reframe or cut image or video dialog&lt;/a&gt; appears.</source>
        <translation>Ajouter une carte : Vous permet d&apos;ajouter une carte Google Maps. La boite de dialog &lt;a href=&quot;0110.html&quot;&gt;corriger, recadrer ou couper une image ou une vidéo&lt;/a&gt; apparait.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="366"/>
        <source>Add files</source>
        <translation>Ajouter des fichiers</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="367"/>
        <source>INS</source>
        <translation>INS</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="368"/>
        <source>Allows you to add photo or video files : A &lt;a href=&quot;0109.html&quot;&gt;file selection dialog&lt;/a&gt; appears and allows you to select one or more files. </source>
        <translation>Vous permet d&apos;ajouter des fichiers photo ou vidéo : La boite de dialogue de &lt;a href=&quot;0109.html&quot;&gt;sélection de fichiers&lt;/a&gt; apparaît et vous permet de sélectionner un ou plusieurs fichiers. </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="369"/>
        <source>Note: Each selected file is added to the project using sort order specified in the configuration menu of the multimedia file explorer.</source>
        <oldsource>Note: Each file selected is added to the project alphabetically by filename or in the numerical order of shots. </oldsource>
        <translation>Note : Chaque fichier ainsi sélectionné est ajouté au projet dans l’ordre spécifié dans le menu de configuration de l&apos;explorateur de fichier multimédia.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="370"/>
        <source>Add project</source>
        <translation>Ajouter un projet existant</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="372"/>
        <source>Cut</source>
        <translation>Couper</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="373"/>
        <source>CTRL+X</source>
        <translation>CTRL+X</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="375"/>
        <source>Copy</source>
        <translation>Copier</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="376"/>
        <source>CTRL+C</source>
        <translation>CTRL+C</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="377"/>
        <source>Allows you to copy the current slide to the clipboard.</source>
        <translation>Permet de copier la diapositive en cours (en plaçant une copie de la diapositive dans le presse papier).</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="378"/>
        <source>Paste</source>
        <translation>Coller</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="379"/>
        <source>CTRL+V</source>
        <translation>CTRL+V</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="380"/>
        <source>Allows you to paste the slide or the image currently in the clipboard into the &lt;a href=&quot;0023.html&quot;&gt;timeline&lt;/a&gt;.</source>
        <translation>Vous permet de coller dans la &lt;a href=&quot;0023.html&quot;&gt;barre de temps&lt;/a&gt;, la diapositive ou l&apos;image actuellement dans le presse papier.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="381"/>
        <source>Edit</source>
        <translation>Editer</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="382"/>
        <source>Opens a sub-menu giving access to the slide modification functions</source>
        <translation>Ouvre un petit menu qui permet d’accéder aux fonctions de modification</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="383"/>
        <source>Open the &lt;a href=&quot;0104.html&quot;&gt;background properties dialog&lt;/a&gt; (Equivalent to a double click on the background track)</source>
        <oldsource>Slide property (Equivalent to a double click on the mounting track)</oldsource>
        <translation>Ouvre la boite &lt;a href=&quot;0104.html&quot;&gt;Propriété du fond d&apos;écran&lt;/a&gt; (Equivalent à un double click sur la piste de fond d&apos;écran)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="385"/>
        <source>Open the &lt;a href=&quot;0114.html&quot;&gt;music properties dialog&lt;/a&gt; (Equivalent to a double click on the music track)</source>
        <oldsource>Open transition property (Equivalent to a double click on the transition)</oldsource>
        <translation>Ouvre la boite &lt;a href=&quot;0114.html&quot;&gt;Propriété de la music&lt;/a&gt; (Equivalent à un double click sur la piste son)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="386"/>
        <source>Open the &lt;a href=&quot;0122.html&quot;&gt;transition properties dialog&lt;/a&gt; (Equivalent to a double click on the transition)</source>
        <translation>Ouvre la boite &lt;a href=&quot;0122.html&quot;&gt;Propriété de la transition&lt;/a&gt; (Equivalent à un double click sur la transition)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="387"/>
        <source>Remove</source>
        <translation>Supprimer</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="388"/>
        <source>DEL</source>
        <translation>SUPPR</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="389"/>
        <source>Allows you to remove the current slide.</source>
        <translation>Permet de supprimer la diapositive en cours d’édition.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="390"/>
        <source>Remarks:</source>
        <translation>A noter :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="391"/>
        <source>Inserted slides are either at the end of the project, or after the current slide, depending to the option &quot;add the new slides (at the end of the project or after the current slide) &quot; in the configuration dialog.</source>
        <translation>Les insertions de diapositive se font soit à la fin du projet, soit après la diapositive en cours, en fonction de l’option « ajouter les nouvelles diapositives (à la fin du projet ou après la diapositive en cours) » de la boite de dialog de configuration.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="393"/>
        <source>The render commands</source>
        <translation>Les commandes de génération de film</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="394"/>
        <source>The following table summarizes the main render commands:</source>
        <translation>Le tableau suivant résume les principales commandes de génération de film :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="396"/>
        <source>Render menu command</source>
        <translation>Commande du menu Générer le film</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="398"/>
        <source>Player and Smartphone</source>
        <translation>Lecteur et smartphone</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="399"/>
        <source>Allows you to render the video for selected equipment from the device database. </source>
        <translation>Vous permet de générer le film du projet pour un type d&apos;équipement sélectionné dans la base de données.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="400"/>
        <source>The &lt;a href=&quot;0115.html&quot;&gt;render movie dialog&lt;/a&gt; from database appears.</source>
        <translation>La boite de dialogue &lt;a href=&quot;0115.html&quot;&gt;Générer le film du projet depuis un modèle&lt;/a&gt; apparaît.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="401"/>
        <source>Multimedia system</source>
        <translation>Système multimédia</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="402"/>
        <source>For the WEB</source>
        <translation>Pour Internet</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="403"/>
        <source>Lossless</source>
        <translation>Lossless</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="405"/>
        <source>Advanced</source>
        <translation>Avancé</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="409"/>
        <source>Remark:</source>
        <translation>Note :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="410"/>
        <source>The lossless format is readable only by few equipment and generates files of enormous size. Consequently, it is useful only to generate parts of a project which will then be joined into a final project.</source>
        <translation>Le format lossless n’est lisible que par très peu d’équipement et génère des fichiers de taille énorme. Par conséquent, il n’est utile que pour générer des morceaux de projet qui seront ensuite intégrés dans un projet final.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="411"/>
        <source>The help commands</source>
        <translation>Les commandes d’aide</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="412"/>
        <source>The following table summarizes the main help commands:</source>
        <translation>Le tableau suivant résume les principales commandes d’aide :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="414"/>
        <source>Help menu command</source>
        <translation>Commande du menu aide</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="416"/>
        <source>About</source>
        <translation>A propos
de</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="417"/>
        <source>Opens the about dialog. This displays information about the release, license and system information</source>
        <translation>Permet d’ouvrir la boite de dialogue « A propos de… ». Cette boite affiche des informations de version, de licence et des informations sur le système</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="418"/>
        <source>Support and help (F1)</source>
        <translation>Aide et support (F1)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="419"/>
        <source>Opens the ffDiaporama WIKI index</source>
        <translation>Ouvre le sommaire de l’aide de ffDiaporama</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="420"/>
        <source>What&apos;s new</source>
        <translation>Nouveautés</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="421"/>
        <source>Opens the Blog/News page from the ffDiaporama website</source>
        <translation>Ouvre la page Blog/Nouvelles du site Internet de ffDiaporama</translation>
    </message>
</context>
<context>
    <name>0023</name>
    <message>
        <location filename="fake/fake.cpp" line="422"/>
        <source>The timeline</source>
        <translation>La barre de temps</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="423"/>
        <source>The timeline lists the slides which compose the project. The slides are listed from left to right.</source>
        <translation>La barre de temps liste les diapositives qui composent le projet : Les diapositives sont listées de la gauche vers la droite.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="424"/>
        <source>Each slide is represented by the 3 tracks:</source>
        <translation>Chaque diapositive est constituée de 3 pistes :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="425"/>
        <source>The background track:</source>
        <translation>La piste d’arrière plan :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="426"/>
        <source>An icon corresponding to the transition selected to pass from the previous background to this slide (if a new background is defined). .</source>
        <translation>Une icône correspondant à la transition sélectionnée pour passer de l’arrière-plan précédent à celui de cette diapositive (si un nouvel arrière-plan est défini).</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="427"/>
        <source>A thumbnail representing the background associated with this slide.</source>
        <translation>Une vignette représentant l’arrière plan associé à cette diapositive.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="428"/>
        <source>The slide number.</source>
        <translation>Le numéro de la diapositive.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="429"/>
        <source> Possibly this icon may appear at the upper left if the slide is used as chapter start</source>
        <translation>Éventuellement cette icône apparaît en haut à gauche si la diapositive définit le début d’un chapitre</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="430"/>
        <source>The mounting track:</source>
        <translation>La piste du montage :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="431"/>
        <source>An icon corresponding to the transition selected to pass from the previous slide to this slide, under which is indicated the duration of the transition in seconds.</source>
        <translation>Une icône correspondant à la transition sélectionnée pour passer de la diapositive précédente à cette diapositive sous laquelle est indiquée la durée en seconde de la transition.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="432"/>
        <source>A thumbnail in the form of a static image for slides consisting of title or photo, or in the form of a video (under which is placed a soundtrack).</source>
        <translation>Une vignette soit en forme de photo pour les diapositives composées d’annotation seul (titre) ou d’une photo soit en forme de film (sous laquelle est placée une piste sonore).</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="433"/>
        <source> Possibly this icon may appear at the upper left if the slide is composed of several blocks.</source>
        <translation>Éventuellement cette icône apparaît en haut à gauche si la diapositive contient plusieurs blocs (objets multimédia).</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="434"/>
        <source> Possibly this icon may appear at the upper right if the slide is animated (that is consisting of more than one shot).</source>
        <oldsource> may appear at the upper left if the slide is composed of several blocks.</oldsource>
        <translation>Éventuellement cette icône apparaît en haut à droite si la diapositive est animée (c’est à dire composée de plus d’un plan).</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="435"/>
        <source> Possibly this icon may appear at the bottom right if the slide contains at least an image for which you defined a transformation.</source>
        <translation>Éventuellement cette icône apparaît en bas à droite si la diapositive contient au moins une image pour laquelle vous avez définie une transformation.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="436"/>
        <source> Possibly this icon may appear at the bottom left if the slide is an automatic predefined slide.</source>
        <oldsource> may appear at the upper right if the slide is animated (that is consisting of more than one shot).</oldsource>
        <translation>Éventuellement cette icône apparaît en bas à gauche si la diapositive est une diapositive titre prédéfinie.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="437"/>
        <source> Possibly this icon may appear at the bottom right if the predefined slide is a project title slide.</source>
        <translation>Éventuellement cette icône apparaît en bas à droite si la diapositive titre prédéfinie est de type Titre projet.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="438"/>
        <source> Possibly this icon may appear at the bottom right if the predefined slide is a chapter title slide.</source>
        <oldsource> may appear at the bottom right if the slide contains at least an image for which you defined a transformation.</oldsource>
        <translation>Éventuellement cette icône apparaît en bas à droite si la diapositive titre prédéfinie est de type Titre de chapitre.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="439"/>
        <source> Possibly this icon may appear at the bottom right if the predefined slide is a generic title slide.</source>
        <translation>Éventuellement cette icône apparaît en bas à droite si la diapositive titre prédéfinie est de type Générique.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="440"/>
        <source>Remark: The thumbnail represents the first image on the slide.</source>
        <oldsource> may appear at the bottom left if the slide is an automatic predefined slide.</oldsource>
        <translation>Les vignettes représentent la première image de la diapositive.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="441"/>
        <source>The music track:</source>
        <translation>La piste musical :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="442"/>
        <source>Every play-list is shown by a change of color.</source>
        <translation>Chaque liste de lecture est affichée par alternance de couleur.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="443"/>
        <source>The track is more or less filled according to the sound volume selected, displaying the variation in volume.</source>
        <translation>La piste est plus ou moins remplies en fonction du volume sonore sélectionné avec affichage des variations de volume.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="444"/>
        <source>The musical transitions (fade in/out) are shown as crossings.</source>
        <translation>Les transitions musical (fade in/out) sont affichées sous forme de croisement.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="445"/>
        <source>On slide associated with the music, the cover, artist and song title are displayed</source>
        <translation>Sur la diapositive associée à la musique sont affichées la jaquette, le nom de l&apos;artiste et le titre du morceau</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="446"/>
        <source>Remark: Possible pauses are symbolized by a change in the volume to zero and the display of this icon: </source>
        <oldsource>Remark:Possible pauses are symbolized by a change in the volume to zero and the icon </oldsource>
        <translation>Les éventuels passages en pause sont symbolisés par un passage au volume 0 et l&apos;affichage de cette icône :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="447"/>
        <source>To select the current slide:</source>
        <translation>Pour sélectionner la diapositive courante :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="448"/>
        <source>Click on a slide to define it as current slide.</source>
        <translation>Cliquer sur une diapositive pour la sélectionner en tant que diapositive courante.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="449"/>
        <source>Use the mouse wheel to change the current slide.</source>
        <translation>Utiliser la molette de la souris pour changer de diapositive courante.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="450"/>
        <source>Note: When previewing the selected slide is automatically defined on the current slide preview.</source>
        <translation>Note : Lors d&apos;une prévisualisation, la diapositive sélectionnée est automatiquement positionnée sur la diapositive en cours de prévisualisation.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="451"/>
        <source>To modify an element:</source>
        <translation>Pour modifier un élément :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="452"/>
        <source>To modify the background, double-click the thumbnail of the background. This action opens the &lt;a href=&quot;0104.html&quot;&gt;Define background&lt;/a&gt; dialog.</source>
        <oldsource>To modify the background, double-click the thumbnail of the background. This action opens the </oldsource>
        <translation>Pour modifier l’arrière-plan, double cliquer sur la vignette de l’arrière-plan. Cette action ouvre la &lt;a href=&quot;0104.html&quot;&gt;boite de dialogue de modification du fond d’écran&lt;/a&gt;.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="453"/>
        <source>To modify the entering slide transition, double-click the slide transition. This action opens the &lt;a href=&quot;0122.html&quot;&gt;Define the entering slides transitions&lt;/a&gt; dialog.</source>
        <translation>Pour modifier la transition entrante de la diapositive, double cliquer sur la transition de la diapositive. Cette action ouvre la &lt;a href=&quot;0122.html&quot;&gt;boite de dialogue de réglage des transitions entrantes des diapositives&lt;/a&gt;.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="455"/>
        <source>To modify the music associated with the slide, double-click the zone corresponding to the slide musical track. This action opens the &lt;a href=&quot;0114.html&quot;&gt;Define the music track&lt;/a&gt; dialog.</source>
        <translation>Pour modifier la musique associée à la diapositive, double cliquer sur la zone correspondant à la diapositive de la piste musicale. Cette action ouvre la &lt;a href=&quot;0114.html&quot;&gt;boite de dialogue de réglage de la piste musicale&lt;/a&gt;.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="461"/>
        <source>Then, by making a right click on one of the slides of the selection, a contextual menu appears.</source>
        <oldsource>To modify the music associated with the slide, double-click the zone corresponding to the slide musical track. This action opens the </oldsource>
        <translation>Ensuite, en faisant un click droit sur une des diapositives de la sélection, un menu contextuel apparaît.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="456"/>
        <source>You can also call a contextual menu by doing a right click ahead the thumbnail or click on the Edit button. This contextual menu allows you to select an action.</source>
        <translation>Vous pouvez également appeler un menu contextuel en effectuant un clique droit sur la vignette ou cliquer sur le bouton Editer. Ce menu contextuel vous permet alors de sélectionner directement une action.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="454"/>
        <source>To modify the slide (framing, filter, animation, etc.) double-click the thumbnail. This action opens the &lt;a href=&quot;0119.html&quot;&gt;slides properties dialog&lt;/a&gt; if it&apos;s a standard slide or open the &lt;a href=&quot;0103.html&quot;&gt;predefined title slide properties dialog&lt;/a&gt; if it&apos;s a predefined title slide.</source>
        <translation>Pour modifier la diapositive (cadrage, filtre, animation, etc) double-cliquez sur la vignette. Cette action ouvre la boite de dialogue&lt;a href=&quot;0119.html&quot;&gt;Editer les propriétés d&apos;une diapositive&lt;/a&gt; s&apos;il s&apos;agit d&apos;une diapositive standard ou ouvre la boite de dialogue &lt;a href=&quot;0103.html&quot;&gt;Editer les propriétés d&apos;une diapositive titre prédéfinie&lt;/a&gt; s&apos;il s&apos;agit d&apos;une diapositive titre prédéfinie.  </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="457"/>
        <source>To modify several elements at one time:</source>
        <translation>Pour modifier plusieurs éléments en une seule fois :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="458"/>
        <source>You can select several slides by using the mouse and the CTRL and SHIFT:</source>
        <translation>Vous pouvez sélectionner plusieurs diapositives en utilisant la souris et les touches CTRL et SHIFT :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="459"/>
        <source>CTRL + click on a slide: add or removes the slide of the selection</source>
        <translation>CTRL + clique sur une diapositive : ajoute ou retire la diapositive de la sélection</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="460"/>
        <source>SHIFT + click on a slide: add all the slides understood between the last one selected and the slide which you have just clicked</source>
        <translation>SHIFT + clique sur une diapositive : ajoute toutes les diapositives comprise entre la dernière sélectionné et la diapositive sur laquelle vous venez de cliquer</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="462"/>
        <source>This menu suggests various actions making on all the slides of the selection such as:</source>
        <translation>Ce menu propose différentes actions à effectuer sur l’ensemble des diapositives de la sélection tel que :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="463"/>
        <source>Copy/Cut/Paste/Remove all slide of the selection</source>
        <translation>Couper/Copier/Coller/Supprimer l’ensemble des diapositives de la sélection</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="464"/>
        <source>Modify the duration of the 1st shot for all the slides of the selection</source>
        <translation>Modifier la durée du 1er plan pour toutes les diapositives de la sélection</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="465"/>
        <source>Modify the transition for all the slides of the selection</source>
        <translation>Modifier les transitions de toutes diapositives de la sélection</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="466"/>
        <source>Modify the music for all the slides of the selection</source>
        <translation>Modifier la musique pour toutes les diapositives de la sélection</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="467"/>
        <source>etc...</source>
        <translation>etc...</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="468"/>
        <source>To reorder the slide in the timeline:</source>
        <oldsource>To reorder the slide in the timeline</oldsource>
        <translation>Pour modifier l’ordre des diapositives :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="469"/>
        <source>Simply drag the slide to a new position with the mouse (drag &amp; drop)</source>
        <translation>Déplacer les diapositives dans la barre de temps en utilisant la souris (Drag &amp; Drop)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="470"/>
        <source>To move the music or the background associated to a slide to another slide:</source>
        <translation>Pour déplacer la musique ou le fond d&apos;écran associé à une diapositive vers une autre diapositive :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="471"/>
        <source>Simply drag the music or background to a new position with the mouse (drag &amp; drop)</source>
        <translation>Déplacer la musique ou le fond d&apos;écran dans la barre de temps en utilisant la souris (Drag &amp; Drop)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="472"/>
        <source>To modify the display of the timeline:</source>
        <translation>Pour modifier l’affichage de la barre de temps :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="473"/>
        <source>The timeline settings commands are in the status bar, to the right, at the bottom of the main window.</source>
        <translation>Les commandes de réglages de la barre de temps sont situés dans la barre d’état, à droite, au bas de la fenêtre principal.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="474"/>
        <source> Increases the size of the thumbnails but reduces the number of thumbnails shown in the timeline.</source>
        <translation> Permet d’augmenter la taille des vignettes mais réduit le nombre de vignettes affichées dans la barre de temps.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="475"/>
        <source> Reduces the size of the thumbnails and increases the number of thumbnails shown in the timeline.</source>
        <translation> Permet de réduire la taille des vignettes mais augmente le nombre de vignettes affichées dans la barre de temps.</translation>
    </message>
</context>
<context>
    <name>0024</name>
    <message>
        <location filename="fake/fake.cpp" line="476"/>
        <source>The multimedia file browser</source>
        <translation>L’explorateur de fichiers multimédia</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="477"/>
        <source>ffDiaporama offers a multimedia file browser which is shown in the main window when you select the file browser mode in the main window. It is designed for quick access to the multimedia files on your computer.</source>
        <translation>ffDiaporama inclu un navigateur de fichiers multimédia qui est affiché dans la fenêtre principale lorsque vous sélectionnez l’affichage en mode navigateur de fichiers. Il est conçu pour permettre un accès rapide aux fichiers multimédias présent sur votre ordinateur.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="478"/>
        <source>The main advantages are, that you can view the multimedia information of specific files even without or before adding them to your project. For instance, you can filter the view to obtain information of only photos, video files or music files.</source>
        <translation>Le principal avantage de ce navigateur est d’afficher des informations sur des fichiers multimédias et sur des fichiers spécifiques avant de les ajouter à votre projet. Par exemple, vous pouvez filtrer l’affichage pour obtenir des informations sur des photos, sur des fichiers vidéo ou sur des fichiers musicaux.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="479"/>
        <source>And moreover, you can select one or more multimedia files and add them to your project with drag &amp; drop.</source>
        <translation>Bien-sur, vous pouvez sélectionner un ou plusieurs fichiers multimédias et les ajouter à votre projet par drag &amp; drop.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="480"/>
        <source>The main purpose of the file browser is therefore the viewing and use of (multimedia) files. Some file management tasks are integrated for your convenience, i.e. creating folders deleting files or folders and renaming files or folders.</source>
        <oldsource>The main purpose of the file browser is therefore the viewing and use of (multimedia) files. Some file management tasks are integrated for your convenience, i.e. creating folders deleting files or folders and renaming files or folders</oldsource>
        <translation>Même si l’objectif principal du navigateur de fichiers multimédia est la prévisualisation de fichiers multimédias, certaines tâches de gestion de fichiers sont intégrés tel que la création de dossiers, la suppression de fichiers ou de dossiers et le renommage de fichiers ou de dossiers.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="481"/>
        <source>Remark:</source>
        <translation>Note :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="482"/>
        <source>Files can be presented differently than by the system file browser (presence of filters showing only some files - management of the file/icon pairs - etc.)</source>
        <oldsource>Files can be presented differently than by the system file browser (presence of filters showing only some files 96 management of the file/icon pairs 96 etc.)</oldsource>
        <translation>Les fichiers peuvent être présentés différemment que par le navigateur de fichiers du système (présence de filtres présentant seulement quelques fichiers - gestion des couples fichier/ icon - etc)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="483"/>
        <source>The multimedia file browser follows the display rules used by the majority of multimedia systems (gateway, multimedia hard drive, etc.): </source>
        <translation>Le navigateur de fichiers multimédia suit les règles d’affichage utilisés par la majorité des systèmes multimédias (passerelle, disque dur multimédia, etc):</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="484"/>
        <source>If a drive or a folder contains a folder.jpg file, then this image file is used as icon for the drive or the folder</source>
        <translation>Si un disque ou un dossier contient un fichier folder.jpg, ce fichier est utilisée comme icône pour le disque ou le dossier</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="485"/>
        <source>If a video or music file is accompanied with an image file with the .jpg extension carrying the same name, then this image file is used as icon for this file (example: holidays.mkv and holidays.jpg in the same folder</source>
        <translation>Si un fichier vidéo ou audio est accompagné d’une image portant le même nom mais avec l’extension de fichier .jpg, alors ce fichier image est utilisé comme icône de le fichier video ou audio (par exemple: holidays.mkv et holidays.jpg dans le même dossier)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="486"/>
        <source>The ffDiaporama multimedia file browser is not designed to manage files: so you cannot make copies of files or move files.</source>
        <translation>Le navigateur de fichiers multimédia n’est pas conçu pour gérer les fichiers : vous ne pouvez pas l’utiliser pour faire des copies ou des déplacement de fichiers.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="487"/>
        <source> Folder tree</source>
        <translation>L’arborescence des répertoires</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="488"/>
        <source>The folder tree shows the drives and folders of your system. Under every drive the folders of that drive are listed, then under every folder the subfolders, if present and so on.</source>
        <translation>L’arbre des répertoires affiche les disques et les répertoires de votre système. Sous chaque disque sont listés les répertoires du disque puis sous chaque répertoires, les sous-répertoires et ainsi de suite.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="489"/>
        <location filename="fake/fake.cpp" line="503"/>
        <source>You can:</source>
        <translation>Vous pouvez :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="490"/>
        <source>Click a drive or a folder to select it</source>
        <translation>Cliquer sur un disque ou un répertoire pour le sélectionner</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="491"/>
        <source>Click the triangle preceding the drive name or folder name to display or hide the list of subfolders</source>
        <translation>Cliquer sur le triangle précédant le nom du disque ou du répertoire pour déployer ou refermer la liste des sous-répertoires</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="492"/>
        <source>Make a right click on a drive or a folder to call the contextual menu on this drive or folder. The contextual menu proposes then the following options:</source>
        <translation>Faire un click droit sur un disque ou un répertoire pour appeler le menu contextuel sur ce disque ou ce répertoire. Le menu contextuel propose alors les options suivantes : </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="493"/>
        <source>&lt;B&gt;Refresh all&lt;/B&gt; to update the whole tree (as so if you have to insert a CD-ROM, a DVD or an USB drive, this one is shown in the tree)</source>
        <oldsource>Refresh all: to update the whole tree (as so if you have to insert a CD-ROM, a DVD or an USB drive, this one is shown in the tree)</oldsource>
        <translation>&lt;B&gt;Actualiser tout&lt;/B&gt; pour mettre à jours l’arbre entier (de sorte à ce que si vous avez insérer un CDROM, un DVD ou un disque USB, celui-ci soit affiché dans l’arbre)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="494"/>
        <source>&lt;B&gt;Refresh from here&lt;/B&gt; to update the tree from this folder (update only what is under this folder)</source>
        <oldsource>Refresh from here: to update the tree from this folder (update only what is under this folder)</oldsource>
        <translation>&lt;B&gt;Actualiser à partir d’ici&lt;/B&gt; pour mettre à jours l’arbre à partir de ce répertoire (ne mettre à jours que ce qui est sous ce répertoire)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="495"/>
        <source>Create a new folder</source>
        <translation>Créer un sous-répertoire</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="496"/>
        <source>Remove a folder</source>
        <translation>Supprimer un répertoire</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="497"/>
        <source>Rename a folder</source>
        <translation>Renommer un répertoire</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="498"/>
        <source>The current folder view lists files and subfolders present in the current folder.</source>
        <translation>La vue du répertoire en cours liste les fichiers et sous répertoires présent dans le répertoire en cours.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="499"/>
        <source>Files are shown:</source>
        <translation>Les fichiers sont affichés :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="500"/>
        <source>Either as a table with numerous information if you selected the details view in the settings menu of the browser</source>
        <translation>soit sous forme tabulaire avec de nombreuses informations si vous avez sélectionné la vue détaillée dans le menu de configuration de l’explorateur</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="501"/>
        <source>Or as image if you selected the icons view in the settings menu of the browser</source>
        <translation>soit sous d’icône si vous avez sélectionné la vue dans le menu de configuration de l’explorateur</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="502"/>
        <source>Files are shown according to the filter of file selection in the settings menu of the browser</source>
        <translation>Les fichiers sont affichés en fonction du filtre de fichier sélectionné dans le menu de configuration de l’explorateur</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="504"/>
        <source>Select a file or a folder by clicking it</source>
        <translation>Sélectionner un fichier ou un sous-répertoire en cliquant dessus</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="505"/>
        <source>Select several files or folders by using SHIFT and CTRL keys</source>
        <translation>Sélectionner plusieurs fichiers ou sous-répertoires en utilisant les touches SHIFT et CTRL </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="506"/>
        <source>CTRL+Click on a file: Add to the current selection or remove from the current selection</source>
        <translation>CTRL+Click sur un fichier : Ajoute ou supprime le fichier sur lequel vous venez de cliquer de la sélection en cours</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="507"/>
        <source>SHIFT+Click on a file: Select all the files between the last selected and the one which you have just clicked</source>
        <translation>SHIFT+Click sur un fichier : Sélectionne tous les fichiers entre le dernier sélectionné et celui sur lequel vous venez de cliquer</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="508"/>
        <source>Double click a file or a folder:</source>
        <translation>Double cliquer sur un fichier ou un sous-répertoire : </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="509"/>
        <source>If it&apos;s a folder: select it as the current folder and opens it</source>
        <translation>S’il s’agit d’un répertoire : Sélectionne le répertoire comme répertoire en cours et l’ouvre</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="510"/>
        <source>If it&apos;s a file: open the program that is by default associated with the file type in the system. For example, if you have associated GIMP with .jpg files in the system file browser, then a double click on a .jpg file will open the file with GIMP. (Remark: A double click on a ffDiaporama project file, opens the ffDiaporama project)</source>
        <oldsource>If it&apos;s a file: open the program that is by default associated with the file type in the system. For example, if you have associated GIMP with .jpg files in the system file browser, then a double click on a .jpg file will open the file with GIMP. (Note: a double click on a  ffDiaporama project file, opens the project ffDiaporama)</oldsource>
        <translation>S’il s’agit d’un fichier : Ouvre le programme associé par défaut au type de fichier dans le système. Par exemple, si vous avez associé GIMP avec les fichiers de type .jpg dans l’explorateur de fichier du système, alors un double click sur un fichier .jpg ouvrira le fichier avec GIMP. (Note : Un double click sur un fichier projet ffDiaporama, ouvre le projet ffDiaporama)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="511"/>
        <source>Perform a right click on one of the files or folders of the selection to open the contextual menu. According to the elements that are present in the selection, the menu will propose different actions</source>
        <translation>Faire un clique droit sur un des fichiers ou un sous-répertoire de la sélection pour appeler le menu contextuel. En fonction des éléments présent dans la sélection, le menu proposera diverses actions</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="512"/>
        <source>You can also use Drag &amp; Drop to move selected files towards the timeline to:</source>
        <translation>Vous pouvez également utiliser le Drag &amp; Drop pour déplacer les fichiers sélectionnés vers la barre de temps afin de :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="513"/>
        <source>Add them to the project, if they are images, videos or ffDiaporama project files</source>
        <translation>Les ajouter au projet, s’il s’agit de fichiers images, vidéos ou projets ffDiaporama</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="514"/>
        <source>Use them as playlist, if they are audio files</source>
        <translation>Les utiliser comme playlist, s’il s’agit de fichiers musicaux</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="515"/>
        <source>Status bar to the current selection</source>
        <translation>La barre d’information sur la sélection en cours</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="516"/>
        <source>The status bar to the current selection shows information about one or several selected files.</source>
        <translation>La barre d’information sur la sélection en cours affiche des informations sur le ou les fichiers sélectionnés.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="517"/>
        <source>For a single file selection, the following information is shown:</source>
        <translation>Dans le cas où un seul fichier est sélectionné, les informations suivantes sont affichées :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="518"/>
        <source>Image of the file</source>
        <translation>Icône du fichier</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="519"/>
        <source>Filename (Filesize)</source>
        <translation>Nom du fichier (taille du fichier)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="521"/>
        <source>Image: Information about the size of the image / copyright / camera / orientation </source>
        <translation>Image : Information sur le format de l’image / Copyright / Appareil photo / Orientation</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="524"/>
        <source>ffDiaporama project: Version of ffDiaporama / Format / Number of slide and chapter / duration of the project </source>
        <translation>Projet ffDiaporama : Version de ffDiaporama / Format / Nombre de diapositive et de chapitre /durée du projet</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="557"/>
        <source>Settings of the sort order</source>
        <translation>Réglage des tries</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="558"/>
        <source>Sort by number</source>
        <translation>Trier par numéro</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="559"/>
        <source>This option sorts the files in order of their numerical suffix : Example: if you select IMG_0025, IMG_0032, MVI_0029 and MVI_0040, the files will be inserted as follows : IMG_0025, MVI_0029, IMG_0032 and MVI_0040</source>
        <translation>Cette option trie les fichiers dans l&apos;ordre de leur numéro : Exemple: si vous sélectionnez IMG_0025, IMG_0032, MVI_0029 MVI_0040, les fichiers seront insérés comme suit: IMG_0025, MVI_0029, IMG_0032 et MVI_0040</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="561"/>
        <source>This option sorts the files in order of their creation date</source>
        <translation>Cette option trie les fichiers selon leur date de création</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="562"/>
        <source>Sort by name</source>
        <translation>Trier par nom</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="563"/>
        <source>This option sorts the files in alphabetical order</source>
        <translation>Cette option trie les fichiers par ordre alphabétique</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="560"/>
        <location filename="fake/fake.cpp" line="564"/>
        <source>Sort by date</source>
        <translation>Trier par date</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="565"/>
        <source>This option sorts the files in order of last modification date</source>
        <translation>Cette option trie les fichiers par ordre de date de dernière modification</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="566"/>
        <source>Show folder first</source>
        <translation>Afficher d&apos;abord les répertoires</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="567"/>
        <source>If this option is enabled, the directories will be displayed first</source>
        <oldsource>If this option is enabled, the directory will be displayed first</oldsource>
        <translation>Si cette option est activée, les répertoires seront affichés en premier</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="595"/>
        <source>This option is available only for the icon view mode. If this option is activated, the file names will not be shown under the file images. It allows to increase the number of images shown in the view of the current directory. </source>
        <translation>Cette option n’est disponible que pour le mode d »affichage par icône. Si cette option est activée, alors les noms de fichiers ne seront pas affichés sous les images représentant les fichiers. Cela permet d’augmenter le nombre d’images affichées dans la vue du répertoire en cours.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="530"/>
        <source>For a multiple files selection, the following information is shown:</source>
        <translation>Dans le cas où plusieurs fichiers sont sélectionnés, les informations suivantes sont affichés :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="531"/>
        <source>Icon of the file type</source>
        <translation>Icône de type de fichier</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="532"/>
        <source>Number of files and type of files</source>
        <translation>Nombre de fichiers et types des fichiers</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="533"/>
        <source>Durations accumulated by files</source>
        <translation>Durées cumulées des fichiers</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="534"/>
        <source>Size accumulated by files</source>
        <translation>Tailles cumulées des fichiers</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="535"/>
        <source>Status bar of the current folder</source>
        <translation>La barre d’information sur le répertoire en cours</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="536"/>
        <source>The status bar of the current folder shows the following information about the current folder:</source>
        <translation>La barre d’information sur le répertoire en cours affiche des informations sur le répertoire actuellement sélectionné:</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="537"/>
        <source> Number of files</source>
        <translation> Nombre de fichiers</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="538"/>
        <source> Number of sub-folders</source>
        <translation> Nombre de sous-répertoires</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="539"/>
        <source> Total size of shown files</source>
        <translation> Tailles cumulées des fichiers affichés</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="540"/>
        <source> Total duration of shown files</source>
        <translation> Durées cumulées des fichiers affichés</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="541"/>
        <source>Space occupied on the disk / Total space of the disk</source>
        <translation>Espace occupé sur le disque / Taille du disque</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="542"/>
        <source> Favorites menu</source>
        <translation> Le menu des favoris</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="543"/>
        <source>The list of the favourite folders can be managed in the favorites menu.</source>
        <translation>Le menu des favoris permet de gérer la liste des répertoires favoris.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="544"/>
        <source>First line of the menu: </source>
        <oldsource>The first menu </oldsource>
        <translation>Première ligne du menu :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="545"/>
        <source>&lt;U&gt;&lt;B&gt; Add to favorite&lt;/B&gt;&lt;/U&gt; adds the current folder to the list. Then an edit box allows you to give a name for this favorite</source>
        <oldsource> &lt;U&gt;&lt;B&gt;Add to favorite&lt;/B&gt;&lt;/U&gt; adds the current folder to the list. Then an edit box allows you to give a name for this favorite</oldsource>
        <translation>&lt;U&gt;&lt;B&gt; Ajouter aux favoris&lt;/B&gt;&lt;/U&gt; permet d’ajouter le répertoire en cours à la liste. Une boite de saisie vous permet alors de donner un nom pour ce favoris</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="546"/>
        <source>Between the first and the last line: </source>
        <oldsource>Between the first and the last line: the list of </oldsource>
        <translation>Entre la première et la dernière ligne :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="547"/>
        <source> &lt;U&gt;&lt;B&gt;The list of favorites folders&lt;/B&gt;&lt;/U&gt; is displayed. Select one of the favorite folders to access it directly</source>
        <oldsource>&lt;U&gt;&lt;B&gt; Favorites folders&lt;/B&gt;&lt;/U&gt; is displayed. Select one of the favorite folders to access it directly</oldsource>
        <translation> &lt;U&gt;&lt;B&gt;La liste des répertoires favoris&lt;/B&gt;&lt;/U&gt; s’affichent. Sélectionner un des répertoires favoris pour y accéder directement</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="548"/>
        <source>Last line of the menu: </source>
        <oldsource>The last line of the menu &lt;U&gt;&lt;B&gt;</oldsource>
        <translation>Dernière ligne du menu :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="549"/>
        <source>&lt;U&gt;&lt;B&gt; Manage favorite&lt;/B&gt;&lt;/U&gt; allows to rename or to delete entries of the list. A dialogbox for the modification of the list is displayed</source>
        <oldsource> Manage favorite&lt;/B&gt;&lt;/U&gt; allows to rename or to delete entries of the list. A dialogbox for the modification of the list is displayed</oldsource>
        <translation>&lt;U&gt;&lt;B&gt; Gérer les favoris&lt;/B&gt;&lt;/U&gt; permet de renommer et de supprimer des entrées de la liste. Une boite de modification de la liste s’affiche</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="552"/>
        <source>Settings of the display mode</source>
        <oldsource>&lt;U&gt;&lt;B&gt;Settings of the display mode&lt;/B&gt;&lt;/U&gt;</oldsource>
        <translation>Réglage du mode d’affichage</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="568"/>
        <source>Settings of the filter on files</source>
        <oldsource>&lt;U&gt;&lt;B&gt;Settings of the filter on files&lt;/B&gt;&lt;/U&gt;</oldsource>
        <translation>Réglage du filtre sur les fichiers</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="585"/>
        <source>Additional settings</source>
        <oldsource>&lt;U&gt;&lt;B&gt;Additional settings&lt;/B&gt;&lt;/U&gt;</oldsource>
        <translation>Réglages complémentaires</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="586"/>
        <source>Display hidden files and folders</source>
        <translation>Afficher les fichiers et répertoires cachés</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="593"/>
        <location filename="fake/fake.cpp" line="598"/>
        <source> One of this icon is displayed in front of the name of the option as this one is activated or not.</source>
        <translation> Un de ces icônes est affiché devant le nom de l’option selon que celle-ci est activée ou non.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="550"/>
        <source> Settings menu</source>
        <translation> Le menu de configuration</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="520"/>
        <location filename="fake/fake.cpp" line="525"/>
        <source>According to the file type: </source>
        <translation>En fonction du type de fichier :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="522"/>
        <source>Video: Information about the format of the images / the video track / the audio track / duration </source>
        <translation>Vidéo : Information sur le format des images / sur la piste vidéo / sur la piste audio / durée de la vidéo</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="523"/>
        <source>Music: Information about the audio format / duration </source>
        <translation>Musique : Information sur le format audio / durée du morceau</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="526"/>
        <source>Image : Information about the picture shooting (Aperture and Focal / Lens / With or without flash) </source>
        <translation>Image : Informations de prise de vue (Ouverture &amp; Focal / Objectif / Avec ou sans flash)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="527"/>
        <source>Video: TAG contents (Title / Artist / Album / Year) </source>
        <translation>Vidéo : Contenu des TAG (Titre / Artist / Album / Année)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="528"/>
        <source>Music: TAG contents (Title / Artist / Album / Year) </source>
        <translation>Musique : Contenu des TAG (Titre / Artist / Album / Année)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="529"/>
        <source>ffDiaporama project: TAG contents (Title / Artist / Album / Year) </source>
        <translation>Projet ffDiaporama : Contenu des TAG (Titre / Artist / Album / Année)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="551"/>
        <source>The settings menu allows to modify the display of the current folder:</source>
        <translation>Le menu de configuration permet de modifier l’affichage de la vue du répertoire en cours :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="553"/>
        <source>Details view</source>
        <translation>Vue détaillée</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="554"/>
        <source>Switch the display of the current folder to detail mode. In this mode, the present elements in the folder are shown in a table with numerous information</source>
        <translation>Permet de basculer l’affichage du répertoire en cours en mode détaillé. Dans ce mode, les éléments présents dans le répertoire sont affichés sous forme tabulaire avec de nombreuses informations</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="555"/>
        <source>Icon view</source>
        <translation>Vue en icône</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="556"/>
        <source>Switch the display of the current folder to icon mode. In this mode, the present elements in the folder are shown as images</source>
        <translation>Permet de basculer l’affichage du répertoire en cours en mode icône. Dans ce mode, les éléments présents dans le répertoire sont affichés sous forme d’image</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="569"/>
        <source>All files</source>
        <translation>Tous les fichiers</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="570"/>
        <source>Show all the present elements in the current folder</source>
        <translation>Permet d’afficher tous les éléments présents dans le répertoire en cours</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="571"/>
        <source>Managed files</source>
        <translation>Fichiers pris en charge</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="572"/>
        <source>Limit the display to the usable elements of the current folder:</source>
        <translation>Permet de limiter l’affichage aux seuls éléments du répertoire en cours utilisables par ffDiaporama :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="573"/>
        <source>Image, video and audio files of which the format is recognized by ffDiaporama</source>
        <translation>Fichiers images, vidéos et musiques dont le format de fichier est reconnu par ffDiaporama</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="574"/>
        <source>Subfolders</source>
        <translation>Sous-répertoires</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="575"/>
        <source>Image files</source>
        <translation>Fichiers images</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="576"/>
        <source>Limit the display of the current folder to the image files of which the format is recognized by ffDiaporama in the present subfolders</source>
        <translation>Permet de limiter l’affichage des éléments du répertoire en cours aux images dont le format de fichier est reconnu par ffDiaporama et aux sous-répertoires</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="577"/>
        <source>Image vector files</source>
        <translation>Fichiers d&apos;images vectorielles</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="578"/>
        <source>Limit the display of the current folder to the image vector files of which the format is recognized by ffDiaporama in the present subfolders</source>
        <translation>Permet de limiter l’affichage des éléments du répertoire en cours aux images vectorielles dont le format de fichier est reconnu par ffDiaporama et aux sous-répertoires</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="579"/>
        <source>Video files</source>
        <translation>Fichiers vidéos</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="580"/>
        <source>Limit the display of the current folder to the video files of which the format is recognized by ffDiaporama in the present subfolders</source>
        <translation>Permet de limiter l’affichage des éléments du répertoire en cours aux vidéos dont le format de fichier est reconnu par ffDiaporama et aux sous-répertoires</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="581"/>
        <source>Audio files</source>
        <translation>Fichiers musicaux</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="582"/>
        <source>Limit the display of the current folder to the audio files of which the format is recognized by ffDiaporama inthe present subfolders</source>
        <translation>Permet de limiter l’affichage des éléments du répertoire en cours aux musiques dont le format de fichier est reconnu par ffDiaporama et aux sous-répertoires</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="583"/>
        <source>ffDiaporama projects</source>
        <translation>Projets ffDiaporama</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="584"/>
        <source>Limit the display of the current folder to the ffDiaporama project files in the present subfolders</source>
        <translation>Permet de limiter l’affichage des éléments du répertoire en cours aux projets ffDiaporama et aux sous-répertoires</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="587"/>
        <source>Show or hide the hidden files and folders. </source>
        <translation>Permet d’afficher ou de cacher les fichiers et répertoires cachés.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="588"/>
        <source>Under Windows, hidden files and folders have the &lt;B&gt;Hide&lt;/B&gt; file attribute activated. </source>
        <translation>Sous Windows, les fichiers et répertoires cachés ont l’attribut de fichier &lt;B&gt;Hide&lt;/B&gt; activé.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="589"/>
        <source>Under Linux, hidden files and folders have a name beginning with a dot &quot;.&quot; </source>
        <translation>Sous Linux, les fichiers et répertoires cachés ont un nom commençant par un « . »</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="590"/>
        <source>This option accumulates both versions for both systems. So, even under Windows, files and folders with a name beginning with a &quot;.&quot; are considered as hidden files or folders. </source>
        <translation>Cette option cumule les deux versions pour les deux systèmes. Ainsi, même sous Windows, les fichiers et répertoires dont le nom commence par un « . » sont considérés comme des fichiers ou répertoires cachés.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="591"/>
        <location filename="fake/fake.cpp" line="596"/>
        <source>Remark: </source>
        <translation>Note :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="592"/>
        <location filename="fake/fake.cpp" line="597"/>
        <source> or </source>
        <translation> ou </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="594"/>
        <source>Hide filename</source>
        <translation>Cacher les noms de fichier</translation>
    </message>
</context>
<context>
    <name>0030</name>
    <message>
        <location filename="fake/fake.cpp" line="599"/>
        <location filename="fake/fake.cpp" line="602"/>
        <source>Rendering videos</source>
        <translation>Générer des films</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="604"/>
        <source>Portable devices</source>
        <translation>Équipements portables</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="611"/>
        <source>File attachments (Thumbnails, nfo, etc...)</source>
        <oldsource>&lt;a href=&quot;003A.html&quot;&gt;File attachments (Thumbnails, nfo, etc...)&lt;/a&gt;</oldsource>
        <translation>Fichiers joints (Vignettes, nfo, etc...)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="603"/>
        <source>Smartphones and tablets</source>
        <oldsource>&lt;a href=&quot;0032.html&quot;&gt;Smartphones and tablets&lt;/a&gt;</oldsource>
        <translation>Lecteur et smartphone</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="600"/>
        <source> This section contains information about generating video with ffDiaporama. </source>
        <translation> Cette section contient des informations sur la génération vidéo avec ffDiaporama.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="601"/>
        <source>Index</source>
        <translation>Sommaire</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="605"/>
        <source>Multimedia system (Home cinema)</source>
        <oldsource>&lt;a href=&quot;0034.html&quot;&gt;Multimedia system (Home cinema)&lt;/a&gt;</oldsource>
        <translation>Système multimédia de salon</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="606"/>
        <source>For the WEB</source>
        <translation>Pour Internet</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="607"/>
        <source>Video codec</source>
        <translation>Codec vidéo</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="608"/>
        <source>Audio codec</source>
        <translation>Codec audio</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="609"/>
        <source>Containers</source>
        <translation>Containers</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="610"/>
        <source>Video standards and resolutions</source>
        <oldsource>&lt;a href=&quot;0039.html&quot;&gt;Video standards and resolutions&lt;/a&gt;</oldsource>
        <translation>Standards et résolutions des vidéos</translation>
    </message>
</context>
<context>
    <name>0031</name>
    <message>
        <location filename="fake/fake.cpp" line="612"/>
        <source>Rendering videos</source>
        <translation>Générer des films</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="613"/>
        <source>A digital video consists of a computer file called the &lt;a href=&quot;0038.html&quot;&gt;container&lt;/a&gt;</source>
        <oldsource>A digital video consists of a computer file called the </oldsource>
        <translation>Une vidéo numérique est un fichier informatique appelé &lt;a href=&quot;0038.html&quot;&gt;container&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="614"/>
        <source>In this file we find:</source>
        <translation>Dans ce fichier on place :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="615"/>
        <source>One or more video tracks. Each track is built using a &lt;a href=&quot;0036.html&quot;&gt;Video Codec&lt;/a&gt;</source>
        <translation>Une ou plusieurs pistes vidéo. Chaque piste est construite dans un format dépendant d’un &lt;a href=&quot;0036.html&quot;&gt;Codec Vidéo&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="616"/>
        <source>One or more audio tracks. Each track is built using an &lt;a href=&quot;0037.html&quot;&gt;Audio Codec&lt;/a&gt;</source>
        <oldsource>One or more video tracks. Each track is built using a </oldsource>
        <translation>Une ou plusieurs pistes audio. Chaque piste est construite dans un format dépendant d’un &lt;a href=&quot;0037.html&quot;&gt;Codec Audio&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="617"/>
        <source>Possibly, one or more subtitles. Each subtitle is built in a subtitle format.</source>
        <translation>Éventuellement, un ou plusieurs sous-titres. Chaque sous-titres est construite dans un format de sous titre.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="618"/>
        <source>Possibly, a definition of tags and chapters.</source>
        <translation>Éventuellement, une définition de tags et de chapitres.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="619"/>
        <source>Limitations :</source>
        <translation>Limitations :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="620"/>
        <source>ffDiaporama does not manage subtitles.</source>
        <translation>ffDiaporama ne gère pas les sous-titres.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="621"/>
        <source>ffDiaporama generates files that include a single video track and a single audio track.</source>
        <translation>ffDiaporama génère des fichiers vidéos comprenant une seule piste vidéo et une seule piste audio.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="622"/>
        <source>Unlike music files, which are widely portable from one device to another, videos require a certain amount of juggling between various formats to adapt to the equipment used to play them.</source>
        <translation>Contrairement à ce qui se passe avec les musicaux qui sont largement portables d’un appareil à un autre, pour les vidéos, il est nécessaire de jongler entre les différents formats pour s’adapter à l’équipement qui sera utilisé pour les lire.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="623"/>
        <source>A video rendered for a &quot;Home Cinema&quot; device can occupy several Gb and will be unreadable on a smartphone.</source>
        <translation>En effet, une vidéo prévue pour un équipement de type « Home Cinéma » peut peser plusieurs Go et sera illisible sur un Smartphone.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="624"/>
        <source>The same video rendered for a smartphone will require only one Mb, and can be played on a &quot;Home Cinema&quot; device but it will look ugly.</source>
        <translation>La même vidéo prévue pour un Smartphone ne nécessitera que quelques Mo, pourra être lue sur un équipement de type « Home Cinéma » mais ne sera franchement pas belle.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="625"/>
        <source>That is why we recommend that you preserve your original project files as far as possible, and create from them videos suitable for the devices you wish to use for playback.</source>
        <translation>C’est pour cela que nous vous conseillons de conserver autant que possible vos fichiers projets de montage et de générer les films en fonction de l’équipement.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="626"/>
        <source>To simplify settings for the rendering operation, ffDiaporama contains predefined settings for the following devices:</source>
        <translation>Pour simplifier le paramétrage des générations de vidéos, ffDiaporama contient une base d’équipement prévue pour les destinations suivantes :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="627"/>
        <source>&lt;a href=&quot;0032.html&quot;&gt;Smartphones&lt;/a&gt; and &lt;a href=&quot;0033.html&quot;&gt;portable devices&lt;/a&gt;, and small video-playing devices in general</source>
        <oldsource>&lt;a href=&quot;0032.html&quot;&gt;Smartphones&lt;/a&gt; and ;@0033;portable devices&lt;/a&gt;, and small video-playing devices in general</oldsource>
        <translation>&lt;a href=&quot;0032.html&quot;&gt;Smartphone&lt;/a&gt; et &lt;a href=&quot;0033.html&quot;&gt;équipements portables&lt;/a&gt; et d’une façon générale tout les petits appareils permettant de lire une vidéo</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="628"/>
        <source>&lt;a href=&quot;0034.html&quot;&gt;Multimedia systems&lt;/a&gt; for domestic use (&quot;Home Cinema&quot; devices)</source>
        <translation>&lt;a href=&quot;0034.html&quot;&gt;Système multimédia&lt;/a&gt; pour tous les appareils de salon et de « Home Cinéma »</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="629"/>
        <source>&lt;a href=&quot;0035.html&quot;&gt;Display on the Web&lt;/a&gt; (blogs, picture-sharing and social networking sites)</source>
        <translation>&lt;a href=&quot;0035.html&quot;&gt;Pour internet&lt;/a&gt; (Blogs, sites de partage et sites sociaux)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="630"/>
        <source>It is also possible for you to define all parameters directly by using the advanced option.</source>
        <translation>Il est également possible de définir vous même vos paramètres au travers d’une option avancée.</translation>
    </message>
</context>
<context>
    <name>0032</name>
    <message>
        <location filename="fake/fake.cpp" line="631"/>
        <source>Smartphones and tablets</source>
        <translation>Smartphone et tablettes</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="632"/>
        <source>Generally speaking the main differences between these devices are:</source>
        <translation>D’une façon générale, les principales différences entre ces équipements sont :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="633"/>
        <source>Screen size and maximal resolution</source>
        <translation>La taille de l’écran et la résolution maximale</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="634"/>
        <source>Operating system on the device</source>
        <translation>Le système d’exploitation de l’équipement</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="635"/>
        <source>Consult the documentation for your equipment or search the Internet to determine these two characteristics.</source>
        <translation>Consulter la notice technique de votre équipement ou faites une rechercher sur internet pour connaître ces deux caractéristiques.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="636"/>
        <source>As far as the resolution is concerned, note that most devices can play videos designed for lower resolution devices without difficulty. </source>
        <oldsource>As far as the resolution is concerned, note that most devices can play videos designed for lower resolution devices without difficulty.</oldsource>
        <translation>Concernant la résolution, prenez en compte le fait que les équipements peuvent en général lire sans difficultés des vidéos de tailles inférieures.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="637"/>
        <source>The device models available in ffDiaporama are as follows: </source>
        <translation>Les modèles d&apos;équipements disponibles dans ffDiaporama sont les suivants :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="638"/>
        <source>Device type</source>
        <translation>Type d&apos;équipement</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="639"/>
        <source>Operating system</source>
        <translation>Système d’exploitation</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="640"/>
        <source>Available resolution</source>
        <translation>Résolution disponibles</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="641"/>
        <source>Remarks</source>
        <translation>Notes</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="642"/>
        <source>Smartphone</source>
        <translation>Smartphone</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="643"/>
        <source>Nokia Symbian System S60</source>
        <translation>Nokia Symbian System S60</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="649"/>
        <source>Windows Mobile 6.0/6.1/6.5</source>
        <translation>Windows Mobile 6.0/6.1/6.5</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="651"/>
        <location filename="fake/fake.cpp" line="663"/>
        <location filename="fake/fake.cpp" line="670"/>
        <source>HVGA</source>
        <translation>HVGA</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="653"/>
        <location filename="fake/fake.cpp" line="658"/>
        <location filename="fake/fake.cpp" line="665"/>
        <location filename="fake/fake.cpp" line="673"/>
        <location filename="fake/fake.cpp" line="687"/>
        <source>WVGA</source>
        <translation>WVGA</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="654"/>
        <source>Numerous manufacturers made phones using the Microsoft Windows Mobile 6 operating system (HP, HTC, etc.) between 2006 and 2010.</source>
        <translation>De très nombreux constructeur ont fabriqués entre 2006 et 2010, des téléphones utilisant le système d’exploitation Windows Mobile 6 de Microsoft (HP, HTC, etc…).</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="655"/>
        <source>Movie format is: Container: 3GP - Video Codec: MPEG4 - Audio Codec: AMR</source>
        <oldsource>Microsoft Windows Phone 7 is the evolution of Windows Mobil 6&lt;BR&gt;Movie format is: Container: MP4 - Video Codec: h264 - Audio Codec: AAC-LC</oldsource>
        <translation>Le format des vidéos est : Container : 3GP – Codec vidéo : MPEG4 – Codec audio : AMR</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="656"/>
        <source>Note: Store video files in the &quot;My videos&quot; folder having connected the telephone to the PC in &quot;mass storage&quot; mode. </source>
        <translation>Note : Déposer les fichiers vidéos dans le répertoire « My videos » soit de l’appareil, soit de la carte SDMMC, après avoir connecté le téléphone au PC en mode « Périphérique de masse ».</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="657"/>
        <source>Windows Phone 7</source>
        <translation>Windows Phone 7</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="659"/>
        <source>Microsoft Windows Phone 7 is the evolution of Windows Mobil 6</source>
        <translation>Windows Phone 7 de Microsoft est l’évolution de Windows Mobil 6</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="660"/>
        <location filename="fake/fake.cpp" line="667"/>
        <location filename="fake/fake.cpp" line="671"/>
        <location filename="fake/fake.cpp" line="689"/>
        <location filename="fake/fake.cpp" line="692"/>
        <location filename="fake/fake.cpp" line="694"/>
        <location filename="fake/fake.cpp" line="696"/>
        <location filename="fake/fake.cpp" line="700"/>
        <location filename="fake/fake.cpp" line="703"/>
        <location filename="fake/fake.cpp" line="710"/>
        <location filename="fake/fake.cpp" line="712"/>
        <source>Movie format is: Container: MP4 - Video Codec: h264 - Audio Codec: AAC-LC</source>
        <translation>Le format des vidéos est : Container : MP4 – Codec vidéo : x264 – Codec audio : AAC-LC</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="661"/>
        <source>Android</source>
        <translation>Android</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="666"/>
        <source>Many manufacturers made or still make phones using the Google Android operating system.</source>
        <translation>Près d’une trentaine de fabricant ont fabriqués ou fabriquent encore des téléphones utilisant le système d’exploitation Android de Google.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="668"/>
        <location filename="fake/fake.cpp" line="697"/>
        <source>Apple iOS</source>
        <translation>Apple iOS</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="669"/>
        <source>iPhone 3G/3GS</source>
        <translation>iPhone 3G/3GS</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="672"/>
        <source>iPhone 4</source>
        <translation>iPhone 4</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="674"/>
        <source>HP - WebOs</source>
        <translation>HP - WebOs</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="675"/>
        <source>WebOs arises from the repurchase of Palm by HP.</source>
        <translation>WebOs est issue du rachat de Palm par HP.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="676"/>
        <location filename="fake/fake.cpp" line="682"/>
        <source>&lt;B&gt;To be completed&lt;/B&gt;</source>
        <translation>&lt;B&gt;à compléter&lt;/B&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="677"/>
        <source>Blackberry OS</source>
        <translation>Blackberry OS</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="678"/>
        <source>RIM 240</source>
        <translation>RIM 240</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="679"/>
        <location filename="fake/fake.cpp" line="707"/>
        <source>Movie format is: Container: AVI - Video Codec: MPEG4 - Audio Codec: MP3</source>
        <translation>Le format des vidéos est : Container : AVI – Codec vidéo : MPEG4 – Codec audio : MP3</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="680"/>
        <source>Note: store video files in the \Blackberry\Video folder after connecting the telephone to the PC &quot;mass storage&quot; mode.</source>
        <oldsource>Note: store video files in the BlackberryVideo folder after connecting the telephone to the PC &quot;mass storage&quot; mode.</oldsource>
        <translation>Note : Déposer les fichiers vidéos dans le répertoire « \blackberry\Video » après avoir connecté le téléphone au PC en mode « Périphérique de masse ».</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="681"/>
        <source>Samsung BADA</source>
        <translation>Samsung BADA</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="683"/>
        <source>Tablet</source>
        <translation>Tablette</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="684"/>
        <source>Android 2.x</source>
        <translation>Android 2.x</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="685"/>
        <source>Android 3.x</source>
        <translation>Android 3.x</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="686"/>
        <source>Linux</source>
        <translation>Linux</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="688"/>
        <source>Tablet examples: Archos 4/5/70/Arnova 10, Dell Streak, Creative ZiiO 7</source>
        <translation>Exemples de tablettes : Archos 4/5/70/Arnova 10, Dell Streak, Creative ZiiO 7</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="690"/>
        <location filename="fake/fake.cpp" line="699"/>
        <source>XGA</source>
        <translation>XGA</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="691"/>
        <source>Tablet examples: Archos 101, Samsung Galaxy Tab, HTC Flyer, Hannspree HANNSpad SN10T, Toshiba Folio 100</source>
        <translation>Exemples de tablettes : Archos 101, Samsung Galaxy Tab, HTC Flyer, Hannspree HANNSpad SN10T, Toshiba Folio 100</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="693"/>
        <source>Tablet examples: HP TouchPad</source>
        <translation>Exemples de tablette : HP TouchPad</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="695"/>
        <source>Tablet examples: ASUS Eee Pad, Motorola Xoom, Packard Bell Liberty Tab, LG Optimus Pad, Archos G9</source>
        <translation>Exemples de tablettes : ASUS Eee Pad, Motorola Xoom, Packard Bell Liberty Tab, LG Optimus Pad, Archos G9</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="698"/>
        <source>iPad</source>
        <translation>iPad</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="701"/>
        <source>RIM BlackBerry</source>
        <translation>RIM BlackBerry</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="702"/>
        <source>Playbook</source>
        <translation>Playbook</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="704"/>
        <source>Netbook/NetPC</source>
        <translation>Netbook/NetPC</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="705"/>
        <source>Windows/XP</source>
        <translation>Windows/XP</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="644"/>
        <location filename="fake/fake.cpp" line="650"/>
        <location filename="fake/fake.cpp" line="662"/>
        <source>QVGA</source>
        <translation>QVGA</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="645"/>
        <location filename="fake/fake.cpp" line="652"/>
        <location filename="fake/fake.cpp" line="664"/>
        <source>VGA</source>
        <translation>VGA</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="646"/>
        <source>Generally, Nokia phones working with the Symbian operating system and equipped with a camera, are capable of playing videos. Very often, those provided with a keyboard offer a 320x240 resolution (QVGA), while those with only a touch-sensitive screen offer a 640x360 resolution (VGA).</source>
        <oldsource>Generally, Nokia phones working with the Symbian operating system and equipped with a camera, are capable of playing videos. Very often, those provided with a keyboard offer a 320&amp;times;240 resolution (QVGA), while those with only a touch-sensitive screen offer a 640&amp;times;360 resolution (VGA).</oldsource>
        <translation>En général, les téléphones Nokia fonctionnant avec le système d’exploitation Symbian et étant équipé d’un appareil photo, sont capables de lire des vidéos. Très souvent, ceux munis d’un clavier offrent une résolution de 320x240 (QVGA), alors que ceux munis uniquement d’un écran tactile offrent une résolution de 640x360 (VGA).</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="647"/>
        <source>Movie format is: Container: MP4 - Video Codec: MPEG4 - Audio Codec: MP3</source>
        <translation>Le format des vidéos est : Container : MP4 – Codec vidéo : MPEG4 – Codec audio : MP3</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="648"/>
        <source>Note: Video files should be stored in the &quot;My videos&quot; folder after connecting the telephone to the PC in &quot;mass storage&quot; mode. </source>
        <translation>Note : Déposer les fichiers vidéos dans le répertoire « My videos » après avoir connecté le téléphone au PC en mode « Périphérique de masse ».</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="706"/>
        <source>Require xVid or DivX codec to be installed on the computer.</source>
        <translation>Nécessite d&apos;avoir installé le codec xVid ou DivX en complément sur le pc.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="708"/>
        <source>Windows/Vista</source>
        <translation>Windows/Vista</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="709"/>
        <source>Windows/7</source>
        <translation>Windows/7</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="711"/>
        <source>Android/Linux</source>
        <translation>Android/Linux</translation>
    </message>
</context>
<context>
    <name>0033</name>
    <message>
        <location filename="fake/fake.cpp" line="713"/>
        <source>Portable devices</source>
        <translation>Équipements portables</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="714"/>
        <source>These portable devices are usually very specific. We will not discuss therefore either operating system or resolution.</source>
        <translation>Ces équipements portables sont en général très spécifique. On ne parle donc ni de système d’exploitation, ni de résolution.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="715"/>
        <source>Device type</source>
        <translation>Type d’équipement</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="716"/>
        <source>Manufacturer/Model</source>
        <translation>Constructeur/Modèle</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="717"/>
        <source>Remark</source>
        <translation>Note</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="718"/>
        <source>Portable player</source>
        <translation>Lecteur portable</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="719"/>
        <source>DVD/DivX portable player (car player or travel player)</source>
        <translation>Lecteur de DVD/DivX portable (de voyage ou de voiture)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="720"/>
        <source>All these devices use the old DVD/DIVX format with anamorphic resolution 720x576 (PAL) or 720x480 ( NTSC).</source>
        <oldsource>All these devices use the old DVD/DIVX format with anamorphic resolution 720&amp;times;576 (PAL) or 720&amp;times;480 ( NTSC).</oldsource>
        <translation>Tous ces appareils utilisent l’ancien format des DVD DivX en résolution anamorphique 720x576(PAL) ou 720x480(NTSC).</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="721"/>
        <source>Movie format is: Container: AVI - Video Codec: MPEG4 - Audio Codec: MP3</source>
        <translation>Le format des vidéos est : Container : AVI – Codec vidéo : MPEG4 – Codec audio : MP3</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="722"/>
        <source>If the device does not have a USB port, burn a DVD from your video files. Otherwise simply copy your files to a USB pendrive.</source>
        <translation>Si l’appareil ne dispose pas de connecteur USB : Graver un DVD en mode donnée en y déposant vos fichiers vidéos. Sinon copier simplement vos fichiers vidéos sur une clef USB.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="723"/>
        <source>iPod Classic (G5/G6)</source>
        <translation>iPod Classic (G5/G6)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="724"/>
        <source>iPod Nano (G3/G4/G5)</source>
        <translation>iPod Nano (G3/G4/G5)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="725"/>
        <source>These two portable player were especially designed for music. Therefore, their resolution is only QVGA.</source>
        <translation>Ces deux baladeurs ont surtout été conçus pour la musique. De ce fait, leur résolution n’est que QVGA.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="726"/>
        <location filename="fake/fake.cpp" line="729"/>
        <location filename="fake/fake.cpp" line="732"/>
        <source>Movie format is: Container: MP4 - Video Codec: h264 - Audio Codec: AAC-LC</source>
        <translation>Le format des vidéos est : Container : MP4 – Codec vidéo : x264 – Codec audio : AAC-LC</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="735"/>
        <source>Resolution 320x480 / NTSC</source>
        <oldsource>Resolution 320&amp;times;480 / NTSC</oldsource>
        <translation>Résolution 320x480 en format NTSC</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="736"/>
        <source>-s 320x480 -b 512000 -ar 24000 -ab 64000 -f psp -r 29.97</source>
        <oldsource>-s 320&amp;times;480 -b 512000 -ar 24000 -ab 64000 -f psp -r 29.97</oldsource>
        <translation>-s 320x480 -b 512000 -ar 24000 -ab 64000 -f psp -r 29.97</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="737"/>
        <source>-ac 2 -ar 48000 -acodec libfAAC-LC -ab 128k -r FRAME_RATE -s WIDTHxHEIGHT -vcodec libh264 -vpre slower -vpre main -level 21 -refs 2 -b BIT_RATE -bt BIT_RATE -aspect WIDTH:HEIGHT -f psp</source>
        <translation>-ac 2 -ar 48000 -acodec libfAAC-LC -ab 128k -r FRAME_RATE -s WIDTHxHEIGHT -vcodec libh264 -vpre slower -vpre main -level 21 -refs 2 -b BIT_RATE -bt BIT_RATE -aspect WIDTH:HEIGHT -f psp</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="727"/>
        <source>Apple iPod Touch</source>
        <translation>Apple iPod Touch</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="728"/>
        <source>This portable player has a video resolution comparable to the DVD (without anamorphism).</source>
        <translation>Ce baladeur a une résolution vidéo comparable au DVD (sans anamorphisme).</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="730"/>
        <source>Portable LED/LCD TV</source>
        <translation>Portable LED/LCD TV</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="731"/>
        <source>These devices, when they support the HD TV, have a real resolution of 1024x576.</source>
        <oldsource>These devices, when they support the HD TV, have a real resolution of 1024&amp;times;576.</oldsource>
        <translation>Ces appareils, quand ils supportent la TV HD, ont une résolution réel de 1024×576.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="733"/>
        <source>Handheld game console</source>
        <translation>Console de jeux portable</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="734"/>
        <source>Sony PSP</source>
        <translation>Sony PSP</translation>
    </message>
</context>
<context>
    <name>0034</name>
    <message>
        <location filename="fake/fake.cpp" line="738"/>
        <source>Multimedia system (Home cinema)</source>
        <translation>Système multimédia de salon</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="739"/>
        <source> These &quot;Home Cinema&quot; devices are connected to a television set. The format choice will thus be made according to the requirements of the set used. </source>
        <oldsource>These &quot;Home Cinema&quot; devices are connected to a television set. The format choice will thus be made according to the requirements of the set used.</oldsource>
        <translation>Ces équipements « Home Cinéma » sont connectés à un téléviseur. Le choix du format de sortie se fera donc d’abord en fonction de la capacité du téléviseur.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="740"/>
        <source>Warning: The old SD format is only suitable for old television sets using cathode ray tube technology. With these tubes, points were not circular but oval: we call this anamorphism. </source>
        <oldsource>Warning: The old SD format is only suitable for old television sets using cathode ray tube technology. With these tubes, points were not circular but oval: we call this anamorphism.</oldsource>
        <translation>Attention : L’ancien format SD est adapté aux anciens téléviseurs utilisant la technologie des tubes cathodiques. Avec ces tubes, les points n’étaient pas rond mais ovales : on parle d’anamorphisme.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="741"/>
        <source>Playing a video in SD format on a modern LCD, LED or plasma television set gives openly disastrous results: The image is particularly ugly! Thus, if your television is new and if your device allows it, always use a HD or Full-HD format in preference to a SD format. </source>
        <oldsource>Playing a video in SD format on a modern LCD, LED or plasma television set gives openly disastrous results: The image is particularly ugly! Thus, if your television is new and if your device allows it, always use a HD or Full-HD format in preference to a SD format.</oldsource>
        <translation>Lire une vidéo au format SD, sur un téléviseur moderne en LCD, LED ou Plasma donne des résultats franchement calamiteux : l’image est particulièrement laide ! Donc, si votre téléviseur est récent et si votre équipement de diffusion le permet, préférer toujours un format HD ou Full-HD à un format SD.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="742"/>
        <source>Device type</source>
        <translation>Type d’équipement</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="743"/>
        <source>Manufacturer/Model</source>
        <translation>Constructeur/Modèle</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="744"/>
        <source>Remark</source>
        <translation>Note</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="745"/>
        <source>TV box of ADSL box</source>
        <oldsource>TV box of  ADSL box</oldsource>
        <translation>Boîtier TV de BOX ADSL</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="746"/>
        <source>France - Livebox (Orange)</source>
        <translation>France - Livebox (Orange)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="747"/>
        <location filename="fake/fake.cpp" line="757"/>
        <source>All these devices support the old DVD/DIVX format with anamorphic resolution 720x576 (PAL) for the DVD resolution</source>
        <oldsource>All these devices support the old DVD/DIVX format with anamorphic resolution 720&amp;times;576 (PAL) for the DVD resolution</oldsource>
        <translation>Tous ces équipements supportent l’ancien format des DVD DivX en résolution anamorphique 720x576(PAL) pour la résolution DVD</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="748"/>
        <location filename="fake/fake.cpp" line="758"/>
        <location filename="fake/fake.cpp" line="764"/>
        <source>Movie format is: Container: AVI - Video Codec: MPEG4 - Audio Codec: MP3</source>
        <translation>Le format des vidéos est : Container : AVI – Codec vidéo : MPEG4 – Codec audio : MP3</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="749"/>
        <location filename="fake/fake.cpp" line="770"/>
        <source>All these devices support the MP4 format up to the FullHD 1080p resolution</source>
        <translation>Tous ces équipements supportent le format MP4 jusqu’à la résolution FullHD 1080p</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="750"/>
        <location filename="fake/fake.cpp" line="760"/>
        <location filename="fake/fake.cpp" line="771"/>
        <source>Movie format is: Container: MP4 - Video Codec: h264 - Audio Codec: AAC-LC</source>
        <translation>Le format des vidéos est : Container : MP4 – Codec vidéo : x264 – Codec audio : AAC-LC</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="751"/>
        <source>Copy your video files to a USB pendrive or an external hard disk and use the multimedia player integrated into the menu of the decoder</source>
        <translation>Copier vos fichiers vidéos sur une clef USB ou un disque dur externe et utiliser le lecteur multimédia intégré dans le menu du décodeur</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="752"/>
        <source>France - Freebox</source>
        <translation>France - Freebox</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="753"/>
        <source>France - Neufbox (SFR)</source>
        <translation>France - Neufbox (SFR)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="754"/>
        <source>France - Bbox (Bouygues Telecom)</source>
        <translation>France - Bbox (Bouygues Telecom)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="755"/>
        <source>Multimedia hard drive and gateway</source>
        <translation>Disque dur et passerelle multimédia</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="756"/>
        <source>All manufacturers</source>
        <translation>Tous les constructeurs</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="759"/>
        <source>Equipments supporting HD (to verify in the technical specifications of the device) support the MP4 format until the FullHD 1080p resolution</source>
        <translation>Les équipements offrant la prise en charge de la HD (à vérifier dans les spécifications techniques de l’appareil) supportent le format MP4 jusqu’à la résolution FullHD 1080p</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="761"/>
        <source>Player</source>
        <translation>Lecteur de salon</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="762"/>
        <source>DVD/DivX Player</source>
        <translation>Lecteur DVD/DivX</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="763"/>
        <source>These devices only support the old DVD/DIVX format with anamorphic resolution 720x576 (PAL) for the DVD resolution</source>
        <oldsource>These devices only support the old DVD/DIVX format with anamorphic resolution 720&amp;times;576 (PAL) for the DVD resolution</oldsource>
        <translation>Tous ces équipements supportent l’ancien format des DVD DivX en résolution anamorphique 720×576(PAL) pour la résolution DVD</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="765"/>
        <source>If the device does not have an USB connector: burn a DVD with your video files. Otherwise simply copy your videos files to a USB pendrive.</source>
        <translation>Si l’appareil ne dispose pas de connecteur USB : Graver un DVD en mode donnée en y déposant vos fichiers vidéos. Sinon copier simplement vos fichiers vidéos sur une clef USB.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="766"/>
        <source>BlueRay player</source>
        <translation>Lecteur BlueRay</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="767"/>
        <source>&lt;B&gt;To be completed&lt;/B&gt;</source>
        <translation>&lt;B&gt;à compléter&lt;/B&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="768"/>
        <source>Games console</source>
        <translation>Console de jeux</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="769"/>
        <source>PS3</source>
        <translation>PS3</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="772"/>
        <source>XBox360</source>
        <translation>XBox360</translation>
    </message>
</context>
<context>
    <name>0035</name>
    <message>
        <location filename="fake/fake.cpp" line="773"/>
        <source>For the WEB</source>
        <translation>Pour Internet</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="774"/>
        <source>Device type</source>
        <translation>Type d’équipement</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="775"/>
        <source>Manufacturer/Model</source>
        <translation>Constructeur/Modèle</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="776"/>
        <source>Remark</source>
        <translation>Note</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="777"/>
        <source>Flash player (SWF)</source>
        <translation>Lecteur flash (SWF)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="778"/>
        <source>All SWF players</source>
        <translation>Tous les lecteurs SWF</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="779"/>
        <source>To be used with the HTML tag object class=&quot;player&quot; type=&quot;application/x-shockwave-flash&quot;</source>
        <translation>A utiliser avec des balises HTML object class= »player » type= »application/x-shockwave-flash »</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="780"/>
        <source>- For 4/3 : 320x240, 640x480, 960x720, 1440x1080</source>
        <oldsource>- For 4/3 : 320&amp;times;240, 640&amp;times;480, 960&amp;times;720, 1440&amp;times;1080</oldsource>
        <translation>- En résolution 4/3 : 320x240, 640x480, 960x720, 1440×1080</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="781"/>
        <source>- For 16/9 : 320x180, 640x360, 1280x720, 1920x1080</source>
        <oldsource>- For 16/9 : 320&amp;times;180, 640&amp;times;360, 1280&amp;times;720, 1920&amp;times;1080</oldsource>
        <translation>- En résolution 16/9 : 320x180, 640x360, 1280x720, 1920x1080</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="782"/>
        <source>- For 40/17 : 320x136, 640x272, 1280x544, 1920x816</source>
        <oldsource>- For 40/17 : 320&amp;times;136, 640&amp;times;272, 1280&amp;times;544, 1920&amp;times;816</oldsource>
        <translation>- En résolution 40/17 : 320x136, 640x272, 1280x544, 1920x816</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="783"/>
        <source>Movie format is: Container: SWF(2008) - Video Codec: h264 - Audio Codec: AAC-LC</source>
        <translation>Container : SWF(2008) – Codec vidéo : x264 – Codec audio : AAC-LC</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="784"/>
        <source>Sharing and social networking</source>
        <translation>Plate-forme de partage</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="785"/>
        <source>Youtube</source>
        <translation>Youtube</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="786"/>
        <source>720p - Movie format is: Container: MP4 - Video Codec: xVid - Audio Codec: MP3</source>
        <translation>720p – Container : MP4 – Codec vidéo : xVid – Codec audio : MP3</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="787"/>
        <source>Daily Motion</source>
        <translation>Daily Motion</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="788"/>
        <source>720p - Movie format is: Container: MP4 - Video Codec: h264 - Audio Codec: AAC-LC</source>
        <translation>720p – Container : MP4 – Codec vidéo : x264 – Codec audio : AAC-LC</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="789"/>
        <source>Facebook</source>
        <translation>Facebook</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="790"/>
        <source>Publish the video on YouTube or Daily Motion and integrate a link towards this video into Facebook</source>
        <translation>Publier la vidéo sur Youtube ou Daily Motion et intégrer un lien vers cette vidéo dans Facebook</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="791"/>
        <source>HTML 5</source>
        <translation>HTML 5</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="792"/>
        <source>webm</source>
        <translation>webm</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="793"/>
        <source>To be added to allow the new video TAG in HTML5 browsers. </source>
        <translation>À ajouter pour permettre que la nouvelle balise video HTML5 couvre tout les navigateurs.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="794"/>
        <source>WebM is an open source format usable with Firefox, Google Chrome and Opera </source>
        <translation>WebM est un format ouvert exploitable dans Firefox, Google Chrome et Opera</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="795"/>
        <source>H264 is a format usable in Safari, Internet Explorer and Google Chrome </source>
        <translation>H264 est un format exploitable dans Safari, Internet Explorer et Google Chrome</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="796"/>
        <source>To maintain backward compatibility with older browsers, it is advisable to offer a flash version within the tag. See: </source>
        <oldsource>To maintain backward compatibility with older browsers, it is advisable to offer a flash version within the tag (see </oldsource>
        <translation>Pour garder une rétro-compatibilité avec les anciens navigateurs, il est conseillé de proposer une version flash au sein de la balise. Cf :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="797"/>
        <source>developer.mozilla.org</source>
        <translation>developer.mozilla.org</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="798"/>
        <source>mp4</source>
        <translation>mp4</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="799"/>
        <source>ogv</source>
        <translation>ogv</translation>
    </message>
</context>
<context>
    <name>0036</name>
    <message>
        <location filename="fake/fake.cpp" line="800"/>
        <source>Video codec</source>
        <oldsource>Rendering videos: Video codec</oldsource>
        <translation>Codec vidéo</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="801"/>
        <source>The following table lists the video codecs which ffDiaporama can use to generate videos:</source>
        <translation>Le tableau suivant liste les codecs vidéo que ffDiaporama peut utiliser pour générer des vidéos :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="802"/>
        <source>Codec</source>
        <translation>Codec vidéo</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="803"/>
        <source>Name</source>
        <translation>Nom</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="804"/>
        <source>WIKIPEDIA/Remark</source>
        <translation>WIKIPEDIA/Remarque</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="805"/>
        <source>MPJEP</source>
        <translation>MPJEP</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="806"/>
        <source>Motion JPEG</source>
        <translation>Motion JPEG</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="807"/>
        <source>http://en.wikipedia.org/wiki/Motion_JPEG</source>
        <translation>http://en.wikipedia.org/wiki/Motion_JPEG</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="808"/>
        <source>MPEG2</source>
        <translation>MPEG2</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="809"/>
        <source>MPEG-2 video</source>
        <translation>MPEG-2 video</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="810"/>
        <source>http://en.wikipedia.org/wiki/MPEG-2</source>
        <translation>http://en.wikipedia.org/wiki/MPEG-2</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="811"/>
        <source>MPEG4</source>
        <translation>MPEG4</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="812"/>
        <source>DivX/XVid/MPEG-4</source>
        <translation>DivX/XVid/MPEG-4</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="813"/>
        <source>http://en.wikipedia.org/wiki/Xvid</source>
        <translation>http://en.wikipedia.org/wiki/Xvid</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="814"/>
        <source>H264HQ</source>
        <translation>H264HQ</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="815"/>
        <source>High Quality H.264 AVC/MPEG-4 AVC</source>
        <translation>High Quality H.264 AVC/MPEG-4 AVC</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="816"/>
        <source>http://en.wikipedia.org/wiki/H.264/MPEG-4_AVC</source>
        <translation>http://en.wikipedia.org/wiki/H.264/MPEG-4_AVC</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="817"/>
        <source>ffDiaporama uses specific settings for encoding with x264. This settings are including: </source>
        <translation>ffDiaporama utilise des paramètres spécifiques pour l&apos;encodage en x264. Ces paramètres comprennent :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="818"/>
        <source>- &lt;B&gt;High Quality&lt;/B&gt; for &quot;Home Cinema&quot; devices based on x264 &lt;U&gt;main&lt;/U&gt; profile, with 3 refs and 3 bframes. </source>
        <translation>- &lt;B&gt;High Quality&lt;/B&gt; pour les systèmes &quot;Home Cinema&quot; basé sur le profile x264 &lt;U&gt;main&lt;/U&gt;, avec 3 refs et 3 bframes.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="819"/>
        <source>- &lt;B&gt;Phone Quality&lt;/B&gt; for mobile devices based on x264 &lt;U&gt;baseline&lt;/U&gt; profile, with 3 refs and 0 bframes. </source>
        <translation>- &lt;B&gt;Phone Quality&lt;/B&gt; pour les équipements mobiles basé sur le profile x264 &lt;U&gt;baseline&lt;/U&gt;, avec 3 refs et 0 bframes.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="820"/>
        <source>Both settings are using &lt;U&gt;veryfast&lt;/U&gt; preset. </source>
        <oldsource>Both settings are using &lt;U&gt;veryfast&lt;/U&gt; preset</oldsource>
        <translation>Les deux réglages utilisent le preset &lt;U&gt;veryfast&lt;/U&gt;.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="821"/>
        <source>Note: Variable bitrate is used with these two codecs. For more information on variable bitrate, see: &lt;a href=&quot;0115.html&quot;&gt;Render video&lt;/a&gt;</source>
        <translation>Remarque : Le débit variable est utilisé avec ces deux codecs. Pour plus d&apos;informations sur le débit variable, consulter : &lt;a href=&quot;0115.html&quot;&gt;Générer des vidéos&lt;/ a&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="827"/>
        <source>ffDiaporama uses the standard x264 &lt;U&gt;fast&lt;/U&gt; preset with 3 refs and qp set to 0.</source>
        <translation>ffDiaporama utilise le preset standard &lt;u&gt;fast&lt;/u&gt; de x264 avec 3 refs et le qp mis à 0.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="822"/>
        <source>H264PQ</source>
        <translation>H264PQ</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="823"/>
        <source>Phone Quality H.264 AVC/MPEG-4 AVC</source>
        <translation>Phone Quality H.264 AVC/MPEG-4 AVC</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="824"/>
        <source>X264LL</source>
        <translation>X264LL</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="825"/>
        <source>x264 Lossless</source>
        <translation>x264 Lossless</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="826"/>
        <source>http://en.wikipedia.org/wiki/X264</source>
        <translation>http://en.wikipedia.org/wiki/X264</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="828"/>
        <source>VP8</source>
        <translation>VP8</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="829"/>
        <source>WebP (WebM-VP8)</source>
        <translation>WebP (WebM-VP8)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="830"/>
        <source>http://en.wikipedia.org/wiki/WebM</source>
        <translation>http://en.wikipedia.org/wiki/WebM</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="831"/>
        <source>Sorenson H.263</source>
        <translation>Sorenson H.263</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="832"/>
        <source>http://en.wikipedia.org/wiki/H.263</source>
        <translation>http://en.wikipedia.org/wiki/H.263</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="833"/>
        <source>THEORA</source>
        <translation>THEORA</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="834"/>
        <source>Theora VP3</source>
        <translation>Theora VP3</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="835"/>
        <source>http://en.wikipedia.org/wiki/Theora</source>
        <translation>http://en.wikipedia.org/wiki/Theora</translation>
    </message>
</context>
<context>
    <name>0037</name>
    <message>
        <location filename="fake/fake.cpp" line="836"/>
        <source>Audio codec</source>
        <oldsource>Rendering videos: Audio codec</oldsource>
        <translation>Codec audio</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="837"/>
        <source>The following table lists the audio codecs which ffDiaporama can use to generate videos:</source>
        <translation>Le tableau suivant liste les codecs audio que ffDiaporama peut utiliser pour générer des vidéos :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="838"/>
        <source>Codec</source>
        <translation>Codec audio</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="839"/>
        <source>Name</source>
        <translation>Nom</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="840"/>
        <source>WIKIPEDIA</source>
        <translation>WIKIPEDIA</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="841"/>
        <source>PCM</source>
        <translation>PCM</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="842"/>
        <source>WAV / PCM signed 16-bit little-endian</source>
        <translation>WAV / PCM signed 16-bit little-endian</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="843"/>
        <source>http://en.wikipedia.org/wiki/Pulse-code_modulation</source>
        <translation>http://en.wikipedia.org/wiki/Pulse-code_modulation</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="844"/>
        <source>MP3</source>
        <translation>MP3</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="845"/>
        <source>MPEG-1/2 Audio Layer III</source>
        <translation>MPEG-1/2 Audio Layer III</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="846"/>
        <source>http://en.wikipedia.org/wiki/MP3</source>
        <translation>http://en.wikipedia.org/wiki/MP3</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="847"/>
        <source>AAC-LC</source>
        <translation>AAC-LC</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="848"/>
        <source>Advanced Audio Codec</source>
        <translation>Advanced Audio Codec</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="849"/>
        <source>http://en.wikipedia.org/wiki/Advanced_Audio_Coding</source>
        <translation>http://en.wikipedia.org/wiki/Advanced_Audio_Coding</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="850"/>
        <source>AC3</source>
        <translation>AC3</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="851"/>
        <source>Dolby Digital</source>
        <translation>Dolby Digital</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="852"/>
        <source>http://en.wikipedia.org/wiki/Dolby_Digital</source>
        <translation>http://en.wikipedia.org/wiki/Dolby_Digital</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="853"/>
        <source>VORBIS</source>
        <translation>VORBIS</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="854"/>
        <source>Vorbis</source>
        <translation>Vorbis</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="855"/>
        <source>http://en.wikipedia.org/wiki/Vorbis</source>
        <translation>http://en.wikipedia.org/wiki/Vorbis</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="856"/>
        <source>MP2</source>
        <translation>MP2</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="857"/>
        <source>MPEG-1 Layer II</source>
        <translation>MPEG-1 Layer II</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="858"/>
        <source>http://en.wikipedia.org/wiki/MPEG-2</source>
        <translation>http://en.wikipedia.org/wiki/MPEG-2</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="859"/>
        <source>AMR</source>
        <translation>AMR</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="860"/>
        <source>Adaptive Multi-Rate</source>
        <translation>Adaptive Multi-Rate</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="861"/>
        <source>http://en.wikipedia.org/wiki/Adaptive_Multi-Rate_audio_codec</source>
        <translation>http://en.wikipedia.org/wiki/Adaptive_Multi-Rate_audio_codec</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="862"/>
        <source>FLAC</source>
        <translation>FLAC</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="863"/>
        <source>Free Lossless Audio Codec</source>
        <translation>Free Lossless Audio Codec</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="864"/>
        <source>http://en.wikipedia.org/wiki/Flac</source>
        <translation>http://en.wikipedia.org/wiki/Flac</translation>
    </message>
</context>
<context>
    <name>0038</name>
    <message>
        <location filename="fake/fake.cpp" line="865"/>
        <source>Container</source>
        <translation>Containers</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="866"/>
        <source>The following table lists the containers which ffDiaporama can use to generate videos, as well as the available audio and video codecs for every container:</source>
        <translation>Le tableau suivant liste les formats de container que ffDiaporama peut utiliser pour générer des vidéos, ainsi que les codecs audio et vidéo disponibles pour chaque container :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="867"/>
        <source>Extension</source>
        <translation>Extension</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="868"/>
        <source>Name</source>
        <oldsource>Nom</oldsource>
        <translation>Nom</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="869"/>
        <source>Video Codecs</source>
        <oldsource>Codecs vidÃ©o</oldsource>
        <translation>Codecs vidéo</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="870"/>
        <source>Audio Codecs</source>
        <oldsource>Codecs Audio</oldsource>
        <translation>Codecs audio</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="871"/>
        <source>WIKIPEDIA</source>
        <translation>WIKIPEDIA</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="872"/>
        <location filename="fake/fake.cpp" line="873"/>
        <source>3GP</source>
        <translation>3GP</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="874"/>
        <location filename="fake/fake.cpp" line="894"/>
        <source>MPEG4, H264HQ/H264PQ</source>
        <translation>MPEG4, H264HQ/H264PQ</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="875"/>
        <source>AMR</source>
        <translation>AMR</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="876"/>
        <source>http://en.wikipedia.org/wiki/3GP_and_3G2</source>
        <translation>http://en.wikipedia.org/wiki/3GP_and_3G2</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="877"/>
        <source>AVI</source>
        <translation>AVI</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="878"/>
        <source>Audio Video Interleave</source>
        <translation>Audio Video Interleave</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="879"/>
        <source>MJPEG, MPEG2, MPEG4, H264HQ/H264PQ</source>
        <translation>MJPEG, MPEG2, MPEG4, H264HQ/H264PQ</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="880"/>
        <source>PCM, MP2, MP3, AAC, AC3</source>
        <translation>PCM, MP2, MP3, AAC, AC3</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="881"/>
        <source>http://en.wikipedia.org/wiki/Audio_Video_Interleave</source>
        <translation>http://en.wikipedia.org/wiki/Audio_Video_Interleave</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="882"/>
        <source>MKV</source>
        <translation>MKV</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="883"/>
        <source>Matroska file format</source>
        <translation>Matroska file format</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="884"/>
        <source>MPEG4, H264HQ/H264PQ, THEORA</source>
        <translation>MPEG4, H264HQ/H264PQ, THEORA</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="885"/>
        <source>PCM, MP3, AAC, AC3, VORBIS</source>
        <translation>PCM, MP3, AAC, AC3, VORBIS</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="886"/>
        <source>http://en.wikipedia.org/wiki/Matroska</source>
        <translation>http://en.wikipedia.org/wiki/Matroska</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="887"/>
        <location filename="fake/fake.cpp" line="889"/>
        <source>MJPEG</source>
        <translation>MJPEG</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="888"/>
        <source>Motion JPEG</source>
        <translation>Motion JPEG</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="890"/>
        <source>PCM</source>
        <translation>PCM</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="891"/>
        <source>http://en.wikipedia.org/wiki/Motion_JPEG</source>
        <translation>http://en.wikipedia.org/wiki/Motion_JPEG</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="892"/>
        <source>MP4</source>
        <translation>MP4</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="893"/>
        <source>MPEG-4 Part 14</source>
        <translation>MPEG-4 Part 14</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="895"/>
        <source>MP3, AAC</source>
        <translation>MP3, AAC</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="896"/>
        <source>http://en.wikipedia.org/wiki/MPEG-4_Part_14</source>
        <translation>http://en.wikipedia.org/wiki/MPEG-4_Part_14</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="897"/>
        <source>MPEG</source>
        <translation>MPEG</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="898"/>
        <source>MPEG program stream</source>
        <translation>MPEG program stream</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="899"/>
        <source>MPEG2</source>
        <translation>MPEG2</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="900"/>
        <source>MP2</source>
        <translation>MP2</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="901"/>
        <source>http://en.wikipedia.org/wiki/MPEG_program_stream</source>
        <translation>http://en.wikipedia.org/wiki/MPEG_program_stream</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="902"/>
        <source>WEBM</source>
        <translation>WEBM</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="903"/>
        <source>WebM</source>
        <translation>WebM</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="904"/>
        <source>VP8</source>
        <translation>VP8</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="905"/>
        <location filename="fake/fake.cpp" line="917"/>
        <source>VORBIS</source>
        <translation>VORBIS</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="906"/>
        <source>http://en.wikipedia.org/wiki/WebM</source>
        <translation>http://en.wikipedia.org/wiki/WebM</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="907"/>
        <source>FLV</source>
        <translation>FLV</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="908"/>
        <source>Flash file format 2005</source>
        <translation>Flash file format 2005</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="909"/>
        <source>MP3</source>
        <translation>MP3</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="910"/>
        <source>http://en.wikipedia.org/wiki/Adobe_Flash</source>
        <translation>http://en.wikipedia.org/wiki/Adobe_Flash</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="911"/>
        <source>Flash file format 2008</source>
        <translation>Flash file format 2008</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="912"/>
        <source>H264HQ/H264PQ</source>
        <translation>H264HQ/H264PQ</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="913"/>
        <source>AAC</source>
        <translation>AAC</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="914"/>
        <source>OGV</source>
        <translation>OGV</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="915"/>
        <source>Ogg</source>
        <translation>Ogg</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="916"/>
        <source>THEORA</source>
        <translation>THEORA</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="918"/>
        <source>http://en.wikipedia.org/wiki/Ogg</source>
        <translation>http://en.wikipedia.org/wiki/Ogg</translation>
    </message>
</context>
<context>
    <name>0039</name>
    <message>
        <location filename="fake/fake.cpp" line="919"/>
        <source>Video standards and resolutions</source>
        <oldsource>Rendering videos: Video standards and resolutions</oldsource>
        <translation>Standards et résolutions des vidéos</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="920"/>
        <source> Standards and resolution are both fundamental properties which define a video. </source>
        <oldsource>Standards and resolution are both fundamental properties which define a video.</oldsource>
        <translation>Standard et résolution sont les deux propriétés fondamentales qui définissent une vidéo.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="921"/>
        <source>Two associated properties are the geometry and the FPS number. </source>
        <oldsource>Two associated properties are the geometry and the FPS number.</oldsource>
        <translation>De ces deux propriétés, sont déduites deux autres propriétés : La géométrie et le nombre de FPS.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="922"/>
        <source>Standard</source>
        <translation>Standard</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="923"/>
        <source> Standards are a historic feature which continues today in spite of technological progress. </source>
        <translation>Le standard est une propriété historique qui perdure encore aujourd’hui malgré les progrès technologique.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="924"/>
        <source>A rich literature on this subject can be found on the internet. </source>
        <translation>On trouve sur internet une littérature abondante sur ce sujet.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="925"/>
        <source>To simplify things we shall summarize as follows: </source>
        <translation>Pour simplifier les choses on résumera simplement comme suit :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="926"/>
        <source>PAL is effective in all the countries where the electricity network is 50 hz (which is the case, for example, for Western European countries)</source>
        <translation>PAL est en vigueur dans tous les pays dont le réseau électrique est en 50 hz (ce qui est le cas par exemple des pays d’Europe de l’ouest)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="927"/>
        <source>NTSC is effective in all the countries where the electricity network is 60 hz (which is the case, for example, for the United States of America)</source>
        <translation>NTSC est en vigueur dans tous les pays dont le réseau électrique est en 60 hz (ce qui est le cas par exemple des États-Unis d’Amérique)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="928"/>
        <location filename="fake/fake.cpp" line="943"/>
        <source>Geometry</source>
        <translation>Géométrie</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="929"/>
        <source> The geometry is the ratio of Width to Height. </source>
        <translation>La géométrie correspond au rapport Largeur sur Hauteur.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="930"/>
        <source>4:3 corresponds to screens that are almost square</source>
        <translation>4:3 correspond à des écrans presque carré</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="931"/>
        <source>16:9 corresponds to screens that are rectangular</source>
        <translation>16:9 correspond à des écrans rectangulaire</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="932"/>
        <source>40:17 corresponds to cinema screens in overall size</source>
        <translation>40:17 correspond aux écrans de cinéma tout en largeur</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="933"/>
        <location filename="fake/fake.cpp" line="947"/>
        <location filename="fake/fake.cpp" line="949"/>
        <source>Resolution</source>
        <translation>Résolution</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="934"/>
        <source> Unlike with photos, video resolution is not expressed in megapixels but in number of points (pixels) shown by the screen multiplied by the number of lines. </source>
        <translation>Contrairement à la photo, on n’exprime pas la résolution des vidéos en millions de pixel mais en nombre de points (pixel) affiché par l’écran x le nombre de ligne.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="935"/>
        <source>So, 320x240 corresponds to 320 points of width and 240 lines in height </source>
        <translation>Ainsi, 320x240 correspond à 320 points de large par 240 lignes</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="936"/>
        <source>FPS (Frames per second)</source>
        <translation>FPS (Frames per second)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="937"/>
        <source> Corresponds to the number of images shown every second. You should know that in cinemas, 24 images are shown per second and this figure of 24 images is recognized as corresponding to the maximum number of images which the eye is capable of differentiating: </source>
        <translation>Correspond au nombre d’image qui sont affichées chaque seconde. Pour la petite histoire, sachez qu’au cinéma, 24 images sont affichées par seconde et que ce chiffre de 24 images est communément reconnu comme correspondant aux maximums d’images que l’œil serait capable de différencier :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="938"/>
        <source>More images per second and the eye does not notice it</source>
        <translation>Plus d’images par seconde et l’œil ne s’en rend pas compte</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="939"/>
        <source>Fewer images per second and the film appears jerky</source>
        <translation>Moins d’images par seconde et le film parait saccadé</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="940"/>
        <source>Matrix of combinations managed by ffDiaporama</source>
        <translation>Matrice des combinaisons gérées par ffDiaporama</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="941"/>
        <source> The following table indicates all the combinations of geometry, standards and resolutions managed by ffDiaporama. For every combination, it indicates the number of associated FPS: </source>
        <translation>Le tableau suivant indique l’ensemble des combinaisons de géométrie, de standards et de résolutions gérées par ffDiaporama :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="942"/>
        <source>Name</source>
        <translation>Nom</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="944"/>
        <source>PAL</source>
        <translation>PAL</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="945"/>
        <source>NTSC</source>
        <translation>NTSC</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="946"/>
        <source>Remark</source>
        <translation>Note</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="948"/>
        <location filename="fake/fake.cpp" line="950"/>
        <source>FPS</source>
        <translation>FPS</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="951"/>
        <source>RIM 240</source>
        <translation>RIM 240</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="952"/>
        <location filename="fake/fake.cpp" line="953"/>
        <source>24 FPS</source>
        <translation>24 FPS</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="954"/>
        <source>Special format used on Blackberry&apos;s very small screen</source>
        <translation>Format spécial utilisé sur les tout petit écrans des téléphones Blackberry</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="955"/>
        <source>QVGA</source>
        <translation>QVGA</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="956"/>
        <source>25 FPS</source>
        <translation>25 FPS</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="957"/>
        <source>29,97 FPS</source>
        <translation>29,97 FPS</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="958"/>
        <source>Used mainly on the Internet and by first generation smartphones and mobile video players.</source>
        <translation>Utilisée essentiellement sur Internet et par des téléphones et des baladeurs vidéo de première génération.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="959"/>
        <source>HVGA</source>
        <translation>HVGA</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="960"/>
        <source>Used mainly on the Internet and by second generation smartphones and mobile video players. &lt;B&gt;Because this format does not respect the traditional video geometry&lt;/B&gt;, &lt;B&gt;black bands appear to fill the screen to 480x320.&lt;/B&gt;</source>
        <translation>Utilisée essentiellement par des téléphones et des baladeurs vidéo de seconde génération. &lt;B&gt;Ce format ne respectant pas les géométries vidéos traditionnelles, des bandes noires apparaissent quelque soit la géométrie utilisée pour remplir l’écran qui fait 480x320&lt;/B&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="961"/>
        <source>VGA</source>
        <translation>VGA</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="962"/>
        <source>Used mainly on the Internet and by some smartphones.</source>
        <translation>Utilisée massivement sur Internet et par quelques téléphones.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="963"/>
        <source>SD-DVD</source>
        <translation>SD-DVD</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="964"/>
        <source>The old television format for cathode ray tubes. Note that this format was specifically created for equipment with oval points: It is the anamorphism of the points that determines the geometry. That is why &lt;B&gt;it is absolutely necessary to avoid this format for anything other than television sets with cathode ray tubes.&lt;/B&gt;</source>
        <translation>’est le format des anciennes télévisions à tubes cathodiques. Noter que ce format a été spécifiquement conçu pour des équipements dont les points affichés ne sont pas ronds mais ovales : c’est l’anamorphisme des points qui détermine la géométrie. En conséquence, &lt;B&gt;il faut absolument proscrire tout utilisation de ce format pour autre chose que des téléviseurs à tubes cathodiques.&lt;/B&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="965"/>
        <source>WVGA</source>
        <translation>WVGA</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="966"/>
        <source>Used mainly on the Internet and by new generation smartphones and mobile video players. This format has become widespread and has replaced the old  QVGA, HVGA and VGA format used in the years 2000-2010. &lt;B&gt;Because this format does not respect the traditional video geometries, black bands appear to fill the screen to 800x480.&lt;/B&gt;</source>
        <translation>Utilisée essentiellement par des téléphones et des baladeurs vidéo de nouvelle génération. Ce format tend à se généraliser et à remplacer les anciens format QVGA, HVGA et VGA utilisés dans les années 2000-2010. &lt;B&gt;Ce format ne respectant pas les géométries vidéos traditionnelles, des bandes noires apparaissent quelque soit la géométrie utilisée pour remplir l’écran qui fait 800x480.&lt;/B&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="967"/>
        <source>XGA</source>
        <translation>XGA</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="968"/>
        <source>Historically this format was used only by computers (fixed or portable). Now we meet it more and more on tablet computers like the iPad.</source>
        <translation>Historiquement ce format n’était utilisé que par des ordinateurs (fixe ou portable). Désormais, on le rencontre de plus en plus sur des tablettes tactiles (tel que l’iPad).</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="969"/>
        <source>23,976 FPS</source>
        <translation>23,976 FPS</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="970"/>
        <source>Today, this format is widely used on the Internet, in particular by social networking and video-sharing sites. We also find it on certain &quot;home cinema&quot; devices.</source>
        <translation>Ce format est aujourd’hui utilisé massivement sur Internet et notamment par les sites sociaux et les sites de partages vidéos. On le trouve également sur certain équipement de salon.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="971"/>
        <source>This is the real &quot;home cinema&quot; format. It is used by the Blue Ray players and the &quot;home cinema&quot; devices.</source>
        <translation>C’est le format « Home Cinéma » par excellence. Il est utilisé pour les lecteurs Blue Ray et les équipements de salon.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="972"/>
        <source>Note that many other resolutions exists but which are not used by ffDiaporama.</source>
        <translation>Notez que de nombreuses autres résolutions existent mais ne sont pas utilisés par ffDiaporama.</translation>
    </message>
</context>
<context>
    <name>003A</name>
    <message>
        <location filename="fake/fake.cpp" line="973"/>
        <source>File attachments (Thumbnails, nfo, etc...)</source>
        <translation>Fichiers joints (Vignettes, nfo, etc...)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="974"/>
        <source>ffDiaporama allows you to produce joint files during the rendering process.</source>
        <translation>ffDiaporama vous permet de produire des fichiers joints pendant le processus de génération.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="975"/>
        <source>The following files are availables:</source>
        <translation>Les fichiers suivants sont disponibles:</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="976"/>
        <source>Thumbnails</source>
        <translation>Vignette</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="977"/>
        <source>A video or music file can be accompanied with an image file which must have the same name but with the .jpg extension (example: holidays.mkv and holidays.jpg in the same folder). </source>
        <translation>Un fichier vidéo ou musical peut être accompagné d&apos;un fichier image portant le même nom mais avec l&apos;extension .jpg (exemple: holidays.mkv et holidays.jpg dans le même dossier).</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="978"/>
        <source>This image is called a thumbnail and is used as icon for this file by ffDiaporama and many </source>
        <translation>Cette image s&apos;appelle une vignette et est utilisée comme icône du fichier par ffDiaporama et beaucoup </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="979"/>
        <source>Media Center Systems</source>
        <translation>Systèmes Media Center</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="980"/>
        <source>XBMC .nfo files</source>
        <translation>Fichier .nfo pour XBMC</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="981"/>
        <source>The .nfo file for XBMC allows XBMC to recognize the rendered videos as movies. </source>
        <translation>Le fichier .nfo pour XBMC permet à XBMC de reconnaître les vidéos générées comme des films. </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="982"/>
        <source>For more information see: &lt;a href=&quot;0044.html&quot;&gt;XBMC nfo files&lt;/a&gt;</source>
        <translation>Pour plus d&apos;informations, voir : &lt;a href=&quot;0044.html&quot;&gt;Fichier .nfo pour XBMC&lt;/a&gt;</translation>
    </message>
</context>
<context>
    <name>0040</name>
    <message>
        <location filename="fake/fake.cpp" line="983"/>
        <source>Technical information on ffDiaporama</source>
        <translation>Informations techniques sur ffDiaporama</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="984"/>
        <source> This section contains technical information about ffDiaporama. </source>
        <translation> Cette section contient des informations techniques sur ffDiaporama.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="985"/>
        <source>Index</source>
        <translation>Sommaire</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="986"/>
        <source>ffDiaporama command line arguments</source>
        <oldsource>&lt;a href=&quot;0041.html&quot;&gt;ffDiaporama command line arguments&lt;/a&gt;</oldsource>
        <translation>Les paramètres de la ligne de commande</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="987"/>
        <source>ffDiaporama project files</source>
        <oldsource>&lt;a href=&quot;0042.html&quot;&gt;ffDiaporama project files&lt;/a&gt;</oldsource>
        <translation>Projet ffDiaporama</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="988"/>
        <source>The configuration files for ffDiaporama</source>
        <oldsource>&lt;a href=&quot;0043.html&quot;&gt;The configuration files for ffDiaporama&lt;/a&gt;</oldsource>
        <translation>Les fichiers de configuration de ffDiaporama</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="989"/>
        <source>XBMC nfo files</source>
        <translation>Fichier nfo pour XBMC</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="990"/>
        <source>Types of objects in ffDiaporama</source>
        <translation>Types d&apos;objets utilisables dans ffDiaporama</translation>
    </message>
</context>
<context>
    <name>0041</name>
    <message>
        <location filename="fake/fake.cpp" line="991"/>
        <source>ffDiaporama command line arguments</source>
        <oldsource>Technical information on ffDiaporama: ffDiaporama command line arguments</oldsource>
        <translation>Les paramètres de la ligne de commande</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="992"/>
        <source>Syntax : ffDiaporama [-lang=] [-loglevel=] [Filename]</source>
        <translation>Syntaxe : ffDiaporama [-lang=] [-loglevel=] [Fichier]</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="993"/>
        <source>Setting</source>
        <translation>Paramètre</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="994"/>
        <source>Explanation</source>
        <translation>Explication</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="995"/>
        <source>Filename</source>
        <translation>Fichier</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="996"/>
        <source>Filename of the project file to load at application startup</source>
        <translation>Nom d’un fichier projet à charger au démarrage de l’application</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="997"/>
        <source>-lang=</source>
        <translation>-lang=</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="998"/>
        <source>The language to be used. can take the following values: </source>
        <oldsource>The language to be used. can take the following values:</oldsource>
        <translation>Force la langue à utiliser. peut prendre les valeurs suivantes :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="999"/>
        <source>&lt;B&gt;cz&lt;/B&gt; to use Czech</source>
        <translation>&lt;B&gt;cz&lt;/B&gt; pour utiliser le tchèque</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1000"/>
        <source>&lt;B&gt;de&lt;/B&gt; to use German</source>
        <translation>&lt;B&gt;de&lt;/B&gt; pour utiliser l’allemand</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1001"/>
        <source>&lt;B&gt;en&lt;/B&gt; to use English</source>
        <translation>&lt;B&gt;en&lt;/B&gt; pour utiliser l’anglais</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1002"/>
        <source>&lt;B&gt;es&lt;/B&gt; to use Spanish</source>
        <translation>&lt;B&gt;es&lt;/B&gt; pour utiliser l’espagnol</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1003"/>
        <source>&lt;B&gt;el&lt;/B&gt; to use Greek</source>
        <translation>&lt;B&gt;el&lt;/B&gt; pour utiliser le grec</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1004"/>
        <source>&lt;B&gt;fr&lt;/B&gt; to use French</source>
        <translation>&lt;B&gt;fr&lt;/B&gt; pour utiliser le français</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1005"/>
        <source>&lt;B&gt;gl&lt;/B&gt; to use Galician</source>
        <translation>&lt;B&gt;gl&lt;/B&gt; pour utiliser le galicien</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1006"/>
        <source>&lt;B&gt;it&lt;/B&gt; to use Italian</source>
        <translation>&lt;B&gt;it&lt;/B&gt; pour utiliser l’italien</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1007"/>
        <source>&lt;B&gt;nl&lt;/B&gt; to use Dutch</source>
        <translation>&lt;B&gt;nl&lt;/B&gt; pour utiliser le néerlandais</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1008"/>
        <source>&lt;B&gt;pt&lt;/B&gt; to use Portuguese</source>
        <translation>&lt;B&gt;pt&lt;/B&gt; pour utiliser le portugais</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1009"/>
        <source>&lt;B&gt;ru&lt;/B&gt; to use Russian</source>
        <translation>&lt;B&gt;ru&lt;/B&gt; pour utiliser le russe</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1010"/>
        <source>&lt;B&gt;zh-tw&lt;/B&gt; to use Taiwanese</source>
        <oldsource>&lt;B&gt;zh-tw&lt;/B&gt; to use </oldsource>
        <translation>&lt;B&gt;zh-tw&lt;/B&gt; pour utiliser le taïwanais</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1017"/>
        <source> Note: messages appear only if you launched the program from a console (CMD under Windows or Terminal under Linux). It is possible to redirect these messages into a log file by using &gt;. </source>
        <translation>Note : Les messages n’apparaissent que si vous avez lancé le programme depuis une console (CMD sous Windows ou Terminal sous Linux). Il est possible de rediriger ces messages dans un fichier journal en utilisant &gt;.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1011"/>
        <source>-loglevel=</source>
        <translation>-loglevel=</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1012"/>
        <source>Adjust the level of messages shown in the console: </source>
        <translation>Règle le niveau des messages affichés dans la console :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1013"/>
        <source>1 to show all the messages of Debug, Information, Warning and Error levels</source>
        <oldsource>Adjust the level of messages shown in the console:</oldsource>
        <translation>1 pour afficher tous les messages de niveaux Debug, Information, Avertissement et Erreur</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1014"/>
        <source>2 to show the messages of Information, Warning and Error levels</source>
        <translation>2 pour afficher les messages de niveaux Information, Avertissement et Erreur</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1015"/>
        <source>3 to show the messages of Warning and Error levels</source>
        <translation>3 pour afficher les messages de niveaux Avertissement et Erreur</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1016"/>
        <source>4 to show only the messages of Error levels</source>
        <translation>4 pour n’afficher que les messages de niveau Erreur</translation>
    </message>
</context>
<context>
    <name>0042</name>
    <message>
        <location filename="fake/fake.cpp" line="1018"/>
        <source>ffDiaporama project files</source>
        <oldsource>Technical information on ffDiaporama: ffDiaporama project files</oldsource>
        <translation>Projet ffDiaporama</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1019"/>
        <source>Project files for ffDiaporama are XML files with .ffd extension.</source>
        <translation>Les fichiers projet de ffDiaporama sont des fichiers XML portant l’extension .ffd.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1020"/>
        <source>This XML file does not contain copies of the multimedia elements (image, video, music) which are included in the project but only links to these files.</source>
        <translation>Ces fichiers XML n’embarquent aucune copie des éléments multimédias (image, vidéo, musique) qui sont intégrés dans le projet mais uniquement des liens vers ces fichiers.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1021"/>
        <source>The links are relative to the location of the .ffd file. This ensures that if the directory containing the project file (.ffd ) also contains the multimedia elements (directly or in subdirectories), it is possible to move and/or to rename the directory.</source>
        <translation>Ces liens sont relatifs à l’endroit où est stocké le fichier .ffd. Ainsi, si le répertoire contenant le fichier du projet (.ffd) contient également les éléments multimédias ou des sous-répertoires contenant ces éléments multimédias, il est possible de déplacer et/ou renommer le répertoire.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1022"/>
        <source>Another advantage is that a project created under Linux can be opened under Windows and conversely.</source>
        <translation>Autre avantage, un projet créé sous Linux peut être ouvert sous Windows et inversement.</translation>
    </message>
</context>
<context>
    <name>0043</name>
    <message>
        <location filename="fake/fake.cpp" line="1023"/>
        <source>The configuration files for ffDiaporama</source>
        <oldsource>Technical information on ffDiaporama: The configuration files for ffDiaporama</oldsource>
        <translation>Les fichiers de configuration de ffDiaporama</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1024"/>
        <source>In order to work, the application needs two configuration files and one database. The two configuration files consists of a pair of files.</source>
        <oldsource>In order to work, the application needs two configuration files. Each of them consists of a pair of files.</oldsource>
        <translation>Pour fonctionner, l&apos;application a besoin de deux fichiers de configuration et d&apos;une base de données. Les deux fichiers de configuration se composent d&apos;une paire de fichiers.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1025"/>
        <source>For example:</source>
        <translation>Par exemple :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1026"/>
        <source>The primary ffDiaporama.xml file is stored in the ffDiaporama directory. This file is global for all users: it contains the default ffDiaporama application settings. </source>
        <translation>Un premier fichier ffDiaporama.xml est stocké dans le répertoire de ffDiaporama. Ce fichier est global pour tous les utilisateurs : Il contient les paramètres par défaut de ffDiaporama. </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1027"/>
        <source>For Windows, this is C:\Program Files\ffDiaporama</source>
        <translation>Sous Windows, dans C:\Program Files\ffDiaporama</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1028"/>
        <source>For Linux, it is /usr/share/ffDiaporama</source>
        <oldsource>For Linux, it is /usr/share/ffDiaporama) </oldsource>
        <translation>Sous Linux dans /usr/share/ffDiaporama</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1029"/>
        <source>A secondary user-specific ffDiaporama.xml file is stored in the user&apos;s profile folder. </source>
        <translation>Un second fichier ffDiaporama.xml dédié à l’utilisateur est stocké dans le profil de l’utilisateur. </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1030"/>
        <source>For Windows, this is C:\Document and settings\[user]</source>
        <translation>Sous Windows, dans C:\Document and settings\[utilisateur]</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1031"/>
        <source>For Linux, it is ~/.ffDiaporama</source>
        <translation>Sous Linux, dans ~/.ffDiaporama</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1032"/>
        <source> When the application is launched for the first time, the user configuration files and the database are created if they dont already exist. </source>
        <oldsource> When the application is launched for the first time, the user configuration file is created if it does not already exist. </oldsource>
        <translation>Au premier lancement de l’application, les fichiers utilisateur et la base de données sont créés, s’ils n’existent pas déjà.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1033"/>
        <source>Remark: </source>
        <translation>Note :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1034"/>
        <source>If ffDiaporama is used by several users on the same PC, there will be separate configuration files and database for each user.</source>
        <oldsource>If ffDiaporama is used by several users on the same PC, there will be a separate configuration file for each user.</oldsource>
        <translation>Si l’application est utilisée par plusieurs utilisateurs sur un même PC, il y aura des fichiers de configuration et une base de données pour chaque utilisateurs.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1035"/>
        <source>File</source>
        <translation>Fichier</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1036"/>
        <source>Use</source>
        <translation>Utilisation</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1037"/>
        <source>ffDiaporama.xml</source>
        <translation>ffDiaporama.xml</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1038"/>
        <source>Contains the application options for ffDiaporama</source>
        <translation>Contient les options d’application pour ffDiaporama</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1039"/>
        <source>Devices.xml</source>
        <translation>Devices.xml</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1040"/>
        <source>Contains the base of profiles for video generation.</source>
        <translation>Contient la base de profils de génération.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1041"/>
        <source>ffDiaporama.db</source>
        <translation>ffDiaporama.db</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1042"/>
        <source>Is a SQLite3 database containing cached objects and some configuration options.</source>
        <translation>C&apos;est une base de données SQLite3 qui contient le cache des objets et quelques options de configuration.</translation>
    </message>
</context>
<context>
    <name>0044</name>
    <message>
        <location filename="fake/fake.cpp" line="1043"/>
        <source>XBMC nfo files</source>
        <translation>Fichier nfo pour XBMC</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1044"/>
        <source>The .nfo file for XBMC allows XBMC to recognize the rendered videos as movies.</source>
        <translation>Le fichier .nfo pour XBMC permet à XBMC de reconnaître les vidéos générées comme des films.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1045"/>
        <source>When doing a scan or an automatic new file discovery, XBMC uses the .nfo files.</source>
        <translation>Quand vous faites un scan ou une découverte automatique des nouveaux fichiers, XBMC utilise les fichiers .nfo.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1046"/>
        <source>During a manual refresh, XBMC offers you to find the film through one of its scrapers. Refuse its proposal to use the information contained in the .nfo file.</source>
        <translation>Au cours d&apos;une mise à jours manuelle, XBMC vous propose de cherche le film via l&apos;un de ses Scrapers. Refuser sa proposition afin d&apos;utiliser les informations contenues dans le fichier nfo.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1047"/>
        <source>Information included in the .nfo file</source>
        <translation>Informations inscrites dans le fichier .nfo</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1048"/>
        <source> &lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; standalone=&quot;yes&quot; ?&gt;</source>
        <translation> &lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; standalone=&quot;yes&quot; ?&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1049"/>
        <source> &lt;movie&gt; </source>
        <translation> &lt;movie&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1050"/>
        <source> &lt;title&gt;&lt;U&gt;&lt;B&gt;Project Title&lt;/B&gt;&lt;/U&gt;&lt;/title&gt;</source>
        <translation> &lt;title&gt;&lt;U&gt;&lt;B&gt;Titre du project&lt;/B&gt;&lt;/U&gt;&lt;/title&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1051"/>
        <source> &lt;sorttitle&gt;&lt;U&gt;&lt;B&gt;Rendered filename&lt;/B&gt;&lt;/U&gt;&lt;/sorttitle&gt;</source>
        <translation> &lt;sorttitle&gt;&lt;U&gt;&lt;B&gt;Nom du fichier généré&lt;/B&gt;&lt;/U&gt;&lt;/sorttitle&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1052"/>
        <source> &lt;set&gt;&lt;B&gt;&lt;U&gt;Project Album&lt;/U&gt;&lt;/B&gt;&lt;/set&gt;</source>
        <translation> &lt;set&gt;&lt;B&gt;&lt;U&gt;Album du project&lt;/U&gt;&lt;/B&gt;&lt;/set&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1053"/>
        <source> &lt;genre&gt;&lt;B&gt;&lt;U&gt;Project Album&lt;/U&gt;&lt;/B&gt;&lt;/genre&gt;</source>
        <translation> &lt;genre&gt;&lt;B&gt;&lt;U&gt;Album du project&lt;/U&gt;&lt;/B&gt;&lt;/genre&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1054"/>
        <source> &lt;year&gt;&lt;U&gt;&lt;B&gt;Year of project date&lt;/B&gt;&lt;/U&gt;&lt;/year&gt;</source>
        <translation> &lt;year&gt;&lt;U&gt;&lt;B&gt;Année de la date du project&lt;/B&gt;&lt;/U&gt;&lt;/year&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1055"/>
        <source> &lt;outline&gt;&lt;U&gt;&lt;B&gt;Project Title&lt;/B&gt;&lt;/U&gt;&lt;/outline&gt;</source>
        <translation> &lt;outline&gt;&lt;U&gt;&lt;B&gt;Titre du project&lt;/B&gt;&lt;/U&gt;&lt;/outline&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1056"/>
        <source> &lt;plot&gt;&lt;U&gt;&lt;B&gt;Project Comment&lt;/B&gt;&lt;/U&gt;&lt;/plot&gt;</source>
        <translation> &lt;plot&gt;&lt;U&gt;&lt;B&gt;Commentaire du project&lt;/B&gt;&lt;/U&gt;&lt;/plot&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1057"/>
        <source> &lt;director&gt;&lt;U&gt;&lt;B&gt;Project Author&lt;/B&gt;&lt;/U&gt;&lt;/director&gt;</source>
        <translation> &lt;director&gt;&lt;U&gt;&lt;B&gt;Auteur du project&lt;/B&gt;&lt;/U&gt;&lt;/director&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1058"/>
        <source> &lt;credits&gt;&lt;U&gt;&lt;B&gt;Project Author&lt;/B&gt;&lt;/U&gt;&lt;/credits&gt;</source>
        <translation> &lt;credits&gt;&lt;U&gt;&lt;B&gt;Auteur du project&lt;/B&gt;&lt;/U&gt;&lt;/credits&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1059"/>
        <source> &lt;runtime&gt;&lt;U&gt;&lt;B&gt;Project duration in minutes&lt;/B&gt;&lt;/U&gt;&lt;/runtime&gt;</source>
        <translation> &lt;runtime&gt;&lt;U&gt;&lt;B&gt;Durée du project en minutes&lt;/B&gt;&lt;/U&gt;&lt;/runtime&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1060"/>
        <source> &lt;thumb&gt;&lt;U&gt;&lt;B&gt;Project thumbnail&lt;/B&gt;&lt;/U&gt;&lt;/thumb&gt;</source>
        <translation> &lt;thumb&gt;&lt;U&gt;&lt;B&gt;Vignette du project&lt;/B&gt;&lt;/U&gt;&lt;/thumb&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1061"/>
        <source> &lt;/movie&gt; </source>
        <translation> &lt;/movie&gt; </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1062"/>
        <source>See also</source>
        <translation>Voir aussi</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1063"/>
        <source>Information on XBMC movies .nfo file</source>
        <translation>Information sur les fichiers .nfo pour XBMC concernant les films</translation>
    </message>
</context>
<context>
    <name>0045</name>
    <message>
        <location filename="fake/fake.cpp" line="1064"/>
        <source>Types of objects in ffDiaporama</source>
        <translation>Types d&apos;objets utilisables dans ffDiaporama</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1065"/>
        <source> This section contains information about types of objects that can be used with ffDiaporama. </source>
        <translation> Cette section contient des informations à propos des types d&apos;objects qui peuvent être utilisés avec ffDiaporama. </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1066"/>
        <source>Index</source>
        <translation>Sommaire</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1067"/>
        <location filename="fake/fake.cpp" line="1074"/>
        <source>Text</source>
        <translation>Texte</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1068"/>
        <location filename="fake/fake.cpp" line="1075"/>
        <source>Music file</source>
        <translation>Fichiers musicaux</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1069"/>
        <source>Bitmap image file</source>
        <translation>Fichiers d&apos;images en mode point</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1070"/>
        <source>Bitmap image from clipboard</source>
        <translation>Fichiers d&apos;images en mode point depuis le presse-papier</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1071"/>
        <location filename="fake/fake.cpp" line="1084"/>
        <source>Vector image file</source>
        <translation>Fichiers d&apos;images vectiorielles</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1072"/>
        <location filename="fake/fake.cpp" line="1088"/>
        <source>Video file</source>
        <translation>Fichiers vidéos</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1073"/>
        <source>Google maps map</source>
        <translation>Cartes Google maps</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1079"/>
        <source>Bitmap image file and Bitmap image from clipboard</source>
        <translation>Fichier image et image du presse-papiers</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1077"/>
        <location filename="fake/fake.cpp" line="1082"/>
        <location filename="fake/fake.cpp" line="1086"/>
        <location filename="fake/fake.cpp" line="1092"/>
        <source>See also: </source>
        <oldsource>See </oldsource>
        <translation>Voir aussi : </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1076"/>
        <source>ffDiaporama can use music file in the following formats: wav, aac, adts, ac3, mp2, mp3, m4a or m4b or m4p, 3g2 or 3ga or 3gp, ogg or oga, spx, wma, flac</source>
        <translation>ffDiaporama peut utiliser des fichiers musicaux dans les formats suivants : wav, aac, adts, ac3, mp2, mp3, m4a ou m4b ou m4p, 3g2 ou 3ga ou 3gp, ogg ou oga, spx, wma, flac</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1078"/>
        <source>Definition of music file on Wikipedia</source>
        <oldsource>definition of Bitmap image file on Wikipedia</oldsource>
        <translation>Définition des fichiers musicaux sur Wikipedia</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1080"/>
        <source>ffDiaporama can use bitmap images in the following formats: bmp, gif (but not animated gif), jpg or jpeg, png, pbm, pgm, ppm, tiff or tif, xbm, xpm</source>
        <translation>ffDiaporama peut utiliser des fichiers images dans les formats suivants : bmp, gif (sans animation), jpg ou jpeg, png, pbm, pgm, ppm, tiff ou tif, xbm, xpm</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1081"/>
        <source>Note: ffDiaporama uses the filename extension to determine the type of image. It is therefore necessary that this extension was valid.</source>
        <oldsource>Note: FFD uses the filename extension to determine the type of image. It is therefore necessary that this extension was valid.</oldsource>
        <translation>Remarque : ffDiaporama utilise l&apos;extension du nom de fichier pour déterminer le type d&apos;image. Il est donc nécessaire que cette extension soit correct.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1083"/>
        <source>Definition of Bitmap image file on Wikipedia</source>
        <translation>Définition des fichiers image sur Wikipedia</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1085"/>
        <source>ffDiaporama can use vector images in the following formats: svg</source>
        <translation>ffDiaporama peut utiliser des images vectorielles dans les formats suivants: svg</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1087"/>
        <source>Definition of vector image file on Wikipedia</source>
        <translation>Définition des images vectorielles sur Wikipedia</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1089"/>
        <source>ffDiaporama can use video files in the following formats: avi, mov, mpg or mpeg, mkv, mp4 or m4v, flv, 3gp, ogv, webm, dv, wmv, mts or m2ts or mod</source>
        <translation>ffDiaporama peut utiliser des fichiers vidéo dans les formats suivants : avi, mov, mpg ou mpeg, mkv, mp4 ou m4v, flv, 3gp, ogv, webm, dv, wmv, mts ou m2ts ou mod</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1090"/>
        <source>Note: mts, m2ts and mod files are stream formats (AVCHD) which involve some limitations. For more information on AVCHD, see: </source>
        <translation>Remarque : mts, m2ts et les fichiers MOD sont des formats de flux (AVCHD) qui impliquent certaines limitations. Pour plus d&apos;informations sur l&apos;AVCHD, voir :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1091"/>
        <source>Advanced Video Coding High Definition on Wikipedia</source>
        <translation>Définition de l&apos;AVCHD (Advanced Video Coding High) sur Wikipedia</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1093"/>
        <source>Definition of video file on Wikipedia</source>
        <translation>Définition des fichiers vidéos sur Wikipedia</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1094"/>
        <source>Google Maps</source>
        <translation>Google Maps</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1095"/>
        <source>There are several things to know about Google Maps</source>
        <translation>Il ya plusieurs choses à savoir sur Google Maps</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1096"/>
        <source>Google Maps generates images with up to 640x640. Within these images, Google Maps inserts logos that must be removed so that useful images are really only 640x600. Therefore, to generate an image for example 1080p, we have to assemble 6 Google Maps images.</source>
        <translation>Google Maps génère des images au maximum d&apos;une taille de 640x640. De plus, dans ces images, Google Maps insère des logos qui doivent être supprimés réduisant les images utiles à seulement 640x600. C&apos;est pourquoi, pour générer une image, par exemple en 1080p, nous devons assembler 6 images Google Maps.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1097"/>
        <source>Google Maps limit the number of queries a user can send. This limitation is made to prevent robots to saturate the servers. Unfortunately, this limitation may cause problems when generating big picture. It is possible that you may receive an error warning message saying that you have reached the limit of Google Maps request grants to you.</source>
        <translation>Google Maps limite le nombre de requêtes qu&apos;un utilisateur peut envoyer. Cette limitation est faite pour éviter aux robots de saturer ses serveurs. Malheureusement, cette limitation peut provoquer des problèmes lors de la génération de grandes images et Il est ainsi possible que vous receviez un message d&apos;avertissement indiquant que vous avez atteint cette limite.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1098"/>
        <source>To resolve this problem, ffDiaporama integrates a mechanical of recovery. Thus, if a card can not be generated immediately, you can resume it generation later.</source>
        <translation>Pour résoudre ce problème, ffDiaporama intègre un mécanisme de reprise. Ainsi, si une carte ne peut être générée immédiatement, vous pourrez reprendre sa génération plus tard.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1099"/>
        <source>The roads are perpetually modified and Google Maps is constantly updated. Of course, it is not possible to generate a map for road conditions at a specific date. Therefore, think before you update a map of an old project.</source>
        <translation>Les routes sont perpétuellement modifiés et Google Maps est constamment mis à jour. Bien sûr, il n&apos;est pas possible de générer une carte de l&apos;état des routes, à une date spécifique. Par conséquent, réflichissez bien avant de mettre à jour une carte d&apos;un vieux projet.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1100"/>
        <source>Image size and Map size</source>
        <translation>Taille des images et taille des cartes</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1101"/>
        <source>Depending on the zoom level, Google Maps decides himself of the information displayed on the map. Thus, it is not possible to generate several maps at different zoom levels and then to create a zoom animation because there is no chance that this animation be fluid. It&apos;s why ffDiaporama proposes to generate maps of several image sizes. So, to create a fluid zoom animation, you can use a large image.</source>
        <translation>Selon le niveau de zoom, Google Maps décide lui-même des informations à afficher sur les cartes. C&apos;est pourquoi il n&apos;est pas possible de générer plusieurs cartes de niveaux de zoom différents, contenant les mêmes informations, pour créer des animations de zoom fluide. Pour résoudre ce problème, ffDiaporama propose de générer des cartes de grandes tailles d&apos;image afin de créer des animations de zoom fluide.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1102"/>
        <source>The following table shows the different &lt;U&gt;Image sizes&lt;/U&gt; that you can generate.</source>
        <translation>Le tableau suivant montre les différentes &lt;U&gt;tailles&lt;/U&gt; images que vous pouvez générer.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1103"/>
        <source>Image size</source>
        <translation>Taille d&apos;image</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1104"/>
        <source>Resolution</source>
        <translation>Résolution</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1105"/>
        <source>Comment</source>
        <translation>Commentaire</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1106"/>
        <source>Small-16:9</source>
        <translation>Petit-16/9</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1107"/>
        <source>640x360 (0.2 MPix)</source>
        <translation>640x360 (0.2 MPix)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1108"/>
        <source>Quarter of 720p. Useful to add a small map in a photo collage</source>
        <translation>Quart de 720p. Utile pour ajouter une petite carte dans un pêle-mèle</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1109"/>
        <source>1280x720 (0.9 MPix)</source>
        <translation>1280x720 (0.9 MPix)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1110"/>
        <source>Useful for creating a full-screen map in a 720p project or to add a map to a title slide in a 1080p project</source>
        <translation>Utile pour créer une carte plein écran dans un projet 720p ou pour ajouter une carte dans une diapositive titre dans un projet en 1080p</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1111"/>
        <source>720px4-16:9</source>
        <translation>720px4-16/9</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1112"/>
        <source>2560x1440 (3.6 MPix)</source>
        <translation>2560x1440 (3.6 MPix)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1113"/>
        <source>Useful for creating a full-screen &lt;B&gt;animated&lt;/B&gt; map in a 720p project or to add an &lt;B&gt;animated&lt;/B&gt; map to a title slide in a 1080p project</source>
        <translation>Utile pour créer des &lt;B&gt;animations&lt;/B&gt; de carte plein écran dans un projet en 720p ou pour ajouter des &lt;B&gt;animations&lt;/B&gt; de carte dans une diapositive titre d&apos;un projet en 1080p</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1114"/>
        <source>1920x1080 (2 MPix)</source>
        <translation>1920x1080 (2 MPix)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1115"/>
        <source>Useful for creating a full-screen map in a 1080p project</source>
        <translation>Utile pour créer une carte plein écran dans un projet en 1080p</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1116"/>
        <source>1080px4-16:9</source>
        <translation>1080px4-16/9</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1117"/>
        <source>3840x2160 (8.2 MPix)</source>
        <translation>3840x2160 (8.2 MPix)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1118"/>
        <source>Useful for creating a full-screen &lt;B&gt;animated&lt;/B&gt; map in a 1080p project</source>
        <translation>Utile pour créer une &lt;B&gt;animation&lt;/B&gt; de carte plein écran dans un projet en 1080p</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1119"/>
        <source>Note that all image sizes are 16:9 geometry to simplify computation.</source>
        <translation>Notez que pour simplifier les calculs, toutes les tailles d&apos;image sont en géométrie 16/9.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1120"/>
        <source>Because a map is formed by joining multiple pieces of map, based on the image size, the card will be a map greater or lesser.</source>
        <translation>Parce que les cartes sont formées d&apos;un assemblage de plusieurs morceaux de carte, selon la taille de l&apos;image, les cartes représenteront des distances plus ou moins grandes.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1121"/>
        <source>The following table shows the &lt;U&gt;Map sizes&lt;/U&gt; in kilometers for each &lt;U&gt;Image sizes&lt;/U&gt; and &lt;U&gt;Google Maps zoom levels&lt;/U&gt;.</source>
        <translation>Le tableau suivant montre les tailles des &lt;U&gt;cartes&lt;/U&gt; en kilomètres pour chaque &lt;U&gt;taille&lt;/U&gt; d&apos;image et chaque &lt;U&gt;niveaux de zoom Google Maps&lt;/U&gt;.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1122"/>
        <source>Zoom</source>
        <translation>Zoom</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1123"/>
        <source>Maps sizes (kilometers)</source>
        <translation>Taille des cartes (en kilomètres)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1124"/>
        <source>720p x4</source>
        <translation>720p x4</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1125"/>
        <location filename="fake/fake.cpp" line="1127"/>
        <location filename="fake/fake.cpp" line="1130"/>
        <source>15011.315 km x 8613.829 km</source>
        <translation>15011.315 km x 8613.829 km</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1126"/>
        <location filename="fake/fake.cpp" line="1129"/>
        <location filename="fake/fake.cpp" line="1134"/>
        <source>12509.429 km x 5930.123 km</source>
        <translation>12509.429 km x 5930.123 km</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1128"/>
        <location filename="fake/fake.cpp" line="1133"/>
        <location filename="fake/fake.cpp" line="1139"/>
        <source>6254.715 km x 3351.985 km</source>
        <translation>6254.715 km x 3351.985 km</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1131"/>
        <location filename="fake/fake.cpp" line="1136"/>
        <source>18764.144 km x 7605.642 km</source>
        <translation>18764.144 km x 7605.642 km</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1132"/>
        <location filename="fake/fake.cpp" line="1138"/>
        <location filename="fake/fake.cpp" line="1144"/>
        <source>3127.357 km x 1737.202 km</source>
        <translation>3127.357 km x 1737.202 km</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1135"/>
        <location filename="fake/fake.cpp" line="1141"/>
        <source>9382.072 km x 4760.424 km</source>
        <translation>9382.072 km x 4760.424 km</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1137"/>
        <location filename="fake/fake.cpp" line="1143"/>
        <location filename="fake/fake.cpp" line="1149"/>
        <source>1563.679 km x 876.788 km</source>
        <translation>1563.679 km x 876.788 km</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1140"/>
        <location filename="fake/fake.cpp" line="1146"/>
        <source>4691.036 km x 2566.349 km</source>
        <translation>4691.036 km x 2566.349 km</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1142"/>
        <location filename="fake/fake.cpp" line="1148"/>
        <location filename="fake/fake.cpp" line="1154"/>
        <source>781.839 km x 439.436 km</source>
        <translation>781.839 km x 439.436 km</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1145"/>
        <location filename="fake/fake.cpp" line="1151"/>
        <source>2345.518 km x 1310.024 km</source>
        <translation>2345.518 km x 1310.024 km</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1147"/>
        <location filename="fake/fake.cpp" line="1153"/>
        <location filename="fake/fake.cpp" line="1159"/>
        <source>390.920 km x 219.849 km</source>
        <translation>390.920 km x 219.849 km</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1150"/>
        <location filename="fake/fake.cpp" line="1156"/>
        <source>1172.759 km x 658.501 km</source>
        <translation>1172.759 km x 658.501 km</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1152"/>
        <location filename="fake/fake.cpp" line="1158"/>
        <location filename="fake/fake.cpp" line="1164"/>
        <source>195.460 km x 109.941 km</source>
        <translation>195.460 km x 109.941 km</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1155"/>
        <location filename="fake/fake.cpp" line="1161"/>
        <source>586.379 km x 329.691 km</source>
        <translation>586.379 km x 329.691 km</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1157"/>
        <location filename="fake/fake.cpp" line="1163"/>
        <location filename="fake/fake.cpp" line="1169"/>
        <source>97.730 km x 54.972 km</source>
        <translation>97.730 km x 54.972 km</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1160"/>
        <location filename="fake/fake.cpp" line="1166"/>
        <source>293.190 km x 164.901 km</source>
        <translation>293.190 km x 164.901 km</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1162"/>
        <location filename="fake/fake.cpp" line="1168"/>
        <location filename="fake/fake.cpp" line="1174"/>
        <source>48.865 km x 27.486 km</source>
        <translation>48.865 km x 27.486 km</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1165"/>
        <location filename="fake/fake.cpp" line="1171"/>
        <source>146.595 km x 82.457 km</source>
        <translation>146.595 km x 82.457 km</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1167"/>
        <location filename="fake/fake.cpp" line="1173"/>
        <location filename="fake/fake.cpp" line="1179"/>
        <source>24.432 km x 13.743 km</source>
        <translation>24.432 km x 13.743 km</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1170"/>
        <location filename="fake/fake.cpp" line="1176"/>
        <source>73.297 km x 41.230 km</source>
        <translation>73.297 km x 41.230 km</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1172"/>
        <location filename="fake/fake.cpp" line="1178"/>
        <location filename="fake/fake.cpp" line="1184"/>
        <source>12.216 km x 6.872 km</source>
        <translation>12.216 km x 6.872 km</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1175"/>
        <location filename="fake/fake.cpp" line="1181"/>
        <source>36.649 km x 20.615 km</source>
        <translation>36.649 km x 20.615 km</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1177"/>
        <location filename="fake/fake.cpp" line="1183"/>
        <location filename="fake/fake.cpp" line="1189"/>
        <source>6.108 km x 3.436 km</source>
        <translation>6.108 km x 3.436 km</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1180"/>
        <location filename="fake/fake.cpp" line="1186"/>
        <source>18.324 km x 10.307 km</source>
        <translation>18.324 km x 10.307 km</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1182"/>
        <location filename="fake/fake.cpp" line="1188"/>
        <location filename="fake/fake.cpp" line="1194"/>
        <source>3.054 km x 1.718 km</source>
        <translation>3.054 km x 1.718 km</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1185"/>
        <location filename="fake/fake.cpp" line="1191"/>
        <source>9.162 km x 5.154 km</source>
        <translation>9.162 km x 5.154 km</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1187"/>
        <location filename="fake/fake.cpp" line="1193"/>
        <location filename="fake/fake.cpp" line="1198"/>
        <source>1.527 km x 0.859 km</source>
        <translation>1.527 km x 0.859 km</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1190"/>
        <location filename="fake/fake.cpp" line="1196"/>
        <source>4.581 km x 2.577 km</source>
        <translation>4.581 km x 2.577 km</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1192"/>
        <location filename="fake/fake.cpp" line="1197"/>
        <location filename="fake/fake.cpp" line="1201"/>
        <source>0.764 km x 0.429 km</source>
        <translation>0.764 km x 0.429 km</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1195"/>
        <location filename="fake/fake.cpp" line="1200"/>
        <source>2.291 km x 1.288 km</source>
        <translation>2.291 km x 1.288 km</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1199"/>
        <location filename="fake/fake.cpp" line="1202"/>
        <source>1.145 km x 0.644 km</source>
        <translation>1.145 km x 0.644 km</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1203"/>
        <source>Notes:</source>
        <translation>Notes :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1204"/>
        <source>Because Google Maps don&apos;t respect perfect alignment when using high zoom level, all map sizes lesser than 400 meters are useless with ffDiaporama.</source>
        <translation>Google Maps ne respectant pas l&apos;alignement des cartes lorsqu&apos;on utilise des niveaux de zoom élevé, les cartes représentant des distances inférieurs à moins de 400 mètres sont inutilisables avec ffDiaporama.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1205"/>
        <source>Google Maps zoom levels 0 and 1 are useless with ffDiaporama because they produce images that are too small.</source>
        <translation>Les niveaux de zoom 0 et 1 de Google Maps sont inutilisables avec ffDiaporama parce qu&apos;ils produisent des images trop petites.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1206"/>
        <source>Google Maps zoom levels 20 and 11 are useless with ffDiaporama Google Maps don&apos;t respect perfect alignment when using high zoom level.</source>
        <translation>Les niveaux de zoom 20 et 21 de Google Maps sont inutilisables avec ffDiaporama car Google Maps ne respecte pas l&apos;alignement avec les niveaux de zoom élevé.</translation>
    </message>
</context>
<context>
    <name>0101</name>
    <message>
        <location filename="fake/fake.cpp" line="1207"/>
        <source>Application options dialog</source>
        <translation>Modifier les options du programme</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1213"/>
        <source>The Application options tab allows to define the general behavior of ffDiaporama.</source>
        <translation>L&apos;onglet Options de l&apos;application permet de définir le comportement général de ffDiaporama.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1260"/>
        <source>Video cropping</source>
        <translation>Rognage vidéo</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1285"/>
        <source>The Project options tab allows to define the options by default of the current project and for the new projects.</source>
        <translation>L&apos;onglet Options des projets permet de définir les options par défaut du projet en cour et des nouveaux projets.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1335"/>
        <location filename="fake/fake.cpp" line="1348"/>
        <source>Allows to select the style of the shape to applied to the new text blocks. This style defines the shape (rectangle, circle, ...), the border, the opaqueness and the shadow effect applied to the block.</source>
        <oldsource>Allows to select the style of the shape to applied to the new text blocks. This style defines the shape (rectangle, circle, â¦), the border, the opaqueness and the shadow effect applied to the block.</oldsource>
        <translation>Permet de sélectionner le style de forme à appliquer aux nouveaux blocs de texte. Ce style définit la forme (rectangle, cercle, ...), la bordure, l&apos;opacité et l&apos;effet d&apos;ombre à appliquer au bloc.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1357"/>
        <source>The Rendering options Tab allows to define the options used by default during the generation of videos.</source>
        <translation>L&apos;onglet Options de génération permet de définir les options par défaut à utiliser lors de la génération des vidéos.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1212"/>
        <location filename="fake/fake.cpp" line="1214"/>
        <source>Application options</source>
        <translation>Options de l&apos;application</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1215"/>
        <source>Remember Windows size and positions</source>
        <translation>Mémoriser la taille et la position des fenêtres</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1216"/>
        <source>If this box is checked, the sizes and the positions of all windows and dialogs will be saved and reused the next time you use ffDiaporama.</source>
        <translation>Si cette case est cochée, les tailles et positions de toutes les fenêtres et boites de dialogue de ffDiaporama seront sauvegardées pour être réutilisées la prochaine fois que vous utiliserez ffDiaporama.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1217"/>
        <source>Remember last used folders</source>
        <translation>Mémoriser les derniers répertoires utilisés</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1218"/>
        <source>If this box is checked, the directories for images, videos, projects, music and the generation of your movie will be saved and reused the next time you use ffDiaporama.</source>
        <translation>Si cette case est cochée, les répertoires que vous utilisez pour les images, les vidéos, les projets, les musiques et les générations de film seront sauvegardés pour être réutilisés la prochaine fois que vous utiliserez ffDiaporama.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1219"/>
        <source>Enable &quot;raster&quot; Graphics system</source>
        <translation>Activer le système graphique « raster »</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1220"/>
        <source>&lt;B&gt;For Linux users only: &lt;/B&gt;If this box is checked, the graphic system &quot;raster&quot; is used instead of the default graphic system. This option is used only at application start up. </source>
        <translation>&lt;B&gt;Pour les utilisateurs Linux uniquement :&lt;/B&gt; Si cette case est cochée, le système graphique « raster » est utilisé à la place du système graphique par défaut du système. Cette option n’est utilisée qu’au démarrage de l’application.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1221"/>
        <source>The &quot;raster&quot; Graphics accelerates the display but can raise problems on some computer in particular with KDE.</source>
        <translation>Le système « raster » accélère l’affichage mais peut poser des problèmes sur certains PC notamment avec KDE.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1227"/>
        <source>Memory profil</source>
        <translation>Profile mémoire</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1231"/>
        <source>Preview options</source>
        <translation>Options de prévisualisation</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1232"/>
        <source>Frame rate</source>
        <translation>Images par seconde</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1233"/>
        <source>Defines the number of images per second which will be generated to show the preview. </source>
        <translation>Défini le nombre d’images par secondes qui seront générées pour afficher la prévisualisation.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1234"/>
        <source>Note: the higher this number, the more smooth the preview will be. On the other hand, more computer resources will be required. Reduce this number on slow computers or if the gauge for your multimedia reader is frequently in the red zone.</source>
        <translation>Note : Plus ce nombre est élevé et plus la prévisualisation sera fluide, par contre, plus les ressources du PC seront sollicités. Réduisez ce nombre sur des PC peu performant ou si la jauge du lecteur multimédia est fréquemment dans le rouge.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1239"/>
        <source>Image smoothing (smooth images during preview)</source>
        <translation>Lissage (Activer le lissage des images pendant la prévisualisation)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1240"/>
        <source>If this box is checked, the image smoothing effect will be applied to the images during the preview. </source>
        <translation>Si cette case est cochée, l’effet de lissage d’image sera appliqué aux images pendant la prévisualisation.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1228"/>
        <source>Defines the quantity of memory used as cache memory by ffDiaporama. This parameter is important because it allows to adapt ffDiaporama to your hardware. </source>
        <oldsource>Defines the quantity of memory used as cache memory by ffDiaporama. This parameter is important because it allows to adapt ffDiapora to your hardware. </oldsource>
        <translation>Défini la quantité de mémoire utilisé pour le cache d’image. Ce paramètre est important car il permet d’adapter ffDiaporama à votre configuration matérielle.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1208"/>
        <source>This dialog box allows you to define options for the application. It consists of the following 3 tabs:</source>
        <translation>La boite « Options » permet de définir les options du programme. Elle est composée des 3 onglets suivants :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1209"/>
        <source>The Application options tab allows you to define the general behavior of ffDiaporama.</source>
        <translation>L’onglet Options de l’application permet de définir le comportement général de ffDiaporama.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1210"/>
        <source>The Project options tab allows you to define the options by default of the current project and for the new projects.</source>
        <translation>L’onglet Options des projets permet de définir les options par défaut du projet en cour et des nouveaux projets.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1211"/>
        <source>The Rendering options Tab allows you to define the options used by default during the generation of videos.</source>
        <translation>L’onglet Options de génération permet de définir les options par défaut à utiliser lors de la génération des vidéos.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1222"/>
        <source>Disable tooltips in dialog box</source>
        <translation>Désactiver les bulles d&apos;aide dans les boites de dialogue</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1223"/>
        <source>If this box is checked, tooltips will no longer appear in dialog boxes (only what&apos;s this will be available).</source>
        <translation>Si cette case est cochée les bulles d&apos;aide n&apos;apparaitront plus dans les boites de dialogues (seule l&apos;option &quot;Qu&apos;est ce que c&apos;est ?&quot; sera disponible).</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1224"/>
        <source>Offer to open the download Web page when a new version is available</source>
        <translation>Proposer d&apos;ouvrir la page web de téléchargement quand une nouvelle version est disponible</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1225"/>
        <source>If this box is checked, a dialog box will appear at startup the next time a new version will be available. </source>
        <translation>Si cette case est cochée, une boîte de dialogue apparaîtra au démarrage la prochaine fois qu&apos;une nouvelle version sera disponible.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1226"/>
        <source>By default, this box is checked for Windows users and unchecked for Linux users</source>
        <translation>Par défaut, cette case est cochée pour les utilisateurs de Windows et décochée pour les utilisateurs de Linux</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1229"/>
        <source>For users of 32-bit systems, it is recommended that set this value to 512 MB if the computer has at least 2 GB of RAM. </source>
        <translation>Pour les utilisateurs de système 32 bit, il est recommandé de placer cette valeur sur 512 Mo si l&apos;ordinateur dispose d&apos;au moins 2 Go de RAM.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1230"/>
        <source>For users of 64-bit systems, it is recommended that set this value to 2 GB if the computer has at least 4 GB of RAM.</source>
        <translation>Pour les utilisateurs de système 64 bit, il est recommandé de placer cette valeur sur 2 Go si l&apos;ordinateur dispose d&apos;au moins 4 Go de RAM.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1235"/>
        <source>Max video preview height</source>
        <translation>Hauteur maximale de prévisualisation des vidéos</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1236"/>
        <source>Sets the maximum height of videos used for the preview. Beyond this height, the videos are automatically reduced for creating images. </source>
        <translation>Définit la hauteur maximale des vidéos utilisée pour la prévisualisation. Au-delà de cette hauteur, les images des vidéos sont automatiquement réduites.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1237"/>
        <location filename="fake/fake.cpp" line="1245"/>
        <source>This parameter affects only the preview and does not change the quality of rendered video. </source>
        <translation>Ce paramètre n&apos;affecte que la prévisualisation et ne change pas la qualité des vidéos générées.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1238"/>
        <location filename="fake/fake.cpp" line="1246"/>
        <source>It is recommended to reduce this value for slow computer.</source>
        <translation>Il est recommandé de réduire cette valeur sur les PC peu performant.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1241"/>
        <source>This effect consumes lots of resources and can result in slow preview on small machines. Unchecking this box allows then to keep a fluid preview. </source>
        <translation>Cet effet consomme beaucoup de ressources et peut entraîner des lenteurs lors de la prévisualisation sur de petites machines. Décocher cette case permet de garder la prévisualisation fluide.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1242"/>
        <source>This parameter affects only the preview and does not change the quality of rendered video.</source>
        <translation>Ce paramètre n&apos;affecte que la prévisualisation et ne change pas la qualité des vidéos générées.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1243"/>
        <source>Sound sample rate</source>
        <translation>Fréquence</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1244"/>
        <source>Defines the frequency of the sound generated to show the preview. </source>
        <translation>Defini la fréquence du son généré pour jouer la prévisualisation.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1247"/>
        <source>Editor options</source>
        <translation>Options de l’éditeur</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1248"/>
        <source>Coordinates unit</source>
        <translation>Unité des coordonnées</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1249"/>
        <source>This option allows to select the unit for the coordinates which will be used in the properties dialog. You can choose: </source>
        <translation>Cette option permet de sélectionner l’unité des coordonnées qui sera utilisée dans les boites de dialogue de propriétés parmi :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1250"/>
        <source>Percentage: Coordinates (X, Y, Width and Height) are expressed in percentages</source>
        <translation>Pourcentage : Les coordonnées (X,Y Largeur et Hauteur) sont exprimées en pourcentage</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1251"/>
        <source>Pixel: Coordinates (X, Y, Width and Height) are expressed in pixels relative to a screen in 1080p mode</source>
        <translation>Pixel : Les coordonnées (X,Y Largeur et Hauteur) sont exprimées en pixel par rapport à un écran en mode 1080p</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1252"/>
        <source>Object position</source>
        <translation>Position des objets</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1253"/>
        <source>This option allows you to adjust the positions occupied by new objects inserted into the timeline. </source>
        <translation>Cette option permet de régler la position qu’occupent les nouveaux objets dans la ligne de temps général lors des insertions.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1254"/>
        <source>If &lt;I&gt;&lt;B&gt;Insert after the current selected object&lt;/B&gt;&lt;/I&gt; is selected, then the new slides will be created after the current slide.</source>
        <translation>Si cette option est placée sur  &lt;I&gt;&lt;B&gt;Insérer après l’objet actuellement sélectionné&lt;/B&gt;&lt;/I&gt;, alors les nouvelles diapositives seront créés après la diapositive en cours.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1255"/>
        <source>If &lt;I&gt;&lt;B&gt;Append to the end of the project&lt;/B&gt;&lt;/I&gt; is selected, then the new slides will be created at the end of the project.</source>
        <translation>Si cette option est placée sur &lt;I&gt;&lt;B&gt;Ajouter à la fin du projet&lt;/B&gt;&lt;/I&gt;, alors les nouvelles diapositives seront créés à la fin du projet.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1256"/>
        <source>Object deletion</source>
        <translation>Suppression d&apos;objets</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1257"/>
        <source>If this box is checked, a confirmation prompt will be displayed every time you remove an object: </source>
        <translation>Si cette case est cochée, une demande de confirmation s’affichera chaque fois que vous supprimerez :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1258"/>
        <source>A slide from the main window</source>
        <translation>Une diapositive dans la fenêtre principale</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1259"/>
        <source>A shot or bloc from the slide properties dialog box</source>
        <translation>Un plan ou un bloc dans la fenêtre des propriétés des diapositives</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1261"/>
        <source>If the &lt;B&gt;Automatically crop 1920x1088 video to 1920x1080&lt;/B&gt; is checked then video images are automatically cropped. </source>
        <oldsource>If the &lt;B&gt;Automatically crop 1920Ã1088 video to 1920Ã1080&lt;/B&gt; is checked then video images are automatically cropped. </oldsource>
        <translation>Si la case &lt;B&gt;Coupe automatiquement les vidéos 1920x1088 en 1920x1080&lt;/B&gt; est cochée, les vidéos dans ce cas seront automatiquement tronquées.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1262"/>
        <source>Remark: Some manufacturers produce FullHD videos 1920x1088 rather than 1920x1080. They make it to accelerate the encoding which is faster with a multiple of 16 lines. But this size is not 16:9. To keep the whole image, not only the image is deformed to fit into the screen but besides black bands appear on the sides. To avoid all these problems, by checking this box, these videos are truncated to be returned to the 1920x1080 sizes. Then 4 lines are cut at the top and bottom.</source>
        <oldsource>Remark: Some manufacturers produce FullHD videos 1920Ã1088 rather than 1920Ã1080. They make it to accelerate the encoding which is faster with a multiple of 16 lines. But this size is not 16:9. To keep the whole image, not only the image is deformed to fit into the screen but besides black bands appear on the sides. To avoid all these problems, by checking this box, these videos are truncated to be returned to the 1920Ã1080 sizes. Then 4 lines are cut at the top and bottom.</oldsource>
        <translation>Note : Certains fabricants d’appareils photo ou de caméra produisent des vidéos FullHD en 1920x1088 plutôt qu’en 1920x1080. Ils font cela pour accélérer l’encodage qui est plus rapide avec un multiple de 16 lignes. Le problème c’est que ce format n’est pas du 16/9. Du coup pour conserver l’image entière, non seulement l’image est déformée pour rentrer dans l’écran mais en plus des bandes noires apparaissent sur les cotés. Pour éviter tous ces problèmes, en cochant cette case, ces vidéos sont tronquées pour être ramenée au format 1920x1080. 4 lignes sont coupées en haut et en bas.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1263"/>
        <source>Video deinterlacing</source>
        <translation>Désentrelacement vidéo</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1264"/>
        <source>If the &lt;B&gt;Activate deinterlace filter when add new MTS videos&lt;/B&gt; is checked, deinterlace filter will automatically be activated for all .mts videos added to the project. </source>
        <translation>Si la case &lt;B&gt;Activer par défaut le filtre de désentrelacement&lt;/B&gt; pour toutes les vidéos MTS est cochée, le filtre de désentrelacement sera automatiquement activé pour pour les vidéos .mts ajoutées au projet.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1265"/>
        <source>Remark: Some manufacturers produce videos using interlaced mode. They make it to accelerate the encoding. The problem is it deforms the image on which moved lines appear. For more information on interlaced video, see this Wikipedia page: </source>
        <oldsource>Remark: Some manufacturers produce videos using interlaced mode. They make it to accelerate the encoding. The problem is it deforms the image on which moved lines appear. For more information on interlaced video, see Wikipedia page on </oldsource>
        <translation>Note : Certains fabricants d’appareils photo ou de caméra produisent des vidéos en mode entrelacé. Ils font cela pour accélérer l’encodage qui est plus rapide. Le problème c’est que cela déforme l’image sur laquelle des lignes décalées apparaissent. Pour plus d’information sur l’entrelacement, consulter cette page Wikipédia :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1266"/>
        <source>interlaced video</source>
        <translation>Entrelacement vidéo</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1278"/>
        <source>Various options</source>
        <translation>Options diverses</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1279"/>
        <source>Short date format</source>
        <translation>Format des dates courtes</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1280"/>
        <source>This option allows you to specify the format in which computed dates are displayed. </source>
        <translation>Cette option vous permet de spécifier le format dans lequel les dates calculées sont affichées.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1281"/>
        <source>Normally this format depends on the language used on your system, but it can be useful to change it especially if the interface is not available for your language.</source>
        <translation>Normalement, ce format dépend de la langue utilisée sur votre système, mais il peut être utile de la changer, surtout si l&apos;interface n&apos;est pas disponible pour votre langue.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1284"/>
        <location filename="fake/fake.cpp" line="1305"/>
        <source>Project options</source>
        <translation>Options des projets</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1286"/>
        <source>Project properties</source>
        <translation>Propriétés du projet</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1287"/>
        <source>Title</source>
        <translation>Titre</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1288"/>
        <source>Defined the automatic filling method to use for the title&apos;s project properties: </source>
        <translation>Définie la méthode de remplissage automatique du titre dans les propriétés du projet :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1289"/>
        <source>No automatic filling : You will have to define manually the title</source>
        <translation>Pas de remplissage automatique : Vous devrez saisir manuellement le titre</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1290"/>
        <source>Fill with project name when project save : The title will take the same name as the .ffd file</source>
        <translation>Remplir avec le nom du projet lors de la sauvegarde : Le titre prendra le même nom que le fichier .ffd</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1291"/>
        <source>Fill with project folder name when project save : The title will take the same name as the folder in which is save the .ffd file</source>
        <oldsource>Fill with project folder name when project save : The title will take the same name as the folder in witch is save the .ffd file</oldsource>
        <translation>Remplir avec le nom du répertoire du projet lors de la sauvegarde : Le titre prendra le même nom que le répertoire dans lequel vous sauvegardez le fichier .ffd</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1294"/>
        <source>Author</source>
        <translation>Auteur</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1295"/>
        <source>Defines the default value for the field Author that is often so called Artist by </source>
        <oldsource>Defines the default value for the field Author (often so called Artist by </oldsource>
        <translation>Défini la valeur par défaut pour le champ Auteur que est aussi souvent appelé Artiste par les </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1297"/>
        <source>Default language</source>
        <translation>Langue par défaut</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1298"/>
        <source>Defines the default value for the field Language</source>
        <translation>Défini la valeur par défaut pour le champ Language</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1299"/>
        <source>Enhance id3v2 comptatibility</source>
        <translation>Compatibilité id3v2</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1300"/>
        <source>For more compatibility with the standard id3v2, check this box to limit Title, Author and Album fields to 30 characters</source>
        <translation>Pour plus de compatibilité avec le standard id3v2, cocher cette case pour limier la taille des champs Titre, Auteur et Album à 30 caractères</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1301"/>
        <source>Default thumbnail</source>
        <translation>Vignette par défaut</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1296"/>
        <location filename="fake/fake.cpp" line="1303"/>
        <source>Media Center Systems</source>
        <translation>Systèmes Media Center</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1267"/>
        <source>Network settings</source>
        <translation>Réglages réseaux</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1268"/>
        <source>Use a proxy to access the Internet</source>
        <translation>Utiliser un proxy pour accéder à Internet</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1269"/>
        <source>Check this box if your network requires that you use a proxy.</source>
        <translation>Cochez cette case si votre réseau nécessite que vous utilisiez un proxy.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1270"/>
        <source>Proxy address</source>
        <translation>Adresse du proxy</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1271"/>
        <source>Enter address of the proxy host.</source>
        <translation>Entrer l&apos;adresse du serveur proxy.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1272"/>
        <source>Proxy port</source>
        <translation>Port du proxy</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1273"/>
        <source>Enter the port number to access the proxy or nothing to use default port.</source>
        <translation>Entrez le numéro de port pour accéder au proxy ou rien pour utiliser le port par défaut.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1274"/>
        <source>Login</source>
        <translation>Utilisateur</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1275"/>
        <source>Enter the login name to access the proxy or nothing if no login is required.</source>
        <translation>Entrez le nom d&apos;utilisateur pour se connecter au proxy ou rien si aucune connexion n&apos;est nécessaire.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1276"/>
        <source>Password</source>
        <translation>Mot de passe</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1277"/>
        <source>Enter the login password to access the proxy or nothing if no login is required.</source>
        <translation>Entrer le mot de passe pour se connecter au proxy ou rien si aucune connexion n&apos;est nécessaire.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1282"/>
        <source>Distance unit</source>
        <translation>Unité des distances</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1283"/>
        <source>This option lets you specify the unit to be used for distances.</source>
        <translation>Cette option vous permet de spécifier l&apos;unité à utiliser pour les distances.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1292"/>
        <source>Album</source>
        <translation>Album</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1293"/>
        <source>Defines the default value for the field Album</source>
        <translation>Définit la valeur par défaut pour le champ album</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1302"/>
        <source>Defines the model use as default thumbnail. Thumbnails are images that are generated along with the videos. These images are used as a poster by most </source>
        <translation>Définit le modèle de vignette à utiliser par défaut. Les vignettes sont des images qui sont générées avec les vidéos. Ces images sont utilisées comme affiche par la plupart des</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1304"/>
        <location filename="fake/fake.cpp" line="1367"/>
        <source>For more information on joined files, see &lt;a href=&quot;003A.html&quot;&gt;File attachments&lt;/a&gt;</source>
        <translation>Pour plus d&apos;information sur les fichiers joints, consulter &lt;a href=&quot;003A.html&quot;&gt;Fichiers joints&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1306"/>
        <source>New project geometry</source>
        <translation>Géométrie des nouveaux projets</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1307"/>
        <source>Selects the image geometry to be used for the creation of projects. Three geometries are available : </source>
        <translation>Sélectionne la géométrie d’image à utiliser pour la création des projets. Trois type de géométrie sont disponibles :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1308"/>
        <source>4:3: Corresponds to an old TV with (almost) square screen</source>
        <oldsource>4:3 : Corresponds to an old TV with (almost) square screen</oldsource>
        <translation>4/3 : Correspond aux anciennes TV à écran (presque) carré</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1309"/>
        <source>16:9: Corresponds to a modern TV with rectangular screen</source>
        <oldsource>16:9 : Corresponds to a modern TV with rectangular screen</oldsource>
        <translation>16/9 : Correspond aux TV modernes à écran rectangulaire</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1310"/>
        <source>2.35:1: Corresponds to the Cinema format (on a TV, this format will use black strips at the top and below).</source>
        <oldsource>2.35:1 : Corresponds to the Cinema format (on a TV, this format will use black strips at the top and below).</oldsource>
        <translation>2.35/1 : Correspond au format cinéma (sur une TV ce format utilisera des bandes noires en haut et en bas).</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1311"/>
        <source> Note: the geometry of a project is defined once and for all when it is created. It is not possible to modify it afterwards.</source>
        <translation> Note : La géométrie d’un projet est définie une fois pour toute lors de sa création. Il n’est plus possible de la modifier par la suite.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1312"/>
        <source>Default 1&lt;SUP&gt;st&lt;/SUP&gt; shot duration</source>
        <translation>Durée du 1&lt;SUP&gt;er&lt;/SUP&gt; plan</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1313"/>
        <source>Defines the default duration of the first shot for slides during their creation.</source>
        <translation>Défini la durée par défaut du premier plan des diapositives lors de leurs création.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1314"/>
        <source>Next shot duration</source>
        <translation>Durée des plans suivants</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1315"/>
        <source>Defines the default duration of further shots.</source>
        <translation>Défini la durée par défaut à donner aux plans suivants.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1316"/>
        <source>Default transition</source>
        <translation>Transition par défaut</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1317"/>
        <source>Defines the transition to be inserted between inserted slides : </source>
        <translation>Défini le type de transition à insérer entre les diapositives lors des insertions :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1318"/>
        <source> A transition chosen randomly from the library</source>
        <translation> Une transition choisie aléatoirement dans la bibliothèque</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1319"/>
        <source> No transition</source>
        <translation> Aucune transition</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1320"/>
        <source> Cross-fade transition</source>
        <translation> Transition de type fondu enchaîné</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1321"/>
        <source>Default options for speed waves</source>
        <translation>Options pour les courbes de vitesse</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1322"/>
        <source>Transition</source>
        <translation>Transition</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1323"/>
        <source>Sets the default speed wave for the transitions of new projects</source>
        <translation>Défini la courbe de vitesse par défaut pour les transitions des nouveaux projets</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1324"/>
        <source>Blocks animation</source>
        <translation>Animation de blocs</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1325"/>
        <source>Sets the default speed curve for the blocks animations of new projects</source>
        <translation>Défini la courbe de vitesse par défaut pour les animations de blocs des nouveaux projets</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1326"/>
        <source>Images animation</source>
        <translation>Animation d’images</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1327"/>
        <source>Sets the default speed for the image effects animations of new projects</source>
        <translation>Défini la courbe de vitesse par défaut pour les animations d’images des nouveaux projets</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1328"/>
        <source>Default options for new text block</source>
        <translation>Valeurs par défaut pour les nouveaux blocs texte</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1329"/>
        <source>This group of settings applies to the new text blocks created in slide dialogue by means of this button: </source>
        <oldsource>This group of settings applies to the new text blocks created in slide dialogue by means of the </oldsource>
        <translation>Ce groupe de réglage s’applique aux nouveaux blocs textes créés dans la boite de dialogue de réglage des diapositives à l’aide de ce bouton :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1330"/>
        <source>Text</source>
        <translation>Texte</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1331"/>
        <source>Allows to select the characters style applied to the new text blocks. This style defines the font, its size, its color and the shadow effects applied to the text.</source>
        <translation>Permet de sélectionner le style des caractères à appliquer aux nouveaux blocs texte. Ce style porte sur la police de caractère, sa taille, sa couleur et sur les effets d&apos;ombre appliqués au texte.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1332"/>
        <source>Background</source>
        <translation>Fond du texte</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1333"/>
        <source>Allows to select the style of background applied to the new text blocks. This style defines the transparency of the block and its filling.</source>
        <translation>Permet de sélectionner le style de fond à appliquer aux nouveaux blocs texte. Ce style porte sur la transparence du bloc et son remplissage.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1334"/>
        <location filename="fake/fake.cpp" line="1347"/>
        <source>Shape</source>
        <translation>Forme</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1336"/>
        <source>Coordinates</source>
        <translation>Coordonnées</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1337"/>
        <source>Allows to select, for every project geometry, the style of the location applied to the new text blocks. This style defines the size, the coordinates, the rotations and the geometrical constraint.</source>
        <translation>Permet de sélectionner, pour chaque géométrie de projet, le style de positionnement à appliquer aux nouveaux blocs texte. Ce style porte sur la taille, les coordonnées, les rotations et la contrainte géométrique.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1338"/>
        <source>Locking</source>
        <translation>Verrouillage</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1339"/>
        <source>Allows to Select the geometric constraint applied to the new text blocks. </source>
        <translation>Permet de sélectionner la contrainte géométrique à appliquer aux nouveaux blocs texte.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1340"/>
        <source>Unlock: The shape of the block is free</source>
        <translation>Pas de contrainte : La forme du bloc est libre</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1341"/>
        <source>Lock to project geometry: The shape of the has the same shape as the image</source>
        <translation>Vérouiller sur la géométrie du projet : La forme du bloc aura la même forme que l’image</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1342"/>
        <source>Default options for new image or video block (when creating slide)</source>
        <translation>Valeurs par défaut pour les nouveaux blocs image ou vidéo (lors des créations de diapositive)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1343"/>
        <source>This group of settings applies to the new image or video blocks created from the main window by means of this button: </source>
        <oldsource>This group of settings applies to the new image or video blocks created from the main window by means of the </oldsource>
        <translation>Ce groupe de réglage s’applique aux nouveaux blocs image ou vidéo créés lorsque vous insérez de nouvelles diapositives depuis la fenêtre principale à l’aide de ce bouton :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1344"/>
        <source>The following settings apply to all image formats:</source>
        <translation>Les réglages suivant s’appliquent à tous les formats d’image :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1345"/>
        <source>Text style</source>
        <translation>Style de texte</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1346"/>
        <source>Allows to select the characters style applied to the text of the blocks. This style defines the font, its size, its color and the shadow effects applied to the text.</source>
        <translation>Permet de sélectionner le style des caractères à appliquer au texte du bloc. Ce style porte sur la police de caractère, sa taille, sa couleur et sur les effets d’ombre appliqués au texte.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1349"/>
        <source>For every image format and every project geometry select the style of location to applied to the new blocks. This style concerns the size, the coordinates, the rotations and the geometrical constraint.</source>
        <translation>Pour chaque format d&apos;image et chaque géométrie de projet, sélectionnez le style de positionnement à appliquer aux nouveaux blocs. Ce style concerne la taille, les coordonnées, les rotations et la contrainte géométrique.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1350"/>
        <source>Select, for each image format, the style of framing and the style of positioning to be applied to new blocks.</source>
        <oldsource>Select, for each image format, the style of framing and the style of positioning to be applied tonew blocks.</oldsource>
        <translation>Sélectionner, pour chaque format d’image, le style de recadrage et le style de positionnement à appliquer aux nouveaux blocs.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1351"/>
        <source>Framing styles define how to crop the image to make it compatible with the block in which is displayed.</source>
        <translation>Les styles de cadrage définissent la manière de découper les images pour les rendre compatible avec les blocs dans lesquelles elles sont affichées.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1352"/>
        <source>The positioning styles define the the size, coordinates, rotations and geometric constraint to apply to blocks.</source>
        <translation>Les styles de positionnement définissent la taille, les coordonnées, les rotations et la contrainte géométrique à appliquer aux blocs.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1353"/>
        <source>Default options for new image or video block (when adding block in slide dialog)</source>
        <translation>Valeurs par défaut pour les nouveaux blocs image ou vidéo (lors des ajouts dans la boite diapositive)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1354"/>
        <source>This group of settings applies to the new image or video blocks created in slide dialogue by means of this button: </source>
        <oldsource>This group of settings applies to the new image or video blocks created in slide dialogue by means of the </oldsource>
        <translation>Ce groupe de réglage s’applique aux nouveaux blocs textes créés dans la boite de dialogue de réglage des diapositives à l’aide de ce bouton :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1355"/>
        <source>The same selection that when creating slides apply.</source>
        <translation>Les mêmes sélection que lors de la création des diapositives s’appliquent.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1356"/>
        <source>Rendering options</source>
        <translation>Options de génération</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1358"/>
        <source>Default video name</source>
        <translation>Nom par défaut des vidéos</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1359"/>
        <source>This option allows to select the name which will be proposed by default during the rendering of videos. This option can be applied only if the project was saved at first.</source>
        <translation>Cette option permet de sélectionner le nom qui sera proposé par défaut lors de la génération des vidéos. Cette option ne peut s’appliquer que si le projet a d’abord été sauvegardé.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1360"/>
        <source>Use project name as video name</source>
        <translation>Utiliser le nom du projet comme nom de vidéo</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1361"/>
        <source>If the project name is &quot;assembly.ffd&quot;, then &quot;assembly&quot; will be the proposed name</source>
        <translation>Si le projet s’appel « montage.ffd », alors montage sera le nom proposé</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1362"/>
        <source>Use project folder&apos;s name as video name</source>
        <translation>Utiliser le nom du répertoire du projet comme nom de vidéo</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1363"/>
        <source>If the project name is &quot;assembly.ffd&quot; and is saved in the &quot;My holidays 2011&quot; directory, then &quot;My holidays 2011&quot; will be the proposed name</source>
        <translation>Si le projet s’appel « montage.ffd » et est sauvegardé dans le répertoire « Mes vacances 2011″, alors « Mes vacances 2011″ sera le nom proposé</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1364"/>
        <source>Use title project as video name</source>
        <translation>Utiliser le titre du projet comme nom de vidéo</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1365"/>
        <source>Use the title defined in the project properties as the name of video</source>
        <translation>Utilise le titre définie dans les propriétés du projet comme nom de vidéo</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1366"/>
        <source>Default joined files options</source>
        <translation>Fichiers joints par défaut</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1368"/>
        <source>Join thumbnail to rendered file</source>
        <translation>Joindre une vignette aux vidéos générées</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1369"/>
        <source>If this box is checked then a thumbnail file will be created with video.</source>
        <translation>Si cette case est cochée, un fichier vignette sera généré en même temps que la vidéo.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1370"/>
        <source>Join XBMC .nfo file to rendered file</source>
        <translation>Joindre des fichiers .nfo pour XBMC aux vidéos générées</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1371"/>
        <source>If this box is checked then a XMBC .nfo file will be created with video.</source>
        <translation>Si cette case est cochée, un fichier .nfo pour XBMC sera généré en même temps que la vidéo.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1372"/>
        <source>Default sound level</source>
        <translation>Niveau de son par défaut</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1373"/>
        <source>Set the volume level to be achieved by amplification for music and audio tracks when the volume is set to auto</source>
        <translation>Défini le niveau de volume à atteindre pour les musiques et les pistes son quand le niveau de volume est positionné sur auto</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1374"/>
        <source>Default device mode rendering options</source>
        <translation>Options par défaut en mode équipement</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1375"/>
        <source>Smartphone</source>
        <translation>Smartphone</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1376"/>
        <source>Selects the default type and equipment model when you will click the &quot;Player and Smartphone&quot; button of the &quot;Render movie&quot; menu</source>
        <translation>Sélectionne le type d’équipement et le modèle d’équipement qui seront proposés par défaut lorsque vous cliquerez sur le bouton « Lecteur et Smartphone » du menu « Générer le film »</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1377"/>
        <source>Multimedia system</source>
        <translation>Système multimédia</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1378"/>
        <source>Selects the default type and equipment model when you will click the &quot;Multimedia system&quot; button of the &quot;Render movie&quot; menu</source>
        <translation>Sélectionne le type d’équipement et le modèle d’équipement qui seront proposés par défaut lorsque vous cliquerez sur le bouton « Système multimédia » du menu « Générer le film »</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1379"/>
        <source>For the WEB</source>
        <translation>Pour Internet</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1380"/>
        <source>Selects the default type and equipment model when you will click the &quot;For the Web&quot; button of the &quot;Render movie&quot; menu</source>
        <translation>Sélectionne le type d’équipement et le modèle d’équipement qui seront proposés par défaut lorsque vous cliquerez sur le bouton « Pour Internet » du menu « Générer le film »</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1381"/>
        <source>Lossless</source>
        <translation>Lossless</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1382"/>
        <source>Selects the default image size to be used when you will click the &quot;Lossless&quot; button of the &quot;Render movie&quot; menu</source>
        <translation>Sélectionne le format d’image à utiliser par défaut lorsque vous cliquerez sur le bouton « Lossless » du menu « Générer le film »</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1383"/>
        <source>Default advanced rendering options</source>
        <translation>Options par défaut en mode avancée</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1384"/>
        <location filename="fake/fake.cpp" line="1401"/>
        <source>File format</source>
        <translation>Format de fichier</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1385"/>
        <location filename="fake/fake.cpp" line="1402"/>
        <source>Selects the default file type to use for the rendering out of the proposed list.</source>
        <translation>Sélectionne le type de fichier par défaut à utiliser pour la génération des vidéos parmi la liste proposée.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1386"/>
        <source>Video standard</source>
        <translation>Standard vidéo</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1387"/>
        <source>Selects the default video standard to use: PAL or NTSC.</source>
        <translation>Sélectionne le standard vidéo par défaut à utiliser, PAL ou NTSC.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1388"/>
        <source>Format</source>
        <translation>Format</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1389"/>
        <source>Selects the default image format to use for the rendering out of the proposed list.</source>
        <translation>Sélectionne le format d’image vidéo par défaut à utiliser parmi la liste proposée.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1390"/>
        <source>Video codec</source>
        <translation>Codec vidéo</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1391"/>
        <source>Selects the default video codec to use for the rendering out of the proposed list.</source>
        <translation>Sélectionne le codec vidéo par défaut à utiliser parmi la liste proposée.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1392"/>
        <location filename="fake/fake.cpp" line="1396"/>
        <location filename="fake/fake.cpp" line="1405"/>
        <source>Bitrate</source>
        <oldsource>Bit rate</oldsource>
        <translation>Bitrate</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1393"/>
        <source>Selects the default bit rate to use for video during the rendering out of the proposed list.</source>
        <translation>Sélectionne le taux de compression vidéo par défaut à utiliser parmi la liste proposée.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1394"/>
        <location filename="fake/fake.cpp" line="1403"/>
        <source>Audio codec</source>
        <translation>Codec audio</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1395"/>
        <location filename="fake/fake.cpp" line="1404"/>
        <source>Selects the default audio codec to use for the rendering out of the proposed list.</source>
        <translation>Sélectionne le codec audio par défaut à utiliser parmi la liste proposée.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1397"/>
        <location filename="fake/fake.cpp" line="1406"/>
        <source>Selects the default bit rate to use for audio during the rendering out of the proposed list.</source>
        <translation>Sélectionne le taux de compression audio par défaut à utiliser parmi la liste proposée.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1398"/>
        <location filename="fake/fake.cpp" line="1407"/>
        <source>Frequency</source>
        <translation>Fréquence</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1399"/>
        <location filename="fake/fake.cpp" line="1408"/>
        <source>Select the default frequency to use for audio during the rendering.</source>
        <translation>Sélectionner la fréquence audio par défaut.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1400"/>
        <source>Default soundtrack rendering options</source>
        <translation>Options par défaut en mode export de piste son</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1409"/>
        <source>Other actions</source>
        <translation>Autres actions</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1410"/>
        <source>At the bottom of the dialog these buttons allow you to:</source>
        <translation>Au bas de la boîte de dialogue, ces boutons vous permettent de:</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1411"/>
        <source> Check configuration allows to open the &lt;a href=&quot;0106.html&quot;&gt;Check configuration dialog&lt;/a&gt;</source>
        <translation> Vérifier la configuration permet d&apos;ouvrir la boite de dialogue &lt;a href=&quot;0106.html&quot;&gt;Vérifier la configuration&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1412"/>
        <source> Manage device allows to open the &lt;a href=&quot;0102.html&quot;&gt;Manage device dialog&lt;/a&gt;</source>
        <translation> Gérer les profils permet d&apos;ouvrir la boite de dialogue &lt;a href=&quot;0102.html&quot;&gt;Gérer les profils de génération&lt;/a&gt;</translation>
    </message>
</context>
<context>
    <name>0102</name>
    <message>
        <location filename="fake/fake.cpp" line="1413"/>
        <source>Manage devices dialog</source>
        <translation>Gérer les équipements</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1414"/>
        <source>This dialog box allows you to modify the equipment profiles database.</source>
        <translation>Cette boîte de dialogue vous permet de modifier la base de données des profiles de génération.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1415"/>
        <source>The database is actually composed of two parts:</source>
        <translation>La base de données est actuellement composée de deux parties :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1416"/>
        <source>The default database (supplied with ffDiaporama). These devices are registered in the global ffDiaporama configuration file.</source>
        <translation>La base par défaut (celle qui est fournie avec ffDiaporama). Ces équipement sont inscris dans le fichier de configuration global de ffDiaporama.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1417"/>
        <source>The devices which you modify or add. These are registered in your personal configuration file.</source>
        <translation>Les équipements que vous modifiez ou ajoutez. Ces équipement sont inscris dans votre fichier de configuration personnel.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1418"/>
        <source>The device type zone allows you to select the type of equipment to be shown in the list.</source>
        <oldsource>The device type zone allows you to select the type of equipment to be shown in the list. </oldsource>
        <translation>La zone Type d’équipement permet de sélectionner le type d’équipement à afficher dans la liste.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1419"/>
        <source>The list shows the categories and the device types present in the database.</source>
        <oldsource>The list shows the categories and the device types present in the database. </oldsource>
        <translation>La liste affiche les catégories et type d’équipement présent dans la base.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1420"/>
        <source>Devices preceded by this icon are defined in the default database.</source>
        <oldsource> Devices preceded by this icon are defined in the default database.</oldsource>
        <translation>Les équipements précédés de cette icône sont définis dans la base de données par défaut.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1421"/>
        <source>Devices preceded by this icon are those that you defined yourself, or those from the default database that you have modified.</source>
        <oldsource> Devices preceded by this icon are those that you defined yourself, or those from the default database that you have modified.</oldsource>
        <translation>Les équipements précédés de cette icône sont ceux que vous avez définis vous même ou ceux de la base de données par défaut que vous avez modifiés.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1422"/>
        <source>The following buttons allow you to act on the database:</source>
        <oldsource>The following buttons allow you to act on the database: </oldsource>
        <translation>Les boutons suivants permettent d’agir sur la base de données :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1423"/>
        <source>Add device: Allows you to create a new device which will be added to the database. </source>
        <oldsource> Add device: Allows you to create a new device which will be added to the database. </oldsource>
        <translation>Ajouter : Permet de créer un nouvel équipement qui vient s’ajouter dans la base de données.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1424"/>
        <source>The creation of a new device is made in 3 steps: </source>
        <oldsource>The creation of a new device is made in 3 steps:</oldsource>
        <translation>La création d’un nouvel équipement s’effectue en 3 étapes :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1425"/>
        <source>You must first create a device</source>
        <oldsource>You must first create a device </oldsource>
        <translation>Vous devez d’abord créer un équipement</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1426"/>
        <source>You define the various parameters</source>
        <oldsource>You define the various parameters </oldsource>
        <translation>Vous définissez les différents paramètres</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1427"/>
        <source>You click the &quot;Apply modifications&quot; button to register the parameters</source>
        <oldsource>You click the &quot;Apply modifications&quot; button to register the parameters </oldsource>
        <translation>Vous cliquez sur « Appliquer les modifications » pour enregistrer les paramètres</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1428"/>
        <source>Remove device: Allows you to delete a device. </source>
        <oldsource> Remove device: Allows you to delete a device. </oldsource>
        <translation>Supprimer : Permet de supprimer un équipement. </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1429"/>
        <source>Note that you can delete only devices which you created - those shown with this icon: </source>
        <oldsource>Note that you can delete only devices which you created - those shown with the </oldsource>
        <translation>Noter que vous ne pouvez supprimer que des équipements que vous avez créés. Ceux affichés avec cette icône :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1430"/>
        <source>Reset to default: Cancels the modifications that you made on a device defined in the default ffDiaporama database</source>
        <oldsource> Reset to default: Cancels the modifications that you made on a device defined in the default ffDiaporama database </oldsource>
        <translation>Valeur par défaut : Permet d’annuler les modifications que vous avez effectué sur un équipement défini dans la base de données par défaut de ffDiaporama</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1431"/>
        <source>Remarks:</source>
        <translation>A noter :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1432"/>
        <source>Device subtype</source>
        <translation>Sous-type d’équipement</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1433"/>
        <source>Allows you to select the category in which the equipment is classified</source>
        <translation>Permet de sélectionner la catégorie dans laquelle est classé l’équipement</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1434"/>
        <source>Device model</source>
        <translation>Modèle d’équipement</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1435"/>
        <source>Enter here the name of the device (free text entry field) and then, enter all the parameters required for rendering videos that are to be associated with the device profile (File format, video Standard, etc.)</source>
        <oldsource>Enter here the name of the device (free text entry field) Then enter all the parameters required for rendering videos that are to be associated with the device profile (File format, video Standard, etc.)</oldsource>
        <translation>Entrer ici le nom de l’équipement (zone de texte libre), puis, l’ensemble des paramètres de génération de vidéo associés au profil de l’équipement (Format de fichier, Standard vidéo, etc…)</translation>
    </message>
</context>
<context>
    <name>0103</name>
    <message>
        <location filename="fake/fake.cpp" line="1436"/>
        <source>Add or modify a predefined title slide</source>
        <translation>Ajouter ou éditer une diapositive titre prédéfinie</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1437"/>
        <source>This dialog allows you to select a model and define chapter information for predefined title slides.</source>
        <oldsource>This dialog allows you to select a model and define chapter information for this predefined slide.</oldsource>
        <translation>Cette boîte de dialogue vous permet de sélectionner un modèle de titre prédéfinis et de définir les informations de chapitre pour les diapositives.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1438"/>
        <source>To understand the differences between &lt;B&gt;&lt;I&gt;Predefined title slides&lt;/I&gt;&lt;/B&gt; and &lt;B&gt;&lt;I&gt;Standard slides&lt;/I&gt;&lt;/B&gt;, see: &lt;a href=&quot;0012.html&quot;&gt;Predefined title slide&lt;/a&gt;</source>
        <translation>Pour comprendre les différences entre les &lt;B&gt;&lt;I&gt;diapositives de titre prédéfinis&lt;/I&gt;&lt;/B&gt; et les &lt;B&gt;&lt;I&gt;diapositives standards&lt;/I&gt;&lt;/B&gt;, voir: &lt;a href=&quot;0012.html&quot;&gt;diapositive de titre prédéfinis&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1439"/>
        <source>At the top of the box, the following two settings allow you to filter the Predefined title slide that are displayed in the selection area.</source>
        <translation>En haut de la boîte, les deux paramètres suivants vous permettent de filtrer les modèles de diapositive de titre prédéfinis qui sont affichés dans la zone de sélection.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1440"/>
        <source>Slide type</source>
        <translation>Type de diapositive</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1441"/>
        <location filename="fake/fake.cpp" line="1452"/>
        <source>You can select between: </source>
        <translation>Vous pouvez choisir entre :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1442"/>
        <source>Project title</source>
        <translation>Titre de projet</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1443"/>
        <source>This type of slide is usually used early in the project as the opening credits. </source>
        <translation>Ce type de diapositive est généralement utilisé au début du projet comme générique d&apos;ouverture.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1444"/>
        <source>The texts variables that are used by the models of this slide type are based only on project information. For more information on project information, see: &lt;a href=&quot;0108.html&quot;&gt;Project properties dialog&lt;/a&gt;</source>
        <translation>Les variables de textes qui sont utilisées par les modèles de ce type de diapositive sont basées uniquement sur les informations du projet. Pour plus d&apos;informations sur les informations du projet, voir : Boite de dialogue de &lt;a href=&quot;0108.html&quot;&gt;Propriétés du projet&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1445"/>
        <source>Chapter title</source>
        <translation>Titre du chapitre</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1446"/>
        <source>This type of slide is usually used several times in the project to mark the beginning of the chapter. </source>
        <translation>Ce type de diapositive est généralement utilisé plusieurs fois dans le projet pour marquer le début des chapitres.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1447"/>
        <source>The texts variables that are used by the models of this slide type are based on project information and on chapter information.</source>
        <translation>Les variables de textes qui sont utilisées par les modèles de ce type de diapositive sont basées sur les informations du projet et sur les informations de chapitre.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1448"/>
        <source>Credit title</source>
        <translation>Générique</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1449"/>
        <source>This type of slide is usually used at the end of the project as the end credits. </source>
        <translation>Ce type de diapositive est généralement utilisé à la fin du projet comme générique de fin.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1450"/>
        <source>The texts variables that are used by the models of this slide type are generally computed. For more information on texts variables, see: &lt;a href=&quot;0013.html&quot;&gt;Dynamic variables&lt;/a&gt;</source>
        <translation>Les variables de textes qui sont utilisés par les modèles de ce type de diapositive sont généralement calculées. Pour plus d&apos;informations sur les variables de textes, voir: &lt;a href=&quot;0013.html&quot;&gt;Variables dynamiques&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1451"/>
        <source>Category</source>
        <translation>Catégorie</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1453"/>
        <source>Statics models</source>
        <translation>Titre sans animation</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1454"/>
        <source>This type lists statics models ie without animations.</source>
        <translation>Ce type liste les modèles statiques c&apos;est à dire sans animations.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1455"/>
        <source>Animated models</source>
        <translation>Titre animé</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1456"/>
        <source>This type lists animated models ie with several shots.</source>
        <translation>Ce type liste les modèles animés c&apos;est à dire contenant plusieurs plans.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1457"/>
        <source>Custom models</source>
        <translation>Titres personalisés</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1458"/>
        <source>This type lists the templates that you saved with the &lt;B&gt;&lt;I&gt;Save as model&lt;/I&gt;&lt;/B&gt; function of the &lt;a href=&quot;0119.html&quot;&gt;Slide properties&lt;/a&gt; dialog box.</source>
        <translation>Ce type liste les modèles que vous avez enregistré avec la fonction &lt;I&gt;&lt;B&gt;Enregistrer comme modèle&lt;/I&gt;&lt;/B&gt; de la boite de dialogue &lt;a href=&quot;0119.html&quot;&gt;Propriétés de la diapositive&lt;/a&gt;.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1459"/>
        <source> The selection area display models corresponding to the current Type and Category you previously selected.</source>
        <translation> La zone de sélection affiche les modèles correspondant au type et à la catégorie que vous avez sélectionné précédemment.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1460"/>
        <source>The models are displayed and played, so you can see the slide as it will appear in your project with the content of dynamic variables.</source>
        <translation>Les modèles sont affichés et joués, vous pouvez donc voir la diapositive telle qu&apos;elle apparaîtra dans votre projet avec le contenu des variables dynamiques.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1461"/>
        <source>The slide duration is displayed on the bottom of each thumbnails model.</source>
        <translation>La durée des modèles est affichée en bas de chaque vignette de modèle.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1462"/>
        <source>When your selection of model is made, the following settings are available if slide type is &lt;B&gt;&lt;I&gt;Chapter model&lt;/I&gt;&lt;/B&gt;:</source>
        <translation>Lorsque votre sélection de modèle est faite, les paramètres suivants deviennent disponibles si le type de diapositive est &lt;B&gt;&lt;I&gt;Titre de chapitre &lt;/I&gt;&lt;/B&gt; :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1463"/>
        <source>Chapter name</source>
        <translation>Nom du chapitre</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1464"/>
        <source>Enter here the name of the chapter.</source>
        <translation>Entrez ici le nom du chapitre.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1465"/>
        <source>Chapter date different from project date</source>
        <translation>Date de chapitre diffèrente de la date du projet</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1466"/>
        <source>If this box is checked, the date of the chapter is different from the date of the project. </source>
        <translation>Si cette case est cochée, la date de ce chapitre est différente de la date du projet.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1467"/>
        <source>Remark: It is often useful to differentiate the date of the chapter of the date of the project. </source>
        <translation>Remarque: Il est souvent utile de distinguer la date du chapitre de la date du projet.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1468"/>
        <source>For example, if the project is &lt;U&gt;My vacation from 1 to 15&lt;/U&gt;, the chapter may be limited to the &lt;U&gt;3&lt;/U&gt;.</source>
        <oldsource>For example, if the project is &quot;My vacation from 1 to 15&quot;, the chapter may be limited to the 3.</oldsource>
        <translation>Par exemple, si le projet est «Mes vacances du 1 au 15», le chapitre peut porter sur le «3».</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1469"/>
        <source>Event date</source>
        <translation>Date de l&apos;évènement</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1470"/>
        <source>Select a date for the chapter. </source>
        <translation>Sélectionnez une date pour le chapitre.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1471"/>
        <location filename="fake/fake.cpp" line="1474"/>
        <source>Remark: This field is enabled only if the &lt;I&gt;&lt;B&gt;Chapter date different from project date&lt;/B&gt;&lt;/I&gt; check box is checked.</source>
        <translation>Remarque: Ce champ n&apos;est activé que si la case &lt;B&gt;&lt;I&gt;Date de chapitre diffèrente de la date du projet&lt;/B&gt;&lt;/I&gt; est cochée.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1472"/>
        <source>Override date</source>
        <translation>Outrepasser la date</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1473"/>
        <source>Check this box to override the date and offer you to enter the date as a free multi-line text. </source>
        <translation>Cochez cette case pour remplacer la date et vous proposer de l&apos;entrer sous forme d&apos;un texte libre multi-lignes.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1475"/>
        <source>Chapter location different from project location</source>
        <translation>Localisation du chapitre différente de la localisation du projet</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1476"/>
        <source>If this box is checked, the location of the chapter is different from the location of the project. </source>
        <translation>Si cette case est cochée, la localisation de ce chapitre est différente de la localisation du projet.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1477"/>
        <source>Remark: It is often useful to differentiate the location of the chapter of the location of the project. </source>
        <translation>Remarque: Il est souvent utile de différencier la localisation du chapitre de la localisation du projet. </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1478"/>
        <source>For example, if the project location is &lt;U&gt;where I rented for the holidays&lt;/U&gt;, the chapter location may be &lt;U&gt;where I went on tour&lt;/U&gt;.</source>
        <translation>Par exemple, si la localisation du projet est &lt;U&gt;où j&apos;ai loué pour les vacances&lt;/U&gt;, la localisation du chapitre peut être &lt;U&gt;où je suis allé en excursion&lt;/U&gt;.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1479"/>
        <source>Event location</source>
        <translation>Localisation de l&apos;évènement</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1480"/>
        <source>The location where the chapter&apos;s event took place</source>
        <translation>L&apos;endroit où a eu lieu l&apos;événement du chapitre</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1481"/>
        <location filename="fake/fake.cpp" line="1483"/>
        <source>Click on this </source>
        <translation>Cliquez sur ce</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1482"/>
        <source> button to select a location from the &lt;a href=&quot;0123.html&quot;&gt;Add or modify a location&lt;/a&gt; dialog or using a favorite</source>
        <translation> bouton pour sélectionner un emplacement parmis les favoris ou pour ouvrir la boite de dialogue &lt;a href=&quot;0123.html&quot;&gt; Ajouter ou modifier un emplacement&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1484"/>
        <source> button to remove actual location (set to empty)</source>
        <translation> bouton pour supprimer la localisation actuelle (rendre vide)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1485"/>
        <source>Remark: These fields and buttons are enabled only if the &lt;I&gt;&lt;B&gt;Chapter location different from project location&lt;/B&gt;&lt;/I&gt; check box is checked.</source>
        <translation>Remarque: Ces champs et boutons ne sont activés que si la case &lt;I&gt;&lt;B&gt;localisation du chapitre différente de la localisation du projet&lt;/B&gt;&lt;/I&gt; est cochée.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1486"/>
        <source>Under these settings, the following two buttons allow you:</source>
        <translation>Sous ces réglages, les deux boutons suivants vous permettent:</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1487"/>
        <source> Project properties</source>
        <translation> Propriétés du projet</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1488"/>
        <source>This button allows you to open &lt;a href=&quot;0108.html&quot;&gt;Project properties dialog&lt;/a&gt;.</source>
        <translation>Ce bouton vous permet d&apos;ouvrir la boite de dialogue &lt;a href=&quot;0108.html&quot;&gt;Propriétés du projet&lt;/a&gt;.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1489"/>
        <source> Convert to standard slide</source>
        <translation> Convertir en diapositive standard</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1490"/>
        <source>This button allows you to convert this slide to a standard slide which are fully customizable.</source>
        <translation>Ce bouton vous permet de convertir cette diapositive en une diapositive standard qui devient entièrement personnalisable.</translation>
    </message>
</context>
<context>
    <name>0104</name>
    <message>
        <location filename="fake/fake.cpp" line="1491"/>
        <source>Background properties</source>
        <translation>Propriétés de l&apos;arrière plan</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1492"/>
        <source>The &quot;Background properties&quot; dialog allows you to define settings for the background of the slide.</source>
        <oldsource>The &quot;Background properties&quot; dialog allows you to define settings for the background of the slide. </oldsource>
        <translation>La boite « Propriétés de l’arrière plan » permet de définir le réglage d’arrière plan de la diapositive (fond d’écran).</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1493"/>
        <source>Same background as preceding object.</source>
        <translation>Utiliser le même arrière plan que l’objet précédent.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1494"/>
        <source> If this option is selected, the slide will have no background definition  but will use the same background as the previous slide: </source>
        <translation> Si cette option est sélectionnée, la diapositive n’aura pas de définition d’arrière plan mais utilisera le même arrière plan que la diapositive précédente :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1495"/>
        <source>If the previous slide does not have a background definition either, the check continues backwards until a slide is found which does have a background definition.</source>
        <translation>Si la diapositive précédente ne possède pas non plus de définition d’arrière plan, on remontera encore d’un cran jusqu’à ce qu’une diapositive possède une définition d’arrière plan.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1496"/>
        <source>If no previous slide has a background definition, then a black frame will be used.</source>
        <translation>Si aucune diapositive précédente ne possède de définition d’arrière plan, alors un fond noir sera utilisé.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1497"/>
        <source>Select a new background</source>
        <translation>Définir un nouvel arrière plan</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1498"/>
        <source> If this option is selected, the slide will have its own background definition. In that case, the following zones set properties for the background. </source>
        <translation> Si cette option est sélectionnée, la diapositive aura sa propre définition d’arrière plan. Dans ce cas, les zones suivantes permettent d’effectuer le réglage du fond d’écran.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1499"/>
        <source>Solid brush</source>
        <translation>Brosse unie</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1500"/>
        <source>Selects a plain color.</source>
        <translation>Permet de sélectionner une couleur unie.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1501"/>
        <source>Gradient 2 colors</source>
        <translation>Dégradé à 2 couleurs</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1502"/>
        <source>Selects a gradient of 2 colors</source>
        <translation>Permet de sélectionner un dégradé de 2 couleurs</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1503"/>
        <source>Gradient 3 colors</source>
        <translation>Dégradé à 3 couleurs</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1504"/>
        <source>Selects a gradient of 3 colors</source>
        <translation>Permet de sélectionner un dégradé de 3 couleurs</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1505"/>
        <source>Image from library</source>
        <translation>Image de la librairie</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1506"/>
        <source>Selects a background image from the library </source>
        <oldsource>Selects a background image from the library</oldsource>
        <translation>Permet de sélectionner une image parmi celle présente dans la librairie</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1507"/>
        <source>Remark: By default, the library contains a dozen of background screens. </source>
        <translation>Note : Par défaut, la librairie contient une douzaine de fond d&apos;écran.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1508"/>
        <source>You can get additionals backgrounds installing the &lt;B&gt;&lt;U&gt;Texturemate&lt;/U&gt;&lt;/B&gt; extension from this page </source>
        <oldsource>You can get additionals backgrounds installing the &lt;B&gt;&lt;U&gt;Texturemate extension&lt;/U&gt;&lt;/B&gt; from this page </oldsource>
        <translation>Vous pouvez obtenir des fonds d&apos;écran additionnels en installant l&apos;extension &lt;B&gt;&lt;U&gt;Texturemate&lt;/U&gt;&lt;/B&gt; depuis cette page</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1509"/>
        <source>Download extensions</source>
        <translation>Télécharger des extensions</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1510"/>
        <source>Image disk</source>
        <translation>Image depuis un fichier</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1511"/>
        <source>Allows you to select a photo or an image. </source>
        <translation>Permet de sélectionner une photo ou une image.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1512"/>
        <source>File</source>
        <translation>Fichier</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1513"/>
        <source>Indicates the name of the current file</source>
        <translation>Indique le nom du fichier actuellement sélectionné</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1514"/>
        <source>Allow you to selects an image file</source>
        <oldsource> Selects an image file</oldsource>
        <translation>Vous permet de sélectionner un fichier image</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1515"/>
        <source>Keep aspect ratio</source>
        <translation>Conserver la géométrie</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1516"/>
        <source>If this box is checked, then the image will not be deformed, and: </source>
        <oldsource>If this box is checked, then the image will not be deformed and the button &lt;B&gt;Image framing and correction&lt;/B&gt; is displays</oldsource>
        <translation>Si cette case est cochée, alors l&apos;image ne sera pas déformée, et :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1517"/>
        <source> Open the &lt;a href=&quot;0110.html&quot;&gt;Image framing and correction dialog&lt;/a&gt; to regulate framing and image corrections </source>
        <oldsource>Open the &lt;a href=&quot;0110.html&quot;&gt;Image framing and correction dialog&lt;/a&gt; to regulate framing and image corrections</oldsource>
        <translation>Ouvre la boite de dialog &lt;a href=&quot;0110.html&quot;&gt;Recadrer et/ou corriger une image&lt;/a&gt; pour effectuer un recadrage ou des réglages sur l’image</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1518"/>
        <source>Full filling</source>
        <translation>Remplir</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1519"/>
        <source>Allows the image to fill the whole screen with image deformation as needed.</source>
        <translation>Permet de remplir tout l’écran, en déformant l’image si nécessaire.</translation>
    </message>
</context>
<context>
    <name>0105</name>
    <message>
        <location filename="fake/fake.cpp" line="1520"/>
        <source>Chapter properties</source>
        <translation>Propriétés du chapitre</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1521"/>
        <source> All slides have information chaptering so each slide can mark the beginning of a new chapter. </source>
        <oldsource>This dialog allows you to define settings for the chapter information of the slide</oldsource>
        <translation> Toutes les diapositives possèdent des informations de chapitrage et peuvent marquer le début d&apos;un nouveau chapitre.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1522"/>
        <source>Remarks:</source>
        <translation>A noter :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1523"/>
        <source>Except for the first chapter which start at 0, all other chapters begin after the entering transition.</source>
        <translation>A l&apos;exception du premier chapitre qui commencent à 0, tous les autres chapitres commencent après la transition entrante.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1524"/>
        <source>The 1st slide of the mount always mark the beginning of a new chapter.</source>
        <translation>La 1ère diapositive du montage marque toujours le début d&apos;un nouveau chapitre.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1525"/>
        <source>This dialog allows you to define settings for the chapter information of the slide:</source>
        <translation>Cette boîte de dialogue vous permet de définir les information de chapitrage de la diapositive :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1526"/>
        <source>Start a new chapter with this slide</source>
        <translation>Commencer un nouveau chapitre avec cette diapositive</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1527"/>
        <source>If this box is checked, the slide will mark the beginning of a new chapter. </source>
        <translation>Si cette case est cochée, la diapositive marquera le début d&apos;un nouveau chapitre.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1528"/>
        <source>Remark: This box cannot be deactivated for the first slide of the project.</source>
        <oldsource>Remarks: This box cannot be deactivated for the first slide of the project.</oldsource>
        <translation>Remarque: Cette case ne peut pas être désactivée pour la première diapositive du projet.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1529"/>
        <source>Chapter name</source>
        <translation>Nom du chapitre</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1530"/>
        <source>Enter here the name of the chapter.</source>
        <translation>Entrez ici le nom du chapitre.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1531"/>
        <source>Chapter date different from project date</source>
        <translation>Date de chapitre diffèrente de la date du projet</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1532"/>
        <source>If this box is checked, the date of the chapter is different from the date of the project. </source>
        <translation>Si cette case est cochée, la date de ce chapitre est différente de la date du projet.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1533"/>
        <source>Remark: It is often useful to differentiate the date of the chapter of the date of the project. </source>
        <translation>Remarque: Il est souvent utile de distinguer la date du chapitre de la date du projet.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1541"/>
        <source>Chapter location different from project location</source>
        <translation>Localisation du chapitre différente de la localisation du projet</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1542"/>
        <source>If this box is checked, the location of the chapter is different from the location of the project. </source>
        <translation>Si cette case est cochée, la localisation de ce chapitre est différente de la localisation du projet.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1543"/>
        <source>Remark: It is often useful to differentiate the location of the chapter of the location of the project. </source>
        <translation>Remarque: Il est souvent utile de différencier la localisation du chapitre de la localisation du projet. </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1544"/>
        <source>For example, if the project location is &lt;U&gt;where I rented for the holidays&lt;/U&gt;, the chapter location may be &lt;U&gt;where I went on tour&lt;/U&gt;.</source>
        <translation>Par exemple, si la localisation du projet est &lt;U&gt;où j&apos;ai loué pour les vacances&lt;/U&gt;, la localisation du chapitre peut être &lt;U&gt;où je suis allé en excursion&lt;/U&gt;.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1545"/>
        <source>Event location</source>
        <translation>Localisation de l&apos;évènement</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1546"/>
        <source>The location where the chapter&apos;s event took place</source>
        <translation>L&apos;endroit où a eu lieu l&apos;événement du chapitre</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1547"/>
        <location filename="fake/fake.cpp" line="1549"/>
        <source>Click on this </source>
        <translation>Cliquez sur ce</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1548"/>
        <source> button to select a location from the &lt;a href=&quot;0123.html&quot;&gt;Add or modify a location&lt;/a&gt; dialog or using a favorite</source>
        <translation> bouton pour sélectionner un emplacement parmis les favoris ou pour ouvrir la boite de dialogue &lt;a href=&quot;0123.html&quot;&gt; Ajouter ou modifier un emplacement&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1550"/>
        <source> button to remove actual location (set to empty)</source>
        <translation> bouton pour supprimer la localisation actuelle (rendre vide)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1551"/>
        <source>Remark: These fields and buttons are enabled only if the &lt;I&gt;&lt;B&gt;Chapter location different from project location&lt;/B&gt;&lt;/I&gt; check box is checked.</source>
        <translation>Remarque: Ces champs et boutons ne sont activés que si la case &lt;I&gt;&lt;B&gt;localisation du chapitre différente de la localisation du projet&lt;/B&gt;&lt;/I&gt; est cochée.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1534"/>
        <source>For example, if the project is &lt;U&gt;My vacation from 1 to 15&lt;/U&gt;, the chapter may be limited to the &lt;U&gt;3&lt;/U&gt;.</source>
        <translation>Par exemple, si le projet est «Mes vacances du 1 au 15», le chapitre peut porter sur le «3».</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1535"/>
        <source>Event date</source>
        <translation>Date de l&apos;évènement</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1536"/>
        <source>Select a date for the chapter. </source>
        <translation>Sélectionnez une date pour le chapitre.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1537"/>
        <location filename="fake/fake.cpp" line="1540"/>
        <source>Remark: This field is enabled only if the &lt;I&gt;&lt;B&gt;Chapter date different from project date&lt;/B&gt;&lt;/I&gt; check box is checked.</source>
        <translation>Remarque: Ce champ n&apos;est activé que si la case &lt;B&gt;&lt;I&gt;Date de chapitre diffèrente de la date du projet&lt;/B&gt;&lt;/I&gt; est cochée.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1538"/>
        <source>Override date</source>
        <oldsource>Override date:</oldsource>
        <translation>Outrepasser la date</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1539"/>
        <source>Check this box to override the date and offer you to enter the date as a free multi-line text. </source>
        <translation>Cochez cette case pour remplacer la date et vous proposer de l&apos;entrer sous forme d&apos;un texte libre multi-lignes.</translation>
    </message>
</context>
<context>
    <name>0106</name>
    <message>
        <location filename="fake/fake.cpp" line="1552"/>
        <source>Check configuration</source>
        <translation>Vérification de la configuration</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1553"/>
        <source>This dialog allows to check external tools configuration and libraries used by ffDiaporama.</source>
        <oldsource>This dialog allows to check external tools configuration and libraries used by ffDiaporama. </oldsource>
        <translation>Cette boite de dialogue permet de vérifier la configuration des programmes externes et des librairies utilisés par ffDiaporama.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1554"/>
        <source>It is especially useful for the Linux users and for those who compiles the application.</source>
        <translation>Elle est particulièrement utile pour les utilisateurs de Linux et pour ceux qui compile l&apos;application.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1555"/>
        <source>The most common shown errors concern the supported formats, codec and library versions.</source>
        <translation>Les erreurs les plus courantes concernent les formats supportés, le codecs et les versions des bibliothèques.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1556"/>
        <source>To solve the problems you will have to install additional packages on your computer and may be to make ffDiaporama from source and verify again the configuration.</source>
        <translation>Pour résoudre les problèmes vous aurez à installer des paquets supplémentaires sur votre ordinateur et peut-être à recompiler ffDiaporama depuis les fichiers sources puis enfin vérifier à nouveau la configuration.</translation>
    </message>
</context>
<context>
    <name>0107</name>
    <message>
        <location filename="fake/fake.cpp" line="1557"/>
        <source>Export project</source>
        <translation>Exporter le projet</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1558"/>
        <source>This dialog box allows you to export the project and all ressources used by the project to a folder</source>
        <translation>Cette boîte de dialogue vous permet d&apos;exporter le projet et toutes les ressources utilisées par le projet dans un dossier</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1559"/>
        <source>Destination folder</source>
        <translation>Répertoire de destination</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1560"/>
        <source>Allows you to select the base destination folder. Click on the folder button to open the directory selector.</source>
        <translation>Permet de sélectionner le répertoire de base pour la destination. Cliquez sur le bouton en forme de dossier pour ouvrir le sélecteur de répertoire.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1561"/>
        <source>Project subfolder</source>
        <translation>Sous-répertoire du projet</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1562"/>
        <source>Allows you to select the folder name to be created for the project files. By default the project title is proposed.</source>
        <oldsource>Allows you to selects the folder name to be created for the project files. By default the project title is proposed.</oldsource>
        <translation>Permet de sélectionner le nom du dossier qui sera créé pour l&apos;export du projet. Par défaut, le titre du projet est proposé.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1563"/>
        <source> Once completed your selections, click the OK button to start the export. </source>
        <translation> Une fois terminé vos sélections, cliquez sur le bouton OK pour démarrer l&apos;exportation.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1564"/>
        <source>At any time during this process, you can click the cancel button to stop the export. </source>
        <translation>À tout moment au cours de ce processus, vous pouvez cliquer sur le bouton Annuler pour arrêter l&apos;exportation.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1565"/>
        <source>Remarks:</source>
        <translation>A noter :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1566"/>
        <source>The export takes into account all the resources that compose the project:</source>
        <translation>L&apos;exportation prend en compte toutes les ressources qui composent le projet :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1567"/>
        <source>Images</source>
        <translation>Images</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1568"/>
        <source>Videos</source>
        <translation>Vidéos</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1569"/>
        <source>Music</source>
        <translation>Musiques</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1570"/>
        <source>Thumbnail elements</source>
        <translation>Eléments de vignette</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1571"/>
        <source>Wallpapers</source>
        <translation>Fonds d&apos;écran</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1572"/>
        <source>clipart that are not stored under the ClipArt alias.</source>
        <translation>Les cliparts qui ne sont pas stockés sous l&apos;alias ClipArt.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1573"/>
        <source>Export does not just only copy the files. The following rules apply:</source>
        <translation>L&apos;exportation ne se contente pas seulement de copier les fichiers. Les règles suivantes s&apos;appliquent:</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1574"/>
        <source>If multiple files from different directories have the same names, these files are re-named.</source>
        <translation>Si plusieurs fichiers de différents répertoires ont les mêmes noms, ces fichiers sont renommés.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1575"/>
        <source>A .ffd project file is created taking into account any changes in directory and file name.</source>
        <translation>Un fichier projet .ffd est créé en prenant en compte tous les changements de répertoire et de nom de fichier.</translation>
    </message>
</context>
<context>
    <name>0108</name>
    <message>
        <location filename="fake/fake.cpp" line="1576"/>
        <source>Project properties</source>
        <translation>Propriétés du projet</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1577"/>
        <source> This dialog allows you to define the information which qualifies the project. </source>
        <oldsource>This dialog allows you to define the information which qualifies the project. </oldsource>
        <translation> La boite de dialogue Définir les propriétés du projet vous permet de définir les informations qui qualifie le projet.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1578"/>
        <source>This information will then be registered in the form of TAGs in the rendered video files. </source>
        <translation>Ces informations seront ensuite inscrites sous forme de TAG dans les fichiers vidéos générés.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1579"/>
        <location filename="fake/fake.cpp" line="1598"/>
        <location filename="fake/fake.cpp" line="1641"/>
        <source>Remarks:</source>
        <oldsource>Remark: </oldsource>
        <translation>Note :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1585"/>
        <source>Settable fields</source>
        <translation>Champs paramétrables</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1586"/>
        <location filename="fake/fake.cpp" line="1655"/>
        <source>Fields</source>
        <translation>Champs</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1587"/>
        <location filename="fake/fake.cpp" line="1656"/>
        <location filename="fake/fake.cpp" line="1670"/>
        <source>Remark</source>
        <translation>Note</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1588"/>
        <source>Project geometry</source>
        <translation>Géométrie du projet</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1589"/>
        <source>This field allows you to select the geometry to be used for the project. </source>
        <translation>Ce champ permet de sélectionner la géométrie qui sera utilisé pour le projet.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1592"/>
        <location filename="fake/fake.cpp" line="1660"/>
        <source>Title</source>
        <translation>Titre</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1596"/>
        <source>Author</source>
        <translation>Auteur</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1603"/>
        <source>Album</source>
        <translation>Album</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1607"/>
        <source>Language</source>
        <translation>Langue</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1609"/>
        <source>(ISO 639 standard - 3 characters)</source>
        <translation>(Standard ISO 639 - 3 caractères)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1627"/>
        <source>Comment</source>
        <translation>Commentaire</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1628"/>
        <source>A free comment which can spread out on several lines. </source>
        <translation>Un commentaire libre pouvant s’étaler sur plusieurs lignes.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1642"/>
        <source>Some fields are automatically filled and do not appear in this dialog: </source>
        <translation>Note : Certain champs sont remplis automatiquement et n’apparaissent pas dans cette boite de dialogue :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1643"/>
        <source>Timestamp</source>
        <translation>Timestamp</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1644"/>
        <source>Date and time of generation of the video.</source>
        <translation>Correspond aux date et heure de génération de la vidéo.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1645"/>
        <source>Composer</source>
        <translation>Composeur</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1646"/>
        <source>Contains the version of ffDiaporama with which the video was produced.</source>
        <translation>Contient la version de ffDiaporama avec lequel la vidéo a été produite.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1647"/>
        <source>Encoder</source>
        <translation>Encodeur</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1648"/>
        <source>Contains the version of libavformat (ffmpeg) with which the video was produced.</source>
        <translation>Contient la version de libavformat (ffmpeg) avec lequel la vidéo a été produite.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1652"/>
        <source>Chapters</source>
        <translation>Chapitres</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1580"/>
        <source>The properties of the project are a partial implementation of the </source>
        <translation>Les propriétés du projet sont une mise en œuvre partielle de la norme </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1581"/>
        <source>MPEG-7</source>
        <translation>MPEG-7</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1582"/>
        <source> standard on the descriptors of multimedia contents.</source>
        <translation>sur les descripteurs de contenu multimédia.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1583"/>
        <source>These properties are written into the video files during the rendering and can be exploited by indexing systems (collection managers) or by </source>
        <translation>Ces propriétés sont écrites dans les fichiers vidéo lors de la génération et peuvent être exploitées par les systèmes d&apos;indexation (gestionnaires de collections) ou par les </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1584"/>
        <location filename="fake/fake.cpp" line="1600"/>
        <location filename="fake/fake.cpp" line="1615"/>
        <location filename="fake/fake.cpp" line="1631"/>
        <location filename="fake/fake.cpp" line="1650"/>
        <source>Media Center Systems</source>
        <translation>Systèmes Media Center</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1590"/>
        <location filename="fake/fake.cpp" line="1594"/>
        <location filename="fake/fake.cpp" line="1605"/>
        <location filename="fake/fake.cpp" line="1629"/>
        <source>Remark:</source>
        <translation>Note :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1591"/>
        <source>This field is only editable when the dialog box is used for creating a new project. Subsequently, it is not possible to change this value.</source>
        <translation>Ce champ est modifiable uniquement lorsque la boîte de dialogue est utilisée pour créer un nouveau projet. Par la suite, il n&apos;est plus possible de modifier cette valeur.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1593"/>
        <source>The title of the project </source>
        <translation>Le titre du projet </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1595"/>
        <location filename="fake/fake.cpp" line="1602"/>
        <location filename="fake/fake.cpp" line="1606"/>
        <source>If the id3v2 compatibility option is set in &lt;a href=&quot;0101.html&quot;&gt;option dialog&lt;/a&gt;, this fields is limited to 30 characters</source>
        <translation>Si l&apos;option de compatibilité ID3v2 est cochée dans la boite de dialog &lt;a href=&quot;0101.html&quot;&gt;option de l&apos;application&lt;/a&gt;, alors ce champ est limité à 30 caractères</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1617"/>
        <source>Event date</source>
        <translation>Date de l&apos;évènement</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1618"/>
        <source>The date of the event of the project</source>
        <translation>La date de l&apos;évènement sur lequel le projet porte</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1619"/>
        <source>Override date</source>
        <translation>Outrepasser la date</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1620"/>
        <source>Check this box to override the date and offer you to enter the date as a free multi-line text</source>
        <translation>Cochez cette case pour remplacer la date et vous proposer de l&apos;entrer sous forme d&apos;un texte libre multi-lignes</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1597"/>
        <source>The name of the author of the project. </source>
        <translation>Le nom de l&apos;auteur du projet.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1599"/>
        <source>This field is often shown by indexing system and </source>
        <translation>Ce champ est souvent reconnu par les systèmes d&apos;indexation et les </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1601"/>
        <source> under the term Artist.</source>
        <translation> sous le nom de Artiste.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1604"/>
        <source>The album of the project </source>
        <translation>L&apos;album du projet </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1608"/>
        <source>The language of the audio track </source>
        <oldsource>The language of the audio track (</oldsource>
        <translation>La langue de la piste audio </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1676"/>
        <source>ISO 639</source>
        <translation>ISO 639</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1630"/>
        <source>Numerous indexing systems or </source>
        <translation>De nombreux systèmes d&apos;indexation ou des </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1611"/>
        <source>These options allow you to define the thumbnail that will be attached to the video file when rendering </source>
        <translation>Ces options vous permettent de définir la vignette qui sera jointe à la vidéo lors de la génération </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1621"/>
        <source>Event location</source>
        <translation>Localisation de l&apos;évènement</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1622"/>
        <source>The location where the project&apos;s event took place</source>
        <translation>L&apos;endroit où l&apos;événement du projet a eu lieu</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1623"/>
        <location filename="fake/fake.cpp" line="1625"/>
        <source>Click on this </source>
        <translation>Cliquez sur ce</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1624"/>
        <source> button to select a location from the &lt;a href=&quot;0123.html&quot;&gt;Add or modify a location&lt;/a&gt; dialog or using a favorite</source>
        <translation> bouton pour sélectionner un emplacement parmis les favoris ou pour ouvrir la boite de dialogue &lt;a href=&quot;0123.html&quot;&gt; Ajouter ou modifier un emplacement&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1626"/>
        <source> button to remove actual location (set to empty)</source>
        <translation> bouton pour supprimer la localisation actuelle (rendre vide)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1632"/>
        <source> will read only the 1&lt;SUP&gt;st&lt;/SUP&gt; line.</source>
        <oldsource> will read only the 1st line.</oldsource>
        <translation> ne reconnaitrons que la 1&lt;SUP&gt;ère&lt;/SUP&gt; ligne.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1634"/>
        <source>These options sets the value of the velocity curves for use whenever the corresponding options are set to &quot;Project Default&quot; </source>
        <translation>Ces options définissent les courbes de vitesse à utiliser lorsque les options correspondantes sont réglées sur &quot;Valeur par défaut du project&quot;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1649"/>
        <source>For more compatibility with indexing systems and </source>
        <translation>Pour plus de compatibilité avec les systèmes d&apos;indexation et les </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1651"/>
        <source>, ffDiaporama does not include the whole video TAGs but is closer rather to the standard id3v2 than is the most used by these systems today. Furthermore, the video formats do not support every TAG in the same way.</source>
        <translation>, ffDiaporama n&apos;inclut pas l&apos;ensemble des TAG vidéo, mais se rapproche plutôt de la norme ID3v2 qui est la plus utilisée aujourd&apos;hui par ces systèmes. En outre, les formats vidéo ne supportent pas tous les TAG de la même façon.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1653"/>
        <source> Chapters defined in the project are listed for consultation. (To modify chapters use Chapter button in &lt;a href=&quot;0119.html&quot;&gt;modify slide dialog&lt;/a&gt;.) </source>
        <translation> Les chapitres définis dans le projet sont affichés pour consultation. (Pour modifier les chapitres utilisez le bouton chapitre dans la boite de dialogue &lt;a href=&quot;0119.html&quot;&gt;Propriétés des diapositives&lt;/a&gt;.)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1654"/>
        <source>The following fields appear: </source>
        <translation>Les champs suivant apparaissent :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1657"/>
        <source>Chapter number</source>
        <translation>Le n° du chapitre</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1658"/>
        <source>Slide</source>
        <translation>Diapositive</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1659"/>
        <source>Slide number in wich chapter is defined</source>
        <translation>Le n° de la diapositive dans laquelle est définie le chapitre</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1661"/>
        <source>Chapter title</source>
        <translation>Titre du chapitre</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1662"/>
        <source>Start</source>
        <translation>Début</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1663"/>
        <source>Chapter start position</source>
        <translation>La position de début du chapitre</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1664"/>
        <source>End</source>
        <translation>Fin</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1665"/>
        <source>Chapter end position</source>
        <translation>La position de fin du chapitre</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1666"/>
        <source>Duration</source>
        <translation>Durée</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1667"/>
        <source>Chapter duration</source>
        <translation>Durée</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1668"/>
        <source>Remark: Video formats do not support all the chapters in the same way:</source>
        <oldsource>Remark: Video formats do not support all the chapters in the same way: </oldsource>
        <translation>Note : Les formats vidéos ne supportent pas tous les chapitres de la même façon :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1669"/>
        <source>Format</source>
        <translation>Format</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1671"/>
        <source>3GP/MP4/MKV</source>
        <translation>3GP/MP4/MKV</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1672"/>
        <source>Full support</source>
        <translation>Support complet</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1673"/>
        <source>AVI/MPG/FLV/OGV/WEBM</source>
        <translation>AVI/MPG/FLV/OGV/WEBM</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1674"/>
        <source>No support</source>
        <translation>Aucune prise en charge des chapitres</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1633"/>
        <source>Options for speed waves</source>
        <translation>Options pour les courbes de vitesse</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1635"/>
        <source>Transition</source>
        <translation>Transition</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1636"/>
        <source>Defined default speed curve for transitions</source>
        <translation>Défini la courbe de vitesse par défaut pour les transitions</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1637"/>
        <source>Block animations</source>
        <translation>Animation de blocs</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1638"/>
        <source>Defined default speed curve for block animations</source>
        <translation>Défini la courbe de vitesse par défaut pour les animations</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1639"/>
        <source>Image animations</source>
        <translation>Animation d’images</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1640"/>
        <source>Defined default speed curve for image animations</source>
        <translation>Défini la courbe de vitesse par défaut pour les animations</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1610"/>
        <source>Thumbnail</source>
        <translation>Vignette</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1612"/>
        <source>Create a new model from this thumbnail or edit custom thumbnail. Opens the &lt;a href=&quot;0117.html&quot;&gt;Edit thumbnail dialog&lt;/a&gt;.</source>
        <translation>Créer un nouveau modèle à partir de cette vignette ou modifier une vignette personnalisée. Ouvre la boîte de dialogue &lt;a href=&quot;0117.html&quot;&gt;Editer une vignette&lt;/a&gt;.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1613"/>
        <source>Customize the thumbnail only for this project (without creating a new thumbnail model). Opens the &lt;a href=&quot;0117.html&quot;&gt;Edit thumbnail dialog&lt;/a&gt;.</source>
        <translation>Personnaliser la vignette uniquement pour ce projet (sans créer de nouveau modèle de vignette). Ouvre la boîte de dialogue &lt;a href=&quot;0117.html&quot;&gt;Editer une vignette&lt;/a&gt;.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1614"/>
        <source>Expor thumbnail to a jpeg file. By default, the proposed file name is &quot;folder.jpg&quot;. ffDiaporama and many </source>
        <translation>Exporter la vignette dans un fichier jpeg. Par défaut, le nom de fichier proposé est &quot;folder.jpg&quot;. ffDiaporama et de nombreux </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1616"/>
        <source> recognize this file as the icon to be used for the directory that contains it.</source>
        <translation> reconnaissent ce fichier comme étant l&apos;icône à utiliser pour le répertoire qui le contient.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1675"/>
        <source>See also</source>
        <translation>Voir aussi</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1677"/>
        <source>TAG in ffmpeg</source>
        <translation>Les TAG dans ffmpeg</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1678"/>
        <source>Standard ID3v2</source>
        <translation>Norme ID3v2</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1679"/>
        <source>Standard MPEG-7 on the descriptors of multimedia contents</source>
        <translation>Norme MPEG-7 sur les descripteurs de contenus multimédia</translation>
    </message>
</context>
<context>
    <name>0109</name>
    <message>
        <location filename="fake/fake.cpp" line="1680"/>
        <source>Select files</source>
        <translation>Sélectionner des fichiers</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1681"/>
        <source>This dialog box is used in very many cases in the application.</source>
        <translation>Cette boite est utilisée en de très nombreux cas dans l&apos;application.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1682"/>
        <source>It is used to select either one or multiple files depending on the purpose for which is was called.</source>
        <translation>Elle sert à selectionner soit un soit plusieurs fichiers en fonction de la fonction pour laquelle est a été appelé.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1683"/>
        <source>It consists of a multimedia file browser.</source>
        <translation>Elle est composée d&apos;un explorateur de fichier mutlimédia.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1684"/>
        <source>For more information on the ffDiaporama&apos;s multimedia file browser, see: &lt;a href=&quot;0024.html&quot;&gt;The multimedia file browser&lt;/a&gt;</source>
        <translation>Pour plus d&apos;information sur l&apos;explorateur de fichier mutlimédia de ffDiaporama, consultez : &lt;a href=&quot;0024.html&quot;&gt;L’explorateur de fichiers multimédia&lt;/a&gt;</translation>
    </message>
</context>
<context>
    <name>0110</name>
    <message>
        <location filename="fake/fake.cpp" line="1685"/>
        <source>Correct, reframe or cut image or video</source>
        <translation>Recadrer, corriger et/ou couper une image ou une vidéo</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1686"/>
        <source>This dialog box allows you to:</source>
        <oldsource>This dialog box allows you to: </oldsource>
        <translation>Cette boite vous permet :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1687"/>
        <source>Change image framing (select a part of the image).</source>
        <oldsource>- Rotate image (change or restore the orientation portrait/landscape) </oldsource>
        <translation>Change le cadrage de l&apos;image (n&apos;en sélectionne qu&apos;une partie).</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1696"/>
        <source>For more information on available types of objects see: &lt;a href=&quot;0045.html&quot;&gt;Types of objects in ffDiaporama&lt;/a&gt;</source>
        <translation>Pour plus d&apos;informations sur les types d&apos;objets disponibles, voir : &lt;a href=&quot;0045.html&quot;&gt;Types d&apos;objects dans ffDiaporama&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1697"/>
        <source> The image correct and reframe tag</source>
        <oldsource>The image correct and reframe tag</oldsource>
        <translation>L&apos;onglet de correction et de recadrage</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1702"/>
        <source> This button allows you to change the file </source>
        <translation> Ce bouton vous permet de changer de fichier</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1703"/>
        <source>Warning! If you replace a file (image or video) with another one with a different image geometry, you will need to review the image framing in all shots. </source>
        <translation>Attention, si vous remplacer le fichier (image ou vidéo) par un autre dont la géométrie d’image n’est pas la même, vous devrez revoir le cadrage de l’image dans tous les plans.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1715"/>
        <source>Allows to select a framing from a list of predefined framings. The framings are classified in different categories: </source>
        <translation>Permet de sélectionner un cadrage parmi une liste de cadrage prédéfinis. Les cadrages sont classés dans différentes catégories :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1716"/>
        <source>Lock on the project geometry</source>
        <translation>Verrouiller sur la géométrie du projet</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1717"/>
        <source>Lock the image framing selection rectangle to the same geometry as the project. If you place the image in full screen, the reframed part will correspond to the whole screen.</source>
        <translation>Fait en sorte à ce que le rectangle de sélection du cadrage de l’image ait la même géométrie que le projet, comme cela, si vous placez l’image en plein écran la partie recadrée correspondra à tout l’écran.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1718"/>
        <source>Lock on the image geometry</source>
        <translation>Verrouiller sur la géométrie de l’image</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1719"/>
        <source>Lock the image framing selection rectangle to the same geometry as the image</source>
        <translation>Fait en sorte à ce que le rectangle de sélection du cadrage de l’image ait la forme de l’image</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1720"/>
        <source>No constraint</source>
        <translation>Pas de contrainte</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1721"/>
        <source>No constraint is applied to the image framing selection rectangle.</source>
        <translation>Aucune contrainte ne s’applique au rectangle de sélection du cadrage de l’image. Il est définit librement.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1722"/>
        <source>Lock on this geometry</source>
        <translation>Verrouiller sur cette géométrie</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1723"/>
        <source>Lock image framing selection rectangle to the actual geometry. This only has meaning when a shape has been defined in &quot;no constraint&quot; mode.</source>
        <translation>Permet de Verrouiller le rectangle de sélection du cadrage de l’image sur la forme qu’il a actuellement. Cela n’a de sens qu’après avoir définit une forme avec le mode « Pas de contrainte ».</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1724"/>
        <source>According to the image format, various choices will be proposed to you. For example: </source>
        <translation>En fonction du format de l’image, différents choix vous seront proposés. Par exemple :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1727"/>
        <source>The horizontal position from the left (X). This position is expressed as a percentage (%) of the width of the image.</source>
        <translation>La position horizontal à partir de la gauche (X). Cette position est exprimée en pourcentage (%) de la largeur total de l’image.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1728"/>
        <source>Example: if X=25% then the 1st quarter to the left of the image is eliminated.</source>
        <oldsource>Example: if X=25 % then the 1st quarter to the left of the image is eliminated.</oldsource>
        <translation>Exemple : Si X=25% alors le 1er quart à gauche de l’image est supprimé.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1729"/>
        <source>The vertical position from the top of the image ( Y ). This position is expressed as a percentage (%) of the height of the image.</source>
        <translation>La position vertical à partir du haut de l’image (Y). Cette position est exprimée en pourcentage (%) de la hauteur total de l’image.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1730"/>
        <source>Example: if Y=25% the 1st quarter at the top of the image is eliminated.</source>
        <oldsource>Example: if Y=25 % the 1st quarter at the top of the image is eliminated.</oldsource>
        <translation>Exemple : Si Y=25% alors le 1er quart en haut de l’image est supprimé.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1731"/>
        <source>The width. This value is expressed as a percentage (%) of the original width of the image.</source>
        <translation>La largeur. Cette valeur est exprimée en pourcentage (%) de la largeur total de l’image.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1732"/>
        <source>Example: if Width=33%, the re-framed image will represent 1/3 of the original.</source>
        <oldsource>Example: if Width=33 %, the re-framed image will represent 1/3 of the original.</oldsource>
        <translation>Exemple : Si Largeur=33%, alors l’image recadrée représentera 1/3 de l’image total.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1733"/>
        <source>The height. This value is expressed as a percentage (%) of the original height of the image.</source>
        <translation>La hauteur. Cette valeur est exprimée en pourcentage (%) de la hauteur total de l’image.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1734"/>
        <source>Example: if Height=33%, the re-framed image will represent 1/3 of the original.</source>
        <oldsource>Example: if Height=33 %, the re-framed image will represent 1/3 of the original.</oldsource>
        <translation>Exemple : Si Hauteur=33%, alors l’image recadrée représentera 1/3 de l’image total.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1735"/>
        <location filename="fake/fake.cpp" line="1754"/>
        <location filename="fake/fake.cpp" line="1777"/>
        <source>Remarks:</source>
        <translation>A noter :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1736"/>
        <source>You can use the + and - buttons in each input field to change the settings, or directly enter values for the four parameters.</source>
        <oldsource>You can use the + and - buttons in each input field to change the settings, or directly enter values for the five parameters.</oldsource>
        <translation>Vous pouvez utiliser les bouton + et – de chaque zone de saisie pour effectuer les réglages, ou bien saisir directement les valeurs pour les quattre paramètres. </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1708"/>
        <source>With the mouse</source>
        <translation>A la souris</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1709"/>
        <source>Click one of the handles and, with the mouse button down, drag the mouse to modify the size (to increase or reduce the part of the image to be kept). </source>
        <translation>Cliquer sur l’une des poignées de l’image et, tout en maintenant le bouton de la souris enfoncé, déplacer la souris, permet de modifier la taille (augmenter ou réduire la partie de l’image qui sera conservée).</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1710"/>
        <source>Click the image and, with the mouse button down, drag the mouse to modify the part of the image which will be kept.</source>
        <translation>Cliquer sur la zone d’image conservée et, tout en maintenant le bouton de la souris enfoncé, déplacer la souris, permet de modifier la partie de l’image qui sera conservée.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1711"/>
        <source>With the keyboard</source>
        <translation>Au clavier</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1712"/>
        <source>Use the arrows to move the part of the image which will be kept. </source>
        <translation>Utiliser les flèches de direction pour déplacer la partie de l’image qui sera conservée.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1713"/>
        <source>Use SHIFT+arrows to move the upper left corner handle or CTRL+arraows to move the lower right corner handle, to change the size of the part of the image which will be kept.</source>
        <translation>Utiliser SHIFT+les flèches de direction pour déplacer la poignée du coin supérieur gauche, ce qui permet de changer la taille de la partie de l’image qui sera conservée.
Utiliser CTRL+les flèches de direction pour déplacer la poignée du coin inférieur droit, ce qui permet de changer la taille de la partie de l’image qui sera conservée.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1737"/>
        <source>When the image does not correspond to the geometry of the video to be produced, transparent zones appear. For example: an 4:3 image used in a 16:9 project will be shown by default with a transparent zone on each side.</source>
        <translation>Lorsque l’image ne correspond pas à la géométrie de la vidéo à produire, des zones transparentes apparaissent. (Par exemple : Une image 4/3 utilisée dans un projet en 16/9 sera par défaut affichée avec une zone transparent de chaque coté).</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1743"/>
        <source>Turn the image to the left (to the nearest multiple of 90°).</source>
        <oldsource>Turn the image to the left (to the nearest multiple of 90Â°).</oldsource>
        <translation>Tourne l&apos;image vers la gauche (vers le prochain multiple de 90°).</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1744"/>
        <source>Turn the image to the right (to the nearest multiple of 90°).</source>
        <oldsource>Turn the image to the right (to the nearest multiple of 90Â°).</oldsource>
        <translation>Tourne l&apos;image vers la droite (vers le prochain multiple de 90°).</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1746"/>
        <source>Allows you to increase or decrease the luminosity of the image</source>
        <translation>Permet d’éclaircir ou d’assombrir l’image aux travers de la valeur de luminosité</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1747"/>
        <source>Allows you to increase or decrease the contrast of the image</source>
        <translation>Permet d’éclaircir ou d’assombrir l’image aux travers de la valeur de contraste</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1748"/>
        <source>Allows you to to increase or decrease the gamma value of the image</source>
        <translation>Permet d’éclaircir ou d’assombrir l’image aux travers de la valeur de gamma</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1751"/>
        <source>Allows you to modify the colorization of an image by changing the primary color red. Example : Reducing the red component makes the image more yellow - increasing it makes make the image more red</source>
        <translation>Permet de modifier la colorisation d’une image en changeant la couleur primaire rouge. Exemple : Réduire la composante rouge fait jaunir l’image - L’augmenter fait bleuir l’image</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1752"/>
        <source>Allows you to modify the colorization of an image by changing the primary color green. Example : Reducing the green component makes the image more red - increasing it makes the image more green</source>
        <translation>Permet de modifier la colorisation d’une image en changeant la couleur primaire verte. Exemple : Réduire la composante verte fait rougir l’image - L’augmenter fait verdir l’image</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1753"/>
        <source>Allows you to modify the colorization of an image by changing the primary color blue. Example : Reducing the green component makes the image more red - increasing it makes the image more blue</source>
        <translation>Permet de modifier la colorisation d’une image en changeant la couleur primaire bleu. Exemple : Réduire la composante verte fait rougir l’image - L’augmenter fait bleuir l’image</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1756"/>
        <source> This button allows the value to be reset to zero for all correction settings.</source>
        <translation> Ce bouton permet de remettre la zone à zéro pour tous les réglages de correction d’images.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1740"/>
        <source>Defined speed curve for image animations.</source>
        <oldsource> Apply a filter to the photo or video images. </oldsource>
        <translation>Définie la courbe de vitesse à appliquer aux animations d&apos;images.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1688"/>
        <source>Rotate image (change or restore the orientation portrait/landscape).</source>
        <translation>Faire pivoter l&apos;image (modifier ou restaurer l&apos;orientation portrait/paysage).</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1689"/>
        <source>Correct image (change the color and/or exposure parameters) but also applying graphical filters.</source>
        <translation>Correction d&apos;image (modifier la couleur et/ou les paramètres d&apos;exposition), mais également l&apos;application de filtres graphiques.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1690"/>
        <source>Define the beginning and end of a video sequence.</source>
        <translation>Définir le début et la fin d&apos;une séquence vidéo.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1691"/>
        <source>Define a Google Maps map.</source>
        <translation>Définir une carte Google Maps.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1692"/>
        <source>this dialog box is organized in tab that are available depending on the type of the object to edit.</source>
        <translation>cette boîte de dialogue est organisé en onglets qui sont disponibles en fonction du type de l&apos;objet à modifier.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1693"/>
        <source>&lt;a href=&quot;#IMAGETAG&quot;&gt;The image correct and reframe tag&lt;/a&gt; is available with all object types</source>
        <translation>&lt;a href=&quot;#IMAGETAG&quot;&gt;L&apos;onglet correction et recadrage d&apos;image&lt;/a&gt; est disponible avec tous les types d&apos;objet</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1694"/>
        <source>&lt;a href=&quot;#VIDEOTAG&quot;&gt;The video tag&lt;/a&gt; is available only with video object</source>
        <translation>&lt;a href=&quot;#VIDEOTAG&quot;&gt;L&apos;onglet video&lt;/a&gt; n&apos;est disponible que pour les objets vidéos</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1695"/>
        <source>&lt;a href=&quot;#GMAPSMAPTAG&quot;&gt;The Google Maps map tag&lt;/a&gt; is available only with Google Maps map object</source>
        <oldsource>&lt;a href=&quot;#GMAPSMAPTAG&quot;&gt;The image correct and reframe tag&lt;/a&gt; is available only with Google Maps map object</oldsource>
        <translation>&lt;a href=&quot;#GMAPSMAPTAG&quot;&gt;L&apos;onblet carte Google Maps&lt;/a&gt; n&apos;est disponible qu&apos;avec les cartes Google Maps</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1698"/>
        <source>This tab is available for both images and video. It is divided into two parts:</source>
        <oldsource>This box is divided into two parts:</oldsource>
        <translation>Cet onglet est disponible aussi bien pour les images que pour les vidéos. Il est divisé en deux parties :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1699"/>
        <source>To the left: The interactive area</source>
        <translation>A gauche : La zone interactive</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1700"/>
        <source>To the right: The settings area</source>
        <translation>A droite : La zone de réglage</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1701"/>
        <source>At the bottom of the interactive zone, is an area for changing the image or video file:</source>
        <translation>Au bas de la zone interactive, il y a une zone pour modifier le fichier de l&apos;image ou de la vidéo :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1704"/>
        <source>At the bottom of the dialog box:</source>
        <translation>Au bas de la boîte de dialogue :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1705"/>
        <source> This button enables or disables the magnetic rulers: When rulers are enabled, the mouse will automatically snap to the edges of the photo, facilitating the framing. </source>
        <translation> Ce bouton permet d&apos;activer ou de désactiver les règles magnétiques: Lorsque les règles sont activées, la souris sera automatiquement attirée par ​​les bords de la photo, ce qui facilite le cadrage.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1706"/>
        <source>The interactive area</source>
        <translation>La zone interactive</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1707"/>
        <source>You can use the interactive zone to set the framing with the mouse or the keyboard:</source>
        <translation>Vous pouvez utiliser la zone interactive pour définir le cadrage à la souris ou au clavier:</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1714"/>
        <source>The settings area - Framing and form</source>
        <translation>La zone de réglage - Cadrage et forme</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1725"/>
        <source>Shape</source>
        <translation>Forme</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1726"/>
        <source>Select a shape for the current block.</source>
        <translation>Selectionner une forme pour le bloc.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1738"/>
        <source>The settings area - Annimation settings</source>
        <translation>La zone de réglage - Réglage des annimations</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1739"/>
        <source>Speed wave</source>
        <translation>Courbe de vitesse</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1741"/>
        <source>The settings area - Image rotation</source>
        <translation>La zone de réglage - Rotation d&apos;image</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1742"/>
        <source>The rotation angle for the z axis. This position is expressed in degrees. Example: if Rotation=90°, the image is turned by a quarter to the right.</source>
        <oldsource>The rotation angle for the z axis. This position is expressed in degrees. Example: if Rotation=90Â°, the image is turned by a quarter to the right.</oldsource>
        <translation>L&apos;angle de rotation pour l&apos;axe des z. Cet angle est exprimé en degré. Exemple: Si Rotation=90°, l&apos;image est tournée d&apos;un quart de tour vers la droite.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1745"/>
        <source>The settings area - Luminosity, contrast and gamma and Color enhancement</source>
        <translation>La zone de réglage - Luminosité, contraste, gamma and amélioration colorimétrique</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1749"/>
        <source>Allows you to activate the grayscale (black &amp; white) filter.</source>
        <translation>Permet d&apos;activer le filtre Niveaux de gris.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1750"/>
        <source>Allows you to activate the equalize (Histogram equalization) filter.</source>
        <translation>Permet d&apos;activer le filtre d&apos;Egalisation.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1755"/>
        <source>All the combinations are possible. For example: you can increase the red and reduce the green at the same time. The results depend on the initial strength of the primary color components of the source image.</source>
        <translation>Toutes les combinaisons sont possibles. Par exemple: vous pouvez augmenter le rouge et réduire le vert  en même temps. Les résultats dépendent de la valeur initiale des composantes de couleurs primaires de l&apos;image.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1757"/>
        <source>The settings area - Image enhancement</source>
        <translation>La zone de réglage - Amélioration d&apos;image</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1758"/>
        <location filename="fake/fake.cpp" line="1767"/>
        <location filename="fake/fake.cpp" line="1774"/>
        <source> Apply a filter to the photo or video images. The following filters are available: </source>
        <translation> Applique un filtre à la photo ou aux images de la vidéo. Les filtres suivants sont disponibles:</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1759"/>
        <source>Blur/Sharpen </source>
        <oldsource>Blur/Sharpen and radius : </oldsource>
        <translation>Flou/Netteté</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1760"/>
        <source>Type: Select the blur/sharpen algorythm</source>
        <translation>Type : Permet de sélectionner le type d&apos;algorithme à utiliser pour le filtre flou/nettete</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1761"/>
        <source>Increase the blur with a negative value, using radius.</source>
        <translation>Augmente le flou avec une valeur négative en s’appuyant sur le rayon.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1762"/>
        <source>Increase the sharpen with a positive value, using radius.</source>
        <translation>Augmente au contraire la netteté avec une valeur positive en s’appuyant sur le rayon.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1763"/>
        <source> This button allows you to reset the value to zero. (For some transformation settings.)</source>
        <translation> Ce bouton vous permet de remettre les valeurs à zéro. (Pour certaines transformations.)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1764"/>
        <source>Allows you to activate the despeckle (Noise reduction) filter.</source>
        <translation>Permet d&apos;activer le Dépoussierage (réduction de bruit).</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1765"/>
        <source>Allows you to activate the antialias (minimizing the distortion artifacts) filter.</source>
        <translation>Permet d&apos;activer le filtre d&apos;antialiasing (réduire les artefacts de distorsion).</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1766"/>
        <source>The settings area - Artistic effects</source>
        <translation>La zone de réglage - Effets artistiques</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1768"/>
        <source>Allows you to activate the negative filter..</source>
        <translation>Permet d&apos;activer le filtre Négative.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1769"/>
        <source>Allows you to activate the emboss filter.</source>
        <translation>Permet d&apos;activer le filtre Estampage.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1770"/>
        <source>Allows you to activate the edge filter.</source>
        <translation>Permet d&apos;activer le filtre Contours.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1771"/>
        <source>Allows you to activate the charcoal filter.</source>
        <translation>Permet d&apos;activer le filtre Fusain.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1772"/>
        <source>Allows you to activate the oilpaint filter.</source>
        <translation>Permet d&apos;activer le filtre Peinture à l&apos;huile.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1773"/>
        <source>The settings area - Image distortion</source>
        <translation>La zone de réglage - Distorsion d&apos;image</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1775"/>
        <source>Allows you to activate the swirl transformation. Image swirling is a non-linear image deformation that creates a whirlpool effect.</source>
        <translation>Permet d&apos;activer la transformation tourbillon. Il s&apos;agit d&apos;une déformation non linéaire de l&apos;image qui crée un effet de tourbillon.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1776"/>
        <source>Allows you to activate the implode transformation</source>
        <translation>Permet d&apos;activer la transformation Implosion</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1778"/>
        <source>A value of 0 disables the filter.</source>
        <translation>Une valeur à 0 désactive le filtre.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1779"/>
        <source>A negative or positive value active the filter in one direction or the other.</source>
        <translation>Une valeur négative ou positive active le filtre dans un sens ou dans l&apos;autre.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1780"/>
        <source> This button allows the value to be reset to zero.</source>
        <translation> Ce bouton permet de reseter la valeur en la remettant à 0.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1781"/>
        <source> The video tag</source>
        <translation> L&apos;onglet vidéo</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1782"/>
        <source>This tag is available only for video.</source>
        <translation>Cet onglet n&apos;est disponible que pour les vidéos.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1783"/>
        <source>The progress bar</source>
        <translation>La barre de progression</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1784"/>
        <source>Displays as follows: </source>
        <oldsource>Displays as follows:</oldsource>
        <translation>Affiche respectivement :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1785"/>
        <source>The wave form of the sound of the video is displayed under a white background.</source>
        <oldsource>The wave form of the sound of the video is dispayed under a white background.</oldsource>
        <translation>La courbe du son de la vidéo est affichée sur un fond blanc.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1788"/>
        <source> This button starts playback. Click again on this button to pause. </source>
        <translation> Ce bouton permet de lancer la lecture de la vidéo. Cliquer encore sur ce bouton pour passer la lecture en pause. </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1794"/>
        <source>The working range</source>
        <translation>La zone d’action</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1795"/>
        <source> Positions the cursor at the starting point</source>
        <translation> Positionne le curseur sur la position de départ</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1796"/>
        <source> Uses the current cursor position as starting point (carries out an edit)</source>
        <translation> Utilise la position actuelle du curseur comme position de départ (remplie la zone d’édition)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1797"/>
        <source> Positions the cursor at the end point</source>
        <translation> Positionne le curseur sur la position de fin</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1798"/>
        <source> Uses the current cursor position as end point (carries out an edit)</source>
        <translation> Utilise la position actuelle du curseur comme position de fin (remplie la zone d’édition)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1799"/>
        <source>The additional settings zone</source>
        <translation>La zone de réglage complémentaire</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1800"/>
        <source>&lt;B&gt;Volume&lt;/B&gt; allows you to define the &quot;Master Volume&quot; for the file</source>
        <translation>&lt;B&gt;Volume&lt;/B&gt; permet de définir le « Master Volume » pour le fichier</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1801"/>
        <source>&lt;B&gt;Deinterlace video&lt;/B&gt; allows you to activate the deinterlace filter</source>
        <translation>&lt;B&gt;Désentrelacer&lt;/B&gt; la vidéo permet d’activer le filtre de désentrelacement</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1789"/>
        <source>You can move with the mouse the </source>
        <translation>Vous pouvez déplacer à la souris la poignée </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1786"/>
        <source>The ruler representing the duration of the video is dispayed under a black background. Remark than the length of the ruler is increased in proportion to the duration of the video.</source>
        <translation>La règle représentant la durée de la vidéo est affichée sous un fond noir. Remarquez que la longueur de la règle est proportionnelle à la durée de la vidéo.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1787"/>
        <source>The blue part, on wave form and ruler, represents the part of the video which is selected (which will be used in the assembly).</source>
        <translation>La partie en bleu, sur la courbe de son et sur la règle, réprésente la partie de la vidéo qui est sélectionnée (celle qui sera utilisée dans le montage).</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1790"/>
        <source> handle, on the progress bar, to move the current position</source>
        <translation>, sur la barre de progression, pour déplacer la position courante</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1791"/>
        <source>You can move with the mouse the two </source>
        <translation>Vous pouvez déplacer à la souris les deux poignées </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1792"/>
        <source> and </source>
        <translation> et </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1793"/>
        <source> handles, on the progress bar, to move the Start and End positions</source>
        <translation>, sur la barre de progression, pour déplacer les positions de début et de fin</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1802"/>
        <source> The Google Maps Map tag</source>
        <translation> L&apos;onglet carte Google Maps</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1803"/>
        <source>This tag is available only for Google Maps map.</source>
        <translation>Cet onglet n&apos;est disponible qu&apos;avec les cartes Google Maps.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1804"/>
        <source>On the upper left part, you define the map properties</source>
        <translation>Dans la partie supérieure gauche, vous définissez les propriétés de la carte</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1805"/>
        <source>On the bottom left part, the map is displayed with markers</source>
        <translation>Dans la partie inférieure gauche, la carte est affichée avec ses marqueurs</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1806"/>
        <source>On the upper right part, the table of location is displayed</source>
        <translation>Dans la partie supérieure droite, la table des localisations est affichée</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1807"/>
        <source>On the bottom right part, you define the properties of the selected location</source>
        <translation>Dans la partie en bas à droite, vous définissez les propriétés de la localisation qui est actuellement sélectionnée</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1808"/>
        <source>The map properties</source>
        <translation>Les propriétés de la carte</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1809"/>
        <source>Map type</source>
        <translation>Type de carte</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1810"/>
        <source>Define the type of the map. You can select between the four Google Maps possibilities:</source>
        <translation>Définir le type de la carte. Vous pouvez choisir parmis les quatre possibilités offertes par Google Maps :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1811"/>
        <source>Roadmap</source>
        <translation>Carte routière</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1812"/>
        <source>Satellite</source>
        <translation>Image satellite</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1813"/>
        <source>Terrain</source>
        <translation>Carte géographique</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1814"/>
        <source>Hybrid</source>
        <translation>Hybride</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1815"/>
        <source>Map size</source>
        <translation>Taille de la carte</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1816"/>
        <source>Define the size of the map. This size represents the distance in width and height of the map.</source>
        <translation>Défini la taille de la carte. Cette taille représente les distances en largeur et hauteur de la carte.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1817"/>
        <source>Smaller the zoom is and huger the area represented by the map is.</source>
        <translation>Plus le zoom est petit, plus grande est la région représentée par la carte.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1818"/>
        <source>Higher the zoom is and smaller the area represented by the map is.</source>
        <translation>Plus le zoom est grand, plus petite est la région représentée par la carte.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1819"/>
        <source>Image size</source>
        <translation>Taille d&apos;image</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1820"/>
        <source>Define the size of the image generated for the map. ffDiaporama proposes to generate maps of several image sizes, so, to create a fluid zoom animation, you can use a large image.</source>
        <translation>Défini la taille de l&apos;image générée pour la carte. ffDiaporama propose plusieurs tailles d&apos;image pour générer les cartes pour vous permettre de créer des animations de zoom fluide.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1821"/>
        <source>The table of locations</source>
        <translation>La table des localisations</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1822"/>
        <source>Select a location from the &lt;a href=&quot;0123.html&quot;&gt;Add or modify a location&lt;/a&gt; dialog or using a favorite.</source>
        <translation>Sélectionner une localisation parmis les favoris ou ouvrir la boite de dialogue &lt;a href=&quot;0123.html&quot;&gt;Ajouter ou modifier une localisation&lt;/a&gt;.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1823"/>
        <source>Edit current location. Open the &lt;a href=&quot;0123.html&quot;&gt;Add or modify a location&lt;/a&gt; dialog.</source>
        <translation>Editer la location actuellement sélectionnée. Ouvre la boite de dialogue &lt;a href=&quot;0123.html&quot;&gt;Ajouter ou modifier une localisation&lt;/a&gt;.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1824"/>
        <source>Remove current location.</source>
        <translation>Supprimer la localisation actuellement sélectionnée.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1825"/>
        <source>The marker properties</source>
        <translation>Les propriétés de marqueur</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1826"/>
        <source>Properties for all shots</source>
        <translation>Propriétés pour tous les plans</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1827"/>
        <source>This settings group defines properties for all shots, so, the modifications made to the following properties will apply to all shots. To understand the differences between the properties which apply to all shots and those which apply only to the current shot, consult: &lt;a href=&quot;0010.html&quot;&gt;How ffDiaporama works&lt;/a&gt;.</source>
        <translation> Ce groupe de réglages concerne des propriétés pour tous les plans de la diapositive, ainsi, les modifications s&apos;appliqueront à tous les plans de la diapositive. Pour bien comprendre les différences entre les propriétés qui s’appliquent sur tous les plans et celles qui ne s’appliquent qu’au plan en cours, consultez : &lt;a href=&quot;0010.html&quot;&gt;Principes de fonctionnement de ffDiaporama&lt;/a&gt;.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1828"/>
        <source>GPS Position form</source>
        <translation>Forme du point de localisation GPS</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1829"/>
        <source>Define a form for the GPS position</source>
        <translation>Défini la forme du point de localisation GPS</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1830"/>
        <source>Marker form</source>
        <translation>Forme du marqueur</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1831"/>
        <source>Define a form for the marker</source>
        <translation>Défini la forme du marqueur</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1832"/>
        <source>Composition</source>
        <translation>Composition</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1833"/>
        <source>Defined what information will be displayed in the marker</source>
        <translation>Défini quelles informations seront affichées dans le marqueur</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1834"/>
        <source>Size</source>
        <translation>Taille</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1835"/>
        <source>Define the size of the marker and the GPS position</source>
        <translation>Défini la taille du marqueur et du point de localisation GPS</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1836"/>
        <source>Distance</source>
        <translation>Distance</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1837"/>
        <source>Defined where to display the marker (the distance between the marker and the GPS position)</source>
        <translation>Défini où afficher le marqueur (la distance entre le marqueur et le point de localisation GPS)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1838"/>
        <source>Properties for this shot</source>
        <translation>Propriétés pour ce plan</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1839"/>
        <source>This settings group defines properties for the current shot, so you can create animation of makers by defining different properties for each shots.</source>
        <translation>Ce groupe de réglages défini les propriétés pour le plan en cours, de sorte à ce que vous puissiez créer des animations en définissant des propriétés différentes pour chaque plans.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1840"/>
        <source>Text color</source>
        <translation>Couleur du texte</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1841"/>
        <source>Defines the color of the text</source>
        <translation>Défini la couleur du texte</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1842"/>
        <source>Background color</source>
        <translation>Couleur du fond</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1843"/>
        <source>Defines the color of the background of the marker, of the GPS position and of the part between the two</source>
        <translation>Défini la couleur du fond pour le marqueur, le point de localisation GPS et la partie entre les deux</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1844"/>
        <source>Line color</source>
        <translation>Couleur de ligne</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1845"/>
        <source>Defines the color of the border</source>
        <translation>Défini la couleur des bordures</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1846"/>
        <source>Visibility</source>
        <translation>Visibilité</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1847"/>
        <source>Defined if the marker is visible, half-visible (masked) or hidden</source>
        <translation>Défini si le marqueur est visible, partiellement visible (masqué) ou caché</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1848"/>
        <source>See also</source>
        <translation>Voir aussi</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1849"/>
        <source>Ken Burns effects</source>
        <translation>Les effets Ken Burns</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1850"/>
        <source>Filter: Histogram equalization</source>
        <translation>Filtre de type : Égalisation d’histogramme</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1851"/>
        <source>Filter: Noise reduction</source>
        <translation>Filtre de type : Réduction de bruit</translation>
    </message>
</context>
<context>
    <name>0111</name>
    <message>
        <location filename="fake/fake.cpp" line="1852"/>
        <source>File information</source>
        <translation>Information sur le fichier</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1853"/>
        <source>This dialog allows to obtain detailed information on a multimedia file.</source>
        <oldsource>This dialog allows to obtain detailed information on a multimedia file. </oldsource>
        <translation>La boite « Afficher des informations sur un fichier multimédia » permet d’obtenir des informations détaillées sur un fichier multimédia.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1854"/>
        <source>Information shown for the image files</source>
        <translation>Informations affichées pour les images</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1855"/>
        <source>Information on file</source>
        <translation>Informations sur le fichier</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1856"/>
        <location filename="fake/fake.cpp" line="1871"/>
        <source>File name</source>
        <translation>Nom de fichier</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1857"/>
        <location filename="fake/fake.cpp" line="1872"/>
        <source>The name of the file</source>
        <translation>Le nom du fichier</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1858"/>
        <location filename="fake/fake.cpp" line="1873"/>
        <source>File type</source>
        <translation>Type de fichier</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1859"/>
        <location filename="fake/fake.cpp" line="1874"/>
        <source>Image</source>
        <translation>Image</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1860"/>
        <location filename="fake/fake.cpp" line="1875"/>
        <source>File size</source>
        <translation>Taille du fichier</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1861"/>
        <location filename="fake/fake.cpp" line="1876"/>
        <source>The size of the file on the disk (Mb)</source>
        <translation>La taille du fichier sur le disque (en Mo)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1862"/>
        <location filename="fake/fake.cpp" line="1877"/>
        <source>File created</source>
        <translation>Date de création</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1863"/>
        <location filename="fake/fake.cpp" line="1878"/>
        <source>The date and the hour of creation of the file on the disk (when you transferred it since the camera)</source>
        <translation>La date et l’heure de création du fichier sur le disque (quand vous l’avez transféré depuis l’appareil photo)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1864"/>
        <location filename="fake/fake.cpp" line="1879"/>
        <source>File modify</source>
        <translation>Date de modification</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1865"/>
        <location filename="fake/fake.cpp" line="1880"/>
        <source>The date and the hour of the last modification of the file (when the photo was taken or when you modified it with an image editor)</source>
        <translation>La date et l’heure de la dernière modification du fichier (quand la photo a été prise ou quand vous l’avez modifié avec un éditeur d’image)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1866"/>
        <source>Additional information</source>
        <translation>Autres informations</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1867"/>
        <source> Show the EXIF information supplied by the camera. </source>
        <translation>Affiche les informations EXIF fournies par l’appareil photo.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1868"/>
        <source>This zone can contain several hundreds of lines according to what the camera supplies. </source>
        <translation>Ce tableau peut contenir plusieurs dizaines voir centaines de ligne en fonction de ce que l’appareil photo fournit.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1869"/>
        <source>Information shown for the audio and video files</source>
        <translation>Informations affichées pour les fichiers audio et vidéo</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1870"/>
        <source>Information on file (audio and video files)</source>
        <translation>Informations sur le fichier (fichiers audio et video)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1881"/>
        <source>Audio track information (audio and video files)</source>
        <translation>Information sur les pistes audio (fichiers audio et video)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1882"/>
        <source> This zone contains a table listing every audio track present in the file. </source>
        <translation> Cette zone contient un tableau listant chaque piste audio présente dans le fichier.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1883"/>
        <location filename="fake/fake.cpp" line="1899"/>
        <source>For every track, the following information is shown: </source>
        <translation>Pour chaque piste, les informations suivantes sont affichées :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1884"/>
        <location filename="fake/fake.cpp" line="1900"/>
        <source>Track number</source>
        <translation>Le numéro de la piste</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1885"/>
        <source>Language</source>
        <translation>Langue</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1886"/>
        <source>The language in which is the audio track (generally cameras and camcorders indicate &lt;B&gt;und&lt;/B&gt; for undefine)</source>
        <translation>La langue dans laquelle est la piste audio (en général les appareils photos et les caméscopes indique &lt;B&gt;und&lt;/B&gt; pour indéterminé)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1887"/>
        <location filename="fake/fake.cpp" line="1907"/>
        <source>Codec</source>
        <translation>Codec</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1888"/>
        <source>The audio codec used for compressed the sound</source>
        <translation>Le codec audio  utilisé pour compresser le son</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1889"/>
        <source>Channels</source>
        <translation>Channels</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1890"/>
        <source>The number of audio channels (1=mono, 2=stereo, etc.)</source>
        <translation>Le nombre de canaux audio (1=mono, 2=stéréo, etc…)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1891"/>
        <location filename="fake/fake.cpp" line="1911"/>
        <source>Bitrate</source>
        <translation>Bitrate</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1892"/>
        <source>The audio compression ratio (when available)</source>
        <translation>Le taux de compression audio (quand il est disponible)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1893"/>
        <source>Frequency</source>
        <translation>Fréquence</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1894"/>
        <source>The frequency of sampling used by the audio track</source>
        <translation>La fréquence d’échantillonnage utilisée par la piste audio</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1895"/>
        <location filename="fake/fake.cpp" line="1917"/>
        <source>Title</source>
        <translation>Titre</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1896"/>
        <source>A title (when available)</source>
        <translation>Un titre (quand il est disponible)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1897"/>
        <source>Video track information (video files only)</source>
        <translation>Information sur les pistes vidéo (fichiers vidéo uniquement)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1898"/>
        <source> This zone contains a board listing every video track present in the file. </source>
        <translation> Cette zone contient un tableau listant chaque piste vidéo présente dans le fichier.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1901"/>
        <source>Image size</source>
        <translation>Taille d&apos;image</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1902"/>
        <source>The size of the images of the video track in number of points by number of line</source>
        <translation>La taille des images de la piste vidéo en nombre de points par nombre de ligne</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1903"/>
        <source>Image format</source>
        <translation>Format d&apos;image</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1904"/>
        <source>The size of the images of the video track in million of pixels</source>
        <translation>La taille des images de la piste vidéo en million de pixels</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1905"/>
        <source>Image geometry</source>
        <translation>Géométrie d&apos;image</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1906"/>
        <source>The image geometry of the video track (4:3, 16:9, etc.)</source>
        <translation>La géométrie des images de la piste vidéo (4/3, 16/9, etc…)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1908"/>
        <source>The video codec used for compressed the images</source>
        <translation>Le codec vidéo utilisé pour compresser les images</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1909"/>
        <source>Frame rate</source>
        <translation>Images/sec</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1910"/>
        <source>The number of images per second of the video</source>
        <translation>Le nombre d’images par seconde de la vidéo</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1912"/>
        <source>The video compression ratio (when available)</source>
        <translation>Le taux de compression vidéo (quand il est disponible)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1913"/>
        <source>Chapter information (video files only)</source>
        <translation>Informations sur les chapitres (fichiers vidéo uniquement)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1914"/>
        <source> This zone appears only for files containing chapters. it contains a table listing every chapter present in the file. </source>
        <translation> Cette zone n’apparaît que pour les fichiers contenant des chapitres. Elle contient un tableau listant chaque chapitre présents dans le fichier.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1915"/>
        <source>For every chapter, the following information is shown: </source>
        <translation>Pour chaque chapitre, les informations suivantes sont affichées :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1916"/>
        <source>Chapter number</source>
        <translation>Le n° du chapitre</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1918"/>
        <source>The title of the chapter</source>
        <translation>Le titre du chapitre</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1919"/>
        <source>Start</source>
        <translation>Début</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1920"/>
        <source>The temporal position of the beginning of the chapter</source>
        <translation>La position temporelle de début du chapitre</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1921"/>
        <source>End</source>
        <translation>Fin</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1922"/>
        <source>The temporal position of the end of the chapter</source>
        <translation>La position temporelle de fin du chapitre</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1923"/>
        <source>Duration</source>
        <translation>Durée</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1924"/>
        <source>The duration of the chapter</source>
        <translation>La durée du chapitre</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1925"/>
        <source>Additional information (video files only)</source>
        <translation>Autres informations (fichiers vidéo uniquement)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1926"/>
        <source> This zone contains diverse information on the video. </source>
        <translation> Cette zone contient des informations diverses sur la vidéo.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1927"/>
        <source>At least the information about the duration of the video will be shown, but a lot of other information can appear according to what is available in the file, such as: </source>
        <translation>A minima, l’information sur la durée de la vidéo sera affichée, mais bien d’autres informations peuvent apparaître en fonction de ce que est disponible dans le fichier, tels que :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1928"/>
        <source>creation_time</source>
        <translation>creation_time</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1929"/>
        <source>Date and time of creation of the video</source>
        <translation>Les date et heure de création de la vidéo</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1930"/>
        <source>title</source>
        <translation>Titre</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1931"/>
        <source>Title field of the TAG ID3v2 of the video</source>
        <translation>Le champ titre du TAG ID3v2 de la vidéo</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1932"/>
        <source>artist</source>
        <translation>Artiste</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1933"/>
        <source>Artist field of the TAG ID3v2 of the video</source>
        <translation>Le champ artiste du TAG ID3v2 de la vidéo</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1934"/>
        <source>album</source>
        <translation>album</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1935"/>
        <source>Album field of the TAG ID3v2 of the video</source>
        <translation>Le champ album du TAG ID3v2 de la vidéo</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1936"/>
        <source>date</source>
        <translation>date</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1937"/>
        <source>Date field of the TAG ID3v2 of the video</source>
        <translation>Le champ date du TAG ID3v2 de la vidéo</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1938"/>
        <source>comment</source>
        <translation>Commentaire</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1939"/>
        <source>Comment field of the TAG ID3v2 of the video</source>
        <translation>Le champ commentaire du TAG ID3v2 de la vidéo</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1940"/>
        <source>composer</source>
        <translation>Composeur</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1941"/>
        <source>The software with which the video was created</source>
        <translation>Le logiciel avec lequel la vidéo a été créée</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1942"/>
        <source>See also</source>
        <translation>Voir aussi</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1943"/>
        <source>Information on EXIF data</source>
        <translation>Explications sur les données EXIF</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1944"/>
        <source>TAG in ffmpeg</source>
        <translation>Les TAG dans ffmpeg</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1945"/>
        <source>Standard ID3v2</source>
        <translation>Norme ID3v2</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1946"/>
        <source>Standard MPEG-7 on the descriptors of multimedia contents</source>
        <translation>Norme MPEG-7 sur les descripteurs de contenus multimédia</translation>
    </message>
</context>
<context>
    <name>0112</name>
    <message>
        <location filename="fake/fake.cpp" line="1947"/>
        <source>Manage favorites</source>
        <oldsource>Manage favorite</oldsource>
        <translation>Gérer les favoris</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1948"/>
        <source>The Manage favorite dialog allows you to manage existing favorites</source>
        <oldsource>The Manage favorite dialog allows you to manage existing favorite</oldsource>
        <translation>La boîte de dialogue Gérer les favoris vous permet de gérer les favoris existant</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1949"/>
        <source>The existing favorites are listed in the high part of the dialog. Select one of them and click on one of the following buttons:</source>
        <oldsource>The existing favorite are listed in the high part of the dialog. Select one of them and click on one of the following buttons:</oldsource>
        <translation>Les favoris existants sont répertoriés dans la partie haute de la boîte de dialogue. Sélectionnez l&apos;un d&apos;eux et cliquez sur l&apos;un des boutons suivants:</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1950"/>
        <source> Rename: Allows to rename the selected favorite.</source>
        <translation> Renommer: Permet de renommer le favori sélectionné.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1951"/>
        <source> Remove: Allows to remove the selected favorite.</source>
        <translation> Supprimer: Permet de supprimer le favori sélectionné.</translation>
    </message>
</context>
<context>
    <name>0113</name>
    <message>
        <location filename="fake/fake.cpp" line="1952"/>
        <source>Manage style</source>
        <translation>Gestion des styles</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1953"/>
        <source>The Manage style dialog allows several things:</source>
        <oldsource>The Manage style dialog allows several things: </oldsource>
        <translation>La boite de gestion des styles permet plusieurs choses :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1954"/>
        <source>Rename existing style,</source>
        <oldsource>Rename existing style</oldsource>
        <translation>Renommer des styles existant,</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1955"/>
        <source>Remove custom style,</source>
        <oldsource>Remove custom style</oldsource>
        <translation>Supprimer des styles personnalisés,</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1956"/>
        <source>Reset a standard style (that you modified) has its default values.</source>
        <translation>Réinitialiser un style standard (que vous avez modifié) a ses valeurs par défaut.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1957"/>
        <source>The existing styles are listed in the high part of the dialog. They appear with an icon which has various meanings:</source>
        <oldsource>The existing styles are listed in the high part of the dialog. They appear with an icon which has various meanings: </oldsource>
        <translation>Les styles existant sont listés dans la partie haute de la boite. Ils apparaissent avec une icône qui a différentes significations :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1958"/>
        <source>for a standard style</source>
        <oldsource> for a standard style</oldsource>
        <translation>représente un style standard</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1959"/>
        <source>for a standard style you modified or for a custom style</source>
        <oldsource> for a standard style you modified or for a custom style</oldsource>
        <translation>représente soit un style standard que vous avez modifié, soit un style personnalisé</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1960"/>
        <source>According to the type of the selected style, you can execute various actions:</source>
        <oldsource>According to the type of the selected style, you can execute various actions: </oldsource>
        <translation>En fonction du type de style sélectionné, vous pouvez exécuter différentes actions :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1961"/>
        <source>Standard style</source>
        <translation>Style standard</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1962"/>
        <location filename="fake/fake.cpp" line="1968"/>
        <source>Rename</source>
        <translation>Renommer</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1963"/>
        <source>Standard style you modified</source>
        <translation>Style standard modifié</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1964"/>
        <source>Rename, Reset to default</source>
        <translation>Renommer, Par défaut</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1965"/>
        <source>Custom style</source>
        <translation>Style personnalisé</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1966"/>
        <source>Rename, Remove</source>
        <translation>Renommer, supprimer</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1967"/>
        <source>The followed actions are available:</source>
        <oldsource>The followed actions are available: </oldsource>
        <translation>Les actions suivantes sont disponibles :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1969"/>
        <source>Allows to rename the selected style.</source>
        <translation>Permet de renommer le style sélectionné.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1970"/>
        <source>Reset to default</source>
        <translation>Par défaut</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1971"/>
        <source>Allows to delete the customizations of a standard style and thus to return it to the default values for this style. It concerns as well the name of the style as the associated settings.</source>
        <translation>Permet de supprimer les personnalisations d&apos;un style standard et donc de revenir aux valeurs par défaut pour ce style. Cela concerne aussi bien le nom du style que les réglages associés.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1972"/>
        <source>Remove</source>
        <translation>Supprimer</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1973"/>
        <source>Allows to remove the personalized style.</source>
        <translation>Permet de supprimer le style personnalisé.</translation>
    </message>
</context>
<context>
    <name>0114</name>
    <message>
        <location filename="fake/fake.cpp" line="1974"/>
        <source>Music properties</source>
        <translation>Propriétés de la musique</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1975"/>
        <source>The Music properties dialog allows you to specify the music track.</source>
        <oldsource>The Music properties dialog allows you to specify the music track. </oldsource>
        <translation>La boite « Propriétés de la musique » permet de régler la piste musicale .</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1986"/>
        <source>Settings for the music track (upper part of the dialog)</source>
        <translation>Réglages de la piste musical (partie haute de la boite)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1976"/>
        <source>Functional Principles</source>
        <translation>Principe de fonctionnement</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1977"/>
        <source> The main functional principle for music tracks is that as long as you do not change the settings, the previous settings apply. So, if: </source>
        <translation> Le principe général de fonctionnement de la piste musical est que tant que vous ne changez pas les réglages, les réglages précédents s’appliquent. Ainsi, si :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1978"/>
        <source>Slide 1 - Defines a play list</source>
        <oldsource>- Slide 3 - Contains no settings </oldsource>
        <translation>La diapositive 1 - Définie une liste de lecture</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1979"/>
        <source>Slide 2 - Contains no settings</source>
        <oldsource>- Slide 4 - Defines a play list </oldsource>
        <translation>La diapositive 2 - Ne contient aucun réglage de musique</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1980"/>
        <source>Slide 3 - Contains no settings</source>
        <oldsource>- Slide 5 - Contains no settings </oldsource>
        <translation>La diapositive 3 - Ne contient aucun réglage de musique</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1981"/>
        <source>Slide 4 - Defines a play list</source>
        <translation>La diapositive 4 - Définie une liste de lecture</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1982"/>
        <source>Slide 5 - Contains no settings</source>
        <translation>La diapositive 5 - Ne contient aucun réglage de musique</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1983"/>
        <source>Then:</source>
        <oldsource> Then: </oldsource>
        <translation> Alors :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1984"/>
        <source>Slide 2 and 3 continue to play the play list defined in slide 1</source>
        <translation>Les diapositive 2 et 3 continuent de jouer la liste de lecture définie dans la diapositive 1</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1988"/>
        <source>Normal</source>
        <translation>Normal</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1989"/>
        <source>No specific settings</source>
        <translation>Aucun réglage particulier</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1990"/>
        <source>Change sound level</source>
        <translation>Changer le niveau de volume</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1992"/>
        <source>Set to pause</source>
        <translation>Mettre en pause</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1995"/>
        <source>Start a new playlist</source>
        <translation>Commencer une nouvelle liste de lecture</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1996"/>
        <source>Allows you to create a new playlist. If a list defined in a previous slide, is still playing, it is stopped with a fade-out effect (progressive decline of the sound volume up to complete stop).</source>
        <translation>Permet de commencer une nouvelle liste de lecture. Si une liste définie dans une diapositive précédente, est en cours de lecture, la liste précédente est arrêté avec un effet de fade-out (baisse progressive du volume sonore jusqu’à arrêt complet).</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2014"/>
        <source>You can double click a music file from the playlist to edit it, the &lt;a href=&quot;0124.html&quot;&gt;Cut a sound file&lt;/a&gt; dialog appears.</source>
        <translation>Vous pouvez double cliquer sur un fichier musicale dans la liste de lecture pour l&apos;éditer, la boite &lt;a href=&quot;0124.html&quot;&gt;Couper un fichier son&lt;/a&gt; apparaît.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1994"/>
        <source>The playlist (bottom part of the dialog)</source>
        <translation>La liste de lecture (partie basse de la boite)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1987"/>
        <source>The following options are apply to the current music during the slide:</source>
        <translation>Les options suivantes sont appliquées à la musique durant la diapositive :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1991"/>
        <source>Specifies that the sound volume is reduced during this slide. (This option is particularly useful, for example, to reduce the sound of the music during the play of a video.)</source>
        <translation>Spécifie que le volume sonore est diminué au cours de cette diapositive. (Cette option est particulièrement utile, par exemple, pour réduire le niveau de la musique durant la lecture d&apos;une vidéo.)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1993"/>
        <source>Pauses the current play list.</source>
        <translation>Met en pause la liste de lecture actuelle.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1997"/>
        <source> This playlist section consists of two parts: </source>
        <translation> La liste de lecture est composée de deux parties :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1998"/>
        <source>The toolbar containing controls for the playlist</source>
        <translation>La barre d’outils contenant les contrôles de la liste de lecture</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1999"/>
        <source>The list of the music files composing the playlist</source>
        <translation>La liste des fichiers musicaux composant la liste de lecture</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2000"/>
        <source>The toolbar</source>
        <translation>La barre d’outils</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2001"/>
        <source>Adds a file to the playlist A file selection dialog appears, allowing you to select a file.</source>
        <translation>Permet d’ajouter un fichier musical à la liste de lecture. Une boite de sélection de fichier apparaît vous permettant de sélectionner un fichier.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2002"/>
        <source>Cut the currently selected file from the playlist. The &lt;a href=&quot;0124.html&quot;&gt;Cut a sound file&lt;/a&gt; dialog appears.</source>
        <translation>Coupe le fichier actuellement sélectionné dans la liste de lecture. La boite &lt;a href=&quot;0124.html&quot;&gt;Couper un fichier son&lt;/a&gt; apparaît.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2003"/>
        <source>Removes the currently selected file from the playlist.</source>
        <translation>Supprime le fichier actuellement sélectionné dans la liste de lecture. </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2004"/>
        <source>Changes the order in which the music files will be played. Moves the currently selected file one step up.</source>
        <translation>Permet de changer l’ordre dans lequel seront joués les fichiers musicaux. Déplace le fichier actuellement sélectionné dans la liste d’un cran vers le haut.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2005"/>
        <source>Changes the order in which the music files will be played. Moves the currently selected file one step down.</source>
        <translation>Permet de changer l’ordre dans lequel seront joués les fichiers musicaux. Déplace le fichier actuellement sélectionné dans la liste d’un cran vers le bas.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2006"/>
        <source>The playlist</source>
        <translation>La liste des fichiers musicaux</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2007"/>
        <source>The music files are listed in the order in which they will be played, from top to bottom.</source>
        <translation>Les fichiers musicaux sont listés dans l&apos;ordre dans lequel ils seront lus, de haut en bas.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2008"/>
        <source>The Volume column defines the &quot; Master volume &quot; for the file. This volume is independent of any reductions in the volume that you define in the upper part of the dialog.</source>
        <translation>La colonne Volume définit le &quot;niveau de volume maitre&quot; pour le fichier. Ce volume est indépendant de toute réduction de volume que vous définissez dans la partie supérieure de la boîte de dialogue.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2009"/>
        <source>The Credit column defines if the file should appear or not when using %STM% variable in a credit title. For more information on variables, see: &lt;a href=&quot;0013.html&quot;&gt;Dynamic variables&lt;/a&gt;</source>
        <translation>La colonne générique définit si le fichier doit apparaître ou non lorsque vous utilisez la variable %STM% dans un titre de générique. Pour plus d&apos;informations sur les variables, voir : &lt;a href=&quot;0013.html&quot;&gt;Variables dynamiques&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2010"/>
        <source>Remarks</source>
        <translation>Notes</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2011"/>
        <source>The fade in/out effects and the increase/decrease of volume take place during the entering slide transitions. Consequently: </source>
        <translation>Les effets de fade/in fade/out et les augmentations/réductions de volume ont lieux pendant les transitions entrantes des diapositives. Par conséquent :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2012"/>
        <source>They last for the same time as the entering transition.</source>
        <translation>Ils durent le temps des transitions entrantes.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2013"/>
        <source>If a slide has an entering transition set to &quot;No transition&quot;, the sound effect is not progressive but instantaneous.</source>
        <translation>Si une diapositive a une transition entrante réglée sur Aucun, l’effet sonore n’est pas progressif mais instantané.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="1985"/>
        <source>Slide 5 continues to play the play list define in slide 4</source>
        <oldsource>- Continue current playlist: Continues to play the play list defined by a previous slide </oldsource>
        <translation>La diapositive 5 continue de jouer la liste de lecture définie dans la diapositive 4</translation>
    </message>
</context>
<context>
    <name>0115</name>
    <message>
        <location filename="fake/fake.cpp" line="2015"/>
        <source>Render video</source>
        <translation>Générer le film</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2016"/>
        <source>This dialog allows you to render the project as a video file.</source>
        <oldsource>This dialog allows you to render the project as a video file. </oldsource>
        <translation>Cette boîte de dialogue vous permet de générer la vidéo du projet.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2018"/>
        <source>Description of the dialog box</source>
        <translation>Description de la boite de dialogue</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2020"/>
        <location filename="fake/fake.cpp" line="2045"/>
        <location filename="fake/fake.cpp" line="2070"/>
        <location filename="fake/fake.cpp" line="2109"/>
        <source>Destination file</source>
        <translation>Fichier destination</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2021"/>
        <location filename="fake/fake.cpp" line="2046"/>
        <location filename="fake/fake.cpp" line="2071"/>
        <location filename="fake/fake.cpp" line="2110"/>
        <source>Indicate here the name of the destination file. </source>
        <translation>Indiquer ici le nom du fichier de destination. </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2022"/>
        <location filename="fake/fake.cpp" line="2047"/>
        <location filename="fake/fake.cpp" line="2072"/>
        <location filename="fake/fake.cpp" line="2111"/>
        <source> Click on this button to select graphically a file and a directory.</source>
        <translation>Cliquer sur ce bouton permet de sélectionner graphiquement un fichier et un répertoire.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2027"/>
        <location filename="fake/fake.cpp" line="2048"/>
        <location filename="fake/fake.cpp" line="2073"/>
        <location filename="fake/fake.cpp" line="2112"/>
        <source>Rendering</source>
        <translation>Générer</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2028"/>
        <location filename="fake/fake.cpp" line="2049"/>
        <location filename="fake/fake.cpp" line="2074"/>
        <location filename="fake/fake.cpp" line="2113"/>
        <source>The rendering can be made on the whole project or only on a part.</source>
        <translation>La génération de la vidéo peut s’effectuer sur tout le projet ou seulement sur une partie. </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2029"/>
        <location filename="fake/fake.cpp" line="2050"/>
        <location filename="fake/fake.cpp" line="2075"/>
        <location filename="fake/fake.cpp" line="2114"/>
        <source>This choice is made: </source>
        <translation>Ce réglage s’effectue :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2030"/>
        <location filename="fake/fake.cpp" line="2051"/>
        <location filename="fake/fake.cpp" line="2076"/>
        <location filename="fake/fake.cpp" line="2115"/>
        <source>By checking the option &lt;B&gt;All slides&lt;/B&gt; to render the video of the whole project</source>
        <translation>Soit en cochant la case &lt;B&gt;toutes les diapositives&lt;/B&gt; pour générer la vidéo du projet entier</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2031"/>
        <location filename="fake/fake.cpp" line="2052"/>
        <location filename="fake/fake.cpp" line="2077"/>
        <location filename="fake/fake.cpp" line="2116"/>
        <source>Or by checking the option &lt;B&gt;From&lt;/B&gt; and then entering the numbers of the start and end slides to generate a video of only a part of the project.</source>
        <translation>Soit en cochant la case &lt;B&gt;depuis&lt;/B&gt; et en entrant les numéros des diapositives de début et de fin pour ne générer une vidéo que d’une partie du projet.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2032"/>
        <location filename="fake/fake.cpp" line="2055"/>
        <location filename="fake/fake.cpp" line="2088"/>
        <source>Sound (include sound in the video)</source>
        <translation>Son (Inclure le son dans la vidéo)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2033"/>
        <location filename="fake/fake.cpp" line="2056"/>
        <location filename="fake/fake.cpp" line="2089"/>
        <source>If this box is checked then the sound track will be included in the video</source>
        <translation>Si cette case est cochée, la piste audio sera intégrée dans la vidéo</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2034"/>
        <location filename="fake/fake.cpp" line="2057"/>
        <location filename="fake/fake.cpp" line="2096"/>
        <location filename="fake/fake.cpp" line="2123"/>
        <source>Language</source>
        <translation>Langue</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2035"/>
        <location filename="fake/fake.cpp" line="2058"/>
        <location filename="fake/fake.cpp" line="2097"/>
        <location filename="fake/fake.cpp" line="2124"/>
        <source>Defines the value of the Language field. </source>
        <translation>Définie la valeur pour le champ Langage.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2036"/>
        <location filename="fake/fake.cpp" line="2059"/>
        <location filename="fake/fake.cpp" line="2098"/>
        <location filename="fake/fake.cpp" line="2125"/>
        <source>This value is used by players to indicate in which language is the audio track. This value is on 3 characters and follows this recommendation: </source>
        <oldsource>This value is used by players to indicate in which language is the audio track. This value is on 3 characters and follows the recommendation. See:</oldsource>
        <translation>Cette valeur est utilisé par les lecteurs vidéos pour indiquer dans quelle langue est la piste audio. Cette valeur est sur 3 caractères et suit la recommandation :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2037"/>
        <location filename="fake/fake.cpp" line="2060"/>
        <location filename="fake/fake.cpp" line="2099"/>
        <location filename="fake/fake.cpp" line="2126"/>
        <source>ISO 639</source>
        <oldsource> ISO 639</oldsource>
        <translation>ISO 639</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2130"/>
        <source>Remarks:</source>
        <translation>Notes :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2131"/>
        <source> &lt;U&gt;Rendering duration:&lt;/U&gt;</source>
        <translation> &lt;U&gt;Durée des générations :&lt;/U&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2138"/>
        <source> &lt;U&gt;Variable bitrate:&lt;/U&gt;</source>
        <translation> &lt;U&gt;Débit variable :&lt;/U&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2139"/>
        <source> If variable bitrate is activated, the video compression bitrate could vary from -50% to +125% </source>
        <translation> Si le débit variable est activé, le débit de compression vidéo variera de -50% à +125%</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2140"/>
        <source>If the project contains mostly pictures, this option can significantly reduce the size of the video file (up to 80%)</source>
        <translation>Si le projet contient principalement des photos, cette option permet de réduire considérablement la taille du fichier vidéo (jusqu&apos;à 80%)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2141"/>
        <source>By cons, if the project contains mostly videos this option will increase the size of the video file</source>
        <translation>Par contre, si le projet contient principalement des vidéos cette option peut augmenter la taille du fichier vidéo</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2142"/>
        <source> By default, variable bitrate is activated when duration of videos are less than half of the total duration of the projet. </source>
        <translation> Par défaut, le débit variable n&apos;est activé que quand la durée des vidéos est inférieure à la moitié de la durée totale du projet. </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2145"/>
        <source>Note: the project properties are saved into the video as TAG (METADATA) which are used by a lot of indexing programs or by </source>
        <translation>Remarque: les propriétés du projet sont enregistrées dans la vidéo sous forme de TAG (métadonnées) qui sont utilisés par un grand nombre de programmes d&apos;indexation ou par les </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2146"/>
        <source>Media Center Systems</source>
        <translation>Systèmes Media Center</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2017"/>
        <source>This dialog has different appearances depending on whether you clicked the Device type, Lossless, Advanced or Soundtrack button. </source>
        <translation>Cette boîte de dialogue a une apparencee différente, selon que vous avez cliqué sur une génération en mode &quot;Modèle d&apos;équipement&quot;, en mode &quot;Lossless&quot;, en mode avancée ou sur l&apos;export de piste son.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2019"/>
        <source>In device mode</source>
        <translation>En mode équipement</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2023"/>
        <source>Device type</source>
        <translation>Type d’équipement</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2024"/>
        <source>Allows you to select a device type.</source>
        <translation>Permet de sélectionner un type d’équipement.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2025"/>
        <source>Model</source>
        <translation>Modèle</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2026"/>
        <source>Allows you to select a device model.</source>
        <translation>Permet de sélectionner un modèle d’équipement.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2038"/>
        <location filename="fake/fake.cpp" line="2061"/>
        <location filename="fake/fake.cpp" line="2100"/>
        <source>Join thumbnail to rendered file</source>
        <translation>Joindre une vignette aux vidéos générées</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2039"/>
        <location filename="fake/fake.cpp" line="2062"/>
        <location filename="fake/fake.cpp" line="2101"/>
        <source>If this box is checked then a thumbnail file will be created with video. </source>
        <translation>Si cette case est cochée, une vignette sera créé avec la vidéo.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2040"/>
        <location filename="fake/fake.cpp" line="2043"/>
        <location filename="fake/fake.cpp" line="2063"/>
        <location filename="fake/fake.cpp" line="2066"/>
        <location filename="fake/fake.cpp" line="2102"/>
        <location filename="fake/fake.cpp" line="2105"/>
        <source>For more information on joined files, see &lt;a href=&quot;003A.html&quot;&gt;File attachments&lt;/a&gt;</source>
        <oldsource>For more information on joined file, see: &lt;a href=&quot;003A.html&quot;&gt;File attachments&lt;/a&gt;</oldsource>
        <translation>Pour plus d&apos;information sur les fichiers joints, consulter &lt;a href=&quot;003A.html&quot;&gt;Fichiers joints&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2041"/>
        <location filename="fake/fake.cpp" line="2064"/>
        <location filename="fake/fake.cpp" line="2103"/>
        <source>Join XBMC .nfo file to rendered file</source>
        <translation>Joindre des fichiers .nfo pour XBMC aux vidéos générées</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2042"/>
        <location filename="fake/fake.cpp" line="2065"/>
        <location filename="fake/fake.cpp" line="2104"/>
        <source>If this box is checked then a &lt;a href=&quot;0044.html&quot;&gt;XBMC .nfo&lt;/a&gt; file will be created with video. </source>
        <translation>Si cette case est cochée, un fichier .nfo pour XBMC sera généré en même temps que la vidéo.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2044"/>
        <source>In lossless mode</source>
        <translation>En mode lossless</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2053"/>
        <location filename="fake/fake.cpp" line="2080"/>
        <source>Image format</source>
        <translation>Format d&apos;image</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2054"/>
        <location filename="fake/fake.cpp" line="2081"/>
        <source>Select the image format to be used to render the video from the displayed list.</source>
        <translation>Sélectionne le format d’image vidéo à utiliser parmi la liste proposée.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2067"/>
        <source>In advanced mode</source>
        <translation>En mode avancé</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2068"/>
        <location filename="fake/fake.cpp" line="2107"/>
        <source>File format</source>
        <translation>Format de fichier</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2069"/>
        <source>Select the type of file to be used to render the video from the displayed list.</source>
        <translation>Sélectionne le type de fichier à utiliser pour la génération de la vidéo, parmi la liste proposée.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2078"/>
        <source>Video Standard</source>
        <translation>Standard vidéo</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2079"/>
        <source>Select the video standard to be used: PAL or NTSC.</source>
        <translation>Sélectionne le standard vidéo à utiliser, PAL ou NTSC.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2082"/>
        <source>Video codec</source>
        <translation>Codec vidéo</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2083"/>
        <source>Select the video codec to be used to render the video from the displayed list.</source>
        <translation>Sélectionne le codec vidéo à utiliser parmi la liste proposée.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2084"/>
        <location filename="fake/fake.cpp" line="2092"/>
        <location filename="fake/fake.cpp" line="2119"/>
        <source>Bitrate</source>
        <oldsource>Bit rate</oldsource>
        <translation>Bitrate</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2085"/>
        <source>Select the video compression ratio from the displayed list</source>
        <translation>Sélectionne le taux de compression vidéo à utiliser parmi la liste proposée</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2086"/>
        <source>Variable bitrate</source>
        <translation>Débit variable</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2087"/>
        <source>If this box is checked, the bitrate is variable. (Note: This option is available only for h264 codec.)</source>
        <translation>Si cette case est cochée, le débit est variable. (Remarque: Cette option n&apos;est disponible que pour le codec h264.)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2090"/>
        <location filename="fake/fake.cpp" line="2117"/>
        <source>Audio codec</source>
        <translation>Codec audio</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2091"/>
        <location filename="fake/fake.cpp" line="2118"/>
        <source>Select the audio codec to be used to render the video from the displayed list.</source>
        <translation>Sélectionne le codec audio à utiliser parmi la liste proposée.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2093"/>
        <location filename="fake/fake.cpp" line="2120"/>
        <source>Select the audio compression ratio from the displayed list</source>
        <translation>Sélectionne le taux de compression audio à utiliser parmi la liste proposée</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2094"/>
        <location filename="fake/fake.cpp" line="2121"/>
        <source>Frequency</source>
        <translation>Fréquence</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2095"/>
        <location filename="fake/fake.cpp" line="2122"/>
        <source>Select the frequency to use for audio during the rendering.</source>
        <oldsource>SSelect the frequency to use for audio during the rendering.</oldsource>
        <translation>Sélectionner la fréquence audio à utiliser pour la génération.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2106"/>
        <source>In export soundtrack mode</source>
        <translation>En mode Exporter la piste son</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2108"/>
        <source>Select the type of file to be used to render the soundtrack from the displayed list.</source>
        <translation>Sélectionne le type de fichier à utiliser pour la génération de la piste son, parmi la liste proposée.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2127"/>
        <source>Render the movie</source>
        <translation>Génération de la vidéo</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2128"/>
        <source> Once you have selected the device or set the advanced parameters, one click on the OK button starts the process of rendering the video. </source>
        <translation>Une fois l’équipement sélectionné ou les paramètres avancés sélectionnés, un clique sur le bouton OK démarre le processus de génération de la vidéo.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2129"/>
        <source>At any time during this process, one click on the &quot;Cancel&quot; button stops the process. </source>
        <translation>A tout moment durant le processus, un clique sur le bouton « Annuler » stop le processus.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2132"/>
        <source> Depending on the device model or the advanced parameters which you selected, the generation can take quite a long time. </source>
        <translation> Selon le modèle de l’équipement ou les paramètres avancés que vous avez sélectionnés, la génération peut prendre un temps assez long.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2133"/>
        <source>Generally, for a Full-HD 1080p video: </source>
        <translation>En général, pour une vidéo en Full-HD 1080p :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2134"/>
        <source>On a PC with 4 fast cores (Core i7 for example) : The process will take approximately 2 minutes for each minute of video to be rendered</source>
        <translation>Sur un PC équipé de 4 cœurs rapides (par exemple Core i7) : Le processus prendra environ 2 minutes pour chaque minute du film à générer</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2135"/>
        <source>On a PC with 2 cores (Core 2 duo for example) : The process will take approximately 5 minutes for each minute of video to be rendered</source>
        <translation>Sur un PC équipé de 2 cœurs (par exemple Core 2 duo) : Le processus prendra environ 5 minutes pour chaque minute du film à générer</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2136"/>
        <source> This amounts to 2 to 5 hours for a one-hour video. </source>
        <translation> Soit de 2 à 5 heures pour un film de 1 heure.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2137"/>
        <source>This duration will be much shorter for a video in VGA resolution. That is why we recommend you to carry out all tests and focusing trials at low resolution, and to render your videos in Full-HD only for the last step. </source>
        <translation>Cette durée sera beaucoup moins longue pour une vidéo en résolution VGA. C’est pourquoi nous vous conseillons de faire vos tests et mises au points dans des résolutions faibles et de ne générer vos vidéos Full-HD qu’en dernière étape.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2143"/>
        <source>At the dialog bottom</source>
        <translation>Au bas de la boite de dialogue</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2144"/>
        <source> The properties button allows you to open the &lt;a href=&quot;0108.html&quot;&gt;Project properties dialog&lt;/a&gt;. It allows you to adjust the properties before generating the video. </source>
        <oldsource> The properties button allows you to open project properties dialog. It allows you to adjust the properties before generating the video. </oldsource>
        <translation> Le bouton Propriétés vous permet d&apos;ouvrir la boite de dialogue  &lt;a href=&quot;0108.html&quot;&gt;Propriétés du projet&lt;/a&gt;. Il vous permet d&apos;ajuster les propriétés du projet avant de générer la vidéo.</translation>
    </message>
</context>
<context>
    <name>0116</name>
    <message>
        <location filename="fake/fake.cpp" line="2147"/>
        <source>Ruler properties</source>
        <translation>Propriétés des guides</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2148"/>
        <source>This dialog allows you to enable or disable rulers.</source>
        <oldsource>This dialog allows you to enable or disable rulers. </oldsource>
        <translation>Cette boite de dialogue vous permet d&apos;activer ou de désactiver les guides.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2149"/>
        <source>Edge of the screen</source>
        <translation>Bord de l’écran</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2150"/>
        <source>Corresponds to the edge of the screen.</source>
        <translation>Correspond au bord de l’écran.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2151"/>
        <source>TV margins</source>
        <translation>Marges TV</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2152"/>
        <source>In ffDiaporama, the TV margins are of type &quot;Title safe area&quot; and are defined on 90% in width and 90% in height, for all the project geometries.</source>
        <translation>Dans ffDiaporama, les marges TV sont de type « Title safe area » et sont définies sur 90% en largeur et 90% en hauteur, pour toutes les géométries de projet.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2153"/>
        <source>Centre of the screen</source>
        <translation>Centre de l’écran</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2154"/>
        <source>Corresponds to the center of the screen.</source>
        <translation>Correspond au centre de l’écran.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2155"/>
        <source>Unselected blocks</source>
        <translation>Objets non sélectionnés</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2156"/>
        <source>For all the objects which are not a part of the selection, create rulers for the top, bottom, left and right edges of blocks as well as for the centers of blocks.</source>
        <translation>Pour tous les objets qui ne font pas partie de la sélection, crée des guides pour les bords haut, bas, gauche et droite ainsi que pour les centres des blocs.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2157"/>
        <source>Remarks:</source>
        <translation>A noter :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2158"/>
        <source>Rulers can be activated or deactivated one by one.</source>
        <translation>Les guides peuvent être activés ou désactivés unitairement.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2159"/>
        <source>When a ruler is activated, the mouse is attracted towards this ruler. This is valid as well for the movements of blocks as for the resizing (movements of the handles).</source>
        <translation>Lorsqu’un guide est activé, la souris est attirée vers ce guide. Ceci est valable aussi bien pour les déplacements de blocs que pour les déplacements des poignées de redimensionnement.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2160"/>
        <source>TV margins rullers are not available for thumbnails editing.</source>
        <translation>Les guides de type « Marges TV » ne sont pas disponible lors de l&apos;édition des vignettes.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2161"/>
        <source>See also</source>
        <translation>Voir aussi</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2162"/>
        <source>Description of TV margins and overscan</source>
        <translation>Explications sur les marges TV et « l’overscan »</translation>
    </message>
</context>
<context>
    <name>0117</name>
    <message>
        <location filename="fake/fake.cpp" line="2163"/>
        <source>Edit thumbnail model</source>
        <translation>Modifier un modèle de vignette</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2164"/>
        <source>This dialog allows you to edit custom thumbnails and custom thumbnails models.</source>
        <translation>Cette boîte de dialogue vous permet de modifier les vignettes personnalisées et des modèles de vignettes personnalisées.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2165"/>
        <source>It&apos;s a simplified version of the &lt;a href=&quot;0119.html&quot;&gt;Slides properties dialog&lt;/a&gt; and as it, it includes numerous zones:</source>
        <translation>C&apos;est une version simplifiée de la boite de dialogue &lt;a href=&quot;0119.html&quot;&gt;Editer les propriétés de la diapositive&lt;/a&gt; et comme elle, elle inclus de nombreuses zones: </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2166"/>
        <source>On the top: The &lt;a href=&quot;#Toolbar&quot;&gt;Toolbar&lt;/a&gt; allows to launch the main thumbnail editing commands.</source>
        <translation>En haut : La &lt;a href=&quot;#Toolbar&quot;&gt;Barre d&apos;outils&lt;/a&gt; permet de lancer les principales commandes d&apos;édition de vignettes.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2167"/>
        <source>On the left: The &lt;a href=&quot;#InteractiveZone&quot;&gt;Interactive&lt;/a&gt; zone allows you to graphically modify the blocks.</source>
        <oldsource>On the left: The &lt;a href=&quot;#InteractiveZone&quot;&gt;Interactive&lt;/a&gt; zones.</oldsource>
        <translation>A gauche : La  &lt;a href=&quot;#InteractiveZone&quot;&gt;Zone Interactive&lt;/a&gt; vous permet de modifier graphiquement les blocs.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2168"/>
        <source>On the right: The &lt;a href=&quot;#BlockTable&quot;&gt;Blocks table&lt;/a&gt; and the &lt;a href=&quot;#BlockSettings&quot;&gt;Block settings&lt;/a&gt; zones.</source>
        <translation>A droite : La &lt;a href=&quot;#BlockTable&quot;&gt;table des blocs&lt;/a&gt; et la &lt;a href=&quot;#BlockSettings&quot;&gt;zone de réglage des blocs&lt;/a&gt;.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2169"/>
        <source>Toolbar</source>
        <translation>La barre d’outils</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2170"/>
        <source> The toolbar allows to launch the main thumbnail editing commands. </source>
        <translation> La barre d&apos;outils permet de lancer les principales commandes d&apos;édition de vignettes.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2171"/>
        <source>Add a new title block - Open a sub menu with the following options: </source>
        <translation>Ajouter un nouveau bloc texte - Ouvre un sous-menu avec les options suivantes:</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2172"/>
        <source>Add a simple title block</source>
        <translation>Ajouter un texte simple</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2173"/>
        <source>Add a title clip-art block</source>
        <translation>Ajouter un texte dans un clip-art</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2174"/>
        <source>Once you have selected one of the options, the &lt;a href=&quot;0120.html&quot;&gt;Edit Text dialog&lt;/a&gt; opens.</source>
        <translation>Dès que vous avez sélectionné l&apos;une des options, La boite de dialogue &lt;a href=&quot;0120.html&quot;&gt;Editer un texte&lt;/a&gt; s&apos;ouvre.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2175"/>
        <source>Add one or several new blocks of images or video. A &lt;a href=&quot;0109.html&quot;&gt;file selection dialog&lt;/a&gt; appears allowing you to select files. </source>
        <translation>Ajouter un ou plusieurs nouveaux blocs d&apos;images ou de vidéo. Une boite de dialogue de &lt;a href=&quot;0109.html&quot;&gt;Sélection de fichiers&lt;/a&gt; apparaît, vous permettant de sélectionner les fichiers.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2176"/>
        <source>Note: in case of multiple selection, files are added in the alphabetical order of the filenames or in the digital order of shots (according to the option selected in the &lt;a href=&quot;0101.html&quot;&gt;Application options dialog&lt;/a&gt;).</source>
        <translation>Note: En cas de sélection multiple, les fichiers sont ajoutés dans l&apos;ordre alphabétique des noms de fichiers ou dans l&apos;ordre numérique de photos (selon l&apos;option choisie dans la boite de dialogue &lt;a href=&quot;0101.html&quot;&gt;Options de l&apos;application&lt;/a&gt;).</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2177"/>
        <source>Edit blocks - Open a sub menu with the following options: </source>
        <translation>Editer les blocs - Ouvre un sous-menu avec les options suivantes :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2178"/>
        <source>Copy the current block to the ffDiaporama clipboard and remove it from the thumbnail.</source>
        <translation>Copier le bloc actif dans le presse papier et le supprime de la vignette.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2179"/>
        <source>Copy the current block to the ffDiaporama clipboard.</source>
        <translation>Copier le bloc actif dans le presse papier.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2180"/>
        <source>Paste block from the ffDiaporama clipboard and insert it to the end of the block table</source>
        <translation>Coller le ou les blocs actuellement présent dans le presse papier en dernier dans la table des blocs</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2181"/>
        <source>Remove the current block</source>
        <translation>Supprime le bloc actif</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2182"/>
        <source>Open the &lt;a href=&quot;0120.html&quot;&gt;Edit text block dialog&lt;/a&gt;.</source>
        <translation>Ouvrir la boite &lt;a href=&quot;0120.html&quot;&gt;Éditer le texte du bloc&lt;/a&gt;.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2183"/>
        <source>Open the &lt;a href=&quot;0110.html&quot;&gt;Image framing and correction dialog&lt;/a&gt;. This button is active only for objects containing images or videos.</source>
        <translation>Ouvrir la boite de dialogue &lt;a href=&quot;0110.html&quot;&gt;Recadrer et/ou corriger une image ou une vidéo&lt;/a&gt;. Cette fonction n’est disponible que pour les blocs image ou vidéo.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2184"/>
        <source>Arrange blocks - Open a sub menu with the following options: </source>
        <translation>Arranger les blocs - Ouvre un sous-menu avec les options suivantes :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2185"/>
        <source>Align to top</source>
        <translation>Aligner en haut</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2186"/>
        <source>Align to midle</source>
        <translation>Aligner au milieu</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2187"/>
        <source>Align to bottom</source>
        <translation>Aligner en bas</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2188"/>
        <source>Align to left</source>
        <translation>Aligner à gauche</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2189"/>
        <source>Align to center</source>
        <translation>Aligner au centre</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2190"/>
        <source>Align to right</source>
        <translation>Aligner à droite</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2191"/>
        <source>Distribute horizontally</source>
        <translation>Distribuer horizontalement</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2192"/>
        <source>Distribute vertically</source>
        <translation>Distribuer verticalement</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2193"/>
        <source>Change the order of blocks by moving the active block upward (towards the background)</source>
        <translation>Changer l’ordre des blocs en déplaçant le bloc actif vers le haut (vers l’arrière plan)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2194"/>
        <source>Change the order of blocks by moving the active block downward (towards the foreground)</source>
        <translation>Changer l’ordre des blocs en déplaçant le bloc actif vers le bas (vers le premier plan)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2195"/>
        <source>Display information on active block. (Remark: This function is available only for &quot;image&quot; or &quot;video&quot; blocks.)</source>
        <translation>Afficher des informations sur le bloc actif. (Note : Cette fonction n’est disponible que pour les blocs « image » ou « vidéo ».)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2196"/>
        <source>Allows you to open the &lt;a href=&quot;0116.html&quot;&gt;Ruler properties dialog&lt;/a&gt;</source>
        <translation>Permet d&apos;ouvrir la boite de dialogue &lt;a href=&quot;0116.html&quot;&gt;Propriétés des guides&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2197"/>
        <source> It is also possible to open contextual menus by: </source>
        <translation> Il est également possible d&apos;ouvrir des menus contextuels par:</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2198"/>
        <source>Right clicking on zones.</source>
        <translation>Un clic droit sur les ​​zones.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2199"/>
        <source>Right click on blocks table or on interactive zone when no block was selected.</source>
        <translation>Un clic droit sur ​​la table des blocs ou sur la zone interactive quand aucun bloc n&apos;est sélectionné.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2200"/>
        <source>Right click on one of the blocks of a multiple selection, on blocks table or on interactive zone.</source>
        <translation>Un clic droit sur ​​l&apos;un des blocs d&apos;une sélection multiple, sur la table des blocs ou sur la zone interactive.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2201"/>
        <source>Each of these contextual menus propose commands which depend on what you have clicked.</source>
        <translation>Chacun de ces menus contextuels proposent des commandes qui dépendent de votre sélection.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2202"/>
        <source>Interactive zone</source>
        <translation>La zone interactive</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2203"/>
        <source> The interactive zone allows you to move and interactively re-size blocks. </source>
        <translation> La zone interactive vous permet de déplacer et de redimensionner les blocs de manière interactive.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2204"/>
        <source>Selected blocks are shown with a frame. (It allows to differentiate them from other graphic elements of the thumbnail).</source>
        <translation>Les blocs sélectionnés sont affichés avec un cadre (cela permet de les différencier des autres éléments graphiques de la vignette).</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2205"/>
        <source>Control handles (small square) are shown on sides and on corners of the selection frame.</source>
        <translation>La sélection affiche en plus des poignées de contrôles (petit carré) apparaissant dans les coins et sur les cotés.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2206"/>
        <source>Rulers are displayed to facilitate the work with the mouse. See &lt;a href=&quot;0116.html&quot;&gt;Rulers settings&lt;/a&gt;</source>
        <translation>Des guides peuvent faciliter le travail à la souris. Voir &lt;a href=&quot;0116.html&quot;&gt;Réglage des guides&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2207"/>
        <source>Using the mouse:</source>
        <translation>A la souris :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2208"/>
        <location filename="fake/fake.cpp" line="2244"/>
        <source>To select a block: click the block</source>
        <translation>Pour sélectionner un bloc : Cliquer dessus</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2209"/>
        <location filename="fake/fake.cpp" line="2245"/>
        <source>To select multiple blocks: Select a first block by clicking on it and then, by clicking on the other blocks to be selected with pressing either the SHIFT or the CTRL key.</source>
        <translation>Pour sélectionner plusieurs blocs : Sélectionner un premier bloc en cliquant dessus puis cliquer sur les autres blocs à sélectionner en maintenant soit la touche SHIFT, soit la touche CTRL enfoncé.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2210"/>
        <source>To select a block under another block : Click the block to be selected by pushing both SHIFT and CTRL keys.</source>
        <translation>Pour sélectionner un bloc sous un autre bloc : Cliquer sur le bloc à sélectionner en maintenant enfoncé les deux touches SHIFT et CTRL.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2211"/>
        <location filename="fake/fake.cpp" line="2246"/>
        <source>To unselect a block in a multiple selection: Click the block with pressing either the SHIFT or the CTRL key.</source>
        <translation>Pour déselectionner un bloc dans une sélection multiple : Cliquer dessus en maintenant soit la touche SHIFT, soit la touche CTRL enfoncé.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2212"/>
        <source>To modify the size of the blocks of the selection: Click one of the handles of the selection and, while keeping the button of the mouse pressed, move the mouse.</source>
        <translation>Pour modifier la taille des blocs de la sélection : Cliquer sur l’une des poignées de la sélection et, tout en maintenant le bouton de la souris enfoncé, déplacer la souris.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2213"/>
        <source>To move the blocks of the selection: Click one of the blocks of the selection and, while keeping the button of the mouse pressed, move the mouse.</source>
        <translation>Pour déplacer les blocs de la sélection : Cliquer sur un des blocs de la sélection et, tout en maintenant le bouton de la souris enfoncé, déplacer la souris.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2214"/>
        <source>Using the keyboard:</source>
        <translation>Au clavier :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2215"/>
        <source>To move the blocks of the selection, use the arrow keys.</source>
        <translation>Utiliser les flèches de direction pour déplacer les blocs de la sélection.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2216"/>
        <source>To change the size of the blocks of the selection, use SHIFT+arrows to move the upper left corner handle or CTRL+arrows to move the lower right corner handle.</source>
        <translation>Utiliser SHIFT+les flèches de direction pour déplacer la poignée du coin supérieur gauche, ce qui permet de changer la taille des blocs.
Utiliser CTRL+les flèches de direction pour déplacer la poignée du coin inférieur droit, ce qui permet de changer la taille des blocs.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2217"/>
        <location filename="fake/fake.cpp" line="2240"/>
        <source>Remarks:</source>
        <translation>A noter :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2218"/>
        <source>A double click on a block opens the block editor associated with the block type (for a text block this will be the text editor, for an image block the reframing dialog, etc.)</source>
        <translation>Un double clic sur un bloc permet d’ouvrir l’éditeur de bloc associé au type de bloc (Pour un bloc texte : ouvre l’editeur de texte. Pour un bloc image : ouvre la boite de recadrage, etc…)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2219"/>
        <source>A right click on a block when the selection includes only a single block opens a contextual menu proposing the editing commands for a block.</source>
        <translation>Un clic droit sur un bloc quand la sélection n’inclus qu’un seul bloc : permet d’appeler le menu contextuel proposant les commandes d’édition de bloc.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2220"/>
        <source>A right click on a block when the selection includes multiple blocks opens a contextual menu proposing the editing commands for multiple blocks.</source>
        <translation>Un clic droit sur un bloc quand la sélection inclus plusieurs blocs : permet d’appeler le menu contextuel proposant les commandes d’édition multi-bloc.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2221"/>
        <source>Blocks table</source>
        <translation>La table des blocs</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2222"/>
        <source>The blocks table lists, from top to bottom, the present blocks in the thumbnail.</source>
        <translation>La table des blocs liste, de haut en bas, les blocs présents dans la vignette.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2223"/>
        <source>The order of the blocks is important! The first block (at the top of the list) is covered by the second block which is even covered by the following block and so on.</source>
        <translation>L’ordre des blocs est important ! Le premier bloc (en haut de la liste) est recouvert par le 2eme bloc qui lui même est recouvert par le bloc suivant et ainsi de suite.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2224"/>
        <source>Blocks are shown on 3 columns:</source>
        <translation>Les blocs sont affichés sur 3 colonnes :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2225"/>
        <source>The first column contains or: </source>
        <translation>La première colonne contient soit : </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2226"/>
        <source> If the block is a title.</source>
        <translation> si le bloc est de type titre.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2227"/>
        <source>A thumbnail if the block is an image or a video.</source>
        <translation>Une vignette de l’image ou de la vidéo, si le bloc est de type image ou vidéo.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2228"/>
        <source> If the image or the video have a transformation filter.</source>
        <translation> si l’image ou la vidéo a un filtre de transformation actif.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2229"/>
        <source>The second column contains icons giving the state of the blocks</source>
        <translation>La seconde colonne contient des icônes donnant l’état du bloc</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2230"/>
        <source>The third column indicates: </source>
        <translation>La troisième colonne indique : </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2231"/>
        <source>If the block is a title: the text of the block</source>
        <translation>S’il s’agit d’un bloc de type titre : le texte du bloc</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2232"/>
        <source>If the block is an image: </source>
        <translation>S’il s’agit d’un bloc de type image : </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2233"/>
        <location filename="fake/fake.cpp" line="2237"/>
        <source>The filename.</source>
        <translation>Le nom du fichier.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2234"/>
        <location filename="fake/fake.cpp" line="2238"/>
        <source>The width x the height of the image in pixel (the format of the image - the geometry of the image).</source>
        <translation>La largeur x la hauteur de l’image en pixel (le format de l’image – la géométrie de l’image).</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2235"/>
        <source>A summary of EXIF information on the image.</source>
        <translation>Un résumé des informations EXIF sur l’image.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2236"/>
        <source>If the block is a video: </source>
        <translation>S’il s’agit d’un bloc de type vidéo : </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2239"/>
        <source>The duration of the video.</source>
        <translation>La durée de la vidéo.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2241"/>
        <source>Double clicking on a block opens the block editor associated with the block type (for a text block this will be the text editor, for an image block the reframing dialog, etc.)</source>
        <translation>Un double clic sur un bloc permet d’ouvrir l’éditeur de bloc associé au type de bloc (Pour un bloc texte : ouvre l’editeur de texte. Pour un bloc image : ouvre la boite de recadrage, etc.)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2242"/>
        <source>Right clicking on a block when the selection includes only a single block opens a contextual menu proposing the editing commands for a block.</source>
        <translation>Un clic droit sur un bloc quand la sélection n’inclus qu’un seul bloc : permet d’appeler le menu contextuel proposant les commandes d’édition d’un bloc.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2243"/>
        <source>Right clicking on a block when the selection includes multiple blocks opens a contextual menu proposing the editing commands for multiple blocks.</source>
        <translation>Un clic droit sur un bloc quand la sélection inclus plusieurs blocs : permet d’appeler le menu contextuel proposant les commandes d’édition multi-bloc.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2247"/>
        <source>Blocks with locked properties are shown on a grey bottom.</source>
        <translation>Les blocs dont les propriétés sont verrouillés sont affichés sur un fond gris.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2248"/>
        <source>Selected blocks are shown on a red bottom if the focus is on the blocks table or on a blue bottom if the focus is on another element.</source>
        <translation>Les blocs sélectionnés sont affichés sur un fond rouge si le focus est sur la table des blocs et sur un fond bleu si le focus est sur un autre élément.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2249"/>
        <source>To change the blocks order, use Drag &amp; Drop or &lt;B&gt;Up&lt;/B&gt; and &lt;B&gt;Down&lt;/B&gt; functions of the contextual menu.</source>
        <translation>Pour changer l’ordre des blocs, utiliser soit le Drag &amp; Drop soit les fonctions B&gt;Haut&lt;/B&gt; et B&gt;Bas&lt;/B&gt; du menu contextuel.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2250"/>
        <source>It is possible to add files directly in the blocks table by using Drag and Drop with the file explorer.</source>
        <translation>Il est possible d’ajouter des fichiers directement dans la table des blocs par Drag &amp; Drop avec l’explorateur de fichier.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2251"/>
        <source>All blocks, whether title, image or video, possess a text element.</source>
        <translation>Tous les blocs, qu’ils soient de type titre, image ou vidéo possèdent un texte.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2252"/>
        <source>During the insertion of a new block (Add title, Add file or Paste), the block is inserted: </source>
        <translation>Lors de l’insertion d’un nouveau bloc (Ajouter titre, Ajouter fichier ou Coller), le bloc est inséré : </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2253"/>
        <source>Always in the last position in the list of blocks (in the foreground)</source>
        <translation>toujours en dernière position dans la liste des blocs (au premier plan)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2254"/>
        <source>Block settings zone</source>
        <translation>La zone de réglage des blocs</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2255"/>
        <source>Coordinates</source>
        <translation>Coordonnées</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2256"/>
        <source>&lt;B&gt;For image or video blocks: &lt;/B&gt;Allows you to select a reframing style for the image. It has the same effect as selecting a style in the dialog: &lt;a href=&quot;0110.html&quot;&gt;Correct, reframe or cut image or video&lt;/a&gt;.</source>
        <translation>&lt;B&gt;Pour les blocs image ou vidéo :&lt;/B&gt; Permet de sélectionner un style de recadrage pour l’image Cela a le même effet que de sélectionner un style dans la boite de dialogue &lt;a href=&quot;0110.html&quot;&gt;Recadrer et/ou corriger une image ou une vidéo&lt;/a&gt;.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2257"/>
        <source>&lt;B&gt;For text blocks: &lt;/B&gt;Allows you to select the geometrical constraints to be applied to the block. Three type of constraint are available:</source>
        <translation>&lt;B&gt;Pour les blocs textes :&lt;/B&gt; Permet de sélectionner la contrainte géométrique à appliquer au bloc. Trois types de contrainte sont disponibles :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2258"/>
        <source>No constraint is applied to the selection rectangle.</source>
        <translation>Pas de contrainte : Aucune contrainte ne s’applique au rectangle de sélection. Il est définit librement.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2259"/>
        <source>Lock selection rectangle to the actual geometry. It has no meaning until you have defined a shape in &quot;no constraint&quot; mode.</source>
        <translation>Verrouiller sur cette géométrie : Permet de verrouiller le rectangle de sélection sur la forme qu’il a actuellement. Cela n’a de sens qu’après avoir définit une forme avec le mode « Pas de contrainte ».</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2260"/>
        <source>Lock selection rectangle to the same geometry as the project, such that, if you place the image in full screen, the reframed part will correspond to the whole screen.</source>
        <translation>Verrouiller sur la géométrie du projet : Fait en sorte à ce que le rectangle de sélection ait la même géométrie que le projet, comme cela, si vous placez l’image en plein écran la partie recadrée correspondra à tout l’écran.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2261"/>
        <source>Allows you to select a pre-defined block size</source>
        <translation>Permet de sélectionner une taille de bloc pré-définie</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2262"/>
        <source>Represents the horizontal offset of the block from the left. This position is defined as a percentage (%) of the total width of the image or in pixels (for a 1080p screen) according to the unit defined in the configuration dialog.</source>
        <translation>Représente la position horizontal du bloc à partir de la gauche. Cette position est exprimée soit en pourcentage (%) de la largeur total de l’image, soit en pixel (pour un écran 1080p) en fonction de l’unité définie dans la boite de configuration.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2263"/>
        <source>Represents the vertical offset of the block from the top. This position is defined as a percentage (%) of the total height of the image or in pixels (for a 1080p screen) according to the unit defined in the configuration dialog.</source>
        <translation>Représente la position vertical du bloc  à partir du haut de l’image. Cette position est exprimée soit en pourcentage (%) de la hauteur total de l’image, soit en pixel (pour un écran 1080p) en fonction de l’unité définie dans la boite de configuration.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2264"/>
        <source>Represents the width of the block. This value is defined as a percentage (%) of the total width of the image or in pixels (for a 1080p screen) according to the unit defined in the configuration dialog box.</source>
        <translation>Représente la largeur du bloc. Cette position est exprimée soit en pourcentage (%) de la largeur total de l’image, soit en pixel (pour un écran 1080p) en fonction de l’unité définie dans la boite de configuration.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2265"/>
        <source>Represents the height of the block. This value is defined as a percentage (%) of the total height of the image or in pixels (for a 1080p screen) according to the unit defined in the configuration dialog.</source>
        <translation>Représente la hauteur du bloc. Cette position est exprimée soit en pourcentage (%) de la hauteur total de l’image, soit en pixel (pour un écran 1080p) en fonction de l’unité définie dans la boite de configuration.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2266"/>
        <source>Rotation around the Z axis in degrees.</source>
        <translation>Rotation selon l’axe des Z exprimée en degré.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2267"/>
        <source>Rotation around the Y axis in degrees.</source>
        <translation>Rotation selon l’axe des Y exprimée en degré.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2268"/>
        <source>Rotation around the X axis in degrees.</source>
        <translation>Rotation selon l’axe des X exprimée en degré.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2269"/>
        <source>Block shape</source>
        <translation>Forme du bloc</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2270"/>
        <source>This settings group deals with style management. For more information on style management, see : &lt;a href=&quot;0016.html&quot;&gt;Using style management&lt;/a&gt;</source>
        <translation>Ce groupe de paramètres concerne la gestion des styles. Pour plus d&apos;informations sur la gestion des styles, voir: &lt;a href=&quot;0016.html&quot;&gt;Gestion des styles&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2271"/>
        <source>Shape</source>
        <translation>Forme</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2272"/>
        <source>Allows you to select a shape for the block. The selected shape will be used as:</source>
        <translation>Permet de sélectionner une forme pour le bloc. La forme sélectionnée sera utilisée comme :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2273"/>
        <source>a fusion mask for the images and the videos.</source>
        <translation>masque de fusion pour les images et les vidéos.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2274"/>
        <source>A cutting zone for texts</source>
        <translation> zone de coupure pour les textes</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2275"/>
        <location filename="fake/fake.cpp" line="2276"/>
        <source>Opacity</source>
        <translation>Opacité</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2277"/>
        <source>Defines the opacity of the block. This value also applies to the text of the block.</source>
        <translation>Définit l’opacité du bloc. Cette valeur s’applique également au texte du bloc.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2278"/>
        <source>Border</source>
        <translation>Bordure</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2279"/>
        <source>Thickness of the border</source>
        <translation>Épaisseur</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2280"/>
        <source>Defines the thickness of the border (This value is defined as 1/1080 of the height of the screen. A value of 10 corresponds to 10 points on a 1920x1080 FullHD screen, but only to 6 points on a 1280x720 screen).</source>
        <translation>Définit l’épaisseur de la bordure (Cette valeur est exprimée en 1/1080eme de la hauteur de l’écran, c’est à dire qu’une valeur de 10 correspond à 10 points sur un écran FullHD 1920×1080, mais seulement à 6 points sur un écran 1280x720).</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2281"/>
        <source>Border color</source>
        <translation>Couleur</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2282"/>
        <source>Defines the color of the line to be used to draw the border</source>
        <translation>Définit la couleur du trait à utiliser pour dessiner la bordure</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2283"/>
        <source>Line type of border</source>
        <translation>Type de trait</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2284"/>
        <source>Defines the type of line (solid, dotted line, etc.)</source>
        <translation>Définit le type de trait (plein, pointillé, etc.)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2285"/>
        <source>Shadow</source>
        <translation>Ombre</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2286"/>
        <source>Shadow position</source>
        <translation>Position</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2287"/>
        <source>Defines in which corner the shadow will be positioned (Note: the position of the shadow is independent of rotation of the block: the right lower corner is always the right lower corner, whatever rotation is applied).</source>
        <translation>Définit dans quel coin l’ombre sera positionnée (Note : La position de l’ombre est indépendante des rotations du bloc : Le coin inférieur droit est toujours le coin inférieur droit quelque soit les rotations appliquées au bloc).</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2288"/>
        <source>Distance of the shadow</source>
        <translation>Distance</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2289"/>
        <source>Defines the distance between the block and its shadow</source>
        <translation>Définit la distance entre le bloc ets on ombre</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2290"/>
        <source>Color</source>
        <translation>Couleur</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2291"/>
        <source>Sets the color used to draw the shadow</source>
        <translation>Définit la couleur à utiliser pour dessiner l’ombre</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2292"/>
        <source>See also</source>
        <translation>Voir aussi</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2293"/>
        <source>Description of EXIF - Exchangeable image file format</source>
        <translation>Explications sur l’EXIF-Exchangeable image file format</translation>
    </message>
</context>
<context>
    <name>0118</name>
    <message>
        <location filename="fake/fake.cpp" line="2294"/>
        <source>Set first shot duration for a set of slides</source>
        <translation>Définir la durée du 1er plan pour un groupe de diapositive</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2295"/>
        <source>This dialog allows you to define the duration of the fist shot of a set of slides:</source>
        <translation>Cette boîte de dialogue vous permet de définir la durée du premier plan d&apos;une série de diapositives :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2296"/>
        <source>First shot duration</source>
        <translation>Durée du premier plan</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2297"/>
        <source>Define the duration of the first shot.</source>
        <translation>Définie la durée du premier plan.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2298"/>
        <source>When you click the OK button, the new duration is applied to all the slides that were selected. </source>
        <translation>Quand vous cliquez sur le bouton OK, la nouvelle durée est appliquée à toutes les diapositives qui ont été sélectionnées.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2299"/>
        <source>This new duration affects only the first shot of each slide</source>
        <translation>Cette nouvelle durée ne concerne que le premier plan de chaque diapositive</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2300"/>
        <source>This new duration is applied only to standard slides. The predefined title slides are not impacted.</source>
        <translation>Cette nouvelle durée ne s&apos;applique qu&apos;aux diapositives standards. Les diapositives de type Titre prédéfinis ne sont pas affectées.</translation>
    </message>
</context>
<context>
    <name>0119</name>
    <message>
        <location filename="fake/fake.cpp" line="2301"/>
        <source>Slide properties</source>
        <translation>Propriétés de la diapositive</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2302"/>
        <source>This dialog allows you to define settings for the slides. It includes numerous zones:</source>
        <oldsource>This dialog allows you to define settings for the slides.</oldsource>
        <translation>La boite « Propriétés de la diapositive » permet de définir les réglages des diapositives. Elle inclus de nombreuses zones :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2479"/>
        <location filename="fake/fake.cpp" line="2487"/>
        <source>Remarks: </source>
        <translation>A noter :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2306"/>
        <source>Toolbar</source>
        <translation>La barre d’outils</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2303"/>
        <source>On the top: The &lt;a href=&quot;#Toolbar&quot;&gt;Toolbar&lt;/a&gt; allows to launch the main slide editing commands, and the &lt;a href=&quot;#ShotSettings&quot;&gt;Shot settings&lt;/a&gt; zone.</source>
        <translation>En haut : La &lt;a href=&quot;#Toolbar&quot;&gt;barre d&apos;outils&lt;/a&gt; qui permet d’accéder aux principales commandes d’édition de la diapositive, et la &lt;a href=&quot;#ShotSettings&quot;&gt;zone de réglage des plans&lt;/a&gt;.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2304"/>
        <source>On the left: The &lt;a href=&quot;#SlideSettings&quot;&gt;Slide settings zone&lt;/a&gt;, the &lt;a href=&quot;#ShotsTable&quot;&gt;Shots table&lt;/a&gt; and the &lt;a href=&quot;#InteractiveZone&quot;&gt;Interactive&lt;/a&gt; zones.</source>
        <translation>A gauche : La &lt;a href=&quot;#SlideSettings&quot;&gt;zone de réglage de la diapositive&lt;/a&gt;, la &lt;a href=&quot;#ShotsTable&quot;&gt;table des plans&lt;/a&gt; et la &lt;a href=&quot;#InteractiveZone&quot;&gt;zone interactive&lt;/a&gt;.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2305"/>
        <source>On the right: The &lt;a href=&quot;#BlockTable&quot;&gt;Blocks table&lt;/a&gt; and the &lt;a href=&quot;#BlockSettings&quot;&gt;Block settings&lt;/a&gt; zones.</source>
        <translation>A droite : La &lt;a href=&quot;#BlockTable&quot;&gt;table des blocs&lt;/a&gt; et la &lt;a href=&quot;#BlockSettings&quot;&gt;zone de réglage des blocs&lt;/a&gt;.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2308"/>
        <source>Open the &lt;a href=&quot;0105.html&quot;&gt;Chapter properties dialog&lt;/a&gt;</source>
        <translation>Ouvre la boite de dialogue &lt;a href=&quot;0105.html&quot;&gt;Propriétés du chapitrage&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2311"/>
        <source>Add a new title block - Open a sub menu with the following options: </source>
        <translation>Ajouter un nouveau bloc texte - Ouvre un sous-menu avec les options suivantes:</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2312"/>
        <source>Add a simple title block</source>
        <translation>Ajouter un texte simple</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2313"/>
        <source>Add a title clip-art block</source>
        <translation>Ajouter un texte dans un clip-art</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2314"/>
        <source>Once you have selected one of the options, the &lt;a href=&quot;0120.html&quot;&gt;Edit Text dialog&lt;/a&gt; opens.</source>
        <translation>Dès que vous avez sélectionné l&apos;une des options, La boite de dialogue &lt;a href=&quot;0120.html&quot;&gt;Editer un texte&lt;/a&gt; s&apos;ouvre.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2315"/>
        <source>Add one or several new blocks of images or video. A &lt;a href=&quot;0109.html&quot;&gt;file selection dialog&lt;/a&gt; appears allowing you to select files. </source>
        <translation>Ajouter un ou plusieurs nouveaux blocs d&apos;images ou de vidéo. Une boite de dialogue de &lt;a href=&quot;0109.html&quot;&gt;Sélection de fichiers&lt;/a&gt; apparaît, vous permettant de sélectionner les fichiers.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2316"/>
        <source>Note: in case of multiple selection, files are added in the alphabetical order of the filenames or in the digital order of shots (according to the option selected in the &lt;a href=&quot;0101.html&quot;&gt;Application options dialog&lt;/a&gt;).</source>
        <translation>Note: En cas de sélection multiple, les fichiers sont ajoutés dans l&apos;ordre alphabétique des noms de fichiers ou dans l&apos;ordre numérique de photos (selon l&apos;option choisie dans la boite de dialogue &lt;a href=&quot;0101.html&quot;&gt;Options de l&apos;application&lt;/a&gt;).</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2321"/>
        <source>Edit blocks - Open a sub menu with the following options: </source>
        <translation>Editer les blocs - Ouvre un sous-menu avec les options suivantes :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2332"/>
        <source>Arrange blocks - Open a sub menu with the following options: </source>
        <translation>Arranger les blocs - Ouvre un sous-menu avec les options suivantes :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2344"/>
        <source>Save as model - Allows you to save current slide as a new Predefined custom title. </source>
        <translation>Enregistrer en tant que modèle - Permet de sauvegarder la diapositive en cours comme un nouveau modèle de titre prédéfini.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2345"/>
        <source>For more information on predefined title slide, see: &lt;a href=&quot;0012.html&quot;&gt;Predefined title slide&lt;/a&gt;</source>
        <translation>Pour plus d&apos;informations sur les modèles de titre prédéfinis, voir : &lt;a href=&quot;0012.html&quot;&gt;Diapositives titre prédéfinies&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2346"/>
        <source> At the bottom of the box, the &quot;Rullers&quot; button allows you to open the &lt;a href=&quot;0116.html&quot;&gt;Ruler properties dialog&lt;/a&gt; </source>
        <translation>Au bas de la boîte, le bouton &quot;Guides&quot; vous permet d&apos;ouvrir la boite de dialogue &lt;a href=&quot;0116.html&quot;&gt;Propriétés des guides&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2347"/>
        <source> It is also possible to open contextual menus by: </source>
        <translation> Il est également possible d&apos;ouvrir des menus contextuels par:</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2348"/>
        <source>Right clicking on zones.</source>
        <translation>Un clic droit sur les ​​zones.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2349"/>
        <source>Right click on shots table.</source>
        <translation>Un clic droit sur ​​la table des plans.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2350"/>
        <source>Right click on blocks table or on interactive zone when no block was selected.</source>
        <translation>Un clic droit sur ​​la table des blocs ou sur la zone interactive quand aucun bloc n&apos;est sélectionné.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2352"/>
        <source>Each of these contextual menus propose commands which depend on what you have clicked.</source>
        <translation>Chacun de ces menus contextuels proposent des commandes qui dépendent de votre sélection.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2353"/>
        <source>Slide settings zone</source>
        <translation>La zone de réglage de la diapositive</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2358"/>
        <source>Shots table</source>
        <translation>La table des plans</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2392"/>
        <source>Blocks table</source>
        <translation>La table des blocs</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2366"/>
        <source>Shot settings zone</source>
        <translation>La zone de réglage des plans</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2373"/>
        <source>Interactive zone</source>
        <translation>La zone interactive</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2433"/>
        <source>Block settings zone</source>
        <translation>La zone de réglage des blocs</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2307"/>
        <source> The toolbar allows to launch the main slide editing commands. </source>
        <translation> La barre d’outils permet d’accéder aux principales commandes d’édition de la diapositive.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2309"/>
        <source>Append a shot to the end of the shot table</source>
        <translation>Ajouter un nouveau plan à la fin de la table des plans</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2310"/>
        <source>Remove current selected shot</source>
        <translation>Supprimer le plan actuellement sélectionné, de la barre de temps</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2322"/>
        <source>Change the order of the shots by moving the current selected shot a step to the left</source>
        <translation>Changer l’ordre des plans en déplaçant le plan actuellement sélectionné, d’un cran vers la gauche</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2323"/>
        <source>Change the order of the shots by moving the current selected shot a step to the right</source>
        <translation>Changer l’ordre des plans en déplaçant le plan actuellement sélectionné, d’un cran vers la droite</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2324"/>
        <source>Copy the current block to the ffDiaporama clipboard and remove it from the slide. The copy is made with the block parameters defined for the current selected shot.</source>
        <translation>Copier le bloc actif dans le presse papier et le supprime de la diapositive. La copie s’effectue avec les paramètres de bloc tel qu’ils sont définis pour le plan actuellement sélectionné.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2325"/>
        <source>Copy the current block to the ffDiaporama clipboard. The copy is made with the block parameters defined for the current selected shot.</source>
        <translation>Copier le bloc actif dans le presse papier. La copie s’effectue avec les paramètres de bloc tel qu’ils sont définis pour le plan actuellement sélectionné.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2327"/>
        <source>Remove the current block</source>
        <translation>Supprime le bloc actif</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2341"/>
        <source>Change the order of blocks by moving the active block upward (towards the background)</source>
        <translation>Changer l’ordre des blocs en déplaçant le bloc actif vers le haut (vers l’arrière plan)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2342"/>
        <source>Change the order of blocks by moving the active block downward (towards the foreground)</source>
        <translation>Changer l’ordre des blocs en déplaçant le bloc actif vers le bas (vers le premier plan)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2328"/>
        <source>Make the active block visible or hidden. Note: Hidden video blocks are automatically paused</source>
        <translation>Rendre visible ou invisible le bloc actif. Note : Les blocs vidéos invisibles sont automatiquement mis en pause</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2329"/>
        <source>Play the sound, during this shot, of the selected video block. (This button is active only for videos.)</source>
        <translation>Donner le son, pendant ce plan, au bloc vidéo actuellement actif. (Cette fonction n’est disponible que pour les blocs vidéos.)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2330"/>
        <source>Open the &lt;a href=&quot;0120.html&quot;&gt;Edit text block dialog&lt;/a&gt;.</source>
        <oldsource>Open the &lt;a href=&quot;0120.html&quot;&gt; Edit text block dialog&lt;/a&gt;.</oldsource>
        <translation>Ouvrir la boite &lt;a href=&quot;0120.html&quot;&gt;Éditer le texte du bloc&lt;/a&gt;.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2331"/>
        <source>Open the &lt;a href=&quot;0110.html&quot;&gt;Image framing and correction dialog&lt;/a&gt;. This button is active only for objects containing images or videos.</source>
        <translation>Ouvrir la boite de dialogue &lt;a href=&quot;0110.html&quot;&gt;Recadrer et/ou corriger une image ou une vidéo&lt;/a&gt;. Cette fonction n’est disponible que pour les blocs image ou vidéo.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2403"/>
        <source> If changes made on previous shot are not applied for this block to this shot. (This information does not appear for the 1st shot.)</source>
        <oldsource> If the properties of the block are locked during this shot. (This information does not appear for the 1st shot.)</oldsource>
        <translation> Si les modifications apportées à ce bloc dans les plans précédent ne doivent pas etre appliquées à ce bloc pour ce plan. (Cette information n&apos;apparait pas pour le 1er plan.)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2404"/>
        <source> If the video has the sound during this shot. This information appears only for the video blocks.</source>
        <oldsource> If the properties of the block are unlocked during this shot. (This information does not appear for the 1st shot.)</oldsource>
        <translation> Si la vidéo a le son pendant ce plan. Cette information n&apos;est disponible que pour les blocs vidéo.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2454"/>
        <source>This settings group deals with style management. For more information on style management, see: &lt;a href=&quot;0016.html&quot;&gt;Using style management&lt;/a&gt;</source>
        <translation>Ce groupe de paramètres concerne la gestion des styles. Pour plus d&apos;informations sur la gestion des styles, voir: &lt;a href=&quot;0016.html&quot;&gt;Gestion des styles&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2475"/>
        <source>Sets the color used to draw the shadow</source>
        <translation>Définit la couleur à utiliser pour dessiner l’ombre</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2480"/>
        <source>To change the velocity curve for image animation (graphic effect and framing), edit the image or video and select a velocity in the Image framing and correction dialog</source>
        <translation>Pour modifier la courbe de vitesse de l&apos;animation d&apos;image (effet graphique et cadrage), modifier l&apos;image ou la vidéo et sélectionnez une courbe de vitesse dans la boite de dialogue de Recadrage et correction d&apos;image</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2481"/>
        <source>This setting is define for the current shot, so, the modifications made will apply only to current shot. To understand the differences between the properties which apply to all shots and those which apply only to the current shot, consult: &lt;a href=&quot;0010.html&quot;&gt;How ffDiaporama works&lt;/a&gt;.</source>
        <translation>Ce réglage ne concerne que le plan en cours, ainsi, les modifications faites pour ce plan ne s&apos;appliqueront qu&apos;à ce plan. Pour bien comprendre les différences entre les propriétés qui s’appliquent sur tous les plans et celles qui ne s’appliquent qu’au plan en cours, consultez : &lt;a href=&quot;0010.html&quot;&gt;Principes de fonctionnement de ffDiaporama&lt;/a&gt;.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2491"/>
        <location filename="fake/fake.cpp" line="2494"/>
        <source>These settings are defines for the current shot, so, the modifications made will apply only to current shot. To understand the differences between the properties which apply to all shots and those which apply only to the current shot, consult: &lt;a href=&quot;0010.html&quot;&gt;How ffDiaporama works&lt;/a&gt;.</source>
        <translation>Ces réglages ne concernent que le plan en cours, ainsi, les modifications faites pour ce plan ne s&apos;appliqueront qu&apos;à ce plan. Pour bien comprendre les différences entre les propriétés qui s’appliquent sur tous les plans et celles qui ne s’appliquent qu’au plan en cours, consultez : &lt;a href=&quot;0010.html&quot;&gt;Principes de fonctionnement de ffDiaporama&lt;/a&gt;.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2493"/>
        <source>The block animations define which animations will run during the current shot. You can define different animations for every shot!</source>
        <translation>Les animations de blocs définissent les animations qui auront lieu pendant le plan en cours. Vous pouvez définir des animations différentes pour chaque plan!</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2343"/>
        <source>Display information on active block. (Remark: This function is available only for &quot;image&quot; or &quot;video&quot; blocks.)</source>
        <translation>Afficher des informations sur le bloc actif. (Note : Cette fonction n’est disponible que pour les blocs « image » ou « vidéo ».)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2333"/>
        <source>Align to top</source>
        <translation>Aligner en haut</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2334"/>
        <source>Align to midle</source>
        <translation>Aligner au milieu</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2335"/>
        <source>Align to bottom</source>
        <translation>Aligner en bas</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2336"/>
        <source>Align to left</source>
        <translation>Aligner à gauche</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2337"/>
        <source>Align to center</source>
        <translation>Aligner au centre</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2338"/>
        <source>Align to right</source>
        <translation>Aligner à droite</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2339"/>
        <source>Distribute horizontally</source>
        <translation>Distribuer horizontalement</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2340"/>
        <source>Distribute vertically</source>
        <translation>Distribuer verticalement</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2354"/>
        <source>Name of the slide</source>
        <translation>Nom de la diapositive</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2355"/>
        <source>Indicate here a name for the slide. It is this name which will appear on the thumbnail in the main window timeline.</source>
        <translation>Saisissez ici un nom pour la diapositive. C’est ce nom qui apparaîtra sur la vignette de la diapositive dans la barre de temps de la fenêtre principale.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2351"/>
        <source>Right click on one of the blocks of a multiple selection, on blocks table or on interactive zone.</source>
        <oldsource>If this box is checked, the slide will mark the beginning of a new chapter.</oldsource>
        <translation>Un clic droit sur ​​l&apos;un des blocs d&apos;une sélection multiple, sur la table des blocs ou sur la zone interactive.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2317"/>
        <source>Add special - Open a sub menu with the following options: </source>
        <translation>Ajouter spécial - Ouvre un sous menu avec les options suivantes :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2318"/>
        <source>Add image from clipboard</source>
        <translation>Ajouter une image depuis le presse papier</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2319"/>
        <source>Add a GMaps map</source>
        <translation>Ajouter une carte Google Maps</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2320"/>
        <source>Once you have selected one of the options, the new object is inserted into the block table and depending on object, the &lt;a href=&quot;0110.html&quot;&gt;Image framing and correction dialog&lt;/a&gt; opens.</source>
        <translation>Dès que vous avez sélectionné l&apos;une des options, le nouvel objet est inséré dans la table des blocs et en fonction de l&apos;objet, la boite de dialogue &lt;a href=&quot;0110.html&quot;&gt;Recadrage et correction d&apos;image&lt;/a&gt; s&apos;ouvre.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2326"/>
        <source>Paste block or image from the clipboard and insert it to the end of the block table</source>
        <translation>Collez le bloc ou l&apos;image du presse-papiers à la fin de la table des blocs</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2356"/>
        <source>Total slide duration</source>
        <translation>Durée total (diapositive)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2357"/>
        <source>The total slide duration is displayed here. This duration takes into account possible adjustments for minimal duration of the shot as described above.</source>
        <translation>La durée cumulée des plans de la diapositive est affichée ici. Cette durée tient compte des éventuels ajustement de durée minimale des plans tel que décrit ci-dessous.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2359"/>
        <source> The shots table shows the shots as thumbnails, in the order in which they will be played (from left to right). </source>
        <translation> La table des plans affiche les plans sous forme de vignette, dans l’ordre dans lequel ils seront joués (de la gauche vers la droite).</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2360"/>
        <source>For each shot, the thumbnail shows: </source>
        <translation>Pour chaque plan, la vignette affiche :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2361"/>
        <source>The shot duration (At the top of the thumbnail)</source>
        <translation>La durée du plan (en haut de la vignette)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2362"/>
        <source>The temporal position of the shot at the end of its duration (At the bottom right of the thumbnail)</source>
        <translation>La position temporelle du plan à la fin de sa durée (en bas à droite de la vignette)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2363"/>
        <source>An image representing the shot at the end of its duration</source>
        <translation>Une image représentant le plan à la fin de sa durée</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2364"/>
        <source>Remark:</source>
        <translation>Note :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2365"/>
        <source>The order of the shots can be changed by using Drag &amp; Drop.</source>
        <translation>Il est possible de changer l’ordre des plans par Drag &amp; Drop.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2367"/>
        <source>Shot duration</source>
        <translation>Durée du plan</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2368"/>
        <source> Indicate here the duration of the currently selected shot. For the last shot of the slide, there is a minimum duration.The following rules are used to calculate the minimum duration of the shot: </source>
        <translation>Indiquer ici une durée pour le plan actuellement sélectionné. Pour le dernier plan de la diapositive, la notion de durée minimale intervient. Les règles suivantes s’appliquent pour calculer la durée minimale des plans :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2369"/>
        <source>The total slide duration cannot be lower than the sum of the durations of the entering transition of the slide plus that of the transition to the following slide</source>
        <translation>La durée total de la diapositive ne peut pas être inférieur à la somme des durées de la transition entrante de la diapositive + la durée de la transition entrante de la diapositive suivante</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2370"/>
        <source>The total slide duration must permit complete play of the longest video sequence (time of breaks is taken into account)</source>
        <translation>La durée total de la diapositive doit permettre de jouer dans son intégralité la vidéo la plus longue (Le temps des pauses est pris en compte)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2371"/>
        <source>The total slide duration cannot be lower than 1:30 second</source>
        <translation>La durée total de la diapositive ne peut pas être inférieur à 1/30eme de seconde</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2372"/>
        <source>If you specify a duration lower than the minimum calculated duration for the shot, it is this minimum duration that will be used in place of the value which you specified.</source>
        <oldsource> If you specify a duration lower than the minimum calculated duration for the shot, it is this minimum duration that will be used in place of the value which you specified. </oldsource>
        <translation>Si vous indiquez une durée inférieure à la durée minimum calculée pour le plan, c’est cette durée minimum qui sera utilisée à la place de la valeur que vous aurez saisie.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2374"/>
        <source> The interactive zone allows you to move and interactively re-size blocks within the selected shot. </source>
        <translation> La zone de intéractive permet de déplacer et redimensionner graphiquement les blocs, pour le plan actuellement sélectionné.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2375"/>
        <source>Selected blocks are shown with a frame. (It allows to differentiate them from other graphic elements of the slide).</source>
        <translation>Les blocs sélectionnés sont affichés avec un cadre (cela permet de les différencier des autres éléments graphiques de la diapositive).</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2376"/>
        <source>Control handles (small square) are shown on sides and on corners of the selection frame.</source>
        <translation>La sélection affiche en plus des poignées de contrôles (petit carré) apparaissant dans les coins et sur les cotés.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2377"/>
        <source>Rulers are displayed to facilitate the work with the mouse. See &lt;a href=&quot;0116.html&quot;&gt;Rulers settings&lt;/a&gt;</source>
        <translation>Des guides peuvent faciliter le travail à la souris. Voir &lt;a href=&quot;0116.html&quot;&gt;Réglage des guides&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2378"/>
        <source>Using the mouse:</source>
        <translation>A la souris :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2379"/>
        <location filename="fake/fake.cpp" line="2421"/>
        <source>To select a block: click the block</source>
        <translation>Pour sélectionner un bloc : Cliquer dessus</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2380"/>
        <location filename="fake/fake.cpp" line="2422"/>
        <source>To select multiple blocks: Select a first block by clicking on it and then, by clicking on the other blocks to be selected with pressing either the SHIFT or the CTRL key.</source>
        <translation>Pour sélectionner plusieurs blocs : Sélectionner un premier bloc en cliquant dessus puis cliquer sur les autres blocs à sélectionner en maintenant soit la touche SHIFT, soit la touche CTRL enfoncé.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2381"/>
        <source>To select a block under another block : Click the block to be selected by pushing both SHIFT and CTRL keys.</source>
        <translation>Pour sélectionner un bloc sous un autre bloc : Cliquer sur le bloc à sélectionner en maintenant enfoncé les deux touches SHIFT et CTRL.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2382"/>
        <location filename="fake/fake.cpp" line="2423"/>
        <source>To unselect a block in a multiple selection: Click the block with pressing either the SHIFT or the CTRL key.</source>
        <translation>Pour déselectionner un bloc dans une sélection multiple : Cliquer dessus en maintenant soit la touche SHIFT, soit la touche CTRL enfoncé.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2383"/>
        <source>To modify the size of the blocks of the selection: Click one of the handles of the selection and, while keeping the button of the mouse pressed, move the mouse.</source>
        <translation>Pour modifier la taille des blocs de la sélection : Cliquer sur l’une des poignées de la sélection et, tout en maintenant le bouton de la souris enfoncé, déplacer la souris.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2384"/>
        <source>To move the blocks of the selection: Click one of the blocks of the selection and, while keeping the button of the mouse pressed, move the mouse.</source>
        <translation>Pour déplacer les blocs de la sélection : Cliquer sur un des blocs de la sélection et, tout en maintenant le bouton de la souris enfoncé, déplacer la souris.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2385"/>
        <source>Using the keyboard:</source>
        <translation>Au clavier :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2386"/>
        <source>To move the blocks of the selection, use the arrow keys.</source>
        <translation>Utiliser les flèches de direction pour déplacer les blocs de la sélection.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2387"/>
        <source>To change the size of the blocks of the selection, use SHIFT+arrows to move the upper left corner handle or CTRL+arrows to move the lower right corner handle.</source>
        <translation>Utiliser SHIFT+les flèches de direction pour déplacer la poignée du coin supérieur gauche, ce qui permet de changer la taille des blocs.
Utiliser CTRL+les flèches de direction pour déplacer la poignée du coin inférieur droit, ce qui permet de changer la taille des blocs.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2388"/>
        <location filename="fake/fake.cpp" line="2417"/>
        <source>Remarks:</source>
        <translation>A noter :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2389"/>
        <source>A double click on a block opens the block editor associated with the block type (for a text block this will be the text editor, for an image block the reframing dialog, etc.)</source>
        <translation>Un double clic sur un bloc permet d’ouvrir l’éditeur de bloc associé au type de bloc (Pour un bloc texte : ouvre l’editeur de texte. Pour un bloc image : ouvre la boite de recadrage, etc…)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2390"/>
        <source>A right click on a block when the selection includes only a single block opens a contextual menu proposing the editing commands for a block.</source>
        <translation>Un clic droit sur un bloc quand la sélection n’inclus qu’un seul bloc : permet d’appeler le menu contextuel proposant les commandes d’édition de bloc.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2391"/>
        <source>A right click on a block when the selection includes multiple blocks opens a contextual menu proposing the editing commands for multiple blocks.</source>
        <translation>Un clic droit sur un bloc quand la sélection inclus plusieurs blocs : permet d’appeler le menu contextuel proposant les commandes d’édition multi-bloc.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2393"/>
        <source>The blocks table lists, from top to bottom, the present blocks in the slide.</source>
        <oldsource> The blocks table lists, from top to bottom, the present blocks in the slide. </oldsource>
        <translation>La table des blocs liste, de haut en bas, les blocs présents dans la diapositive.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2394"/>
        <source>The order of the blocks is important! The first block (at the top of the list) is covered by the second block which is even covered by the following block and so on.</source>
        <translation>L’ordre des blocs est important ! Le premier bloc (en haut de la liste) est recouvert par le 2eme bloc qui lui même est recouvert par le bloc suivant et ainsi de suite.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2395"/>
        <source>The order of the blocks is defined shot by shot.</source>
        <translation>L’ordre des blocs est défini plan par plan.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2396"/>
        <source>Blocks are shown on 3 columns:</source>
        <oldsource>Blocks are shown on 3 columns: </oldsource>
        <translation>Les blocs sont affichés sur 3 colonnes :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2397"/>
        <source>The first column contains or: </source>
        <translation>La première colonne contient soit : </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2398"/>
        <source> If the block is a title.</source>
        <translation> si le bloc est de type titre.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2399"/>
        <source>A thumbnail if the block is an image or a video.</source>
        <translation>Une vignette de l’image ou de la vidéo, si le bloc est de type image ou vidéo.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2400"/>
        <source> If the image or the video have a transformation filter.</source>
        <translation> si l’image ou la vidéo a un filtre de transformation actif.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2401"/>
        <source>The second column contains icons giving the state of the blocks for the current shot: </source>
        <translation>La seconde colonne contient des icônes donnant l’état du bloc pour le plan en cours : </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2402"/>
        <source> If changes made on previous shot are applied for this block also to this shot. (This information does not appear for the 1st shot.)</source>
        <translation> Si les modifications apportées à ce bloc dans les plans précédent doivent etre appliquées à ce bloc pour ce plan. (Cette information n&apos;apparait pas pour le 1er plan.)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2405"/>
        <source> If the block is visible during this shot.</source>
        <oldsource> If the block is visible during this shot</oldsource>
        <translation> Si le bloc est visible pendant ce plan.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2406"/>
        <source> If the block is hidden during this shot.</source>
        <oldsource> If the block is hidden.</oldsource>
        <translation> Si le bloc est caché pendant ce plan.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2407"/>
        <source>The third column indicates: </source>
        <translation>La troisième colonne indique : </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2408"/>
        <source>If the block is a title: the text of the block</source>
        <translation>S’il s’agit d’un bloc de type titre : le texte du bloc</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2409"/>
        <source>If the block is an image: </source>
        <translation>S’il s’agit d’un bloc de type image : </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2410"/>
        <location filename="fake/fake.cpp" line="2414"/>
        <source>The filename.</source>
        <translation>Le nom du fichier.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2411"/>
        <location filename="fake/fake.cpp" line="2415"/>
        <source>The width x the height of the image in pixel (the format of the image - the geometry of the image).</source>
        <translation>La largeur x la hauteur de l’image en pixel (le format de l’image – la géométrie de l’image).</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2412"/>
        <source>A summary of EXIF information on the image.</source>
        <translation>Un résumé des informations EXIF sur l’image.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2413"/>
        <source>If the block is a video: </source>
        <translation>S’il s’agit d’un bloc de type vidéo : </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2416"/>
        <source>The duration of the video.</source>
        <translation>La durée de la vidéo.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2418"/>
        <source>Double clicking on a block opens the block editor associated with the block type (for a text block this will be the text editor, for an image block the reframing dialog, etc.)</source>
        <translation>Un double clic sur un bloc permet d’ouvrir l’éditeur de bloc associé au type de bloc (Pour un bloc texte : ouvre l’editeur de texte. Pour un bloc image : ouvre la boite de recadrage, etc.)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2419"/>
        <source>Right clicking on a block when the selection includes only a single block opens a contextual menu proposing the editing commands for a block.</source>
        <translation>Un clic droit sur un bloc quand la sélection n’inclus qu’un seul bloc : permet d’appeler le menu contextuel proposant les commandes d’édition d’un bloc.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2420"/>
        <source>Right clicking on a block when the selection includes multiple blocks opens a contextual menu proposing the editing commands for multiple blocks.</source>
        <translation>Un clic droit sur un bloc quand la sélection inclus plusieurs blocs : permet d’appeler le menu contextuel proposant les commandes d’édition multi-bloc.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2424"/>
        <source>Blocks with locked properties are shown on a grey bottom.</source>
        <translation>Les blocs dont les propriétés sont verrouillés sont affichés sur un fond gris.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2425"/>
        <source>Selected blocks are shown on a red bottom if the focus is on the blocks table or on a blue bottom if the focus is on another element.</source>
        <translation>Les blocs sélectionnés sont affichés sur un fond rouge si le focus est sur la table des blocs et sur un fond bleu si le focus est sur un autre élément.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2426"/>
        <source>To change the blocks order, use Drag &amp; Drop or &lt;B&gt;Up&lt;/B&gt; and &lt;B&gt;Down&lt;/B&gt; functions of the contextual menu.</source>
        <translation>Pour changer l’ordre des blocs, utiliser soit le Drag &amp; Drop soit les fonctions B&gt;Haut&lt;/B&gt; et B&gt;Bas&lt;/B&gt; du menu contextuel.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2427"/>
        <source>It is possible to add files directly in the blocks table by using Drag and Drop with the file explorer.</source>
        <translation>Il est possible d’ajouter des fichiers directement dans la table des blocs par Drag &amp; Drop avec l’explorateur de fichier.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2428"/>
        <source>All blocks, whether title, image or video, possess a text element.</source>
        <translation>Tous les blocs, qu’ils soient de type titre, image ou vidéo possèdent un texte.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2429"/>
        <source>During the insertion of a new block (Add title, Add file or Paste), the block is inserted: </source>
        <translation>Lors de l’insertion d’un nouveau bloc (Ajouter titre, Ajouter fichier ou Coller), le bloc est inséré : </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2430"/>
        <source>In visible mode for the current shot and for all the following shots</source>
        <translation>en mode visible pour le plan actuellement sélectionné et pour tous les plans suivants</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2431"/>
        <source>In hidden mode for the shots located before the current shot</source>
        <translation>en mode caché pour les plans situés avant le plan actuellement sélectionné</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2432"/>
        <source>Always in the last position in the list of blocks (in the foreground)</source>
        <translation>toujours en dernière position dans la liste des blocs (au premier plan)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2434"/>
        <source>Inheritance changes</source>
        <translation>Héritage des modifications</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2435"/>
        <source>This settings group defines how changes to the block parameters are reflected to the different shots.</source>
        <oldsource>This settings group defines how changes to the block parameters are reflected to the different planes.</oldsource>
        <translation>Ce groupe de paramètres définit la manière dont les modifications apportées aux paramètres des blocs sont reflétées sur les différents plans.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2436"/>
        <source>Inherit changes: If this box is checked, the changes made in a previous shot will be applied to this object in this shot</source>
        <translation>Hériter les modifications: Si cette case est cochée, les changements apportés dans les plans précédent seront appliquées à cet objet dans ce plan</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2437"/>
        <source>Coordinates</source>
        <translation>Coordonnées</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2438"/>
        <source>This settings group defines the coordinates of the block for the current shot, so, the modifications made to the following properties will apply only to current shot. To understand the differences between the properties which apply to all shots and those which apply only to the current shot, consult: &lt;a href=&quot;0010.html&quot;&gt;How ffDiaporama works&lt;/a&gt;.</source>
        <oldsource>This settings group defines the coordinates of the block for the current shot, so, the modifications made to the following properties will apply only to current shot. To understand the differences between the properties which apply to all shots and those which apply only to the current shot, consult: How ffDiaporama works.</oldsource>
        <translation>Ce groupe de réglages concerne les coordonnées du bloc pour le plan en cour, ainsi, les modifications apportés sur les propriétés suivantes s’appliqueront uniquement au plan en cours. Pour bien comprendre les différences entre les propriétés qui s’appliquent sur tous les plans et celles qui ne s’appliquent qu’au plan en cours, consultez : &lt;a href=&quot;0010.html&quot;&gt;Principes de fonctionnement de ffDiaporama&lt;/a&gt;.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2439"/>
        <source>&lt;B&gt;For image or video blocks: &lt;/B&gt;Allows you to select a reframing style for the image. It has the same effect as selecting a style in the dialog: &lt;a href=&quot;0110.html&quot;&gt;Correct, reframe or cut image or video&lt;/a&gt;.</source>
        <translation>&lt;B&gt;Pour les blocs image ou vidéo :&lt;/B&gt; Permet de sélectionner un style de recadrage pour l’image Cela a le même effet que de sélectionner un style dans la boite de dialogue &lt;a href=&quot;0110.html&quot;&gt;Recadrer et/ou corriger une image ou une vidéo&lt;/a&gt;.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2440"/>
        <source>&lt;B&gt;For text blocks: &lt;/B&gt;Allows you to select the geometrical constraints to be applied to the block. Three type of constraint are available:</source>
        <translation>&lt;B&gt;Pour les blocs textes :&lt;/B&gt; Permet de sélectionner la contrainte géométrique à appliquer au bloc. Trois types de contrainte sont disponibles :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2441"/>
        <source>No constraint is applied to the selection rectangle.</source>
        <translation>Pas de contrainte : Aucune contrainte ne s’applique au rectangle de sélection. Il est définit librement.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2442"/>
        <source>Lock selection rectangle to the actual geometry. It has no meaning until you have defined a shape in &quot;no constraint&quot; mode.</source>
        <translation>Verrouiller sur cette géométrie : Permet de verrouiller le rectangle de sélection sur la forme qu’il a actuellement. Cela n’a de sens qu’après avoir définit une forme avec le mode « Pas de contrainte ».</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2443"/>
        <source>Lock selection rectangle to the same geometry as the project, such that, if you place the image in full screen, the reframed part will correspond to the whole screen.</source>
        <translation>Verrouiller sur la géométrie du projet : Fait en sorte à ce que le rectangle de sélection ait la même géométrie que le projet, comme cela, si vous placez l’image en plein écran la partie recadrée correspondra à tout l’écran.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2444"/>
        <source>Allows you to select a pre-defined block size</source>
        <translation>Permet de sélectionner une taille de bloc pré-définie</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2445"/>
        <source>Represents the horizontal offset of the block from the left. This position is defined as a percentage (%) of the total width of the image or in pixels (for a 1080p screen) according to the unit defined in the configuration dialog.</source>
        <translation>Représente la position horizontal du bloc à partir de la gauche. Cette position est exprimée soit en pourcentage (%) de la largeur total de l’image, soit en pixel (pour un écran 1080p) en fonction de l’unité définie dans la boite de configuration.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2446"/>
        <source>Represents the vertical offset of the block from the top. This position is defined as a percentage (%) of the total height of the image or in pixels (for a 1080p screen) according to the unit defined in the configuration dialog.</source>
        <translation>Représente la position vertical du bloc  à partir du haut de l’image. Cette position est exprimée soit en pourcentage (%) de la hauteur total de l’image, soit en pixel (pour un écran 1080p) en fonction de l’unité définie dans la boite de configuration.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2447"/>
        <source>Represents the width of the block. This value is defined as a percentage (%) of the total width of the image or in pixels (for a 1080p screen) according to the unit defined in the configuration dialog box.</source>
        <translation>Représente la largeur du bloc. Cette position est exprimée soit en pourcentage (%) de la largeur total de l’image, soit en pixel (pour un écran 1080p) en fonction de l’unité définie dans la boite de configuration.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2448"/>
        <source>Represents the height of the block. This value is defined as a percentage (%) of the total height of the image or in pixels (for a 1080p screen) according to the unit defined in the configuration dialog.</source>
        <translation>Représente la hauteur du bloc. Cette position est exprimée soit en pourcentage (%) de la hauteur total de l’image, soit en pixel (pour un écran 1080p) en fonction de l’unité définie dans la boite de configuration.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2449"/>
        <source>Rotation around the Z axis in degrees.</source>
        <translation>Rotation selon l’axe des Z exprimée en degré.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2450"/>
        <source>Rotation around the Y axis in degrees.</source>
        <translation>Rotation selon l’axe des Y exprimée en degré.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2451"/>
        <source>Rotation around the X axis in degrees.</source>
        <translation>Rotation selon l’axe des X exprimée en degré.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2452"/>
        <source>Block shape</source>
        <translation>Forme du bloc</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2453"/>
        <source> This settings group defines the shape of the block for all shots, so, modification of the following properties will apply to all shots in the slide. To understand the differences between the properties which apply to all shots and those which apply only to the current shot, consult: &lt;a href=&quot;0010.html&quot;&gt;How ffDiaporama works&lt;/a&gt;. </source>
        <oldsource> This settings group defines the shape of the block for all shots, so, modification of the following properties will apply to all shots in the slide. To understand the differences between the properties which apply to all shots and those which apply only to the current shot, consult: How ffDiaporama works. </oldsource>
        <translation> Ce groupe de réglages concerne la forme du bloc pour tous les plans de la diapositive, ainsi, les propriétés suivantes s&apos;appliqueront à tous les plans de la diapositive. Pour bien comprendre les différences entre les propriétés qui s’appliquent sur tous les plans et celles qui ne s’appliquent qu’au plan en cours, consultez : &lt;a href=&quot;0010.html&quot;&gt;Principes de fonctionnement de ffDiaporama&lt;/a&gt;.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2455"/>
        <source>Shape</source>
        <translation>Forme</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2456"/>
        <source>Allows you to select a shape for the block. The selected shape will be used as:</source>
        <translation>Permet de sélectionner une forme pour le bloc. La forme sélectionnée sera utilisée comme :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2457"/>
        <source>a fusion mask for the images and the videos.</source>
        <translation>masque de fusion pour les images et les vidéos.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2458"/>
        <source>A cutting zone for texts</source>
        <translation> zone de coupure pour les textes</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2459"/>
        <location filename="fake/fake.cpp" line="2460"/>
        <source>Opacity</source>
        <translation>Opacité</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2461"/>
        <source>Defines the opacity of the block. This value also applies to the text of the block.</source>
        <translation>Définit l’opacité du bloc. Cette valeur s’applique également au texte du bloc.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2462"/>
        <source>Border</source>
        <translation>Bordure</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2463"/>
        <source>Thickness of the border</source>
        <translation>Épaisseur</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2464"/>
        <source>Defines the thickness of the border (This value is defined as 1/1080 of the height of the screen. A value of 10 corresponds to 10 points on a 1920x1080 FullHD screen, but only to 6 points on a 1280x720 screen).</source>
        <translation>Définit l’épaisseur de la bordure (Cette valeur est exprimée en 1/1080eme de la hauteur de l’écran, c’est à dire qu’une valeur de 10 correspond à 10 points sur un écran FullHD 1920×1080, mais seulement à 6 points sur un écran 1280x720).</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2465"/>
        <source>Border color</source>
        <translation>Couleur</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2466"/>
        <source>Defines the color of the line to be used to draw the border</source>
        <translation>Définit la couleur du trait à utiliser pour dessiner la bordure</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2467"/>
        <source>Line type of border</source>
        <translation>Type de trait</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2468"/>
        <source>Defines the type of line (solid, dotted line, etc.)</source>
        <translation>Définit le type de trait (plein, pointillé, etc.)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2469"/>
        <source>Shadow</source>
        <translation>Ombre</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2470"/>
        <source>Shadow position</source>
        <translation>Position</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2471"/>
        <source>Defines in which corner the shadow will be positioned (Note: the position of the shadow is independent of rotation of the block: the right lower corner is always the right lower corner, whatever rotation is applied).</source>
        <translation>Définit dans quel coin l’ombre sera positionnée (Note : La position de l’ombre est indépendante des rotations du bloc : Le coin inférieur droit est toujours le coin inférieur droit quelque soit les rotations appliquées au bloc).</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2472"/>
        <source>Distance of the shadow</source>
        <translation>Distance</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2473"/>
        <source>Defines the distance between the block and its shadow</source>
        <translation>Définit la distance entre le bloc ets on ombre</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2474"/>
        <source>Color</source>
        <translation>Couleur</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2476"/>
        <source>Animation option</source>
        <translation>Option des animations</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2477"/>
        <source>Speed wave</source>
        <translation>Courbe de vitesse</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2508"/>
        <source>The block will blink during the shot (appear then disappear). 4 speeds are proposed (from slow to very fast).</source>
        <oldsource> When the block properties are unlocked, the modifications made to the block in the preceding shot are echoed in the current shot. </oldsource>
        <translation>Permet de faire clignoter le bloc pendant le plan (apparition puis disparition). 4 vitesses sont proposées (de lentes à très rapide).</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2478"/>
        <source>Selects a speed curve for block animations (movement, resizing and rotating of blocks, animation of text and blocks)</source>
        <oldsource>Remark: To change the velocity curve for image animation (graphic effect and framing), edit the image or video and select a velocity in the Image framing and correction dialog</oldsource>
        <translation>Note : Pour modifier la courbe de vitesse concernant les animations d’images (effet graphique et recadrage), éditer l’image ou la vidéo et sélectionner une courbe de vitesse dans la boite Recadrer et/ou corriger une image ou une vidéo</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2482"/>
        <source>Text annimation</source>
        <translation>Animation de texte</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2483"/>
        <source>Zoom</source>
        <translation>Zoom</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2484"/>
        <source>Defines a level of zoom for the text</source>
        <translation>Définit un niveau de zoom pour le texte</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2485"/>
        <source>Defines the horizontal position of the text inside the block</source>
        <translation>Définit la position horizontal du texte à l’intérieur du bloc</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2486"/>
        <source>Defines the vertical position of the text inside the block</source>
        <translation>Définit la position vertical du texte à l’intérieur du bloc</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2488"/>
        <source>To make animations of text, you have to create at least 2 shots then:</source>
        <oldsource> To make animations of text, you have to create at least 2 shots then: </oldsource>
        <translation>Pour réaliser des animations de texte, vous devez créer au moins 2 plans puis :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2489"/>
        <source>Define values for zoom and scrolling for the 1st shot</source>
        <translation>Définissez des valeurs de zoom et de scrolling pour le 1er plan</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2490"/>
        <source>Define different values for zoom and scrolling for the 2nd</source>
        <translation>Définissez des valeurs de zoom et de scrolling pour le 2eme plan</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2492"/>
        <source>Block animation</source>
        <translation>Animation de blocs</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2495"/>
        <source>Multiple rotations</source>
        <translation>Multiple rotations</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2496"/>
        <source> This animation allows to turn a block several times during the shot. </source>
        <translation> Cette animation permet de faire tourner un bloc plusieurs fois sur lui même pendant le plan.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2497"/>
        <source>Remark: the rotation direction is defined by the sign, so +5 will give 5 rotations in one direction while -5 will give 5 rotations in the other direction </source>
        <translation>Note : Le sens de rotation est définit par le signe, ainsi +5 donnera 5 rotations dans un sens alors que -5 donnera 5 rotations dans l’autre sens</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2498"/>
        <source>Defines the number of rotation to be made according to the Z axis.</source>
        <translation>Définit le nombre de rotation à effectuer selon l’axe des Z.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2499"/>
        <source>Defines the number of rotation to be made according to the Y axis.</source>
        <translation>Définit le nombre de rotation à effectuer selon l’axe des Y.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2500"/>
        <source>Defines the number of rotation to be made according to the X axis.</source>
        <translation>Définit le nombre de rotation à effectuer selon l’axe des X.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2501"/>
        <source>Dissolve</source>
        <translation>Fondu</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2502"/>
        <source>This animation dissolves between the block and a transparent zone according to the following settings.</source>
        <translation>Cette animation permet d’effectuer des fondus entre le bloc et une zone transparente en fonction des paramètres suivants.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2503"/>
        <source>Appear</source>
        <translation>Apparaître</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2504"/>
        <source>The block will appear during the shot</source>
        <translation>Permet de faire apparaître le bloc pendant le plan</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2505"/>
        <source>Disappear</source>
        <translation>Disparaître</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2506"/>
        <source>The block will disappear during the shot</source>
        <translation>Permet de faire disparaître le bloc pendant le plan</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2507"/>
        <source>Blink</source>
        <translation>Clignoter</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2509"/>
        <source>See also</source>
        <translation>Voir aussi</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2510"/>
        <source>Description of EXIF - Exchangeable image file format</source>
        <translation>Explications sur l’EXIF-Exchangeable image file format</translation>
    </message>
</context>
<context>
    <name>0120</name>
    <message>
        <location filename="fake/fake.cpp" line="2511"/>
        <source>Edit text</source>
        <translation>Editer le texte</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2512"/>
        <source>This dialog allows you to modify the text within a block.</source>
        <oldsource> This dialog allows you to modify the text within a block. </oldsource>
        <translation>La boite « Éditer le texte » permet de modifier le texte d’un bloc.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2513"/>
        <source>Properties for all shots</source>
        <translation>Propriétés pour tous les plans</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2514"/>
        <source> The modifications made to the following properties will apply to all shots of the slide. </source>
        <translation> Les modifications apportés sur les propriétés suivantes s’appliqueront sur tous les plans de la diapositive.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2515"/>
        <source>To understand indeed the differences between the properties which apply to all shots and those who apply only to the current shot, consult: &lt;a href=&quot;0010.html&quot;&gt;How ffDiaporama works&lt;/a&gt;. </source>
        <oldsource>To understand indeed the differences between the properties which apply to all shots and those who apply only to the current shot, consult: How ffDiaporama work. </oldsource>
        <translation>Pour bien comprendre les différences entre les propriétés qui s’appliquent sur tous les plans et celles qui ne s’appliquent qu’au plan en cours, consultez : &lt;a href=&quot;0010.html&quot;&gt;Principes de fonctionnement de ffDiaporama&lt;/a&gt;.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2516"/>
        <source>Text tab</source>
        <translation>Onglet texte</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2517"/>
        <source>First line at the top of the dialog</source>
        <translation>Première ligne en haut de la boite</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2518"/>
        <location filename="fake/fake.cpp" line="2549"/>
        <source>This settings group is the object of style management. for more information on style management, see : &lt;a href=&quot;0016.html&quot;&gt;Using style management&lt;/a&gt;</source>
        <oldsource>This settings group is the object of style management. for more information on style management, see : Using style management</oldsource>
        <translation>Ce groupe de réglage fait l’objet d’une gestion de style. Pour plus d’information sur la gestion des styles, consultez : &lt;a href=&quot;0016.html&quot;&gt;La gestion des styles&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2519"/>
        <source>Allows you to select the font to be used, its size and its colour. This setting applies to the current selection.</source>
        <translation>Permet de sélectionner la police de caractère à utiliser, sa taille et sa couleur. Ce réglage s’applique à la sélection en cours.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2520"/>
        <source>Allows to establish (or to remove) a bullet list. This setting applies to the paragraphs of the current selection.</source>
        <translation>Permet de constituer (ou d’enlever) une liste à puce. Ce réglage s’applique aux paragraphes de la sélection en cours.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2521"/>
        <source>Allows to establish (or to remove) a numbered list. This setting applies to the paragraphs of the current selection.</source>
        <translation>Permet de constituer (ou d’enlever) une liste numérotée. Ce réglage s’applique aux paragraphes de la sélection en cours.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2522"/>
        <source>Horizontal alignment: left. This setting applies to the paragraph in which the cursor is.</source>
        <translation>Alignement horizontal à gauche. Ce réglage s’applique au paragraphe dans lequel se trouve le curseur.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2523"/>
        <source>Horizontal alignment: centered. This setting applies to the paragraph in which the cursor is.</source>
        <translation>Alignement horizontal au centre. Ce réglage s’applique au paragraphe dans lequel se trouve le curseur.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2524"/>
        <source>Horizontal alignment: justified. This setting applies to the paragraph in which the cursor is.</source>
        <translation>Alignement horizontal justifié. Ce réglage s’applique au paragraphe dans lequel se trouve le curseur.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2525"/>
        <source>Horizontal alignment: right. This setting applies to the paragraph in which the cursor is.</source>
        <translation>Alignement horizontal à droite. Ce réglage s’applique au paragraphe dans lequel se trouve le curseur.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2526"/>
        <source>Second line at the top of the dialog</source>
        <translation>Deuxième ligne en haut de la boite
	
</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2527"/>
        <source>Allows you to add outline or shadow to the whole text: </source>
        <translation>Permet de donner un effet de contour ou d’ombre au texte :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2528"/>
        <source>The first list allows you to select the effect: </source>
        <translation>La première liste permet de définir l’effet :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2529"/>
        <source>No effect</source>
        <translation>Aucun effet</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2530"/>
        <source>Text is shown without any shadow or outline</source>
        <translation>Le texte est affiché sans aucun effet d’ombre ou de contour</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2531"/>
        <source>Outline</source>
        <translation>Contour</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2532"/>
        <source>Surrounds the characters with a line in the current shadow color</source>
        <translation>Entoure les caractères avec un trait de la couleur de l’ombre</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2533"/>
        <source>Shadow ...</source>
        <translation>Ombre en…</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2534"/>
        <source>Add a shadow in the current shadow color in one of the 4 corners.</source>
        <translation>Ajoute une ombre de la couleur de l’ombre en la positionnant dans l’un des 4 coins.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2535"/>
        <source>The second list allows you to select the color of the shadow or the outline.</source>
        <translation>La seconde liste permet de sélectionner la couleur de l’ombre ou du contour.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2536"/>
        <source>Sets bold characters. This setting applies to the current selection.</source>
        <translation>Met les caractères en gras. Ce réglage s’applique à la sélection en cours.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2537"/>
        <source>Sets characters to italics. This setting applies to the current selection.</source>
        <translation>Met les caractères en italique. Ce réglage s’applique à la sélection en cours.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2538"/>
        <source>Underlines the characters. This setting applies to the current selection.</source>
        <translation>Souligne les caractères. Ce réglage s’applique à la sélection en cours.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2539"/>
        <source>Puts the characters to super. This setting applies to the current selection.</source>
        <translation>Met les caractères en exposant. Ce réglage s’applique à la sélection en cours.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2540"/>
        <source>Puts the characters to sub. This setting applies to the current selection.</source>
        <translation>Met les caractères en indice. Ce réglage s’applique à la sélection en cours.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2541"/>
        <source>Move the paragraph of a notch towards the right (indent). This setting applies to the paragraph in which is the cursor.</source>
        <translation>Décale le paragraphe d’un cran vers la droite (indentation). Ce réglage s’applique au paragraphe dans lequel se trouve le curseur.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2542"/>
        <source>Move the paragraph of a notch towards the left (unindent). This setting applies to the paragraph in which is the cursor.</source>
        <translation>Décale le paragraphe d’un cran vers la gauche (désindentation). Ce réglage s’applique au paragraphe dans lequel se trouve le curseur.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2543"/>
        <source>Vertical alignment: top. This setting applies to the block (to the whole text).</source>
        <translation>Alignement vertical en haut. Ce réglage s’applique au bloc (à l’ensemble du texte).</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2544"/>
        <source>Vertical alignment: middle. This setting applies to the block (to the whole text).</source>
        <translation>Alignement vertical au milieu. Ce réglage s’applique au bloc (à l’ensemble du texte).</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2545"/>
        <source>Vertical alignment: bottom. This setting applies to the block (to the whole text).</source>
        <translation>Alignement vertical en bas. Ce réglage s’applique au bloc (à l’ensemble du texte).</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2546"/>
        <source>Allows you to add a dynamic variable to the text. For more information on dynamic variables see: &lt;a href=&quot;0013.html&quot;&gt;Dynamic variables&lt;/a&gt;</source>
        <translation>Permet d&apos;ajouter une variable dynamique au texte. Pour plus d&apos;informations sur les variables dynamiques voir: &lt;a href=&quot;0013.html&quot;&gt;Les variables dynamiques&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2547"/>
        <source>Background text tab</source>
        <translation>Onglet fond du texte</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2548"/>
        <source>&lt;U&gt;&lt;B&gt;&lt;I&gt;Note: This tab is available only for the title blocks (It&apos;s not available when the text applies to an image block).&lt;/I&gt;&lt;/B&gt;&lt;/U&gt;</source>
        <translation>&lt;U&gt;&lt;B&gt;&lt;I&gt;Note : Cette onglet n’est disponible que pour les blocs de type texte (il n&apos;est pas disponible pour les textes des blocks de type image).&lt;/I&gt;&lt;/B&gt;&lt;/U&gt;</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2550"/>
        <source>Allows you to define a background brush for the shape. The following options are available: </source>
        <translation>Permet de définir le type de fond à utiliser. Les types de fond suivant sont disponibles :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2551"/>
        <source>No brush</source>
        <translation>Pas de brosse</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2552"/>
        <source>The shape will have no background and will thus be totally transparent.</source>
        <translation>La forme n’aura pas de fond et sera donc totalement transparente.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2553"/>
        <source>Solid brush</source>
        <translation>Brosse unie</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2554"/>
        <source>Allows you to select a plain color.</source>
        <translation>Permet de sélectionner une couleur unie.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2555"/>
        <source>Pattern brush</source>
        <translation>Motif</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2556"/>
        <source>Allows you to select a hatched brush.</source>
        <translation>Permet de sélectionner une forme hachurée.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2557"/>
        <source>Gradient 2 colors</source>
        <translation>Dégradé à 2 couleurs</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2558"/>
        <source>Allows you to select a gradient of 2 colors.</source>
        <translation>Permet de sélectionner un dégradé de 2 couleurs.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2559"/>
        <source>Gradient 3 colors</source>
        <translation>Dégradé à 3 couleurs</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2560"/>
        <source>Allows you to select a gradient of 3 colors.</source>
        <translation>Permet de sélectionner un dégradé de 3 couleurs.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2561"/>
        <source>Image from library</source>
        <translation>Image de la librairie</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2562"/>
        <source>Allows you to select an image from the library.</source>
        <translation>Permet de sélectionner une image parmi celle de la librairie.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2563"/>
        <source>If background brush is Solid, Pattern or Gradient brush, then this line appears and allows you to select a color. (Depending on the brush you select, there will be one, two or three selectable colors.)</source>
        <translation>Si le type de fond est positionné sur Brosse unie, Motif ou Dégradé, alors cette ligne apparaît et permet de sélectionner la ou les couleurs à utiliser. (En fonction du type de fond, il y aura une, deux ou trois couleurs sélectionnables.)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2564"/>
        <source>If background brush is Pattern brush, then this line appears and allows you to select a pattern.</source>
        <translation>Si le type de fond est positionné sur Motif, alors cette ligne apparaît et permet de sélectionner un type de hachure.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2565"/>
        <source>If background brush is Gradient, then this line appears and allows you to select the gradient orientation. </source>
        <translation>Si le type de fond est positionné sur Dégradé à 2 ou 3 couleurs, alors cette ligne apparaît et permet de sélectionner l’orientation du dégradé.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2566"/>
        <source>If the Gradient has 3 colors, additional controls allow to define the position (in percentage) of the 3rd gradient color.</source>
        <translation>Si le dégradé est a 3 couleurs, des contrôles supplémentaires permettent de définir la position (en pourcentage) du 3eme points de dégradé.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2567"/>
        <source>If background brush is Image from library, then this line appears and allows you to select an image.</source>
        <translation>Si le type de fond est positionné sur Image de la librairie, alors cette ligne apparaît et permet de sélectionner une image.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2568"/>
        <source>Margins tab</source>
        <translation>Onglet marges</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2569"/>
        <source>Default margins</source>
        <translation>Marges par défaut</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2570"/>
        <source>To use predefined margins for the shape of the block. In general, these margins ensure that the text is contained in the form.</source>
        <translation>Pour utiliser les marges prédéfinies pour la forme du bloc. En général ces marges assurent que le texte est contenu dans la forme.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2571"/>
        <source>Full shape</source>
        <translation>Pas de marge (forme entière)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2572"/>
        <source>To use margins corresponding to the entire form, in fact, the selection rectangle shape regardless of the design.</source>
        <translation>Pour utiliser des marges correspondant à la forme entière, c’est à dire au rectangle de sélection de la forme sans tenir compte du dessin.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2573"/>
        <source>Custom</source>
        <translation>Personalisée</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2574"/>
        <source>To use custom margins. The following settings allow you to adjust the margins: </source>
        <translation>Pour utiliser des marges personnalisées. Les réglages suivants permettent de régler les marges :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2575"/>
        <source>Represents the horizontal position of the margins relative to the top-left corner of the block. (This value is expressed in % of the width of the block.)</source>
        <translation>Représente la position horizontal des marges par rapport au point haut-gauche du bloc. (Cette valeur est exprimée en % de la largeur du bloc.)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2576"/>
        <source>Represents the vertical position of the margins relative to the top-left corner of the block. (This value is expressed in % of the height of the block.)</source>
        <translation>Représente la position vertical des marges par rapport au point haut-gauche du bloc. (Cette valeur est exprimée en % de la hauteur du bloc.)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2577"/>
        <source>Represents the width of the margins. (This value is expressed in % of the width of the block.)</source>
        <translation>Représente la largeur des marges. (Cette valeur est exprimée en % de la largeur du bloc.)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2578"/>
        <source>Represents the height of the margins. (This value is expressed in % of the height of the block.)</source>
        <translation>Représente la hauteur des marges. (Cette valeur est exprimée en % de la hauteur du bloc.)</translation>
    </message>
</context>
<context>
    <name>0121</name>
    <message>
        <location filename="fake/fake.cpp" line="2579"/>
        <source>Select transition duration for a set of slides</source>
        <translation>Définir la durée des transitions pour un groupe de diapositive</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2580"/>
        <source>This dialog allows you to define the transition duration for a set of slides:</source>
        <translation>Cette boîte de dialogue vous permet de définir la durée des transitions pour une série de diapositives:</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2581"/>
        <source>Duration</source>
        <translation>Durée</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2582"/>
        <source>Define the animation duration.</source>
        <translation>Définir la durée de l&apos;animation.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2583"/>
        <source>When you click the OK button, the new transition duration is applied to all the slides that were selected. </source>
        <translation>Quand vous cliquez sur le bouton OK, la nouvelle durée de transition est appliquée à toutes les diapositives qui ont été sélectionnées.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2584"/>
        <source>This function can not be used to delete or change the slide&apos;s transition. </source>
        <translation>Cette fonction ne peut pas être utilisée pour supprimer ou modifier la transition de la diapositive.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2585"/>
        <source>If it&apos;s what you want, then call the context transitions menu by right clicking on one of the slides of the selection from the &lt;a href=&quot;0023.html&quot;&gt;timeline&lt;/a&gt; and then select &quot;Modify the transition for all the slides of the selection&quot; option.</source>
        <translation>Si c&apos;est cela que vous voulez, appeler le menu contextuel des transitions en effectuant un clic droit sur ​​l&apos;une des diapositives de la sélection dans la &lt;a href=&quot;0023.html&quot;&gt;barre de temps&lt;/a&gt;, puis sélectionner l&apos;option &quot;Modifier la transition pour un groupe de diapositives&quot;.</translation>
    </message>
</context>
<context>
    <name>0122</name>
    <message>
        <location filename="fake/fake.cpp" line="2586"/>
        <source>Transition properties</source>
        <translation>Propriétés de la transition</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2587"/>
        <source> This dialog allows you to define the entering transition for a slide. </source>
        <translation> La boite « Propriétés de la transition entrante » permet de régler les transitions entrantes des diapositives.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2588"/>
        <source>It shows a preview of the available transitions by transition family. </source>
        <translation>Cette boite de dialogue affiche une prévisualisation des transitions disponibles par famille de transition. </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2589"/>
        <source>Remark : In case this dialog is opened for a multiple slide selection, it&apos;s the first slide of the selection that is used for the preview. </source>
        <translation>Note : Dans le cas où cette boite est appelée pour une sélection multiple de diapositive, c’est la première diapositive de la sélection qui est utilisée pour la prévisualisation.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2590"/>
        <source>Transition type</source>
        <translation>Type de transition</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2591"/>
        <source>Allows you to select a transition family: </source>
        <oldsource>Allows you to select a transition family : </oldsource>
        <translation>Permet de sélectionner une famille de transition :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2592"/>
        <source>No transition</source>
        <translation>Aucun</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2593"/>
        <source>No transition: The new slide immediately replaces the old one. </source>
        <oldsource>No transition : The new slide immediately replaces the old one. </oldsource>
        <translation>Pas de transition : La diapositive entrante remplace instantanément la diapositive sortante.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2594"/>
        <source>Note that this also deactivates:</source>
        <translation>A noter que dans ce cas, cela désactive également :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2595"/>
        <source>Sound fades (The playlist of the new slide immediately replaces that of the old one)</source>
        <translation>Les fondus sonores (La liste de lecture musicale de la diapositive entrante remplace instantanément la liste de lecture de la diapositive sortante)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2596"/>
        <source>Background transitions</source>
        <translation>Les transitions de fond d’écran</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2597"/>
        <source>Basic</source>
        <translation>Basic</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2598"/>
        <source>Dissolve effect: The slide appears gradually, with gradually increasing opacity.</source>
        <oldsource>Dissolve effect : The slide appears gradually, with gradually increasing opacity.</oldsource>
        <translation>Effet de fondu : La diapositive apparaît progressivement : son opacité augmente progressivement.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2599"/>
        <source>Scripted transition</source>
        <translation>Transition programmée</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2600"/>
        <source>Zoom: The new slide appears by getting bigger while the old slide disappears with a dissolve effect. </source>
        <oldsource>Zoom : The new slide appears by getting bigger while the old slide disappears with a dissolve effect. </oldsource>
        <translation>Zoom : La diapositive entrante apparaît en s’agrandissant pendant que la diapositive sortante disparaît avec un effet de fondu.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2601"/>
        <source>Slide: The new slide glides onto the old slide which disappears with a dissolve effect. </source>
        <oldsource>Slide : The new slide glides onto the old slide which disappears with a dissolve effect. </oldsource>
        <translation>Glissement : La diapositive entrante glisse sur la diapositive sortante qui elle même disparaît avec un effet de fondu.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2602"/>
        <source>Push: The new slide takes the place of the old slide by pushing it aside.</source>
        <oldsource>Push : The new slide takes the place of the old slide by pushing it aside.</oldsource>
        <translation>Pousseur : La diapositive entrante prend la place de la diapositive sortante en la poussant.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2603"/>
        <source>LUMA transition</source>
        <translation>Transition LUMA</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2604"/>
        <source>The animation is based on a luminance mask : the darker the points in the mask, the faster the corresponding points in the new slide replace those in the old slide.</source>
        <translation>L’animation est basée sur un masque de luminance : Plus les points sont sombres dans le masque et plus vite les points correspondant de la diapositive entrante prennent la place des points correspondant de la diapositive sortante.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2605"/>
        <source>Speed wave</source>
        <translation>Courbe de vitesse</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2606"/>
        <source>Allows you to select a speed curve to apply to the transition</source>
        <translation>Permet de sélectionner une courbe de vitesse à appliquer à la transition</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2607"/>
        <source>Duration</source>
        <translation>Durée</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2608"/>
        <source>Allows you to define the duration of the animation. </source>
        <translation>Permet de définir la durée de l’animation.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2609"/>
        <source>The possible choices are of 0,5 seconds (very fast) to 10 seconds (very slow)</source>
        <translation>Les choix possibles vont de 0,5 secondes (très rapide) à 10 secondes (très lent)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2610"/>
        <source>See also</source>
        <translation>Voir aussi</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2611"/>
        <source>Description of LUMA</source>
        <translation>Explications sur les LUMA</translation>
    </message>
</context>
<context>
    <name>0123</name>
    <message>
        <location filename="fake/fake.cpp" line="2612"/>
        <source>Add or modify a location</source>
        <translation>Ajouter ou modifier une localisation</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2613"/>
        <source> This dialog allows you to define a location using Google Maps. </source>
        <translation> Cette boîte de dialogue vous permet de définir une localisation en utilisant Google Maps. </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2616"/>
        <source>Google address</source>
        <translation>Adresse Google</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2617"/>
        <source>Enter the postal adress to find in this zone.</source>
        <translation>Entrez l&apos;adresse postal à trouver dans cette zone.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2618"/>
        <source>When you press the Enter key, a search is made using Google Maps and the addresses found are used to fill the list.</source>
        <translation>Lorsque vous appuyez sur la touche Entrée, une recherche est faite en utilisant Google Maps et les adresses trouvées sont utilisés pour remplir la liste.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2619"/>
        <source>Then select the correct address in the list</source>
        <translation>Ensuite, sélectionnez la bonne adresse dans la liste</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2620"/>
        <source>Open the favorite menu: </source>
        <translation>Ouvre le menu des favoris : </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2621"/>
        <source>Add to favorite: Adds the current location to the list.</source>
        <translation>Ajouter aux favoris: Ajoute l&apos;emplacement actuel à la liste.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2622"/>
        <source>Update this favorite: Update the favorite using current settings.</source>
        <translation>Mettre à jour ce favori: Mettre à jour le favori avec les réglages actuels.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2623"/>
        <source>Remove this favorites: Remove the favorite from the list</source>
        <translation>Supprimer ce favoris: Retirer le favori de la liste</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2624"/>
        <source>The list of the favourite: Use a favorite to fill the dialog box fields.</source>
        <translation>La liste des favoris: Utiliser un favori pour remplir les champs de la boîte de dialogue.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2625"/>
        <source>Friendly address</source>
        <translation>Adresse</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2626"/>
        <source>Enter the address in a more readable form. This form will be used to display the marker.</source>
        <translation>Entrez l&apos;adresse sous une forme plus lisible. Cette forme sera utilisée pour afficher le marqueur.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2614"/>
        <source>Friendly name</source>
        <translation>Nom</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2615"/>
        <source>Enter a name for this location. This name will be used to display the marker.</source>
        <translation>Entrez un nom pour cette localisation. Ce nom sera utilisé pour afficher le marqueur.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2627"/>
        <source>Icon</source>
        <translation>Icône</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2628"/>
        <source>Select an image to be used as icon to display the marker.</source>
        <translation>Sélectionner une image à utiliser comme icône à afficher dans le marqueur.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2629"/>
        <source> Click on the icon zone or on the </source>
        <translation> Cliquer sur l&apos;icône ou sur le bouton </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2630"/>
        <source> button to select an image and edit it.</source>
        <translation> pour sélectionner l&apos;image et la modifier.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2631"/>
        <source> Click on this </source>
        <translation> Cliquer sur le bouton </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2632"/>
        <source> button to clear the icon.</source>
        <translation> pour supprimer l&apos;icône.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2633"/>
        <source>Map zone</source>
        <translation>Zone carte</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2634"/>
        <source>Click on a point on the map zone to select it.</source>
        <translation>Cliquez sur un point de la carte pour sélectionner la localisation.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2635"/>
        <source>You can also use the slider and the </source>
        <translation>Vous pouvez également utiliser le curseur et les boutons </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2636"/>
        <source> and </source>
        <translation> et </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2637"/>
        <source> buttons to modify the zoom level.</source>
        <translation> pour modifier le niveau de zoom.</translation>
    </message>
</context>
<context>
    <name>0124</name>
    <message>
        <location filename="fake/fake.cpp" line="2638"/>
        <source>Cut a sound file</source>
        <translation>Couper un fichier musical</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2639"/>
        <source>This dialog allows you to cut a sound file.</source>
        <oldsource> This dialog allows you to Cut a sound file. </oldsource>
        <translation>Cette boite de dialogue vous permet de découper un fichier son.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2640"/>
        <source>The progress bar</source>
        <translation>La barre de progression</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2641"/>
        <source>Displays as follows: </source>
        <translation>Affiche respectivement :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2642"/>
        <source>The wave form of the sound is displayed under a white background.</source>
        <oldsource>The wave form of the sound is dispayed under a white background.</oldsource>
        <translation>La courbe du son du fichier musical est affichée sur un fond blanc.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2643"/>
        <source>The ruler representing the duration of the sound file is dispayed under a black background. Remark than the length of the ruler is increased in proportion to the duration of the sound file.</source>
        <translation>La règle représentant la durée du fichier son est affichée sous un fond noir. Remarquez que la longueur de la règle est proportionnelle à la durée du fichier vidéo.</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2644"/>
        <source>The blue part, on wave form and ruler, represents the part of the sound file which is selected (which will be used in the assembly).</source>
        <translation>La partie en bleu, sur la courbe de son et sur la règle, réprésente la partie du fichier musical qui est sélectionnée (celle qui sera utilisée dans le montage).</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2645"/>
        <source> This button starts playback. Click again on this button to pause. </source>
        <translation> Ce bouton permet de lancer la lecture de la vidéo. Cliquer encore sur ce bouton pour passer la lecture en pause. </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2646"/>
        <source>You can move with the mouse the </source>
        <translation>Vous pouvez déplacer à la souris la poignée </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2647"/>
        <source> handle, on the progress bar, to move the current position</source>
        <translation>, sur la barre de progression, pour déplacer la position courante</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2648"/>
        <source>You can move with the mouse the two </source>
        <translation>Vous pouvez déplacer à la souris les deux poignées </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2649"/>
        <source> and </source>
        <translation> et </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2650"/>
        <source> handles, on the progress bar, to move the Start and End positions</source>
        <translation>, sur la barre de progression, pour déplacer les positions de début et de fin</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2651"/>
        <source>The working range</source>
        <translation>La zone d’action</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2652"/>
        <source> Positions the cursor at the starting point</source>
        <translation> Positionne le curseur sur la position de départ</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2653"/>
        <source> Uses the current cursor position as starting point (carries out an edit)</source>
        <translation> Utilise la position actuelle du curseur comme position de départ (remplie la zone d’édition)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2654"/>
        <source> Positions the cursor at the end point</source>
        <translation> Positionne le curseur sur la position de fin</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2655"/>
        <source> Uses the current cursor position as end point (carries out an edit)</source>
        <translation> Utilise la position actuelle du curseur comme position de fin (remplie la zone d’édition)</translation>
    </message>
</context>
<context>
    <name>QHP</name>
    <message>
        <location filename="fake/fake.cpp" line="2666"/>
        <source>Welcome to the ffDiaporama WIKI</source>
        <translation>Bienvenue dans le WIKI de ffDiaporama</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2667"/>
        <source>How ffDiaporama works</source>
        <translation>Principes de fonctionnement de ffDiaporama</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2668"/>
        <source>Functional principles</source>
        <translation>Principes de fonctionnement de ffDiaporama</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2669"/>
        <source>Predefined title slide</source>
        <translation>Diapositives titre prédéfinies</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2670"/>
        <source>The Visible property of blocks and the management of the breaks</source>
        <translation>La propriété « Visible » des blocs et la gestion des pauses</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2671"/>
        <source>All shots regulations versus current shot regulations</source>
        <translation>Les réglages pour tous les plans et les réglages pour le plan en cour</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2672"/>
        <source>Style sheets</source>
        <translation>Les feuilles de style</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2673"/>
        <source>Dynamic variables</source>
        <translation>Les variables dynamiques</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2674"/>
        <source>Interface description</source>
        <translation>Description de l’interface</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2675"/>
        <source>The main window</source>
        <translation>La fenêtre principale</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2676"/>
        <source>The toolbar</source>
        <translation>La barre d’outils</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2677"/>
        <source>The timeline</source>
        <translation>La barre de temps</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2678"/>
        <source>The multimedia file browser</source>
        <translation>L’explorateur de fichiers multimédia</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2680"/>
        <source>Configuration dialog boxes</source>
        <translation>Boites de dialogues de configuration</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2686"/>
        <source>Editing dialog boxes</source>
        <translation>Boites de dialogues d&apos;édition</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2697"/>
        <source>Add or modify a location</source>
        <translation>Ajouter ou modifier une localisation</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2698"/>
        <source>Cut a sound file</source>
        <translation>Couper un fichier musical</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2699"/>
        <source>Dialog boxes related to the project</source>
        <translation>Boites de dialogues relatives au projet</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2703"/>
        <source>Various dialog boxes</source>
        <translation>Boites de dialogues diverses</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2708"/>
        <location filename="fake/fake.cpp" line="2709"/>
        <source>Rendering videos</source>
        <translation>Générer des films</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2710"/>
        <source>Smartphones and tablets</source>
        <translation>Smartphone et tablettes</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2711"/>
        <source>Portable devices</source>
        <translation>Équipements portables</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2712"/>
        <source>Multimedia system (Home cinema)</source>
        <translation>Système multimédia de salon</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2713"/>
        <source>For the WEB</source>
        <translation>Pour Internet</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2714"/>
        <source>Video codec</source>
        <translation>Codec vidéo</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2715"/>
        <source>Audio codec</source>
        <translation>Codec audio</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2716"/>
        <source>Containers</source>
        <translation>Containers</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2717"/>
        <source>Video standards and resolutions</source>
        <translation>Standards et résolutions des vidéos</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2718"/>
        <source>File attachments (Thumbnails, nfo, etc...)</source>
        <translation>Fichiers joints (Vignettes, nfo, etc...)</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2724"/>
        <source>Types of objects in ffDiaporama</source>
        <translation>Types d&apos;objets utilisables dans ffDiaporama</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2719"/>
        <source>Technical information on ffDiaporama</source>
        <translation>Informations techniques sur ffDiaporama</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2720"/>
        <source>ffDiaporama command line arguments</source>
        <translation>Les paramètres de la ligne de commande</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2721"/>
        <source>ffDiaporama project files</source>
        <translation>Projet ffDiaporama</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2722"/>
        <source>The configuration files for ffDiaporama</source>
        <translation>Les fichiers de configuration de ffDiaporama</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2723"/>
        <source>XBMC nfo files</source>
        <translation>Fichier nfo pour XBMC</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2679"/>
        <source>Dialog boxes</source>
        <translation>Les boites de dialogue</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2681"/>
        <source>Application options</source>
        <translation>Options de l&apos;application</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2682"/>
        <source>Manage devices</source>
        <translation>Gérer les profils de génération</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2687"/>
        <source>Add or modify a predefined title slide</source>
        <translation>Ajouter ou éditer une diapositive titre prédéfinie</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2690"/>
        <source>Background properties</source>
        <translation>Propriétés de l&apos;arrière plan</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2691"/>
        <source>Chapter properties</source>
        <translation>Propriétés du chapitre</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2683"/>
        <source>Check configuration</source>
        <translation>Vérification de la configuration</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2702"/>
        <source>Export project</source>
        <translation>Exporter le projet</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2700"/>
        <source>Project properties</source>
        <translation>Propriétés du projet</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2704"/>
        <source>Select files</source>
        <translation>Sélectionner des fichiers</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2695"/>
        <source>Correct, reframe or cut image or video</source>
        <translation>Recadrer, corriger et/ou couper une image ou une vidéo</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2705"/>
        <source>File information</source>
        <translation>Information sur le fichier</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2706"/>
        <source>Manage favorite</source>
        <translation>Gérer les favoris</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2707"/>
        <source>Manage style</source>
        <translation>Gestion des styles</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2692"/>
        <source>Music properties</source>
        <translation>Propriétés de la musique</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2701"/>
        <source>Render video</source>
        <translation>Générer le film</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2684"/>
        <source>Ruler properties</source>
        <translation>Propriétés des guides</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2685"/>
        <source>Edit thumbnail model</source>
        <translation>Modifier un modèle de vignette</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2689"/>
        <source>Set first shot duration for a set of slides</source>
        <translation>Définir la durée du 1er plan pour un groupe de diapositive</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2688"/>
        <source>Slide properties</source>
        <translation>Propriétés de la diapositive</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2696"/>
        <source>Edit text</source>
        <translation>Editer le texte</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2694"/>
        <source>Select transition duration for a set of slides</source>
        <translation>Définir la durée des transitions pour un groupe de diapositive</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2693"/>
        <source>Transition properties</source>
        <translation>Propriétés de la transition</translation>
    </message>
</context>
<context>
    <name>main</name>
    <message>
        <location filename="fake/fake.cpp" line="2656"/>
        <source>Welcome to the ffDiaporama WIKI</source>
        <translation>Bienvenue dans le WIKI de ffDiaporama</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2657"/>
        <source>This documentation is divided into the followed themes:</source>
        <translation>Cette documentation est divisée selon les thèmes suivant :</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2658"/>
        <source>How ffDiaporama works</source>
        <oldsource>&lt;a href=&quot;0010.html&quot;&gt;How ffDiaporama works&lt;/a&gt;</oldsource>
        <translation>Principes de fonctionnement de ffDiaporama</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2659"/>
        <source>Interface description</source>
        <oldsource>&lt;a href=&quot;0020.html&quot;&gt;Interface description&lt;/a&gt;</oldsource>
        <translation>Description de l’interface</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2660"/>
        <source>Rendering videos</source>
        <translation>Générer des films</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2661"/>
        <source>Technical information on ffDiaporama</source>
        <oldsource>Types of objects in ffDiaporama</oldsource>
        <translation>Informations techniques sur ffDiaporama</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2662"/>
        <source>Other elements of documentation are available on the </source>
        <translation>D&apos;autre documentations sont disponibles sur </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2663"/>
        <source>ffDiaporama Web site</source>
        <translation>le site Web de ffDiaporama</translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2664"/>
        <source>Finally, you&apos;ll also find help on the </source>
        <translation>Enfin, vous trouverez également de l&apos;aide sur </translation>
    </message>
    <message>
        <location filename="fake/fake.cpp" line="2665"/>
        <source>ffDiaporama forum</source>
        <translation>le forum de ffDiaporama</translation>
    </message>
</context>
</TS>
