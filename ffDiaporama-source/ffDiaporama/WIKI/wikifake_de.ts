<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="de_DE">
<context>
    <name>0010</name>
    <message>
        <source>How ffDiaporama works</source>
        <translation>Wie ffDiaporama arbeitet</translation>
    </message>
    <message>
        <source>Functional principles</source>
        <translation>Grundsätzliche Funktionalität</translation>
    </message>
    <message>
        <source>Predefined title slide</source>
        <translation>Vordefinierte Titel</translation>
    </message>
    <message>
        <source>The &quot;Visible&quot; property of blocks and the management of the breaks</source>
        <translation>Die “Sichtbar” Eigenschaft von Blöcken und die Verwaltung von Pausen</translation>
    </message>
    <message>
        <source>All shots regulations versus current shot regulations</source>
        <translation>“Alle Aufnahmen” Einstellungen versus “Aktuelle Aufnahme” Einstellungen</translation>
    </message>
    <message>
        <source>Style sheets</source>
        <translation>Stilvorlagen</translation>
    </message>
    <message>
        <source> This section contains general information on the concepts and methods of use of ffDiaporama </source>
        <translation> Dieser Abschnitt enthält grundsätzliche Informationen über die Arbeitsweise und die Anwendung von ffDiaporama </translation>
    </message>
    <message>
        <source>Index</source>
        <translation>Inhalt</translation>
    </message>
    <message>
        <source>Dynamic variables</source>
        <translation>Dynamische Variablen</translation>
    </message>
</context>
<context>
    <name>0011</name>
    <message>
        <source>Functional principles</source>
        <translation>Grundsätzliche Funktionalität</translation>
    </message>
    <message>
        <source>The main control element of ffDiaporama is the timeline. The timeline lists the slides which compose the project.</source>
        <translation>Das Hauptkontrollelement in ffDiaporama ist die Zeitleiste. In dieser sind alle Aufnahmen ersichtlich, die zu einem Projekt gehören .</translation>
    </message>
    <message>
        <source>It consists of 3 tracks: </source>
        <translation>Die Zeitleiste setzt sich aus drei Spuren zusammen:</translation>
    </message>
    <message>
        <source>the background track</source>
        <translation>Die Spur für den Hintergrund (oberes Drittel)</translation>
    </message>
    <message>
        <source>the mounting track</source>
        <translation>die Montagespur (mittig)</translation>
    </message>
    <message>
        <source>and the music track.</source>
        <translation>und die Musikspur (unteres Drittel).</translation>
    </message>
    <message>
        <source>The slides</source>
        <translation>Die Dias</translation>
    </message>
    <message>
        <source>Slides are shown one after another, in the order in which they appear in the time line.</source>
        <translation>Dias werden in der gezeigten Reihenfolge der Zeitleiste nacheinander dargestellt.</translation>
    </message>
    <message>
        <source>The following diagram shows how slides function:</source>
        <translation>Das folgende Diagramm zeigt, wie die Darstellung der Dias abläuft:</translation>
    </message>
    <message>
        <source>The upper part of the diagram represents four slides: A, B, C and D. </source>
        <translation>Im oberen Teil des Diagrammes sind die vier Dias A, B, C, D zu sehen.</translation>
    </message>
    <message>
        <source>Each slide possesses an entering transition (symbolized on the diagram by a small rectangle labelled T). The transitions can have different durations (symbolized on the diagram by the lengths TA&apos;, TB&apos;, etc.): It is possible to define the duration of the entering transition for each slide separately (or to indicate no transition: duration=0).</source>
        <translation>Jedes Dia besitzt einen eingehenden und ausgehenden Übergang (im Diagramm mit T dargestellt). Die Übergänge können unterschiedlich lange sein (dargestellt im Diagramm durch die Längen TA´,TB´,etc.): Jedes Dia kann eine unterschiedliche Dauer erhalten (oder auch eine Dauer von 0, was einem sofortigem Einblenden entspricht; duration=0).</translation>
    </message>
    <message>
        <source>Each slide possesses a duration which is appropriate for it (symbolized on the diagram by the lengths B&apos;, C&apos;, etc.): Some last only a few seconds while others can last several minutes. The durations are expressed in seconds but are not necessarily whole numbers: a slide might last 12.234 seconds.</source>
        <translation>Jedes Dia besitzt eine Dauer welche für dieses Dia angemessen ist (dargestellt im Diagramm durch die Längen B’, C’, etc.): Dies kann für ein Dia ein paar Sekunden sein und für ein anderes eventuell ein paar Minuten. Die Dauer ist zwar in Sekunden angegeben, ein Dia kann aber auch eine Dauer von 12.234 Sekunden haben.</translation>
    </message>
    <message>
        <source>Each slide is a composite, an assembly of one or more multimedia elements which are animated over time. The animation is realized through shots.</source>
        <translation>Jedes Dia ist eine Zusammenstellung von einem oder mehreren Multimedia Element(en), welche animiert im richtigen Zeitverlauf zu einer einzigen Bildkomposition verflochten wird(werden).</translation>
    </message>
    <message>
        <source>Each slide can define a new background (that is shown under the multimedia elements of the slide if they don&apos;t fill out the whole screen).</source>
        <translation>Jedes Dia kann einen neu definierten Hintergrund erhalten (Dieser wird hinter einem Multimediaelement angezeigt, wenn es nicht den gesamten Bildschirm ausfüllt).</translation>
    </message>
    <message>
        <source>Each slide can define a new musical play-list.</source>
        <translation>Jedes Dia kann eine eine neue Musikliste oder ein einzelnes neues Musikstück erhalten.</translation>
    </message>
    <message>
        <source>Slides which do not define a background use the background defined in a previous slide. So in the following example: </source>
        <translation>Dias, die keine Definition des Hintergrundes haben, erhalten ihren Hintergrund vom vorherigem Dia. Zum Beispiel: </translation>
    </message>
    <message>
        <source>Slide 1: Defines a background</source>
        <translation>Dia 1 : Bekommt einen definierten Hintergrund</translation>
    </message>
    <message>
        <source>Slide 2: Does not define a background and therefore uses the background defined by slide 1</source>
        <translation>Dia 2 : Hat keinen eigenen Hintergrund und erhält somit den Hintergrund von Dia 1</translation>
    </message>
    <message>
        <source>Slide 3: Does not define a background and therefore uses the background defined by slide 1</source>
        <translation>Dia 3 : Hat keinen eigenen Hintergrund und erhält somit den Hintergrund von Dia 1</translation>
    </message>
    <message>
        <source>Slide 4: Defines a background</source>
        <translation>Dia 4 : Bekommt einen eigenen Hintergrund</translation>
    </message>
    <message>
        <source>Slide 5: Does not define a background and therefore uses the background defined by slide 4</source>
        <translation>Dia 5 : Hat keinen eigenen Hintergrund und erhält somit den Hintergrund von Dia 4</translation>
    </message>
    <message>
        <source>The same principle applies to the musical play-lists. As long as slides do not define a new play-list, they use the last defined play-list.</source>
        <translation>Dasselbe Prinzip gilt für Musik bzw. Musikabspiellisten. Solange ein Dia keine neue Abspielliste definiert, wird die Liste des letzten vorhergehenden Dias, welches eine Abspielliste besitzt, verwendet (solange das Musikstück in seiner Dauer selbst ausreicht…).</translation>
    </message>
    <message>
        <source>Remarks:</source>
        <translation>Anmerkung:</translation>
    </message>
    <message>
        <source>The total duration of the project is not equal to the sum of the durations of the slides because the transitions make the slides overlap: Two slides of 10 seconds, each with a transition of 1 second, will give a total duration for the project of 19 seconds (and not 20 seconds)!</source>
        <translation>Die Gesamtdauer eines Projektes ist nicht einfach nur die Summe der einzelnen Überblendungen, da sich die einzelnen Übergänge überlagern. Zwei Aufnahmen mit jeweils 10 Sekunden Dauer und einer Überblendung von 1 Sekunde, haben eine Gesamtdauer von 19 Sekunden (und nicht 20 Sekunden)!</translation>
    </message>
    <message>
        <source>Shots and blocks</source>
        <translation>Aufnahmen und Blöcke</translation>
    </message>
    <message>
        <source>The lower part of the diagram represents the composition of slide C. </source>
        <translation>Der untere Teil des Diagrammes stellt das Dia C dar.</translation>
    </message>
    <message>
        <source>Each slide comprises one or more shots. The shots are represented on the diagram by rectangles C1, C2, C3, etc...</source>
        <translation>Jedes Dia beinhaltet eine oder mehrere Aufnahmen. Die Aufnahmen sind im Diagramm als C1, C2, C3, etc. dargestellt …</translation>
    </message>
    <message>
        <source>Each shot has its own duration (symbolized on the diagram by the lengths C1 &apos;, C2 &apos;, C3 &apos;, etc.). Some shots can last only seconds while others can last several minutes. Some shots can have a duration of zero. (The durations are expressed in seconds but are not necessarily whole numbers: A shot can very well last 12.234 seconds).</source>
        <translation>Jede Aufnahme hat ihre eigene Dauer (dargestellt durch die Länge C1‘, C2‘, C3‘, etc. im Diagramm). Einige Aufnahmen können nur Sekunden angezeigt werden, andere sind unter Umständen für Minuten zu sehen. Manche Aufnahmen können auch eine Dauer von 0 haben. (Obwohl die Dauer in Sekunden angezeigt wird, kann die Dauer auch 12.234 Sekunden betragen).</translation>
    </message>
    <message>
        <source>The shots can contain several multimedia objects. The multimedia objects are integrated into blocks which can be of three types: title (containing only text), images (or photos), or video.</source>
        <translation>Jede Aufnahme kann mehrere Multimediaobjekte beinhalten. Die Multimediaobjekteobjekte sind in Blöcken zusammengefasst, welche aktuell drei verschiedene Typen aufnehmen können: Titel (nur Text), Bilder (oder Fotos) und Videos.</translation>
    </message>
    <message>
        <source>The blocks define where and how the multimedia object appears on the screen. Each block can have a different framing that defines what is visible from the multimedia object within the block.</source>
        <translation>Ein Block definiert, wo und wie ein Multimediaobjekt am Bildschirm erscheint. Jeder Block kann unterschiedlich beschnitten sein, je nachdem was von diesem Multimediaobjekt gesehen werden soll.</translation>
    </message>
    <message>
        <source>The background of the shots is transparent. This means that if the image does not fill the whole screen, the background will appear.</source>
        <translation>Die Aufnahmen sind transparent. Wenn die Aufnahme nicht bildfüllend ist, ist der Hintergrund zu sehen.</translation>
    </message>
    <message>
        <source>The shots define the arrangement of blocks (multimedia objects) at any given moment.</source>
        <translation>Die Aufnahmen definieren die Anordnung von Blöcken (Multimediaobjekte) zu jedem beliebigen Zeitpunkt.</translation>
    </message>
    <message>
        <source>The shot animations are generated by the transformation of these arrangements from one shot to another.</source>
        <translation>Die Animationen der Aufnahmen werden aus den einzelnen Übergängen in ihrer Anordnung von einer Aufnahme zur nächsten generiert.</translation>
    </message>
    <message>
        <source>The lengths of the shot animations are defined by the shot durations.</source>
        <translation>Die Länge der Animation einer Aufnahme ist durch die Durchlaufzeiten der Aufnahme definiert.</translation>
    </message>
    <message>
        <source>Specifically, if in the foreground, a block containing an image occupies the whole screen, and then in the following shot the same block occupies only a small part of the screen, then the animation will consist of the transformation of the image from the whole screen into that small part of the screen.</source>
        <translation>Im Besonderen, wenn ein Bild den gesamten Bildschirm im Vordergrund einnimmt und in der nächsten Aufnahme nur noch einen Teil des Bildschirms, dann wird eine Animation generiert, welche die Umwandlung vom gesamten Bild der ersten Aufnahme zum verkleinerten Bild der folgenden Aufnahme darstellt.</translation>
    </message>
    <message>
        <source>Example:</source>
        <translation>Beispiel:</translation>
    </message>
    <message>
        <source>Let&apos;s have 3 shots within a slide:</source>
        <translation>Betrachten wir ein Beispielt mit drei Aufnahmen innerhalb eins Dias:</translation>
    </message>
    <message>
        <source>Shot 1: Image using the whole screen: Duration=2 seconds.</source>
        <translation>Aufnahme 1: Das Bild verwendet den gesamten Bildschirm für eine Dauer von 2 Sekunden.</translation>
    </message>
    <message>
        <source>Shot 2: Image using only the bottom right screen quarter: Duration 3 seconds.</source>
        <translation>Aufnahme 2 (blau umrandet): Das Bild verwendet nur noch das rechte untere Viertel des Bildschirmes für eine Dauer von 3 Sekunden.</translation>
    </message>
    <message>
        <source>Shot 3: Image again using the whole screen: Duration=2 seconds.</source>
        <translation>Aufnahme 3: Das Bild verwendet wieder den gesamten Bildschirm für eine Dauer von 2 Sekunden.</translation>
    </message>
    <message>
        <source>Result:</source>
        <translation>Ergebnis:</translation>
    </message>
    <message>
        <source>The image will be shown on the whole screen for 2 seconds, will shrink gradually over 3 seconds towards the right lower quarter of the screen, and then will grow again for 2 seconds until it once more occupies the whole screen.</source>
        <translation>Das Bild wird bildfüllend für 2 Sekunden dargestellt, schrumpft allmählich in das rechte untere Viertel zusammen, um nach 2 Sekunden wieder zu seiner vollen bildschirmfüllenden Größe anzuwachsen.</translation>
    </message>
    <message>
        <source>The slide will end as soon as the image has reached the position defined in shot 3.</source>
        <translation>Das Dia endet sobald das Bild die Position, die in der Aufnahme 3 angegeben wurde, erreicht hat.</translation>
    </message>
    <message>
        <source>The transformations are gradual: in the example you will see the image being gradually reduced.</source>
        <translation>Die Übergänge sind schrittweise: Am Beispiel werden Sie sehen, dass das Bild schrittweise verkleinert wird.</translation>
    </message>
    <message>
        <source>The transformations are made over the whole duration of the following shot.</source>
        <translation>Die Übergänge werden über die gesamt Dauer der nachfolgenden Aufnahme durchgeführt.</translation>
    </message>
    <message>
        <source>The framing definition of the objects in each block can vary from one shot to another. The following example shows three different definitions from the same block:</source>
        <translation>Die Definition eines Objektes in einem Block kann von einer Aufnahme zur nächsten unterschiedlich sein. Das folgende Beispiel zeigt drei unterschiedliche Definitionen desselben Blocks:</translation>
    </message>
    <message>
        <source>1st shot: The image is complete.</source>
        <translation>1. Aufnahme: Das Bild ist bildfüllend.</translation>
    </message>
    <message>
        <source>2nd shot: The image is re-framed on the statue.</source>
        <translation>2. Aufnahme: Das Bild wird auf einen Ausschnitt mit der Statue beschnitten.</translation>
    </message>
    <message>
        <source>3rd shot: The image is re-framed on the pedestrians.</source>
        <translation>3. Aufnahme: Das Bild wird auf einen Ausschnitt mit den Spaziergängern beschnitten.</translation>
    </message>
    <message>
        <source>If we apply these framing definitions to the previous 3 shots: </source>
        <translation>Wenn wir diese drei  Definitionen auf die Aufnahmen aus dem vorherigen Beispiel anwenden:</translation>
    </message>
    <message>
        <source>The complete image will be shown on all the screen for 2 seconds, then it will be reduced gradually towards the right lower quarter of the screen over 3 seconds while zooming in on the statue, then it will grow again over 2 seconds until it once more occupies the whole screen while the &quot;camera&quot; moves towards the pedestrians.</source>
        <translation>Das gesamte Bild wirdt für eine Dauer von 2 Sekunden angezeigt, dann schrumpft das Bild für 3 Sekunden auf den Ausschnitt der Statue in das rechte untere Bildschirmeck, um anschliessend den Ausschnitt der Spaziergänger auf den gesamten Bildschirm innerhalb von 2 Sekunden auszudehnen.</translation>
    </message>
    <message>
        <source>ffDiaporama can manage up to several hundreds slides in a single project.</source>
        <translation>ffDiaporama kann etliche Hunderte Dias in einem einzelnen Projekt verwalten.</translation>
    </message>
    <message>
        <source>Each slide can consist of tens of shots.</source>
        <translation>Jedes Dia kann zig Aufnahmen beinhalten.</translation>
    </message>
    <message>
        <source>Each slide can contain tens of blocks.</source>
        <translation>Jedes Dia kann zig Blöcke beinhalten.</translation>
    </message>
    <message>
        <source>Blocks can be visible on some shots and invisible on other.</source>
        <translation>Blöcke können auf einer Aufnahme sichtbar undr auf einer anderen Aufnahme unsichtba sein.</translation>
    </message>
</context>
<context>
    <name>0012</name>
    <message>
        <source>Predefined title slide</source>
        <translation>Vordefinierte Titel</translation>
    </message>
    <message>
        <source> Predefined title slide are complete slides including formatting and animations. </source>
        <translation> Vordefinierte Title sind komplette Dias, die Formatierungen und Animationen beinhalten. </translation>
    </message>
    <message>
        <source>The main interest of these slides is to standardize the slides within a project or across projects. </source>
        <translation>Der Hauptzweck dieser Dias liegt darin, dass die Titel innerhalb eines Projektes (oder darüber hinaus) standardisiert werden.</translation>
    </message>
    <message>
        <source>ffDiaporama included many Predefined title slides, but you can also define your own Predefined title slides. </source>
        <translation>ffDiaporama enthält bereits viele vordefinierte Titel, Sie können jedoch jederzeit auch Ihre eigenen vordefinierten Titel erstellen.</translation>
    </message>
    <message>
        <source>To do this, create a standard slide using the &lt;a href=&quot;0119.html&quot;&gt;Slide properties dialog box&lt;/a&gt; and save your slide as a model using: </source>
        <translation>Um einen vordefinierten Titel zu erstellen, verwenden Sie die &lt;a href=&quot;0119.html&quot;&gt;Diaeigenschaften Dialogbox&lt;/a&gt; und speichern Sie das Dia als Modell mittels der Funktion:</translation>
    </message>
    <message>
        <source> Save as model function.</source>
        <translation> Speichern als Modell.</translation>
    </message>
    <message>
        <source>Remarks:</source>
        <translation>Anmerkung:</translation>
    </message>
    <message>
        <source>Predefined title slides are defined according to the following three categories: </source>
        <translation>Vordefinierte Titel sindt entsprechend der drei folgenden Kategorien definier:</translation>
    </message>
    <message>
        <source>Project title</source>
        <translation>Projekttitel</translation>
    </message>
    <message>
        <source>This type of slide is usually used early in the project as the opening credits. </source>
        <translation>Diese Art von Titel wird meistens als Vorspann genutzt.</translation>
    </message>
    <message>
        <source>The texts variables that are used by the models of this slide type are based only on project information. For more information on project information, see: &lt;a href=&quot;0108.html&quot;&gt;Project properties dialog&lt;/a&gt;</source>
        <translation>Die Textvariablen, die für ein Modell dieses Diatyps verwendet werden, basieren auf den Projektinformationen. Für mehr Informationen über Projektinformationen, siehe: &lt;a href=&quot;0108.html&quot;&gt;Dialog für Projekteigenschaften&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Chapter title</source>
        <translation>Kapiteltitel</translation>
    </message>
    <message>
        <source>This type of slide is usually used several times in the project to mark the beginning of the chapter. </source>
        <translation>Diese Art von Dia wird üblicherweise für den Beginn eines neuen Kapitels verwendet.</translation>
    </message>
    <message>
        <source>The texts variables that are used by the models of this slide type are based on project information and on chapter information.</source>
        <translation>Die Textvariablen, die für ein Modell dieses Diatyps verwendet werden, basieren auf den Projekt- sowie auf den Kapitelinformationen.</translation>
    </message>
    <message>
        <source>Credit title</source>
        <translation>Titel für die Namensnennung</translation>
    </message>
    <message>
        <source>This type of slide is usually used at the end of the project as the end credits. </source>
        <translation>Diese Art von Titel wird üblicherweise am Ende eines Projekts als Abspann verwendet.</translation>
    </message>
    <message>
        <source>The texts variables that are used by the models of this slide type are generally computed. For more information on texts variables, see: &lt;a href=&quot;0013.html&quot;&gt;Dynamic variables&lt;/a&gt;</source>
        <translation>Die Textvariablen, die für ein Modell dieses Diatyps verwendet wird, sind generell berechnet. Für mehr Informationen von Textvariablen, siehe :&lt;a href=&quot;0013.html&quot;&gt;Dynamische Variablen&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Within each category, the predefined title slides are classified into the following types: </source>
        <translation>Innerhalb jeder Kategorie, werden die vordefinierten Titel in folgende Arten klassifiziert:</translation>
    </message>
    <message>
        <source>Statics models</source>
        <translation>Statische Modelle</translation>
    </message>
    <message>
        <source>This type lists statics models ie without animations.</source>
        <translation>Diese Art zeigt statische Modelle ohne Animationen.</translation>
    </message>
    <message>
        <source>Animated models</source>
        <translation>Animierte Modelle</translation>
    </message>
    <message>
        <source>This type lists animated models ie with several shots.</source>
        <translation>Diese Art zeigt animierte Modelle mit mehreren Aufnahmen.</translation>
    </message>
    <message>
        <source>Custom models</source>
        <translation>Benutzerdefinierte Modelle</translation>
    </message>
    <message>
        <source>This type lists the templates that you saved with the &lt;B&gt;&lt;I&gt;Save as model&lt;/I&gt;&lt;/B&gt; function of the &lt;a href=&quot;0119.html&quot;&gt;Slide properties&lt;/a&gt; dialog box.</source>
        <translation>Diese Art zeigt die Vorlagen die Sie mittels &lt;B&gt;&lt;I&gt;Speichern als Modell&lt;/I&gt;&lt;/B&gt; im Dialog &lt;a href=&quot;0119.html&quot;&gt;Eigenschaften Aufnahmen&lt;/a&gt; gespeichert haben.</translation>
    </message>
    <message>
        <source>It will always be possible to create slides from a model using the &lt;a href=&quot;0103.html&quot;&gt;Add or modify a predefined title slide dialog box&lt;/a&gt; then convert it to a standard slide using this function: </source>
        <translation>Es ist immer möglich, Dias aus einem Modell zu erstellen, indem man das Dialogfenster &lt;a href=&quot;0103.html&quot;&gt;Hinzufügen oder Ändern eines vordefinierten Titels&lt;/a&gt; aufruft und anschliessend in ein Standarddia konvertiert. Dies erreicht man mittels: </translation>
    </message>
    <message>
        <source> Convert to standard slide</source>
        <translation> Konvertieren zu einem Standarddia</translation>
    </message>
    <message>
        <source>The resources used by the models you create are not moved. So, if you include a photo in a model, the model will only be valid until the picture will not move. This is why it is recommended, to think resources included before creating a new model.</source>
        <translation>Die Elemente die Ihr erstelltes Modell verwendet, werden nicht verschoben. Wenn Sie anschliessend ein Bild in ein Modell integrieren, wird dieses Bild nur so lange angezeigt, wie der Speicherort unverändert bleibt. Deshalb wird empfohlen, die Elemente in ein neues Model zu integrieren, damit diese auch korrekt wiedergegeben werden, wenn sich der Speicherort verändert.</translation>
    </message>
</context>
<context>
    <name>0013</name>
    <message>
        <source>Dynamic variables</source>
        <translation>Dynamische Variablen</translation>
    </message>
    <message>
        <source>It&apos;s why variables are used in many parts of the application (slide, thumbnails, predefined titles slides, video tags, xbmc nfo, etc...)</source>
        <translation>Flexibilität ist der Grund, warum Variablen in vielen Teilen des Programmes verwendet werden (Dias, Vorschaubilder, vordefinierte Titel, Video Tags, xbmc nfo, usw...)</translation>
    </message>
    <message>
        <source>Category</source>
        <translation>Kategorie</translation>
    </message>
    <message>
        <source>Variable</source>
        <translation>Variable</translation>
    </message>
    <message>
        <source>Content</source>
        <translation>Inhalt</translation>
    </message>
    <message>
        <source>Project properties values</source>
        <translation>Wert der Projekteigenschaft</translation>
    </message>
    <message>
        <source>%PTT%</source>
        <translation>%PTT%</translation>
    </message>
    <message>
        <source>Value of the &lt;B&gt;&lt;I&gt;Project title&lt;/I&gt;&lt;/B&gt; field of the &lt;a href=&quot;0108.html&quot;&gt;Project properties&lt;/a&gt;</source>
        <translation>Inhalt vom Feld &lt;B&gt;&lt;I&gt;Projekttitel&lt;/I&gt;&lt;/B&gt; aus den &lt;a href=&quot;0108.html&quot;&gt;Projekteigenschaften&lt;/a&gt;</translation>
    </message>
    <message>
        <source>%PAU%</source>
        <translation>%PAU%</translation>
    </message>
    <message>
        <source>Value of the &lt;B&gt;&lt;I&gt;Project author&lt;/I&gt;&lt;/B&gt; field of the &lt;a href=&quot;0108.html&quot;&gt;Project properties&lt;/a&gt;</source>
        <translation>Inhalt vom Feld &lt;B&gt;&lt;I&gt;Projektautor&lt;/I&gt;&lt;/B&gt;aus den &lt;a href=&quot;0108.html&quot;&gt;Projekteigenschaften&lt;/a&gt;</translation>
    </message>
    <message>
        <source>%PAI%</source>
        <translation>%PAI%</translation>
    </message>
    <message>
        <source>Value of the &lt;B&gt;&lt;I&gt;Project author&lt;/I&gt;&lt;/B&gt; field of the &lt;a href=&quot;0108.html&quot;&gt;Project properties&lt;/a&gt; displayed as &lt;U&gt;Author presents&lt;/U&gt;</source>
        <translation>Inhalt vom Feld &lt;B&gt;&lt;I&gt;Projekt Autor&lt;/I&gt;&lt;/B&gt; aus den &lt;a href=&quot;0108.html&quot;&gt;Projekteigenschaften&lt;/a&gt; angezeigt als &lt;U&gt;Autor präsentiert&lt;/U&gt;</translation>
    </message>
    <message>
        <source>%PAP%</source>
        <translation>%PAP%</translation>
    </message>
    <message>
        <source>Value of the &lt;B&gt;&lt;I&gt;Project author&lt;/I&gt;&lt;/B&gt; field of the &lt;a href=&quot;0108.html&quot;&gt;Project properties&lt;/a&gt; displayed as &lt;U&gt;A Author production&lt;/U&gt;</source>
        <translation>Wert vom Feld &lt;B&gt;&lt;I&gt;Project Autor&lt;/I&gt;&lt;/B&gt; aus den &lt;a href=&quot;0108.html&quot;&gt;Projekteigenschaften&lt;/a&gt; angezeigt als &lt;U&gt;Eine Autor Produktion&lt;/U&gt;</translation>
    </message>
    <message>
        <source>%PAL%</source>
        <translation>%PAL%</translation>
    </message>
    <message>
        <source>Value of the &lt;B&gt;&lt;I&gt;Project album&lt;/I&gt;&lt;/B&gt; field of the &lt;a href=&quot;0108.html&quot;&gt;Project properties&lt;/a&gt;</source>
        <translation>Inhalt vom Feld &lt;B&gt;&lt;I&gt;Projektalbum&lt;/I&gt;&lt;/B&gt; aus den &lt;a href=&quot;0108.html&quot;&gt;Projekteigenschaften&lt;/a&gt;</translation>
    </message>
    <message>
        <source>%PCT%</source>
        <translation>%PCT%</translation>
    </message>
    <message>
        <source>Value of the &lt;B&gt;&lt;I&gt;Project comment&lt;/I&gt;&lt;/B&gt; field of the &lt;a href=&quot;0108.html&quot;&gt;Project properties&lt;/a&gt;</source>
        <translation>Inhalt vom Feld &lt;B&gt;&lt;I&gt;Projektkommentar&lt;/I&gt;&lt;/B&gt; aus den &lt;a href=&quot;0108.html&quot;&gt;Projekteigenschaften&lt;/a&gt;</translation>
    </message>
    <message>
        <source>%PDD%</source>
        <translation>%PDD%</translation>
    </message>
    <message>
        <source>Duration of the project displayed as &lt;U&gt;hh:mm:ss&lt;/U&gt;</source>
        <translation>Dauer des Projektes, angezeigt in &lt;U&gt;hh:mm:ss&lt;/U&gt;</translation>
    </message>
    <message>
        <source>%PSC%</source>
        <translation>%PSC%</translation>
    </message>
    <message>
        <source>Project slide count (Number of slide in the project)</source>
        <translation>Diazähler des Projekts (Nummer des Dias im Projekt)</translation>
    </message>
    <message>
        <source>%PLD%</source>
        <translation>%PLD%</translation>
    </message>
    <message>
        <source>Long date (The form of the display depends on geographical information provided by the computer, depending on the current language)</source>
        <translation>Langes Datum (Die Art der Anzeige hängt von den Regionaleinstellungen Ihres Systemes ab)</translation>
    </message>
    <message>
        <source>%PSD%</source>
        <translation>%PSD%</translation>
    </message>
    <message>
        <source>Short date (The form of the display depends on &lt;B&gt;&lt;I&gt;Short date format&lt;/I&gt;&lt;/B&gt; selected in the &lt;a href=&quot;0101.html&quot;&gt;Application options dialog&lt;/a&gt;)</source>
        <translation>Kurzes Datum (Die Art der Anzeige hängt vom Feld &lt;B&gt;&lt;I&gt;Kurzes Datumsformat&lt;/I&gt;&lt;/B&gt; , welche im Dialog &lt;a href=&quot;0101.html&quot;&gt;Anwendungseinstellungen&lt;/a&gt; gesetzt sind)</translation>
    </message>
    <message>
        <source>%PYR%</source>
        <translation>%PYR%</translation>
    </message>
    <message>
        <source>Year (The year of the event date as a four digit number)</source>
        <translation>Jahr (Das Jahr des Ereignisses mit 4 Ziffern)</translation>
    </message>
    <message>
        <source>%PMM%</source>
        <translation>%PMM%</translation>
    </message>
    <message>
        <source>Month (The month of the event date as a name, depending on the current language: January, February, etc...)</source>
        <translation>Monat (Das Monat des Ereignisses als Name, abhängig von der aktuellen Ländereinstellung: Januar, Februar, usw...)</translation>
    </message>
    <message>
        <source>%PMD%</source>
        <translation>%PMD%</translation>
    </message>
    <message>
        <source>Month as number (The month of the event date as a two digit number)</source>
        <translation>Monat als Nummer (Das Monat des Ereignisses als zweistellige Zahl)</translation>
    </message>
    <message>
        <source>%PDY%</source>
        <translation>%PDY%</translation>
    </message>
    <message>
        <source>Day (The day of the event date as a two digit number)</source>
        <translation>Tag (Der Tag des Ereignisses als zweistellige Zahl)</translation>
    </message>
    <message>
        <source>%PDW%</source>
        <translation>%PDW%</translation>
    </message>
    <message>
        <source>Day of week (The day of week of the event date as a name, depending on the current language: Monday, Thuesday, etc...)</source>
        <translation>Tag der Woche (Der Tag der Woche des Ereignisses als Name, abhängig von den aktuellen Ländereinstellungen: Montag, Dienstag, usw.)</translation>
    </message>
    <message>
        <source>Current slide values</source>
        <translation>Werte vom aktuellen Dia</translation>
    </message>
    <message>
        <source>%CSN%</source>
        <translation>%CSN%</translation>
    </message>
    <message>
        <source>Value of the &lt;B&gt;&lt;I&gt;Slide name&lt;/I&gt;&lt;/B&gt; field of the slide as defined in the &lt;U&gt;Slide settings zone&lt;/U&gt; of the &lt;a href=&quot;0119.html&quot;&gt;Slide properties dialog&lt;/a&gt;</source>
        <translation>Wert vom Feld &lt;B&gt;&lt;I&gt;Dianame&lt;/I&gt;&lt;/B&gt; für das Dia, festgelegt durch : &lt;U&gt;Diaeigenschaften der Zone&lt;/U&gt; aus dem Dialog &lt;a href=&quot;0119.html&quot;&gt;Diaeigenschaften&lt;/a&gt;</translation>
    </message>
    <message>
        <source>%CSR%</source>
        <translation>%CSR%</translation>
    </message>
    <message>
        <source>Current slide number</source>
        <translation>aktuelle Dia Nummer</translation>
    </message>
    <message>
        <source>Chapters values</source>
        <translation>Kapitelwerte</translation>
    </message>
    <message>
        <source>%CCN%</source>
        <translation>%CCN%</translation>
    </message>
    <message>
        <source>Value of the &lt;B&gt;&lt;I&gt;Chapter name&lt;/I&gt;&lt;/B&gt; field of the latest slide which defined &lt;U&gt;Chapters information&lt;/U&gt;. (Chapters information may be defined in &lt;a href=&quot;0105.html&quot;&gt;Chapter properties dialog&lt;/a&gt; or in &lt;a href=&quot;0103.html&quot;&gt;Predefined title slide dialog&lt;/a&gt;).</source>
        <translation>Wert vom Feld &lt;B&gt;&lt;I&gt;Kapitelname&lt;/I&gt;&lt;/B&gt; vom letzten Dia, festgelegt durch &lt;U&gt;Kapitelinformation&lt;/U&gt;. (Kapitelinformationen können festgelegt sein über den Dialog &lt;a href=&quot;0105.html&quot;&gt;Kapiteleigenschaften&lt;/a&gt; oder im Dialog &lt;a href=&quot;0103.html&quot;&gt;vordefinierte Titel&lt;/a&gt;).</translation>
    </message>
    <message>
        <source>%CCR%</source>
        <translation>%CCR%</translation>
    </message>
    <message>
        <source>Current chapter number</source>
        <translation>aktuelle Kapitelnummer</translation>
    </message>
    <message>
        <source>%CCI%</source>
        <translation>%CCI%</translation>
    </message>
    <message>
        <source>%CCD%</source>
        <translation>%CCD%</translation>
    </message>
    <message>
        <source>Current chapter duration</source>
        <translation>Dauer des aktuellen Kapitels</translation>
    </message>
    <message>
        <source>%CCT%</source>
        <translation>%CCT%</translation>
    </message>
    <message>
        <source>Chapter count (Number of chapter in the project)</source>
        <translation>Kapitelzähler (Nummer des Kapitesl im Projekt)</translation>
    </message>
    <message>
        <source>%CLD%</source>
        <translation>%CLD%</translation>
    </message>
    <message>
        <source>Long date of the chapter (if one is defined or project&apos;s date). (The form of the display depends on geographical information provided by the computer, depending on the current language)</source>
        <translation>Langes Datum des Kapitels (falls eines festgelegt wurde, sonst das Projektdatum). (Die Art der Anzeige hängt von den Regionaleinstellungen Ihres Systemes ab)</translation>
    </message>
    <message>
        <source>%CSD%</source>
        <translation>%CSD%</translation>
    </message>
    <message>
        <source>Short date of the chapter (if one is defined or project&apos;s date). (The form of the display depends on &lt;B&gt;&lt;I&gt;Short date format&lt;/I&gt;&lt;/B&gt; selected in the &lt;a href=&quot;0101.html&quot;&gt;Application options dialog&lt;/a&gt;)</source>
        <translation>Kurzes Datum des Kapitels (falls eines festgelegt wurde, sonst das Projektdatum). (Die Art der Anzeige ist abhängig von Auswahl in &lt;B&gt;&lt;I&gt;Format Kurzdatum&lt;/I&gt;&lt;/B&gt; im Dialog &lt;a href=&quot;0101.html&quot;&gt;Anwendungseinstellungen&lt;/a&gt;)</translation>
    </message>
    <message>
        <source>%CYR%</source>
        <translation>%CYR%</translation>
    </message>
    <message>
        <source>Year of the chapter&apos;s date (if one is defined or year of project&apos;s date), as a four digit number.</source>
        <translation>Jahr aus dem Kapiteldatum (falls eines gesetzt wurde, sonst vom Projektdatum), als 4-stellige Zahl.</translation>
    </message>
    <message>
        <source>%CMM%</source>
        <translation>%CMM%</translation>
    </message>
    <message>
        <source>Month of the chapter&apos;s date (if one is defined or month of project&apos;s date) as a name (depending on the current language: January, February, etc...)</source>
        <translation>Monat vom Kapiteldatum (falls eines gesetzt wurde, sonst vom Projektdatum) als Name (abhängig von den aktuellen Ländereinstellungen: Januar, Feburar, usw....)</translation>
    </message>
    <message>
        <source>%CMD%</source>
        <translation>%CMD%</translation>
    </message>
    <message>
        <source>Month of the chapter&apos;s date (if one is defined or month of project&apos;s date) as a two digit number.</source>
        <translation>Monat des Kapiteldatums (falls eines gesetzt wurde, sonst vom Projektdatum) als 2-steillige Zahl.</translation>
    </message>
    <message>
        <source>%CDY%</source>
        <translation>%CDY%</translation>
    </message>
    <message>
        <source>Day of the chapter&apos;s date (if one is defined or day of project&apos;s date) as a two digit number.</source>
        <translation>Tag des Kapiteldatums (falls eines festgelegt wurde, sonst vom Projektdatum) als 2-stellige Zahl.</translation>
    </message>
    <message>
        <source>%CDW%</source>
        <translation>%CDW%</translation>
    </message>
    <message>
        <source>Day of week of the chapter&apos;s date (if one is defined or day of project&apos;s date) as a a name (depending on the current language: Monday, Thuesday, etc...)</source>
        <translation>Tag der Woche des Kapiteldatums (falls eines gesetzt wurde, sonst vom Projektdatum) als Name (abhängig von den aktuellen Ländereinstellungen: Montag, Dienstag,usw...)</translation>
    </message>
    <message>
        <source>Various values</source>
        <translation>Verschiedene Werte</translation>
    </message>
    <message>
        <source>%FFD%</source>
        <translation>%FFD%</translation>
    </message>
    <message>
        <source>ffDiaporama version as &lt;U&gt;ffDiaporama 1.7 (20130919)&lt;/U&gt;</source>
        <translation>ffDiaporama Version angezeigt als  &lt;U&gt;ffDiaporama 1.7 (20130919)&lt;/U&gt;</translation>
    </message>
    <message>
        <source>%CPY%</source>
        <translation>%CPY%</translation>
    </message>
    <message>
        <source>%END%</source>
        <translation>%END%</translation>
    </message>
    <message>
        <source>The end (depending on the current language)</source>
        <translation>Ende (abhängig von der aktuellen Spracheinstellung)</translation>
    </message>
    <message>
        <source>%STA%</source>
        <translation>%STA%</translation>
    </message>
    <message>
        <source>%STP%</source>
        <translation>%STP%</translation>
    </message>
    <message>
        <source>A full text composed of project statistics (Number of slides, project duration, list of chapters, list of musics, how many photo, vector images, videos and predefined title slides, etc...) </source>
        <translation>Ein Text zusammengesetzt aus der Projektstatistik (Anzahl Dias, Projektdauer, Liste der Kapitel, Liste der Musikstücke, Anzahl Fotos, Vektorgrafiken, Videos, vordefinierte Titel, usw...)</translation>
    </message>
    <message>
        <source>%STM%</source>
        <translation>%STM%</translation>
    </message>
    <message>
        <source>A full text composed of list of musics</source>
        <translation>Ein Text zusammengesetzt aud der Liste der Musikstücke</translation>
    </message>
    <message>
        <source>%TLD%</source>
        <translation>%TLD%</translation>
    </message>
    <message>
        <source>Current date as long date format (The form of the display depends on geographical information provided by the computer, depending on the current language)</source>
        <translation>Aktuelles Datum als Langdatum (Die Art der Anzeige ist abhängig von den Ländereinstellungen in Ihrem System)</translation>
    </message>
    <message>
        <source>%TSD%</source>
        <translation>%TSD%</translation>
    </message>
    <message>
        <source>Current date as short date format (The form of the display depends on &lt;B&gt;&lt;I&gt;Short date format&lt;/I&gt;&lt;/B&gt; selected in the &lt;a href=&quot;0101.html&quot;&gt;Application options dialog&lt;/a&gt;)</source>
        <translation>Aktuelles Datum als Kurzdatum (Die Art der Anzeige ist abhägngig von der Auswahl in &lt;B&gt;&lt;I&gt;Kurzformat Datum&lt;/I&gt;&lt;/B&gt; des Dialogs &lt;a href=&quot;0101.html&quot;&gt;Anwendungseinstellungen&lt;/a&gt;)</translation>
    </message>
    <message>
        <source>%TYR%</source>
        <translation>%TYR%</translation>
    </message>
    <message>
        <source>Current date&apos;s year as a four digit number</source>
        <translation>Aktueles Jahr als 4-stellige Zahl</translation>
    </message>
    <message>
        <source>%TMM%</source>
        <translation>%TMM%</translation>
    </message>
    <message>
        <source>Current date&apos;s month as a name (depending on the current language: January, February, etc...)</source>
        <translation>Aktuelles Monat als Name (Abhängig von den Ländereinstellungen: Januar, Februar, usw...)</translation>
    </message>
    <message>
        <source>%TMD%</source>
        <translation>%TMD%</translation>
    </message>
    <message>
        <source>Current date&apos;s month as as a two digit number</source>
        <translation>Aktueller Monat als 2-stellige Zahl</translation>
    </message>
    <message>
        <source>%TDY%</source>
        <translation>%TDY%</translation>
    </message>
    <message>
        <source>Current date&apos;s day as a two digit number</source>
        <translation>Aktueller Tag als 2-stellige Zahl</translation>
    </message>
    <message>
        <source>%TDW%</source>
        <translation>%TDW%</translation>
    </message>
    <message>
        <source>Current date&apos;s day of week as a a name (depending on the current language: Monday, Thuesday, etc...)</source>
        <translation>Aktueller Tag der Woche als Name (abhängig von den Ländereinstellungen: Montag, Dienstag, usw....)</translation>
    </message>
    <message>
        <source>%PLN%</source>
        <translation>%PLN%</translation>
    </message>
    <message>
        <source>Value of the &lt;B&gt;&lt;I&gt;Project location name&lt;/I&gt;&lt;/B&gt; field of the &lt;a href=&quot;0108.html&quot;&gt;Project properties&lt;/a&gt;</source>
        <translation>Inhalt des Feldes &lt;B&gt;&lt;I&gt;Name Projektort&lt;/I&gt;&lt;/B&gt; aus den &lt;a href=&quot;0108.html&quot;&gt;Projekteigenschaften&lt;/a&gt;</translation>
    </message>
    <message>
        <source>%PLA%</source>
        <translation>%PLA%</translation>
    </message>
    <message>
        <source>Value of the &lt;B&gt;&lt;I&gt;Project location address&lt;/I&gt;&lt;/B&gt; field of the &lt;a href=&quot;0108.html&quot;&gt;Project properties&lt;/a&gt;</source>
        <translation>Inhalt des Feldes &lt;B&gt;&lt;I&gt;Adresse Projektort&lt;/I&gt;&lt;/B&gt; aus den &lt;a href=&quot;0108.html&quot;&gt;Projekteigenschaften&lt;/a&gt;</translation>
    </message>
    <message>
        <source>%CLN%</source>
        <translation>%CLN%</translation>
    </message>
    <message>
        <source>Current chapter location name (if one is defined or project&apos;s location name).</source>
        <translation>Aktueller Ort des Kapitels (falls einer gesetzt ist oder der Name des Projektortes).</translation>
    </message>
    <message>
        <source>%CLA%</source>
        <translation>%CLA%</translation>
    </message>
    <message>
        <source>Current chapter location address (if one is defined or project&apos;s location address).</source>
        <translation>Aktuelle Adresse des Kapitels (falls einer definiert ist oder die Adresse des Projektortes).</translation>
    </message>
    <message>
        <source>The following table lists all the available variables:</source>
        <translation>Folgende Tabelle enthält alle verfübaren Variablen:</translation>
    </message>
    <message>
        <source>The big interest of variables is that they are inserted into text (see: &lt;a href=&quot;0120.html&quot;&gt;Edit text dialog&lt;/a&gt;) and are transformed into values ​​only when they are used.</source>
        <translation>Große Verwendung finden Variablen, da sie nicht nur als Text eingefügt werden können (siehe Dialog : &lt;a href=&quot;0120.html&quot;&gt;Text ändern&lt;/a&gt;), sie können auch in Ihren Wert übersetzt werden wenn dies gebraucht wird.</translation>
    </message>
    <message>
        <source>Current chapter number displayed as &lt;U&gt;Chapter N°&lt;/U&gt; (depending on the current language)</source>
        <translation>Das aktuelle Kapitel wird angezeigt als &lt;U&gt;Kapitel N°&lt;/U&gt; (abhängig von der aktuellen Spracheinstellung)</translation>
    </message>
    <message>
        <source>Copyright of the project construct as &lt;U&gt;© Year - Author&lt;/U&gt; with &lt;B&gt;&lt;I&gt;Year&lt;/I&gt;&lt;/B&gt; is the year of today&apos;s date and &lt;B&gt;&lt;I&gt;Author&lt;/I&gt;&lt;/B&gt; is the value of the &lt;B&gt;&lt;I&gt;Project author&lt;/I&gt;&lt;/B&gt; field of the &lt;a href=&quot;0108.html&quot;&gt;Project properties&lt;/a&gt;</source>
        <translation>Das Copyright des Projektes wird zusammengesetzt aus dem &lt;U&gt;© Jahr - Autor&lt;/U&gt; mit &lt;B&gt;&lt;I&gt;Jahr&lt;/I&gt;&lt;/B&gt; das dem aktuellem Jahr entspricht und &lt;B&gt;&lt;I&gt;Autor&lt;/I&gt;&lt;/B&gt; aus dem Feld &lt;B&gt;&lt;I&gt;Projektautor&lt;/I&gt;&lt;/B&gt; im Dialog &lt;a href=&quot;0108.html&quot;&gt;Projekteigenschaften&lt;/a&gt;</translation>
    </message>
    <message>
        <source>A full text composed of: Project done the &lt;U&gt;&lt;B&gt;&lt;I&gt;short date&lt;/I&gt;&lt;/B&gt;&lt;/U&gt; with «&lt;U&gt;&lt;B&gt;&lt;I&gt;ffDiaporama version&lt;/I&gt;&lt;/B&gt;&lt;/U&gt;» on a &lt;U&gt;&lt;B&gt;&lt;I&gt;Operating system&lt;/I&gt;&lt;/B&gt;&lt;/U&gt; (&lt;U&gt;&lt;B&gt;&lt;I&gt;Number of Core/CPU&lt;/I&gt;&lt;/B&gt;&lt;/U&gt; Core/CPU) computer.</source>
        <translation>Ein Volltext zusammengesetzt aus: Projekt erstellt am &lt;U&gt;&lt;B&gt;&lt;I&gt;Kurzdatum&lt;/I&gt;&lt;/B&gt;&lt;/U&gt;mit &lt;U&gt;&lt;B&gt;&lt;I&gt;ffDiaporama Version&lt;/I&gt;&lt;/B&gt;&lt;/U&gt; auf einem Computer mit dem &lt;U&gt;&lt;B&gt;&lt;I&gt;Betriebssystem&lt;/I&gt;&lt;/B&gt;&lt;/U&gt; (&lt;U&gt;&lt;B&gt;&lt;I&gt;Anzahl von Kernen/CPU&lt;/I&gt;&lt;/B&gt;&lt;/U&gt; Kernen/CPU).</translation>
    </message>
</context>
<context>
    <name>0014</name>
    <message>
        <source>The &quot;Visible&quot; property of blocks and the management of the breaks</source>
        <translation>Die &quot;Sichtbarkeit&quot; Eigenschaft eines Blocks und die Verwaltung von Pausen</translation>
    </message>
    <message>
        <source>Blocks have a visible/invisible property. In the following example, the one image is inserted 3 times (in 3 different blocks) into the same slide.</source>
        <translation>Blöcke haben die Eigenschaft sichtbar und unsichtbar zu sein. Im folgenden Beispiel ist das Bild drei mal (in 3 verschiedenen Blöcken) im selben Dia eingefügt.</translation>
    </message>
    <message>
        <source>The first block consists of the whole image filling the whole screen</source>
        <translation>Im ersten Block ist das Bild in seiner gesamten Größe über den gesamten Bildschirm zu sehen </translation>
    </message>
    <message>
        <source>The second block consists of the image re-framed on the statue and positioned in an ellipse at the right of the screen</source>
        <translation>Im zweiten Block ist das Bild auf den Ausschnitt der Statue beschnitten und inr Form einer Ellipse in der rechten Bildhälfte positioniert</translation>
    </message>
    <message>
        <source>The third block consists of the image re-framed on the pedestrians and also positioned in an ellipse at the right of the screen</source>
        <translation>Im dritten Block ist das Bild auf den Ausschnitt der Spaziergänger und in Form einer Ellipse ebenfalls in der rechten Bildschirmhälfte positioniert</translation>
    </message>
    <message>
        <source>The statue and the pedestrians have their visibility property set to invisible on the 1st shot.</source>
        <translation>Der Zuschnitt auf die Statue und die Spaziergänger haben in der 1. Aufnahme die Eigenschaft “unsichtbar”.</translation>
    </message>
    <message>
        <source>Then the statue becomes visible on the 2nd shot.</source>
        <translation>In der 2. Aufnahme bekommt der Zuschnitt der Statue die Eigenschaft “sichtbar”.</translation>
    </message>
    <message>
        <source>Finally, the statue once more becomes invisible on the 3rd shot and the pedestrians become visible.</source>
        <translation>Zu guter letzt wird der Zuschnitt der Statue in der 3. Aufnahme wieder “unsichtbar” und der Zuschnitt der Spaziergänger erhält die Eigenschaft “sichtbar”.</translation>
    </message>
    <message>
        <source>Result:</source>
        <translation>Ergebnis:</translation>
    </message>
    <message>
        <source>For 2 seconds, the 1st shot is shown and we see only the whole image which occupies all the screen</source>
        <translation>Für 2 Sekunden wird die 1. Aufnahme zangezeigt. Man sieht nur das gesamte Bild in voller Größe</translation>
    </message>
    <message>
        <source>Over the next 2 seconds, the statue appears</source>
        <translation>In den nächsten 2 Sekunden erscheint der Zuschnitt der Statue</translation>
    </message>
    <message>
        <source>Over a further 2 seconds, the statue is replaced by the pedestrians</source>
        <translation>In den weiteren 2 Sekunden wird der Zuschnitt der Statue durch den Zuschnitt der Spaziergänger ersetzt</translation>
    </message>
    <message>
        <source>This example is really very simple, because it is also possible to animate the appearance and the disappearance of blocks.</source>
        <translation>Zugegeben – das Beispiel ist sehr einfach gehalten, aber es ist ja auch möglich das Erscheinen und den Wechsel der einzelnen Blöcke zu animieren.</translation>
    </message>
    <message>
        <source>Indeed, as shown previously, animations are generated by the transformation of the arrangement from one shot to another.</source>
        <translation>Tatsächlich können die vorher verwendeten Einblendungen und Wechsel animiert werden, indem die Anordnung in den einzelnen Aufnahmen verändert wird.</translation>
    </message>
    <message>
        <source>So, if on the 1st shot, the statue occupied the left lower quarter of the screen rather than the same position as on the 2nd shot, then instead of simply appearing for 2 seconds on the 2nd shot, it would appear by growing out of the left lower quarter of the screen.</source>
        <translation>Also, positionieren wir den Zuschnitt der Statue in das linke untere Viertel auf unserer 1. Aufnahme und belassen die Position in der 2. Aufnahme wie gehabt. Sie können sich denken was passiert ? In den 2 Sekunden wo wir zuvor nur die Sichtbarkeit hatten, wächst die Statue von links unten in die gesamte rechte Bildhälfte.</translation>
    </message>
    <message>
        <source>Using videos:</source>
        <translation>Verwenden von Videos:</translation>
    </message>
    <message>
        <source>You should note that videos are paused when they are invisible.</source>
        <translation>Videos werden übrigens angehalten, wenn Sie unsichtbar sind.</translation>
    </message>
    <message>
        <source>Therefore a video can be displayed for several seconds in the 1st shot, then be made invisible and thus paused in a 2nd shot, then be visible in a 3rd shot and resume playing, from where it stopped at the end of the 1st shot.</source>
        <translation>Durch diese Eigenschaft ist es möglich ein Video in der 1. Aufnahme für ein paar Sekunden zu zeigen. Anschliessend in der 2. Aufnahme unsichtbar gemacht (dadurch wird das Video angehalten). In der 3. Aufnahme wird das Video wieder sichtbar gemacht und setzt exakt an der Stelle fort wo es am Ende der 1, Aufnahme unsichtbar wurde.</translation>
    </message>
</context>
<context>
    <name>0015</name>
    <message>
        <source>All shots regulations versus current shot regulations</source>
        <translation>“Alle Aufnahmen” Einstellungen versus “Aktuelle Aufnahme” Einstellungen</translation>
    </message>
    <message>
        <source>&lt;B&gt;The settings which apply to the current shot.&lt;/B&gt; These settings are made shot by shot. So, every shot possesses its own settings and the passage from a shot to the other one is defined by the passage from one setting to an other one creating a shot animation: these are called Ken Burns effects. Here are some some: </source>
        <translation>&lt;B&gt;Die Einstellungen die sich nur auf die aktuelle Aufnahme beziehen.&lt;/B&gt; Diese Eigenschaften werden Aufnahme für Aufnahme festgelegt. Somit erhält jede Aufnahme ihre eigenen Vorschriften Der Übergang von einer Aufnahme zur nächsten Aufnahme definiert die Art der Animation von einer Aufnahme zur nächsten. Dies wird “Ken Burns Effekt” genannt. Zum Beispiel: </translation>
    </message>
    <message>
        <source>Zoom on a portion of the image</source>
        <translation>Zoomen eines Ausschnittes von einem Bild</translation>
    </message>
    <message>
        <source>Scrolling from a portion of the image to an other one</source>
        <translation>Scrolling von einem Teil des Bildes zu einem anderem</translation>
    </message>
    <message>
        <source>Clarification or darkening of a portion of the image</source>
        <translation>Aufhellen oder abdunkeln eines Bildteiles</translation>
    </message>
    <message>
        <source>etc...</source>
        <translation>usw....</translation>
    </message>
    <message>
        <source>&lt;B&gt;The settings which apply to all shots.&lt;/B&gt; These settings are made globally, that is their effects will be visible on all the shots of the slide. Here are some: </source>
        <translation>&lt;B&gt;Die Einstellungen die sich auf alle Aufnahmen beziehen.&lt;/B&gt; Diese Einstellungen werden global eingestellt. Diese Effekte werden an allen Aufnahmen angewandt. Zum Beispiel: </translation>
    </message>
    <message>
        <source>There are two types of settings in the &lt;a href=&quot;0119.html&quot;&gt;Slide properties dialog&lt;/a&gt;:</source>
        <translation>Es gibt zwei Arten von Einstellungen im Dialog &lt;a href=&quot;0119.html&quot;&gt;Diaeinstellungen&lt;/a&gt;:</translation>
    </message>
    <message>
        <source>Text and text format</source>
        <translation>Text und Textformat</translation>
    </message>
    <message>
        <source>Shape form</source>
        <translation>Rahmenform</translation>
    </message>
</context>
<context>
    <name>0016</name>
    <message>
        <source>Style sheets</source>
        <translation>Stilvorlagen</translation>
    </message>
    <message>
        <source>ffDiaporama uses a style sheet system to facilitate the settings for various things.</source>
        <translation>ffDiaporama verwendet ein System von Stilvorlagen um Einstellungen zusammenzufassen und an Objekten anzuwenden.</translation>
    </message>
    <message>
        <source>Style sheets exist for:</source>
        <translation>Stilvorlagen sind anwendbar für:</translation>
    </message>
    <message>
        <source>Controlling the block coordinates, including the parameters of size, position and block rotation, and also the framing style.</source>
        <translation>Steuerung von Blockkoordinaten. Dies beinhaltet Parameter für die Größe; Position; Rotation sowie für Umrahmungen.</translation>
    </message>
    <message>
        <source>Controlling the block shape, which includes the parameters of form, opacity, shadow and block borders.</source>
        <translation>Steuerung des Aussehens von Blöcken. Dies beinhaltet die Form, Sichtbarkeit und Umrandungen von Blöcken.</translation>
    </message>
    <message>
        <source>Controlling image framing, which includes the parameters of geometrical constraint and size.</source>
        <translation>Steuerung der Bildbeschneidungen. Dies beinhaltet die Parameter für Geometrie und Größe.</translation>
    </message>
    <message>
        <source>Formatting text, which includes the parameters of font, character attributes, alignment and text shadow.</source>
        <translation>Formatierungen von Text. Dies beinhaltet die Parameter für Schriftart; Schriftstil; Attribute; Ausrichtung und Schattenbildung von Texten.</translation>
    </message>
    <message>
        <source>Controlling text background, which includes the parameters of background (color, brush, etc.).</source>
        <translation>Steuerung des Text-Hintergrundes. Dies beinhaltet die Paramter für Farbe; verwendeter Pinsel usw.</translation>
    </message>
    <message>
        <source> Open the style menu:</source>
        <translation> Öffnen des Menüs “Verwalten vorhandener Stile”:</translation>
    </message>
    <message>
        <source>The first part of the menu lists the known styles. </source>
        <translation>Im ersten Teil der Menüliste werden die bekannten Stile gelistet. </translation>
    </message>
    <message>
        <source>If the current settings correspond to a known style, this style is marked with an asterisk.</source>
        <translation>Wenn der aktuell verwendete Stil zu einem in der Liste definierten passt, wird dieser mit einem vorangestelltem * markiert.</translation>
    </message>
    <message>
        <source>The standard styles of ffDiaporama are marked with this icon: </source>
        <translation>Standardvorlagen sind mit diesem Symbol gekennzeichnet: </translation>
    </message>
    <message>
        <source>Standard styles that you have modified and styles which you created are marked with this icon: </source>
        <translation>Standard-Stilvorlagen,die von Ihnen bearbeitet ode erzeugt wurden, werden mit diesem Symbol gekennzeichnet: </translation>
    </message>
    <message>
        <source>The second part of the menu allows you to modify the style list. </source>
        <translation>Im zweiten Teil des Menüs ist es Ihnen möglich, die Liste der Stilvorlagen zu verändern. </translation>
    </message>
    <message>
        <source>Create a new style: allows you to create a new style with the current settings. When you select this option, a dialog appears asking you to name the new style.</source>
        <translation>Neuer Stil: Ermöglicht, einen neuen Stil mit den aktuell verwendeten Parametern anzulegen. Wenn Sie diesen Menüeintrag wählen, werden Sie anschliessend nach dem Namen der neuen Stilvorlage gefragt.</translation>
    </message>
    <message>
        <source>Modify an existing style: allows you to change the settings of an existing style by using the current settings. When you select this option, the list of known styles appears. Select the style to be modified.</source>
        <translation>Aktualisieren vorhandener Stile: Ermöglicht das Aktualisieren von Einstellungen für eine vorhandene Stilvorlage mit den aktuell eingestellten Parametern. Wenn Sie diesen Menüeintrag wählen, können Sie aus der Liste der bekannten Stilvorlagen denjenigen auswählen, der die aktuellen Parameter übernehmen soll.</translation>
    </message>
    <message>
        <source>Manage styles: opens the Manage style dialog.</source>
        <translation>Verwalten vorhandener Stile: Öffnet das Fenster Stile bearbeiten.</translation>
    </message>
</context>
<context>
    <name>0020</name>
    <message>
        <source>Interface description</source>
        <translation>Schnittstellen-Beschreibung</translation>
    </message>
    <message>
        <source>The main window</source>
        <translation>Das Hauptfenster</translation>
    </message>
    <message>
        <source>The toolbar</source>
        <translation>Die Werkzeugleiste</translation>
    </message>
    <message>
        <source>The timeline</source>
        <translation>Die Zeitleiste</translation>
    </message>
    <message>
        <source>The multimedia file browser</source>
        <translation>Der Dateibrowser für Multimedia Dateien</translation>
    </message>
    <message>
        <source>Application options</source>
        <translation>Anwendungseinstellungen</translation>
    </message>
    <message>
        <source>Manage devices</source>
        <translation>Geräte verwalten</translation>
    </message>
    <message>
        <source>Add or modify a predefined title slide</source>
        <translation>Hinzufügen oder Ändern von vordefinierten Titeln</translation>
    </message>
    <message>
        <source>Background properties</source>
        <translation>Hintergrundeigenschaften</translation>
    </message>
    <message>
        <source>Chapter properties</source>
        <translation>Kapiteleigenschaften</translation>
    </message>
    <message>
        <source>Check configuration</source>
        <translation>Konfiguration überprüfen</translation>
    </message>
    <message>
        <source>Export project</source>
        <translation>Projekt exportieren</translation>
    </message>
    <message>
        <source>Project properties</source>
        <translation>Projekteigenschaften</translation>
    </message>
    <message>
        <source>Select files</source>
        <translation>Dateien auswählen</translation>
    </message>
    <message>
        <source>Correct, reframe or cut image or video</source>
        <translation>Korrigieren, Beschneiden oder Kürzen von Bildern oder Videos</translation>
    </message>
    <message>
        <source>File information</source>
        <translation>Dateiinformationen</translation>
    </message>
    <message>
        <source>Manage favorite</source>
        <translation>Favoriten verwalten</translation>
    </message>
    <message>
        <source>Manage style</source>
        <translation>Stile verwalten</translation>
    </message>
    <message>
        <source>Music properties</source>
        <translation>Musikeigenschaften</translation>
    </message>
    <message>
        <source>Render video</source>
        <translation>Video erstellen</translation>
    </message>
    <message>
        <source>Ruler properties</source>
        <translation>Linealeigenschaften</translation>
    </message>
    <message>
        <source>Edit thumbnail model</source>
        <translation>Ändern Modell für Vorschaubilder</translation>
    </message>
    <message>
        <source>Set first shot duration for a set of slides</source>
        <translation>Setzen der Dauer für die erste Aufnahme für eine Reihe von Dias</translation>
    </message>
    <message>
        <source>Slide properties</source>
        <translation>Diaeigenschaften</translation>
    </message>
    <message>
        <source>Edit text</source>
        <translation>Text editieren</translation>
    </message>
    <message>
        <source>Select transition duration for a set of slides</source>
        <translation>Effektdauer für eine Reihe von Dias</translation>
    </message>
    <message>
        <source>Transition properties</source>
        <translation>Effekteigenschaften</translation>
    </message>
    <message>
        <source>Dialog boxes</source>
        <translation>Dialogfenster</translation>
    </message>
    <message>
        <source> This section contains information about using ffDiaporama. </source>
        <translation> Dieser Abschnitt enthält Informationen über die Benutzung von ffDiaporama.</translation>
    </message>
    <message>
        <source>Index</source>
        <translation>Inhalt</translation>
    </message>
    <message>
        <source>Configuration dialog boxes</source>
        <translation>Dialoge für die Konfiguration</translation>
    </message>
    <message>
        <source>Editing dialog boxes</source>
        <translation>Ändern von Dialogfenstern</translation>
    </message>
    <message>
        <source>Dialog boxes related to the project</source>
        <translation>Dialogfenster bezüglich dem Projekt</translation>
    </message>
    <message>
        <source>Various dialog boxes</source>
        <translation>Verschiedene Dialogfenster</translation>
    </message>
    <message>
        <source>Add or modify a location</source>
        <translation>Hinzufügen oder Ändern des Ortes</translation>
    </message>
    <message>
        <source>Cut a sound file</source>
        <translation>Ausschneiden der Audiodatei</translation>
    </message>
</context>
<context>
    <name>0021</name>
    <message>
        <source>The main window</source>
        <translation>Das Hauptfenster</translation>
    </message>
    <message>
        <source>The main window of ffDiaporama allows all the common tasks of slide management.</source>
        <translation>Das Hauptfenster von ffDiaporama stellt alle Werkzeuge zur Verfügung, um Ihre Diashow effektiv zu erstellen.</translation>
    </message>
    <message>
        <source>The general principle is:</source>
        <translation>Grundsätzlich können Sie hier:</translation>
    </message>
    <message>
        <source>Add files and titles to the &lt;a href=&quot;0023.html&quot;&gt;timeline&lt;/a&gt; in the form of slides</source>
        <translation>Dateien und Titel zur &lt;a href=&quot;0023.html&quot;&gt;Zeitleiste&lt;/a&gt; in der Form von Dias hinzufügen</translation>
    </message>
    <message>
        <source>Organize slides</source>
        <translation>Dias organisieren</translation>
    </message>
    <message>
        <source>Adjust slides and create animations</source>
        <translation>Dias einstellen und Animationen erstellen</translation>
    </message>
    <message>
        <source>To manage slides, ffDiaporama provides three display modes:</source>
        <translation>Um die Dias effektiv zu verwalten, bietet ffDiaporama drei Ansichtsmodi:</translation>
    </message>
    <message>
        <source>File mode</source>
        <translation>Dateimodus</translation>
    </message>
    <message>
        <source>In this mode, the main window is divided into 3 zones: </source>
        <translation>In diesem Modus ist das Hauptfenster in drei Zonen unterteilt:</translation>
    </message>
    <message>
        <source>The &lt;a href=&quot;0023.html&quot;&gt;timeline&lt;/a&gt;</source>
        <translation>die &lt;a href=&quot;0023.html&quot;&gt;Zeitleiste&lt;/a&gt;</translation>
    </message>
    <message>
        <source>The &lt;a href=&quot;0024.html&quot;&gt;multimedia file browser&lt;/a&gt;</source>
        <translation>der &lt;a href=&quot;0024.html&quot;&gt;Dateibrowser für Multimediadateien&lt;/a&gt;</translation>
    </message>
    <message>
        <source> In this mode, you can display the multimedia files present on your hard disks and insert them using Drag &amp; Drop into the &lt;a href=&quot;0023.html&quot;&gt;timeline&lt;/a&gt; to create your slide show. </source>
        <translation>In diesem Modus, können Sie die Multimediadateien auf Ihrer Festplatte durchsuchen. Sie können diese mittels “Drag &amp; Drop” in die Zeitleiste einfügen, um Ihre Diashow zu erstellen.</translation>
    </message>
    <message>
        <source>A small multimedia player is displayed above on the right, near the toolbar and menu, to allow you to preview the slide show. </source>
        <translation>Ein kleiner Vorschaumonitor für Ihre Multimediadateien ist rechts/oben platziert. Dieser ermöglicht eine Vorschau vor dem Einfügen in die Diashow.</translation>
    </message>
    <message>
        <source>Sheet mode</source>
        <translation>Tabellenmodus</translation>
    </message>
    <message>
        <source>In this mode, the main window is divided into 2 zones: </source>
        <translation>In diesem Modus ist das Hauptfenster in zwei Zonen unterteilt:</translation>
    </message>
    <message>
        <source> In this mode, the &lt;a href=&quot;0023.html&quot;&gt;timeline&lt;/a&gt; is displayed on several lines to show as much slides as possible of the slide show. Slides are shown as on a musical score, in the form of line and at the end of a line, we pass over to the beginning og the following line. </source>
        <translation>In diesem Modus wird die &lt;a href=&quot;0023.html&quot;&gt;Zeitleiste&lt;/a&gt; als Tabelle dargestellt, die soviele Dias wie möglich in einer Zeile anzeigt. Weitere Dias werden in der darauf folgenden Zeile (unterhalb) dargestellt.</translation>
    </message>
    <message>
        <source>You can reorganize your slides by moving them using Drag &amp; Drop within the &lt;a href=&quot;0023.html&quot;&gt;timeline&lt;/a&gt;. </source>
        <translation>Sie können Ihre Dias in der Reihenfolge durch Verschieben mittels “Drag &amp; Drop” in der &lt;a href=&quot;0023.html&quot;&gt;Zeitleiste&lt;/a&gt; anders anordnen.</translation>
    </message>
    <message>
        <source>Preview mode</source>
        <translation>Vorschaumodus</translation>
    </message>
    <message>
        <source>A big multimedia player</source>
        <translation>ein großer Multimediaplayer</translation>
    </message>
    <message>
        <source> In this mode, you can preview your slide show in big size. </source>
        <translation>In diesem Modus haben Sie die Möglichkeit Ihre Diashow in einem großem Multimediaplayer zu betrachten.</translation>
    </message>
    <message>
        <source>You can modify your slides and preview your changes in the multimedia player </source>
        <translation>Hier können Sie Ihre Dias bearbeiten und auch gleich die Auswirkungen Ihrer Änderungen betrachten</translation>
    </message>
    <message>
        <source> Switch display to file mode</source>
        <translation> Umschalten zur Ansicht als Dateibrowser</translation>
    </message>
    <message>
        <source> Switch display to sheet mode</source>
        <translation> Umschalten zur Ansicht als Tabelle</translation>
    </message>
    <message>
        <source> Switch display to preview mode</source>
        <translation> Umschalten zur Vorschauansicht</translation>
    </message>
    <message>
        <source>by using contextual menus (right click on an element)</source>
        <translation>durch Verwendung des Kontextmenüs an den einzelnen Elementen (Klick mit rechter Maustaste)</translation>
    </message>
    <message>
        <source>by double clicking on elements of the slide</source>
        <translation>durch Doppelklick auf ein Element des Dias</translation>
    </message>
    <message>
        <source>The &lt;a href=&quot;0022.html&quot;&gt;toolbar&lt;/a&gt; and menu at the top</source>
        <translation>Die &lt;a href=&quot;0022.html&quot;&gt;Werkzeugleiste&lt;/a&gt; und das Menü oben</translation>
    </message>
    <message>
        <source>by using the buttons of the &lt;a href=&quot;0022.html&quot;&gt;toolbar&lt;/a&gt;</source>
        <translation>durch Verwendung der Aktionen/Smbole in der &lt;a href=&quot;0022.html&quot;&gt;Werkzeugleiste&lt;/a&gt;</translation>
    </message>
    <message>
        <source>To change display mode, use the buttons located in the status bar, to the right, at the bottom of the main window.</source>
        <translation>Um die Ansicht zu ändern, verwenden Sie die Symbole am unteren Ende des Hauptfensters in der Statusleiste rechts.</translation>
    </message>
    <message>
        <source>The editing of slides is done:</source>
        <translation>Das Editieren von Dias kann wie folgt durchgeführt werden:</translation>
    </message>
</context>
<context>
    <name>0022</name>
    <message>
        <source>The toolbar</source>
        <translation>Die Werkzeugleiste</translation>
    </message>
    <message>
        <source>These buttons are grouped under four tabs: File / Project / Render and Help</source>
        <translation>Diese Knöpfe sind in vier Tabs gruppiert: Datei / Projekt / Video erzeugen und Hilfe</translation>
    </message>
    <message>
        <source>The project management commands</source>
        <translation>Die Knöpfe für die Projektverwaltung</translation>
    </message>
    <message>
        <source>The following table summarizes the main project management commands:</source>
        <translation>Die folgende Tabelle zeigt die Hauptverwaltungsknöpfe und erklärt deren Bedeutung:</translation>
    </message>
    <message>
        <source>Toolbar button</source>
        <translation>Menüknopf</translation>
    </message>
    <message>
        <source>Project menu command</source>
        <translation>Menübefehl</translation>
    </message>
    <message>
        <source>Keyboard shortcut</source>
        <translation>Tastaturkürzel</translation>
    </message>
    <message>
        <source>Action</source>
        <translation>Aktion</translation>
    </message>
    <message>
        <source>New</source>
        <translation> 	
Neues Projekt</translation>
    </message>
    <message>
        <source>CTRL+N</source>
        <translation>STRG+N</translation>
    </message>
    <message>
        <source>(If the current project has unsaved modifications, ffDiaporama prompts you to save it.)</source>
        <translation>(Sollte das aktuell geöffnete Projekt seit dem letzten Speichern verändert worden sein, werden Sie von ffDiaporama gefragt, ob Sie die die Änderungen vorher speichern möchten)</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Öffne Projekt</translation>
    </message>
    <message>
        <source>CTRL+O</source>
        <translation>STRG+O</translation>
    </message>
    <message>
        <source>Allows you to open an existing project. The file selection dialog appears and allows you to select the project to be opened. </source>
        <translation>Öffnet ein bestehendes Projekt. Der Dialog für “Projekt öffnen” erscheint und Sie können die Projektdatei auswählen.</translation>
    </message>
    <message>
        <source>(If the current project has unsaved modifications, ffDiaporama prompts you to save it.) </source>
        <translation>(Sollte das aktuell geöffnete Projekt seit dem letzten Speichern verändert worden sein, werden Sie von ffDiaporama gefragt, ob Sie die die Änderungen vorher speichern möchten)</translation>
    </message>
    <message>
        <source>Remark: if the project contains files which were moved or renamed, ffDiaporama will fail to open them again. In that case, a dialog appears allowing you to select a new file.</source>
        <translation>Anmerkung: Sollten die Projektinhalte (Bilder; Videos) inzwischen auf einen neuen Speicherort verschoben (oder gelöscht) worden sein, ermöglicht Ihnen ffDiaporama den neuen Speicherort oder ein neues Bild/Video auszuwählen.</translation>
    </message>
    <message>
        <source>Open recent</source>
        <translation>Öffne letzte Projekte</translation>
    </message>
    <message>
        <source>Allows you to reopen a recently opened project. ffDiaporama stores a list of the last ten projects.</source>
        <translation>Öffnet ein kürzlich verwendetes Projekt. Der Dialog für “Projekt öffnen” erscheint und Sie können die Projektdatei auswählen.</translation>
    </message>
    <message>
        <source>Save</source>
        <translation>Projekt sichern</translation>
    </message>
    <message>
        <source>CTRL+S</source>
        <translation>STRG+S</translation>
    </message>
    <message>
        <source>Allows you to save the current project in a project file.</source>
        <translation>Ermöglicht das Speichern des aktuellen Projektes.</translation>
    </message>
    <message>
        <source>If you have not saved previously the project, a file selection dialog appears and allows you to select a destination file.</source>
        <translation>Wurde das Projekt noch nie gespeichert, haben sie hier die Möglichkeit Namen und Speicherort für Ihr Projekt anzugeben.</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation>Projekt sichern als</translation>
    </message>
    <message>
        <source>Project properties</source>
        <translation>Projekteigenschaften</translation>
    </message>
    <message>
        <source>Settings</source>
        <translation>Einstellungen</translation>
    </message>
    <message>
        <source>Quit</source>
        <translation>Beenden</translation>
    </message>
    <message>
        <source>CTRL+W</source>
        <translation>STRG+W</translation>
    </message>
    <message>
        <source>Allows you to exit ffDiaporama.</source>
        <translation>Beenden von ffDiaporama.</translation>
    </message>
    <message>
        <source>The slide management commands</source>
        <translation>Die Knöpfe für die Diaverwaltung</translation>
    </message>
    <message>
        <source>The following table summarizes the slide management commands:</source>
        <translation>Die folgende Tabelle zeigt die Diaverwaltungsknöpfe und erklärt deren Bedeutung:</translation>
    </message>
    <message>
        <source>Edit menu command</source>
        <translation>Menübefehl Ändern</translation>
    </message>
    <message>
        <source>Add title</source>
        <translation>Titel hinzufügen</translation>
    </message>
    <message>
        <source>Add files</source>
        <translation>Dateien hinzufügen</translation>
    </message>
    <message>
        <source>INS</source>
        <translation>EINFG</translation>
    </message>
    <message>
        <source>Add project</source>
        <translation>Projekt hinzufügen</translation>
    </message>
    <message>
        <source>Cut</source>
        <translation>Ausschneiden</translation>
    </message>
    <message>
        <source>CTRL+X</source>
        <translation>STRG+X</translation>
    </message>
    <message>
        <source>Copy</source>
        <translation>Kopieren</translation>
    </message>
    <message>
        <source>CTRL+C</source>
        <translation>STRG+C</translation>
    </message>
    <message>
        <source>Allows you to copy the current slide to the clipboard.</source>
        <translation>Das aktuelle Dia wird in die Zwischenablage von ffDiaporama kopiert.</translation>
    </message>
    <message>
        <source>Paste</source>
        <translation>Einfügen</translation>
    </message>
    <message>
        <source>CTRL+V</source>
        <translation>STRG+V</translation>
    </message>
    <message>
        <source>Edit</source>
        <translation>Bearbeiten</translation>
    </message>
    <message>
        <source>Opens a sub-menu giving access to the slide modification functions</source>
        <translation>Öffnet Untermenüs, die die Optionen zur Änderung von DIAs ermöglichen</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Entfernen</translation>
    </message>
    <message>
        <source>DEL</source>
        <translation>ENTF</translation>
    </message>
    <message>
        <source>Allows you to remove the current slide.</source>
        <translation>Löscht – nach Rückfrage – das aktuelle Dia.</translation>
    </message>
    <message>
        <source>Remarks:</source>
        <translation>Anmerkung:</translation>
    </message>
    <message>
        <source>Inserted slides are either at the end of the project, or after the current slide, depending to the option &quot;add the new slides (at the end of the project or after the current slide) &quot; in the configuration dialog.</source>
        <translation>Fügt ein leeres Dia ein: Das Dia wird hinter das aktuelle Dia platziert (oder hinten angefügt;abhängig von der Einstellung des Feldes &quot;hinzufügen von Dias (am Ende des Projektes oder nach dem aktuellem Dia) in den Einstellungen). </translation>
    </message>
    <message>
        <source>The render commands</source>
        <translation>Die Knöpfe zur Videoerstellung</translation>
    </message>
    <message>
        <source>The following table summarizes the main render commands:</source>
        <translation>Die folgende Tabelle zeigt die Knöpfe zur Videoerstellung und erklärt deren Bedeutung:</translation>
    </message>
    <message>
        <source>Render menu command</source>
        <translation>Menübefehl Video erstellen</translation>
    </message>
    <message>
        <source>Player and Smartphone</source>
        <translation>Player und Smartphone</translation>
    </message>
    <message>
        <source>Multimedia system</source>
        <translation>Multimediasystem</translation>
    </message>
    <message>
        <source>For the WEB</source>
        <translation>Für das Internet</translation>
    </message>
    <message>
        <source>Lossless</source>
        <translation>Verlustlos</translation>
    </message>
    <message>
        <source>Advanced</source>
        <translation>Erweitert</translation>
    </message>
    <message>
        <source>Remark:</source>
        <translation>Anmerkung:</translation>
    </message>
    <message>
        <source>The lossless format is readable only by few equipment and generates files of enormous size. Consequently, it is useful only to generate parts of a project which will then be joined into a final project.</source>
        <translation> Das verlustfreie Format ist nicht von allen Systemen lesbar. Es ist jedoch sinnvoll, eventuelle Vorstufen der Berechnung in diesem Format durchzuführen und erst den fertigen Film in einem allgemein verständlichem Format zu berechnen.</translation>
    </message>
    <message>
        <source>The help commands</source>
        <translation>Die Knöpfe der Hilfe</translation>
    </message>
    <message>
        <source>The following table summarizes the main help commands:</source>
        <translation>Die folgende Tabelle zeigt die Knöpfe der Hilfe und erklärt deren Bedeutung:</translation>
    </message>
    <message>
        <source>Help menu command</source>
        <translation>Menübefehl</translation>
    </message>
    <message>
        <source>About</source>
        <translation>Info</translation>
    </message>
    <message>
        <source>Opens the about dialog. This displays information about the release, license and system information</source>
        <translation>Öffnet das Informationsfenster. Es zeigt die Informationen über Version, Lizenz(en) und Systeminformationen</translation>
    </message>
    <message>
        <source>Support and help (F1)</source>
        <translation>Support und Hilfe (F1)</translation>
    </message>
    <message>
        <source>Opens the ffDiaporama WIKI index</source>
        <translation>Öffnet die ffDiaporama WIKI</translation>
    </message>
    <message>
        <source>What&apos;s new</source>
        <translation>Neuigkeiten</translation>
    </message>
    <message>
        <source>Opens the Blog/News page from the ffDiaporama website</source>
        <translation>Öffnet die Blog/News Seite von der ffDiaporama Webseite über den Standardbrowser</translation>
    </message>
    <message>
        <source>Allows you to create a new blank project. The &lt;a href=&quot;0108.html&quot;&gt;project properties dialog&lt;/a&gt; appears and allows you to setup the new project. </source>
        <translation>Erzeugt ein neues/leeres Projekt. Der Dialog  &lt;a href=&quot;0108.html&quot;&gt;Projekteigenschaften&lt;/a&gt; erscheint und Sie können die Parameter für das neue Projekt festlegen.</translation>
    </message>
    <message>
        <source>Opens a sub-menu giving you access to the following functions</source>
        <translation>Öffnet ein Untermenü, das folgende Funktionen zur Verfügung stellt</translation>
    </message>
    <message>
        <source>Save as: Allows you to save the current project in a different file. The &lt;a href=&quot;0109.html&quot;&gt;file selection dialog&lt;/a&gt; appears and allows you to select a destination file.</source>
        <translation>Speichern unter : Ermöglicht das Speichern des aktuellen Projektes unter einem neuem Projektnamen. Der Dialog &lt;a href=&quot;0109.html&quot;&gt;Dateiauswahl&lt;/a&gt; erscheint und Sie können eine Zieldatei auswählen.</translation>
    </message>
    <message>
        <source>Export project: Export current project and all used files in a new folder. The &lt;a href=&quot;0107.html&quot;&gt;export project dialog&lt;/a&gt; appears and allows you to setup the export.</source>
        <translation>Exportiere Projekt: Exportiert das aktuelle Projekt und alle verwendeten Dateien in einen neuen Ordner. Der Dialog &lt;a href=&quot;0107.html&quot;&gt; erscheint und Sie können die Einstellungen für den Export vornehmen.</translation>
    </message>
    <message>
        <source>Allows you to open the &lt;a href=&quot;0108.html&quot;&gt;project properties dialog&lt;/a&gt;</source>
        <translation>Öffnet den Dialog &lt;a href=&quot;0108.html&quot;&gt;Projekteigenschaften&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Allows you to define applications settings. The &lt;a href=&quot;0101.html&quot;&gt;application settings dialog&lt;/a&gt; appears.</source>
        <translation>Ermöglicht die Festlegung der Anwendungseinstellungen. Der Dialog &lt;a href=&quot;0101.html&quot;&gt;Anwendungseinstellungen&lt;/a&gt; erscheint.</translation>
    </message>
    <message>
        <source>Add empty slide: Allows you to add an empty slide : the new empty slide is appended to the project and is displayed in the &lt;a href=&quot;0023.html&quot;&gt;timeline&lt;/a&gt;.</source>
        <translation>Fügt ein leeres Dia ein: Das Dia wird am Ende des Projektes angefügt und wird in der &lt;a href=&quot;0023.html&quot;&gt;Zeitleiste&lt;/a&gt; angezeigt.</translation>
    </message>
    <message>
        <source>Add a predefined title slide: Allows you to add a slide based on a model. The &lt;a href=&quot;0103.html&quot;&gt;predefined title slide properties dialog&lt;/a&gt; appears.</source>
        <translation>Fügt einen vordefinierten Titel ein. Ermöglicht das Hinzufügen von Dias auf Basis eines Modells. Der Dialog &lt;a href=&quot;0103.html&quot;&gt;Vordefinierten Titeleigenschaften&lt;/a&gt; erscheint.</translation>
    </message>
    <message>
        <source>Allows you to add photo or video files : A &lt;a href=&quot;0109.html&quot;&gt;file selection dialog&lt;/a&gt; appears and allows you to select one or more files. </source>
        <translation>Ermöglicht das Hinzufügen von Fotos oder Videodateien: Der Dialog &lt;a href=&quot;0109.html&quot;&gt;Dateiauswahl&lt;/a&gt; erscheint und Sie können eine oder mehere Dateien auswählen.</translation>
    </message>
    <message>
        <source>Allows you to add the slides of an existing project to the end the current project: a &lt;a href=&quot;0109.html&quot;&gt;file selection dialog&lt;/a&gt; appears and allows you to select a project file. Slides, slide settings, music and background of the project are added to the current project.</source>
        <translation>Ermöglicht das Hinzufügen von Dias von einem existierendem Projekt an das Ende des aktuellen Projektes. Der Dialog &lt;a href=&quot;0109.html&quot;&gt;Dateiauswahl&lt;/a&gt; erscheint und Sie können die entsprechende Projektdatei auswählen. Dias, Diaeinstellungen, Musikstücke und Hintergründe werden dem aktuellem Projekt hinzugefügt.</translation>
    </message>
    <message>
        <source>Allows you to cut the current slide (remove it from the &lt;a href=&quot;0023.html&quot;&gt;timeline&lt;/a&gt; and put it in the clipboard).</source>
        <translation>Ermöglicht das Ausschneiden des aktuellen Dias (Entfernen von der &lt;a href=&quot;0023.html&quot;&gt;Zeitleiste&lt;/a&gt; und Ablegen in der Zwischenablage).</translation>
    </message>
    <message>
        <source>Open the &lt;a href=&quot;0104.html&quot;&gt;background properties dialog&lt;/a&gt; (Equivalent to a double click on the background track)</source>
        <translation>Öffnet den Dialog &lt;a href=&quot;0104.html&quot;&gt;Hintergrundeigenschaften&lt;/a&gt; (Gleichzusetzen mit einem Doppelklick auf die Hintergrundspur)</translation>
    </message>
    <message>
        <source>Depending on the slide type, open the &lt;a href=&quot;0119.html&quot;&gt;slide properties dialog&lt;/a&gt; if it&apos;s a standard slide or open the &lt;a href=&quot;0103.html&quot;&gt;predefined title slide properties dialog&lt;/a&gt; if it&apos;s a predefined title slide. (Equivalent to a double click on the mounting track)</source>
        <translation>Abhängig von der Art des Dias, öffnet sich der Dialog &lt;a href=&quot;0119.html&quot;&gt;Diaeigenschaften&lt;/a&gt; bei einem Standard Dia oder es öffnet sich der Dialog &lt;a href=&quot;0103.html&quot;&gt;Vordefinierte Titeleigenschaften&lt;/a&gt; wenn es ein vordefinierter Titel ist (Gleichzusetzen mit einem Doppelklick auf die Montagespur)</translation>
    </message>
    <message>
        <source>Open the &lt;a href=&quot;0114.html&quot;&gt;music properties dialog&lt;/a&gt; (Equivalent to a double click on the music track)</source>
        <translation>Öffnet den Dialog für &lt;a href=&quot;0114.html&quot;&gt;Musikeigenschaften&lt;/a&gt; (Gleichzusetzen mit einem Doppelklick auf die Musikspur)</translation>
    </message>
    <message>
        <source>Open the &lt;a href=&quot;0122.html&quot;&gt;transition properties dialog&lt;/a&gt; (Equivalent to a double click on the transition)</source>
        <translation>Öffnet den Dialog &lt;a href=&quot;0122.html&quot;&gt; Übergangseigenschaften&lt;/a&gt; (Gleichzusetzen mit einem Doppelklick auf den Übergangseffekt)</translation>
    </message>
    <message>
        <source>It is possible to add slides by Drag and Drop directly using the file browser. Drag photos or videos onto the &lt;a href=&quot;0023.html&quot;&gt;timeline&lt;/a&gt; and slides are created at the point you release the files.</source>
        <translation>Sie haben die Möglichkeit Dias auch über Drag &amp; Drop einzufügen. Ziehen Sie mit gedrückter linker Maustaste ein Bild oder Video an die Stelle in der &lt;a href=&quot;0023.html&quot;&gt;Zeitleiste&lt;/a&gt; wo das Bild oder Video eingefügt werden soll und lassen anschliessend die linke Maustaste los.</translation>
    </message>
    <message>
        <source>Allows you to render the video for selected equipment from the device database. </source>
        <translation>Ermöglicht das Umwandeln auf die Systeme die in der Gerätedatenbank gespeichert sind.</translation>
    </message>
    <message>
        <source>The &lt;a href=&quot;0115.html&quot;&gt;render movie dialog&lt;/a&gt; from database appears.</source>
        <translation>Der Dialog &lt;a href=&quot;0115.html&quot;&gt;Video erstellen&lt;/a&gt; erscheint.</translation>
    </message>
    <message>
        <source>Allows you to render the video in a lossless format. Lossless format is not destructive, so it is possible to render several times the same video without losing in quality. The &lt;a href=&quot;0115.html&quot;&gt;render movie dialog&lt;/a&gt; appears.</source>
        <translation>Ermöglicht die Umwandlung im verlustfreiem Format. Das verlustfreie Format wirkt sich nicht negativ auf die Bildqualität aus, so dass ohne Qualitätsverlust auch mehrere Berechnungen mit dem Bildmaterial durchgeführt werden können.
Der Dialog  &lt;a href=&quot;0115.html&quot;&gt;Video umwandeln&lt;/a&gt; öffnet sich.</translation>
    </message>
    <message>
        <source>Allows you to render the video using the &lt;a href=&quot;0115.html&quot;&gt;Advanced render movie dialog&lt;/a&gt;.</source>
        <translation>Ermöglicht das Erstellen des Videos über den Dialog &lt;a href=&quot;0115.html&quot;&gt;Erweiterte Videoerstellung&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Export Soundtrack</source>
        <translation>Musikspur exportieren</translation>
    </message>
    <message>
        <source>Allows you to render only the sound track of the project. The &lt;a href=&quot;0115.html&quot;&gt;render movie dialog&lt;/a&gt; appears.</source>
        <translation>Ernöglicht es, nur dier Musikspur des Projektes zu erstellen. Der Dialog &lt;a href=&quot;0115.html&quot;&gt;Video erstellen&lt;/a&gt; erscheint.</translation>
    </message>
    <message>
        <source>Note: Each selected file is added to the project using sort order specified in the configuration menu of the multimedia file explorer.</source>
        <translation>Anmerkung : Jede ausgewählte Datei wird entsprechend der Einstellungen im Konfigurationsmenü des Multimediaexplorers einsortiert.</translation>
    </message>
    <message>
        <source>Allows you to paste the slide or the image currently in the clipboard into the &lt;a href=&quot;0023.html&quot;&gt;timeline&lt;/a&gt;.</source>
        <translation>Ermöglicht das Einfügen des Dias oder Bildes, welches sich aktuell in der Zwischenablage befindet, in die &lt;a href=&quot;0023.html&quot;&gt;Zeitleiste&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Add a map: Allows you to add a Google Maps map. The &lt;a href=&quot;0110.html&quot;&gt;correct, reframe or cut image or video dialog&lt;/a&gt; appears.</source>
        <translation>Hinzufügen einer Karte: Ermöglicht das Hinzufügen einer Google Karte. Der &lt;a href=&quot;0110.html&quot;&gt;Korrigieren, Beschneiden oder Kürzen von Bildern oder Videos&lt;/a&gt; Dialog erscheint.</translation>
    </message>
</context>
<context>
    <name>0023</name>
    <message>
        <source>The timeline</source>
        <translation>Die Zeitleiste</translation>
    </message>
    <message>
        <source>The timeline lists the slides which compose the project. The slides are listed from left to right.</source>
        <translation>Die Zeitleiste beinhaltet die einzelnen Dias in Ihrer Reihenfolge innerhalb des Projektes. Dia Dias sind von links nach rechts aufgelistet.</translation>
    </message>
    <message>
        <source>Each slide is represented by the 3 tracks:</source>
        <translation>Jedes Dia ist durch drei Spuren repräsentiert:</translation>
    </message>
    <message>
        <source>The background track:</source>
        <translation>Die Hintergrundspur:</translation>
    </message>
    <message>
        <source>An icon corresponding to the transition selected to pass from the previous background to this slide (if a new background is defined). .</source>
        <translation>ein Symbol, das den Übergang vom vorherigen Hintergrund zu diesem Dia anzeigt (wenn ein neuer Hintergrund definiert wurde).</translation>
    </message>
    <message>
        <source>A thumbnail representing the background associated with this slide.</source>
        <translation>eine Bildvorschau des gewählten Hintergrundes für dieses Dia.</translation>
    </message>
    <message>
        <source>The slide number.</source>
        <translation>die Nummer des Dia.</translation>
    </message>
    <message>
        <source> Possibly this icon may appear at the upper left if the slide is used as chapter start</source>
        <translation> Möglicherweise wird dieses Symbol links oben erscheinen. Es zeigt an, dass hier ein neues Kapitel startet</translation>
    </message>
    <message>
        <source>The mounting track:</source>
        <translation>Die Hauptspur:</translation>
    </message>
    <message>
        <source>An icon corresponding to the transition selected to pass from the previous slide to this slide, under which is indicated the duration of the transition in seconds.</source>
        <translation>Ein Symbol das den Übergang vom vorherigem Dia zu diesem anzeigt. Darunter wird die gewählte Zeit für den Übergang in Sekunden angezeigt.</translation>
    </message>
    <message>
        <source>A thumbnail in the form of a static image for slides consisting of title or photo, or in the form of a video (under which is placed a soundtrack).</source>
        <translation>Ein Vorschaubild des Dias, das sich zusammensetzt aus den beinhaltenen Titeln, Fotos oder Videos (unter dem eventuell eine Musikspur angezeigt wird).</translation>
    </message>
    <message>
        <source> Possibly this icon may appear at the upper left if the slide is composed of several blocks.</source>
        <translation> Möglicherweise erscheint dieses Symbol in der linken oberen Ecke des Vorschaubildes, wenn das Dia aus mehreren Blöcken besteht.</translation>
    </message>
    <message>
        <source> Possibly this icon may appear at the upper right if the slide is animated (that is consisting of more than one shot).</source>
        <translation> Möglicherweise erscheint dieses Symbol in der rechten oberen Ecke des Vorschaubildes, wenn das Dia animiert ist (das entspricht mehreren Aufnahmen).</translation>
    </message>
    <message>
        <source> Possibly this icon may appear at the bottom right if the slide contains at least an image for which you defined a transformation.</source>
        <translation> Möglicherweise erscheint dieses Symbol in der rechten unteren Ecke des Vorschaubildes, wenn das letzte Bild einen Effekt zugeordnet hat.</translation>
    </message>
    <message>
        <source> Possibly this icon may appear at the bottom left if the slide is an automatic predefined slide.</source>
        <translation> Möglicherweise erscheint dieses Symbol in der linken unteren Ecke des Vorschaubildes, wenn das Dia einen automatisch vordefinierten Titel zugeordnet hat.</translation>
    </message>
    <message>
        <source> Possibly this icon may appear at the bottom right if the predefined slide is a project title slide.</source>
        <translation> Möglicherweise erscheint dieses Symbol in der rechten unteren Ecke des Vorschaubildes, wenn das Dia einen vordefinierten Titel als Projekttitel zugeordnet hat.</translation>
    </message>
    <message>
        <source> Possibly this icon may appear at the bottom right if the predefined slide is a chapter title slide.</source>
        <translation> Möglicherweise erscheint dieses Symbol in der rechten unteren Ecke des Vorschaubildes, wenn das Dia einen vordefinierten Titel als Kapiteltitel zugeordnet hat.</translation>
    </message>
    <message>
        <source> Possibly this icon may appear at the bottom right if the predefined slide is a generic title slide.</source>
        <translation> Möglicherweise erscheint dieses Symbol in der rechten unteren Ecke des Vorschaubildes, wenn das Dia einen vordefinierten Titel als Titel zugeordnet hat.</translation>
    </message>
    <message>
        <source>Remark: The thumbnail represents the first image on the slide.</source>
        <translation>Anmerkung: Die Bildvorschau zeigt das erste Bild aus dem aktuellen Dia.</translation>
    </message>
    <message>
        <source>The music track:</source>
        <translation>Die Musikspur:</translation>
    </message>
    <message>
        <source>Every play-list is shown by a change of color.</source>
        <translation>Jede Abspielliste wird durch einen Wechsel der Farbe angezeigt.</translation>
    </message>
    <message>
        <source>The track is more or less filled according to the sound volume selected, displaying the variation in volume.</source>
        <translation>Die Spur ist in der Höhe mehr oder weniger gefüllt, je nach eingestellter Lautstärke.</translation>
    </message>
    <message>
        <source>The musical transitions (fade in/out) are shown as crossings.</source>
        <translation>Der Musikübergang von einem Titel zum nächsten wird durch entsprechend an- und absteigende Balken dargestellt.</translation>
    </message>
    <message>
        <source>Remark: Possible pauses are symbolized by a change in the volume to zero and the display of this icon: </source>
        <translation>Anmerkung: Eventuelle Pausen in den Musikstücken werden dadurch angezeigt, dass die Lautstärke auf 0 gesetzt wird und statt dessen dieses Symbol erscheint:</translation>
    </message>
    <message>
        <source>To modify an element:</source>
        <translation>Ändern eines Elementes:</translation>
    </message>
    <message>
        <source>You can also call a contextual menu by doing a right click ahead the thumbnail or click on the Edit button. This contextual menu allows you to select an action.</source>
        <translation>Sie können ebenso das Kontextmenü (mit rechter Maustaste auf das Vorschaubild klicken) aufrufen, um die gewünschte Aktion anzuwählen.</translation>
    </message>
    <message>
        <source>To modify several elements at one time:</source>
        <translation>Um mehrere Elemente auf einmal zu ändern:</translation>
    </message>
    <message>
        <source>You can select several slides by using the mouse and the CTRL and SHIFT:</source>
        <translation>Sie können mehrere Dias mit der Maus auswählen, indem Sie während des Klickens auf ein Dia die STRG- und die SHIFT- Taste verwenden:</translation>
    </message>
    <message>
        <source>CTRL + click on a slide: add or removes the slide of the selection</source>
        <translation>STRG + Klick auf ein Dia: Hinzufügen oder Entfernen eines Dia aus der Auswahl</translation>
    </message>
    <message>
        <source>SHIFT + click on a slide: add all the slides understood between the last one selected and the slide which you have just clicked</source>
        <translation>SHIFT + Klick auf das Dia: Hinzufügen aller Dias die zwischen dem zuletzt angewähltem und dem aktuell angeklickten Dia liegen</translation>
    </message>
    <message>
        <source>Then, by making a right click on one of the slides of the selection, a contextual menu appears.</source>
        <translation>Anschliessend klicken Sie mit der rechten Maustaste auf eines der Dias in der Auswahl und ein Kontextmenü erscheint.</translation>
    </message>
    <message>
        <source>This menu suggests various actions making on all the slides of the selection such as:</source>
        <translation>Dieses Menü bietet verschiedene Aktionen, die an der Auswahl an Dias durchgeführt werden können. Zum Beispiel:</translation>
    </message>
    <message>
        <source>Copy/Cut/Paste/Remove all slide of the selection</source>
        <translation>Kopieren/Ausschneiden/Einfügen/Entfernen aller Dias in der Auswahl</translation>
    </message>
    <message>
        <source>Modify the duration of the 1st shot for all the slides of the selection</source>
        <translation>Ändern der Laufzeit für die erste Aufnahme aller Dias dieser Auswahl</translation>
    </message>
    <message>
        <source>Modify the transition for all the slides of the selection</source>
        <translation>Ändern des Übergangeffektes für alle Dias in der Auswahl</translation>
    </message>
    <message>
        <source>Modify the music for all the slides of the selection</source>
        <translation>Ändern der Musikspur für alle Dias in der Auswahl</translation>
    </message>
    <message>
        <source>etc...</source>
        <translation>usw...</translation>
    </message>
    <message>
        <source>To reorder the slide in the timeline:</source>
        <translation>Um die Reihenfolge der Dias auf der Zeitleiste zu verändern:</translation>
    </message>
    <message>
        <source>Simply drag the slide to a new position with the mouse (drag &amp; drop)</source>
        <translation>Ziehen Sie einfach mit gedrückter linker Maustaste das Dia an die neue Position in der Zeitleiste (Drag &amp; Drop)</translation>
    </message>
    <message>
        <source>To modify the display of the timeline:</source>
        <translation>Um die Darstellung der Zeitleiste zu verändern:</translation>
    </message>
    <message>
        <source>The timeline settings commands are in the status bar, to the right, at the bottom of the main window.</source>
        <translation>Die Einstellungenfür die Zeitleiste können mit den Symbolen in der Statuszeile rechts unten geändert werden.</translation>
    </message>
    <message>
        <source> Increases the size of the thumbnails but reduces the number of thumbnails shown in the timeline.</source>
        <translation> Vergrößert die Vorschaubilder, reduziert allerdings die Anzahl der gleichzeitig anzeigbaren Dias auf der Zeitleiste.</translation>
    </message>
    <message>
        <source> Reduces the size of the thumbnails and increases the number of thumbnails shown in the timeline.</source>
        <translation> Verkleinert die Vorschaubilder, vergrößert dadurch die Anzahl der gleichzeitig anzeigbaren Dias auf der Zeitleiste.</translation>
    </message>
    <message>
        <source>To modify the background, double-click the thumbnail of the background. This action opens the &lt;a href=&quot;0104.html&quot;&gt;Define background&lt;/a&gt; dialog.</source>
        <translation>Um den Hintergrund zu ändern, doppelklicken Sie das Vorschaubild des Hintergrundes. Dies öffnet den Dialog &lt;a href=&quot;0104.html&quot;&gt;Erstelle Hintergrund&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>To modify the entering slide transition, double-click the slide transition. This action opens the &lt;a href=&quot;0122.html&quot;&gt;Define the entering slides transitions&lt;/a&gt; dialog.</source>
        <translation>Um den Übergangseffekt des Dias zu ändern, doppelklicken Sie das Symbol für den Diaübergang. Dies öffnet den Dialog &lt;a href=&quot;0122.html&quot;&gt;Erstellung eines Diaüberganges&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>To modify the music associated with the slide, double-click the zone corresponding to the slide musical track. This action opens the &lt;a href=&quot;0114.html&quot;&gt;Define the music track&lt;/a&gt; dialog.</source>
        <translation>Um die zugeordnete Musik zu ändern, doppelklicken sie in den entsprechenden Bereich der Musikspur unterhalb des Dias. Dies öffnet den Dialog &lt;a href=&quot;0114.html&quot;&gt;Erstellen eines Musiktracks&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>To modify the slide (framing, filter, animation, etc.) double-click the thumbnail. This action opens the &lt;a href=&quot;0119.html&quot;&gt;slides properties dialog&lt;/a&gt; if it&apos;s a standard slide or open the &lt;a href=&quot;0103.html&quot;&gt;predefined title slide properties dialog&lt;/a&gt; if it&apos;s a predefined title slide.</source>
        <translation>Um das Dia zu verändern (Zuschneiden, Filter, Animation, etc.), doppelklicken sie auf die Bildvorschau des Dias. Dies öffnet den Dialog &lt;a href=&quot;0119.html&quot;&gt;Ändern eines Dias&lt;/a&gt; für ein Standard Dia oder es öffnet den Dialog &lt;a href=&quot;0103.html&quot;&gt;Ändern eines vordefinierten Titeldias&lt;/a&gt;l. </translation>
    </message>
    <message>
        <source>To select the current slide:</source>
        <translation>Um das aktuelle Dia zu wählen:</translation>
    </message>
    <message>
        <source>Click on a slide to define it as current slide.</source>
        <translation>Klicken Sie auf das entsprechende Dia um dieses als aktuelles Dia zu setzen.</translation>
    </message>
    <message>
        <source>Use the mouse wheel to change the current slide.</source>
        <translation>Verwenden Sie das Mausrad um das aktuelle Dia zu ändern.</translation>
    </message>
    <message>
        <source>Note: When previewing the selected slide is automatically defined on the current slide preview.</source>
        <translation>Anmerkung :Wenn die Vorschau eingeschaltet ist, wird automatisch das aktuelle Dia in der Vorschau dargestellt. </translation>
    </message>
    <message>
        <source>On slide associated with the music, the cover, artist and song title are displayed</source>
        <translation>Bei Dias die mit der Musik verknüpft sind, wird die Hülle, der Artist und der Songtitel angezeigt</translation>
    </message>
    <message>
        <source>To move the music or the background associated to a slide to another slide:</source>
        <translation>Verschieben der Musik oder des zugewiesenen Hintergrundes von einem Dia zu einem anderem:</translation>
    </message>
    <message>
        <source>Simply drag the music or background to a new position with the mouse (drag &amp; drop)</source>
        <translation>Einfach die Musik oder den Hintergrund auf eine neue Position verschieben (Drag &amp; Drop)</translation>
    </message>
</context>
<context>
    <name>0024</name>
    <message>
        <source>The multimedia file browser</source>
        <translation>Der Multimediabrowser für Dateien</translation>
    </message>
    <message>
        <source>ffDiaporama offers a multimedia file browser which is shown in the main window when you select the file browser mode in the main window. It is designed for quick access to the multimedia files on your computer.</source>
        <translation>ffDiaporama bietet einen Dateibrowser für Multimediadateien, welcher im Hauptfenster dargestellt wird. Er hilft Ihnen, möglichst effektiv und schnell Ihre Multimediadateien auf Ihrem Computer zu finden.</translation>
    </message>
    <message>
        <source>The main advantages are, that you can view the multimedia information of specific files even without or before adding them to your project. For instance, you can filter the view to obtain information of only photos, video files or music files.</source>
        <translation>Der Hauptvorteil liegt in der Vorschau der Multimediainformationenv on ausgewählten Dateien,ohne dass Sie diese vorher in das Projekt importieren müssen. Dies wird durch einen Filter ermöglicht, der es erlaubt bestimmte Arten von Multimediadateien (Bilder; Videos; Musikstücke) aufzufinden.</translation>
    </message>
    <message>
        <source>And moreover, you can select one or more multimedia files and add them to your project with drag &amp; drop.</source>
        <translation>So können Sie eine oder mehrere Dateien auswählen und mittels “Drag &amp; Drop” in Ihr Projekt auf der Zeitleiste einfügen.</translation>
    </message>
    <message>
        <source>The main purpose of the file browser is therefore the viewing and use of (multimedia) files. Some file management tasks are integrated for your convenience, i.e. creating folders deleting files or folders and renaming files or folders.</source>
        <translation>Ein weiterer Hauptvorteil ist das Betrachten und die Organisation von (Multimedia-) Dateien. So sind zum Beispiel einige Funktionen integriert, die eine Dateiverwaltung ernöglichen (Ordner erstellen; Dateien oder Ordner löschen; Umbennenen von Dateien oder Ordnern).</translation>
    </message>
    <message>
        <source>Remark:</source>
        <translation>Anmerkung:</translation>
    </message>
    <message>
        <source>Files can be presented differently than by the system file browser (presence of filters showing only some files - management of the file/icon pairs - etc.)</source>
        <translation>Dateien werden anders dargestellt als im “normalen” Dateibrowser (durch das Vorhandensein von Filtern werden nur bestimmte Dateien dargestellt)</translation>
    </message>
    <message>
        <source>The multimedia file browser follows the display rules used by the majority of multimedia systems (gateway, multimedia hard drive, etc.): </source>
        <translation>Der Multimediabrowser folgt den Darstellungsregeln von Multimediasystemen (Gateway; Multimedia Harddisk, usw.): </translation>
    </message>
    <message>
        <source>If a drive or a folder contains a folder.jpg file, then this image file is used as icon for the drive or the folder</source>
        <translation>Wenn ein Ordner oder Laufwerk JPG-Dateien enthält, dann wird dieses Bild als Vorschaubild für den Ordner/das Laufwerk verwendet</translation>
    </message>
    <message>
        <source>If a video or music file is accompanied with an image file with the .jpg extension carrying the same name, then this image file is used as icon for this file (example: holidays.mkv and holidays.jpg in the same folder</source>
        <translation>Wenn zu einer Video- oder Musikdatei ein JPG-Bild existiert, wird dieses als Vorschaubild für dieses Video bzw. für dieses Musikstück verwendet</translation>
    </message>
    <message>
        <source>The ffDiaporama multimedia file browser is not designed to manage files: so you cannot make copies of files or move files.</source>
        <translation>Der Multimediabrowser von ffDiaporama ist im Gegensatz zum Dateibrowser nicht für Verwaltungsaufgaben von Dateien konzipiert (Erstellen von Kopien oder verschieben von Dateien im Verzeichnissbaum).</translation>
    </message>
    <message>
        <source> Folder tree</source>
        <translation> Ordnerbaum</translation>
    </message>
    <message>
        <source>The folder tree shows the drives and folders of your system. Under every drive the folders of that drive are listed, then under every folder the subfolders, if present and so on.</source>
        <translation>Der Ordnerbaum zeigt die vorhandene Laufwerke und Ordner Ihres Systems. Unter jedem Laufwerksbuchstaben weden die enthaltenen Ordner gezeigt und unterhalb die Datein und/oder weitere Ordner falls vorhanden.</translation>
    </message>
    <message>
        <source>You can:</source>
        <translation>Sie können:</translation>
    </message>
    <message>
        <source>Click a drive or a folder to select it</source>
        <translation>Auf einen Laufwerksbuchstaben oder einen Ordner klicken um diesen zu selektieren</translation>
    </message>
    <message>
        <source>Click the triangle preceding the drive name or folder name to display or hide the list of subfolders</source>
        <translation>Klicken Sie auf das kleine Dreieck vor dem Laufwerksbuchstaben oder Ordner um die darunter liegenden Ordner/Dateien anzuzeigen oder zu verstecken</translation>
    </message>
    <message>
        <source>Make a right click on a drive or a folder to call the contextual menu on this drive or folder. The contextual menu proposes then the following options:</source>
        <translation>Klicken Sie mit der rechten Maustaste auf einen Laufwerksbuchstaben oder Ordner um das Kontextmenü aufzurufen. Das Kontextmenü zeigt das folgende Optionen: </translation>
    </message>
    <message>
        <source>&lt;B&gt;Refresh all&lt;/B&gt; to update the whole tree (as so if you have to insert a CD-ROM, a DVD or an USB drive, this one is shown in the tree)</source>
        <translation>&lt;b&gt;alles Aktualisieren&lt;/b&gt; um den gesamten Ordnerbaum zu aktualisieren (wenn zum Beispiel ein neuer USB-Stick angesteckt oder eine CD-Rom eingelegt wurde)</translation>
    </message>
    <message>
        <source>&lt;B&gt;Refresh from here&lt;/B&gt; to update the tree from this folder (update only what is under this folder)</source>
        <translation>&lt;b&gt;ab hier Aktualisieren&lt;/b&gt; um nur den Teilbaum vom aktuellen Ordner zu aktualisieren (Aktualisiert nur was unterhalb dieses Ordners ist)</translation>
    </message>
    <message>
        <source>Create a new folder</source>
        <translation>Erzeugen eines neuen Ordners</translation>
    </message>
    <message>
        <source>Remove a folder</source>
        <translation>Entfernen eines Ordners</translation>
    </message>
    <message>
        <source>Rename a folder</source>
        <translation>Umbenennen eines Ordners</translation>
    </message>
    <message>
        <source>The current folder view lists files and subfolders present in the current folder.</source>
        <translation>Die aktuelle Ordneransicht zeigt alle vorhandenen Dateien und Unterordner im aktuellen Ordner.</translation>
    </message>
    <message>
        <source>Files are shown:</source>
        <translation>Dateien werden angezeigt:</translation>
    </message>
    <message>
        <source>Either as a table with numerous information if you selected the details view in the settings menu of the browser</source>
        <translation>Entweder als Tabelle mit zahlreichen Informationen, wenn Sie die Option &quot;Detailansicht&quot; in den Einstellungen des Browser aktiviert haben</translation>
    </message>
    <message>
        <source>Or as image if you selected the icons view in the settings menu of the browser</source>
        <translation>oder als Bild, wenn Sie die Option &quot;Symbolansicht&quot; in den Einstellungen des Browser gesetzt haben</translation>
    </message>
    <message>
        <source>Files are shown according to the filter of file selection in the settings menu of the browser</source>
        <translation>Dateien werden entsprechend dem in den Einstellungen des Browsers gesetzten Filter angezeigt</translation>
    </message>
    <message>
        <source>Select a file or a folder by clicking it</source>
        <translation>Wählen Sie eine Datei oder einen Ordner durch Anklicken</translation>
    </message>
    <message>
        <source>Select several files or folders by using SHIFT and CTRL keys</source>
        <translation>Wählen Sie mehrere Dateien oder Ordner durch Verwendung der Tasten SHIFT + STRG</translation>
    </message>
    <message>
        <source>CTRL+Click on a file: Add to the current selection or remove from the current selection</source>
        <translation>STRG + Klicken auf eine Datei: Hinzufügen oder Entfernen des angeklickten Elemtens zur aktuellen Auswahl</translation>
    </message>
    <message>
        <source>SHIFT+Click on a file: Select all the files between the last selected and the one which you have just clicked</source>
        <translation>SHIFT +Klicken auf eine Datei: Auswählen aller Dateien zwischen diesem und dem zuletzt angeklicktem Element</translation>
    </message>
    <message>
        <source>Double click a file or a folder:</source>
        <translation>Doppelkllick auf eine Datei oder auf einen Ordner:</translation>
    </message>
    <message>
        <source>If it&apos;s a folder: select it as the current folder and opens it</source>
        <translation>Wenn es sich um einen Ordner handelt: Wählt diesen als aktuellen Ordner und zeigt dessen Inhalt</translation>
    </message>
    <message>
        <source>If it&apos;s a file: open the program that is by default associated with the file type in the system. For example, if you have associated GIMP with .jpg files in the system file browser, then a double click on a .jpg file will open the file with GIMP. (Remark: A double click on a ffDiaporama project file, opens the ffDiaporama project)</source>
        <translation>Bei einer Datei: Öffnet das im System zugeordnete Programm für diesen Dateityp. Zum Beispiel: Wenn Sie dem Dateityp .jpg das Programm GIMP zugeordnet haben, öffnet ein Doppelklick das Programm GIMP mit Ihrer ausgewählten Datei (Anmerkung: Wenn Sie ein ffDiaporama-Projekt (.ffd) anklicken, öffnet sich ffDiaporama)</translation>
    </message>
    <message>
        <source>Perform a right click on one of the files or folders of the selection to open the contextual menu. According to the elements that are present in the selection, the menu will propose different actions</source>
        <translation>Bei Ausführung eines rechten Mausklick auf ein Element, öffnet sich das Kontextmenü. Die Anzahl an Einträgen im Kontextmenü orientiert sich am angeklicktem Dateityp und der Möglichkeiten, die sich damit anbieten</translation>
    </message>
    <message>
        <source>You can also use Drag &amp; Drop to move selected files towards the timeline to:</source>
        <translation>Sie können Dateien mittels Drap &amp; Drop direkt auf die Zeitleiste plazieren:</translation>
    </message>
    <message>
        <source>Add them to the project, if they are images, videos or ffDiaporama project files</source>
        <translation>diese dem Projekt hinzuzufügen, wenn es sich um Bilder, Videos oder ffDiaporama Projektdateien handelt</translation>
    </message>
    <message>
        <source>Use them as playlist, if they are audio files</source>
        <translation>diese werden als Abspiellisten verwendet, wenn es sich um Musikstücke handelt</translation>
    </message>
    <message>
        <source>Status bar to the current selection</source>
        <translation>Statuszeile für aktuelle Auswahl</translation>
    </message>
    <message>
        <source>The status bar to the current selection shows information about one or several selected files.</source>
        <translation>Die Statuszeile für die aktuelle Auswahl zeigt Informationen über die ausgewählte(n) Datei(en).</translation>
    </message>
    <message>
        <source>For a single file selection, the following information is shown:</source>
        <translation>Für eine einzelne Datei, werden folgende Informationen angezeigt:</translation>
    </message>
    <message>
        <source>Image of the file</source>
        <translation>Bild der Datei</translation>
    </message>
    <message>
        <source>Filename (Filesize)</source>
        <translation>Dateiname (Dateigröße)</translation>
    </message>
    <message>
        <source>According to the file type: </source>
        <translation>Abhängig vom Dateityp:</translation>
    </message>
    <message>
        <source>Image: Information about the size of the image / copyright / camera / orientation </source>
        <translation>Bilder: Informationen über die Größe des Bildes / Copyright / Kamera / Ausrichtung </translation>
    </message>
    <message>
        <source>Video: Information about the format of the images / the video track / the audio track / duration </source>
        <translation>Video: Informationen über das Format des Bildes / die Videospur / die Audiospur / Laufzeit </translation>
    </message>
    <message>
        <source>Music: Information about the audio format / duration </source>
        <translation>Musik: Informationen über das Audioformat / Laufzeit </translation>
    </message>
    <message>
        <source>ffDiaporama project: Version of ffDiaporama / Format / Number of slide and chapter / duration of the project </source>
        <translation>ffDiaporama Projekt: Version von ffDiaporama / Format / Anzahl Dias und Kapitel / Laufzeit des Projektes </translation>
    </message>
    <message>
        <source>Image : Information about the picture shooting (Aperture and Focal / Lens / With or without flash) </source>
        <translation>Bilder : Informationen von der Kamera (Blende und Fokus / Objektiv / mit oder ohne Blitz) </translation>
    </message>
    <message>
        <source>Video: TAG contents (Title / Artist / Album / Year) </source>
        <translation>Video : TAG Inhalte (Titel / Künstler / Album / Jahr)</translation>
    </message>
    <message>
        <source>Music: TAG contents (Title / Artist / Album / Year) </source>
        <translation>Musik : TAG Inhalte (Titel / Künstler / Album / Jahr)</translation>
    </message>
    <message>
        <source>ffDiaporama project: TAG contents (Title / Artist / Album / Year) </source>
        <translation>ffDiaporama Projekt : TAG Inhalte (Titel / Ersteller / Album / Jahr) </translation>
    </message>
    <message>
        <source>For a multiple files selection, the following information is shown:</source>
        <translation>Für mehrere ausgewählte Elemente, werden folgende Informationen angezeigt :</translation>
    </message>
    <message>
        <source>Icon of the file type</source>
        <translation>Symbole für den Dateityp</translation>
    </message>
    <message>
        <source>Number of files and type of files</source>
        <translation>Anzahl der Dateien dieses
 Typs</translation>
    </message>
    <message>
        <source>Durations accumulated by files</source>
        <translation>Gesamtlaufzeit der Dateien</translation>
    </message>
    <message>
        <source>Size accumulated by files</source>
        <translation>Gesamtgröße der Dateien</translation>
    </message>
    <message>
        <source>Status bar of the current folder</source>
        <translation>Statuszeile des aktuellen Ordners</translation>
    </message>
    <message>
        <source>The status bar of the current folder shows the following information about the current folder:</source>
        <translation>Die Statuszeile des aktuellen Ordners zeigt folgende Informationen über diesen Ordner:</translation>
    </message>
    <message>
        <source> Number of files</source>
        <translation> Anzahl der Dateien</translation>
    </message>
    <message>
        <source> Number of sub-folders</source>
        <translation> Anzahl der Unterordner</translation>
    </message>
    <message>
        <source> Total size of shown files</source>
        <translation> Gesamtgröße aller gezeigten Dateien</translation>
    </message>
    <message>
        <source> Total duration of shown files</source>
        <translation> Gesamtlaufzeit der angezeigten Dateien</translation>
    </message>
    <message>
        <source>Space occupied on the disk / Total space of the disk</source>
        <translation>Platzverbrauch auf dem Datenträger / Gesamtplatz auf dem Datenträger</translation>
    </message>
    <message>
        <source> Favorites menu</source>
        <translation>Favoritenmenü</translation>
    </message>
    <message>
        <source>The list of the favourite folders can be managed in the favorites menu.</source>
        <translation>Die Liste der als Favoriten markierten Ordner kann im Favoritenmenü verwaltet werden.</translation>
    </message>
    <message>
        <source>First line of the menu: </source>
        <translation>Erste Zeile des Menüs:</translation>
    </message>
    <message>
        <source>&lt;U&gt;&lt;B&gt; Add to favorite&lt;/B&gt;&lt;/U&gt; adds the current folder to the list. Then an edit box allows you to give a name for this favorite</source>
        <translation>&lt;U&gt;&lt;B&gt; zu Favoriten hinzufügen&lt;/B&gt;&lt;/U&gt; fügt den aktuellen Ordner zu der Favoritenliste hinzu. Anschliessend öffnet sich eine Eingabezeile, in der ein Name für den Favoriten festgelegt werden kann</translation>
    </message>
    <message>
        <source>Between the first and the last line: </source>
        <translation>Zwischen der ersten und der letzten Zeile:</translation>
    </message>
    <message>
        <source> &lt;U&gt;&lt;B&gt;The list of favorites folders&lt;/B&gt;&lt;/U&gt; is displayed. Select one of the favorite folders to access it directly</source>
        <translation> &lt;U&gt;&lt;B&gt;Liste der Favoritenordner&lt;/B&gt;&lt;/U&gt; wird angezeigt. Wählen Sie einen Ordner aus der Liste, um diesen direkt zu öffnen</translation>
    </message>
    <message>
        <source>Last line of the menu: </source>
        <translation>Letzte Zeile des Menüs: </translation>
    </message>
    <message>
        <source>&lt;U&gt;&lt;B&gt; Manage favorite&lt;/B&gt;&lt;/U&gt; allows to rename or to delete entries of the list. A dialogbox for the modification of the list is displayed</source>
        <translation>&lt;U&gt;&lt;B&gt; Favoriten verwalten&lt;/B&gt;&lt;/U&gt; kann Einträge umbenennen oder löschen. Eine entsprechendes Dialogfenster öffnet sich, um die Aktion durchzuführen</translation>
    </message>
    <message>
        <source> Settings menu</source>
        <translation>Einstellungsmenü</translation>
    </message>
    <message>
        <source>The settings menu allows to modify the display of the current folder:</source>
        <translation>Das Einstellungsmenü erlaubt, die Anzeige für den aktuellen Ordner zu ändern:</translation>
    </message>
    <message>
        <source>Settings of the display mode</source>
        <translation>Einstellung des Anzeigemodus</translation>
    </message>
    <message>
        <source>Details view</source>
        <translation>Detailansicht</translation>
    </message>
    <message>
        <source>Switch the display of the current folder to detail mode. In this mode, the present elements in the folder are shown in a table with numerous information</source>
        <translation>Zeigt den aktuellen Ordner in der Detailansicht an. In diesem Modus werden alle Elemente in einer Tabelle mit zusätzlichen Informationen angezeigt</translation>
    </message>
    <message>
        <source>Icon view</source>
        <translation>Symbolansicht</translation>
    </message>
    <message>
        <source>Switch the display of the current folder to icon mode. In this mode, the present elements in the folder are shown as images</source>
        <translation>Zeigt alle Elemente des aktuellen Ordners in der Symbolansicht. In diesem Modus werden alle Elemente Ihrem Typ entsprechend mit einem Symbol dargestellt</translation>
    </message>
    <message>
        <source>Settings of the filter on files</source>
        <translation>Auswahl eine Anzeigefilters für die Dateien</translation>
    </message>
    <message>
        <source>All files</source>
        <translation>Alle Dateien</translation>
    </message>
    <message>
        <source>Show all the present elements in the current folder</source>
        <translation>Zeigt alle vorhandenen Elemente im aktuellen Ordner</translation>
    </message>
    <message>
        <source>Managed files</source>
        <translation>Verwaltbare Dateien</translation>
    </message>
    <message>
        <source>Limit the display to the usable elements of the current folder:</source>
        <translation>Schränkt die Ansicht auf alle verwendbaren Elemente des aktuellen Ordners:</translation>
    </message>
    <message>
        <source>Image, video and audio files of which the format is recognized by ffDiaporama</source>
        <translation>Bilder, Videos und Musikstücke, deren Format von ffDiaporama verarbeitet werden kann</translation>
    </message>
    <message>
        <source>Subfolders</source>
        <translation>Unterordner</translation>
    </message>
    <message>
        <source>Image files</source>
        <translation>Bilddateien</translation>
    </message>
    <message>
        <source>Limit the display of the current folder to the image files of which the format is recognized by ffDiaporama in the present subfolders</source>
        <translation>Schränkt die Ansicht des aktuellen Ordners auf Bilddateien ein, deren Formate von ffDiaporama verarbeitet werden können</translation>
    </message>
    <message>
        <source>Video files</source>
        <translation>Videodateien</translation>
    </message>
    <message>
        <source>Limit the display of the current folder to the video files of which the format is recognized by ffDiaporama in the present subfolders</source>
        <translation>Schränkt die Anzeige des aktuellen Ordners auf Videodateien ein, deren Formate von ffDiaporama verarbeitet werden können</translation>
    </message>
    <message>
        <source>Audio files</source>
        <translation>Musikdateien</translation>
    </message>
    <message>
        <source>Limit the display of the current folder to the audio files of which the format is recognized by ffDiaporama inthe present subfolders</source>
        <translation>Schränkt die Anzeige des aktuellen Ordners auf Musikstücke ein, deren Formate von ffDiaporama verarbeitet werden können</translation>
    </message>
    <message>
        <source>ffDiaporama projects</source>
        <translation>ffDiaporama Projekte</translation>
    </message>
    <message>
        <source>Limit the display of the current folder to the ffDiaporama project files in the present subfolders</source>
        <translation>Schränkt die Anzeige des aktuellen Ordners auf Projektdateien von ffDiaporama ein</translation>
    </message>
    <message>
        <source>Additional settings</source>
        <translation>Weitere Einstellungen</translation>
    </message>
    <message>
        <source>Display hidden files and folders</source>
        <translation>Anzeige von versteckten Dateien und Ordnern</translation>
    </message>
    <message>
        <source>Show or hide the hidden files and folders. </source>
        <translation>Zeigt oder versteckt die vom System als versteckte Dateien oder versteckte Ordner markierten Elemente.</translation>
    </message>
    <message>
        <source>Under Windows, hidden files and folders have the &lt;B&gt;Hide&lt;/B&gt; file attribute activated. </source>
        <translation>Unter Windows haben versteckte Dateien oder Ordner das Attribut &lt;B&gt;Versteckt&lt;/B&gt; aktiviert.</translation>
    </message>
    <message>
        <source>Under Linux, hidden files and folders have a name beginning with a dot &quot;.&quot; </source>
        <translation>Unter Linux gelten alle Dateien oder Ordner als versteckt, wenn diese einen Punkt &quot;.&quot; vor dem Namen haben</translation>
    </message>
    <message>
        <source>This option accumulates both versions for both systems. So, even under Windows, files and folders with a name beginning with a &quot;.&quot; are considered as hidden files or folders. </source>
        <translation>Diese Option summiert beide Versionen für beide Systeme. Wenn also unter Windows, Dateien oder Ordner einen Punkt &quot;.&quot; als erstes Zeichen im Namen tragen, werden diese ebenfalls als versteckte Dateien oder Ordner behandelt.</translation>
    </message>
    <message>
        <source>Remark: </source>
        <translation>Anmerkung:</translation>
    </message>
    <message>
        <source> or </source>
        <translation> oder </translation>
    </message>
    <message>
        <source> One of this icon is displayed in front of the name of the option as this one is activated or not.</source>
        <translation> Eines dieses Symbole wird vor dem Namen zeigt an, ob diese Option aktiv ist oder nicht.</translation>
    </message>
    <message>
        <source>Hide filename</source>
        <translation>Verstecke Dateinamen</translation>
    </message>
    <message>
        <source>This option is available only for the icon view mode. If this option is activated, the file names will not be shown under the file images. It allows to increase the number of images shown in the view of the current directory. </source>
        <translation>Diese Option ist nur im Symbolmodus aktiv. Wenn diese aktiviert ist, wird der Name nicht unter den Bildsymbolen angezeigt. Es ermöglicht damit die Anzahl der Bilder, die gleichzeitig angezeigt werden können, zu erhöhen.</translation>
    </message>
    <message>
        <source>Sort by number</source>
        <translation>Sortierung nach Nummer</translation>
    </message>
    <message>
        <source>This option sorts the files in order of their numerical suffix : Example: if you select IMG_0025, IMG_0032, MVI_0029 and MVI_0040, the files will be inserted as follows : IMG_0025, MVI_0029, IMG_0032 and MVI_0040</source>
        <translation>Diese Option sortiert die Dateien nach ihrem nummerischen Zusatz : zum Beispiel: Wenn Sie IMG_0025, IMG_0032, MVI_0029 und MVI_0040 wählen, dann werden die Dateien wie folgt eingeordnet: IMG_0025, MVI_0029, IMG_0032 und MVI_0040  </translation>
    </message>
    <message>
        <source>Sort by name</source>
        <translation>Sortierung nach Name</translation>
    </message>
    <message>
        <source>This option sorts the files in alphabetical order</source>
        <translation>Diese Option sortiert die Dateien in alpabetischer Reihenfolge</translation>
    </message>
    <message>
        <source>Sort by date</source>
        <translation>Sortierung nach Datum</translation>
    </message>
    <message>
        <source>This option sorts the files in order of last modification date</source>
        <translation>Diese Option sortiert die Dateien nach ihrem Veränderungsdatum</translation>
    </message>
    <message>
        <source>Show folder first</source>
        <translation>Ordner zuerst anzeigen</translation>
    </message>
    <message>
        <source>If this option is enabled, the directories will be displayed first</source>
        <translation>Ist diese Option aktiv, werden Ordner zuerst angezeigt</translation>
    </message>
    <message>
        <source>Settings of the sort order</source>
        <translation>Einstellen der Anzeigesortierung</translation>
    </message>
    <message>
        <source>This option sorts the files in order of their creation date</source>
        <translation>Diese Option sortiert die Dateien nach ihrem Erstellungsdatum</translation>
    </message>
    <message>
        <source>Image vector files</source>
        <translation>Vektorbilddateien</translation>
    </message>
    <message>
        <source>Limit the display of the current folder to the image vector files of which the format is recognized by ffDiaporama in the present subfolders</source>
        <translation>Reduzieren der Anzahl angezeigter Dateien im aktuellen Ordner auf Vektorbilddateien die von ffDiaporama verarbeitet werden können</translation>
    </message>
</context>
<context>
    <name>0030</name>
    <message>
        <source>Rendering videos</source>
        <translation>Videos erstellen</translation>
    </message>
    <message>
        <source>Smartphones and tablets</source>
        <translation>Smartphones; Handys; Tablets</translation>
    </message>
    <message>
        <source>Portable devices</source>
        <translation>Portable Geräte</translation>
    </message>
    <message>
        <source>Multimedia system (Home cinema)</source>
        <translation>Multimediasysteme (Heimkino)</translation>
    </message>
    <message>
        <source>For the WEB</source>
        <translation>Für das Internet</translation>
    </message>
    <message>
        <source>Video codec</source>
        <translation>Videocodec</translation>
    </message>
    <message>
        <source>Audio codec</source>
        <translation>Audiocodec</translation>
    </message>
    <message>
        <source>Containers</source>
        <translation>Container</translation>
    </message>
    <message>
        <source>Video standards and resolutions</source>
        <translation>Videostandards und Auflösungen</translation>
    </message>
    <message>
        <source>File attachments (Thumbnails, nfo, etc...)</source>
        <translation>Dateianhänge (Vorschaubilder, nfo, usw....)</translation>
    </message>
    <message>
        <source> This section contains information about generating video with ffDiaporama. </source>
        <translation> Dieser Abschnitt enthält Informationen über das Erstellen von Videos mit ffDiaporama.</translation>
    </message>
    <message>
        <source>Index</source>
        <translation>Inhalt</translation>
    </message>
</context>
<context>
    <name>0031</name>
    <message>
        <source>Rendering videos</source>
        <translation>Videos erstellen</translation>
    </message>
    <message>
        <source>A digital video consists of a computer file called the &lt;a href=&quot;0038.html&quot;&gt;container&lt;/a&gt;</source>
        <translation>Ein digitales Video besteht aus einer Computerdatei, genannt &lt;a href=&quot;0038.html&quot;&gt;Container&lt;/a&gt;</translation>
    </message>
    <message>
        <source>In this file we find:</source>
        <translation>In dieser Datei befindet sich:</translation>
    </message>
    <message>
        <source>One or more video tracks. Each track is built using a &lt;a href=&quot;0036.html&quot;&gt;Video Codec&lt;/a&gt;</source>
        <translation>Eine oder mehrere Videospuren. Jede Videospur wird aus einem &lt;a href=&quot;0036.html&quot;&gt;Videocodec&lt;/a&gt; gebildet</translation>
    </message>
    <message>
        <source>One or more audio tracks. Each track is built using an &lt;a href=&quot;0037.html&quot;&gt;Audio Codec&lt;/a&gt;</source>
        <translation>Eine oder mehrere Audiospuren. Jede Audiospur wird aus einem &lt;a href=&quot;0037.html&quot;&gt;Audiocodec&lt;/a&gt; gebildet</translation>
    </message>
    <message>
        <source>Possibly, one or more subtitles. Each subtitle is built in a subtitle format.</source>
        <translation>Möglicherweise einen oder mehrere Untertitel. Jeder Untertitel wird in einem eigenem Untertitelformat beschrieben.</translation>
    </message>
    <message>
        <source>Possibly, a definition of tags and chapters.</source>
        <translation>Möglicherweise eine Definition von TAGs und Kapiteln.</translation>
    </message>
    <message>
        <source>Limitations :</source>
        <translation>Einschränkungen :</translation>
    </message>
    <message>
        <source>ffDiaporama does not manage subtitles.</source>
        <translation>ffDiaporama kann keine Untertitel verwalten.</translation>
    </message>
    <message>
        <source>ffDiaporama generates files that include a single video track and a single audio track.</source>
        <translation>ffDiaporama erstellt Dateien, die eine einzelne Video- und eine einzelne Audiospur beinhalten.</translation>
    </message>
    <message>
        <source>Unlike music files, which are widely portable from one device to another, videos require a certain amount of juggling between various formats to adapt to the equipment used to play them.</source>
        <translation>Anders als bei Musikstücken, die sich über viele Geräte hinweg portieren lassen, brauchen Videos wesentlich mehr Aufmerksamkeit wegen der vielen unterschiedlichen Formate und möglichen Kombinationen, um erfolgreich auf Geräten abgespielt zu werden.</translation>
    </message>
    <message>
        <source>A video rendered for a &quot;Home Cinema&quot; device can occupy several Gb and will be unreadable on a smartphone.</source>
        <translation>Ein Video für das eigene Heimkino kann mehrere GB an Daten haben und ist (wahrscheinlich) auf einem Smartphone nicht abspielbar bzw. viel zu groß.</translation>
    </message>
    <message>
        <source>The same video rendered for a smartphone will require only one Mb, and can be played on a &quot;Home Cinema&quot; device but it will look ugly.</source>
        <translation>Dasselbe Video für ein Smartphone erstellt, braucht hingegen nur wenige MB, sieht allerdings auf dem Heimkinosystem “absolut unansehlich” aus (um es vorsichtig auszudrücken).</translation>
    </message>
    <message>
        <source>That is why we recommend that you preserve your original project files as far as possible, and create from them videos suitable for the devices you wish to use for playback.</source>
        <translation>Aus diesen Gründen empfehlen wir, dass Sie Ihre Projektdateien (inkl. Bilder/Videos) solange wie möglich aufheben, um im Nachhinein das Video für ein neues/anderes Gerät (z.b: ein neues Handy) umzuwandeln und die bestmöglichen Ergebnisse beim Abspielen zu erzielen.</translation>
    </message>
    <message>
        <source>To simplify settings for the rendering operation, ffDiaporama contains predefined settings for the following devices:</source>
        <translation>Um die Erstellung von Videos so einfach wie möglich zu gestalten, besitzt ffDiaporama voreingestellte Parameter für die folgenden Geräteklassen:</translation>
    </message>
    <message>
        <source>&lt;a href=&quot;0032.html&quot;&gt;Smartphones&lt;/a&gt; and &lt;a href=&quot;0033.html&quot;&gt;portable devices&lt;/a&gt;, and small video-playing devices in general</source>
        <translation>&lt;a href=&quot;0032.html&quot;&gt;Smartphones&lt;/a&gt;; &lt;a href=&quot;0033.html&quot;&gt;Handys; Tablets; portable Geräte&lt;/a&gt; und kleine Videoabspieler im allgemeinen</translation>
    </message>
    <message>
        <source>&lt;a href=&quot;0034.html&quot;&gt;Multimedia systems&lt;/a&gt; for domestic use (&quot;Home Cinema&quot; devices)</source>
        <translation>&lt;a href=&quot;0034.html&quot;&gt;Multimediasystem&lt;/a&gt; für den Heimgebrauch (“Home Cinema” auch als “Heimkino” bekannte Geräte)</translation>
    </message>
    <message>
        <source>&lt;a href=&quot;0035.html&quot;&gt;Display on the Web&lt;/a&gt; (blogs, picture-sharing and social networking sites)</source>
        <translation>&lt;a href=&quot;0035.html&quot;&gt;Abspielen im Internet&lt;/a&gt; (Blogs, soziale Plattformen, usw.)</translation>
    </message>
    <message>
        <source>It is also possible for you to define all parameters directly by using the advanced option.</source>
        <translation>Es ist allerdings auch möglich, unter “Erweiterten Einstellungen” sämtliche Parameter zur Videoerstellung selbst zu wählen.</translation>
    </message>
</context>
<context>
    <name>0032</name>
    <message>
        <source>Smartphones and tablets</source>
        <translation>Smartphones; Handys; Tablets usw</translation>
    </message>
    <message>
        <source>Generally speaking the main differences between these devices are:</source>
        <translation>Der grundsätzliche Unterschied dieser Geräte ist:</translation>
    </message>
    <message>
        <source>Screen size and maximal resolution</source>
        <translation>Verfügbare Bildschirmgröße und maximale Auflösung</translation>
    </message>
    <message>
        <source>Operating system on the device</source>
        <translation>Betriebssystem auf dem Gerät</translation>
    </message>
    <message>
        <source>Consult the documentation for your equipment or search the Internet to determine these two characteristics.</source>
        <translation>Ziehen Sie die Anleitung Ihres Gerätes zu Rate oder suchen Sie im Internet um diese zwei Kriterien zu identifizieren.</translation>
    </message>
    <message>
        <source>Device type</source>
        <translation>Gerätetyp</translation>
    </message>
    <message>
        <source>Operating system</source>
        <translation>Betriebssystem</translation>
    </message>
    <message>
        <source>Available resolution</source>
        <translation>Verfügbare Auflösungen</translation>
    </message>
    <message>
        <source>Remarks</source>
        <translation>Anmerkungen</translation>
    </message>
    <message>
        <source>Smartphone</source>
        <translation>Smartphone</translation>
    </message>
    <message>
        <source>Nokia Symbian System S60</source>
        <translation>Nokia Symbian System S60</translation>
    </message>
    <message>
        <source>QVGA</source>
        <translation>QVGA</translation>
    </message>
    <message>
        <source>VGA</source>
        <translation>VGA</translation>
    </message>
    <message>
        <source>Generally, Nokia phones working with the Symbian operating system and equipped with a camera, are capable of playing videos. Very often, those provided with a keyboard offer a 320x240 resolution (QVGA), while those with only a touch-sensitive screen offer a 640x360 resolution (VGA).</source>
        <translation>Allgemein können Nokiageräte mit einer Kamera auch Videos abspielen. In vielen Fällen gilt: Wenn eine Tastatur vorhanden, beträgt die Auflösung 320×240 (QVGA). Ist das Nokia nur mit einem Touch-Screen ausgestattet, so sind meist Auflösung mit 640×360 (VGA) verwendbar.</translation>
    </message>
    <message>
        <source>Movie format is: Container: MP4 - Video Codec: MPEG4 - Audio Codec: MP3</source>
        <translation>Filmformat ist: Container: MP4 – Video Codec: MPEG4 – Audio Codec: MP3</translation>
    </message>
    <message>
        <source>Note: Video files should be stored in the &quot;My videos&quot; folder after connecting the telephone to the PC in &quot;mass storage&quot; mode. </source>
        <translation>Anmerkung: Videodateien sollen in den Order “My Videos” bzw. “Videoclips” gespeichert werden, nachdem das Gerät mit den PC im Modus “Massenspeicher” verbunden wurde.</translation>
    </message>
    <message>
        <source>Windows Mobile 6.0/6.1/6.5</source>
        <translation>Windows Mobile 6.0/6.1/6.5</translation>
    </message>
    <message>
        <source>HVGA</source>
        <translation>HVGA</translation>
    </message>
    <message>
        <source>WVGA</source>
        <translation>WVGA</translation>
    </message>
    <message>
        <source>Numerous manufacturers made phones using the Microsoft Windows Mobile 6 operating system (HP, HTC, etc.) between 2006 and 2010.</source>
        <translation>Viele Hersteller produzierten zwischen 2006 und 2010 Geräte mit Microsoft Windows Mobile 6 Betriebssystem (HP, HTC, usw.) .</translation>
    </message>
    <message>
        <source>Movie format is: Container: 3GP - Video Codec: MPEG4 - Audio Codec: AMR</source>
        <translation>Filmformat ist: Container: 3GP – Video Codec: MPEG4 – Audio Codec: AMR</translation>
    </message>
    <message>
        <source>Note: Store video files in the &quot;My videos&quot; folder having connected the telephone to the PC in &quot;mass storage&quot; mode. </source>
        <translation>Anmerkung: Videodateien sollten in den Order “My Videos” bzw. “Videoclips” gespeichert werden, nachdem das Gerät mit den PC im Modus “Massenspeicher” verbunden wurde.</translation>
    </message>
    <message>
        <source>Windows Phone 7</source>
        <translation>Windows Phone 7</translation>
    </message>
    <message>
        <source>Microsoft Windows Phone 7 is the evolution of Windows Mobil 6</source>
        <translation>Microsoft Windows Phone 7 ist der Nachfolger von Windows Mobil 6</translation>
    </message>
    <message>
        <source>Movie format is: Container: MP4 - Video Codec: h264 - Audio Codec: AAC-LC</source>
        <translation>Filmformat ist: Container: MP4 – Video Codec: h264 – Audio Codec: AAC-LC</translation>
    </message>
    <message>
        <source>Android</source>
        <translation>Android</translation>
    </message>
    <message>
        <source>Many manufacturers made or still make phones using the Google Android operating system.</source>
        <translation>Viele Hersteller machten oder machen Geräte, die das Google Android Betriebssystem verwenden.</translation>
    </message>
    <message>
        <source>Apple iOS</source>
        <translation>Apple iOS</translation>
    </message>
    <message>
        <source>iPhone 3G/3GS</source>
        <translation>iPhone 3G/3GS</translation>
    </message>
    <message>
        <source>iPhone 4</source>
        <translation>iPhone 4</translation>
    </message>
    <message>
        <source>HP - WebOs</source>
        <translation>HP - WebOs</translation>
    </message>
    <message>
        <source>WebOs arises from the repurchase of Palm by HP.</source>
        <translation>WebOs enstand durch den Kauf von Palm durch HP.</translation>
    </message>
    <message>
        <source>&lt;B&gt;To be completed&lt;/B&gt;</source>
        <translation>&lt;b&gt;Ist noch zu ergänzen&lt;/b&gt;</translation>
    </message>
    <message>
        <source>Blackberry OS</source>
        <translation>Blackberry OS</translation>
    </message>
    <message>
        <source>RIM 240</source>
        <translation>RIM 240</translation>
    </message>
    <message>
        <source>Movie format is: Container: AVI - Video Codec: MPEG4 - Audio Codec: MP3</source>
        <translation>Filmformat ist: Container: AVI – Video Codec: MPEG4 – Audio Codec: MP3</translation>
    </message>
    <message>
        <source>Note: store video files in the \Blackberry\Video folder after connecting the telephone to the PC &quot;mass storage&quot; mode.</source>
        <translation>Anmerkung: Videodateien sollten in den Ordner “\blackberry\Video” kopiert werden, nachdem das Gerät im Massenspeichermodus mit dem PC verbunden wurde.</translation>
    </message>
    <message>
        <source>Samsung BADA</source>
        <translation>Samsung BADA</translation>
    </message>
    <message>
        <source>Tablet</source>
        <translation>Tablet</translation>
    </message>
    <message>
        <source>Android 2.x</source>
        <translation>Android 2.x</translation>
    </message>
    <message>
        <source>Android 3.x</source>
        <translation>Android 3.x</translation>
    </message>
    <message>
        <source>Linux</source>
        <translation>Linux</translation>
    </message>
    <message>
        <source>Tablet examples: Archos 4/5/70/Arnova 10, Dell Streak, Creative ZiiO 7</source>
        <translation>Beispiele für Tablets: Archos 4/5/70/Arnova 10, Dell Streak, Creative ZiiO 7</translation>
    </message>
    <message>
        <source>XGA</source>
        <translation>XGA</translation>
    </message>
    <message>
        <source>Tablet examples: Archos 101, Samsung Galaxy Tab, HTC Flyer, Hannspree HANNSpad SN10T, Toshiba Folio 100</source>
        <translation>Beispiele für Tablets: Archos 101, Samsung Galaxy Tab, HTC Flyer, Hannspree HANNSpad SN10T, Toshiba Folio 100</translation>
    </message>
    <message>
        <source>Tablet examples: HP TouchPad</source>
        <translation>Beispiele für Tablets: HP TouchPad</translation>
    </message>
    <message>
        <source>Tablet examples: ASUS Eee Pad, Motorola Xoom, Packard Bell Liberty Tab, LG Optimus Pad, Archos G9</source>
        <translation>Beispiel für Tablets: ASUS Eee Pad, Motorola Xoom, Packard Bell Liberty Tab, LG Optimus Pad, Archos G9</translation>
    </message>
    <message>
        <source>iPad</source>
        <translation>iPad</translation>
    </message>
    <message>
        <source>RIM BlackBerry</source>
        <translation>RIM BlackBerry</translation>
    </message>
    <message>
        <source>Playbook</source>
        <translation>Playbook</translation>
    </message>
    <message>
        <source>Netbook/NetPC</source>
        <translation>Netbook/NetPC</translation>
    </message>
    <message>
        <source>Windows/XP</source>
        <translation>Windows/XP</translation>
    </message>
    <message>
        <source>Require xVid or DivX codec to be installed on the computer.</source>
        <translation>Benötigt die Installation von xVid or DivX Codec auf dem Computer.</translation>
    </message>
    <message>
        <source>Windows/Vista</source>
        <translation>Windows/Vista</translation>
    </message>
    <message>
        <source>Windows/7</source>
        <translation>Windows/7</translation>
    </message>
    <message>
        <source>Android/Linux</source>
        <translation>Android/Linux</translation>
    </message>
    <message>
        <source>As far as the resolution is concerned, note that most devices can play videos designed for lower resolution devices without difficulty. </source>
        <translation>Im Falle, dass Ihre Auflösung nicht passend ist, können Sie es auch mit einer geringeren Auflösung probieren. Die meisten Geräte können auch diese darstellen.</translation>
    </message>
    <message>
        <source>The device models available in ffDiaporama are as follows: </source>
        <translation>Folgende Geräte wurden schon in die ffDiaporama Gerätedatenbank aufgenommen:</translation>
    </message>
</context>
<context>
    <name>0033</name>
    <message>
        <source>Portable devices</source>
        <translation>Protable Geräte</translation>
    </message>
    <message>
        <source>These portable devices are usually very specific. We will not discuss therefore either operating system or resolution.</source>
        <translation>Portable Geräte sind in Ihren Eigenschaften sehr spezifisch. Deshalb brauchen wir die Fragen zum verwendeten Betriebssystem und die Auflösung nicht zu erörtern.</translation>
    </message>
    <message>
        <source>Device type</source>
        <translation>Gerätetyp</translation>
    </message>
    <message>
        <source>Manufacturer/Model</source>
        <translation>Hersteller / /Model</translation>
    </message>
    <message>
        <source>Remark</source>
        <translation>Anmerkung</translation>
    </message>
    <message>
        <source>Portable player</source>
        <translation>Portable Abspielgeräte</translation>
    </message>
    <message>
        <source>DVD/DivX portable player (car player or travel player)</source>
        <translation>DVD/DivX Portable Player (Abspieler für das Auto oder Reiseabspielgeräte)</translation>
    </message>
    <message>
        <source>All these devices use the old DVD/DIVX format with anamorphic resolution 720x576 (PAL) or 720x480 ( NTSC).</source>
        <translation>Diese Geräte unterstützen nur das alte DVD/DIVX Format (mit anamorpher) Auflösung von 720×576 (PAL) für die DVD Auflösung.</translation>
    </message>
    <message>
        <source>Movie format is: Container: AVI - Video Codec: MPEG4 - Audio Codec: MP3</source>
        <translation>Filmformat ist: Container: AVI – Video Codec: MPEG4 – Audio Codec: MP3</translation>
    </message>
    <message>
        <source>If the device does not have a USB port, burn a DVD from your video files. Otherwise simply copy your files to a USB pendrive.</source>
        <translation>Kopieren Sie einfach den erstellten Film auf einen USB-Stick. Sollte Ihr Gerät keinen USB-Anschluß haben, brennen Sie ihr Video auf eine DVD.</translation>
    </message>
    <message>
        <source>iPod Classic (G5/G6)</source>
        <translation>iPod Classic (G5/G6)</translation>
    </message>
    <message>
        <source>iPod Nano (G3/G4/G5)</source>
        <translation>iPod Nano (G3/G4/G5)</translation>
    </message>
    <message>
        <source>These two portable player were especially designed for music. Therefore, their resolution is only QVGA.</source>
        <translation>Diese zwei mobilen Abspielgeräte sind eigentlich nur für Musik konzipiert. Deshalb können diese nur mit einer Auflösung von QVGA arbeiten.</translation>
    </message>
    <message>
        <source>Movie format is: Container: MP4 - Video Codec: h264 - Audio Codec: AAC-LC</source>
        <translation>Filmformat ist: Container: MP4 – Video Codec: h264 – Audio Codec: AAC-LC</translation>
    </message>
    <message>
        <source>Apple iPod Touch</source>
        <translation>Apple iPod Touch</translation>
    </message>
    <message>
        <source>This portable player has a video resolution comparable to the DVD (without anamorphism).</source>
        <translation>Dieser mobile Player ist mit der Auflösung einer DVD (ohne anamorph) vergleichbar.</translation>
    </message>
    <message>
        <source>Portable LED/LCD TV</source>
        <translation>Portable LED/LCD TV</translation>
    </message>
    <message>
        <source>These devices, when they support the HD TV, have a real resolution of 1024x576.</source>
        <translation>Wenn diese Geräte HD TV unterstützen, so ist die verwendbare Auflösung 1024×576.</translation>
    </message>
    <message>
        <source>Handheld game console</source>
        <translation>Mobile Spielekonsolen</translation>
    </message>
    <message>
        <source>Sony PSP</source>
        <translation>Sony PSP</translation>
    </message>
    <message>
        <source>Resolution 320x480 / NTSC</source>
        <translation>Auflösung 320×480 / NTSC</translation>
    </message>
    <message>
        <source>-s 320x480 -b 512000 -ar 24000 -ab 64000 -f psp -r 29.97</source>
        <translation>-s 320x480 -b 512000 -ar 24000 -ab 64000 -f psp -r 29.97</translation>
    </message>
    <message>
        <source>-ac 2 -ar 48000 -acodec libfAAC-LC -ab 128k -r FRAME_RATE -s WIDTHxHEIGHT -vcodec libh264 -vpre slower -vpre main -level 21 -refs 2 -b BIT_RATE -bt BIT_RATE -aspect WIDTH:HEIGHT -f psp</source>
        <translation>-ac 2 -ar 48000 -acodec libfAAC-LC -ab 128k -r FRAME_RATE -s WIDTHxHEIGHT -vcodec libh264 -vpre slower -vpre main -level 21 -refs 2 -b BIT_RATE -bt BIT_RATE -aspect WIDTH:HEIGHT -f psp</translation>
    </message>
</context>
<context>
    <name>0034</name>
    <message>
        <source>Multimedia system (Home cinema)</source>
        <translation>Multimediasysteme (Heimkino)</translation>
    </message>
    <message>
        <source>Device type</source>
        <translation>Gerätetyp</translation>
    </message>
    <message>
        <source>Manufacturer/Model</source>
        <translation>Hersteller / /Model</translation>
    </message>
    <message>
        <source>Remark</source>
        <translation>Anmerkung</translation>
    </message>
    <message>
        <source>TV box of ADSL box</source>
        <translation>TV Box oder ADSL Box</translation>
    </message>
    <message>
        <source>France - Livebox (Orange)</source>
        <translation>Frankreich – Livebox (Orange)</translation>
    </message>
    <message>
        <source>All these devices support the old DVD/DIVX format with anamorphic resolution 720x576 (PAL) for the DVD resolution</source>
        <translation>Alle Geräte unterstützen das alte DVD/DIVX Format (mit anamorpher) Auflösung von 720×576 (PAL) für die DVD Auflösung</translation>
    </message>
    <message>
        <source>Movie format is: Container: AVI - Video Codec: MPEG4 - Audio Codec: MP3</source>
        <translation>Filmformat ist: Container: AVI – Video Codec: MPEG4 – Audio Codec: MP3</translation>
    </message>
    <message>
        <source>All these devices support the MP4 format up to the FullHD 1080p resolution</source>
        <translation>Alle Geräte unterstützen das MP4 Format bis zur FullHD 1080p Auflösung</translation>
    </message>
    <message>
        <source>Movie format is: Container: MP4 - Video Codec: h264 - Audio Codec: AAC-LC</source>
        <translation>Filmformat ist: Container: MP4 – Video Codec: h264 – Audio Codec: AAC-LC</translation>
    </message>
    <message>
        <source>Copy your video files to a USB pendrive or an external hard disk and use the multimedia player integrated into the menu of the decoder</source>
        <translation>Kopieren sie Ihre Filme auf einen USB-Stick oder eine externe Festplatte. Über das Menü Ihres Players können Sie anschliessend das Video abspielen</translation>
    </message>
    <message>
        <source>France - Freebox</source>
        <translation>Frankreich – Freebox</translation>
    </message>
    <message>
        <source>France - Neufbox (SFR)</source>
        <translation>Frankreich – Neufbox (SFR)</translation>
    </message>
    <message>
        <source>France - Bbox (Bouygues Telecom)</source>
        <translation>Frankreich – Bbox (Bouygues Telecom)</translation>
    </message>
    <message>
        <source>Multimedia hard drive and gateway</source>
        <translation>Multimedia Harddisk und Gateway</translation>
    </message>
    <message>
        <source>All manufacturers</source>
        <translation>Alle Hersteller</translation>
    </message>
    <message>
        <source>Equipments supporting HD (to verify in the technical specifications of the device) support the MP4 format until the FullHD 1080p resolution</source>
        <translation>Wenn das Geräte HD unterstützt (dies können Sie über Ihre Bedienungsanleitung des Gerätes feststellen) sollte es das MP4 Format bis zur FullHD 1080p Auflösung unterstützen</translation>
    </message>
    <message>
        <source>Player</source>
        <translation>Player</translation>
    </message>
    <message>
        <source>DVD/DivX Player</source>
        <translation>DVD/DivX Player</translation>
    </message>
    <message>
        <source>These devices only support the old DVD/DIVX format with anamorphic resolution 720x576 (PAL) for the DVD resolution</source>
        <translation>Diese Geräte unterstützen nur das alte DVD/DIVX Format (mit anamorpher) Auflösung von 720×576 (PAL) für die DVD Auflösung</translation>
    </message>
    <message>
        <source>If the device does not have an USB connector: burn a DVD with your video files. Otherwise simply copy your videos files to a USB pendrive.</source>
        <translation>Kopieren Sie einfach den erstellten Film auf einen USB-Stick. Sollte Ihr Gerät keinen USB-Anschluß haben, brennen Sie ihr Video auf eine DVD.</translation>
    </message>
    <message>
        <source>BlueRay player</source>
        <translation>BlueRay Player</translation>
    </message>
    <message>
        <source>&lt;B&gt;To be completed&lt;/B&gt;</source>
        <translation>&lt;b&gt;Ist noch zu ergänzen&lt;/b&gt;</translation>
    </message>
    <message>
        <source>Games console</source>
        <translation>Spielekonsolen</translation>
    </message>
    <message>
        <source>PS3</source>
        <translation>PS3</translation>
    </message>
    <message>
        <source>XBox360</source>
        <translation>XBox360</translation>
    </message>
    <message>
        <source> These &quot;Home Cinema&quot; devices are connected to a television set. The format choice will thus be made according to the requirements of the set used. </source>
        <translation> Die Heimkinosysteme werden an Fernseher angeschlossen. Die Formatauswahl ist davon abhängig, welche Auflösungen Ihre einzelnen Geräte (Kinosystem; Fernseher) unterstützen.</translation>
    </message>
    <message>
        <source>Warning: The old SD format is only suitable for old television sets using cathode ray tube technology. With these tubes, points were not circular but oval: we call this anamorphism. </source>
        <translation>Warnung: Das alte SD Format ist ausschliesslich für Fernseher gedacht die über eine Bildröhre (Kathodenstrahl) verfügen. Für die alten Röhrengeräte werden die Bildpunkte nicht rund, sondern oval gebildet. Dies wird Anamorph genannt.</translation>
    </message>
    <message>
        <source>Playing a video in SD format on a modern LCD, LED or plasma television set gives openly disastrous results: The image is particularly ugly! Thus, if your television is new and if your device allows it, always use a HD or Full-HD format in preference to a SD format. </source>
        <translation>Das Abspielen von Bildmaterial im SD-Format hat auf einem modernem LCD; LED oder Plasma Fernseher verheerende Folgen: Das Bild ist einfach nur hässlich! Wenn Ihr Fernseher ein aktuelles Gerät ist und die Auflösungen erlaubt, sollten immer HD bzw. Full-HD Auflösungen bevorzugen.</translation>
    </message>
</context>
<context>
    <name>0035</name>
    <message>
        <source>For the WEB</source>
        <translation>Für das Internet</translation>
    </message>
    <message>
        <source>Device type</source>
        <translation>Gerätetyp</translation>
    </message>
    <message>
        <source>Manufacturer/Model</source>
        <translation>Hersteller / /Model</translation>
    </message>
    <message>
        <source>Remark</source>
        <translation>Anmerkung</translation>
    </message>
    <message>
        <source>Flash player (SWF)</source>
        <translation>Flash player (SWF)</translation>
    </message>
    <message>
        <source>All SWF players</source>
        <translation>Alle SWF Player</translation>
    </message>
    <message>
        <source>To be used with the HTML tag object class=&quot;player&quot; type=&quot;application/x-shockwave-flash&quot;</source>
        <translation>Ist mit dem HTML Tag object class=”player” type=”application/x-shockwave-flash” zu verwenden</translation>
    </message>
    <message>
        <source>- For 4/3 : 320x240, 640x480, 960x720, 1440x1080</source>
        <translation>- Für 4/3 : 320×240, 640×480, 960×720, 1440×1080</translation>
    </message>
    <message>
        <source>- For 16/9 : 320x180, 640x360, 1280x720, 1920x1080</source>
        <translation>- Für 16/9 : 320×180, 640×360, 1280×720, 1920×1080</translation>
    </message>
    <message>
        <source>- For 40/17 : 320x136, 640x272, 1280x544, 1920x816</source>
        <translation>- Für 40/17 : 320×136, 640×272, 1280×544, 1920×816</translation>
    </message>
    <message>
        <source>Movie format is: Container: SWF(2008) - Video Codec: h264 - Audio Codec: AAC-LC</source>
        <translation>Filmformat ist: Container: SWF(2008) – Video Codec: h264 – Audio Codec: AAC-LC</translation>
    </message>
    <message>
        <source>Sharing and social networking</source>
        <translation>Soziale Netzwerke</translation>
    </message>
    <message>
        <source>Youtube</source>
        <translation>Youtube</translation>
    </message>
    <message>
        <source>720p - Movie format is: Container: MP4 - Video Codec: xVid - Audio Codec: MP3</source>
        <translation>720p – Filmformat ist: Container: MP4 – Video Codec: xVid – Audio Codec: MP3</translation>
    </message>
    <message>
        <source>Daily Motion</source>
        <translation>Daily Motion</translation>
    </message>
    <message>
        <source>720p - Movie format is: Container: MP4 - Video Codec: h264 - Audio Codec: AAC-LC</source>
        <translation>720p – Filmformat ist: Container: MP4 – Video Codec: h264 – Audio Codec: AAC-LC</translation>
    </message>
    <message>
        <source>Facebook</source>
        <translation>Facebook</translation>
    </message>
    <message>
        <source>Publish the video on YouTube or Daily Motion and integrate a link towards this video into Facebook</source>
        <translation>Publizieren Sie Ihr Video in YouTube oder Daily Motion und verweisen Sie darauf mit einem Link in Facebook</translation>
    </message>
    <message>
        <source>HTML 5</source>
        <translation>HTML 5</translation>
    </message>
    <message>
        <source>webm</source>
        <translation>webm</translation>
    </message>
    <message>
        <source>To be added to allow the new video TAG in HTML5 browsers. </source>
        <translation>Wurde hinzugefügt, um die neuen Video TAGs in HTML5 Browsern zu ermöglichen.</translation>
    </message>
    <message>
        <source>WebM is an open source format usable with Firefox, Google Chrome and Opera </source>
        <translation>WebM ist ein Open Source Format, welches mit Firefox; Google Chrome und Opera verwendet werden kann</translation>
    </message>
    <message>
        <source>H264 is a format usable in Safari, Internet Explorer and Google Chrome </source>
        <translation>H264 ist ein Format, das in Safari, Internet Explorer und Google Chrome verwendet werden kann</translation>
    </message>
    <message>
        <source>To maintain backward compatibility with older browsers, it is advisable to offer a flash version within the tag. See: </source>
        <translation>Um die Rückwärtskompatibilität zu älteren Browsern zu erhalten, ist est empfehlenswert eine Flashversion innerhalb des TAG anzubieten. Siehe :</translation>
    </message>
    <message>
        <source>developer.mozilla.org</source>
        <translation>developer.mozilla.org</translation>
    </message>
    <message>
        <source>mp4</source>
        <translation>mp4</translation>
    </message>
    <message>
        <source>ogv</source>
        <translation>ogv</translation>
    </message>
</context>
<context>
    <name>0036</name>
    <message>
        <source>Video codec</source>
        <translation>Videocodec</translation>
    </message>
    <message>
        <source>The following table lists the video codecs which ffDiaporama can use to generate videos:</source>
        <translation>Folgende Tabelle listet die Videocodecs, die mit ffDiaporama verwendet werden können:</translation>
    </message>
    <message>
        <source>Codec</source>
        <translation>Codec</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Name</translation>
    </message>
    <message>
        <source>WIKIPEDIA/Remark</source>
        <translation>WIKIPEDIA/Anmerkung</translation>
    </message>
    <message>
        <source>MPJEP</source>
        <translation>MPJEP</translation>
    </message>
    <message>
        <source>Motion JPEG</source>
        <translation>Motion JPEG</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/Motion_JPEG</source>
        <translation>http://en.wikipedia.org/wiki/Motion_JPEG</translation>
    </message>
    <message>
        <source>MPEG2</source>
        <translation>MPEG2</translation>
    </message>
    <message>
        <source>MPEG-2 video</source>
        <translation>MPEG-2 video</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/MPEG-2</source>
        <translation>http://de.wikipedia.org/wiki/MPEG-2</translation>
    </message>
    <message>
        <source>MPEG4</source>
        <translation>MPEG4</translation>
    </message>
    <message>
        <source>DivX/XVid/MPEG-4</source>
        <translation>DivX/XVid/MPEG-4</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/Xvid</source>
        <translation>http://de.wikipedia.org/wiki/Xvid</translation>
    </message>
    <message>
        <source>H264HQ</source>
        <translation>H264HQ</translation>
    </message>
    <message>
        <source>High Quality H.264 AVC/MPEG-4 AVC</source>
        <translation>High Quality H.264 AVC/MPEG-4 AVC</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/H.264/MPEG-4_AVC</source>
        <translation>http://de.wikipedia.org/wiki/H.264/MPEG-4_AVC</translation>
    </message>
    <message>
        <source>H264PQ</source>
        <translation>H264PQ</translation>
    </message>
    <message>
        <source>Phone Quality H.264 AVC/MPEG-4 AVC</source>
        <translation>Phone Quality H.264 AVC/MPEG-4 AVC</translation>
    </message>
    <message>
        <source>X264LL</source>
        <translation>X264LL</translation>
    </message>
    <message>
        <source>x264 Lossless</source>
        <translation>x264 Lossless</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/X264</source>
        <translation>http://de.wikipedia.org/wiki/X264</translation>
    </message>
    <message>
        <source>VP8</source>
        <translation>VP8</translation>
    </message>
    <message>
        <source>WebP (WebM-VP8)</source>
        <translation>WebP (WebM-VP8)</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/WebM</source>
        <translation>http:/de.wikipedia.org/wiki/WebM</translation>
    </message>
    <message>
        <source>Sorenson H.263</source>
        <translation>Sorenson H.263</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/H.263</source>
        <translation>http://de.wikipedia.org/wiki/H.263</translation>
    </message>
    <message>
        <source>THEORA</source>
        <translation>THEORA</translation>
    </message>
    <message>
        <source>Theora VP3</source>
        <translation>Theora VP3</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/Theora</source>
        <translation>http://de.wikipedia.org/wiki/Theora</translation>
    </message>
    <message>
        <source>ffDiaporama uses specific settings for encoding with x264. This settings are including: </source>
        <translation>ffDiaporama verwendet spezifische Einstellungen zum Codieren mit x264. Diese Einstellungen sind möglich: </translation>
    </message>
    <message>
        <source>- &lt;B&gt;High Quality&lt;/B&gt; for &quot;Home Cinema&quot; devices based on x264 &lt;U&gt;main&lt;/U&gt; profile, with 3 refs and 3 bframes. </source>
        <translation>- &lt;B&gt;High Quality&lt;/B&gt; für &quot;Home Cinema&quot; (Heimkino) Geräte basierend auf x264 &lt;U&gt;main&lt;/U&gt; Profil, mit 3 refs und 3 bframes. </translation>
    </message>
    <message>
        <source>- &lt;B&gt;Phone Quality&lt;/B&gt; for mobile devices based on x264 &lt;U&gt;baseline&lt;/U&gt; profile, with 3 refs and 0 bframes. </source>
        <translation>- &lt;B&gt;Phone Quality&lt;/B&gt; für mobile Geräte basierend auf x264 &lt;U&gt;baseline&lt;/U&gt; Profil, mit 3 refs und 0 bframes. </translation>
    </message>
    <message>
        <source>ffDiaporama uses the standard x264 &lt;U&gt;fast&lt;/U&gt; preset with 3 refs and qp set to 0.</source>
        <translation>ffDiaporama verwendet den Standard x264 &lt;U&gt;fast&lt;/U&gt; Preset mit 3 refs und qp ist gesetzt auf 0.</translation>
    </message>
    <message>
        <source>Both settings are using &lt;U&gt;veryfast&lt;/U&gt; preset. </source>
        <translation>Beide Einstellungen verwenden das &lt;U&gt;veryfast&lt;/U&gt; Preset.</translation>
    </message>
    <message>
        <source>Note: Variable bitrate is used with these two codecs. For more information on variable bitrate, see: &lt;a href=&quot;0115.html&quot;&gt;Render video&lt;/a&gt;</source>
        <translation>Anmerkung: Variable Bitrate wird für diese beiden Codecs verwendet. Für mehr Informationen über Variable Bitrate, lesen Sie &lt;a href=&quot;0115.html&quot;&gt;Video erstellen&lt;/a&gt;</translation>
    </message>
</context>
<context>
    <name>0037</name>
    <message>
        <source>Audio codec</source>
        <translation>Audiocodec</translation>
    </message>
    <message>
        <source>The following table lists the audio codecs which ffDiaporama can use to generate videos:</source>
        <translation>Folgende Tabelle listet die Audiocodecs, die mit ffDiaporama zur Videoerstellung verwendet werden können:</translation>
    </message>
    <message>
        <source>Codec</source>
        <translation>Codec</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Name</translation>
    </message>
    <message>
        <source>WIKIPEDIA</source>
        <translation>WIKIPEDIA</translation>
    </message>
    <message>
        <source>PCM</source>
        <translation>PCM</translation>
    </message>
    <message>
        <source>WAV / PCM signed 16-bit little-endian</source>
        <translation>WAV / PCM signed 16-bit little-endian</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/Pulse-code_modulation</source>
        <translation>http://en.wikipedia.org/wiki/Pulse-code_modulation</translation>
    </message>
    <message>
        <source>MP3</source>
        <translation>MP3</translation>
    </message>
    <message>
        <source>MPEG-1/2 Audio Layer III</source>
        <translation>MPEG-1/2 Audio Layer III</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/MP3</source>
        <translation>http://de.wikipedia.org/wiki/MP3</translation>
    </message>
    <message>
        <source>AAC-LC</source>
        <translation>AAC-LC</translation>
    </message>
    <message>
        <source>Advanced Audio Codec</source>
        <translation>Advanced Audio Codec</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/Advanced_Audio_Coding</source>
        <translation>http://de.wikipedia.org/wiki/Advanced_Audio_Coding</translation>
    </message>
    <message>
        <source>AC3</source>
        <translation>AC3</translation>
    </message>
    <message>
        <source>Dolby Digital</source>
        <translation>Dolby Digital</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/Dolby_Digital</source>
        <translation>http://de.wikipedia.org/wiki/Dolby_Digital</translation>
    </message>
    <message>
        <source>VORBIS</source>
        <translation>VORBIS</translation>
    </message>
    <message>
        <source>Vorbis</source>
        <translation>Vorbis</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/Vorbis</source>
        <translation>http://de.wikipedia.org/wiki/Vorbis</translation>
    </message>
    <message>
        <source>MP2</source>
        <translation>MP2</translation>
    </message>
    <message>
        <source>MPEG-1 Layer II</source>
        <translation>MPEG-1 Layer II</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/MPEG-2</source>
        <translation>http://en.wikipedia.org/wiki/MPEG-2</translation>
    </message>
    <message>
        <source>AMR</source>
        <translation>AMR</translation>
    </message>
    <message>
        <source>Adaptive Multi-Rate</source>
        <translation>Adaptive Multi-Rate</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/Adaptive_Multi-Rate_audio_codec</source>
        <translation>http://en.wikipedia.org/wiki/Adaptive_Multi-Rate_audio_codec</translation>
    </message>
    <message>
        <source>FLAC</source>
        <translation>FLAC</translation>
    </message>
    <message>
        <source>Free Lossless Audio Codec</source>
        <translation>Free Lossless Audio Codec</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/Flac</source>
        <translation>http://en.wikipedia.org/wiki/Flac</translation>
    </message>
</context>
<context>
    <name>0038</name>
    <message>
        <source>Container</source>
        <translation>Container</translation>
    </message>
    <message>
        <source>The following table lists the containers which ffDiaporama can use to generate videos, as well as the available audio and video codecs for every container:</source>
        <translation>Folgende Tabelle listet alle Container, welche in ffDiaporama zur Videoerstellung (sofern der Audio- und Videocodec vorhanden ist) verwendet werden können:</translation>
    </message>
    <message>
        <source>Extension</source>
        <translation>Dateierweiterung</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Name</translation>
    </message>
    <message>
        <source>Video Codecs</source>
        <translation>Videocodec</translation>
    </message>
    <message>
        <source>Audio Codecs</source>
        <translation>Audiocodec</translation>
    </message>
    <message>
        <source>WIKIPEDIA</source>
        <translation>WIKIPEDIA</translation>
    </message>
    <message>
        <source>3GP</source>
        <translation>3GP</translation>
    </message>
    <message>
        <source>MPEG4, H264HQ/H264PQ</source>
        <translation>MPEG4, H264HQ/H264PQ</translation>
    </message>
    <message>
        <source>AMR</source>
        <translation>AMR</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/3GP_and_3G2</source>
        <translation>http://en.wikipedia.org/wiki/3GP_and_3G2</translation>
    </message>
    <message>
        <source>AVI</source>
        <translation>AVI</translation>
    </message>
    <message>
        <source>Audio Video Interleave</source>
        <translation>Audio Video Interleave</translation>
    </message>
    <message>
        <source>MJPEG, MPEG2, MPEG4, H264HQ/H264PQ</source>
        <translation>MJPEG, MPEG2, MPEG4, H264HQ/H264PQ</translation>
    </message>
    <message>
        <source>PCM, MP2, MP3, AAC, AC3</source>
        <translation>PCM, MP2, MP3, AAC, AC3</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/Audio_Video_Interleave</source>
        <translation>http://de.wikipedia.org/wiki/Audio_Video_Interleave</translation>
    </message>
    <message>
        <source>MKV</source>
        <translation>MKV</translation>
    </message>
    <message>
        <source>Matroska file format</source>
        <translation>Matroska Datei Format</translation>
    </message>
    <message>
        <source>MPEG4, H264HQ/H264PQ, THEORA</source>
        <translation>MPEG4, H264HQ/H264PQ, THEORA</translation>
    </message>
    <message>
        <source>PCM, MP3, AAC, AC3, VORBIS</source>
        <translation>PCM, MP3, AAC, AC3, VORBIS</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/Matroska</source>
        <translation>http://de.wikipedia.org/wiki/Matroska</translation>
    </message>
    <message>
        <source>MJPEG</source>
        <translation>MJPEG</translation>
    </message>
    <message>
        <source>Motion JPEG</source>
        <translation>Motion JPEG</translation>
    </message>
    <message>
        <source>PCM</source>
        <translation>PCM</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/Motion_JPEG</source>
        <translation>http://de.wikipedia.org/wiki/Motion_JPEG</translation>
    </message>
    <message>
        <source>MP4</source>
        <translation>MP4</translation>
    </message>
    <message>
        <source>MPEG-4 Part 14</source>
        <translation>MPEG-4 Part 14</translation>
    </message>
    <message>
        <source>MP3, AAC</source>
        <translation>MP3, AAC</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/MPEG-4_Part_14</source>
        <translation>http://en.wikipedia.org/wiki/MPEG-4_Part_14</translation>
    </message>
    <message>
        <source>MPEG</source>
        <translation>MPEG</translation>
    </message>
    <message>
        <source>MPEG program stream</source>
        <translation>MPEG program stream</translation>
    </message>
    <message>
        <source>MPEG2</source>
        <translation>MPEG2</translation>
    </message>
    <message>
        <source>MP2</source>
        <translation>MP2</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/MPEG_program_stream</source>
        <translation>http://en.wikipedia.org/wiki/MPEG_program_stream</translation>
    </message>
    <message>
        <source>WEBM</source>
        <translation>WEBM</translation>
    </message>
    <message>
        <source>WebM</source>
        <translation>WebM</translation>
    </message>
    <message>
        <source>VP8</source>
        <translation>VP8</translation>
    </message>
    <message>
        <source>VORBIS</source>
        <translation>VORBIS</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/WebM</source>
        <translation>http://de.wikipedia.org/wiki/WebM</translation>
    </message>
    <message>
        <source>FLV</source>
        <translation>FLV</translation>
    </message>
    <message>
        <source>Flash file format 2005</source>
        <translation>Flash file format 2005</translation>
    </message>
    <message>
        <source>MP3</source>
        <translation>MP3</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/Adobe_Flash</source>
        <translation>http://de.wikipedia.org/wiki/Adobe_Flash</translation>
    </message>
    <message>
        <source>Flash file format 2008</source>
        <translation>Flash file format 2008</translation>
    </message>
    <message>
        <source>H264HQ/H264PQ</source>
        <translation>H264HQ/H264PQ</translation>
    </message>
    <message>
        <source>AAC</source>
        <translation>AAC</translation>
    </message>
    <message>
        <source>OGV</source>
        <translation>OGV</translation>
    </message>
    <message>
        <source>Ogg</source>
        <translation>Ogg</translation>
    </message>
    <message>
        <source>THEORA</source>
        <translation>THEORA</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/Ogg</source>
        <translation>http://de.wikipedia.org/wiki/Ogg</translation>
    </message>
</context>
<context>
    <name>0039</name>
    <message>
        <source>Video standards and resolutions</source>
        <translation>Videostandards und Auflösungen</translation>
    </message>
    <message>
        <source> Standards and resolution are both fundamental properties which define a video. </source>
        <translation>Standards und Auflösungen sind fundamentale Eigenschaften, welche ein Video definieren.</translation>
    </message>
    <message>
        <source>Two associated properties are the geometry and the FPS number. </source>
        <translation>Zwei weitere wichtige Eigenschaften sind die Geometrie und die Anzahl Bilder pro Sekunde (FPS – Frames per second) eines Videos.</translation>
    </message>
    <message>
        <source>Standard</source>
        <translation>Standard</translation>
    </message>
    <message>
        <source> Standards are a historic feature which continues today in spite of technological progress. </source>
        <translation>Standards sind in diesem Bereich historisch begründed und halten sich bis heute – ungeachtet des technologischen Fortschritts.</translation>
    </message>
    <message>
        <source>A rich literature on this subject can be found on the internet. </source>
        <translation>Eine gane Menge an lesenswerter Literatur ist im Internet diesbezüglich verfügbar.</translation>
    </message>
    <message>
        <source>To simplify things we shall summarize as follows: </source>
        <translation>Ganz einfach zusammengefasst lassen sich die Standards in zwei große Bereiche einteilen:</translation>
    </message>
    <message>
        <source>PAL is effective in all the countries where the electricity network is 50 hz (which is the case, for example, for Western European countries)</source>
        <translation>PAL ist prinzipiell in allen Ländern vertreten, die ihr Stromnetz mit 50 hz betrieben (z.B: Westeuropa)</translation>
    </message>
    <message>
        <source>NTSC is effective in all the countries where the electricity network is 60 hz (which is the case, for example, for the United States of America)</source>
        <translation>NTSC ist dort anzutreffen, wo das Stromnetz mit 60hz betrieben wird (z.B: in den USA)</translation>
    </message>
    <message>
        <source>Geometry</source>
        <translation>Geometrie</translation>
    </message>
    <message>
        <source> The geometry is the ratio of Width to Height. </source>
        <translation> Die Geometrie ist das Verhältnis zwischen Breite und Höhe des Bildes.</translation>
    </message>
    <message>
        <source>4:3 corresponds to screens that are almost square</source>
        <translation>4:3 entspricht Bildschirmen, die nahezu quadratisch sind</translation>
    </message>
    <message>
        <source>16:9 corresponds to screens that are rectangular</source>
        <translation>16:9 entspricht den heutigen Breitbildfernsehern. Sie sind (dem Namen entsprechend) etwas breiter als die quatratischen</translation>
    </message>
    <message>
        <source>40:17 corresponds to cinema screens in overall size</source>
        <translation>40:17 entspricht dem Kinoformat (Übergröße)</translation>
    </message>
    <message>
        <source>Resolution</source>
        <translation>Auflösung</translation>
    </message>
    <message>
        <source> Unlike with photos, video resolution is not expressed in megapixels but in number of points (pixels) shown by the screen multiplied by the number of lines. </source>
        <translation>Anders als bei Fotos, wird die Auflösung nicht in Megapixel, sondern in Bildpunkten (Pixel) angegeben. Der erste Wert entspricht dem horizontalem Wert an Punkten, die in einer Linie dargestellt werden können. Der zweite Wert ist die Anzahl an Zeilen, die dargestellt werden können.</translation>
    </message>
    <message>
        <source>So, 320x240 corresponds to 320 points of width and 240 lines in height </source>
        <translation>Also bedeutet 320×240, dass 320 Bildpunkte in einer Zeile (der Horizontalen) und 240 Zeilen in der Höhe (der Vertikalen) dargestellt werden können</translation>
    </message>
    <message>
        <source>FPS (Frames per second)</source>
        <translation>FPS (Frames per second =&gt; Bilder pro Sekunde)</translation>
    </message>
    <message>
        <source> Corresponds to the number of images shown every second. You should know that in cinemas, 24 images are shown per second and this figure of 24 images is recognized as corresponding to the maximum number of images which the eye is capable of differentiating: </source>
        <translation>Entspricht der Anzahl von Bildern. die pro Sekunde dargestellt werden (1 Bild = vollständige Darstellung aller Zeilen). Sie sollten wissen, dass in Kinos 24 Bilder pro Sekunde gezeigt werden. Diese 24 Bilder nimmt das menschliche Auge als fliessende Bewegung (einen Film) wahr:</translation>
    </message>
    <message>
        <source>More images per second and the eye does not notice it</source>
        <translation>Mehr als 24 Bilder werden vom menschlichen Auge nicht als mehr wahrgenommen</translation>
    </message>
    <message>
        <source>Fewer images per second and the film appears jerky</source>
        <translation>Bei weniger als 24 Bilder pro Sekunde fängt das Bild zu flimmern an, da das Auge (das Gehirn) die Einzelbilder wahrnimmt</translation>
    </message>
    <message>
        <source>Matrix of combinations managed by ffDiaporama</source>
        <translation>Matrix der Kombinationen, die von ffDiaporama verwaltet werden</translation>
    </message>
    <message>
        <source> The following table indicates all the combinations of geometry, standards and resolutions managed by ffDiaporama. For every combination, it indicates the number of associated FPS: </source>
        <translation> Folgende Tabelle listet alle Kombinationen der Geometrien, Standards und Auflösungen auf, die ffDiaporama verwaltet. Bei jeder Kombination ist die Anzahl Bilder pro Sekunde (FPS) angezeigt:</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Name</translation>
    </message>
    <message>
        <source>PAL</source>
        <translation>PAL</translation>
    </message>
    <message>
        <source>NTSC</source>
        <translation>NTSC</translation>
    </message>
    <message>
        <source>Remark</source>
        <translation>Anmerkung</translation>
    </message>
    <message>
        <source>FPS</source>
        <translation>FPS</translation>
    </message>
    <message>
        <source>RIM 240</source>
        <translation>RIM 240</translation>
    </message>
    <message>
        <source>24 FPS</source>
        <translation>24 FPS</translation>
    </message>
    <message>
        <source>Special format used on Blackberry&apos;s very small screen</source>
        <translation>Spezielles Format für kleine Bildschirme von Blackberry</translation>
    </message>
    <message>
        <source>QVGA</source>
        <translation>QVGA</translation>
    </message>
    <message>
        <source>25 FPS</source>
        <translation>25 FPS</translation>
    </message>
    <message>
        <source>29,97 FPS</source>
        <translation>29,97 FPS</translation>
    </message>
    <message>
        <source>Used mainly on the Internet and by first generation smartphones and mobile video players.</source>
        <translation>Wird meist im Internet und in der ersten Generation von Smartphones und mobilen Videoplayern verwendet.</translation>
    </message>
    <message>
        <source>HVGA</source>
        <translation>HVGA</translation>
    </message>
    <message>
        <source>Used mainly on the Internet and by second generation smartphones and mobile video players. &lt;B&gt;Because this format does not respect the traditional video geometry&lt;/B&gt;, &lt;B&gt;black bands appear to fill the screen to 480x320.&lt;/B&gt;</source>
        <translation>Wird meist im Internet und in der zweiten Generation von Smartphones und mobilen Videoplayern verwendet. &lt;B&gt;Allerdings respektiert dieses Fomat nicht die traditionele Videogeometrie&lt;/B&gt;, &lt;B&gt;mit dem Effekt, dass schwarze Balken zusätzlich gezeichnet werden müssen um auf die Auflösung 480×320 zu kommen.&lt;/B&gt;</translation>
    </message>
    <message>
        <source>VGA</source>
        <translation>VGA</translation>
    </message>
    <message>
        <source>Used mainly on the Internet and by some smartphones.</source>
        <translation>Wird meist im Internet und von manchen Smartphones verwendet.</translation>
    </message>
    <message>
        <source>SD-DVD</source>
        <translation>SD-DVD</translation>
    </message>
    <message>
        <source>The old television format for cathode ray tubes. Note that this format was specifically created for equipment with oval points: It is the anamorphism of the points that determines the geometry. That is why &lt;B&gt;it is absolutely necessary to avoid this format for anything other than television sets with cathode ray tubes.&lt;/B&gt;</source>
        <translation>Das alte Fernsehformat der Röhrenapparate. Beachten Sie, dass dieses Format Bildpunkte oval darstellt! Es ist eigentlich der Anamorphismus der Bildpunkte, der die Geometrie festlegt. Aus diesem Grund sollten Sie es &lt;B&gt;absolut vermeiden diese Auflösung für etwas anderes zu verwenden, als für Videos auf einem Röhrenfernseher!&lt;/B&gt; </translation>
    </message>
    <message>
        <source>WVGA</source>
        <translation>WVGA</translation>
    </message>
    <message>
        <source>Used mainly on the Internet and by new generation smartphones and mobile video players. This format has become widespread and has replaced the old  QVGA, HVGA and VGA format used in the years 2000-2010. &lt;B&gt;Because this format does not respect the traditional video geometries, black bands appear to fill the screen to 800x480.&lt;/B&gt;</source>
        <translation>Wird meist im Internet und auf Smartphones neuerer Generation, sowie auf mobilen Videoplayern verwendet. Dieses Format ist aktuell weit verbreitet und hat das alte QVGA, HVGA und das VGA-Format (wurden zw. 2000-2010 verwendet) verdrängt. &lt;B&gt;Allerdings respektiert auch dieses Format nicht die traditionele Videogeometrie, mit dem Effekt, dass schwarze Balken zusätzlich gezeichnet werden müssen, um die Auflösung von 800×480 zu erreichen.&lt;/B&gt;</translation>
    </message>
    <message>
        <source>XGA</source>
        <translation>XGA</translation>
    </message>
    <message>
        <source>Historically this format was used only by computers (fixed or portable). Now we meet it more and more on tablet computers like the iPad.</source>
        <translation>Eigentlich handelt es sich hier um ein historisches Format, das vornehmlich auf Computern verwendet wurde. Allerdings findet man es aktuell auch bei Tablets wie dem iPad.</translation>
    </message>
    <message>
        <source>23,976 FPS</source>
        <translation>23,976 FPS</translation>
    </message>
    <message>
        <source>Today, this format is widely used on the Internet, in particular by social networking and video-sharing sites. We also find it on certain &quot;home cinema&quot; devices.</source>
        <translation>Aktuell findet dieses Format die weiteste Verbreitung im Internet, im besonderen bei sozialen Netzwerken und “Videosharing” Seiten. Wir finden dieses Format auch in einigen Heimkinosystemen.</translation>
    </message>
    <message>
        <source>This is the real &quot;home cinema&quot; format. It is used by the Blue Ray players and the &quot;home cinema&quot; devices.</source>
        <translation>Dies ist das eigentliche Heimkinoformat. Es wird von Blue-Ray Abspielern und von Heimkinosystemen verwendet.</translation>
    </message>
    <message>
        <source>Note that many other resolutions exists but which are not used by ffDiaporama.</source>
        <translation>Anmerkung : Es gibt tatsächlich noch einige weitere Auflösungen; allerdings werden diese von ffDiaporama nicht verwendet.</translation>
    </message>
</context>
<context>
    <name>003A</name>
    <message>
        <source>File attachments (Thumbnails, nfo, etc...)</source>
        <translation>Dateianhänge (Vorschaubilder, nfo, usw....)</translation>
    </message>
    <message>
        <source>ffDiaporama allows you to produce joint files during the rendering process.</source>
        <translation>ffDiaporama ermöglicht die Erzeugung von gemeinsam verwendbaren Dateien während der Videoerstellung.</translation>
    </message>
    <message>
        <source>The following files are availables:</source>
        <translation>Die folgenden Dateien sind verfügbar:</translation>
    </message>
    <message>
        <source>Thumbnails</source>
        <translation>Vorschaubilder</translation>
    </message>
    <message>
        <source>A video or music file can be accompanied with an image file which must have the same name but with the .jpg extension (example: holidays.mkv and holidays.jpg in the same folder). </source>
        <translation>Eine Musik- oder Videodatei kann eine begleitende Bilddatei haben, welche den selben Namen haben muss; allerdings mit der Dateierweiterung .jpg (Beispiel: Urlaub.mkv und Urlaub.jpg im selben Ordner).</translation>
    </message>
    <message>
        <source>This image is called a thumbnail and is used as icon for this file by ffDiaporama and many </source>
        <translation>Diese Bild wird als Vorschaubild bezeichnet und als Symbol für diese Datei von ffDiaporama und vielen anderen verwendet</translation>
    </message>
    <message>
        <source>Media Center Systems</source>
        <translation>Mediacentersysteme</translation>
    </message>
    <message>
        <source>XBMC .nfo files</source>
        <translation>XBMC nfo Dateien</translation>
    </message>
    <message>
        <source>The .nfo file for XBMC allows XBMC to recognize the rendered videos as movies. </source>
        <translation>Die .nfo Dateien für XBMC ermöglicht XBMC das Erkennen der erstellten Videos als Film.</translation>
    </message>
    <message>
        <source>For more information see: &lt;a href=&quot;0044.html&quot;&gt;XBMC nfo files&lt;/a&gt;</source>
        <translation>Für mehr Informationen siehe: &lt;a href=&quot;0044.html&quot;&gt;XBMC nfo Files&lt;/a&gt;</translation>
    </message>
</context>
<context>
    <name>0040</name>
    <message>
        <source>Technical information on ffDiaporama</source>
        <translation>Technische Informationen über ffdiaporama</translation>
    </message>
    <message>
        <source>ffDiaporama command line arguments</source>
        <translation>ffDiaporama Startparameter</translation>
    </message>
    <message>
        <source>ffDiaporama project files</source>
        <translation>Projektdateien von ffDiaporama</translation>
    </message>
    <message>
        <source>The configuration files for ffDiaporama</source>
        <translation>Die Konfigurationsdateien für ffDiaporama</translation>
    </message>
    <message>
        <source>XBMC nfo files</source>
        <translation>XBMC nfo Dateien</translation>
    </message>
    <message>
        <source> This section contains technical information about ffDiaporama. </source>
        <translation> Dieser Abschnitt enthält technische Informationen über ffDiaporama. </translation>
    </message>
    <message>
        <source>Index</source>
        <translation>Inhalt</translation>
    </message>
    <message>
        <source>Types of objects in ffDiaporama</source>
        <translation>Arten von Objekten in ffDiaporama</translation>
    </message>
</context>
<context>
    <name>0041</name>
    <message>
        <source>ffDiaporama command line arguments</source>
        <translation>ffDiaporama Startparameter</translation>
    </message>
    <message>
        <source>Syntax : ffDiaporama [-lang=] [-loglevel=] [Filename]</source>
        <translation>Syntax : ffDiaporama [-lang=] [-loglevel=] [Dateiname]</translation>
    </message>
    <message>
        <source>Setting</source>
        <translation>Parameter</translation>
    </message>
    <message>
        <source>Explanation</source>
        <translation>Erklärung</translation>
    </message>
    <message>
        <source>Filename</source>
        <translation>Dateiname</translation>
    </message>
    <message>
        <source>Filename of the project file to load at application startup</source>
        <translation>Dateiname des Projektes, das beim Aufruf des Programmes geladen werden soll</translation>
    </message>
    <message>
        <source>-lang=</source>
        <translation>-lang=</translation>
    </message>
    <message>
        <source>The language to be used. can take the following values: </source>
        <translation>Die Sprache, die verwendet werden soll. Folgende Landeskürzel können verwendet werden:</translation>
    </message>
    <message>
        <source>&lt;B&gt;cz&lt;/B&gt; to use Czech</source>
        <translation>&lt;B&gt;cz&lt;/B&gt; für Tschechisch</translation>
    </message>
    <message>
        <source>&lt;B&gt;de&lt;/B&gt; to use German</source>
        <translation>&lt;B&gt;de&lt;/B&gt; für Deutsch</translation>
    </message>
    <message>
        <source>&lt;B&gt;en&lt;/B&gt; to use English</source>
        <translation>&lt;B&gt;en&lt;/B&gt; für Englisch</translation>
    </message>
    <message>
        <source>&lt;B&gt;es&lt;/B&gt; to use Spanish</source>
        <translation>&lt;B&gt;es&lt;/B&gt; für Spanisch</translation>
    </message>
    <message>
        <source>&lt;B&gt;el&lt;/B&gt; to use Greek</source>
        <translation>&lt;B&gt;el&lt;/B&gt; für Griechisch</translation>
    </message>
    <message>
        <source>&lt;B&gt;fr&lt;/B&gt; to use French</source>
        <translation>&lt;B&gt;fr&lt;/B&gt; für Französisch</translation>
    </message>
    <message>
        <source>&lt;B&gt;it&lt;/B&gt; to use Italian</source>
        <translation>&lt;B&gt;it&lt;/B&gt; für Italienisch</translation>
    </message>
    <message>
        <source>&lt;B&gt;nl&lt;/B&gt; to use Dutch</source>
        <translation>&lt;B&gt;nl&lt;/B&gt; für Niederländisch</translation>
    </message>
    <message>
        <source>&lt;B&gt;pt&lt;/B&gt; to use Portuguese</source>
        <translation>&lt;B&gt;pt&lt;/B&gt; für Portugiesisch </translation>
    </message>
    <message>
        <source>&lt;B&gt;ru&lt;/B&gt; to use Russian</source>
        <translation>&lt;B&gt;ru&lt;/B&gt; für Russisch</translation>
    </message>
    <message>
        <source>&lt;B&gt;zh-tw&lt;/B&gt; to use Taiwanese</source>
        <translation>&lt;B&gt;zh-tw&lt;/B&gt; für Taiwanesisch</translation>
    </message>
    <message>
        <source>-loglevel=</source>
        <translation>-loglevel=</translation>
    </message>
    <message>
        <source>Adjust the level of messages shown in the console: </source>
        <translation>Regelt die Stufen der Programmeldungen, die in der Konsole angezeigt werden. Der Parameter:</translation>
    </message>
    <message>
        <source>1 to show all the messages of Debug, Information, Warning and Error levels</source>
        <translation>1 zeigt alle Nachrichten der Stufen Debug, Information, Warnung und Fehler</translation>
    </message>
    <message>
        <source>2 to show the messages of Information, Warning and Error levels</source>
        <translation>2 zeigt alle Nachrichten der Stufen Information, Warnung und Fehler</translation>
    </message>
    <message>
        <source>3 to show the messages of Warning and Error levels</source>
        <translation>3 zeigt alle Nachrichten der Stufen Warnung und Fehler</translation>
    </message>
    <message>
        <source>4 to show only the messages of Error levels</source>
        <translation>4 zeigt alle Nachrichten der Stufe Fehler</translation>
    </message>
    <message>
        <source> Note: messages appear only if you launched the program from a console (CMD under Windows or Terminal under Linux). It is possible to redirect these messages into a log file by using &gt;. </source>
        <translation> Anmerkung: Nachrichten werden nur angezeigt, wenn das Programm auch aus einer Konsole (CMD unter Windows oder Terminal unter Linux) aufgerufen wurde. Es ist möglich, die Nachrichten (mittels &gt;) in eine Datei umzuleiten.</translation>
    </message>
    <message>
        <source>&lt;B&gt;gl&lt;/B&gt; to use Galician</source>
        <translation>&lt;B&gt;gl&lt;/B&gt; um Galician zu verwenden</translation>
    </message>
</context>
<context>
    <name>0042</name>
    <message>
        <source>ffDiaporama project files</source>
        <translation>Projektdateien von ffDiaporama</translation>
    </message>
    <message>
        <source>Project files for ffDiaporama are XML files with .ffd extension.</source>
        <translation>Die Projektdateien für ffDiaporama sind XML Dateien mit der Dateierweiterung .ffd .</translation>
    </message>
    <message>
        <source>This XML file does not contain copies of the multimedia elements (image, video, music) which are included in the project but only links to these files.</source>
        <translation>Die XML Datei enthält keine Kopien der Multimediaobjekte (Bilder, Videos, Musik), welche innerhalb des Projektes verwendet werden. Es werden nur Verknüpfungen zu den Dateien abgespeichert.</translation>
    </message>
    <message>
        <source>The links are relative to the location of the .ffd file. This ensures that if the directory containing the project file (.ffd ) also contains the multimedia elements (directly or in subdirectories), it is possible to move and/or to rename the directory.</source>
        <translation>Die Verknüpfungen sind relativ zum Speicherort der .ffd Datei. Dies ermöglicht die Projektdatei (.ffd) in einem Verzeichnis mit den Multimediadaten (direkt oder in einem Unterverzeichnis) abzulegen. Wird das Verzeichnis woanders hinkopiert oder umbenannt, funktioniert die Projektdatei immer noch.</translation>
    </message>
    <message>
        <source>Another advantage is that a project created under Linux can be opened under Windows and conversely.</source>
        <translation>Ein weiterer Vorteil ist die Plattformunabhängigkeit. Ein Projekt unter Linux erstellt, kann genauso unter Windows weiter verarbeitet werden (und umgekehrt).</translation>
    </message>
</context>
<context>
    <name>0043</name>
    <message>
        <source>The configuration files for ffDiaporama</source>
        <translation>Die Konfigurationsdateien für ffDiaporama</translation>
    </message>
    <message>
        <source>The primary ffDiaporama.xml file is stored in the ffDiaporama directory. This file is global for all users: it contains the default ffDiaporama application settings. </source>
        <translation>Die primäre ffDiaporama.xml Datei ist im ffDiaporama Verzeichnis gespeichert. Diese ist global für alle: Sie beinhaltet die Standardwerte der Programmeinstellungen. </translation>
    </message>
    <message>
        <source>For Windows, this is C:\Program Files\ffDiaporama</source>
        <translation>Für Windows, ist das Verzeichnis C:\Programme\ffDiaporama</translation>
    </message>
    <message>
        <source>For Linux, it is /usr/share/ffDiaporama</source>
        <translation>Für Linux, ist das Verzeichniss /usr/share/ffDiaporama</translation>
    </message>
    <message>
        <source>A secondary user-specific ffDiaporama.xml file is stored in the user&apos;s profile folder. </source>
        <translation>Eine zweite – sekundäre – benutzerspezifische ffDiaporama.xml Datei wird im Benutzerprofilordner gespeichert. </translation>
    </message>
    <message>
        <source>For Windows, this is C:\Document and settings\[user]</source>
        <translation>Für Windows, ist der Ordner C:\Dokumente und Einstellungen\[Benutzername]</translation>
    </message>
    <message>
        <source>For Linux, it is ~/.ffDiaporama</source>
        <translation>Für Linux, ist der Ordner ~/.ffDiaporama</translation>
    </message>
    <message>
        <source>Remark: </source>
        <translation>Anmerkung:</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Datei</translation>
    </message>
    <message>
        <source>Use</source>
        <translation>Verwendung</translation>
    </message>
    <message>
        <source>ffDiaporama.xml</source>
        <translation>ffDiaporama.xml</translation>
    </message>
    <message>
        <source>Contains the application options for ffDiaporama</source>
        <translation>Enthält die Anwendungseinstellungen von ffDiaporama</translation>
    </message>
    <message>
        <source>Devices.xml</source>
        <translation>Devices.xml</translation>
    </message>
    <message>
        <source>Contains the base of profiles for video generation.</source>
        <translation>Enthält das Basisprofil der Erzeugung. Diese Datei wird von beiden Programmen ( ffDiaporama und MMFiler) verwendet. Änderungen die in der einen Anwendung getätigt werden, sind automatisch auch für die andere Anwendung vorhanden.</translation>
    </message>
    <message>
        <source>For example:</source>
        <translation>Zum Beispiel :</translation>
    </message>
    <message>
        <source>In order to work, the application needs two configuration files and one database. The two configuration files consists of a pair of files.</source>
        <translation>Um ordnungsgemäß zu arbeiten, braucht die Anwwendung zwei Konfigurationsdateien und eine Datenbank. Die Konfigurationsdateien bestehen aus zwei Dateien.</translation>
    </message>
    <message>
        <source> When the application is launched for the first time, the user configuration files and the database are created if they dont already exist. </source>
        <translation>Beim ersten Start der Applikation, werden die Konfiurationsdateien und die Datenbank erstellt.</translation>
    </message>
    <message>
        <source>If ffDiaporama is used by several users on the same PC, there will be separate configuration files and database for each user.</source>
        <translation>Wenn ffDiaporama von mehreren Benutzern auf einem Computer verwendet wird, werden für jeden Benutzer eigene Konfigurationsdateien und Datenbanken angelegt.</translation>
    </message>
    <message>
        <source>ffDiaporama.db</source>
        <translation>ffDiaporama.db</translation>
    </message>
    <message>
        <source>Is a SQLite3 database containing cached objects and some configuration options.</source>
        <translation>Ist eine SQLite3 Datenbank, welch die zwischengespeicherten Objekte und einige Einstellungen beinhält.</translation>
    </message>
</context>
<context>
    <name>0044</name>
    <message>
        <source>XBMC nfo files</source>
        <translation>XBMC nfo Dateien</translation>
    </message>
    <message>
        <source>The .nfo file for XBMC allows XBMC to recognize the rendered videos as movies.</source>
        <translation>Die .nfo Datei für XBMC ermöglicht XBMC das Erkennen der erstellten Videos als Film.</translation>
    </message>
    <message>
        <source>When doing a scan or an automatic new file discovery, XBMC uses the .nfo files.</source>
        <translation>Wenn nach Dateien gesucht wird, oder eine automatische Dateisuche gemacht wird, verwendet XBMC die .nfo Dateien.</translation>
    </message>
    <message>
        <source>During a manual refresh, XBMC offers you to find the film through one of its scrapers. Refuse its proposal to use the information contained in the .nfo file.</source>
        <translation>Während einer manuellen Aktualisierung, bietet XBMC an, die Filme (über seine Suchprogramme) zu finden. Lehnen Sie dieses Angebot ab, um die Informationen aus den .nfo Dateien zu verwenden.</translation>
    </message>
    <message>
        <source>Information included in the .nfo file</source>
        <translation>Informationen, die in den .nfo Dateien enthalten ist</translation>
    </message>
    <message>
        <source> &lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; standalone=&quot;yes&quot; ?&gt;</source>
        <translation> &lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; standalone=&quot;yes&quot; ?&gt;</translation>
    </message>
    <message>
        <source> &lt;movie&gt; </source>
        <translation> &lt;movie&gt; </translation>
    </message>
    <message>
        <source> &lt;title&gt;&lt;U&gt;&lt;B&gt;Project Title&lt;/B&gt;&lt;/U&gt;&lt;/title&gt;</source>
        <translation> &lt;title&gt;&lt;U&gt;&lt;B&gt;Projekttitel&lt;/B&gt;&lt;/U&gt;&lt;/title&gt;</translation>
    </message>
    <message>
        <source> &lt;sorttitle&gt;&lt;U&gt;&lt;B&gt;Rendered filename&lt;/B&gt;&lt;/U&gt;&lt;/sorttitle&gt;</source>
        <translation> &lt;sorttitle&gt;&lt;U&gt;&lt;B&gt;Dateiname des Video&lt;/B&gt;&lt;/U&gt;&lt;/sorttitle&gt;</translation>
    </message>
    <message>
        <source> &lt;set&gt;&lt;B&gt;&lt;U&gt;Project Album&lt;/U&gt;&lt;/B&gt;&lt;/set&gt;</source>
        <translation> &lt;set&gt;&lt;B&gt;&lt;U&gt;Projektalbum&lt;/U&gt;&lt;/B&gt;&lt;/set&gt;</translation>
    </message>
    <message>
        <source> &lt;genre&gt;&lt;B&gt;&lt;U&gt;Project Album&lt;/U&gt;&lt;/B&gt;&lt;/genre&gt;</source>
        <translation> &lt;genre&gt;&lt;B&gt;&lt;U&gt;Projektalbum&lt;/U&gt;&lt;/B&gt;&lt;/genre&gt;</translation>
    </message>
    <message>
        <source> &lt;year&gt;&lt;U&gt;&lt;B&gt;Year of project date&lt;/B&gt;&lt;/U&gt;&lt;/year&gt;</source>
        <translation> &lt;year&gt;&lt;U&gt;&lt;B&gt;Jahr des Projektdatums&lt;/B&gt;&lt;/U&gt;&lt;/year&gt;</translation>
    </message>
    <message>
        <source> &lt;outline&gt;&lt;U&gt;&lt;B&gt;Project Title&lt;/B&gt;&lt;/U&gt;&lt;/outline&gt;</source>
        <translation> &lt;outline&gt;&lt;U&gt;&lt;B&gt;Projekttitel&lt;/B&gt;&lt;/U&gt;&lt;/outline&gt;</translation>
    </message>
    <message>
        <source> &lt;plot&gt;&lt;U&gt;&lt;B&gt;Project Comment&lt;/B&gt;&lt;/U&gt;&lt;/plot&gt;</source>
        <translation> &lt;plot&gt;&lt;U&gt;&lt;B&gt;Projektkommentar&lt;/B&gt;&lt;/U&gt;&lt;/plot&gt;</translation>
    </message>
    <message>
        <source> &lt;director&gt;&lt;U&gt;&lt;B&gt;Project Author&lt;/B&gt;&lt;/U&gt;&lt;/director&gt;</source>
        <translation> &lt;director&gt;&lt;U&gt;&lt;B&gt;Projektautor&lt;/B&gt;&lt;/U&gt;&lt;/director&gt;</translation>
    </message>
    <message>
        <source> &lt;credits&gt;&lt;U&gt;&lt;B&gt;Project Author&lt;/B&gt;&lt;/U&gt;&lt;/credits&gt;</source>
        <translation> &lt;credits&gt;&lt;U&gt;&lt;B&gt;Projektautor&lt;/B&gt;&lt;/U&gt;&lt;/credits&gt;</translation>
    </message>
    <message>
        <source> &lt;runtime&gt;&lt;U&gt;&lt;B&gt;Project duration in minutes&lt;/B&gt;&lt;/U&gt;&lt;/runtime&gt;</source>
        <translation> &lt;runtime&gt;&lt;U&gt;&lt;B&gt;Projektlaufzeit in Minuten&lt;/B&gt;&lt;/U&gt;&lt;/runtime&gt;</translation>
    </message>
    <message>
        <source> &lt;thumb&gt;&lt;U&gt;&lt;B&gt;Project thumbnail&lt;/B&gt;&lt;/U&gt;&lt;/thumb&gt;</source>
        <translation> &lt;thumb&gt;&lt;U&gt;&lt;B&gt;Projektvorschaubild&lt;/B&gt;&lt;/U&gt;&lt;/thumb&gt;</translation>
    </message>
    <message>
        <source> &lt;/movie&gt; </source>
        <translation> &lt;/movie&gt; </translation>
    </message>
    <message>
        <source>See also</source>
        <translation>Siehe auch</translation>
    </message>
    <message>
        <source>Information on XBMC movies .nfo file</source>
        <translation>Informationen von XBMC Filmen .nfo Dateien</translation>
    </message>
</context>
<context>
    <name>0045</name>
    <message>
        <source>Types of objects in ffDiaporama</source>
        <translation>Arten von Objekten in ffDiaporama</translation>
    </message>
    <message>
        <source> This section contains information about types of objects that can be used with ffDiaporama. </source>
        <translation> Dieser Abschnitt enthält Informationen über die Typen von Objekten; welche in ffDiaporama verwendet werden können.</translation>
    </message>
    <message>
        <source>Index</source>
        <translation>Inhalt</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Text</translation>
    </message>
    <message>
        <source>Music file</source>
        <translation>Musiktitel</translation>
    </message>
    <message>
        <source>Bitmap image file</source>
        <translation>Bitmap Bilddatei</translation>
    </message>
    <message>
        <source>Bitmap image from clipboard</source>
        <translation>Bitmap Bild aus der Zwischenablage</translation>
    </message>
    <message>
        <source>Vector image file</source>
        <translation>Vektorbilddatei</translation>
    </message>
    <message>
        <source>Video file</source>
        <translation>Videodatei</translation>
    </message>
    <message>
        <source>Google maps map</source>
        <translation>Google Maps Karte</translation>
    </message>
    <message>
        <source>There are several things to know about Google Maps</source>
        <translation>Es gibt mehrere Dinge, die man über Google Maps wissen sollte</translation>
    </message>
    <message>
        <source>Google Maps generates images with up to 640x640. Within these images, Google Maps inserts logos that must be removed so that useful images are really only 640x600. Therefore, to generate an image for example 1080p, we have to assemble 6 Google Maps images.</source>
        <translation>Google Maps erzeugt Bilder mit einer Größe von 640x640 Bildpunkten. Innerhalb dieser Bilder, werden von Google Maps Logos eingefügt, welche entfernt werden müssen um ein sinnvolles Bild zu erhalten. Somit bleiben nur 640x600 Bildpunkte übrig. Um ein Bild für 1080p zu erstellen, müssen somit 6 Google Maps Bilder verarbeitet werden.</translation>
    </message>
    <message>
        <source>Google Maps limit the number of queries a user can send. This limitation is made to prevent robots to saturate the servers. Unfortunately, this limitation may cause problems when generating big picture. It is possible that you may receive an error warning message saying that you have reached the limit of Google Maps request grants to you.</source>
        <translation>Google Maps limitiert die Anzahl der Anfragen eines Benutzers. Diese Limitierung wurde eingeführt; um vor Robots zu schützen, welche die Server überlasten würden. Bedauerlicherweise führt dies eventuell zu Erstellungsproblemen bei großen Bildern. Möglicherweise erhalten Sie eine Fehlermeldung die besagt, dass Sie das Limit überschritten haben.</translation>
    </message>
    <message>
        <source>To resolve this problem, ffDiaporama integrates a mechanical of recovery. Thus, if a card can not be generated immediately, you can resume it generation later.</source>
        <translation>Um dieses Problem zu lösen, hat ffDiaporama einen Mechanismus zur Behebung eingebaut. Somit können Karten, die nicht sofort erstellt werden können, zu einem späteren Zeitpunkt erstellt werden.</translation>
    </message>
    <message>
        <source>The roads are perpetually modified and Google Maps is constantly updated. Of course, it is not possible to generate a map for road conditions at a specific date. Therefore, think before you update a map of an old project.</source>
        <translation>Die Straßen werden ständig verändert und Google Maps aktualisiert laufend. Es ist leider nicht möglich die Straßenkarten für einen bestimmten Zeitpunkt zu erstellen. Bitte bedenken Sie diesen Umstand, bevor Sie Karten eines alten Projektes aktualisieren.</translation>
    </message>
    <message>
        <source>Image size and Map size</source>
        <translation>Bildgröße und Kartengröße</translation>
    </message>
    <message>
        <source>Depending on the zoom level, Google Maps decides himself of the information displayed on the map. Thus, it is not possible to generate several maps at different zoom levels and then to create a zoom animation because there is no chance that this animation be fluid. It&apos;s why ffDiaporama proposes to generate maps of several image sizes. So, to create a fluid zoom animation, you can use a large image.</source>
        <translation>Abhängig vom Zoom bestimmt Google Maps selbst, welche Informationen auf einer Karte angezeigt werden. Somit ist es leider nicht möglich, Karten mit unterschiedlichen Zoomstufen zu erstellen, um eine Zoomanimation zu erhalten. Es ist nahezu aussichtslos, eine flüssige Animation zu erhalten. Deshalb bietet ffDiaporama die Möglichkeit an, Karten mit unterschiedlichen Bildgrößen zu erstellen. Damit können annähernd flüssige Zoomanimationen erstellt werden, wenn Sie große Karten verwenden.</translation>
    </message>
    <message>
        <source>The following table shows the different &lt;U&gt;Image sizes&lt;/U&gt; that you can generate.</source>
        <translation>Folgende Tabelle zeigt die unterschiedlichen &lt;U&gt;Bildgrößen&lt;/U&gt;, die erstellt werden können.</translation>
    </message>
    <message>
        <source>Image size</source>
        <translation>Bildgröße</translation>
    </message>
    <message>
        <source>Resolution</source>
        <translation>Auflösung</translation>
    </message>
    <message>
        <source>Comment</source>
        <translation>Kommentar</translation>
    </message>
    <message>
        <source>Small-16:9</source>
        <translation>Klein-16:9</translation>
    </message>
    <message>
        <source>640x360 (0.2 MPix)</source>
        <translation>640x360 (0.2 MPix)</translation>
    </message>
    <message>
        <source>Quarter of 720p. Useful to add a small map in a photo collage</source>
        <translation>Ein Viertel von 720p. Nützlich um schmale Karten in einer Fotogalerie zu erstellen</translation>
    </message>
    <message>
        <source>1280x720 (0.9 MPix)</source>
        <translation>1280x720 (0.9 MPix)</translation>
    </message>
    <message>
        <source>Useful for creating a full-screen map in a 720p project or to add a map to a title slide in a 1080p project</source>
        <translation>Nützlich um Vollbildkarten in einem 720p Projekt zu erstellen oder um eine Karte in einem Titel-Dia eines 1080p Projektes zu erstellen</translation>
    </message>
    <message>
        <source>720px4-16:9</source>
        <translation>720px4-16:9</translation>
    </message>
    <message>
        <source>2560x1440 (3.6 MPix)</source>
        <translation>2560x1440 (3.6 MPix)</translation>
    </message>
    <message>
        <source>Useful for creating a full-screen &lt;B&gt;animated&lt;/B&gt; map in a 720p project or to add an &lt;B&gt;animated&lt;/B&gt; map to a title slide in a 1080p project</source>
        <translation>Nützlich um &lt;B&gt;animierte&lt;/B&gt; Vollbildkarten in einem 720p Projekt zu erstellen oder um eine &lt;B&gt;animierte&lt;/B&gt; Karte in einem Titel-Dia eines 1080p Projektes zu erstellen</translation>
    </message>
    <message>
        <source>1920x1080 (2 MPix)</source>
        <translation>1920x1080 (2 MPix)</translation>
    </message>
    <message>
        <source>Useful for creating a full-screen map in a 1080p project</source>
        <translation>Nützlich um Vollbildkarten in einem 1080p Projekt zu erstellen</translation>
    </message>
    <message>
        <source>1080px4-16:9</source>
        <translation>1080px4-16:9</translation>
    </message>
    <message>
        <source>3840x2160 (8.2 MPix)</source>
        <translation>3840x2160 (8.2 MPix)</translation>
    </message>
    <message>
        <source>Useful for creating a full-screen &lt;B&gt;animated&lt;/B&gt; map in a 1080p project</source>
        <translation>Nützlich um &lt;B&gt;animierte&lt;/B&gt; Vollbildkarten in einem 1080p Projekt zu erstellen</translation>
    </message>
    <message>
        <source>Note that all image sizes are 16:9 geometry to simplify computation.</source>
        <translation>Bitte beachten Sie, dass alle Bilder zur einfacheren Berechnung in 16:9 erstellt werden.</translation>
    </message>
    <message>
        <source>Because a map is formed by joining multiple pieces of map, based on the image size, the card will be a map greater or lesser.</source>
        <translation>Da die Karte - abhängig von der Bildgröße - aus mehreren Stücken zusammengesetzt wird, die Karte größer oder kleiner wird.</translation>
    </message>
    <message>
        <source>The following table shows the &lt;U&gt;Map sizes&lt;/U&gt; in kilometers for each &lt;U&gt;Image sizes&lt;/U&gt; and &lt;U&gt;Google Maps zoom levels&lt;/U&gt;.</source>
        <translation>Die folgende Tabelle zeigt die &lt;U&gt;Kartengrößen&lt;/U&gt; in Kilometer für jede &lt;U&gt;Bildgröße&lt;/U&gt; und die &lt;U&gt;Google Maps Zoomstufen&lt;/U&gt;.</translation>
    </message>
    <message>
        <source>Zoom</source>
        <translation>Zoom</translation>
    </message>
    <message>
        <source>Maps sizes (kilometers)</source>
        <translation>Kartengröße (in Kilometer)</translation>
    </message>
    <message>
        <source>720p x4</source>
        <translation>720p x4</translation>
    </message>
    <message>
        <source>15011.315 km x 8613.829 km</source>
        <translation>15011.315 km x 8613.829 km</translation>
    </message>
    <message>
        <source>12509.429 km x 5930.123 km</source>
        <translation>12509.429 km x 5930.123 km</translation>
    </message>
    <message>
        <source>6254.715 km x 3351.985 km</source>
        <translation>6254.715 km x 3351.985 km</translation>
    </message>
    <message>
        <source>18764.144 km x 7605.642 km</source>
        <translation>18764.144 km x 7605.642 km</translation>
    </message>
    <message>
        <source>3127.357 km x 1737.202 km</source>
        <translation>3127.357 km x 1737.202 km</translation>
    </message>
    <message>
        <source>9382.072 km x 4760.424 km</source>
        <translation>9382.072 km x 4760.424 km</translation>
    </message>
    <message>
        <source>1563.679 km x 876.788 km</source>
        <translation>1563.679 km x 876.788 km</translation>
    </message>
    <message>
        <source>4691.036 km x 2566.349 km</source>
        <translation>4691.036 km x 2566.349 km</translation>
    </message>
    <message>
        <source>781.839 km x 439.436 km</source>
        <translation>781.839 km x 439.436 km</translation>
    </message>
    <message>
        <source>2345.518 km x 1310.024 km</source>
        <translation>2345.518 km x 1310.024 km</translation>
    </message>
    <message>
        <source>390.920 km x 219.849 km</source>
        <translation>390.920 km x 219.849 km</translation>
    </message>
    <message>
        <source>1172.759 km x 658.501 km</source>
        <translation>1172.759 km x 658.501 km</translation>
    </message>
    <message>
        <source>195.460 km x 109.941 km</source>
        <translation>195.460 km x 109.941 km</translation>
    </message>
    <message>
        <source>586.379 km x 329.691 km</source>
        <translation>586.379 km x 329.691 km</translation>
    </message>
    <message>
        <source>97.730 km x 54.972 km</source>
        <translation>97.730 km x 54.972 km</translation>
    </message>
    <message>
        <source>293.190 km x 164.901 km</source>
        <translation>293.190 km x 164.901 km</translation>
    </message>
    <message>
        <source>48.865 km x 27.486 km</source>
        <translation>48.865 km x 27.486 km</translation>
    </message>
    <message>
        <source>146.595 km x 82.457 km</source>
        <translation>146.595 km x 82.457 km</translation>
    </message>
    <message>
        <source>24.432 km x 13.743 km</source>
        <translation>24.432 km x 13.743 km</translation>
    </message>
    <message>
        <source>73.297 km x 41.230 km</source>
        <translation>73.297 km x 41.230 km</translation>
    </message>
    <message>
        <source>12.216 km x 6.872 km</source>
        <translation>12.216 km x 6.872 km</translation>
    </message>
    <message>
        <source>36.649 km x 20.615 km</source>
        <translation>36.649 km x 20.615 km</translation>
    </message>
    <message>
        <source>6.108 km x 3.436 km</source>
        <translation>6.108 km x 3.436 km</translation>
    </message>
    <message>
        <source>18.324 km x 10.307 km</source>
        <translation>18.324 km x 10.307 km</translation>
    </message>
    <message>
        <source>3.054 km x 1.718 km</source>
        <translation>3.054 km x 1.718 km</translation>
    </message>
    <message>
        <source>9.162 km x 5.154 km</source>
        <translation>9.162 km x 5.154 km</translation>
    </message>
    <message>
        <source>1.527 km x 0.859 km</source>
        <translation>1.527 km x 0.859 km</translation>
    </message>
    <message>
        <source>4.581 km x 2.577 km</source>
        <translation>4.581 km x 2.577 km</translation>
    </message>
    <message>
        <source>0.764 km x 0.429 km</source>
        <translation>0.764 km x 0.429 km</translation>
    </message>
    <message>
        <source>2.291 km x 1.288 km</source>
        <translation>2.291 km x 1.288 km</translation>
    </message>
    <message>
        <source>1.145 km x 0.644 km</source>
        <translation>1.145 km x 0.644 km</translation>
    </message>
    <message>
        <source>Notes:</source>
        <translation>Anmerkung:</translation>
    </message>
    <message>
        <source>Because Google Maps don&apos;t respect perfect alignment when using high zoom level, all map sizes lesser than 400 meters are useless with ffDiaporama.</source>
        <translation>Da Google Maps bei großen Zoomstufen nicht exakt ausrichtet, sind alle Karten, die kleiner als 400 Meter sind, für ffDiaporama unbrauchbar.</translation>
    </message>
    <message>
        <source>Google Maps zoom levels 0 and 1 are useless with ffDiaporama because they produce images that are too small.</source>
        <translation>Google Maps Zoomstufe 0 und 1 sind für ffDiaporama nicht brauchbar, da die erstellten Bilder zu klein sind.</translation>
    </message>
    <message>
        <source>Google Maps zoom levels 20 and 11 are useless with ffDiaporama Google Maps don&apos;t respect perfect alignment when using high zoom level.</source>
        <translation>Google Maps Zoomstufe 20 und 11 sind für ffDiaporama nicht brauchbar, da Google Maps bei hohen Zoomstufen nicht exakt ausrichtet.</translation>
    </message>
    <message>
        <source>Bitmap image file and Bitmap image from clipboard</source>
        <translation>Bitmap Bilddatei und Bitmap Bild aus der Zwischenablage</translation>
    </message>
    <message>
        <source>Google Maps</source>
        <translation>Google Maps</translation>
    </message>
    <message>
        <source>ffDiaporama can use music file in the following formats: wav, aac, adts, ac3, mp2, mp3, m4a or m4b or m4p, 3g2 or 3ga or 3gp, ogg or oga, spx, wma, flac</source>
        <translation>ffDiaporama unterstützt Musikstücke in den Formaten: wav, aac, adts, ac3, mp2, mp3, m4a or m4b or m4p, 3g2 or 3ga or 3gp, ogg or oga, spx, wma, flac</translation>
    </message>
    <message>
        <source>See also: </source>
        <translation>Siehe auch:</translation>
    </message>
    <message>
        <source>Definition of music file on Wikipedia</source>
        <translation>Definition von Musikdateien auf Wikipedia</translation>
    </message>
    <message>
        <source>ffDiaporama can use bitmap images in the following formats: bmp, gif (but not animated gif), jpg or jpeg, png, pbm, pgm, ppm, tiff or tif, xbm, xpm</source>
        <translation>ffDiaporama unterstützt Bitmap Bilddateien der folgenden Formate: bmp, gif (aber nicht animierte gif-Dateien), jpg or jpeg, png, pbm, pgm, ppm, tiff or tif, xbm, xpm</translation>
    </message>
    <message>
        <source>Definition of Bitmap image file on Wikipedia</source>
        <translation>Definition von Bitmap Bilddateien auf Wikipedia</translation>
    </message>
    <message>
        <source>ffDiaporama can use vector images in the following formats: svg</source>
        <translation>ffDiaporama unterstützt Vector Bilddateien in den folgenden Formaten: svg</translation>
    </message>
    <message>
        <source>Definition of vector image file on Wikipedia</source>
        <translation>Definition von Vektor Bilddateien auf Wikipedia</translation>
    </message>
    <message>
        <source>ffDiaporama can use video files in the following formats: avi, mov, mpg or mpeg, mkv, mp4 or m4v, flv, 3gp, ogv, webm, dv, wmv, mts or m2ts or mod</source>
        <translation>ffDiaporama untertützt Videodateien der folgenden Formate:  avi, mov, mpg or mpeg, mkv, mp4 or m4v, flv, 3gp, ogv, webm, dv, wmv, mts or m2ts or mod</translation>
    </message>
    <message>
        <source>Note: mts, m2ts and mod files are stream formats (AVCHD) which involve some limitations. For more information on AVCHD, see: </source>
        <translation>Anmerkung : mts, m2ts und mod Dateien sind Streamformate (AVCHD) mit manchen Einschränkungen. Für mehr Informationen über AVCHD, siehe: </translation>
    </message>
    <message>
        <source>Advanced Video Coding High Definition on Wikipedia</source>
        <translation>Advanced Video Coding High Definition auf Wikipedia</translation>
    </message>
    <message>
        <source>Definition of video file on Wikipedia</source>
        <translation>Definition von Videodateien auf Wikipedia</translation>
    </message>
    <message>
        <source>Note: ffDiaporama uses the filename extension to determine the type of image. It is therefore necessary that this extension was valid.</source>
        <translation>Anmerkung: ffDiaporama verwendet die Dateierweiterung, um den Type des Bildes zu erkennen. Damit ist unerlässlich, dass die Erweiterung gültig ist.</translation>
    </message>
</context>
<context>
    <name>0101</name>
    <message>
        <source>Application options dialog</source>
        <translation>Fenster für Anwendungsoptionen</translation>
    </message>
    <message>
        <source>The Application options tab allows to define the general behavior of ffDiaporama.</source>
        <translation>Der Karteireiter Anwendungsoptionen beinhaltet die Optionen für das grundsätzliche Verhalten von ffDiaporama.</translation>
    </message>
    <message>
        <source>The Project options tab allows to define the options by default of the current project and for the new projects.</source>
        <translation>Der Karteireiter für die Projektoptionen ermöglicht die Festlegung der Standardwerte für das aktuelle bzw. für neue Projekte.</translation>
    </message>
    <message>
        <source>The Rendering options Tab allows to define the options used by default during the generation of videos.</source>
        <translation>Der Karteireiter für die Optionen der Videoerstellung ermöglicht die Festlegung der Standardwerte für das Erstellen von Videos.</translation>
    </message>
    <message>
        <source>Application options</source>
        <translation>Anwendungsoptionen</translation>
    </message>
    <message>
        <source>Remember Windows size and positions</source>
        <translation>Merken der Fenstergröße/ -position</translation>
    </message>
    <message>
        <source>If this box is checked, the sizes and the positions of all windows and dialogs will be saved and reused the next time you use ffDiaporama.</source>
        <translation>Wenn diese Option aktiviert ist, werden die Größen und Positonen der Fenster/Dialoge von ffDiaporama gespeichert und beim nächsten Programmeinstieg wiederverwendet.</translation>
    </message>
    <message>
        <source>Remember last used folders</source>
        <translation>Speichern des zuletzt verwendeten Ordners</translation>
    </message>
    <message>
        <source>If this box is checked, the directories for images, videos, projects, music and the generation of your movie will be saved and reused the next time you use ffDiaporama.</source>
        <translation>Ist diese Option aktiviert, merkt sich ffDiaporama die Ordner für Bilder; Video; Projekte; Musik sowie den Ordner für die generierten Filme. Die letzten verwendeten Ordner werden gespeichert und beim nächsten Mal wiederverwendet.</translation>
    </message>
    <message>
        <source>Enable &quot;raster&quot; Graphics system</source>
        <translation>Aktiviere das &quot;Raster Grafik System&quot;</translation>
    </message>
    <message>
        <source>&lt;B&gt;For Linux users only: &lt;/B&gt;If this box is checked, the graphic system &quot;raster&quot; is used instead of the default graphic system. This option is used only at application start up. </source>
        <translation>Nur für Linuxanwender: Wenn diese Option selektiert ist, wird das &quot;Raster&quot;-System von Qt – anstelle des Standardgrafiksystemes – verwendet. Diese Option benötigt einen Neustart der Anwendung.</translation>
    </message>
    <message>
        <source>The &quot;raster&quot; Graphics accelerates the display but can raise problems on some computer in particular with KDE.</source>
        <translation>Das &quot;Raster&quot;-System beschleunigt die Anzeige, kann allerdings auf manchem Computern (im besonderen unter KDE) zu Problemen führen.</translation>
    </message>
    <message>
        <source>Memory profil</source>
        <translation>Speicherprofil</translation>
    </message>
    <message>
        <source>Preview options</source>
        <translation>Vorschaueinstellungen</translation>
    </message>
    <message>
        <source>Frame rate</source>
        <translation>Bildrate</translation>
    </message>
    <message>
        <source>Defines the number of images per second which will be generated to show the preview. </source>
        <translation>Legt die Anzahl der Bilder pro Sekunde fest, die in der Vorschau verwendet werden.</translation>
    </message>
    <message>
        <source>Note: the higher this number, the more smooth the preview will be. On the other hand, more computer resources will be required. Reduce this number on slow computers or if the gauge for your multimedia reader is frequently in the red zone.</source>
        <translation>Anmerkung: Je höher die Anzahl ist, desto genauer wird die Vorschau präsentiert. Allerdings braucht Ihr Computer dazu einiges an Leistung. Sollte die Vorschau ins Stocken geraten, senken Sie die Anzahl Bilder pro Sekunde um wieder eine flüssige Vorschau zu erhalten. Im Vorschaufenster sehen Sie rechts unten eine Anzeige der benötigten Ressourcen. Kommt die Anzeige des öfteren in den roten Bereich, sollten Sie die Anzahl Bilder pro Sekunde für die Vorschau herabsetzen.</translation>
    </message>
    <message>
        <source>Image smoothing (smooth images during preview)</source>
        <translation>Kantenglättung (anwenden während der Vorschau)</translation>
    </message>
    <message>
        <source>If this box is checked, the image smoothing effect will be applied to the images during the preview. </source>
        <translation>Wenn diese Option aktiviert ist, werden die Bilder während der Vorschau mit einer Kantenglättung verbessert.</translation>
    </message>
    <message>
        <source>Editor options</source>
        <translation>Editoreinstellungen</translation>
    </message>
    <message>
        <source>Coordinates unit</source>
        <translation>Koordinateneinheiten</translation>
    </message>
    <message>
        <source>This option allows to select the unit for the coordinates which will be used in the properties dialog. You can choose: </source>
        <translation>Mittles dieser Auswahl wechseln Sie die verwendeten Einheiten die in den Eigenschaftsdialogen verwendet wird. Sie können wählen zwischen:</translation>
    </message>
    <message>
        <source>Percentage: Coordinates (X, Y, Width and Height) are expressed in percentages</source>
        <translation>Prozente: Koordinaten (X, Y, Breite und Höhe) werden in Prozent angezeigt</translation>
    </message>
    <message>
        <source>Pixel: Coordinates (X, Y, Width and Height) are expressed in pixels relative to a screen in 1080p mode</source>
        <translation>Bildpunkte: Koordinaten (X, Y,Breite und Höhe) werden in Bildpunkten relativ zu einem Bild im 1080p-Modus angezeigt</translation>
    </message>
    <message>
        <source>Object position</source>
        <translation>Position des Objekts</translation>
    </message>
    <message>
        <source>This option allows you to adjust the positions occupied by new objects inserted into the timeline. </source>
        <translation>Diese Option legt fest, wo ein neues Objekt in der Zeitleiste platziert wird.</translation>
    </message>
    <message>
        <source>If &lt;I&gt;&lt;B&gt;Insert after the current selected object&lt;/B&gt;&lt;/I&gt; is selected, then the new slides will be created after the current slide.</source>
        <translation>Wenn die Option &lt;I&gt;&lt;B&gt;Nach aktuellem Objekt einfügen&lt;/B&gt;&lt;/I&gt; gewählt wurde, wird das neue Objekt im Anschluß an das aktuelle Dia erstellt.</translation>
    </message>
    <message>
        <source>If &lt;I&gt;&lt;B&gt;Append to the end of the project&lt;/B&gt;&lt;/I&gt; is selected, then the new slides will be created at the end of the project.</source>
        <translation>Wenn die Option &lt;I&gt;&lt;B&gt;Am Ende des Projektes anfügen&lt;/B&gt;&lt;/I&gt; gewählt wurde, wird das neue Objekt am Ende des Projektes angefügt.</translation>
    </message>
    <message>
        <source>Object deletion</source>
        <translation>Löschen von Objekten</translation>
    </message>
    <message>
        <source>If this box is checked, a confirmation prompt will be displayed every time you remove an object: </source>
        <translation>Ist diese Option aktiviert, erfolgt eine Abfrage ob diese Löschaktion tatsächlich durchgeführt werden soll, beim:</translation>
    </message>
    <message>
        <source>A slide from the main window</source>
        <translation>Löschen eines Dia im Hauptfenster</translation>
    </message>
    <message>
        <source>A shot or bloc from the slide properties dialog box</source>
        <translation>Löschen einer Aufnahme oder eines Blockes innerhalb der Diabearbeitung</translation>
    </message>
    <message>
        <source>If the &lt;B&gt;Activate deinterlace filter when add new MTS videos&lt;/B&gt; is checked, deinterlace filter will automatically be activated for all .mts videos added to the project. </source>
        <translation>Wenn die Optionsbox &lt;B&gt;Aktiviere Deinterlacefilter beim Hinzufügen von MTS Videos&lt;/B&gt; selektiert ist, wird der Deinterlace Filter automatisch für alle .mts Videos aktiviert die dem Projekt hinzugefügt werden. </translation>
    </message>
    <message>
        <source>interlaced video</source>
        <translation>Interlaced Video</translation>
    </message>
    <message>
        <source>Project options</source>
        <translation>Projektoptionen</translation>
    </message>
    <message>
        <source>Project properties</source>
        <translation>Projekteigenschaften</translation>
    </message>
    <message>
        <source>Title</source>
        <translation>Titel</translation>
    </message>
    <message>
        <source>Defined the automatic filling method to use for the title&apos;s project properties: </source>
        <translation>Bestimmt die Art und Weise, wie der Projekttitel festgelegt wird:</translation>
    </message>
    <message>
        <source>No automatic filling : You will have to define manually the title</source>
        <translation>Kein automatisches Ausfüllen : Sie müssen den Titel manuell festlegen</translation>
    </message>
    <message>
        <source>Fill with project name when project save : The title will take the same name as the .ffd file</source>
        <translation>Der Projektname wird beim Speichern des Projektes festgelegt : Der Titel erhält den selben Namen wie die .ffd Datei</translation>
    </message>
    <message>
        <source>Author</source>
        <translation>Autor</translation>
    </message>
    <message>
        <source>Default language</source>
        <translation>Standardsprache</translation>
    </message>
    <message>
        <source>Defines the default value for the field Language</source>
        <translation>Legt die Standardsprache für das Feld Sprache fest</translation>
    </message>
    <message>
        <source>New project geometry</source>
        <translation>Geometrie (nur für neue Projekte)</translation>
    </message>
    <message>
        <source>Selects the image geometry to be used for the creation of projects. Three geometries are available : </source>
        <translation>Wählt die Bildgeometrie für die Erstellung von Projekten. Drei Geometrien sind verfügbar:</translation>
    </message>
    <message>
        <source> Note: the geometry of a project is defined once and for all when it is created. It is not possible to modify it afterwards.</source>
        <translation>Anmerkung : Die Geometrie eines Projektes wird beim Erzeugen des Projektes festgelegt und kann anschliessend nicht mehr geändert werden.</translation>
    </message>
    <message>
        <source>Default 1&lt;SUP&gt;st&lt;/SUP&gt; shot duration</source>
        <translation>Dauer  Einstiegsbild</translation>
    </message>
    <message>
        <source>Defines the default duration of the first shot for slides during their creation.</source>
        <translation>Legt die Dauer für das Einstiegsbild eines Dias bei der Erstellung fest.</translation>
    </message>
    <message>
        <source>Next shot duration</source>
        <translation>Dauer Folgebilder</translation>
    </message>
    <message>
        <source>Defines the default duration of further shots.</source>
        <translation>Legt die Dauer für alle Folgebilder fest.</translation>
    </message>
    <message>
        <source>Default transition</source>
        <translation>Standardübergang</translation>
    </message>
    <message>
        <source>Defines the transition to be inserted between inserted slides : </source>
        <translation>Legen Sie hier fest, welcher Effekt beim Einfügen von neuen Bilder verwendet werden soll :</translation>
    </message>
    <message>
        <source> A transition chosen randomly from the library</source>
        <translation>Einen zufälligen Übergang aus der Bibliothek wählen</translation>
    </message>
    <message>
        <source> No transition</source>
        <translation>Ohne Übergang</translation>
    </message>
    <message>
        <source> Cross-fade transition</source>
        <translation>Überblendeffekt wird angewandt</translation>
    </message>
    <message>
        <source>Default options for speed waves</source>
        <translation>Standardoptionen für die Anstiegskurve</translation>
    </message>
    <message>
        <source>Transition</source>
        <translation>Übergang</translation>
    </message>
    <message>
        <source>Sets the default speed wave for the transitions of new projects</source>
        <translation>Legt die Anstiegskurve für Effekte in neuen Projekten fest</translation>
    </message>
    <message>
        <source>Blocks animation</source>
        <translation>Blockanimation</translation>
    </message>
    <message>
        <source>Sets the default speed curve for the blocks animations of new projects</source>
        <translation>Legt die Anstiegskurve für Blockanimationen in neuen Projekten fest</translation>
    </message>
    <message>
        <source>Images animation</source>
        <translation>Bildanimation</translation>
    </message>
    <message>
        <source>Sets the default speed for the image effects animations of new projects</source>
        <translation>Legt die Anstiegskurve für Bildanimationen in neuen Projekten fest</translation>
    </message>
    <message>
        <source>Default options for new text block</source>
        <translation>Standardoptionen für neuen Textblock</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Text</translation>
    </message>
    <message>
        <source>Allows to select the characters style applied to the new text blocks. This style defines the font, its size, its color and the shadow effects applied to the text.</source>
        <translation>Ermöglicht die Auswahl des Stils (in welchem Schriftart,r Schriftsti, Farbe usw. definiert sind), der auf einen neuen Textblock angewandt werden soll.</translation>
    </message>
    <message>
        <source>Background</source>
        <translation>Hintergrund</translation>
    </message>
    <message>
        <source>Allows to select the style of background applied to the new text blocks. This style defines the transparency of the block and its filling.</source>
        <translation>Ermöglicht die Auswahl des Hintergrundstils für einen neu erstellten Textblock. Der Stl beinhaltet die Transparenz des Blocks sowie seine Füllung.</translation>
    </message>
    <message>
        <source>Shape</source>
        <translation>Rahmen</translation>
    </message>
    <message>
        <source>Coordinates</source>
        <translation>Koordinaten</translation>
    </message>
    <message>
        <source>Allows to select, for every project geometry, the style of the location applied to the new text blocks. This style defines the size, the coordinates, the rotations and the geometrical constraint.</source>
        <translation>Ermöglicht die Auswahl der Position des neu erstellten Textblocks für die einzelne Geometrie. Der Stil legt die Größe, die Position, die Rotation sowie die geometrische Ausrichtung des Blocks fest.</translation>
    </message>
    <message>
        <source>Locking</source>
        <translation>Sperre</translation>
    </message>
    <message>
        <source>Allows to Select the geometric constraint applied to the new text blocks. </source>
        <translation>Ermöglicht es, dier Geometrie für neu erstellte Textblöcke zu fixieren.</translation>
    </message>
    <message>
        <source>Unlock: The shape of the block is free</source>
        <translation>Frei: Das Format des Blockes ist frei veränderbar</translation>
    </message>
    <message>
        <source>Lock to project geometry: The shape of the has the same shape as the image</source>
        <translation>Gesperrt zur Projektgeometrie: Das Format des Blocks hat das selbe Format wie das Bild</translation>
    </message>
    <message>
        <source>Default options for new image or video block (when creating slide)</source>
        <translation>Standardeinstellungen für neuen Bild- oder Videoblock (beim Erstellen von Aufnahmen)</translation>
    </message>
    <message>
        <source>The following settings apply to all image formats:</source>
        <translation>Folgende Einstellungen betreffen alle Bildformate:</translation>
    </message>
    <message>
        <source>Text style</source>
        <translation>Textstil</translation>
    </message>
    <message>
        <source>Allows to select the characters style applied to the text of the blocks. This style defines the font, its size, its color and the shadow effects applied to the text.</source>
        <translation>Ermöglicht die Auswahl des Textstiles aus den Stilvorlagen. Im Stil sind Schriftart, Schrifttyp, Größe, Farbe und Schatten definiert.</translation>
    </message>
    <message>
        <source>For every image format and every project geometry select the style of location to applied to the new blocks. This style concerns the size, the coordinates, the rotations and the geometrical constraint.</source>
        <translation>Für jedes Bildformat und jede Projektgeometrie wählen Sie den Stil der einem neuen Block zugeordnet werden soll. Der Stil umfasst die Parameter für Größe, Koordinaten, Rotation und die Geometrische Beschränkung.</translation>
    </message>
    <message>
        <source>Framing styles define how to crop the image to make it compatible with the block in which is displayed.</source>
        <translation>Rahmenstile legen den Beschnitt eines Bildes fest, um dieses kompatibel mit dem Block zu machen, in welchem es dargestellt wird.</translation>
    </message>
    <message>
        <source>The positioning styles define the the size, coordinates, rotations and geometric constraint to apply to blocks.</source>
        <translation>Der Positionierungsstil legt Größe, Koordinaten, Rotation und Geometrische Beschränkung für alle Blöcke
 fest.</translation>
    </message>
    <message>
        <source>Default options for new image or video block (when adding block in slide dialog)</source>
        <translation>Standardeinstellungen für neuen Bild- oder Videoblock (beim Hinzufügen von Blöcken während der Diabearbeitung)</translation>
    </message>
    <message>
        <source>The same selection that when creating slides apply.</source>
        <translation>Dieselbe Auswahl wie bei &quot;Dias erstellen&quot; erscheint.</translation>
    </message>
    <message>
        <source>Rendering options</source>
        <translation>Wiedergabeeinstellungen</translation>
    </message>
    <message>
        <source>Default video name</source>
        <translation>Vorgabe für Videoname</translation>
    </message>
    <message>
        <source>This option allows to select the name which will be proposed by default during the rendering of videos. This option can be applied only if the project was saved at first.</source>
        <translation>Diese Option legt fest, wie der Name für das erzeugte Video generiert wird. Die Option steht erst zur Verfügung, nachdem das Projekt einmal gespeichert wurde.</translation>
    </message>
    <message>
        <source>Use project name as video name</source>
        <translation>Verwende Projektname als Videoname</translation>
    </message>
    <message>
        <source>If the project name is &quot;assembly.ffd&quot;, then &quot;assembly&quot; will be the proposed name</source>
        <translation>Wenn der Projektname zum Beispiel &quot;assembly.ffd&quot; lautet, wird für den erzeugten Film der Name &quot;assembly&quot; generiert</translation>
    </message>
    <message>
        <source>Use project folder&apos;s name as video name</source>
        <translation>Verwende Namen des Projektordners als Videoname</translation>
    </message>
    <message>
        <source>If the project name is &quot;assembly.ffd&quot; and is saved in the &quot;My holidays 2011&quot; directory, then &quot;My holidays 2011&quot; will be the proposed name</source>
        <translation>Wenn der Projektname zum Beispiel &quot;assembly.ffd&quot; lautet und im Verzeichnis &quot;Urlaub 2011&quot; gespeichert ist, wird &quot;Urlaub 2011&quot; als Videoname für den erzeugten Film generiert</translation>
    </message>
    <message>
        <source>Use title project as video name</source>
        <translation>Verwende den Projekttitel als Videoname</translation>
    </message>
    <message>
        <source>Use the title defined in the project properties as the name of video</source>
        <translation>Verwende den Titel der Projekteigenschaften als Dateiname für das erstellte Video</translation>
    </message>
    <message>
        <source>Default device mode rendering options</source>
        <translation>Standardeinstellungen für Gerätemodelle</translation>
    </message>
    <message>
        <source>Smartphone</source>
        <translation>Smartphone</translation>
    </message>
    <message>
        <source>Selects the default type and equipment model when you will click the &quot;Player and Smartphone&quot; button of the &quot;Render movie&quot; menu</source>
        <translation>Legt den Stadardtyp und das Modell für die Generierung von Filmen fest, wenn Sie &quot;Mobil&quot; unter &quot;Video erzeugen&quot; wählen</translation>
    </message>
    <message>
        <source>Multimedia system</source>
        <translation>Multimediasystem</translation>
    </message>
    <message>
        <source>Selects the default type and equipment model when you will click the &quot;Multimedia system&quot; button of the &quot;Render movie&quot; menu</source>
        <translation>Legt den Standardtyp und das Modell für die Generierung von Filmen fest, wenn Sie &quot;Bildschirm&quot; unter &quot;Video erzeugen&quot; wählen</translation>
    </message>
    <message>
        <source>For the WEB</source>
        <translation>Internet</translation>
    </message>
    <message>
        <source>Selects the default type and equipment model when you will click the &quot;For the Web&quot; button of the &quot;Render movie&quot; menu</source>
        <translation>Legt den Standardtyp und das Modell für die Generierung von Filmen fest, wenn Sie &quot;Internet&quot; unter &quot;Video erzeugen&quot; wählen</translation>
    </message>
    <message>
        <source>Lossless</source>
        <translation>Verlustlos</translation>
    </message>
    <message>
        <source>Selects the default image size to be used when you will click the &quot;Lossless&quot; button of the &quot;Render movie&quot; menu</source>
        <translation>Legt die zu verwendende Standardgröße der Bilder fest, welche im Modus &quot;verlustfreie Qualität&quot; für die Umwandlung in einen Film verwendet werden soll</translation>
    </message>
    <message>
        <source>Default advanced rendering options</source>
        <translation>Standardeinstellungen erweiterte Wiedergabe</translation>
    </message>
    <message>
        <source>File format</source>
        <translation>Dateiformat</translation>
    </message>
    <message>
        <source>Selects the default file type to use for the rendering out of the proposed list.</source>
        <translation>Legt den Standarddateityp für das Erstellen von Videos fest.</translation>
    </message>
    <message>
        <source>Video standard</source>
        <translation>Videonorm</translation>
    </message>
    <message>
        <source>Selects the default video standard to use: PAL or NTSC.</source>
        <translation>Legt die verwendete Videonorm fest: PAL oder NTSC.</translation>
    </message>
    <message>
        <source>Format</source>
        <translation>Format</translation>
    </message>
    <message>
        <source>Selects the default image format to use for the rendering out of the proposed list.</source>
        <translation>Legt das Bildformat für das erstellte Video fest.</translation>
    </message>
    <message>
        <source>Video codec</source>
        <translation>Videocodec</translation>
    </message>
    <message>
        <source>Selects the default video codec to use for the rendering out of the proposed list.</source>
        <translation>Legt den verwendeten Videocodec zur Filmerstellung fest.</translation>
    </message>
    <message>
        <source>Selects the default bit rate to use for video during the rendering out of the proposed list.</source>
        <translation>Legt die Bitrate für den erstellten Film fest.</translation>
    </message>
    <message>
        <source>Audio codec</source>
        <translation>Audiocodec</translation>
    </message>
    <message>
        <source>Selects the default audio codec to use for the rendering out of the proposed list.</source>
        <translation>Legt den verwendeten Audiocodec zur Erstellung des Filmes fest.</translation>
    </message>
    <message>
        <source>Selects the default bit rate to use for audio during the rendering out of the proposed list.</source>
        <translation>Legt die Bitrate für Audio fest, die für das erstellte Video verwendet wird.</translation>
    </message>
    <message>
        <source>If the &lt;B&gt;Automatically crop 1920x1088 video to 1920x1080&lt;/B&gt; is checked then video images are automatically cropped. </source>
        <translation>Wenn die Option &lt;B&gt;Automatischer Beschnitt von 1920x1088 zu 1920x1080 für Videos&lt;/B&gt; ausgewählt ist, wird das Videobild automatisch beschnitten. </translation>
    </message>
    <message>
        <source>Remark: Some manufacturers produce FullHD videos 1920x1088 rather than 1920x1080. They make it to accelerate the encoding which is faster with a multiple of 16 lines. But this size is not 16:9. To keep the whole image, not only the image is deformed to fit into the screen but besides black bands appear on the sides. To avoid all these problems, by checking this box, these videos are truncated to be returned to the 1920x1080 sizes. Then 4 lines are cut at the top and bottom.</source>
        <translation>Anmerkung : Manche Hersteller von FullHD-Videos verwenden 1920x1088 anstelle von 1920x1080. Dies wird meist wegen der schnelleren Berechnung (vielfaches von 16 Linien). Allerdings ist diese Größe nicht entsprechend 16:9. Um das volle Bild zu erhalten, ohne dass das Bild deformiert wird oder schwarze Balken seitlich zu sehen sind, wählen Sie diese Option aus um die Videos wieder auf die richtige Auflösung von 1920x1080 zu beschneiden. Dadurch werden oben und unten jeweils 4 Linien beschnitten. </translation>
    </message>
    <message>
        <source>Remark: Some manufacturers produce videos using interlaced mode. They make it to accelerate the encoding. The problem is it deforms the image on which moved lines appear. For more information on interlaced video, see this Wikipedia page: </source>
        <translation>Anmerkung: Manche Hersteller von Videos verwenden Interlaced-Modus. Dies haupsächlich um die Berechnungsdauer zu verringern. Das entstehende Problem besteht in der schlechten Darstellung von wanderenden Linien (Treppenbildung). Für weitere Informationen konsultieren Sie bitte die entsprechende Seite in Wikipedia:</translation>
    </message>
    <message>
        <source>4:3: Corresponds to an old TV with (almost) square screen</source>
        <translation>4:3 : Entspricht dem alten Fernsehbild, das nahezu quadratisch war</translation>
    </message>
    <message>
        <source>16:9: Corresponds to a modern TV with rectangular screen</source>
        <translation>16:9 : Entspricht dem aktuellem Fernsehformat, das sich eher rechteckig – auch als Breitbild bezeichnet – darstellt</translation>
    </message>
    <message>
        <source>2.35:1: Corresponds to the Cinema format (on a TV, this format will use black strips at the top and below).</source>
        <translation>2.35:1 : Entspricht dem Kinoformat (Auf einem Fernseher werden mehr oder weniger große schwarze Balken im oberen und unterem Bereich angezeigt).</translation>
    </message>
    <message>
        <source>This group of settings applies to the new text blocks created in slide dialogue by means of this button: </source>
        <translation>Diese Gruppe an Einstellungen bezieht sich auf die Standardwerte für einen neu erstellten Textblock. Ein neuer Textblock wird durch Klick auf das Symbol erstellt:</translation>
    </message>
    <message>
        <source>This group of settings applies to the new image or video blocks created from the main window by means of this button: </source>
        <translation>Diese Gruppe von Einstellungen betrifft neu erstellte Bilder oder Videoblöcke. Diese werden im Hauptfenster mit einem Klick auf das Symbol erstellt:</translation>
    </message>
    <message>
        <source>Select, for each image format, the style of framing and the style of positioning to be applied to new blocks.</source>
        <translation>Wählen Sie für jedes Bildformat den Stil des Rahmens und den Stil für Positionierung der einem neuen Block zugewiesen wird.</translation>
    </message>
    <message>
        <source>This group of settings applies to the new image or video blocks created in slide dialogue by means of this button: </source>
        <translation>Diese Gruppe von Einstellungen betrifft neu erstellte Bilder oder Videoblöcke, die im Dialog Dia über dieses Symbol erstellt werden:</translation>
    </message>
    <message>
        <source>Bitrate</source>
        <translation>Bitrate</translation>
    </message>
    <message>
        <source>This dialog box allows you to define options for the application. It consists of the following 3 tabs:</source>
        <translation>Das Fenster für die Programmeinstellungen erlaubt es, die Optionen für das Programm festzulegen. Das Fenster beinhaltet drei Tabs:</translation>
    </message>
    <message>
        <source>The Application options tab allows you to define the general behavior of ffDiaporama.</source>
        <translation>Der Karteireiter Anwendungsoptionen beinhaltet die Optionen für das grundsätzliche Verhalten von ffDiaporama.</translation>
    </message>
    <message>
        <source>The Project options tab allows you to define the options by default of the current project and for the new projects.</source>
        <translation>Der Karteireiter für die Projektoptionen ermöglicht die Festlegung der Standardwerte für das aktuelle bzw. für neue Projekte.</translation>
    </message>
    <message>
        <source>The Rendering options Tab allows you to define the options used by default during the generation of videos.</source>
        <translation>Die Optionen für die Wiedergabeeinstellungen legen die Standards für das Erstellen von Videos fest.</translation>
    </message>
    <message>
        <source>Disable tooltips in dialog box</source>
        <translation>Abschalten der Tipps in Fensterdialogen</translation>
    </message>
    <message>
        <source>If this box is checked, tooltips will no longer appear in dialog boxes (only what&apos;s this will be available).</source>
        <translation>Wenn diese Option gewählt ist, werden Tipps nicht länger in Dialogen angezeigt (&quot;was ist das&quot; bleibt dadurch unberührt).</translation>
    </message>
    <message>
        <source>Offer to open the download Web page when a new version is available</source>
        <translation>Bietet die Möglichkeit die Downloadseite zu öffnen, wenn eine neue Version verfügbar ist</translation>
    </message>
    <message>
        <source>If this box is checked, a dialog box will appear at startup the next time a new version will be available. </source>
        <translation>Ist diese Option aktiv, öffnet sich beim nächsten Programmstart ein Informationsfenster, sofern eine neue Version verfügbar ist.</translation>
    </message>
    <message>
        <source>By default, this box is checked for Windows users and unchecked for Linux users</source>
        <translation>Standardmässig ist diese Option für Windowsbenutzer aktiv und für Linuxbenutzer inaktiv</translation>
    </message>
    <message>
        <source>For users of 32-bit systems, it is recommended that set this value to 512 MB if the computer has at least 2 GB of RAM. </source>
        <translation>Für Benutzer eines 32-Bit Systems, wird ein Wert von 512MB empfohlen, wenn der Computer mind. 2GB Arbeitsspeicher hat.</translation>
    </message>
    <message>
        <source>For users of 64-bit systems, it is recommended that set this value to 2 GB if the computer has at least 4 GB of RAM.</source>
        <translation>Für Benutzer von 64-Bit Systemen, ist ein Wert von 2GB empfohlen, sofern der Computer über mind. 4GB Arbeitsspeicher verfügt.</translation>
    </message>
    <message>
        <source>Max video preview height</source>
        <translation>Maximale Höhe der Videovorschau</translation>
    </message>
    <message>
        <source>Sets the maximum height of videos used for the preview. Beyond this height, the videos are automatically reduced for creating images. </source>
        <translation>Legt die maximale Höhe des Vorschauvideos fest. Unabähngig dieses Wertes, werden die erstellten Bilder eines Videos automatisch reduziert.</translation>
    </message>
    <message>
        <source>This parameter affects only the preview and does not change the quality of rendered video. </source>
        <translation>Dieser Parameter wirkt sich ausschliesslich auf die Vorschau aus und ändert nicht die Qualität des erstellten Videos.</translation>
    </message>
    <message>
        <source>It is recommended to reduce this value for slow computer.</source>
        <translation>Es wird empfohlen, den Wert für langsame Computer zu reduzieren.</translation>
    </message>
    <message>
        <source>This effect consumes lots of resources and can result in slow preview on small machines. Unchecking this box allows then to keep a fluid preview. </source>
        <translation>Anmerkung: Dieser Effekt verbraucht während der Berechnung Zeit, die sich eventuell negativ auf die Vorschau auswirkt. Ein Abschalten dieser Option kann flüssigere Voransichten erzeugen.</translation>
    </message>
    <message>
        <source>This parameter affects only the preview and does not change the quality of rendered video.</source>
        <translation>Dieser Parameter wirkt sich ausschliesslich auf die Vorschau aus und ändert nicht die Qualität des erstellten Videos.</translation>
    </message>
    <message>
        <source>Sound sample rate</source>
        <translation>Abtastrate für Musik</translation>
    </message>
    <message>
        <source>Defines the frequency of the sound generated to show the preview. </source>
        <translation>Legt die Frequenz für den in der Vorschau erstellten Ton fest.</translation>
    </message>
    <message>
        <source>Video cropping</source>
        <translation>Video Beschneidung</translation>
    </message>
    <message>
        <source>Video deinterlacing</source>
        <translation>Video-Deinterlacing</translation>
    </message>
    <message>
        <source>Various options</source>
        <translation>Verschiedene Optionen</translation>
    </message>
    <message>
        <source>Short date format</source>
        <translation>Format Kurzdatum</translation>
    </message>
    <message>
        <source>This option allows you to specify the format in which computed dates are displayed. </source>
        <translation>Diese Option legt das Format fest in dem das Datum angezeigt wird.</translation>
    </message>
    <message>
        <source>Normally this format depends on the language used on your system, but it can be useful to change it especially if the interface is not available for your language.</source>
        <translation>Normalerweise wird dieses Format durch die Ländereinstellungen Ihres Systems festgelegt, kann allerdings überschrieben werden, falls für Ihre Sprache keinen entsprechenden Einstellungen existieren.</translation>
    </message>
    <message>
        <source>Enhance id3v2 comptatibility</source>
        <translation>Erweiterete id3v2 Kompatibilität</translation>
    </message>
    <message>
        <source>For more compatibility with the standard id3v2, check this box to limit Title, Author and Album fields to 30 characters</source>
        <translation>Für bessere Kompatibilität mit dem id3v2-Standard, aktivieren Sie diese Option um die Felder für Titel und Album auf 30 Zeichen zu beschränken</translation>
    </message>
    <message>
        <source>Default thumbnail</source>
        <translation>Standardvorschaubild</translation>
    </message>
    <message>
        <source>For more information on joined files, see &lt;a href=&quot;003A.html&quot;&gt;File attachments&lt;/a&gt;</source>
        <translation>Für mehr Informationen über zusammengeführte Dateien, siehe &lt;a href=&quot;003A.html&quot;&gt;Dateianhänge&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Default joined files options</source>
        <translation>Standardoptionen für zusammengeführte Dateien</translation>
    </message>
    <message>
        <source>Join thumbnail to rendered file</source>
        <translation>Vorschaubild mit erstelltem Video zusammenführen</translation>
    </message>
    <message>
        <source>If this box is checked then a thumbnail file will be created with video.</source>
        <translation>Ist diese Option aktiv, wird ein Vorschaubild für das erstellte Video generiert.</translation>
    </message>
    <message>
        <source>Join XBMC .nfo file to rendered file</source>
        <translation>XBMC .nfo Dateien mit erstellten Videos zusammenführen</translation>
    </message>
    <message>
        <source>If this box is checked then a XMBC .nfo file will be created with video.</source>
        <translation>Wenn diese Option aktiv ist, werden die XBMC .nfo Dateien für das erstellte Video generiert.</translation>
    </message>
    <message>
        <source>Frequency</source>
        <translation>Frequenz</translation>
    </message>
    <message>
        <source>Select the default frequency to use for audio during the rendering.</source>
        <translation>Wählen Sie die zu verwendende Abtastrate für die Musik, die bei Videoerstellung verwendet werden soll.</translation>
    </message>
    <message>
        <source>Default soundtrack rendering options</source>
        <translation>Standardeinstellungen für die Musikspuren beim Erstellen von Videos</translation>
    </message>
    <message>
        <source>Other actions</source>
        <translation>weitere Aktionen</translation>
    </message>
    <message>
        <source>At the bottom of the dialog these buttons allow you to:</source>
        <translation>Am unteren Rand des Dialoges sind zwei Knöpfe platziert, die Sie zu folgenden Funktionen führen :</translation>
    </message>
    <message>
        <source> Check configuration allows to open the &lt;a href=&quot;0106.html&quot;&gt;Check configuration dialog&lt;/a&gt;</source>
        <translation>Überprüfen der Konfiguration : ermöglicht Ihnen zum Dialog &lt;a href=&quot;0106.html&quot;&gt;Überprüfe Konfiguration&lt;/a&gt; zu wechseln</translation>
    </message>
    <message>
        <source> Manage device allows to open the &lt;a href=&quot;0102.html&quot;&gt;Manage device dialog&lt;/a&gt;</source>
        <translation>Verwalten Gerätedatenbank : ermöglicht Ihnen zum Dialog &lt;a href=&quot;0102.html&quot;&gt;Verwalten Gerätedatenbank&lt;/a&gt; zu wechseln</translation>
    </message>
    <message>
        <source>Allows to select the style of the shape to applied to the new text blocks. This style defines the shape (rectangle, circle, ...), the border, the opaqueness and the shadow effect applied to the block.</source>
        <translation>Ermöglicht die Auswahl der Formstils des Blocks. Der Stil legt das Aussehen (rechteckig kreisförmig; usw.), die Umrandung, die Deckkraft sowie den Schatten der Form fest.</translation>
    </message>
    <message>
        <source>Defines the quantity of memory used as cache memory by ffDiaporama. This parameter is important because it allows to adapt ffDiaporama to your hardware. </source>
        <translation>Legt die zu verwendente Speichergröße für den Zwischenspeicher von ffDiaporama fest. Dieser Paramter ist wichtig, da er ffDiaporama an Ihre Hardware anpasst.</translation>
    </message>
    <message>
        <source>Media Center Systems</source>
        <translation>Mediacentersysteme</translation>
    </message>
    <message>
        <source>Defines the model use as default thumbnail. Thumbnails are images that are generated along with the videos. These images are used as a poster by most </source>
        <translation>Legt das Modell für das Standardvorschaubild fest. Vorschaubilder werden entlang des Videos erstellt. Die Bilder werden meist wie eine Schautafel verwendet </translation>
    </message>
    <message>
        <source>Defines the default value for the field Author that is often so called Artist by </source>
        <translation>Legt den Standardwert für das Feld Autor - öfter auch Artist genannt bei</translation>
    </message>
    <message>
        <source>Fill with project folder name when project save : The title will take the same name as the folder in which is save the .ffd file</source>
        <translation>Der Projektname wird beim Speichern des Projektes festgelegt : Der Titel erhält den selben Namen wie die .ffd Datei</translation>
    </message>
    <message>
        <source>Network settings</source>
        <translation>Netzwerkeinstellungen</translation>
    </message>
    <message>
        <source>Use a proxy to access the Internet</source>
        <translation>Verwenden eines Proxy für den Zugriff auf das Internet</translation>
    </message>
    <message>
        <source>Check this box if your network requires that you use a proxy.</source>
        <translation>Aktivieren Sie diese Option, wenn Sie einen Proxy für den Internetzugang benötigen.</translation>
    </message>
    <message>
        <source>Proxy address</source>
        <translation>Proxyadresse</translation>
    </message>
    <message>
        <source>Enter address of the proxy host.</source>
        <translation>Geben Sie hier die Adresse des Proxy ein.</translation>
    </message>
    <message>
        <source>Proxy port</source>
        <translation>Proxyport</translation>
    </message>
    <message>
        <source>Enter the port number to access the proxy or nothing to use default port.</source>
        <translation>Geben Sie hier den Port des Proxy für den Internetzugriff ein, oder keinen Port um den Standardwert zu verwenden.</translation>
    </message>
    <message>
        <source>Login</source>
        <translation>Login</translation>
    </message>
    <message>
        <source>Enter the login name to access the proxy or nothing if no login is required.</source>
        <translation>Geben Sie hier den Anmeldennamen für den Proxyzugriff ein, falls eine Anmeldung notwendig ist.</translation>
    </message>
    <message>
        <source>Password</source>
        <translation>Kennwort</translation>
    </message>
    <message>
        <source>Enter the login password to access the proxy or nothing if no login is required.</source>
        <translation>Geben Sie hier das Kennwort für den Proxy ein oder keines, wenn keine Anmeldung notwendig ist.</translation>
    </message>
    <message>
        <source>Distance unit</source>
        <translation>Einheit der Distanz</translation>
    </message>
    <message>
        <source>This option lets you specify the unit to be used for distances.</source>
        <translation>Mit dieser Option können Sie die Einheit für die Distanz festlegen.</translation>
    </message>
    <message>
        <source>Album</source>
        <translation>Album</translation>
    </message>
    <message>
        <source>Defines the default value for the field Album</source>
        <translation>Legt den Standardwert für das Feld Album fest</translation>
    </message>
    <message>
        <source>Default sound level</source>
        <translation>Standardaudiolautstärke</translation>
    </message>
    <message>
        <source>Set the volume level to be achieved by amplification for music and audio tracks when the volume is set to auto</source>
        <translation>Passt die Lautstärke durch Verstärkung der Musik und Audiodateien an, wenn die Lautstärke auf automatisch steht</translation>
    </message>
</context>
<context>
    <name>0102</name>
    <message>
        <source>Manage devices dialog</source>
        <translation>Verwaltung der Gerätedatenbank</translation>
    </message>
    <message>
        <source>The default database (supplied with ffDiaporama). These devices are registered in the global ffDiaporama configuration file.</source>
        <translation>Die Standarddatenbank (ausgeliefert mit ffDiaporama). Die Geräte sind in der globalen ffDiaporama Konfigurationsdatei registriert.</translation>
    </message>
    <message>
        <source>The devices which you modify or add. These are registered in your personal configuration file.</source>
        <translation>Die Geräte, die von Ihnen verändert bzw. hinzugefügt wurden. Diese Geräte sind in Ihrer persönlichen Konfigurationsdatei registriert.</translation>
    </message>
    <message>
        <source>Devices preceded by this icon are defined in the default database.</source>
        <translation>Geräte mit diesem Symbol sind in der Standarddatenbank abgelegt.</translation>
    </message>
    <message>
        <source>Devices preceded by this icon are those that you defined yourself, or those from the default database that you have modified.</source>
        <translation>Geräte mit diesem Symbol wurden von Ihnen hinzugefügt bzw. es sind modifizierte Geräte aus der Standardliste.</translation>
    </message>
    <message>
        <source>Add device: Allows you to create a new device which will be added to the database. </source>
        <translation>Gerät hinzufügen: Ermöglicht das Hinzufügen eines neuen Gerätes in die Datenbank.</translation>
    </message>
    <message>
        <source>The creation of a new device is made in 3 steps: </source>
        <translation>Das Erzeugen eines neuen Geräte geschieht in drei Schritten:</translation>
    </message>
    <message>
        <source>You must first create a device</source>
        <translation>Sie müssen zuerst ein Gerät erstellen</translation>
    </message>
    <message>
        <source>You define the various parameters</source>
        <translation>Legen Sie die Parameter fest</translation>
    </message>
    <message>
        <source>You click the &quot;Apply modifications&quot; button to register the parameters</source>
        <translation>Klicken Sie auf “Änderungen speichern” um die Eingaben in die Datenbank zu speichern</translation>
    </message>
    <message>
        <source>Remove device: Allows you to delete a device. </source>
        <translation>Lösche Gerät: Hiermit löschen Sie das aktuell ausgewählte Gerät.</translation>
    </message>
    <message>
        <source>Note that you can delete only devices which you created - those shown with this icon: </source>
        <translation>Bitte beachten Sie, dass Sie nur selbst erstellte oder modifizierte Geräte mit dem Symbol löschen können: </translation>
    </message>
    <message>
        <source>Reset to default: Cancels the modifications that you made on a device defined in the default ffDiaporama database</source>
        <translation>Zurücksetzen zu den Vorgabewerten des Gerätes. Verwirft alle Änderungen an Standardgeräten und setzt diese auf die Werte des Auslieferungszustandens der Datenbank von ffDiaporama zurück</translation>
    </message>
    <message>
        <source>Remarks:</source>
        <translation>Anmerkung:</translation>
    </message>
    <message>
        <source>Device subtype</source>
        <translation>Geräte Unterkategorie</translation>
    </message>
    <message>
        <source>Allows you to select the category in which the equipment is classified</source>
        <translation>Ermöglicht das Auswählen der Kategorie, in welcher das Gerät einzuordnen ist</translation>
    </message>
    <message>
        <source>Device model</source>
        <translation>Gerätemodell</translation>
    </message>
    <message>
        <source>Enter here the name of the device (free text entry field) and then, enter all the parameters required for rendering videos that are to be associated with the device profile (File format, video Standard, etc.)</source>
        <translation>Geben Sie hier den Namen des Gerätes (freies Textfeld) an und anschliessend geben Sie alle Parameter, die zur Erstellung von Videos notwendig sind (Dateiformat, Videostandard, usw....) ein</translation>
    </message>
    <message>
        <source>The device type zone allows you to select the type of equipment to be shown in the list.</source>
        <translation>Die Gerätetypzone ermöglicht die Auswahl der Typen von Geräten, die in der Liste angezeigt werden.</translation>
    </message>
    <message>
        <source>The list shows the categories and the device types present in the database.</source>
        <translation>Diese Liste zeigt die Kategorien und die Gerätetypen, die aktuell in der Datenbank enthalten sind.</translation>
    </message>
    <message>
        <source>The following buttons allow you to act on the database:</source>
        <translation>Folgende Symbole erlauben es, mit der Datenbank zu arbeiten:</translation>
    </message>
    <message>
        <source>This dialog box allows you to modify the equipment profiles database.</source>
        <translation>In diesem Dialogfenster können Sie die Datenbank für die Geräteprofile verwalten.</translation>
    </message>
    <message>
        <source>The database is actually composed of two parts:</source>
        <translation>Die Datenbank besteht aktuell aus zwei Teilen:</translation>
    </message>
</context>
<context>
    <name>0103</name>
    <message>
        <source>Add or modify a predefined title slide</source>
        <translation>Hinzufügen oder Ändern eines vordefinierten Titels</translation>
    </message>
    <message>
        <source>This dialog allows you to select a model and define chapter information for predefined title slides.</source>
        <translation>In diesem Dialog können Sie das Modell auswählen und Kapitelinformationen für die vordefinierten Titel festlegen.</translation>
    </message>
    <message>
        <source>To understand the differences between &lt;B&gt;&lt;I&gt;Predefined title slides&lt;/I&gt;&lt;/B&gt; and &lt;B&gt;&lt;I&gt;Standard slides&lt;/I&gt;&lt;/B&gt;, see: &lt;a href=&quot;0012.html&quot;&gt;Predefined title slide&lt;/a&gt;</source>
        <translation>Um den Unterschied zwischen &lt;B&gt;&lt;I&gt;vordefinierten Titeln&lt;/I&gt;&lt;/B&gt; und &lt;B&gt;&lt;I&gt;Standard Dias&lt;/I&gt;&lt;/B&gt; zu verstehen, siehe : &lt;a href=&quot;0012.html&quot;&gt;vordefinierte Titel&lt;/a&gt;</translation>
    </message>
    <message>
        <source>At the top of the box, the following two settings allow you to filter the Predefined title slide that are displayed in the selection area.</source>
        <translation>In der oberen Leiste ermöglichen folgende zwei Einstellungen die vordefinierter Titel zu filtern, welche  in derAuswahl angezeigt werden sollen.</translation>
    </message>
    <message>
        <source>Slide type</source>
        <translation>Diatype</translation>
    </message>
    <message>
        <source>You can select between: </source>
        <translation>Sie können wählen zwischen:</translation>
    </message>
    <message>
        <source>Project title</source>
        <translation>Projekttitel</translation>
    </message>
    <message>
        <source>This type of slide is usually used early in the project as the opening credits. </source>
        <translation>Dieser Typ eines Dia wird üblicherweise am Anfang eines Projekts für den Vorspann genutzt.</translation>
    </message>
    <message>
        <source>The texts variables that are used by the models of this slide type are based only on project information. For more information on project information, see: &lt;a href=&quot;0108.html&quot;&gt;Project properties dialog&lt;/a&gt;</source>
        <translation>Die Textvariablen, die für ein Modell dieses Diatyps verwendet werden, basieren auf den Projektinformationen. Für mehr Details über Projektinformationen, siehe: Dialog für &lt;a href=&quot;0108.html&quot;&gt;Projekteigenschaften&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Chapter title</source>
        <translation>Kapiteltitel</translation>
    </message>
    <message>
        <source>This type of slide is usually used several times in the project to mark the beginning of the chapter. </source>
        <translation>Diese Art von Dia wird üblicherweise für den Beginn eines neuen Kapitels verwendet.</translation>
    </message>
    <message>
        <source>The texts variables that are used by the models of this slide type are based on project information and on chapter information.</source>
        <translation>Die Textvariablen, die für ein Modell dieses Diatyps verwendet werden, basieren auf den Projekt- sowie auf den Kapitelinformationen.</translation>
    </message>
    <message>
        <source>Credit title</source>
        <translation>Titel für die Namensnennung</translation>
    </message>
    <message>
        <source>This type of slide is usually used at the end of the project as the end credits. </source>
        <translation>Diese Art von Titel wird üblicherweise am Ende eines Projekts als Abspann verwendet.</translation>
    </message>
    <message>
        <source>The texts variables that are used by the models of this slide type are generally computed. For more information on texts variables, see: &lt;a href=&quot;0013.html&quot;&gt;Dynamic variables&lt;/a&gt;</source>
        <translation>Die Textvariablen, die für ein Modell dieses Diatyps verwendet werden, werden generell berechnet. Für mehr Informationen von Textvariablen, siehe :&lt;a href=&quot;0013.html&quot;&gt;Dynamische Variablen&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Category</source>
        <translation>Kategorie</translation>
    </message>
    <message>
        <source>Statics models</source>
        <translation>Statische Modelle</translation>
    </message>
    <message>
        <source>This type lists statics models ie without animations.</source>
        <translation>Diese Art zeigt statische Modelle ohne Animationen.</translation>
    </message>
    <message>
        <source>Animated models</source>
        <translation>Animierte Modelle</translation>
    </message>
    <message>
        <source>This type lists animated models ie with several shots.</source>
        <translation>Diese Art zeigt animierte Modelle mit mehreren Aufnahmen.</translation>
    </message>
    <message>
        <source>Custom models</source>
        <translation>Benutzerdefinierte Modelle</translation>
    </message>
    <message>
        <source>This type lists the templates that you saved with the &lt;B&gt;&lt;I&gt;Save as model&lt;/I&gt;&lt;/B&gt; function of the &lt;a href=&quot;0119.html&quot;&gt;Slide properties&lt;/a&gt; dialog box.</source>
        <translation>Diese Art zeigt die Vorlagen, die Sie mittels &lt;B&gt;&lt;I&gt;Speichern als Modell&lt;/I&gt;&lt;/B&gt; im Dialog &lt;a href=&quot;0119.html&quot;&gt;Eigenschaften Aufnahmen&lt;/a&gt; gespeichert haben.</translation>
    </message>
    <message>
        <source> The selection area display models corresponding to the current Type and Category you previously selected.</source>
        <translation> Der Auswahlbereich für Displaymodelle entsprechen dem aktuellem Typ und der Kategorie die sie vorher ausgewählt hatten.</translation>
    </message>
    <message>
        <source>The models are displayed and played, so you can see the slide as it will appear in your project with the content of dynamic variables.</source>
        <translation>Die Modelle werden angezeigt und abgespielt. Somit können Sie sehen, wie das Dia mit dem Inhalt der dynamischen Variablen in Ihr Proejtk eingefügt wird.</translation>
    </message>
    <message>
        <source>The slide duration is displayed on the bottom of each thumbnails model.</source>
        <translation>Die Dauer des Dias wird im unteren Bereich jedes Vorschaubildes des Modells angezeigt.</translation>
    </message>
    <message>
        <source>When your selection of model is made, the following settings are available if slide type is &lt;B&gt;&lt;I&gt;Chapter model&lt;/I&gt;&lt;/B&gt;:</source>
        <translation>Wenn Ihre Auswahl des Modells abgeschlossen ist, werden folgende Einstellungen sichtbar, wenn das Dia vom Typ &lt;B&gt;&lt;I&gt;Kapitelmodell&lt;/I&gt;&lt;/B&gt; ist:</translation>
    </message>
    <message>
        <source>Chapter name</source>
        <translation>Kapitelname</translation>
    </message>
    <message>
        <source>Enter here the name of the chapter.</source>
        <translation>Geben Sie hier den Namen für das Kapitel an.</translation>
    </message>
    <message>
        <source>Chapter date different from project date</source>
        <translation>Kapiteldatum, wenn es sich vom Projektdatum unterscheidet</translation>
    </message>
    <message>
        <source>If this box is checked, the date of the chapter is different from the date of the project. </source>
        <translation>Wenn diese Option aktiv ist, ist das Datum für das Kapitel und das Datum des Projekts unterschiedlich.</translation>
    </message>
    <message>
        <source>Remark: It is often useful to differentiate the date of the chapter of the date of the project. </source>
        <translation>Anmerkung: Es ist oft sinnvol,l das Kapiteldatum unterschiedlich zum Projektdatum zu machen.</translation>
    </message>
    <message>
        <source>Event date</source>
        <translation>Datum des Ereignisses</translation>
    </message>
    <message>
        <source>Select a date for the chapter. </source>
        <translation>Wählen Sie ein Datum für das Kapitel.</translation>
    </message>
    <message>
        <source>Remark: This field is enabled only if the &lt;I&gt;&lt;B&gt;Chapter date different from project date&lt;/B&gt;&lt;/I&gt; check box is checked.</source>
        <translation>Anmerkung: Dieses Feld ist nur aktiv, wenn die Option &lt;I&gt;&lt;B&gt;Kapiteldatum ist unterschiedich zum Projektdatum&lt;/B&gt;&lt;/I&gt; selektiert  ist.</translation>
    </message>
    <message>
        <source>Override date</source>
        <translation>Datum überschreiben</translation>
    </message>
    <message>
        <source>Check this box to override the date and offer you to enter the date as a free multi-line text. </source>
        <translation>Wählen Sie diese Option, um das Datum zu überschreiben und zu ermöglichen, das Datum als freien mehrzeiligem Text einzugeben.</translation>
    </message>
    <message>
        <source>Under these settings, the following two buttons allow you:</source>
        <translation>Unter diesen Einstellungen erscheinen folgende zwei Symbole:</translation>
    </message>
    <message>
        <source> Project properties</source>
        <translation> Projekteigenschaften</translation>
    </message>
    <message>
        <source>This button allows you to open &lt;a href=&quot;0108.html&quot;&gt;Project properties dialog&lt;/a&gt;.</source>
        <translation>Dieser Knopf öffnet den Dialog &lt;a href=&quot;0108.html&quot;&gt;Projekteigenschaften&lt;/a&gt;.</translation>
    </message>
    <message>
        <source> Convert to standard slide</source>
        <translation> Konvertieren zu Standard Dia</translation>
    </message>
    <message>
        <source>This button allows you to convert this slide to a standard slide which are fully customizable.</source>
        <translation>Dieser Knopf konvertiert dieses Dia in ein Standard Dia, das völlig anpassbar ist.</translation>
    </message>
    <message>
        <source>For example, if the project is &lt;U&gt;My vacation from 1 to 15&lt;/U&gt;, the chapter may be limited to the &lt;U&gt;3&lt;/U&gt;.</source>
        <translatorcomment>Beispiel versteh ich nicht ....</translatorcomment>
        <translation>Zum Beispiel, wenn das Projekt heißt &lt;U&gt;Mein Urlaub von 1 bis 15&lt;/U&gt;, das Kapitel wird limitiert auf &lt;U&gt;3&lt;/U&gt;.</translation>
    </message>
    <message>
        <source>Chapter location different from project location</source>
        <translation>Kapitelort unterschiedlich zum Projektort</translation>
    </message>
    <message>
        <source>If this box is checked, the location of the chapter is different from the location of the project. </source>
        <translation>Ist diese Option aktiv, so ist der Ort des Kapitels unterschiedich zum Ort des Projektes.</translation>
    </message>
    <message>
        <source>Remark: It is often useful to differentiate the location of the chapter of the location of the project. </source>
        <translation>Anmerkung: Es ist des öfteren sinnvoll, den Ort des Kaptitels gegenüber dem Ort des Projektes zu verändern.</translation>
    </message>
    <message>
        <source>For example, if the project location is &lt;U&gt;where I rented for the holidays&lt;/U&gt;, the chapter location may be &lt;U&gt;where I went on tour&lt;/U&gt;.</source>
        <translation>zum Beispiel: Wenn der Projektort &lt;U&gt;Wo ich für den Urlaub eingemietet&lt;/U&gt; war, könnte der Kapitelort &lt;U&gt;hier war meine Tour&lt;/U&gt; sein.</translation>
    </message>
    <message>
        <source>Event location</source>
        <translation>Ereignissort </translation>
    </message>
    <message>
        <source>The location where the chapter&apos;s event took place</source>
        <translation>Der Ort wo das Ereignis im Kapitel stattfand</translation>
    </message>
    <message>
        <source>Click on this </source>
        <translation>Klicken Sie diesen</translation>
    </message>
    <message>
        <source> button to select a location from the &lt;a href=&quot;0123.html&quot;&gt;Add or modify a location&lt;/a&gt; dialog or using a favorite</source>
        <translation> Knopf um einen Ort aus dem Dialog &lt;a href=&quot;0123.html&quot;&gt;Hinzufügen oder Ändern eines Ortes&lt;/a&gt; oder von einem Favoriten zu wählen</translation>
    </message>
    <message>
        <source> button to remove actual location (set to empty)</source>
        <translation> Knopf um den aktuelle Ort zu löschen (auf leer setzen)</translation>
    </message>
    <message>
        <source>Remark: These fields and buttons are enabled only if the &lt;I&gt;&lt;B&gt;Chapter location different from project location&lt;/B&gt;&lt;/I&gt; check box is checked.</source>
        <translation>Anmerkung: Diese Felder und Knöpfe sind nur aktiv, wenn die Option &lt;I&gt;&lt;B&gt;Kapitelort unterschiedlich zum Projektort&lt;/B&gt;&lt;/I&gt; aktiv ist.</translation>
    </message>
</context>
<context>
    <name>0104</name>
    <message>
        <source>Background properties</source>
        <translation>Hintergrundeigenschaften</translation>
    </message>
    <message>
        <source>The &quot;Background properties&quot; dialog allows you to define settings for the background of the slide.</source>
        <translation>Das Fenster “Einstellungen Hintergrund” ermöglicht die Einstellungen des Hintergrundes des Dias.</translation>
    </message>
    <message>
        <source>Same background as preceding object.</source>
        <translation>Selber Hintergrund wie das vorherige Objekt.</translation>
    </message>
    <message>
        <source> If this option is selected, the slide will have no background definition  but will use the same background as the previous slide: </source>
        <translation>Ist diese Option gewählt, erhält das Dia die selben Hintergrundeigenschaften, wie das Dia unmittelbar davor:</translation>
    </message>
    <message>
        <source>If the previous slide does not have a background definition either, the check continues backwards until a slide is found which does have a background definition.</source>
        <translation>Hat das Dia davor keine eigenen Hintergrundeigenschaften, wird solange in den Dias davor gesucht, bis ein Dia gefunden wurde, das eigene Hintergrundeigenschaften hat.</translation>
    </message>
    <message>
        <source>If no previous slide has a background definition, then a black frame will be used.</source>
        <translation>Hat keines der vorangegangenen Dias einen Hintergrund definiert, wird ein schwarzer Hintergrund verwendet.</translation>
    </message>
    <message>
        <source>Select a new background</source>
        <translation>Neuer Hintergrund</translation>
    </message>
    <message>
        <source> If this option is selected, the slide will have its own background definition. In that case, the following zones set properties for the background. </source>
        <translation>Ist diese Option gewählt, erhält das Dia einen eigenen Hintergrund. Es zeigen sich folgende Eigenschaften des Hintergrunds, die nach Ihren Bedürfnissen eingestellt werden können.</translation>
    </message>
    <message>
        <source>Solid brush</source>
        <translation>Einfarbig</translation>
    </message>
    <message>
        <source>Selects a plain color.</source>
        <translation>Für die Auswahl einer einzigen Hintergrundfarbe.</translation>
    </message>
    <message>
        <source>Gradient 2 colors</source>
        <translation>Farbverlauf aus zwei Farben</translation>
    </message>
    <message>
        <source>Selects a gradient of 2 colors</source>
        <translation>Es stehen zwei Farben zur Auswahl, die einen Farbverlauf bilden</translation>
    </message>
    <message>
        <source>Gradient 3 colors</source>
        <translation>Farbverlauf aus drei Farben</translation>
    </message>
    <message>
        <source>Selects a gradient of 3 colors</source>
        <translation>Es stehen drei Farben zur Auswahl, die einen Farbverlauf bilden</translation>
    </message>
    <message>
        <source>Image from library</source>
        <translation>Bild aus Bibliothek</translation>
    </message>
    <message>
        <source>Selects a background image from the library </source>
        <translation>Es besteht die Möglichkeit aus der Hintergrundbibliothek ein geeignetes Bild auszuwählen</translation>
    </message>
    <message>
        <source>Remark: By default, the library contains a dozen of background screens. </source>
        <translation>Anmerkung: Standardmässig enthält die Bibliothek dutzende Hintergrundbilder.</translation>
    </message>
    <message>
        <source>You can get additionals backgrounds installing the &lt;B&gt;&lt;U&gt;Texturemate&lt;/U&gt;&lt;/B&gt; extension from this page </source>
        <translation>Sie erhalten zusätzliche Hintergründe, wenn Sie die Erweiterung &lt;B&gt;&lt;U&gt;Texturemate&lt;/U&gt;&lt;/B&gt; von dieser Seite installieren </translation>
    </message>
    <message>
        <source>Download extensions</source>
        <translation>Erweiterung herunterladen</translation>
    </message>
    <message>
        <source>Image disk</source>
        <translation>Disk mit Bildern</translation>
    </message>
    <message>
        <source>Allows you to select a photo or an image. </source>
        <translation>Sie können ein Foto oder Bild auswählen.</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Datei</translation>
    </message>
    <message>
        <source>Indicates the name of the current file</source>
        <translation>Zeigt den Namen der aktuellen Datei</translation>
    </message>
    <message>
        <source>Allow you to selects an image file</source>
        <translation>Hier können Sie eine Bilddatei auswählen</translation>
    </message>
    <message>
        <source>Keep aspect ratio</source>
        <translation>Behalte das Seitenverhältnis</translation>
    </message>
    <message>
        <source>If this box is checked, then the image will not be deformed, and: </source>
        <translation>Wenn diese Option aktiv ist, dann wird das Bild nicht deformiert und: </translation>
    </message>
    <message>
        <source> Open the &lt;a href=&quot;0110.html&quot;&gt;Image framing and correction dialog&lt;/a&gt; to regulate framing and image corrections </source>
        <translation> Öffnen Sie den Dialog &lt;a href=&quot;0110.html&quot;&gt;Bildbeschneidung und Korrektur&lt;/a&gt;, um Beschnitt und Bildkorrektur zu bestimmen</translation>
    </message>
    <message>
        <source>Full filling</source>
        <translation>Vollbild</translation>
    </message>
    <message>
        <source>Allows the image to fill the whole screen with image deformation as needed.</source>
        <translation>Das Bild wird vollbildfüllend mit der Deformierung die dafür notwendig ist, am Bildschirm angezeigt.</translation>
    </message>
</context>
<context>
    <name>0105</name>
    <message>
        <source>Chapter properties</source>
        <translation>Kapiteleigenschaften</translation>
    </message>
    <message>
        <source> All slides have information chaptering so each slide can mark the beginning of a new chapter. </source>
        <translation> Alle Dias haben die Möglichkeit, Kapitelinformationen zu speichern. Somit kann jedes Dia als Start eines neuen Kapitels gewählt werden.</translation>
    </message>
    <message>
        <source>Remarks:</source>
        <translation>Anmerkung:</translation>
    </message>
    <message>
        <source>Except for the first chapter which start at 0, all other chapters begin after the entering transition.</source>
        <translation>Ausgenommen das erste Kapitel das mit 0 startet, alle anderen Kapitel beginnen nach dem Anfangsübergang.</translation>
    </message>
    <message>
        <source>The 1st slide of the mount always mark the beginning of a new chapter.</source>
        <translation>Das erste Dia auf der Zeitleiste markiert immer den Beginn eines neuen Kapitels.</translation>
    </message>
    <message>
        <source>Start a new chapter with this slide</source>
        <translation>Starte ein neues Kapitel mit diesem Dia</translation>
    </message>
    <message>
        <source>If this box is checked, the slide will mark the beginning of a new chapter. </source>
        <translation>Wenn diese Option aktiv ist, wird dieses Dia als Beginn eines neuen Kapitels markiert.</translation>
    </message>
    <message>
        <source>Chapter name</source>
        <translation>Kapitelname</translation>
    </message>
    <message>
        <source>Enter here the name of the chapter.</source>
        <translation>Geben Sie hier den Namen des Kapitels ein.</translation>
    </message>
    <message>
        <source>Chapter date different from project date</source>
        <translation>Kapiteldatum, wenn es sich vom Projektdatum unterscheidet</translation>
    </message>
    <message>
        <source>If this box is checked, the date of the chapter is different from the date of the project. </source>
        <translation>Wenn diese Option aktiv ist, unterscheidet sich das Datum für das Kapitel vom Datum des Projekts.</translation>
    </message>
    <message>
        <source>Remark: It is often useful to differentiate the date of the chapter of the date of the project. </source>
        <translation>Anmerkung: Es ist oft sinnvoll, das Kapiteldatum unterschiedlich zum Projektdatum zu machen.</translation>
    </message>
    <message>
        <source>Event date</source>
        <translation>Datum des Ereignisses</translation>
    </message>
    <message>
        <source>Select a date for the chapter. </source>
        <translation>Wählen Sie ein Datum für das Kapitel.</translation>
    </message>
    <message>
        <source>Remark: This field is enabled only if the &lt;I&gt;&lt;B&gt;Chapter date different from project date&lt;/B&gt;&lt;/I&gt; check box is checked.</source>
        <translation>Anmerkung: Dieses Feld ist nur aktiv wenn die Option &lt;I&gt;&lt;B&gt;Kapiteldatum ist unterschiedich zum Projektdatum&lt;/B&gt;&lt;/I&gt; selektiert ist.</translation>
    </message>
    <message>
        <source>Check this box to override the date and offer you to enter the date as a free multi-line text. </source>
        <translation>Wählen Sie diese Option, um das Datum zu überschreiben und ein Datum als freien mehrzeiligen Text einzugeben.</translation>
    </message>
    <message>
        <source>Remark: This box cannot be deactivated for the first slide of the project.</source>
        <translation>Anmerkung: Diese Option kann für das erste Dia des Projektes nicht deaktiviert werden.</translation>
    </message>
    <message>
        <source>Override date</source>
        <translation>Datum überschreiben</translation>
    </message>
    <message>
        <source>This dialog allows you to define settings for the chapter information of the slide:</source>
        <translation>In diesem Dialog können Sie die Einstellungen für die Kapitelinformationen des Dia festlegen:</translation>
    </message>
    <message>
        <source>For example, if the project is &lt;U&gt;My vacation from 1 to 15&lt;/U&gt;, the chapter may be limited to the &lt;U&gt;3&lt;/U&gt;.</source>
        <translation>Zum Beispiel, wenn das Projekt heißt &lt;U&gt;Mein Urlaub von 1 bis 15&lt;/U&gt;, könnte das Kapiteld auf &lt;U&gt;3&lt;/U&gt; limitiert sein.</translation>
    </message>
    <message>
        <source>Chapter location different from project location</source>
        <translation>Kapitelort unterschiedlich zum Projektort</translation>
    </message>
    <message>
        <source>If this box is checked, the location of the chapter is different from the location of the project. </source>
        <translation>Ist diese Option aktiv, so ist der Ort des Kapitels unterschiedich zum Ort des Projektes.</translation>
    </message>
    <message>
        <source>Remark: It is often useful to differentiate the location of the chapter of the location of the project. </source>
        <translation>Anmerkung: Es ist des öfteren sinnvoll, den Ort des Kaptitels gegenüber dem Ort des Projektes zu verändern.</translation>
    </message>
    <message>
        <source>For example, if the project location is &lt;U&gt;where I rented for the holidays&lt;/U&gt;, the chapter location may be &lt;U&gt;where I went on tour&lt;/U&gt;.</source>
        <translation>zum Beispiel: Wenn der Projektort &lt;U&gt;Wo ich für den Urlaub eingemietet war&lt;/U&gt;, könnte der Kapitelort &lt;U&gt;hier war meine Tour&lt;/U&gt; sein.</translation>
    </message>
    <message>
        <source>Event location</source>
        <translation>Ereignissort </translation>
    </message>
    <message>
        <source>The location where the chapter&apos;s event took place</source>
        <translation>Der Ort wo das Ereignis im Kapitel stattfand</translation>
    </message>
    <message>
        <source>Click on this </source>
        <translation>Klicken Sie diesen</translation>
    </message>
    <message>
        <source> button to select a location from the &lt;a href=&quot;0123.html&quot;&gt;Add or modify a location&lt;/a&gt; dialog or using a favorite</source>
        <translation> Knopf, um einen Ort aus dem Dialog &lt;a href=&quot;0123.html&quot;&gt;Hinzufügen oder Ändern eines Ortes&lt;/a&gt; oder von einem Favoriten zu wählen</translation>
    </message>
    <message>
        <source> button to remove actual location (set to empty)</source>
        <translation> Knopf um den aktuelle Ort zu löschen (auf leer setzen)</translation>
    </message>
    <message>
        <source>Remark: These fields and buttons are enabled only if the &lt;I&gt;&lt;B&gt;Chapter location different from project location&lt;/B&gt;&lt;/I&gt; check box is checked.</source>
        <translation>Anmerkung: Diese Felder und Knöpfe sind nur akiv, wenn die Option &lt;I&gt;&lt;B&gt;Kapitelort unterschiedlich zum Projektort&lt;/B&gt;&lt;/I&gt; aktiv ist.</translation>
    </message>
</context>
<context>
    <name>0106</name>
    <message>
        <source>Check configuration</source>
        <translation>Konfiguration überprüfen</translation>
    </message>
    <message>
        <source>This dialog allows to check external tools configuration and libraries used by ffDiaporama.</source>
        <translation>Dieser Dialog prüft die externen Werkzeuge, die für ffDiaporama benutzt werden und deren Einstellungen.</translation>
    </message>
    <message>
        <source>It is especially useful for the Linux users and for those who compiles the application.</source>
        <translation>Dies ist für Linuxbenutzer, die Ihre Bibliotheken selbst erstellen, sehr hilfreich.</translation>
    </message>
    <message>
        <source>The most common shown errors concern the supported formats, codec and library versions.</source>
        <translation>Die meisten allgemeinen Fehler betreffen die unterstützten Formate und Bibliotheksversionen.</translation>
    </message>
    <message>
        <source>To solve the problems you will have to install additional packages on your computer and may be to make ffDiaporama from source and verify again the configuration.</source>
        <translation>Um Probleme mit den zusätzlichen Paketen zu beheben, ist es evtl. nötig, weitere/fehlende Pakete einzurichten; und/oder die Quellen von ffDiaporama zu kompilieren und die Konfiguration erneut zu überprüfen.</translation>
    </message>
</context>
<context>
    <name>0107</name>
    <message>
        <source>Export project</source>
        <translation>Projekt exportieren</translation>
    </message>
    <message>
        <source>This dialog box allows you to export the project and all ressources used by the project to a folder</source>
        <translation>Dieser Dialog exportiert Ihr aktuelles Projekt und alle dazu benötigten Elemente in einen Ordner</translation>
    </message>
    <message>
        <source>Destination folder</source>
        <translation>Zielordner</translation>
    </message>
    <message>
        <source>Allows you to select the base destination folder. Click on the folder button to open the directory selector.</source>
        <translation>Hier können Sie den Basisordner für das Ziel wählen. Klicken Sie auf den Ordnerknopf um die Ordnerwahl zu starten.</translation>
    </message>
    <message>
        <source>Project subfolder</source>
        <translation>Projekt Unterordner</translation>
    </message>
    <message>
        <source> Once completed your selections, click the OK button to start the export. </source>
        <translation> Ist Ihre Auswahl komplett, klicken Sie auf den OK-Knopf um den Export zu starten.</translation>
    </message>
    <message>
        <source>At any time during this process, you can click the cancel button to stop the export. </source>
        <translation>Zu jedem Zeitpunkt während des Exportes, können Sie diesen abbrechen, indem Sie den Abbruchknopf drücken.</translation>
    </message>
    <message>
        <source>Remarks:</source>
        <translation>Anmerkung:</translation>
    </message>
    <message>
        <source>The export takes into account all the resources that compose the project:</source>
        <translation>Der Export berücksichtigt alle Elemente, die zum Projekt gehören:</translation>
    </message>
    <message>
        <source>Images</source>
        <translation>Bilder/Fotos</translation>
    </message>
    <message>
        <source>Videos</source>
        <translation>Videos</translation>
    </message>
    <message>
        <source>Music</source>
        <translation>Musikstücke</translation>
    </message>
    <message>
        <source>Thumbnail elements</source>
        <translation>Vorschauelemente</translation>
    </message>
    <message>
        <source>Wallpapers</source>
        <translation>Hintergrründe</translation>
    </message>
    <message>
        <source>clipart that are not stored under the ClipArt alias.</source>
        <translation>Cliparts, die nicht unter dem Clipart Alias gespeichert sind.</translation>
    </message>
    <message>
        <source>Export does not just only copy the files. The following rules apply:</source>
        <translation>Der Export kopiert allerdings nicht einfach nur Dateien. Folgende Regeln werden berücksichtigt:</translation>
    </message>
    <message>
        <source>If multiple files from different directories have the same names, these files are re-named.</source>
        <translation>Wenn Dateien in unterschiedlichen Verzeichnissen gleiche Namen haben sollten, werden diese automatisch umbenannt.</translation>
    </message>
    <message>
        <source>A .ffd project file is created taking into account any changes in directory and file name.</source>
        <translation>Eine .ffd Projekt-Datei wird erzeugt, welche alle Änderungen von Verzeichnis- oder Dateinamen enthält.</translation>
    </message>
    <message>
        <source>Allows you to select the folder name to be created for the project files. By default the project title is proposed.</source>
        <translation>Ermöglicht das Wählen des Ordnernamens, der für die Projektdatei verwendet wird. Standardmässig wird der Projekttitel verwendet.</translation>
    </message>
</context>
<context>
    <name>0108</name>
    <message>
        <source>Project properties</source>
        <translation>Projekteigenschaften</translation>
    </message>
    <message>
        <source>This information will then be registered in the form of TAGs in the rendered video files. </source>
        <translation>Diese Informationen werden in Form von TAGs im erstellten Video registriert.</translation>
    </message>
    <message>
        <source>Remarks:</source>
        <translation>Anmerkung:</translation>
    </message>
    <message>
        <source>Settable fields</source>
        <translation>Vorgebbare Felder</translation>
    </message>
    <message>
        <source>Fields</source>
        <translation>Felder</translation>
    </message>
    <message>
        <source>Remark</source>
        <translation>Anmerkung</translation>
    </message>
    <message>
        <source>Project geometry</source>
        <translation>Projektgeometrie</translation>
    </message>
    <message>
        <source>This field allows you to select the geometry to be used for the project. </source>
        <translation>In diesem Feld wird die Geometrie des Projektes ausgewählt und festgelegt.</translation>
    </message>
    <message>
        <source>Title</source>
        <translation>Titel</translation>
    </message>
    <message>
        <source>Author</source>
        <translation>Autor</translation>
    </message>
    <message>
        <source>Album</source>
        <translation>Album</translation>
    </message>
    <message>
        <source>Language</source>
        <translation>Sprache</translation>
    </message>
    <message>
        <source>Comment</source>
        <translation>Kommentar</translation>
    </message>
    <message>
        <source>A free comment which can spread out on several lines. </source>
        <translation>Ein freier Kommentar, welcher über mehrere Zeilen gehen kann.</translation>
    </message>
    <message>
        <source>Some fields are automatically filled and do not appear in this dialog: </source>
        <translation>Manche Felder werden automatisch befüllt und werden hier nicht angezeigt:</translation>
    </message>
    <message>
        <source>Timestamp</source>
        <translation>Zeitstempel</translation>
    </message>
    <message>
        <source>Date and time of generation of the video.</source>
        <translation>Datum und Zeit zu der das Video erstellt wurde.</translation>
    </message>
    <message>
        <source>Composer</source>
        <translation>Erstellungsversion</translation>
    </message>
    <message>
        <source>Contains the version of ffDiaporama with which the video was produced.</source>
        <translation>Enthält die Version von ffDiaporama, mit welcher das erstellte Video gemacht wurde.</translation>
    </message>
    <message>
        <source>Encoder</source>
        <translation>Kodiererr</translation>
    </message>
    <message>
        <source>Contains the version of libavformat (ffmpeg) with which the video was produced.</source>
        <translation>Enthält die Version von libavformat (ffmepg), mit welcher das Video erstellt wurde.</translation>
    </message>
    <message>
        <source>Chapters</source>
        <translation>Kapitel</translation>
    </message>
    <message>
        <source>The following fields appear: </source>
        <translation>Folgende Felder werden angezeigt:</translation>
    </message>
    <message>
        <source>Chapter number</source>
        <translation>Kapitelnummer</translation>
    </message>
    <message>
        <source>Slide</source>
        <translation>Dia</translation>
    </message>
    <message>
        <source>Slide number in wich chapter is defined</source>
        <translation>Nummer des Dias, in dem das Kapitel startet und festgelegt ist</translation>
    </message>
    <message>
        <source>Chapter title</source>
        <translation>Kapiteltitel</translation>
    </message>
    <message>
        <source>Start</source>
        <translation>Start</translation>
    </message>
    <message>
        <source>Chapter start position</source>
        <translation>Kapitelstartposition</translation>
    </message>
    <message>
        <source>End</source>
        <translation>Ende</translation>
    </message>
    <message>
        <source>Chapter end position</source>
        <translation>Kapitelendposition</translation>
    </message>
    <message>
        <source>Duration</source>
        <translation>Laufzeit</translation>
    </message>
    <message>
        <source>Chapter duration</source>
        <translation>Kapitellaufzeit</translation>
    </message>
    <message>
        <source>Format</source>
        <translation>Format</translation>
    </message>
    <message>
        <source>3GP/MP4/MKV</source>
        <translation>3GP/MP4/MKV</translation>
    </message>
    <message>
        <source>Full support</source>
        <translation>Voller Support</translation>
    </message>
    <message>
        <source>AVI/MPG/FLV/OGV/WEBM</source>
        <translation>AVI/MPG/FLV/OGV/WEBM</translation>
    </message>
    <message>
        <source>No support</source>
        <translation>Kein Support</translation>
    </message>
    <message>
        <source>Options for speed waves</source>
        <translation>Optionen für die Anstiegskurve</translation>
    </message>
    <message>
        <source>Transition</source>
        <translation>Übergang</translation>
    </message>
    <message>
        <source>Defined default speed curve for transitions</source>
        <translation>Legt die Standardanstiegskurve für den Übergang fest</translation>
    </message>
    <message>
        <source>Block animations</source>
        <translation>Blockanimation</translation>
    </message>
    <message>
        <source>Defined default speed curve for block animations</source>
        <translation>Definiert die Standardanstiegskurve für Blockanimationen</translation>
    </message>
    <message>
        <source>Image animations</source>
        <translation>Bildanimationen</translation>
    </message>
    <message>
        <source>Defined default speed curve for image animations</source>
        <translation>Definiert die Standardanstiegskurve für Bldanimationen</translation>
    </message>
    <message>
        <source>See also</source>
        <translation>Siehe auch</translation>
    </message>
    <message>
        <source>TAG in ffmpeg</source>
        <translation>TAG in ffmpeg</translation>
    </message>
    <message>
        <source>Standard ID3v2</source>
        <translation>Standard ID3v2</translation>
    </message>
    <message>
        <source>Standard MPEG-7 on the descriptors of multimedia contents</source>
        <translation>Standard MPEG-7 nach der Beschreibung von Multimediainhalten</translation>
    </message>
    <message>
        <source>The properties of the project are a partial implementation of the </source>
        <translation>Die Eigenschaften des Projektes sind eine teilweise Implementierung von</translation>
    </message>
    <message>
        <source>MPEG-7</source>
        <translation>MPEG-7</translation>
    </message>
    <message>
        <source> standard on the descriptors of multimedia contents.</source>
        <translation> Standard nach der Beschreibung von Multimediainhalten.</translation>
    </message>
    <message>
        <source>These properties are written into the video files during the rendering and can be exploited by indexing systems (collection managers) or by </source>
        <translation>Diese Eigenschaften werden in die Videodatei während der Erstellung eingearbeitet und können von Indexingsystemen oder von </translation>
    </message>
    <message>
        <source>Media Center Systems</source>
        <translation>Mediacentersystemen genutzt werden</translation>
    </message>
    <message>
        <source>Remark:</source>
        <translation>Anmerkung:</translation>
    </message>
    <message>
        <source>This field is only editable when the dialog box is used for creating a new project. Subsequently, it is not possible to change this value.</source>
        <translation>Dieses Feld ist nur innerhalb des Dialoges &quot;Erstellen eines neuen Projektes&quot; veränderbar. Nachträglich ist dieses Feld nicht mehr änderbar. </translation>
    </message>
    <message>
        <source>The title of the project </source>
        <translation>Der Titel des Projektes</translation>
    </message>
    <message>
        <source>If the id3v2 compatibility option is set in &lt;a href=&quot;0101.html&quot;&gt;option dialog&lt;/a&gt;, this fields is limited to 30 characters</source>
        <translation>Wenn die Option id3v2-Kompatibiltät im Dialog &lt;a href=&quot;0101.html&quot;&gt; angewählt ist, ist dieses Feld auf 30 Zeichen beschränkt</translation>
    </message>
    <message>
        <source>Event date</source>
        <translation>Datum des Ereignisses</translation>
    </message>
    <message>
        <source>The date of the event of the project</source>
        <translation>Das Datum des Ereignisses für dieses Projekt</translation>
    </message>
    <message>
        <source>Override date</source>
        <translation>Datum überschreiben</translation>
    </message>
    <message>
        <source>Check this box to override the date and offer you to enter the date as a free multi-line text</source>
        <translation>Wählen Sie diese Option um das Datum zu überschreiben und zu ermöglichen ein Datum als freien mehrzeiligen Text einzugeben</translation>
    </message>
    <message>
        <source>The name of the author of the project. </source>
        <translation>Der Name des Autors für dieses Projekt.</translation>
    </message>
    <message>
        <source>This field is often shown by indexing system and </source>
        <translation>Dieses Feld wird des des öfteren in Indexsystemen und </translation>
    </message>
    <message>
        <source> under the term Artist.</source>
        <translation> unter dem Begriff Artist angezeigt.</translation>
    </message>
    <message>
        <source>The album of the project </source>
        <translation>Das Album des Projekts </translation>
    </message>
    <message>
        <source>ISO 639</source>
        <translation>ISO 639</translation>
    </message>
    <message>
        <source>Numerous indexing systems or </source>
        <translation>Viele Indexierungssysteme oder </translation>
    </message>
    <message>
        <source>For more compatibility with indexing systems and </source>
        <translation>Für mehr Kompatibilität mit Indexingsystemen und </translation>
    </message>
    <message>
        <source>, ffDiaporama does not include the whole video TAGs but is closer rather to the standard id3v2 than is the most used by these systems today. Furthermore, the video formats do not support every TAG in the same way.</source>
        <translation>, ffDiaporama enthält nicht alle Video-TAGs, aber ist näher dem id3V2-Standard, da viele andere Systeme diesen Standard heutzutage eher verwenden. Abgesehen davon verwenden viele Videoformate die TAGs unterschiedlich.</translation>
    </message>
    <message>
        <source> Chapters defined in the project are listed for consultation. (To modify chapters use Chapter button in &lt;a href=&quot;0119.html&quot;&gt;modify slide dialog&lt;/a&gt;.) </source>
        <translation> Kapitel, die in diesem Projekt vorhanden sind, werden aufgelistet. (Um die Kapitel zu verändern, verwenden Sie den Kapitelknopf im Dialog &lt;a href=&quot;0119.html&quot;&gt;Dia ändern&lt;/a&gt;.) </translation>
    </message>
    <message>
        <source>Thumbnail</source>
        <translation>Vorschaubild</translation>
    </message>
    <message>
        <source>Create a new model from this thumbnail or edit custom thumbnail. Opens the &lt;a href=&quot;0117.html&quot;&gt;Edit thumbnail dialog&lt;/a&gt;.</source>
        <translation>Erstellen eines neuen Modells von diesem Vorschaubild oder Ändern dieses Vorschaubilds. Öffnet den Dialog &lt;a href=&quot;0117.html&quot;&gt;Vorschaubild ändern&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Customize the thumbnail only for this project (without creating a new thumbnail model). Opens the &lt;a href=&quot;0117.html&quot;&gt;Edit thumbnail dialog&lt;/a&gt;.</source>
        <translation>Anpassen des Vorschaubildes nur für dieses Projekt (ohne ein neues Modell für Vorschaubilder zu erstellen). Öffnet den Dialog &lt;a href=&quot;0117.html&quot;&gt;Vorschaubild ändern&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Expor thumbnail to a jpeg file. By default, the proposed file name is &quot;folder.jpg&quot;. ffDiaporama and many </source>
        <translation>Exportiere dieses Vorschaubild zu einer JPEG-Datei. Standardmässig wird als Dateiname &quot;Ordner.jpg&quot; angeboten. ffDiaporama und viele </translation>
    </message>
    <message>
        <source> recognize this file as the icon to be used for the directory that contains it.</source>
        <translation> akzeptieren diese Datei als Symbol, das für den Ordner zu verwenden ist.</translation>
    </message>
    <message>
        <source>The language of the audio track </source>
        <translation>Die Sprache für die Audiospur </translation>
    </message>
    <message>
        <source>(ISO 639 standard - 3 characters)</source>
        <translation>(ISO 639 standard - 3 Buchstaben)</translation>
    </message>
    <message>
        <source> will read only the 1&lt;SUP&gt;st&lt;/SUP&gt; line.</source>
        <translation> es wird nur die erste Zeile gelesen.</translation>
    </message>
    <message>
        <source>Remark: Video formats do not support all the chapters in the same way:</source>
        <translation>Anmerkung: Videoformate unterstützen nicht alle Kapitel in der selben Art:</translation>
    </message>
    <message>
        <source> This dialog allows you to define the information which qualifies the project. </source>
        <translation> Dieser Dialog erlaubt die Festlegung der Informationen, die das Projekt beschreiben. </translation>
    </message>
    <message>
        <source>These options allow you to define the thumbnail that will be attached to the video file when rendering </source>
        <translation>Diese Option ermöglicht das Festlegen eines Vorschaubildes, das dem Video beim Erstellen hinzugefügt wird</translation>
    </message>
    <message>
        <source>Event location</source>
        <translation>Ereignisort</translation>
    </message>
    <message>
        <source>The location where the project&apos;s event took place</source>
        <translation>Der Ort wo das Projektereignisl stattfand</translation>
    </message>
    <message>
        <source>Click on this </source>
        <translation>Klicken Sie diesen</translation>
    </message>
    <message>
        <source> button to select a location from the &lt;a href=&quot;0123.html&quot;&gt;Add or modify a location&lt;/a&gt; dialog or using a favorite</source>
        <translation> Knopf um einen Ort aus dem Dialog &lt;a href=&quot;0123.html&quot;&gt;Hinzufügen oder Ändern eines Ortes&lt;/a&gt; oder von einem Favoriten zu wählen</translation>
    </message>
    <message>
        <source> button to remove actual location (set to empty)</source>
        <translation> Knopf um den aktuellen Ort zu löschen (auf leer setzen)</translation>
    </message>
    <message>
        <source>These options sets the value of the velocity curves for use whenever the corresponding options are set to &quot;Project Default&quot; </source>
        <translation>Diese Option setzt den Wert für die Anstiegskurve, die verwendet wird, wenn der entprechende Wert auf &quot;Projektstandardwerte&quot; gesetzt ist</translation>
    </message>
</context>
<context>
    <name>0109</name>
    <message>
        <source>Select files</source>
        <translation>Dateien auswählen</translation>
    </message>
    <message>
        <source>This dialog box is used in very many cases in the application.</source>
        <translation>Dieser Dialog wird sehr oft in der Anwendung verwendet.</translation>
    </message>
    <message>
        <source>It is used to select either one or multiple files depending on the purpose for which is was called.</source>
        <translation>Er wird verwendet zur Auswahl von einer oder mehreren Dateien, abhängig vom Zweck woführ er aufgrufen wurde.</translation>
    </message>
    <message>
        <source>It consists of a multimedia file browser.</source>
        <translation>Er besteht aus einem Multimediadateibrowser.</translation>
    </message>
    <message>
        <source>For more information on the ffDiaporama&apos;s multimedia file browser, see: &lt;a href=&quot;0024.html&quot;&gt;The multimedia file browser&lt;/a&gt;</source>
        <translation>Für mehr Informationen über den Multimediadateibrowser von ffDiaporama, siehe auch &lt;a href=&quot;0024.html&quot;&gt;Der Multimediabrowser für Dateien&lt;/a&gt;</translation>
    </message>
</context>
<context>
    <name>0110</name>
    <message>
        <source>Correct, reframe or cut image or video</source>
        <translation>Korrigieren, Beschneiden oder Kürzen von Bildern oder Videos</translation>
    </message>
    <message>
        <source>This dialog box allows you to:</source>
        <translation>Dieser Dialog ermöglicht Ihnen:</translation>
    </message>
    <message>
        <source> This button allows you to change the file </source>
        <translation> Dieser Knopf ermöglicht das Wechseln der Datei </translation>
    </message>
    <message>
        <source>Warning! If you replace a file (image or video) with another one with a different image geometry, you will need to review the image framing in all shots. </source>
        <translation>Achtung! Wenn Sie eine Datei (Bild oder Videos) durch ein anderes mit unterschiedlicher Bildgeometrie ersetzen, müssen sie den verwendeten Rahmen in allen Aufnahmen kontrollieren.</translation>
    </message>
    <message>
        <source>Allows to select a framing from a list of predefined framings. The framings are classified in different categories: </source>
        <translation>Ermöglicht die Wahl eines Rahmens aus einer Liste von vorderfinierten Rahmen. Die Rahmen sind in drei Kategorien differnziert:</translation>
    </message>
    <message>
        <source>Lock on the project geometry</source>
        <translation>Gesperrt und gebunden an die Projektgeometrie</translation>
    </message>
    <message>
        <source>Lock the image framing selection rectangle to the same geometry as the project. If you place the image in full screen, the reframed part will correspond to the whole screen.</source>
        <translation>Sperrt das Fadenkreuz des Rahmenwerkzeugs auf die Projektgeometrie. Wenn Sie das Photo als Vollbild plazieren, dann entspricht der beschnitte Teil dem gesamten Bildschirm. </translation>
    </message>
    <message>
        <source>Lock on the image geometry</source>
        <translation>Gesperrt und gebunden an die Bildgeometrie</translation>
    </message>
    <message>
        <source>Lock the image framing selection rectangle to the same geometry as the image</source>
        <translation>Sperrt das Fadenkreuz des Rahmenwerkzeuges auf die Geometrie des Bildes</translation>
    </message>
    <message>
        <source>No constraint</source>
        <translation>Keine Einschränkung</translation>
    </message>
    <message>
        <source>No constraint is applied to the image framing selection rectangle.</source>
        <translation>Es werden keine Einschränkungen betreffend das Rahmensetzen festgelegt.</translation>
    </message>
    <message>
        <source>Lock on this geometry</source>
        <translation>Gesperrt und gebunden an diese Geometrie</translation>
    </message>
    <message>
        <source>Lock image framing selection rectangle to the actual geometry. This only has meaning when a shape has been defined in &quot;no constraint&quot; mode.</source>
        <translation>Sperrt das Fadenkreuz des Rahmenwerkzeuges auf die aktuelle Geometrie. Dies hat nur dann Bedeutung, wenn die Form ebenfalls als &quot;keine Einschränkung&quot; definiert ist. </translation>
    </message>
    <message>
        <source>According to the image format, various choices will be proposed to you. For example: </source>
        <translation>Abhängig vom Bildformat werden verschiedene Auswahlmöglichkeiten angeboten. Zum Beispiel:</translation>
    </message>
    <message>
        <source>The horizontal position from the left (X). This position is expressed as a percentage (%) of the width of the image.</source>
        <translation>Die horizontale Position von links (X). Diese Position wird in Prozent (%) der Bildbreite ausgedrückt.</translation>
    </message>
    <message>
        <source>Example: if X=25% then the 1st quarter to the left of the image is eliminated.</source>
        <translation>Beispiel: Wenn X=25% ist, dann wird das erste Viertel des Bildes eliminiert.</translation>
    </message>
    <message>
        <source>The vertical position from the top of the image ( Y ). This position is expressed as a percentage (%) of the height of the image.</source>
        <translation>Die vertikale Position von oben (Y). Diese Position wird in Prozent (%) der Bildhöhe ausgedrückt.</translation>
    </message>
    <message>
        <source>Example: if Y=25% the 1st quarter at the top of the image is eliminated.</source>
        <translation>Beispiel: Wenn Y=25% ist, dann wird das obere Viertel des Bildes eliminiert.</translation>
    </message>
    <message>
        <source>The width. This value is expressed as a percentage (%) of the original width of the image.</source>
        <translation>Die Breite: Dieser Wert wird in Prozent (%) der Originalbreite des Bildes ausgedrückt.</translation>
    </message>
    <message>
        <source>Example: if Width=33%, the re-framed image will represent 1/3 of the original.</source>
        <translation>Beispiel: Wenn die Breite=33% ist, ist der beschnittene Teil des Bildes 1/3 des Originalbildes.</translation>
    </message>
    <message>
        <source>The height. This value is expressed as a percentage (%) of the original height of the image.</source>
        <translation>Die Höhe: Dieser Wert wird in Prozent (%) der Originalhöhe des Bildes ausgedrückt.</translation>
    </message>
    <message>
        <source>Example: if Height=33%, the re-framed image will represent 1/3 of the original.</source>
        <translation>Beispiel: Wenn die Höhe=33% ist, ist der beschnittene Teil des Bildes 1/3 des Originalbildes.</translation>
    </message>
    <message>
        <source>Remarks:</source>
        <translation>Anmerkung:</translation>
    </message>
    <message>
        <source>You can use the + and - buttons in each input field to change the settings, or directly enter values for the four parameters.</source>
        <translation>Sie können die Knöpfe + und - in allen Eingabefeldern verwenden, um die Einstellungen zu ändern, oder Sie geben direkt den gewünschten Wert ein.</translation>
    </message>
    <message>
        <source>With the mouse</source>
        <translation>Mit der Maus</translation>
    </message>
    <message>
        <source>Click one of the handles and, with the mouse button down, drag the mouse to modify the size (to increase or reduce the part of the image to be kept). </source>
        <translation>Klicken Sie auf eine der Eckmarkierungen und ziehen Sie - mit gedrückter linker Maustaste - um die Größe des Auswahlrechteckes zu verändern (Vergrößern oder Verkleinern des Bereiches der sichtbar bleiben soll).</translation>
    </message>
    <message>
        <source>Click the image and, with the mouse button down, drag the mouse to modify the part of the image which will be kept.</source>
        <translation>Klicken Sie auf das Bild und verschieben Sie – mit gedrückter linken Maustaste – den Bildinhalt so, dass der gewünschte Bildinhalt im festgelegten Ausschnitt zu sehen ist.</translation>
    </message>
    <message>
        <source>With the keyboard</source>
        <translation>Mit der Tastatur</translation>
    </message>
    <message>
        <source>Use the arrows to move the part of the image which will be kept. </source>
        <translation>Verwenden Sie die Pfeiltasten um den gewünschten Bildinhalt im festgelegten Ausschnitt zu sehen.</translation>
    </message>
    <message>
        <source>Use SHIFT+arrows to move the upper left corner handle or CTRL+arraows to move the lower right corner handle, to change the size of the part of the image which will be kept.</source>
        <translation>Verwenden Sie SHIFT und die Pfeiltasten um die linke obere Eckenmarkierung zu verschieben und verwenden Sie STRG  und die Pfeiltasten um die rechte untere Eckenmarkierung zu verschieben, bis die Größe des Ausschnittes für Ihr Bild passt.</translation>
    </message>
    <message>
        <source>When the image does not correspond to the geometry of the video to be produced, transparent zones appear. For example: an 4:3 image used in a 16:9 project will be shown by default with a transparent zone on each side.</source>
        <translation>Sollte das Bild nicht zur Geometrie des erstellten Videos/Projektes passen, werden transparente Zonen eingefügt.</translation>
    </message>
    <message>
        <source>Allows you to increase or decrease the luminosity of the image</source>
        <translation>Ermöglicht das Erhöhen oder Reduzieren der Bildhelligkeit</translation>
    </message>
    <message>
        <source>Allows you to increase or decrease the contrast of the image</source>
        <translation>Ermöglicht das Erhöhen oder Reduzieren des Bildkontrastes</translation>
    </message>
    <message>
        <source>Allows you to to increase or decrease the gamma value of the image</source>
        <translation>Ermöglicht das Erhöhen oder Reduzieren des Gamma-Wertes des Bildes</translation>
    </message>
    <message>
        <source>Allows you to modify the colorization of an image by changing the primary color red. Example : Reducing the red component makes the image more yellow - increasing it makes make the image more red</source>
        <translation>Ermöglicht das Ändern des Farbtones des Bildes durch Ändern der Grundfarbe Rot. Zum Beispiel: Die Reduktion der roten Farbanteile macht das Bild gelbstichig - ein Anheben des Rotanteils macht das Bild rötlich</translation>
    </message>
    <message>
        <source>Allows you to modify the colorization of an image by changing the primary color green. Example : Reducing the green component makes the image more red - increasing it makes the image more green</source>
        <translation>Ermöglicht das Ändern des Farbtones des Bildes durch Ändern der Grundfarbe Grün. Zum Beispiel: Die Reduktion der grünen Farbanteile macht das Bild rötlich - ein Anheben des Rotanteils macht das Bild grünlich</translation>
    </message>
    <message>
        <source>Allows you to modify the colorization of an image by changing the primary color blue. Example : Reducing the green component makes the image more red - increasing it makes the image more blue</source>
        <translation>Ermöglicht das Ändern des Farbtones des Bildes durch Ändern der Grundfarbe Blau. Zum Beispiel: Die Reduktion der blauen Farbanteile macht das Bild rötlich - ein Anheben des Rotanteils macht das Bild bläulich</translation>
    </message>
    <message>
        <source> This button allows the value to be reset to zero for all correction settings.</source>
        <translation> Dieser Knopf setzt die geänderten Farbwerte wieder auf 0 zurück.</translation>
    </message>
    <message>
        <source>Blur/Sharpen </source>
        <translation>Schärfen/Weichzeichnen</translation>
    </message>
    <message>
        <source>Increase the blur with a negative value, using radius.</source>
        <translation>Erhöhen der Weichzeichnung mit einem negativem radialem Wert.</translation>
    </message>
    <message>
        <source>Increase the sharpen with a positive value, using radius.</source>
        <translation>Erhöhen der Bildschärfe mit einem positivem radialem Wert.</translation>
    </message>
    <message>
        <source> This button allows you to reset the value to zero. (For some transformation settings.)</source>
        <translation> Dieser Knopf setzt den geänderten auf 0 zurück. (Für manche Umwandlungseinstellungen.)</translation>
    </message>
    <message>
        <source>The progress bar</source>
        <translation>Der Fortschrittsbalken</translation>
    </message>
    <message>
        <source> This button starts playback. Click again on this button to pause. </source>
        <translation> Dieser Knopf startet das Playback. Ein weiterer Klick auf denselben Knopf pausiert die Wiedergabe.</translation>
    </message>
    <message>
        <source>The working range</source>
        <translation>Der Arbeitsbereich</translation>
    </message>
    <message>
        <source> Positions the cursor at the starting point</source>
        <translation> Positioniert den Cursor auf den Startpunkt</translation>
    </message>
    <message>
        <source> Uses the current cursor position as starting point (carries out an edit)</source>
        <translation> Verwendet die aktuelle Cursorposition als Startpunkt (Berücksichtigt eine Änderung)</translation>
    </message>
    <message>
        <source> Positions the cursor at the end point</source>
        <translation> Positioniert den Cursor an den Endpunkt</translation>
    </message>
    <message>
        <source> Uses the current cursor position as end point (carries out an edit)</source>
        <translation> Verwendet die aktuelle Cursorposition als Endpunkt (Berücksichtigt eine Änderung)</translation>
    </message>
    <message>
        <source>The additional settings zone</source>
        <translation>Die Zone für zusätzliche Einstellungen</translation>
    </message>
    <message>
        <source>&lt;B&gt;Volume&lt;/B&gt; allows you to define the &quot;Master Volume&quot; for the file</source>
        <translation>&lt;B&gt;Lautstärke&lt;/B&gt; ermöglicht das Festlegen der Gesamtlautstärke für die Datei</translation>
    </message>
    <message>
        <source>&lt;B&gt;Deinterlace video&lt;/B&gt; allows you to activate the deinterlace filter</source>
        <translation>&lt;B&gt;Deinterlace Video&lt;/B&gt; ermöglicht das Aktivieren oder Deaktivieren des Deinterlace Filters</translation>
    </message>
    <message>
        <source>See also</source>
        <translation>Siehe auch</translation>
    </message>
    <message>
        <source>Ken Burns effects</source>
        <translation>Ken Burns Effekte</translation>
    </message>
    <message>
        <source>Filter: Histogram equalization</source>
        <translation>Filter: Histogrammanpassungen</translation>
    </message>
    <message>
        <source>Filter: Noise reduction</source>
        <translation>Filter: Rauschunterdrückung</translation>
    </message>
    <message>
        <source>Change image framing (select a part of the image).</source>
        <translation>Ändere Bildausschnitt (einen Teilbereich des Bildes wählen).</translation>
    </message>
    <message>
        <source>Rotate image (change or restore the orientation portrait/landscape).</source>
        <translation>Bildrotation (Ändern oder Wiederherstellen der Ausrichtung Hochformat/Querformat).</translation>
    </message>
    <message>
        <source>Correct image (change the color and/or exposure parameters) but also applying graphical filters.</source>
        <translation>Korrigiere Bild (Farbänderungen und/oder Belichtungsparameter), sowie grafische Filter zuordnen.</translation>
    </message>
    <message>
        <source>Define the beginning and end of a video sequence.</source>
        <translation>Legt den Beginn und das Ende einer Videosequenz fest.</translation>
    </message>
    <message>
        <source>To the left: The interactive area</source>
        <translation>Auf der linken Seite: Der interaktive Bereich</translation>
    </message>
    <message>
        <source>To the right: The settings area</source>
        <translation>Auf der rechten Seite: Der Bereich für Einstellungen</translation>
    </message>
    <message>
        <source>At the bottom of the interactive zone, is an area for changing the image or video file:</source>
        <translation>Im unteren Bereich der interaktiven Zone ist ein Bereich zum Wechseln der Bild- oder Videodatei:</translation>
    </message>
    <message>
        <source>At the bottom of the dialog box:</source>
        <translation>Im unteren Bereich des Dialogfensters:</translation>
    </message>
    <message>
        <source> This button enables or disables the magnetic rulers: When rulers are enabled, the mouse will automatically snap to the edges of the photo, facilitating the framing. </source>
        <translation> Dieser Knopf aktiviert oder deaktiviert das magnetische Lineal: Wenn es aktiv ist und die Maus in die Nähe kommt, schnappt der Mauszeiger an den Ecken ein (Berücksichtigt einen gesetzten Rahmen).</translation>
    </message>
    <message>
        <source>The interactive area</source>
        <translation>Der interaktive Bereich</translation>
    </message>
    <message>
        <source>You can use the interactive zone to set the framing with the mouse or the keyboard:</source>
        <translation>Sie können den interaktiven Bereich zum direkten Setzen des Beschnittes mit der Maus oder der Tastatur verwenden:</translation>
    </message>
    <message>
        <source>The settings area - Framing and form</source>
        <translation>Der Einstellungsbereich - Rahmen und Form</translation>
    </message>
    <message>
        <source>Shape</source>
        <translation>Rahmen</translation>
    </message>
    <message>
        <source>Select a shape for the current block.</source>
        <translation>Wählen Sie einen Rahmen für den aktuellen Block.</translation>
    </message>
    <message>
        <source>The settings area - Annimation settings</source>
        <translation>Der Einstellungsbereich - Animationseinstellungen</translation>
    </message>
    <message>
        <source>Speed wave</source>
        <translation>Anstiegskurve</translation>
    </message>
    <message>
        <source>Defined speed curve for image animations.</source>
        <translation>Legt die Anstiegskurve für Bildanimationen fest.</translation>
    </message>
    <message>
        <source>The settings area - Image rotation</source>
        <translation>Der Einstellungsbereich - Bildrotation</translation>
    </message>
    <message>
        <source>The settings area - Luminosity, contrast and gamma and Color enhancement</source>
        <translation>Der Einstellungsbereich - Belichtung, Kontrast, Gamma- und Farbkorrektur</translation>
    </message>
    <message>
        <source>Allows you to activate the grayscale (black &amp; white) filter.</source>
        <translation>Ermöglicht das Aktivieren von Graustufenfilter (Schwarz / Weiß).</translation>
    </message>
    <message>
        <source>Allows you to activate the equalize (Histogram equalization) filter.</source>
        <translation>Ermöglicht das Aktivieren des Filters für Histogrammanpassung.</translation>
    </message>
    <message>
        <source>All the combinations are possible. For example: you can increase the red and reduce the green at the same time. The results depend on the initial strength of the primary color components of the source image.</source>
        <translation>Jede Kombination ist möglich. Zum Beispiel können Sie den Rotanteil erhöhen und gleichzeitig den Grünanteil reduzieren. Das Ergebnis hängt naturgemäß von der ursprünglichen Farbgestaltung des Quellbildes ab.</translation>
    </message>
    <message>
        <source>The settings area - Image enhancement</source>
        <translation>Der Einstellungsbereich - Bildverbesserung</translation>
    </message>
    <message>
        <source> Apply a filter to the photo or video images. The following filters are available: </source>
        <translation> Einen Filter einem Bild oder Video zuordnen. Folgende Filter sind verfügbar:</translation>
    </message>
    <message>
        <source>Type: Select the blur/sharpen algorythm</source>
        <translation>Typ: Wählen Sie einen Schärfe- /Weichzeichnungsalgorythmus</translation>
    </message>
    <message>
        <source>Allows you to activate the despeckle (Noise reduction) filter.</source>
        <translation>Ermöglicht das Aktivieren des Filters für Rauschunterdrückung.</translation>
    </message>
    <message>
        <source>Allows you to activate the antialias (minimizing the distortion artifacts) filter.</source>
        <translation>Ermöglicht das Aktivieren des Filters für Antialiasing (Verringern von Artifakten).</translation>
    </message>
    <message>
        <source>The settings area - Artistic effects</source>
        <translation>Der Einstellungsbereich - Kunsteffekte</translation>
    </message>
    <message>
        <source>Allows you to activate the negative filter..</source>
        <translation>Aktiviert den Filter zur Negativdarstellung..</translation>
    </message>
    <message>
        <source>Allows you to activate the emboss filter.</source>
        <translation>Aktiviert den Prägefilter.</translation>
    </message>
    <message>
        <source>Allows you to activate the edge filter.</source>
        <translation>Aktiviert den Kantenfilter.</translation>
    </message>
    <message>
        <source>Allows you to activate the charcoal filter.</source>
        <translation>Aktiviert den Holzkohlefilter.</translation>
    </message>
    <message>
        <source>Allows you to activate the oilpaint filter.</source>
        <translation>Aktiviert den Ölfarbenfilter.</translation>
    </message>
    <message>
        <source>The settings area - Image distortion</source>
        <translation>Der Einstellungsbereich - Bildverzerrung</translation>
    </message>
    <message>
        <source> The image correct and reframe tag</source>
        <translation> Der Tab für Bildkorrektur und Bildbeschnitt</translation>
    </message>
    <message>
        <source>This tab is available for both images and video. It is divided into two parts:</source>
        <translation>Dieser Tab ist für Bild- und Videodateien verfübar. Er teilt sich in zwei Bereiche:</translation>
    </message>
    <message>
        <source>Allows you to activate the swirl transformation. Image swirling is a non-linear image deformation that creates a whirlpool effect.</source>
        <translation>Aktiviert den Wirbeleffekt. Die Bildverwirblung ist eine nicht lineare Bildverzerrung, die einen Whirpooleffekt erzeugt. </translation>
    </message>
    <message>
        <source>Allows you to activate the implode transformation</source>
        <translation>Aktiviert den Implosionseffekt</translation>
    </message>
    <message>
        <source>A value of 0 disables the filter.</source>
        <translation>Ein Wert von 0 deaktivert diesen Filter.</translation>
    </message>
    <message>
        <source>A negative or positive value active the filter in one direction or the other.</source>
        <translation>Ein negativer oder positiver Wert aktiviert den Filter in der einen oder der anderen Richtung.</translation>
    </message>
    <message>
        <source> This button allows the value to be reset to zero.</source>
        <translation> Dieser Knopf setzt die geänderten Wert auf 0 zurück.</translation>
    </message>
    <message>
        <source> The video tag</source>
        <translation> Der Video TAG</translation>
    </message>
    <message>
        <source>This tag is available only for video.</source>
        <translation>Dieser TAG ist nur für Videos verfügbar.</translation>
    </message>
    <message>
        <source>Define a Google Maps map.</source>
        <translation>Festlegen einer Google Maps Karte.</translation>
    </message>
    <message>
        <source> The Google Maps Map tag</source>
        <translation> Der Tag für die Google Maps Karte</translation>
    </message>
    <message>
        <source>This tag is available only for Google Maps map.</source>
        <translation>Dieser Tag ist nur für Google Maps Karten verfügbar.</translation>
    </message>
    <message>
        <source>this dialog box is organized in tab that are available depending on the type of the object to edit.</source>
        <translation>dieser Dialog ist in Tabs organisiert, die je nachdem welcher Typ von Objekt bearbeitet wird, verfügbar sind.</translation>
    </message>
    <message>
        <source>&lt;a href=&quot;#IMAGETAG&quot;&gt;The image correct and reframe tag&lt;/a&gt; is available with all object types</source>
        <translation>&lt;a href=&quot;#IMAGETAG&quot;&gt;Der Tag für Bildkorrektur und Bildbeschneidung&lt;/a&gt; ist für alle Objekttypen verfügbar</translation>
    </message>
    <message>
        <source>&lt;a href=&quot;#VIDEOTAG&quot;&gt;The video tag&lt;/a&gt; is available only with video object</source>
        <translation>&lt;a href=&quot;#VIDEOTAG&quot;&gt;Der Tag für Video&lt;/a&gt; ist nur für Videoobjekte verfügbar</translation>
    </message>
    <message>
        <source>For more information on available types of objects see: &lt;a href=&quot;0045.html&quot;&gt;Types of objects in ffDiaporama&lt;/a&gt;</source>
        <translation>Für mehr Informationen über verfügbare Objekttypen, siehe: &lt;a href=&quot;0045.html&quot;&gt;Objekttype in ffDiaporama&lt;/a&gt;</translation>
    </message>
    <message>
        <source>&lt;a href=&quot;#GMAPSMAPTAG&quot;&gt;The Google Maps map tag&lt;/a&gt; is available only with Google Maps map object</source>
        <translation>&lt;a href=&quot;#GMAPSMAPTAG&quot;&gt;Der Tag für eine Google Maps Karte&lt;/a&gt; ist nur bei einem Google Maps Kartenobjekt verfügbar</translation>
    </message>
    <message>
        <source>On the upper left part, you define the map properties</source>
        <translation>Im oberen linken Teil legen Sie die Karteneigenschaften fest</translation>
    </message>
    <message>
        <source>On the bottom left part, the map is displayed with markers</source>
        <translation>Im unteren linken Teil wird die Karte mit den Markern angezeigt</translation>
    </message>
    <message>
        <source>On the upper right part, the table of location is displayed</source>
        <translation>Im oberen rechten Teil wird die Tabelle mit den Orten angezeigt</translation>
    </message>
    <message>
        <source>On the bottom right part, you define the properties of the selected location</source>
        <translation>Im unteren rechten Teil werden die Eigenschaften für den gewählten Ort festgelegt</translation>
    </message>
    <message>
        <source>The map properties</source>
        <translation>Die Karteneigenschaften</translation>
    </message>
    <message>
        <source>Map type</source>
        <translation>Kartentype</translation>
    </message>
    <message>
        <source>Define the type of the map. You can select between the four Google Maps possibilities:</source>
        <translation>Legt den Type der Karte fest. Sie können zwischen den 4 Google Maps Typen wählen:</translation>
    </message>
    <message>
        <source>Roadmap</source>
        <translation>Strassenkarte</translation>
    </message>
    <message>
        <source>Satellite</source>
        <translation>Satellit</translation>
    </message>
    <message>
        <source>Terrain</source>
        <translation>Gelände</translation>
    </message>
    <message>
        <source>Hybrid</source>
        <translation>Hybrid</translation>
    </message>
    <message>
        <source>Map size</source>
        <translation>Kartengröße</translation>
    </message>
    <message>
        <source>Define the size of the map. This size represents the distance in width and height of the map.</source>
        <translation>Legt die Größe für die Karte fest. Die Größe repräsentiert den Abstand in Weite und Höhe der Karte.</translation>
    </message>
    <message>
        <source>Smaller the zoom is and huger the area represented by the map is.</source>
        <translation>Umso kleiner der Zoom ist, desto größer ist der auf der Karte gezeigte Bereich.</translation>
    </message>
    <message>
        <source>Higher the zoom is and smaller the area represented by the map is.</source>
        <translation>Je größer der Zoom, desto kleiner wird der Bereich in der Karte.</translation>
    </message>
    <message>
        <source>Image size</source>
        <translation>Bildgröße</translation>
    </message>
    <message>
        <source>Define the size of the image generated for the map. ffDiaporama proposes to generate maps of several image sizes, so, to create a fluid zoom animation, you can use a large image.</source>
        <translation>Legt die Größe des Bildes für die Karte fest. ffDiaporama schlägt mehrere Bildgrößen zum Erstellen vor. Um eine flüssige Zoomanimation zu erstellen, verwenden Sie größere Bilder.</translation>
    </message>
    <message>
        <source>The table of locations</source>
        <translation>Die Tabelle der Orte</translation>
    </message>
    <message>
        <source>Select a location from the &lt;a href=&quot;0123.html&quot;&gt;Add or modify a location&lt;/a&gt; dialog or using a favorite.</source>
        <translation>Wählen Sie den Ort vom Dialog &lt;a href=&quot;0123.html&quot;&gt;Hinzufügen oder Ändern von Orten&lt;/a&gt; oder verwenden Sie einen Favoriten.</translation>
    </message>
    <message>
        <source>Edit current location. Open the &lt;a href=&quot;0123.html&quot;&gt;Add or modify a location&lt;/a&gt; dialog.</source>
        <translation>Aktuelle Position ändern. Öffnen Sie den Dialog &lt;a href=&quot;0123.html&quot;&gt;Hinzufügen oder Ändern von Orten&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Remove current location.</source>
        <translation>Aktuelle Position löschen.</translation>
    </message>
    <message>
        <source>The marker properties</source>
        <translation>Die Markereigenschaften</translation>
    </message>
    <message>
        <source>Properties for all shots</source>
        <translation>Eigenschaften für alle Aufnhamen</translation>
    </message>
    <message>
        <source>This settings group defines properties for all shots, so, the modifications made to the following properties will apply to all shots. To understand the differences between the properties which apply to all shots and those which apply only to the current shot, consult: &lt;a href=&quot;0010.html&quot;&gt;How ffDiaporama works&lt;/a&gt;.</source>
        <translation>Diese Einstellungsgruppe legt die Eigenschaften für alle Aufnahmen fest. Die Änderungen die hier durchgeführt werden, wirken sich auf alle Aufnahmen aus. Um den Unterschied zwischen Einstellungen, die sich auf alle Aufnahmen auswirken und jenen Einstellungen, die sich nur auf die aktuelle Aufnahme auswirken, lesen Sie &lt;a href=&quot;0010.html&quot;&gt;Wie ffDiaporama arbeitet&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>GPS Position form</source>
        <translation>Form für die GPS Position</translation>
    </message>
    <message>
        <source>Define a form for the GPS position</source>
        <translation>Legt eine Form für die GPS Position fest</translation>
    </message>
    <message>
        <source>Marker form</source>
        <translation>Form für Marker</translation>
    </message>
    <message>
        <source>Define a form for the marker</source>
        <translation>Legt eine Form für den Marker fest</translation>
    </message>
    <message>
        <source>Composition</source>
        <translation>Zusammensetzung</translation>
    </message>
    <message>
        <source>Defined what information will be displayed in the marker</source>
        <translation>Legt die Informationen fest, die im Marker angezeigt werden</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Größe</translation>
    </message>
    <message>
        <source>Define the size of the marker and the GPS position</source>
        <translation>Legt die Größe der Marker und der GPS Position fest</translation>
    </message>
    <message>
        <source>Distance</source>
        <translation>Entfernung</translation>
    </message>
    <message>
        <source>Defined where to display the marker (the distance between the marker and the GPS position)</source>
        <translation>Legt fest, wo die Marker angezeigt werden (die Entfernung zwischen dem Marker und der GPS Position)</translation>
    </message>
    <message>
        <source>Properties for this shot</source>
        <translation>Eigenschaften für die Aufnahme</translation>
    </message>
    <message>
        <source>This settings group defines properties for the current shot, so you can create animation of makers by defining different properties for each shots.</source>
        <translation>Diese Einstellungsgruppe legt die Eigentschaften für die aktuelle Aufnahme fest. Damit können Sie eine Animation von Markern mit unterschiedlichen Eigenschaften pro Aufnahme erstellen.</translation>
    </message>
    <message>
        <source>Text color</source>
        <translation>Textfarbe</translation>
    </message>
    <message>
        <source>Defines the color of the text</source>
        <translation>Legt die Textfarbe fest</translation>
    </message>
    <message>
        <source>Background color</source>
        <translation>Huntergrundfarbe</translation>
    </message>
    <message>
        <source>Defines the color of the background of the marker, of the GPS position and of the part between the two</source>
        <translation>Legt die Hintergrundfarbe für die Marker, für die GPS Position und für den Teil zwischen diesen beiden, fest</translation>
    </message>
    <message>
        <source>Line color</source>
        <translation>Linienfarbe</translation>
    </message>
    <message>
        <source>Defines the color of the border</source>
        <translation>Legt die Farbe der Umrahmung fest</translation>
    </message>
    <message>
        <source>Visibility</source>
        <translation>Sichtbarkeit</translation>
    </message>
    <message>
        <source>Defined if the marker is visible, half-visible (masked) or hidden</source>
        <translation>Legt fest ob der Marker sichtbar, halb sichtbar (maskiert) oder versteckt ist</translation>
    </message>
    <message>
        <source>The rotation angle for the z axis. This position is expressed in degrees. Example: if Rotation=90°, the image is turned by a quarter to the right.</source>
        <translation>Der Rotationswinkel für die Z-Achse. Diese Position wird in Grad angegeben. Zum Beispiel: Wenn die Rotation 90° beträgt, wird das Bild um ein Viertel nach rechts gedreht.</translation>
    </message>
    <message>
        <source>Turn the image to the left (to the nearest multiple of 90°).</source>
        <translation>Dreht das Bild nach links (zum nächsten Vielfachen von 90°).</translation>
    </message>
    <message>
        <source>Turn the image to the right (to the nearest multiple of 90°).</source>
        <translation>Dreht das Bild nach rechts (zum nächsten Vielfachen von 90°).</translation>
    </message>
    <message>
        <source>You can move with the mouse the </source>
        <translation>Sie können mit der Maus den Marker </translation>
    </message>
    <message>
        <source> handle, on the progress bar, to move the current position</source>
        <translation> im Fortschrittsbalken verschieben, um die aktuelle Position zu ändern</translation>
    </message>
    <message>
        <source>You can move with the mouse the two </source>
        <translation>Sie können die zwei Marker </translation>
    </message>
    <message>
        <source> and </source>
        <translation> und </translation>
    </message>
    <message>
        <source> handles, on the progress bar, to move the Start and End positions</source>
        <translation> im Fortschrittsbalken verschieben, um die Start- und die Endposition zu ändern</translation>
    </message>
    <message>
        <source>Displays as follows: </source>
        <translation>Wird wie folgt angezeigt:</translation>
    </message>
    <message>
        <source>The ruler representing the duration of the video is dispayed under a black background. Remark than the length of the ruler is increased in proportion to the duration of the video.</source>
        <translation>Das Lineal repräsentiert die Laufzeit des Videos, das auf einem schwarzem Hintergrund gezeigt wird. Anmerkung: Die Länge des Lineals ändert sich proportional zur Laufzeit des Videos.</translation>
    </message>
    <message>
        <source>The blue part, on wave form and ruler, represents the part of the video which is selected (which will be used in the assembly).</source>
        <translation>Der blaue Teil - in der Audiowelle und den Linealen - repräsentiert den ausgewählten Teil des Videos (welcher für die Montage verwendet wird).</translation>
    </message>
    <message>
        <source>The wave form of the sound of the video is displayed under a white background.</source>
        <translation>Die Audiowelle der Videotonspur wird auf einem weißem Hintergrund angezeigt.</translation>
    </message>
</context>
<context>
    <name>0111</name>
    <message>
        <source>File information</source>
        <translation>Dateiinformationen</translation>
    </message>
    <message>
        <source>This dialog allows to obtain detailed information on a multimedia file.</source>
        <translation>Dieser Dialog gibt Ihnen zusätzliche Infomationen zu Multimediadatein.</translation>
    </message>
    <message>
        <source>Information shown for the image files</source>
        <translation>Informationen, die für Bilddateien angezeigt werden</translation>
    </message>
    <message>
        <source>Information on file</source>
        <translation>Informationen zur Datei</translation>
    </message>
    <message>
        <source>File name</source>
        <translation>Dateiname</translation>
    </message>
    <message>
        <source>The name of the file</source>
        <translation>Der Name der Datei</translation>
    </message>
    <message>
        <source>File type</source>
        <translation>Dateityp</translation>
    </message>
    <message>
        <source>Image</source>
        <translation>Bild</translation>
    </message>
    <message>
        <source>File size</source>
        <translation>Dateigröße</translation>
    </message>
    <message>
        <source>The size of the file on the disk (Mb)</source>
        <translation>Die Größe der Datei auf dem Speichermedium (Mb)</translation>
    </message>
    <message>
        <source>File created</source>
        <translation>Erstellungsdatum</translation>
    </message>
    <message>
        <source>The date and the hour of creation of the file on the disk (when you transferred it since the camera)</source>
        <translation>Das Datum und die Uhrzeit, wann die Datei erzeugt wurde (wann diese von der Kamera kopiert wurde)</translation>
    </message>
    <message>
        <source>File modify</source>
        <translation>Änderungsdatum</translation>
    </message>
    <message>
        <source>The date and the hour of the last modification of the file (when the photo was taken or when you modified it with an image editor)</source>
        <translation>Das Datum und die Uhrzeit der letzten Änderung der Datei (wann das Bild aufgenommen wurde oder das letzte Mal mit einem Bildverarbeitungsprogramm verändert wurde)</translation>
    </message>
    <message>
        <source>Additional information</source>
        <translation>Zusätzliche Informationen</translation>
    </message>
    <message>
        <source> Show the EXIF information supplied by the camera. </source>
        <translation> Zeigt die EXIF-Informationen, die von der Kamera zur Verfügung gestellt wurden.</translation>
    </message>
    <message>
        <source>This zone can contain several hundreds of lines according to what the camera supplies. </source>
        <translation>Dieser Bereich kann mehrere hundert Zeilen enthalten, je nachdem was die Kamera an Informationen lieferte.</translation>
    </message>
    <message>
        <source>Information shown for the audio and video files</source>
        <translation>Informationen, die für Audio- und Videodateien gezeigt werden</translation>
    </message>
    <message>
        <source>Information on file (audio and video files)</source>
        <translation>Informationen zur Datei (Audio- und Videodateien)</translation>
    </message>
    <message>
        <source>Audio track information (audio and video files)</source>
        <translation>Musikspurinformationen (Audio- und Videodatein)</translation>
    </message>
    <message>
        <source> This zone contains a table listing every audio track present in the file. </source>
        <translation> Dieser Bereich enthält eine Tabelle mit allen Musikspuren, die in der Datei enthalten sind.</translation>
    </message>
    <message>
        <source>For every track, the following information is shown: </source>
        <translation>Für jede Spur werden folgende Informationen angezeigt:</translation>
    </message>
    <message>
        <source>Track number</source>
        <translation>Spurnummer</translation>
    </message>
    <message>
        <source>Language</source>
        <translation>Sprache</translation>
    </message>
    <message>
        <source>The language in which is the audio track (generally cameras and camcorders indicate &lt;B&gt;und&lt;/B&gt; for undefine)</source>
        <translation>Die Sprache, in der die Spur aufgezeichnet wurde (manche Fotoapparate und Videokameras zeigen &lt;B&gt;und&lt;/B&gt; für undefiniert)</translation>
    </message>
    <message>
        <source>Codec</source>
        <translation>Codec</translation>
    </message>
    <message>
        <source>The audio codec used for compressed the sound</source>
        <translation>Der verwendete Audiokodec zur Kompression der Tonspur</translation>
    </message>
    <message>
        <source>Channels</source>
        <translation>Kanäle</translation>
    </message>
    <message>
        <source>The number of audio channels (1=mono, 2=stereo, etc.)</source>
        <translation>Die Anzahl an Audiokanälen der Tonspur (1=mono, 2=stereo, etc.)</translation>
    </message>
    <message>
        <source>Bitrate</source>
        <translation>Bitrate</translation>
    </message>
    <message>
        <source>The audio compression ratio (when available)</source>
        <translation>Das Komprimierungsverhältnis (wenn verfügbar)</translation>
    </message>
    <message>
        <source>Frequency</source>
        <translation>Frequenz</translation>
    </message>
    <message>
        <source>The frequency of sampling used by the audio track</source>
        <translation>Die verwendete Abtastfrequenz für die Audiospur</translation>
    </message>
    <message>
        <source>Title</source>
        <translation>Titel</translation>
    </message>
    <message>
        <source>A title (when available)</source>
        <translation>Der Titel der Spur (wenn verfügbar)</translation>
    </message>
    <message>
        <source>Video track information (video files only)</source>
        <translation>Videospurinformationen (nur Videodateien)</translation>
    </message>
    <message>
        <source> This zone contains a board listing every video track present in the file. </source>
        <translation> Dieser Bereich enthält eine Liste, in der jede Videospur, die in der Datei enthalten ist, angezeigt wird.</translation>
    </message>
    <message>
        <source>Image size</source>
        <translation>Bildgröße</translation>
    </message>
    <message>
        <source>The size of the images of the video track in number of points by number of line</source>
        <translation>Die Bildgröße der Videospur in Bildpunkten pro Zeile und Anzahl der Zeilen</translation>
    </message>
    <message>
        <source>Image format</source>
        <translation>Bildformat</translation>
    </message>
    <message>
        <source>The size of the images of the video track in million of pixels</source>
        <translation>Die Größe der Bilder in der Videospur - in Millionen Pixel</translation>
    </message>
    <message>
        <source>Image geometry</source>
        <translation>Bildgeometrie</translation>
    </message>
    <message>
        <source>The image geometry of the video track (4:3, 16:9, etc.)</source>
        <translation>Die Bildgeometrie der Videospur (4:3, 16:9, etc.)</translation>
    </message>
    <message>
        <source>The video codec used for compressed the images</source>
        <translation>Der Videocodec für die Komprimierung der Bilder</translation>
    </message>
    <message>
        <source>Frame rate</source>
        <translation>Bildrate</translation>
    </message>
    <message>
        <source>The number of images per second of the video</source>
        <translation>Die Anzahl Bilder pro Sekunde für das Video</translation>
    </message>
    <message>
        <source>The video compression ratio (when available)</source>
        <translation>Das Komprimierungsverhältnis (wenn verfügbar)</translation>
    </message>
    <message>
        <source>Chapter information (video files only)</source>
        <translation>Kapitelinformationen (nur Videodateien)</translation>
    </message>
    <message>
        <source> This zone appears only for files containing chapters. it contains a table listing every chapter present in the file. </source>
        <translation>Dieser Bereich erscheint nur für Dateien, die auch Kapitel beinhalten. Es enthählt eine Liste aller Kapitel, die in der Datei enthalten sind.</translation>
    </message>
    <message>
        <source>For every chapter, the following information is shown: </source>
        <translation>Für jedes Kapitel, werden folgende Informatonen angezeigt:</translation>
    </message>
    <message>
        <source>Chapter number</source>
        <translation>Kapitelnummer</translation>
    </message>
    <message>
        <source>The title of the chapter</source>
        <translation>Der Titel des Kapitels</translation>
    </message>
    <message>
        <source>Start</source>
        <translation>Start</translation>
    </message>
    <message>
        <source>The temporal position of the beginning of the chapter</source>
        <translation>Die zeitliche Position des Kapitelbeginns</translation>
    </message>
    <message>
        <source>End</source>
        <translation>Ende</translation>
    </message>
    <message>
        <source>The temporal position of the end of the chapter</source>
        <translation>Die zeitliche Endposition des Kapitels</translation>
    </message>
    <message>
        <source>Duration</source>
        <translation>Laufzeit</translation>
    </message>
    <message>
        <source>The duration of the chapter</source>
        <translation>Die Laufzeit des Kapitels</translation>
    </message>
    <message>
        <source>Additional information (video files only)</source>
        <translation>Zusätzliche Informationen (nur Videodateien)</translation>
    </message>
    <message>
        <source> This zone contains diverse information on the video. </source>
        <translation> Dieser Bereich enthält unterschiedliche Informationen zu einem Video.</translation>
    </message>
    <message>
        <source>At least the information about the duration of the video will be shown, but a lot of other information can appear according to what is available in the file, such as: </source>
        <translation>Zumindest die Information über die Laufzeit des Videos wird angezeigt, aber es können viele andere Informationen zusätzlich eingeblendet werden, je nachdem was die Datei an Informationen bereitstellt, so auch:</translation>
    </message>
    <message>
        <source>creation_time</source>
        <translation>Erstellungsdatum</translation>
    </message>
    <message>
        <source>Date and time of creation of the video</source>
        <translation>Datum und Uhrzeit der Erstellung des Videos</translation>
    </message>
    <message>
        <source>title</source>
        <translation>Titel</translation>
    </message>
    <message>
        <source>Title field of the TAG ID3v2 of the video</source>
        <translation>Titelfeld des TAGs ID3v2 des Videos</translation>
    </message>
    <message>
        <source>artist</source>
        <translation>Artist</translation>
    </message>
    <message>
        <source>Artist field of the TAG ID3v2 of the video</source>
        <translation>Artistenfeld vom TAG ID3v2 aus dem Video</translation>
    </message>
    <message>
        <source>album</source>
        <translation>Album</translation>
    </message>
    <message>
        <source>Album field of the TAG ID3v2 of the video</source>
        <translation>Albumfeld aus dem TAG ID3v2 aus den Video</translation>
    </message>
    <message>
        <source>date</source>
        <translation>Datum</translation>
    </message>
    <message>
        <source>Date field of the TAG ID3v2 of the video</source>
        <translation>Datumsfeld aus dem TAG ID3v2 aus dem Video</translation>
    </message>
    <message>
        <source>comment</source>
        <translation>Kommentar</translation>
    </message>
    <message>
        <source>Comment field of the TAG ID3v2 of the video</source>
        <translation>Kommentarfeld aus dem TAG ID3v2 aus dem Video</translation>
    </message>
    <message>
        <source>composer</source>
        <translation>Erstellungssoftware</translation>
    </message>
    <message>
        <source>The software with which the video was created</source>
        <translation>Die Software mit der das Video erstellt wurde</translation>
    </message>
    <message>
        <source>See also</source>
        <translation>Siehe auch</translation>
    </message>
    <message>
        <source>Information on EXIF data</source>
        <translation>EXIF-Informationen zur Datei</translation>
    </message>
    <message>
        <source>TAG in ffmpeg</source>
        <translation>TAG in ffmpeg</translation>
    </message>
    <message>
        <source>Standard ID3v2</source>
        <translation>Standard ID3v2</translation>
    </message>
    <message>
        <source>Standard MPEG-7 on the descriptors of multimedia contents</source>
        <translation>Standard MPEG-7 nach der Beschreibung von Multimediainhalten</translation>
    </message>
</context>
<context>
    <name>0112</name>
    <message>
        <source> Rename: Allows to rename the selected favorite.</source>
        <translation> Umbenennen: Ermöglicht das Umbenennen des ausgewählten Favoriten.</translation>
    </message>
    <message>
        <source> Remove: Allows to remove the selected favorite.</source>
        <translation> Entfernen : Ermöglicht das Entfernen des ausgewählten Favoriten.</translation>
    </message>
    <message>
        <source>Manage favorites</source>
        <translation>Favoriten verwalten</translation>
    </message>
    <message>
        <source>The Manage favorite dialog allows you to manage existing favorites</source>
        <translation>Der Dialog zur Favoritenverwaltung ermöglicht das Berabeiten vorhandener Favoriten</translation>
    </message>
    <message>
        <source>The existing favorites are listed in the high part of the dialog. Select one of them and click on one of the following buttons:</source>
        <translation>Die vorhandenen Favoriten sind im oberen Bereich des Dialogs aufgelistet. Wählen Sie einen davon und klicken Sie einen der folgenden Knöpfe:</translation>
    </message>
</context>
<context>
    <name>0113</name>
    <message>
        <source>Manage style</source>
        <translation>Stile verwalten</translation>
    </message>
    <message>
        <source>The Manage style dialog allows several things:</source>
        <translation>Der Dialog zur Stilverwaltung ermöglicht folgendes:</translation>
    </message>
    <message>
        <source>Rename existing style,</source>
        <translation>Vorhandenen Stil umbenennen,</translation>
    </message>
    <message>
        <source>Remove custom style,</source>
        <translation>Benutzererstellten Stil löschen</translation>
    </message>
    <message>
        <source>Reset a standard style (that you modified) has its default values.</source>
        <translation>Zurücksetzen eines Standardstils (der verändert wurde) auf seine Standardwerte.</translation>
    </message>
    <message>
        <source>The existing styles are listed in the high part of the dialog. They appear with an icon which has various meanings:</source>
        <translation>Die vorhandenen Stile werden im oberen Teil des Dialogs gelistet. Diese erhalten ein Symbol mit folgender Bedeutung:</translation>
    </message>
    <message>
        <source>for a standard style</source>
        <translation>für einen Standardstil</translation>
    </message>
    <message>
        <source>for a standard style you modified or for a custom style</source>
        <translation>für einen modifizierten Standardstil oder einen benutzerdefinierten Stil</translation>
    </message>
    <message>
        <source>Standard style</source>
        <translation>Standardstil</translation>
    </message>
    <message>
        <source>Rename</source>
        <translation>Umbenennen</translation>
    </message>
    <message>
        <source>Standard style you modified</source>
        <translation>Standardstil der von Ihnen verändert wurde</translation>
    </message>
    <message>
        <source>Rename, Reset to default</source>
        <translation>Umbenennen, Zurücksetzen auf Defaultwerte</translation>
    </message>
    <message>
        <source>Custom style</source>
        <translation>Benutzerdefinierter Stil</translation>
    </message>
    <message>
        <source>Rename, Remove</source>
        <translation>Umbenennen, Löschen</translation>
    </message>
    <message>
        <source>Allows to rename the selected style.</source>
        <translation>Ermöglicht das Umbenennen des gewählten Stils.</translation>
    </message>
    <message>
        <source>Reset to default</source>
        <translation>Zurücksetzen auf Vorgabewerte</translation>
    </message>
    <message>
        <source>Allows to delete the customizations of a standard style and thus to return it to the default values for this style. It concerns as well the name of the style as the associated settings.</source>
        <translation>Ermöglicht das Entfernen der Änderungen eines Standardstils und die Rückkehr zum ursprünglichen Design des Stils. Dies betrifft auch den Namen des Stiles und die zugehörigen Einstellungen.</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Entfernen</translation>
    </message>
    <message>
        <source>Allows to remove the personalized style.</source>
        <translation>Ermöglicht das Entfernen der personalisierten Stile.</translation>
    </message>
    <message>
        <source>According to the type of the selected style, you can execute various actions:</source>
        <translation>Abhängig vom Typ des ausgewählten Stils, können Sie unterschiedliche Aktionen ausführen:</translation>
    </message>
    <message>
        <source>The followed actions are available:</source>
        <translation>Die folgenden Aktionen sind verfügbar:</translation>
    </message>
</context>
<context>
    <name>0114</name>
    <message>
        <source>Music properties</source>
        <translation>Musikeigenschaften</translation>
    </message>
    <message>
        <source>The Music properties dialog allows you to specify the music track.</source>
        <translation>Der Dialog für Musikeigenschaften ermöglicht eine Musikspur zu bestimmen.</translation>
    </message>
    <message>
        <source>Settings for the music track (upper part of the dialog)</source>
        <translation>Einstellungen für die Musikspur (oberer Teil des Dialogs)</translation>
    </message>
    <message>
        <source>Functional Principles</source>
        <translation>Grundsätzliche Funktionalität</translation>
    </message>
    <message>
        <source> The main functional principle for music tracks is that as long as you do not change the settings, the previous settings apply. So, if: </source>
        <translation> Grundsätzlich gilt für Musikstücke, dass solange Sie keine Werte bei einem Dia verwenden, die Einstellungen des vorigen Dias verwendet werden. Wenn zum Beispiel:</translation>
    </message>
    <message>
        <source>Slide 1 - Defines a play list</source>
        <translation>Dia 1 – eine Abspielliste definiert hat</translation>
    </message>
    <message>
        <source>Slide 2 - Contains no settings</source>
        <translation>Dia 2 – keine eigenen Einstellungen hat</translation>
    </message>
    <message>
        <source>Slide 3 - Contains no settings</source>
        <translation>Dia 3 – keine eigenen Einstellungen hat</translation>
    </message>
    <message>
        <source>Slide 4 - Defines a play list</source>
        <translation>Dia 4 – eine Abspielliste definiert hat</translation>
    </message>
    <message>
        <source>Slide 5 - Contains no settings</source>
        <translation>Dia 5 – keine eigenen Einstellungen hat</translation>
    </message>
    <message>
        <source>Then:</source>
        <translation>dann :</translation>
    </message>
    <message>
        <source>Slide 2 and 3 continue to play the play list defined in slide 1</source>
        <translation>werden in Dia 2 und 3 die Musikstücke gespielt, die in Dia 1 definiert sind</translation>
    </message>
    <message>
        <source>Slide 5 continues to play the play list define in slide 4</source>
        <translation>spielt Dia 5 das Musikstück aus Dia 4 weiter ab</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Normal</translation>
    </message>
    <message>
        <source>No specific settings</source>
        <translation>Keine speziellen Einstellungen</translation>
    </message>
    <message>
        <source>Change sound level</source>
        <translation>Ändern der Lautstärke</translation>
    </message>
    <message>
        <source>Set to pause</source>
        <translation>Pausieren</translation>
    </message>
    <message>
        <source>Start a new playlist</source>
        <translation>Starten einer neuen Abspielliste</translation>
    </message>
    <message>
        <source>Allows you to create a new playlist. If a list defined in a previous slide, is still playing, it is stopped with a fade-out effect (progressive decline of the sound volume up to complete stop).</source>
        <translation>Ermöglicht eine neue Abspielliste zu erstellen. Wenn eine Abspielliste in einem vorangegangenem Dia festgelegt wurde, die noch spielt, wird diese mit einem Fade-Out-Effekt beendet (Das Musikstück wird kontinuierlich leiser, bis es gänzlich stoppt).</translation>
    </message>
    <message>
        <source>The playlist (bottom part of the dialog)</source>
        <translation>Die Abspielliste (unterer Teil des Dialogs)</translation>
    </message>
    <message>
        <source> This playlist section consists of two parts: </source>
        <translation> Der Bereich der Abspielliste ist in zwei Abschnitte unterteilt:</translation>
    </message>
    <message>
        <source>The toolbar containing controls for the playlist</source>
        <translation>Die Werkzeugleiste, welche die Steuerelemente beinhaltet</translation>
    </message>
    <message>
        <source>The list of the music files composing the playlist</source>
        <translation>Die Liste der Musikstücke, die zu der Abspielliste dazu gehören</translation>
    </message>
    <message>
        <source>The toolbar</source>
        <translation>Die Werkzeugleiste</translation>
    </message>
    <message>
        <source>Adds a file to the playlist A file selection dialog appears, allowing you to select a file.</source>
        <translation>Fügt eine Datei zu der Musikliste hinzu. Ein “Datei öffnen” Dialog für unterstützte Formate öffnet sich und ermöglicht die Auswahl eines Musikstückes.</translation>
    </message>
    <message>
        <source>Changes the order in which the music files will be played. Moves the currently selected file one step up.</source>
        <translation>Ändert die Reihenfolge des Musikstückes in der Abspielliste um eine Position nach oben.</translation>
    </message>
    <message>
        <source>Changes the order in which the music files will be played. Moves the currently selected file one step down.</source>
        <translation>Ändert die Reihenfolge des Musikstückes in der Abspielliste um eine Position nach unten.</translation>
    </message>
    <message>
        <source>The playlist</source>
        <translation>Die Abspielliste</translation>
    </message>
    <message>
        <source>The fade in/out effects and the increase/decrease of volume take place during the entering slide transitions. Consequently: </source>
        <translation>Das Ein- und Ausblenden (Fade in / Fade Out) sowie das Anheben und Senken der Lautstärke passiert in der selben Zeitspanne, in welcher der Übergang des Dias festgelegt wurde. Dies bedeutet:</translation>
    </message>
    <message>
        <source>They last for the same time as the entering transition.</source>
        <translation>In der selben Zeit, in der die Überblendung stattfindet, wird die Lautstärke angehoben bzw. gesenkt.</translation>
    </message>
    <message>
        <source>If a slide has an entering transition set to &quot;No transition&quot;, the sound effect is not progressive but instantaneous.</source>
        <translation>Ist zwischen zwei Dias kein Überblendeffekt festgelegt, wird das Musikstück entsprechend abrupt beendet.</translation>
    </message>
    <message>
        <source>The following options are apply to the current music during the slide:</source>
        <translation>Die folgenden Optionen werden für das aktuelle Musikstück innerhalb des Dia angewandt:</translation>
    </message>
    <message>
        <source>Specifies that the sound volume is reduced during this slide. (This option is particularly useful, for example, to reduce the sound of the music during the play of a video.)</source>
        <translation>Legt fest, dass die Laustärke während des Dias reduziert wird. (Diese Option ist zum Beispiel sinnvoll um die Laustärke während des Abspielens eines Videostückes zu reduzieren.)</translation>
    </message>
    <message>
        <source>Pauses the current play list.</source>
        <translation>Pausiert die aktuelle Abspielliste.</translation>
    </message>
    <message>
        <source>The music files are listed in the order in which they will be played, from top to bottom.</source>
        <translation>Die Musikdateien werden in der Abspielreihenfolge aufgelistet, von oben nach unten.</translation>
    </message>
    <message>
        <source>The Volume column defines the &quot; Master volume &quot; for the file. This volume is independent of any reductions in the volume that you define in the upper part of the dialog.</source>
        <translation>Die Spalte &quot;Lautstärke&quot; legt die Gesamtlautstärke für die Datei fest. Diese Lautstärke ist unabhängig von einer Reduktion der Lautstärke, die im oberen Teil des Dialoges festgelegt wird.</translation>
    </message>
    <message>
        <source>The Credit column defines if the file should appear or not when using %STM% variable in a credit title. For more information on variables, see: &lt;a href=&quot;0013.html&quot;&gt;Dynamic variables&lt;/a&gt;</source>
        <translation>Die Spalte &quot;Danksagung&quot; legt fest, ob die Datei angezeigt werden soll oder nicht wenn die %STM% Variable im Danksagungstitel verwendet wird. Für mehr Informationen über Variablen, siehe &lt;a href=&quot;0013.html&quot;&gt;Dynamische Variablen&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Remarks</source>
        <translation>Anmerkungen</translation>
    </message>
    <message>
        <source>Cut the currently selected file from the playlist. The &lt;a href=&quot;0124.html&quot;&gt;Cut a sound file&lt;/a&gt; dialog appears.</source>
        <translation>Ausschneiden der ausgewählten Datei in der Abspielliste. Der Dialog &lt;a href=&quot;0124.html&quot;&gt;Beschneiden einer Audiodatei&lt;/a&gt; öffnet sich.</translation>
    </message>
    <message>
        <source>Removes the currently selected file from the playlist.</source>
        <translation>Entfernt die aktuell ausgewählte Datei aus der Abspielliste.</translation>
    </message>
    <message>
        <source>You can double click a music file from the playlist to edit it, the &lt;a href=&quot;0124.html&quot;&gt;Cut a sound file&lt;/a&gt; dialog appears.</source>
        <translation>Sie können ein Musikstück mit Doppelklick ändern. Der Dialog &lt;a href=&quot;0124.html&quot;&gt;Beschneiden einer Audiodatei&lt;/a&gt; öffnet sich.</translation>
    </message>
</context>
<context>
    <name>0115</name>
    <message>
        <source>Render video</source>
        <translation>Video erstellen</translation>
    </message>
    <message>
        <source>This dialog allows you to render the project as a video file.</source>
        <translation>Dieser Dialog ermöglicht das Erstellen eines Videos aus dem Projekt.</translation>
    </message>
    <message>
        <source>Description of the dialog box</source>
        <translation>Beschreibung des Dialogfensters</translation>
    </message>
    <message>
        <source>Destination file</source>
        <translation>Zieldatei</translation>
    </message>
    <message>
        <source>Indicate here the name of the destination file. </source>
        <translation>Zeigt hier den Namen der Zieldatei.</translation>
    </message>
    <message>
        <source> Click on this button to select graphically a file and a directory.</source>
        <translation> Klicken Sie diesen Knopf um grafisch eine Datei und ein Verzeichnis zu wählen.</translation>
    </message>
    <message>
        <source>Rendering</source>
        <translation>Video erstellen</translation>
    </message>
    <message>
        <source>The rendering can be made on the whole project or only on a part.</source>
        <translation>Das Erstellen des Videos kann über das gesamte Projekt oder nur einen Teil davon erfolgen.</translation>
    </message>
    <message>
        <source>This choice is made: </source>
        <translation>Diese Auswahl wurde getroffen:</translation>
    </message>
    <message>
        <source>By checking the option &lt;B&gt;All slides&lt;/B&gt; to render the video of the whole project</source>
        <translation>Bei Aktivieren dieser Option &lt;B&gt;Alle Dias&lt;/B&gt;, um alle beinhalteten Dias in das Video einzubinden</translation>
    </message>
    <message>
        <source>Or by checking the option &lt;B&gt;From&lt;/B&gt; and then entering the numbers of the start and end slides to generate a video of only a part of the project.</source>
        <translation>oder durch Aktivieren der Option &lt;B&gt;Von&lt;/B&gt; und Eingabe des Start- und des Enddias, um aus diesem Bereich ein Video für dieses Teilprojekt zu erstellen.</translation>
    </message>
    <message>
        <source>Sound (include sound in the video)</source>
        <translation>Musik (die Musik wird in das Video integriert)</translation>
    </message>
    <message>
        <source>If this box is checked then the sound track will be included in the video</source>
        <translation>Wenn diese Option gesetzt ist, wird die Tonspur in das Video integriert</translation>
    </message>
    <message>
        <source>Language</source>
        <translation>Sprache</translation>
    </message>
    <message>
        <source>Defines the value of the Language field. </source>
        <translation>Legt den Wert für das Feld &quot;Sprache&quot; fest.</translation>
    </message>
    <message>
        <source>This value is used by players to indicate in which language is the audio track. This value is on 3 characters and follows this recommendation: </source>
        <translation>Dieser Wert wird von Abspielgeräten verwendet, um die Sprache der Tonspur anzuzeigen. Der Wert besteht aus drei Buchstaben und folgender Empfehlung:</translation>
    </message>
    <message>
        <source>ISO 639</source>
        <translation>ISO 639</translation>
    </message>
    <message>
        <source>In device mode</source>
        <translation>Im Gerätemodus</translation>
    </message>
    <message>
        <source>Device type</source>
        <translation>Gerätetyp</translation>
    </message>
    <message>
        <source>Allows you to select a device type.</source>
        <translation>Ermöglicht, einen Gerätetyp auszuwählen.</translation>
    </message>
    <message>
        <source>Model</source>
        <translation>Modell</translation>
    </message>
    <message>
        <source>Allows you to select a device model.</source>
        <translation>Ermöglicht, ein Gerätemodell zu wählen.</translation>
    </message>
    <message>
        <source>In lossless mode</source>
        <translation>Im verlusfreien Modus</translation>
    </message>
    <message>
        <source>Image format</source>
        <translation>Bildformat</translation>
    </message>
    <message>
        <source>Select the image format to be used to render the video from the displayed list.</source>
        <translation>Wählen Sie  aus der angezeigten Liste das Bildformat, das zum Erstellen des Videos verwendet werden soll.</translation>
    </message>
    <message>
        <source>In advanced mode</source>
        <translation>Im erweiterten Modus</translation>
    </message>
    <message>
        <source>File format</source>
        <translation>Dateiformat</translation>
    </message>
    <message>
        <source>Select the type of file to be used to render the video from the displayed list.</source>
        <translation>Wählen Sie  aus der angezeigten Liste den Dateityp, der verwendet werden soll.</translation>
    </message>
    <message>
        <source>Video Standard</source>
        <translation>Videonorm</translation>
    </message>
    <message>
        <source>Select the video standard to be used: PAL or NTSC.</source>
        <translation>Legt die verwendete Videonorm fest: PAL oder NTSC.</translation>
    </message>
    <message>
        <source>Video codec</source>
        <translation>Videocodec</translation>
    </message>
    <message>
        <source>Select the video codec to be used to render the video from the displayed list.</source>
        <translation>Wählen Sie  aus der angezeigten Liste den zu verwendenden Videocodec, der für das Erstellen des Videos verwendet werden soll.</translation>
    </message>
    <message>
        <source>Bitrate</source>
        <translation>Bitrate</translation>
    </message>
    <message>
        <source>Select the video compression ratio from the displayed list</source>
        <translation>Wählen Sie  aus der angezeigten Liste das Kompressionsverhältnis, das zum Erstellen des Videos verwendet werden soll</translation>
    </message>
    <message>
        <source>Audio codec</source>
        <translation>Audiocodec</translation>
    </message>
    <message>
        <source>Select the audio codec to be used to render the video from the displayed list.</source>
        <translation>Audiocodec, der zum Erstellen des Videos verwendet werden soll, aus der angezeigten Liste wählen.</translation>
    </message>
    <message>
        <source>Render the movie</source>
        <translation>Video erstellen</translation>
    </message>
    <message>
        <source> Once you have selected the device or set the advanced parameters, one click on the OK button starts the process of rendering the video. </source>
        <translation> Nachdem Sie ein Gerätemodel gewählt oder die erweiterten Parameter gesetzt haben, startet ein Klick auf den OK-Knopf die Generierung des Videos.</translation>
    </message>
    <message>
        <source>At any time during this process, one click on the &quot;Cancel&quot; button stops the process. </source>
        <translation>Sie können während der Erstellung zu jeder Zeit den Vorgang durch Klicken auf &quot;Abbrechen&quot; unterbrechen.</translation>
    </message>
    <message>
        <source> Depending on the device model or the advanced parameters which you selected, the generation can take quite a long time. </source>
        <translation> Abhängig vom Gerätemodel oder den erweiterten Parametern, die gewählt wurden, kann die Erstellung des Videos viel Zeit in Anspruch nehmen.</translation>
    </message>
    <message>
        <source>Generally, for a Full-HD 1080p video: </source>
        <translation>Generll, für ein Full-HD 1080p Video:</translation>
    </message>
    <message>
        <source>On a PC with 4 fast cores (Core i7 for example) : The process will take approximately 2 minutes for each minute of video to be rendered</source>
        <translation>Auf einem PC mit 4 schnellen Kernen (Core i7 zum Beispiel) : Der Prozess braucht ungefähr 2 Minuten Rechenzeit für jede Minute fertiges Videomaterial</translation>
    </message>
    <message>
        <source>On a PC with 2 cores (Core 2 duo for example) : The process will take approximately 5 minutes for each minute of video to be rendered</source>
        <translation>Auf einem PC mit 2 Kernen (Core 2 duo zum Beispiel) : Die Berechnung braucht ungefähr 5 Minuten für jede Minute Videomaterial</translation>
    </message>
    <message>
        <source> This amounts to 2 to 5 hours for a one-hour video. </source>
        <translation> Umgerechnet heißt das, dass 2 bis 5 Stunden Rechenzeit benötigt werden um 1 Stunde Videomaterial zu erhalten.</translation>
    </message>
    <message>
        <source>This duration will be much shorter for a video in VGA resolution. That is why we recommend you to carry out all tests and focusing trials at low resolution, and to render your videos in Full-HD only for the last step. </source>
        <translation>Die Laufzeit wird viel kürzer wenn die Videoauflösung auf VGA reduziert wird. Deshalb empfehlen wir alle Tests und Voransichten in niedrigeren Auflösungen zu machen und erst das finale Endprodukt in Full-HD zu berechnen.</translation>
    </message>
    <message>
        <source>Note: the project properties are saved into the video as TAG (METADATA) which are used by a lot of indexing programs or by </source>
        <translation>Anmerkung: Die Projekteigenschaften werden im erstellten Video als TAG (METADATA) gespeichert und von vielen Indexiersystemen verwendet oder durch  </translation>
    </message>
    <message>
        <source>Media Center Systems</source>
        <translation>Mediacentersysteme</translation>
    </message>
    <message>
        <source>This dialog has different appearances depending on whether you clicked the Device type, Lossless, Advanced or Soundtrack button. </source>
        <translation>Dieser Dialog hat verschiedene Erscheinungsformen, je nachdem ob Sie auf Gerätetpy verlustfrei, erweitert oder nur Tonspur geklickt haben.</translation>
    </message>
    <message>
        <source>Join thumbnail to rendered file</source>
        <translation>Vorschaubild mit erstelltem Video zusammenführen</translation>
    </message>
    <message>
        <source>If this box is checked then a thumbnail file will be created with video. </source>
        <translation>Ist diese Option aktiv, wird ein Vorschaubild für das erstellte Video generiert.</translation>
    </message>
    <message>
        <source>Join XBMC .nfo file to rendered file</source>
        <translation>XBMC .nfo Dateien mit erstellten Video zusammenführen</translation>
    </message>
    <message>
        <source>If this box is checked then a &lt;a href=&quot;0044.html&quot;&gt;XBMC .nfo&lt;/a&gt; file will be created with video. </source>
        <translation>Wenn diese Option aktiv ist, wird eine &lt;a href=&quot;0044.html&quot;&gt;XBMC .nfo Datei&lt;/a&gt; für das erstellte Video generiert.</translation>
    </message>
    <message>
        <source>Select the audio compression ratio from the displayed list</source>
        <translation>Wählen Sie  aus der angezeigten Liste das Kompressionsverhältnis, das zum Erstellen der Tonspur verwendet werden soll</translation>
    </message>
    <message>
        <source>Frequency</source>
        <translation>Frequenz</translation>
    </message>
    <message>
        <source>In export soundtrack mode</source>
        <translation>Im Modus Tonspur exportieren</translation>
    </message>
    <message>
        <source>Select the type of file to be used to render the soundtrack from the displayed list.</source>
        <translation>Wählen Sie  aus der angezeigten Liste den Dateityp, der verwendet werden soll.</translation>
    </message>
    <message>
        <source>At the dialog bottom</source>
        <translation>Im unteren Bereich des Dialogfensters</translation>
    </message>
    <message>
        <source>For more information on joined files, see &lt;a href=&quot;003A.html&quot;&gt;File attachments&lt;/a&gt;</source>
        <translation>Für mehr Informationen über zusammengeführte Dateien, siehe &lt;a href=&quot;003A.html&quot;&gt;Dateianhänge&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Select the frequency to use for audio during the rendering.</source>
        <translation>Wählen Sie die zu verwendende Abtastrate für die Musik, die bei Videoerstellung verwendet werden soll.</translation>
    </message>
    <message>
        <source> The properties button allows you to open the &lt;a href=&quot;0108.html&quot;&gt;Project properties dialog&lt;/a&gt;. It allows you to adjust the properties before generating the video. </source>
        <translation> Der Knopf Eigenschaften ermöglicht das Öffnen des Dialoges &lt;a href=&quot;0108.html&quot;&gt;Projekteigenschaften&lt;/a&gt;. Sie können die Projekteinstellungen verändern, bevor Sie das Video erstellen.</translation>
    </message>
    <message>
        <source>Variable bitrate</source>
        <translation>Variable Bitrate</translation>
    </message>
    <message>
        <source>If this box is checked, the bitrate is variable. (Note: This option is available only for h264 codec.)</source>
        <translation>Wenn diese Option gesetzt ist, wird eine variable Bitrate verwendet. (Anmerkung: Diese Option ist nur für h264 Codec&apos;s verfügbar.)</translation>
    </message>
    <message>
        <source>Remarks:</source>
        <translation>Anmerkung:</translation>
    </message>
    <message>
        <source> &lt;U&gt;Rendering duration:&lt;/U&gt;</source>
        <translation> &lt;U&gt;Umwandlungsdauer:&lt;/U&gt;</translation>
    </message>
    <message>
        <source> &lt;U&gt;Variable bitrate:&lt;/U&gt;</source>
        <translation> &lt;U&gt;Variable Bitrate:&lt;/U&gt;</translation>
    </message>
    <message>
        <source> If variable bitrate is activated, the video compression bitrate could vary from -50% to +125% </source>
        <translation> wenn variable Bitrate aktiviert ist, kann die Bitrate für Videokompression zwischen -50% und +125% varieren </translation>
    </message>
    <message>
        <source>If the project contains mostly pictures, this option can significantly reduce the size of the video file (up to 80%)</source>
        <translation>Wenn das Projekt hauptsächlich Bilder enthält, kann diese Option die Größe des erstellten Videos drastisch reduzieren (bis zu 80%)</translation>
    </message>
    <message>
        <source>By cons, if the project contains mostly videos this option will increase the size of the video file</source>
        <translation>Wenn andereseits hauptsächlich Videos verwendet werden, erhöht diese Option die Größe des erstellten Videos</translation>
    </message>
    <message>
        <source> By default, variable bitrate is activated when duration of videos are less than half of the total duration of the projet. </source>
        <translation> Standardmässig wird die variable Bitrate aktiviert, wenn die Laufzeiten der Videos weniger als die Hälfte der Gesamtlaufzeit des erstellten Videos ausmachen.</translation>
    </message>
</context>
<context>
    <name>0116</name>
    <message>
        <source>Ruler properties</source>
        <translation>Linealeigenschaften</translation>
    </message>
    <message>
        <source>This dialog allows you to enable or disable rulers.</source>
        <translation>Dieser Dialog ermöglicht das Ein- bzw. Ausschalten der Lineale.</translation>
    </message>
    <message>
        <source>Edge of the screen</source>
        <translation>Rand des Bildschirms</translation>
    </message>
    <message>
        <source>Corresponds to the edge of the screen.</source>
        <translation>Entspricht dem Rand des Bildschirms.</translation>
    </message>
    <message>
        <source>TV margins</source>
        <translation>TV Seitenränder</translation>
    </message>
    <message>
        <source>In ffDiaporama, the TV margins are of type &quot;Title safe area&quot; and are defined on 90% in width and 90% in height, for all the project geometries.</source>
        <translation>In ffDiaporama sind die TV Seitenränder vom Typ &quot;Titelsicherer Bereich&quot; und sind für alle Projektgeometrien auf 90% der Breite und 90% der Höhe definiert.</translation>
    </message>
    <message>
        <source>Centre of the screen</source>
        <translation>Zentriert ausrichten am Bildschirm</translation>
    </message>
    <message>
        <source>Corresponds to the center of the screen.</source>
        <translation>Entspricht dem Mittelpunkt des Bildschirms.</translation>
    </message>
    <message>
        <source>Unselected blocks</source>
        <translation>Nicht markierte Blöcke</translation>
    </message>
    <message>
        <source>For all the objects which are not a part of the selection, create rulers for the top, bottom, left and right edges of blocks as well as for the centers of blocks.</source>
        <translation>Für alle Objekte, die nicht Teil der Auswahl sind, werden Lineale für den oberen, unteren, linken und rechten Rand, sowie für die Mitte der Blöcke erstellt.</translation>
    </message>
    <message>
        <source>Remarks:</source>
        <translation>Anmerkung:</translation>
    </message>
    <message>
        <source>Rulers can be activated or deactivated one by one.</source>
        <translation>Lineale können einzeln aktiviert und deaktiviert werden.</translation>
    </message>
    <message>
        <source>When a ruler is activated, the mouse is attracted towards this ruler. This is valid as well for the movements of blocks as for the resizing (movements of the handles).</source>
        <translation>Wenn ein Lineal aktiv ist, schnappt die Maus bei diesem Lineal ein. Dies gilt auch für das Verschieben von Blöcken und auch für die Größenänderung (Verschieben der Eckmarkierungen).</translation>
    </message>
    <message>
        <source>TV margins rullers are not available for thumbnails editing.</source>
        <translation>TV Seitenränder-Lineale sind für das Ändern von Vorschaubildern nicht verfügbar.</translation>
    </message>
    <message>
        <source>See also</source>
        <translation>Siehe auch</translation>
    </message>
    <message>
        <source>Description of TV margins and overscan</source>
        <translation>Beschreibung für TV Seitenränder und das darüber hinausgehen (Overscan)</translation>
    </message>
</context>
<context>
    <name>0117</name>
    <message>
        <source>Edit thumbnail model</source>
        <translation>Ändern Modell für Vorschaubilder</translation>
    </message>
    <message>
        <source>This dialog allows you to edit custom thumbnails and custom thumbnails models.</source>
        <translation>Dieser Dialog bietet die Möglichkeit, benutzerdefinierte Vorschaubilder und die Modelle von Vorschaubildern zu bearbeiten. </translation>
    </message>
    <message>
        <source>It&apos;s a simplified version of the &lt;a href=&quot;0119.html&quot;&gt;Slides properties dialog&lt;/a&gt; and as it, it includes numerous zones:</source>
        <translation>Es ist eine vereinfachte Verson vom Dialog &lt;a href=&quot;0119.html&quot;&gt;Diaeigenschaften&lt;/a&gt; und beinhaltet mehrere Bereiche:</translation>
    </message>
    <message>
        <source>On the top: The &lt;a href=&quot;#Toolbar&quot;&gt;Toolbar&lt;/a&gt; allows to launch the main thumbnail editing commands.</source>
        <translation>Im oberem Teil: Die &lt;a href=&quot;#Toolbar&quot;&gt;Werkzeugleiste&lt;/a&gt; bietet schnellen Zugriff auf die wichtigsten Kommandos zur Bearbeitung.</translation>
    </message>
    <message>
        <source>On the right: The &lt;a href=&quot;#BlockTable&quot;&gt;Blocks table&lt;/a&gt; and the &lt;a href=&quot;#BlockSettings&quot;&gt;Block settings&lt;/a&gt; zones.</source>
        <translation>Auf der rechten Seite: Die Bereiche für &lt;a href=&quot;#BlockTable&quot;&gt;Blocktabelle&lt;/a&gt; sowie &lt;a href=&quot;#BlockSettings&quot;&gt;Blockeinstellungen&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Toolbar</source>
        <translation>Werkzeugleiste</translation>
    </message>
    <message>
        <source> The toolbar allows to launch the main thumbnail editing commands. </source>
        <translation> Die Werkzeugleiste ermöglicht den schnellen Zugriff auf die wichtigsten Kommandos.</translation>
    </message>
    <message>
        <source>Add a new title block - Open a sub menu with the following options: </source>
        <translation>Hinzufügen eines neuen Titelblocks - Öffnet ein Untermenü mit folgenden Optionen: </translation>
    </message>
    <message>
        <source>Add a simple title block</source>
        <translation>Fügt einen einfachen Textblock hinzu</translation>
    </message>
    <message>
        <source>Add a title clip-art block</source>
        <translation>Fügt einen ClipArt-Block hinzu</translation>
    </message>
    <message>
        <source>Once you have selected one of the options, the &lt;a href=&quot;0120.html&quot;&gt;Edit Text dialog&lt;/a&gt; opens.</source>
        <translation>Nachdem Sie eine der zwei Optionen gewählt haben, öffnet sich der Dialog &lt;a href=&quot;0120.html&quot;&gt;Text ändern&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Add one or several new blocks of images or video. A &lt;a href=&quot;0109.html&quot;&gt;file selection dialog&lt;/a&gt; appears allowing you to select files. </source>
        <translation>Hier können Sie mit dem Dialog &lt;a href=&quot;0109.html&quot;&gt;Dateiauswahl&lt;/a&gt; eine oder mehrere Dateien hinzufügen.</translation>
    </message>
    <message>
        <source>Note: in case of multiple selection, files are added in the alphabetical order of the filenames or in the digital order of shots (according to the option selected in the &lt;a href=&quot;0101.html&quot;&gt;Application options dialog&lt;/a&gt;).</source>
        <translation>Anmerkung: wenn mehrere Dateien ausgewählt wurden, werden diese in alphabetischer Reihenfolge des Dateinamen oder in der Reihenfolge der Aufnahme mit der Kamera hinzugefügt (Abhängig von der ausgewählten Option im Dialog &lt;a href=&quot;0101.html&quot;&gt;Applikationseinstellungen&lt;/a&gt;).</translation>
    </message>
    <message>
        <source>Edit blocks - Open a sub menu with the following options: </source>
        <translation>Blöcke ändern - Öffnet ein Untermenü mit folgenden Optionen:</translation>
    </message>
    <message>
        <source>Copy the current block to the ffDiaporama clipboard and remove it from the thumbnail.</source>
        <translation>Kopieren des aktuellen Blockes in die ffDiaporama Zwischenablage und Entfernen vom Vorschaubild. </translation>
    </message>
    <message>
        <source>Copy the current block to the ffDiaporama clipboard.</source>
        <translation>Kopieren des aktuellen Blockes in die ffDiaporama Zwischenablage.</translation>
    </message>
    <message>
        <source>Paste block from the ffDiaporama clipboard and insert it to the end of the block table</source>
        <translation>Einfügen eines Blockes aus der ffDiaporama Zwischenablage. Der eingefügte Block wird an das Ende der Blocktabelle gestellt</translation>
    </message>
    <message>
        <source>Remove the current block</source>
        <translation>Entfernen des aktuellen Blockes</translation>
    </message>
    <message>
        <source>Open the &lt;a href=&quot;0120.html&quot;&gt;Edit text block dialog&lt;/a&gt;.</source>
        <translation>Öffnet den Dialog &lt;a href=&quot;0120.html&quot;&gt;Textblock editieren&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Open the &lt;a href=&quot;0110.html&quot;&gt;Image framing and correction dialog&lt;/a&gt;. This button is active only for objects containing images or videos.</source>
        <translation>Öffnet den Dialog &lt;a href=&quot;0110.html&quot;&gt;Bildbeschneidung und Korrektur&lt;/a&gt;. Dieser Knopf ist nur für  Bilder oder Videos aktiv.</translation>
    </message>
    <message>
        <source>Arrange blocks - Open a sub menu with the following options: </source>
        <translation>Anordnung der Blöcke - Öffnet ein Untermenü mit folgenden Optionen:</translation>
    </message>
    <message>
        <source>Align to top</source>
        <translation>Ausrichten nach Oberkante</translation>
    </message>
    <message>
        <source>Align to midle</source>
        <translation>Horizontal mittig ausrichten</translation>
    </message>
    <message>
        <source>Align to bottom</source>
        <translation>Ausrichten nach Unterkante</translation>
    </message>
    <message>
        <source>Align to left</source>
        <translation>Ausrichten nach links</translation>
    </message>
    <message>
        <source>Align to center</source>
        <translation>Vertikal mittig ausrichten</translation>
    </message>
    <message>
        <source>Align to right</source>
        <translation>Ausrichten nach rechts</translation>
    </message>
    <message>
        <source>Distribute horizontally</source>
        <translation>Horizontal verteilen</translation>
    </message>
    <message>
        <source>Distribute vertically</source>
        <translation>Vertikal verteilen</translation>
    </message>
    <message>
        <source>Change the order of blocks by moving the active block upward (towards the background)</source>
        <translation>Den aktuellen Block um eine Ebene absenken und in Richtung Hintergrund schieben</translation>
    </message>
    <message>
        <source>Change the order of blocks by moving the active block downward (towards the foreground)</source>
        <translation>Den aktuellen Block um eine Ebene anheben und in Richtung Vordergrund holen</translation>
    </message>
    <message>
        <source>Display information on active block. (Remark: This function is available only for &quot;image&quot; or &quot;video&quot; blocks.)</source>
        <translation>Anzeige der Informationen des aktiven Blocks. Anmerkung : Dieser Knopf ist nur für Bilder und Videos aktiv</translation>
    </message>
    <message>
        <source>Allows you to open the &lt;a href=&quot;0116.html&quot;&gt;Ruler properties dialog&lt;/a&gt;</source>
        <translation>Ermöglicht das Öffnen des Dialoges &lt;a href=&quot;0116.html&quot;&gt;Linealeigenschaften&lt;/a&gt;</translation>
    </message>
    <message>
        <source> It is also possible to open contextual menus by: </source>
        <translation> Es ist ebenso möglich ein Kontextmenü aufzurufen, indem man:</translation>
    </message>
    <message>
        <source>Right clicking on zones.</source>
        <translation>Rechts in den Bereichen klickt.</translation>
    </message>
    <message>
        <source>Right click on blocks table or on interactive zone when no block was selected.</source>
        <translation>Mit der rechten Maustaste in die Blocktabelle oder in den interaktiven Bereich klickt, wenn kein Block ausgewählt ist.</translation>
    </message>
    <message>
        <source>Right click on one of the blocks of a multiple selection, on blocks table or on interactive zone.</source>
        <translation>Mit der rechten Maustaste auf einen der Blöcke der Mehrfachauswahl in der Blocktabelle oder in den interaktiven Bereich klickt.</translation>
    </message>
    <message>
        <source>Each of these contextual menus propose commands which depend on what you have clicked.</source>
        <translation>Jedes dieser Kontextmenüs bietet unterschiedliche Optionen, je nachdem in welchem Bereich man den rechten Mausklick ausgeführt hat.</translation>
    </message>
    <message>
        <source>Interactive zone</source>
        <translation>Interaktiver Bereich</translation>
    </message>
    <message>
        <source> The interactive zone allows you to move and interactively re-size blocks. </source>
        <translation>Der interaktive Bereich erlaubt Ihnen, die Blöcke der aktuellen Aufnahme zu verschieben und diese interaktiv zu vergrössern.</translation>
    </message>
    <message>
        <source>Selected blocks are shown with a frame. (It allows to differentiate them from other graphic elements of the thumbnail).</source>
        <translation>Markierte Blöcke werden mit einem Rahmen dargestellt. Dies ermöglicht es, diese von anderen Elementen des Dia zu unterscheiden.</translation>
    </message>
    <message>
        <source>Control handles (small square) are shown on sides and on corners of the selection frame.</source>
        <translation>Kontrollpunkte (kleine Quadrate) an den Ecken und an den Längsseiten erlauben die genaue Manipulation des Blockes.</translation>
    </message>
    <message>
        <source>Rulers are displayed to facilitate the work with the mouse. See &lt;a href=&quot;0116.html&quot;&gt;Rulers settings&lt;/a&gt;</source>
        <translation>Lineale werden angezeigt, um ein leichteres Positionieren mit der Maus zu ermöglichen. Siehe &lt;a href=&quot;0116.html&quot;&gt;Linealeinstellungen&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Using the mouse:</source>
        <translation>Mit der Maus:</translation>
    </message>
    <message>
        <source>To select a block: click the block</source>
        <translation>Um den gewünschten Block auszuwählen: Den Block mit der linken Maustaste anklicken</translation>
    </message>
    <message>
        <source>To select multiple blocks: Select a first block by clicking on it and then, by clicking on the other blocks to be selected with pressing either the SHIFT or the CTRL key.</source>
        <translation>Um mehrere Blöcke auszuwählen : Wählen Sie den ersten Block durch Anklicken und halten Sie die SHIFT- oder STRG-Taste, während Sie die weiteren Blöcke anklicken.</translation>
    </message>
    <message>
        <source>To select a block under another block : Click the block to be selected by pushing both SHIFT and CTRL keys.</source>
        <translation>Um einen Block zu wählen, der unter einem anderem Block liegt: Klicken Sie auf den Block, während Sie die SHIFT- und die STRG-Taste gedrückt halten.</translation>
    </message>
    <message>
        <source>To unselect a block in a multiple selection: Click the block with pressing either the SHIFT or the CTRL key.</source>
        <translation>Um einen gewählten Block abzuwählen: Klicken Sie erneut auf den Block, während Sie die SHIFT- oder die STRG-Taste halten.</translation>
    </message>
    <message>
        <source>To modify the size of the blocks of the selection: Click one of the handles of the selection and, while keeping the button of the mouse pressed, move the mouse.</source>
        <translation>Um die Größe der gewählten Blöcke zu verändern: Klicken Sie einen der Kontrollpunkte an und während Sie die Maustaste gedrückt halten, verschieben Sie den Kontrollpunkt, bis die gewünschte Größe erreicht ist.</translation>
    </message>
    <message>
        <source>To move the blocks of the selection: Click one of the blocks of the selection and, while keeping the button of the mouse pressed, move the mouse.</source>
        <translation>Um einen Block zu verschieben. Klicken Sie auf einen der markierten Blöcke und halten Sie die Maustaste gedrückt. Wenn Sie die Maus nun bewegen ändert der gesamte Block seine Position. Lassen Sie die Maustaste los, wenn die gewünschte Position erreicht ist.</translation>
    </message>
    <message>
        <source>Using the keyboard:</source>
        <translation>Mit der Tastatur:</translation>
    </message>
    <message>
        <source>To move the blocks of the selection, use the arrow keys.</source>
        <translation>Um einen Block zu verschieben verwenden Sie die Pfeiltasten.</translation>
    </message>
    <message>
        <source>To change the size of the blocks of the selection, use SHIFT+arrows to move the upper left corner handle or CTRL+arrows to move the lower right corner handle.</source>
        <translation>Um die Größe des Blockes zu verändern, drücken Sie für die Verschiebung des linken oberen Kontrollpunkte die SHIFT-Taste in Verbindung mit den Pfeiltastens. Für die Verschiebung des rechten unteren Kontrollpunktes drücken Sie die STRG-Taste in Verbindung mit den Pfeiltasten.</translation>
    </message>
    <message>
        <source>Remarks:</source>
        <translation>Anmerkung:</translation>
    </message>
    <message>
        <source>A double click on a block opens the block editor associated with the block type (for a text block this will be the text editor, for an image block the reframing dialog, etc.)</source>
        <translation>Ein Doppelklick auf einen Block öffnet den für den Block zuständigen Editor. (Für einen Textblock den Texteditor; für ein Bild den Bildänderungsdialog usw.) </translation>
    </message>
    <message>
        <source>A right click on a block when the selection includes only a single block opens a contextual menu proposing the editing commands for a block.</source>
        <translation>Ein Klick mit der rechten Maustaste – sofern die Auswahl einen einzigen Blocktyp beinhaltet – öffnet das Kontextmenü mit den Kommandos für die Auswahl.</translation>
    </message>
    <message>
        <source>A right click on a block when the selection includes multiple blocks opens a contextual menu proposing the editing commands for multiple blocks.</source>
        <translation>Ein Klick mit der rechten Maustaste – sofern die Auswahl mehere Blocktypen umfasst – öffnet das Kontextmenü mit den möglichen Kommandos für die ausgewählten Blöcke.</translation>
    </message>
    <message>
        <source>Blocks table</source>
        <translation>Blocktabelle</translation>
    </message>
    <message>
        <source>The blocks table lists, from top to bottom, the present blocks in the thumbnail.</source>
        <translation>Die Liste in der Blocktabelle – von oben nach unten – repräsentiert die Blöcke in der Aufnahme.</translation>
    </message>
    <message>
        <source>The order of the blocks is important! The first block (at the top of the list) is covered by the second block which is even covered by the following block and so on.</source>
        <translation>Die Listung der Blöcke ist insofern wichtig, als der erste Block in der Liste von allen anderen Blöcken verdeckt wird. Der zweite gelistete liegt oberhalb des ersten Blockes und wird von allen nachfolgenden überdeckt, usw….</translation>
    </message>
    <message>
        <source>Blocks are shown on 3 columns:</source>
        <translation>Blöcke werden in drei Spalten gelistet:</translation>
    </message>
    <message>
        <source>The first column contains or: </source>
        <translation>Die erste Spalte zeigt entweder: </translation>
    </message>
    <message>
        <source> If the block is a title.</source>
        <translation> Ob es sich um einen Titelblock handelt.</translation>
    </message>
    <message>
        <source>A thumbnail if the block is an image or a video.</source>
        <translation>Ein Vorschaubild, wenn es sich um ein Bild oder Video handelt.</translation>
    </message>
    <message>
        <source> If the image or the video have a transformation filter.</source>
        <translation> Ob das Bild oder Video einen Umwandlungseffekt oder Filter zugeordnet hat.</translation>
    </message>
    <message>
        <source>The second column contains icons giving the state of the blocks</source>
        <translation>Die zweite Spalte kann mehrere Symbole zeigen, welche den Status des Blockes wiedergeben</translation>
    </message>
    <message>
        <source>The third column indicates: </source>
        <translation>Die dritte Spalte zeigt: </translation>
    </message>
    <message>
        <source>If the block is a title: the text of the block</source>
        <translation>Wenn der Block ein Textblock ist: Den Text, der mit dem Block angezeigt wird</translation>
    </message>
    <message>
        <source>If the block is an image: </source>
        <translation>Wenn der Block ein Bild ist: </translation>
    </message>
    <message>
        <source>The filename.</source>
        <translation>Den Dateinamen.</translation>
    </message>
    <message>
        <source>The width x the height of the image in pixel (the format of the image - the geometry of the image).</source>
        <translation>Die Breite und die Höhe (BxH) des Bildes in Pixel (Das Format des Bildes – die Geometrie des Bildes).</translation>
    </message>
    <message>
        <source>A summary of EXIF information on the image.</source>
        <translation>Eine Zusammenfassung der EXIF-Informationen des Bildes.</translation>
    </message>
    <message>
        <source>If the block is a video: </source>
        <translation>Wenn der Block ein Video ist: </translation>
    </message>
    <message>
        <source>The duration of the video.</source>
        <translation>Die Spieldauer des Videos.</translation>
    </message>
    <message>
        <source>Double clicking on a block opens the block editor associated with the block type (for a text block this will be the text editor, for an image block the reframing dialog, etc.)</source>
        <translation>Ein Doppelklick auf einen Block öffnet den für den Block zuständigen Editor. (Für einen Textblock den Texteditor; für ein Bild den Bildänderungsdialog usw.)</translation>
    </message>
    <message>
        <source>Right clicking on a block when the selection includes only a single block opens a contextual menu proposing the editing commands for a block.</source>
        <translation>Ein Klick mit der rechten Maustaste – sofern die Auswahl einen einzigen Blocktyp beinhaltet – öffnet das Kontextmenü mit den Kommandos für die Auswahl.</translation>
    </message>
    <message>
        <source>Right clicking on a block when the selection includes multiple blocks opens a contextual menu proposing the editing commands for multiple blocks.</source>
        <translation>Ein Klick mit der rechten Maustaste – sofern die Auswahl mehrere Blocktypen umfasst – öffnet das Kontextmenü mit den möglichen Kommandos für die ausgewählten Blöcke.</translation>
    </message>
    <message>
        <source>Blocks with locked properties are shown on a grey bottom.</source>
        <translation>Die Blöcke mit gesperrten Eigenschaften werden in der Liste mit einem grauem Hintergrund dargestellt.</translation>
    </message>
    <message>
        <source>Selected blocks are shown on a red bottom if the focus is on the blocks table or on a blue bottom if the focus is on another element.</source>
        <translation>Gewählte Blöcke werden mit einem roten Hintergrund angezeigt, wenn der Fokus an der Blocktabelle ist oder mit einem blauen Hintergrund, wenn der Fokus auf einem anderem Element liegt.</translation>
    </message>
    <message>
        <source>To change the blocks order, use Drag &amp; Drop or &lt;B&gt;Up&lt;/B&gt; and &lt;B&gt;Down&lt;/B&gt; functions of the contextual menu.</source>
        <translation>Um die Reihenfolge der Blöcke zu ändern, verschieben Sie die Blöcke mit Drag &amp; Drop oder mit den Funktionen &lt;B&gt;Auf&lt;/B&gt; und &lt;B&gt;Ab&lt;/B&gt; Funktionen aus dem Kontextmenü.</translation>
    </message>
    <message>
        <source>It is possible to add files directly in the blocks table by using Drag and Drop with the file explorer.</source>
        <translation>Sie haben die Möglichkeit Dateien in die Blockliste mittels Drag &amp; Drop aus einem Dateiexplorer einzufügen.</translation>
    </message>
    <message>
        <source>All blocks, whether title, image or video, possess a text element.</source>
        <translation>Alle Blöcke – egal ob Textblöcke, Bilder oder Videos – beinhalten ein Textelement.</translation>
    </message>
    <message>
        <source>During the insertion of a new block (Add title, Add file or Paste), the block is inserted: </source>
        <translation>Beim Hinzufügen eines neuen Blockes (Textblock hinzufügen, Datei einfügen oder aus der Zwischenablage einfügen), wird der eingefügte Block : </translation>
    </message>
    <message>
        <source>Always in the last position in the list of blocks (in the foreground)</source>
        <translation>Immer an der letzten Position der Blockliste (somit im Vordergrund) angefügt</translation>
    </message>
    <message>
        <source>Block settings zone</source>
        <translation>Bereich Blockeigenschaften</translation>
    </message>
    <message>
        <source>Coordinates</source>
        <translation>Koordinaten</translation>
    </message>
    <message>
        <source>&lt;B&gt;For image or video blocks: &lt;/B&gt;Allows you to select a reframing style for the image. It has the same effect as selecting a style in the dialog: &lt;a href=&quot;0110.html&quot;&gt;Correct, reframe or cut image or video&lt;/a&gt;.</source>
        <translation>&lt;B&gt;Für Bilder- und Videoblocks:&lt;/B&gt; Ermöglicht die Auswahl einer der Stilvorlagen zur Ausrichtung des Bildes. Dies hat den selben Effekt, wie die Wahl eines Stiles im Dialog &lt;a href=&quot;0110.html&quot;&gt;Beschneiden und Korrigieren von Bildern/Videos&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>&lt;B&gt;For text blocks: &lt;/B&gt;Allows you to select the geometrical constraints to be applied to the block. Three type of constraint are available:</source>
        <translation>&lt;B&gt;Für Textblöcke:&lt;/B&gt; Ermöglicht die Geometrieänderung des Textblockes. Drei mögliche Auswahlen stehen zur Verfügung:</translation>
    </message>
    <message>
        <source>No constraint is applied to the selection rectangle.</source>
        <translation>Entsperren – die Geometrie richtet sich nach dem Auswahlrechteck.</translation>
    </message>
    <message>
        <source>Lock selection rectangle to the actual geometry. It has no meaning until you have defined a shape in &quot;no constraint&quot; mode.</source>
        <translation>Festlegen auf Basis der aktuellen Geometrie. Dies hat solange keine Bedeutung, wieSie eine entsperrte Form auswählen.</translation>
    </message>
    <message>
        <source>Lock selection rectangle to the same geometry as the project, such that, if you place the image in full screen, the reframed part will correspond to the whole screen.</source>
        <translation>Festlegen auf Basis der Projektgeometrie. Somit wird – wenn Sie ein Bild einfügen – der beschnittene Teil in Vollbild dargestellt.</translation>
    </message>
    <message>
        <source>Allows you to select a pre-defined block size</source>
        <translation>Wählen Sie eine vordefinerte Blockgröße</translation>
    </message>
    <message>
        <source>Represents the horizontal offset of the block from the left. This position is defined as a percentage (%) of the total width of the image or in pixels (for a 1080p screen) according to the unit defined in the configuration dialog.</source>
        <translation>Stellt den horizontalen Abstand des Blockes zum linken Rand dar. Diese Position ist entweder als prozentueller Wert (%) der gesamten Breite des Bildes oder in Pixel (für einen 1080p Bildschirm) definiert, je nachdem welche Einstellungen in den Projekteinstellungen vorgenommen wurden.</translation>
    </message>
    <message>
        <source>Represents the vertical offset of the block from the top. This position is defined as a percentage (%) of the total height of the image or in pixels (for a 1080p screen) according to the unit defined in the configuration dialog.</source>
        <translation>Stellt den vertikalen Abstand des Blockes zum oberen Rand dar. Diese Position ist entweder dals prozentueller Wert (%) der gesamten Höhe des Bildes oder in Pixel (für einen 1080p Bildschirm) definiert, je nachdem welche Einstellungen in den Projekteinstellungen vorgenommen wurden.</translation>
    </message>
    <message>
        <source>Represents the width of the block. This value is defined as a percentage (%) of the total width of the image or in pixels (for a 1080p screen) according to the unit defined in the configuration dialog box.</source>
        <translation>Stellt die Breite des Blockes dar. Dieser Wert ist entweder als prozentueller Wert (%) der Breite des Bildes oder in Pixel (für einen 1080p Bildschirm) definiert, je nachdem welche Einstellungen in den Projekteinstellungen vorgenommen wurden.</translation>
    </message>
    <message>
        <source>Represents the height of the block. This value is defined as a percentage (%) of the total height of the image or in pixels (for a 1080p screen) according to the unit defined in the configuration dialog.</source>
        <translation>Stellt die Höhe des Blockes dar. Dieser Wert ist entweder als prozentueller Wert (%) der Höhe des Bildes oder in Pixel (für einen 1080p Bildschirm) definiert, je nachdem welche Einstellungen in den Projekteinstellungen vorgenommen wurden.</translation>
    </message>
    <message>
        <source>Rotation around the Z axis in degrees.</source>
        <translation>Rotieren um die Z-Achse in Grad.</translation>
    </message>
    <message>
        <source>Rotation around the Y axis in degrees.</source>
        <translation>Rotieren um die Y-Achse in Grad.</translation>
    </message>
    <message>
        <source>Rotation around the X axis in degrees.</source>
        <translation>Rotieren um die X-Achse in Grad.</translation>
    </message>
    <message>
        <source>Block shape</source>
        <translation>Form des Blocks</translation>
    </message>
    <message>
        <source>This settings group deals with style management. For more information on style management, see : &lt;a href=&quot;0016.html&quot;&gt;Using style management&lt;/a&gt;</source>
        <translation>Diese Einstellungsgruppe betrifft die Form des Blocks für alle Aufnahmen. Für mehr Informationen über die Verwaltung von Stilen, siehe &lt;a href=&quot;0016.html&quot;&gt;Verwaltung von Stilen&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Shape</source>
        <translation>Rahmen</translation>
    </message>
    <message>
        <source>Allows you to select a shape for the block. The selected shape will be used as:</source>
        <translation>Ermöglicht die Wahl der Form für den Block. Die ausgewählte Form wird verwendet als:</translation>
    </message>
    <message>
        <source>a fusion mask for the images and the videos.</source>
        <translation>Maske für den sichtbaren Teil von Bildern und Videos.</translation>
    </message>
    <message>
        <source>A cutting zone for texts</source>
        <translation>Schnittbereich für Texte</translation>
    </message>
    <message>
        <source>Opacity</source>
        <translation>Deckkraft</translation>
    </message>
    <message>
        <source>Defines the opacity of the block. This value also applies to the text of the block.</source>
        <translation>Legt die Deckkraft eines Blockes fest. Dieser Wert wird auch für den Text eines Blockes verwendet.</translation>
    </message>
    <message>
        <source>Border</source>
        <translation>Umrandung</translation>
    </message>
    <message>
        <source>Thickness of the border</source>
        <translation>Linienstärke der Umrandung</translation>
    </message>
    <message>
        <source>Defines the thickness of the border (This value is defined as 1/1080 of the height of the screen. A value of 10 corresponds to 10 points on a 1920x1080 FullHD screen, but only to 6 points on a 1280x720 screen).</source>
        <translation>Legt die Stärke der Umrandung fest (Dieser Wert definiert 1/1080 der Höhe eins Schirmes. Ein Wert von 10 entspricht 10 Bildpunkten auf einem 1920×1080 Bild, allerdings nur 6 Bildpunkten auf einem 1280×720 Bild).</translation>
    </message>
    <message>
        <source>Border color</source>
        <translation>Farbe der Umrandung</translation>
    </message>
    <message>
        <source>Defines the color of the line to be used to draw the border</source>
        <translation>Legt die Farbe der Umrandungslinie fest</translation>
    </message>
    <message>
        <source>Line type of border</source>
        <translation>Linientype der Umrandung</translation>
    </message>
    <message>
        <source>Defines the type of line (solid, dotted line, etc.)</source>
        <translation>Legt die Art der Linie fest (durchgehend; gestrichelt; gepunktet, etc.)</translation>
    </message>
    <message>
        <source>Shadow</source>
        <translation>Schatten</translation>
    </message>
    <message>
        <source>Shadow position</source>
        <translation>Schattenposition</translation>
    </message>
    <message>
        <source>Defines in which corner the shadow will be positioned (Note: the position of the shadow is independent of rotation of the block: the right lower corner is always the right lower corner, whatever rotation is applied).</source>
        <translation>Legt fest, in welcher Ecke des Blockes der Schatten angezeigt wird. (Anm.: Die Position des Schattens ist unabhängig von der Rotation eines Blockes. rechts unten ist immer rechts unten aus der Sicht des Blockes – egal in welche Richtung die Rotation festgelegt wurde).</translation>
    </message>
    <message>
        <source>Distance of the shadow</source>
        <translation>Abstand des Schattens</translation>
    </message>
    <message>
        <source>Defines the distance between the block and its shadow</source>
        <translation>Legt den Abstand zwischen dem Block und seinem Schatten fest</translation>
    </message>
    <message>
        <source>Color</source>
        <translation>Farbe</translation>
    </message>
    <message>
        <source>Sets the color used to draw the shadow</source>
        <translation>Schattenfarbe</translation>
    </message>
    <message>
        <source>See also</source>
        <translation>Siehe auch</translation>
    </message>
    <message>
        <source>Description of EXIF - Exchangeable image file format</source>
        <translation>Beschreibung von EXIF -Exchangeable Image file format </translation>
    </message>
    <message>
        <source>On the left: The &lt;a href=&quot;#InteractiveZone&quot;&gt;Interactive&lt;/a&gt; zone allows you to graphically modify the blocks.</source>
        <translation>Auf der linken Seite: Der &lt;a href=&quot;#interactiveZone&quot;&gt;Interaktive&lt;/a&gt; Bereich ermöglicht das einfache und grafische Ändern von Blöcken.</translation>
    </message>
</context>
<context>
    <name>0118</name>
    <message>
        <source>Set first shot duration for a set of slides</source>
        <translation>Setzen der Laufzeit für die erste Aufnahme für eine Reihe von Dias</translation>
    </message>
    <message>
        <source>First shot duration</source>
        <translation>Laufzeit für erste Aufnahme</translation>
    </message>
    <message>
        <source>Define the duration of the first shot.</source>
        <translation>Legt die Laufzeit für die erste Aufnahme fest.</translation>
    </message>
    <message>
        <source>When you click the OK button, the new duration is applied to all the slides that were selected. </source>
        <translation>Wenn Sie auf OK klicken, wird die neue Laufzeit allen Dias zugewiesen, die gerade ausgewählt sind.</translation>
    </message>
    <message>
        <source>This new duration affects only the first shot of each slide</source>
        <translation>Die neue Laufzeit wirkt sich nur auf die erste Aufnahme in einem Dia aus</translation>
    </message>
    <message>
        <source>This new duration is applied only to standard slides. The predefined title slides are not impacted.</source>
        <translation>Diese neue Laufzeit wirkt sich nur auf Standarddias aus. Eventuelle vordefinierte Titel sind davon nicht betroffen.</translation>
    </message>
    <message>
        <source>This dialog allows you to define the duration of the fist shot of a set of slides:</source>
        <translation>Der Dialog ermöglicht die Festlegung der Laufzeit für die erste Aufnahme eines Dias:</translation>
    </message>
</context>
<context>
    <name>0119</name>
    <message>
        <source>Slide properties</source>
        <translation>Diaeigenschaften</translation>
    </message>
    <message>
        <source>On the top: The &lt;a href=&quot;#Toolbar&quot;&gt;Toolbar&lt;/a&gt; allows to launch the main slide editing commands, and the &lt;a href=&quot;#ShotSettings&quot;&gt;Shot settings&lt;/a&gt; zone.</source>
        <translation>Im oberem Teil: Die &lt;a href=&quot;#Toolbar&quot;&gt;Werkzeugleiste&lt;/a&gt; bietet schnellen Zugriff auf die wichtigsten Kommandos zur Bearbeitung sowie zum Bereich &lt;a href=&quot;#ShotSettings&quot;&gt;Aufnahmeeinstellungen&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>On the left: The &lt;a href=&quot;#SlideSettings&quot;&gt;Slide settings zone&lt;/a&gt;, the &lt;a href=&quot;#ShotsTable&quot;&gt;Shots table&lt;/a&gt; and the &lt;a href=&quot;#InteractiveZone&quot;&gt;Interactive&lt;/a&gt; zones.</source>
        <translation>Auf der linken Seite: Der Bereich &lt;a href=&quot;#SlideSettings&quot;&gt;Aufnahmeeinstellungen&lt;/a&gt;, die &lt;a href=&quot;#ShotsTable&quot;&gt;Tabelle der Aufnahmen&lt;/a&gt; sowie der &lt;a href=&quot;#InteractiveZone&quot;&gt;Interaktive Bereich&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>On the right: The &lt;a href=&quot;#BlockTable&quot;&gt;Blocks table&lt;/a&gt; and the &lt;a href=&quot;#BlockSettings&quot;&gt;Block settings&lt;/a&gt; zones.</source>
        <translation>Auf der rechten Seite: Der Bereich &lt;a href=&quot;#BlockTable&quot;&gt;Blocktabelle&lt;/a&gt; und der Bereich &lt;a href=&quot;#BlockSettings&quot;&gt;Blockeinstellungen&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Toolbar</source>
        <translation>Werkzeugleiste</translation>
    </message>
    <message>
        <source> The toolbar allows to launch the main slide editing commands. </source>
        <translation>Die Werkzeugleiste ermöglicht das Aufrufen der wichtigsten Kommandos zum Verändern eines Dia.</translation>
    </message>
    <message>
        <source>Append a shot to the end of the shot table</source>
        <translation>Hinzufügen einer Aufnahme an das Ende der Aufnahmentabelle</translation>
    </message>
    <message>
        <source>Remove current selected shot</source>
        <translation>Entfernen der aktuellen Aufnahme</translation>
    </message>
    <message>
        <source>Change the order of the shots by moving the current selected shot a step to the left</source>
        <translation>Die aktuelle Aufnahme um einen Platz nach links schieben</translation>
    </message>
    <message>
        <source>Change the order of the shots by moving the current selected shot a step to the right</source>
        <translation>Die aktuelle Aufnahme um einen Platz nach rechts schieben</translation>
    </message>
    <message>
        <source>Copy the current block to the ffDiaporama clipboard and remove it from the slide. The copy is made with the block parameters defined for the current selected shot.</source>
        <translation>Kopieren des aktuellen Blockes in die ffDiaporama Zwischenablage und Entfernen vom Dia. Die Kopie erhält die Blockparameter von der aktuell ausgewählten Aufnahme.</translation>
    </message>
    <message>
        <source>Copy the current block to the ffDiaporama clipboard. The copy is made with the block parameters defined for the current selected shot.</source>
        <translation>Kopieren des aktuellen Blockes in die ffDiaporama Zwischenablage. Die Kopie erhält die Blockparameter von der aktuell ausgewählten Aufnahme.</translation>
    </message>
    <message>
        <source>Remove the current block</source>
        <translation>Entfernen des aktuellen Blockes</translation>
    </message>
    <message>
        <source>Change the order of blocks by moving the active block upward (towards the background)</source>
        <translation>Den aktuellen Block um eine Ebene absenken und in Richtung Hintergrund schieben</translation>
    </message>
    <message>
        <source>Change the order of blocks by moving the active block downward (towards the foreground)</source>
        <translation>Den aktuellen Block um eine Ebene anheben und in Richtung Vordergrund schieben</translation>
    </message>
    <message>
        <source>Make the active block visible or hidden. Note: Hidden video blocks are automatically paused</source>
        <translation>Den aktuellen Block sichtbar machen oder verstecken. Anmerkung : Versteckte Videoblöcke werden automatisch pausiert</translation>
    </message>
    <message>
        <source>Play the sound, during this shot, of the selected video block. (This button is active only for videos.)</source>
        <translation>Verwende – während dieser Aufnahme – die Tonspur aus dem aktuellen Videoblock. (Anmerkung : Dieser Knopf ist nur bei Videos aktiv.)</translation>
    </message>
    <message>
        <source>Open the &lt;a href=&quot;0120.html&quot;&gt;Edit text block dialog&lt;/a&gt;.</source>
        <translation>Öffnen des Dialogs &lt;a href=&quot;0120.html&quot;&gt;Textblock ändern&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Open the &lt;a href=&quot;0110.html&quot;&gt;Image framing and correction dialog&lt;/a&gt;. This button is active only for objects containing images or videos.</source>
        <translation>Öffnen des Dialogs &lt;a href=&quot;0110.html&quot;&gt;Bild beschneiden und korrigieren&lt;/a&gt;. Anmerkung : Dieser Knopf ist nur für Bilder und Videos aktiv.</translation>
    </message>
    <message>
        <source>Display information on active block. (Remark: This function is available only for &quot;image&quot; or &quot;video&quot; blocks.)</source>
        <translation>Anzeige der Informationen des aktiven Blocks. (Anmerkung : Dieser Knopf ist nur für Bilder und Videos aktiv.)</translation>
    </message>
    <message>
        <source>Align to top</source>
        <translation>Ausrichten nach Oberkante</translation>
    </message>
    <message>
        <source>Align to midle</source>
        <translation>Horizontal mittig ausrichten</translation>
    </message>
    <message>
        <source>Align to bottom</source>
        <translation>Ausrichten nach Unterkante</translation>
    </message>
    <message>
        <source>Align to left</source>
        <translation>Ausrichten nach links</translation>
    </message>
    <message>
        <source>Align to center</source>
        <translation>Vertikal mittig ausrichten</translation>
    </message>
    <message>
        <source>Align to right</source>
        <translation>Ausrichten nach rechts</translation>
    </message>
    <message>
        <source>Distribute horizontally</source>
        <translation>Horizontal verteilen</translation>
    </message>
    <message>
        <source>Distribute vertically</source>
        <translation>Vertikal verteilen</translation>
    </message>
    <message>
        <source>Slide settings zone</source>
        <translation>Bereich Diaeigenschaften</translation>
    </message>
    <message>
        <source>Name of the slide</source>
        <translation>Name des Dias</translation>
    </message>
    <message>
        <source>Indicate here a name for the slide. It is this name which will appear on the thumbnail in the main window timeline.</source>
        <translation>Geben Sie hier den Namen des Dias an. Dieser wird im Vorschaubild der Zeitleiste des Hauptfensters angezeigt.</translation>
    </message>
    <message>
        <source>Total slide duration</source>
        <translation>Gesamte Laufzeit des Dias</translation>
    </message>
    <message>
        <source>The total slide duration is displayed here. This duration takes into account possible adjustments for minimal duration of the shot as described above.</source>
        <translation>Die gesamte Laufzeit des Dias wird hier angezeigt. Die Laufzeit nimmt Rücksicht auf mögliche Anpassungen der minimalen Laufzeit eines Dias (wie weiter oben beschrieben).</translation>
    </message>
    <message>
        <source>Shots table</source>
        <translation>Aufnahmentabelle</translation>
    </message>
    <message>
        <source> The shots table shows the shots as thumbnails, in the order in which they will be played (from left to right). </source>
        <translation> Die Aufnahmentabelle zeigt die einzelnen Aufnahmen als Vorschaubilder in der Reihenfolge in der sie abgespielt werden (von links nach rechts).</translation>
    </message>
    <message>
        <source>For each shot, the thumbnail shows: </source>
        <translation>Für jede Aufnahme zeigt das Vorschaubild:</translation>
    </message>
    <message>
        <source>The shot duration (At the top of the thumbnail)</source>
        <translation>Die Laufzeit der Aufnahme (Oben im Vorschaubild)</translation>
    </message>
    <message>
        <source>The temporal position of the shot at the end of its duration (At the bottom right of the thumbnail)</source>
        <translation>Die zeitliche Position der Aufnahme am Ende seiner Laufzeit (am unteren Rand des Vorschaubildes)</translation>
    </message>
    <message>
        <source>An image representing the shot at the end of its duration</source>
        <translation>Ein Vorschaubild, das dem Bild am Ende der Laufzeit entspricht</translation>
    </message>
    <message>
        <source>Remark:</source>
        <translation>Anmerkung:</translation>
    </message>
    <message>
        <source>The order of the shots can be changed by using Drag &amp; Drop.</source>
        <translation>Die Reihenfolge der Aufnahmen kann auch per Drag &amp; Drop verändert werden.</translation>
    </message>
    <message>
        <source>Shot settings zone</source>
        <translation>Bereich für Einstellungen der Aufnahme</translation>
    </message>
    <message>
        <source>Shot duration</source>
        <translation>Laufzeit der Aufnahme</translation>
    </message>
    <message>
        <source> Indicate here the duration of the currently selected shot. For the last shot of the slide, there is a minimum duration.The following rules are used to calculate the minimum duration of the shot: </source>
        <translation>Zeigt die Laufzeit der aktuellen Aufnahme. Für die letzte Aufnahme des Dias, gilt eine minimale Laufzeit. Die folgenden Regeln werden zur Berechnung der minimalen Laufzeit verwendet:</translation>
    </message>
    <message>
        <source>The total slide duration cannot be lower than the sum of the durations of the entering transition of the slide plus that of the transition to the following slide</source>
        <translation>Die gesamte Laufzeit kann nicht geringer sein, als die Summe des Eingangseffektes addiert mit der Laufzeit des Übergangeffektes des folgenden Dias</translation>
    </message>
    <message>
        <source>The total slide duration must permit complete play of the longest video sequence (time of breaks is taken into account)</source>
        <translation>Die gesamte Laufzeit muss übereinstimmen mit dem kompletten Abspielen der längsten Videosequenz (die Zeit von Unterbrechungen mit berücksichtigt)</translation>
    </message>
    <message>
        <source>The total slide duration cannot be lower than 1:30 second</source>
        <translation>Die gesamte Laufzeit des Dia darf nicht unter 1:30 Sekunden sein</translation>
    </message>
    <message>
        <source>If you specify a duration lower than the minimum calculated duration for the shot, it is this minimum duration that will be used in place of the value which you specified.</source>
        <translation>Wenn Sie eine Laufzeit wählen, die geringer als das berechnete Minimum der Aufnahme ist, so wird dieses Minimum anstelle des gewählten verwendet.</translation>
    </message>
    <message>
        <source>Interactive zone</source>
        <translation>Interaktiver Bereich</translation>
    </message>
    <message>
        <source> The interactive zone allows you to move and interactively re-size blocks within the selected shot. </source>
        <translation> Der interaktive Bereich erlaubt Ihnen, die Blöcke der aktuellen Aufnahme zu verschieben und diese interaktiv zu vergrössern.</translation>
    </message>
    <message>
        <source>Selected blocks are shown with a frame. (It allows to differentiate them from other graphic elements of the slide).</source>
        <translation>Markierte Blöcke werden mit einem Rahmen dargestellt. Das ermöglicht es, diese von anderen Elementen des Dias zu unterscheiden.</translation>
    </message>
    <message>
        <source>Control handles (small square) are shown on sides and on corners of the selection frame.</source>
        <translation>Kontrollpunkte (kleine Quadrate) an den Ecken und an den Längsseiten erlauben die genaue Manipulation des Blockes.</translation>
    </message>
    <message>
        <source>Rulers are displayed to facilitate the work with the mouse. See &lt;a href=&quot;0116.html&quot;&gt;Rulers settings&lt;/a&gt;</source>
        <translation>Lineale werden angezeigt, um ein leichteres Positionieren mit der Maus zu ermöglichen. Siehe &lt;a href=&quot;0116.html&quot;&gt;Linealeinstellungen&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Using the mouse:</source>
        <translation>Mit der Maus:</translation>
    </message>
    <message>
        <source>To select a block: click the block</source>
        <translation>Um den gewünschten Block auszuwählen: Den Block mit der linken Maustaste anklicken</translation>
    </message>
    <message>
        <source>To select multiple blocks: Select a first block by clicking on it and then, by clicking on the other blocks to be selected with pressing either the SHIFT or the CTRL key.</source>
        <translation>Um mehrere Blöcke auszuwählen : Wählen Sie den ersten Block durch Anklicken und halten Sie die SHIFT- oder STRG-Taste, während Sie die weiteren Blöcke anklicken.</translation>
    </message>
    <message>
        <source>To select a block under another block : Click the block to be selected by pushing both SHIFT and CTRL keys.</source>
        <translation>Um einen Block zu wählen, der unter einem anderem Block liegt: Klicken Sie auf den Block, während Sie die SHIFT- und die STRG-Taste gedrückt halten.</translation>
    </message>
    <message>
        <source>To unselect a block in a multiple selection: Click the block with pressing either the SHIFT or the CTRL key.</source>
        <translation>Um einen gewählten Block abzuwählen: Klicken Sie erneut auf den Block, während Sie die SHIFT- oder die STRG-Taste halten.</translation>
    </message>
    <message>
        <source>To modify the size of the blocks of the selection: Click one of the handles of the selection and, while keeping the button of the mouse pressed, move the mouse.</source>
        <translation>Um die Größe der gewählten Blöcke zu verändern: Klicken Sie einen der Kontrollpunkte an und während Sie die Maustaste gedrückt halten, verschieben Sie den Kontrollpunkt bis die gewünschte Größe erreicht ist.</translation>
    </message>
    <message>
        <source>To move the blocks of the selection: Click one of the blocks of the selection and, while keeping the button of the mouse pressed, move the mouse.</source>
        <translation>Um einen Block zu verschieben. Klicken Sie auf einen der markierten Blöcke und halten Sie die Maustaste gedrückt. Wenn Sie die Maus nun bewegen, ändert der gesamte Block seine Position. Lassen Sie die Maustaste los, wenn die gewünschte Position erreicht ist.</translation>
    </message>
    <message>
        <source>Using the keyboard:</source>
        <translation>Mit der Tastatur:</translation>
    </message>
    <message>
        <source>To move the blocks of the selection, use the arrow keys.</source>
        <translation>Um einen Block zu verschieben verwenden Sie die Pfeiltasten.</translation>
    </message>
    <message>
        <source>To change the size of the blocks of the selection, use SHIFT+arrows to move the upper left corner handle or CTRL+arrows to move the lower right corner handle.</source>
        <translation>Um die Größe des Blockes zu verändern, drücken Sie  für die Verschiebung des linken oberen Kontrollpunktes die SHIFT-Taste in Verbindung mit den Pfeiltasten. Für die Verschiebung des rechten unteren Kontrollpunktes drücken Sie die STRG-Taste in Verbindung mit den Pfeiltasten.</translation>
    </message>
    <message>
        <source>Remarks:</source>
        <translation>Anmerkung:</translation>
    </message>
    <message>
        <source>A double click on a block opens the block editor associated with the block type (for a text block this will be the text editor, for an image block the reframing dialog, etc.)</source>
        <translation>Ein Doppelklick auf einen Block öffnet den für den Block zuständigen Editor. (Für einen Textblock den Texteditor; für ein Bild den Bildänderungsdialog usw.) </translation>
    </message>
    <message>
        <source>A right click on a block when the selection includes only a single block opens a contextual menu proposing the editing commands for a block.</source>
        <translation>Ein Klick mit der rechten Maustaste – sofern die Auswahl einen einzigen Blocktype beinhaltet – öffnet das Kontextmenü mit den Kommandos für die Auswahl.</translation>
    </message>
    <message>
        <source>A right click on a block when the selection includes multiple blocks opens a contextual menu proposing the editing commands for multiple blocks.</source>
        <translation>Ein Klick mit der rechten Maustaste – sofern die Auswahl mehrere Blocktypen umfasst – öffnet das Kontextmenü mit den möglichen Kommandos für die ausgewählten Blöcke.</translation>
    </message>
    <message>
        <source>Blocks table</source>
        <translation>Blocktabelle</translation>
    </message>
    <message>
        <source>The blocks table lists, from top to bottom, the present blocks in the slide.</source>
        <translation>Dier Blocktabelle listet – von oben nach unten – die Blöcke in der Aufnahme.</translation>
    </message>
    <message>
        <source>The order of the blocks is important! The first block (at the top of the list) is covered by the second block which is even covered by the following block and so on.</source>
        <translation>Die Listung der Blöcke ist insofern wichtig, als der erste Block in der Liste von allen anderen Blöcke verdeckt wird. Der zweite gelistete liegt oberhalb des ersten Blockes und wird von allen nachfolgenden überdeckt, usw….</translation>
    </message>
    <message>
        <source>The order of the blocks is defined shot by shot.</source>
        <translation>Die Reihenfolge der Blöcke wird von Aufnahme zu Aufnahme definiert.</translation>
    </message>
    <message>
        <source>Blocks are shown on 3 columns:</source>
        <translation>Blöcke werden in drei Spalten gelistet:</translation>
    </message>
    <message>
        <source>The first column contains or: </source>
        <translation>Die erste Spalte zeigt entweder: </translation>
    </message>
    <message>
        <source> If the block is a title.</source>
        <translation> Ob es sich um einen Titelblock handelt.</translation>
    </message>
    <message>
        <source>A thumbnail if the block is an image or a video.</source>
        <translation>Ein Vorschaubild, wenn es sich um ein Bild oder Video handelt.</translation>
    </message>
    <message>
        <source> If the image or the video have a transformation filter.</source>
        <translation> Ob das Bild oder Video einen Umwandlungseffekt oder Filter zugeordnet hat.</translation>
    </message>
    <message>
        <source>The second column contains icons giving the state of the blocks for the current shot: </source>
        <translation>Die zweite Spalte kann mehrere Symbole zeigen, welche den Status des Blockes widergeben:</translation>
    </message>
    <message>
        <source> If the video has the sound during this shot. This information appears only for the video blocks.</source>
        <translation> Wird gezeigt, wenn das Video eine Tonspur während dieser Aufnahme hat. Diese Information wird nur für Videoblöcke angezeigt.</translation>
    </message>
    <message>
        <source> If the block is visible during this shot.</source>
        <translation> Wird gezeigt, wenn der Block in dieser Aufnahme sichtbar ist.</translation>
    </message>
    <message>
        <source> If the block is hidden during this shot.</source>
        <translation> Wird gezeigt, wenn der Block in dieser Aufnahme nicht sichtbar ist.</translation>
    </message>
    <message>
        <source>The third column indicates: </source>
        <translation>Die dritte Spalte zeigt: </translation>
    </message>
    <message>
        <source>If the block is a title: the text of the block</source>
        <translation>Wenn der Block ein Textblock ist: Den Text der mit dem Block angezeigt wird</translation>
    </message>
    <message>
        <source>If the block is an image: </source>
        <translation>Wenn der Block ein Bild ist: </translation>
    </message>
    <message>
        <source>The filename.</source>
        <translation>Den Dateinamen.</translation>
    </message>
    <message>
        <source>The width x the height of the image in pixel (the format of the image - the geometry of the image).</source>
        <translation>Die Breite und die Höhe (BxH) des Bildes in Pixel (Das Format des Bildes – die Geometrie des Bildes).</translation>
    </message>
    <message>
        <source>A summary of EXIF information on the image.</source>
        <translation>Eine Zusammenfassung der EXIF-Informationen des Bildes.</translation>
    </message>
    <message>
        <source>If the block is a video: </source>
        <translation>Wenn der Block ein Video ist: </translation>
    </message>
    <message>
        <source>The duration of the video.</source>
        <translation>Die Spieldauer des Videos.</translation>
    </message>
    <message>
        <source>Double clicking on a block opens the block editor associated with the block type (for a text block this will be the text editor, for an image block the reframing dialog, etc.)</source>
        <translation>Ein Doppelklick auf einen Block öffnet den für den Block zuständigen Editor. (Für einen Textblock den Texteditor; für ein Bild den Bildänderungsdialog usw.)</translation>
    </message>
    <message>
        <source>Right clicking on a block when the selection includes only a single block opens a contextual menu proposing the editing commands for a block.</source>
        <translation>Ein Klick mit der rechten Maustaste – sofern die Auswahl einen einzigen Blocktype beinhaltet – öffnet das Kontextmenü mit den Kommandos für die Auswahl.</translation>
    </message>
    <message>
        <source>Right clicking on a block when the selection includes multiple blocks opens a contextual menu proposing the editing commands for multiple blocks.</source>
        <translation>Ein Klick mit der rechten Maustaste – sofern die Auswahl mehrere Blocktypen umfasst – öffnet das Kontextmenü mit den möglichen Kommandos für die ausgewählten Blöcke.</translation>
    </message>
    <message>
        <source>Blocks with locked properties are shown on a grey bottom.</source>
        <translation>Die Blöcke mit gesperrten Eigenschaften werden in der Liste mit einem grauem Hintergrund dargestellt.</translation>
    </message>
    <message>
        <source>Selected blocks are shown on a red bottom if the focus is on the blocks table or on a blue bottom if the focus is on another element.</source>
        <translation>Dier gewählten Blöcke wird mit einem roten Hintergrund angezeigt, wenn der Fokus an der Blocktabelle ist oder mit einem blauen Hintergrund, wenn der Fokus auf einem anderem Element liegt.</translation>
    </message>
    <message>
        <source>To change the blocks order, use Drag &amp; Drop or &lt;B&gt;Up&lt;/B&gt; and &lt;B&gt;Down&lt;/B&gt; functions of the contextual menu.</source>
        <translation>Um die Reihenfolge der Blöcke zu ändern, verschieben Sie die Blöcke mit Drag &amp; Drop oder mit den Funktionen &lt;B&gt;Auf&lt;/B&gt; und &lt;B&gt;Ab&lt;/B&gt; aus dem Kontextmenü.</translation>
    </message>
    <message>
        <source>It is possible to add files directly in the blocks table by using Drag and Drop with the file explorer.</source>
        <translation>Sie haben die Möglichkeit, Dateien in die Blockliste mittels Drag &amp; Drop aus einem Dateiexplorer einzufügen.</translation>
    </message>
    <message>
        <source>All blocks, whether title, image or video, possess a text element.</source>
        <translation>Alle Blöcke – egal ob Textblöcke, Bilder oder Videos – beinhalten ein Textelement.</translation>
    </message>
    <message>
        <source>During the insertion of a new block (Add title, Add file or Paste), the block is inserted: </source>
        <translation>Beim Hinzufüges eines neuen Blockes (Textblock hinzufügen, Datei einfügen oder aus der Zwischenablage einfügen), wird der eingefügte Block : </translation>
    </message>
    <message>
        <source>In visible mode for the current shot and for all the following shots</source>
        <translation>Im sichtbaren Modus für die aktuelle Aufnahme und alle folgenden</translation>
    </message>
    <message>
        <source>In hidden mode for the shots located before the current shot</source>
        <translation>Im versteckten Modus für alle davor liegenden Aufnahmen</translation>
    </message>
    <message>
        <source>Always in the last position in the list of blocks (in the foreground)</source>
        <translation>Immer an der letzten Position der Blockliste (somit im Vordergrund) angefügt</translation>
    </message>
    <message>
        <source>Block settings zone</source>
        <translation>Bereich Blockeigenschaften</translation>
    </message>
    <message>
        <source>Coordinates</source>
        <translation>Koordinaten</translation>
    </message>
    <message>
        <source>This settings group defines the coordinates of the block for the current shot, so, the modifications made to the following properties will apply only to current shot. To understand the differences between the properties which apply to all shots and those which apply only to the current shot, consult: &lt;a href=&quot;0010.html&quot;&gt;How ffDiaporama works&lt;/a&gt;.</source>
        <translation>Diese Gruppe beinhaltet die Koordinaten des Blockes der aktuellen Aufnahme. Die Eigenschaften, die hier verändert werden, wirken sich nur auf die aktuellen Aufnahme aus. Um den Unterschied zwischen Eigenschaften, die sich auf alle Aufnahmen auswirken und jenen, die sich nur auf die aktuelle Aufnahme auswirken, lesen Sie : &lt;a href=&quot;0010.html&quot;&gt;Wie ffDiaporama funktioniert&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>&lt;B&gt;For image or video blocks: &lt;/B&gt;Allows you to select a reframing style for the image. It has the same effect as selecting a style in the dialog: &lt;a href=&quot;0110.html&quot;&gt;Correct, reframe or cut image or video&lt;/a&gt;.</source>
        <translation>&lt;B&gt;Für Bilder- und Videoblocks:&lt;/B&gt; Ermöglicht die Auswahl einer der Stilvorlagen zur Ausrichtung des Bildes. Dies hat den selben Effekt, wie die Wahl eines Stiles im Dialog &lt;a href=&quot;0110.html&quot;&gt;Beschneiden und Korrigieren von Bildern/Videos&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>&lt;B&gt;For text blocks: &lt;/B&gt;Allows you to select the geometrical constraints to be applied to the block. Three type of constraint are available:</source>
        <translation>&lt;B&gt;Für Textblöcke:&lt;/B&gt; Ermöglicht die Geometrieänderung des Textblockes. Drei mögliche Auswahlen stehen zur Verfügung:</translation>
    </message>
    <message>
        <source>No constraint is applied to the selection rectangle.</source>
        <translation>Entsperren – die Geometrie richtet sich nach dem Auswahlrechteck.</translation>
    </message>
    <message>
        <source>Lock selection rectangle to the actual geometry. It has no meaning until you have defined a shape in &quot;no constraint&quot; mode.</source>
        <translation>Festlegen auf Basis der aktuellen Geometrie. Dies hat solange keine Bedeutung, wieSie eine entsperrte Form auswählen.</translation>
    </message>
    <message>
        <source>Lock selection rectangle to the same geometry as the project, such that, if you place the image in full screen, the reframed part will correspond to the whole screen.</source>
        <translation>Festlegen auf Basis der Projektgeometrie. Somit wird – wenn Sie ein Bild einfügen – der beschnittene Teil in Vollbild dargestellt.</translation>
    </message>
    <message>
        <source>Allows you to select a pre-defined block size</source>
        <translation>Wählen Sie eine vordefinerte Blockgröße</translation>
    </message>
    <message>
        <source>Represents the horizontal offset of the block from the left. This position is defined as a percentage (%) of the total width of the image or in pixels (for a 1080p screen) according to the unit defined in the configuration dialog.</source>
        <translation>Stellt den horizontalen Abstand des Blockes zum linken Rand dar. Diese Position ist entweder als prozentueller Wert (%) der gesamten Breite des Bildes oder in Pixel (für einen 1080p Bildschirm) definiert, je nachdem welche Einstellungen in den Projekteinstellungen vorgenommen wurden.</translation>
    </message>
    <message>
        <source>Represents the vertical offset of the block from the top. This position is defined as a percentage (%) of the total height of the image or in pixels (for a 1080p screen) according to the unit defined in the configuration dialog.</source>
        <translation>Stellt den vertikalen Abstand des Blockes zum oberen Rand dar. Diese Position ist entweder als prozentueller Wert (%) der gesamten Höhe des Bildes oder in Pixel (für einen 1080p Bildschirm) definiert, je nachdem welche Einstellungen in den Projekteinstellungen vorgenommen wurden.</translation>
    </message>
    <message>
        <source>Represents the width of the block. This value is defined as a percentage (%) of the total width of the image or in pixels (for a 1080p screen) according to the unit defined in the configuration dialog box.</source>
        <translation>Stellt die Breite des Blockes dar. Dieser Wert ist entweder als prozentueller Wert (%) der Breite des Bildes oder in Pixel (für einen 1080p Bildschirm) definiert, je nachdem welche Einstellungen in den Projekteinstellungen vorgenommen wurden.</translation>
    </message>
    <message>
        <source>Represents the height of the block. This value is defined as a percentage (%) of the total height of the image or in pixels (for a 1080p screen) according to the unit defined in the configuration dialog.</source>
        <translation>Stellt die Höhe des Blockes dar. Dieser Wert ist entweder als prozentueller Wert (%) der Höhe des Bildes oder in Pixel (für einen 1080p Bildschirm) definiert, je nachdem welche Einstellungen in den Projekteinstellungen vorgenommen wurden.</translation>
    </message>
    <message>
        <source>Rotation around the Z axis in degrees.</source>
        <translation>Rotieren um die Z-Achse in Grad.</translation>
    </message>
    <message>
        <source>Rotation around the Y axis in degrees.</source>
        <translation>Rotieren um die Y-Achse in Grad.</translation>
    </message>
    <message>
        <source>Rotation around the X axis in degrees.</source>
        <translation>Rotieren um die X-Achse in Grad.</translation>
    </message>
    <message>
        <source>Block shape</source>
        <translation>Form des Blocks</translation>
    </message>
    <message>
        <source> This settings group defines the shape of the block for all shots, so, modification of the following properties will apply to all shots in the slide. To understand the differences between the properties which apply to all shots and those which apply only to the current shot, consult: &lt;a href=&quot;0010.html&quot;&gt;How ffDiaporama works&lt;/a&gt;. </source>
        <translation> Diese Einstellungsgruppe betrifft die Form des Blocks für alle Aufnahmen. Änderung dieser Werte werden auf alle Aufnahmen im Dia angewendet. Um den Unterschied zwischen den Eigenschaften, die auf alle Aufnahmen angewandt werden und solchen, die sich nur auf die aktuelle Aufnahme auswirken, lesen Sie &lt;a href=&quot;0010.html&quot;&gt;Wie ffDiaporama arbeitet&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Shape</source>
        <translation>Rahmen</translation>
    </message>
    <message>
        <source>Allows you to select a shape for the block. The selected shape will be used as:</source>
        <translation>Ermöglicht die Wahl der Form für den Block. Die ausgewählte Form wird verwendet als:</translation>
    </message>
    <message>
        <source>a fusion mask for the images and the videos.</source>
        <translation>Maske für den sichtbaren Teil von Bildern und Videos.</translation>
    </message>
    <message>
        <source>A cutting zone for texts</source>
        <translation>Schnittbereich für Texte</translation>
    </message>
    <message>
        <source>Opacity</source>
        <translation>Deckkraft</translation>
    </message>
    <message>
        <source>Defines the opacity of the block. This value also applies to the text of the block.</source>
        <translation>Legt die Deckkraft eines Blockes fest. Dieser Wert wird auch für den Text eines Blockes verwendet.</translation>
    </message>
    <message>
        <source>Border</source>
        <translation>Umrandung</translation>
    </message>
    <message>
        <source>Thickness of the border</source>
        <translation>Linienstärke der Umrandung</translation>
    </message>
    <message>
        <source>Defines the thickness of the border (This value is defined as 1/1080 of the height of the screen. A value of 10 corresponds to 10 points on a 1920x1080 FullHD screen, but only to 6 points on a 1280x720 screen).</source>
        <translation>Legt die Stärke der Umrandungs fest (Dieser Wert definiert 1/1080 der Höhe eins Schirmes. Ein Wert von 10 entspricht 10 Bildpunkten auf einem 1920×1080 Bild, allerdings nur 6 Bildpunkten auf einem 1280×720 Bild).</translation>
    </message>
    <message>
        <source>Border color</source>
        <translation>Farbe der Umrandung</translation>
    </message>
    <message>
        <source>Defines the color of the line to be used to draw the border</source>
        <translation>Legt die Farbe der Umrandungslinie fest</translation>
    </message>
    <message>
        <source>Line type of border</source>
        <translation>Linientype der Umrandung</translation>
    </message>
    <message>
        <source>Defines the type of line (solid, dotted line, etc.)</source>
        <translation>Legt die Art der Linie fest (durchgehend; gestrichelt; gepunktet, etc.)</translation>
    </message>
    <message>
        <source>Shadow</source>
        <translation>Schatten</translation>
    </message>
    <message>
        <source>Shadow position</source>
        <translation>Schattenposition</translation>
    </message>
    <message>
        <source>Defines in which corner the shadow will be positioned (Note: the position of the shadow is independent of rotation of the block: the right lower corner is always the right lower corner, whatever rotation is applied).</source>
        <translation>Legt fest, in welcher Ecke des Blockes der Schatten angezeigt wird. (Anm.: Die Position des Schattens ist unabhängig von der Rotation eines Blockes. rechts unten ist immer rechts unten aus der Sicht des Blockes – egal in welche Richtung die Rotation festgelegt wurde).</translation>
    </message>
    <message>
        <source>Distance of the shadow</source>
        <translation>Abstand des Schattens</translation>
    </message>
    <message>
        <source>Defines the distance between the block and its shadow</source>
        <translation>Legt den Abstand zwischen dem Block und seinem Schatten fest</translation>
    </message>
    <message>
        <source>Color</source>
        <translation>Farbe</translation>
    </message>
    <message>
        <source>Sets the color used to draw the shadow</source>
        <translation>Schattenfarbe</translation>
    </message>
    <message>
        <source>Animation option</source>
        <translation>Blockanimation</translation>
    </message>
    <message>
        <source>Speed wave</source>
        <translation>Anstiegskurve</translation>
    </message>
    <message>
        <source>Text annimation</source>
        <translation>Textanimation</translation>
    </message>
    <message>
        <source>Zoom</source>
        <translation>Zoom</translation>
    </message>
    <message>
        <source>Defines a level of zoom for the text</source>
        <translation>Legt den Zoomwert für diesen Text fest</translation>
    </message>
    <message>
        <source>Defines the horizontal position of the text inside the block</source>
        <translation>Legt die horizontale Position des Textes innerhalb des Blockes fest</translation>
    </message>
    <message>
        <source>Defines the vertical position of the text inside the block</source>
        <translation>Legt die vertikale Position des Textes innerhalb des Blockes fest</translation>
    </message>
    <message>
        <source>Remarks: </source>
        <translation>Anmerkung:</translation>
    </message>
    <message>
        <source>To make animations of text, you have to create at least 2 shots then:</source>
        <translation>Um eine Textanimation zu erstellen, legen Sie mindestens zwei Aufnahmen fest und dann:</translation>
    </message>
    <message>
        <source>Define values for zoom and scrolling for the 1st shot</source>
        <translation>Legen Sie den Startwert für Zoom und/oder Position innerhalb des Blockes für die 1. Aufnahme fest</translation>
    </message>
    <message>
        <source>Define different values for zoom and scrolling for the 2nd</source>
        <translation>Legen Sie in der 2. Aufnahme unterschiedliche Endwerte für Zoom und/oder Position fest</translation>
    </message>
    <message>
        <source>Block animation</source>
        <translation>Blockanimation</translation>
    </message>
    <message>
        <source>Multiple rotations</source>
        <translation>Mehrfache Drehungen</translation>
    </message>
    <message>
        <source> This animation allows to turn a block several times during the shot. </source>
        <translation> Diese Animation ermöglicht es einen Block während der Dauer der Aufnahme zu drehen.</translation>
    </message>
    <message>
        <source>Remark: the rotation direction is defined by the sign, so +5 will give 5 rotations in one direction while -5 will give 5 rotations in the other direction </source>
        <translation>Anmerkung: Die Drehrichtung wird durch das Vorzeichen bestimmt. Die Einstellung von +5 dreht den Block 5 mal in die eine Richtung. Ein Wert von -5 dreht den Block in die andere Richtung</translation>
    </message>
    <message>
        <source>Defines the number of rotation to be made according to the Z axis.</source>
        <translation>Legt die Anzahl Drehungen um die Z-Achse fest.</translation>
    </message>
    <message>
        <source>Defines the number of rotation to be made according to the Y axis.</source>
        <translation>Legt die Anzahl Drehungen um die Y-Achse fest.</translation>
    </message>
    <message>
        <source>Defines the number of rotation to be made according to the X axis.</source>
        <translation>Legt die Anzahl Drehungen um die X-Achse fest.</translation>
    </message>
    <message>
        <source>Dissolve</source>
        <translation>Überblendung</translation>
    </message>
    <message>
        <source>This animation dissolves between the block and a transparent zone according to the following settings.</source>
        <translation>Diese Animation ermöglicht das Überblenden zwischen Sichtbarkeit und Transparenz entsprechend folgender Einstellungen.</translation>
    </message>
    <message>
        <source>Appear</source>
        <translation>Einblenden</translation>
    </message>
    <message>
        <source>The block will appear during the shot</source>
        <translation>Ermöglicht das Einblenden (von transparent zu sichtbar) eines Blockes</translation>
    </message>
    <message>
        <source>Disappear</source>
        <translation>Ausblenden</translation>
    </message>
    <message>
        <source>The block will disappear during the shot</source>
        <translation>Ermöglicht das Ausblenden (von sichtbar zu transparent) eines Blockes</translation>
    </message>
    <message>
        <source>Blink</source>
        <translation>Blinken</translation>
    </message>
    <message>
        <source>The block will blink during the shot (appear then disappear). 4 speeds are proposed (from slow to very fast).</source>
        <translation>Ermöglicht das Blinken des Blockes während der Aufnahme (wird sichtbar und anschliessend wieder transparent). Vier unterschiedliche Geschwindigkeiten stehen zur Auswahl (von langsam bis sehr schnell).</translation>
    </message>
    <message>
        <source>See also</source>
        <translation>Siehe auch</translation>
    </message>
    <message>
        <source>Description of EXIF - Exchangeable image file format</source>
        <translation>Beschreibung von EXIF -Exchangeable Image file format </translation>
    </message>
    <message>
        <source>This dialog allows you to define settings for the slides. It includes numerous zones:</source>
        <translation>Dieser Dialog ermöglicht das Festlegen der Eigenschaften eines Dias. Es ist in mehrere Bereiche unterteilt:</translation>
    </message>
    <message>
        <source>Open the &lt;a href=&quot;0105.html&quot;&gt;Chapter properties dialog&lt;/a&gt;</source>
        <translation>Öffnen der Beschreibung zum Dialog &lt;a href=&quot;0105.html&quot;&gt;Kapiteleigenschaften&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Add a new title block - Open a sub menu with the following options: </source>
        <translation>Hinzufügen eines neuen Titelblocks - Öffnet ein Untermenü mit folgenden Optionen: </translation>
    </message>
    <message>
        <source>Add a simple title block</source>
        <translation>Fügt einen einfachen Textblock hinzu</translation>
    </message>
    <message>
        <source>Add a title clip-art block</source>
        <translation>Fügt einen ClipArt-Block hinzu</translation>
    </message>
    <message>
        <source>Once you have selected one of the options, the &lt;a href=&quot;0120.html&quot;&gt;Edit Text dialog&lt;/a&gt; opens.</source>
        <translation>Nachdem Sie eine der zwei Optionen gewählt haben, öffnet sich der Dialog &lt;a href=&quot;0120.html&quot;&gt;Text ändern&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Add one or several new blocks of images or video. A &lt;a href=&quot;0109.html&quot;&gt;file selection dialog&lt;/a&gt; appears allowing you to select files. </source>
        <translation>Hier können Sie mit dem Dialog &lt;a href=&quot;0109.html&quot;&gt;Dateiauswahl&lt;/a&gt; eine oder mehrere Dateien hinzufügen.</translation>
    </message>
    <message>
        <source>Note: in case of multiple selection, files are added in the alphabetical order of the filenames or in the digital order of shots (according to the option selected in the &lt;a href=&quot;0101.html&quot;&gt;Application options dialog&lt;/a&gt;).</source>
        <translation>Anmerkung: wenn mehrere Dateien ausgewählt wurden, werden diese in alphabetischer Reihenfolge des Dateinamen oder in der Reihenfolge der Aufnahme mit der Kamera hinzugefügt (Abhängig von der ausgewählten Option im Dialog &lt;a href=&quot;0101.html&quot;&gt;Applikationseinstellungen&lt;/a&gt;).</translation>
    </message>
    <message>
        <source>Edit blocks - Open a sub menu with the following options: </source>
        <translation>Blöcke ändern - Öffnet ein Untermenü mit folgenden Optionen:</translation>
    </message>
    <message>
        <source>Arrange blocks - Open a sub menu with the following options: </source>
        <translation>Anordnung Blöcke - Öffnet ein Untermenü mit folgenden Optionen:</translation>
    </message>
    <message>
        <source>Save as model - Allows you to save current slide as a new Predefined custom title. </source>
        <translation>Speichern eines Models - Ermöglicht das Speichern des aktuellen Dias als neuen vordefinierten Titel.</translation>
    </message>
    <message>
        <source>For more information on predefined title slide, see: &lt;a href=&quot;0012.html&quot;&gt;Predefined title slide&lt;/a&gt;</source>
        <translation>Für mehr Informationen über vordefinierte Titel, siehe &lt;a href=&quot;0012.html&quot;&gt;vordefinierte Titel&lt;/a&gt;</translation>
    </message>
    <message>
        <source> At the bottom of the box, the &quot;Rullers&quot; button allows you to open the &lt;a href=&quot;0116.html&quot;&gt;Ruler properties dialog&lt;/a&gt; </source>
        <translation> Im unteren Teil des Fensters, der Knopf &quot;Lineale&quot; öffnet den Dialog &lt;a href=&quot;0116.html&quot;&gt;Linealeigenschaften&lt;/a&gt;</translation>
    </message>
    <message>
        <source> It is also possible to open contextual menus by: </source>
        <translation> Es ist ebenso möglich ein Kontextmenü aufzurufen indem man:</translation>
    </message>
    <message>
        <source>Right clicking on zones.</source>
        <translation>Einen Rechtsklick in den Bereichen macht.</translation>
    </message>
    <message>
        <source>Right click on shots table.</source>
        <translation>Einen Rechtsklick in der Aufnahmentabelle macht.</translation>
    </message>
    <message>
        <source>Right click on blocks table or on interactive zone when no block was selected.</source>
        <translation>Die rechte Maustaste in die Blocktabelle oder in den interaktiven Bereich klickt, wenn kein Block ausgewählt ist.</translation>
    </message>
    <message>
        <source>Right click on one of the blocks of a multiple selection, on blocks table or on interactive zone.</source>
        <translation>Die rechte Maustaste auf einem der Blöcke der Mehrfachauswahl in der Blocktabelle oder im interaktiven Bereich klickt.</translation>
    </message>
    <message>
        <source>Each of these contextual menus propose commands which depend on what you have clicked.</source>
        <translation>Jedes dieser Kontextmenüs bietet unterschiedliche Optionen, je nachdem in welchem Bereich man den rechten Mausklick ausgeführt hat.</translation>
    </message>
    <message>
        <source>This settings group deals with style management. For more information on style management, see: &lt;a href=&quot;0016.html&quot;&gt;Using style management&lt;/a&gt;</source>
        <translation>Diese Einstellungsgruppe bezieht sich auf die Stilverwaltung. Für mehr Informationen über die Stilverwaltung besuchen Sie : &lt;a href=&quot;0016.html&quot;&gt;Stilvorlagen verwenden&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Add special - Open a sub menu with the following options: </source>
        <translation>Hinzufügen Spezial - Öffnet ein Untermenü mit den folgenden Optionen:</translation>
    </message>
    <message>
        <source>Add image from clipboard</source>
        <translation>Hinzufügen Bild aus der Zwischenablage</translation>
    </message>
    <message>
        <source>Add a GMaps map</source>
        <translation>Hinzufügen einer Google Maps Karte</translation>
    </message>
    <message>
        <source>Once you have selected one of the options, the new object is inserted into the block table and depending on object, the &lt;a href=&quot;0110.html&quot;&gt;Image framing and correction dialog&lt;/a&gt; opens.</source>
        <translation>Nachdem Sie eine der Optionen gewählt haben, wird das neue Objekt in der Blocktabelle eingefügt und abhängig vom Objekt wird der Dialog &lt;a href=&quot;0110.html&quot;&gt;Beschneiden oder Korrigieren von Bildern&lt;/a&gt; aufgerufen.</translation>
    </message>
    <message>
        <source>Paste block or image from the clipboard and insert it to the end of the block table</source>
        <translation>Einfügen eines Blocks oder Bildes aus der Zwischenablage an das Ende der Blocktabelle</translation>
    </message>
    <message>
        <source>Selects a speed curve for block animations (movement, resizing and rotating of blocks, animation of text and blocks)</source>
        <translation>Auswahl einer Geschwindigkeitskurve für Blockanimationen (Verschieben, Größe ändern, Rotieren von Blöcken, Animation von Text und Blöcken)</translation>
    </message>
    <message>
        <source>To change the velocity curve for image animation (graphic effect and framing), edit the image or video and select a velocity in the Image framing and correction dialog</source>
        <translation>Um die Anstiegskurve für Bildanimationen (grafische Effekte oder Beschneidungen)zu ändern, bearbeiten Sie das Bild oder Video und wählen eine Anstiegskurve im Dialog Bildbeschneidung und Korrektur</translation>
    </message>
    <message>
        <source>This setting is define for the current shot, so, the modifications made will apply only to current shot. To understand the differences between the properties which apply to all shots and those which apply only to the current shot, consult: &lt;a href=&quot;0010.html&quot;&gt;How ffDiaporama works&lt;/a&gt;.</source>
        <translation>Diese Einstellung legt die Werte für die aktuelle Aufnahme fest. Änderungen wirken sich somit nur auf die aktuelle Aufnahmen aus. Um den Unterschied zwischen Eigenschaften, die sich auf alle Aufnahmen und denen, die sich nur auf die aktuelle Aufnahmen auswirken, lesen Sie &lt;a href=&quot;0010.html&quot;&gt;Wie ffDiaporama arbeitet&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>These settings are defines for the current shot, so, the modifications made will apply only to current shot. To understand the differences between the properties which apply to all shots and those which apply only to the current shot, consult: &lt;a href=&quot;0010.html&quot;&gt;How ffDiaporama works&lt;/a&gt;.</source>
        <translation>Diese Einstellungen legen die Werte für die aktuelle Aufnahme fest. Änderungen wirken sich somit nur auf die aktuelle Aufnahmen aus. Um den Unterschied zwischen Eigenschaften, die sich auf alle Aufnahmen und denen, die sich nur auf die aktuelle Aufnahmen auswirken, lesen Sie &lt;a href=&quot;0010.html&quot;&gt;Wie ffDiaporama arbeitet&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>The block animations define which animations will run during the current shot. You can define different animations for every shot!</source>
        <translation>Die Blockanimation legt fest, welche Animationen während der aktuellen Aufnahme laufen. Sie können unterschiedliche Animationen für jede Aufnahme festlegen!</translation>
    </message>
    <message>
        <source> If changes made on previous shot are applied for this block also to this shot. (This information does not appear for the 1st shot.)</source>
        <translation> wenn Änderungen im Block der vorherigen Aufnahme angewandt wurden, wirken sich diese auch auf diese Aufnahme aus (Diese Information gilt nicht für die 1. Aufnahme)</translation>
    </message>
    <message>
        <source> If changes made on previous shot are not applied for this block to this shot. (This information does not appear for the 1st shot.)</source>
        <translation> wenn Änderungen des Blockes in der vorherigen Aufnahme durchgeführt wurden, werden diese in dieser Aufnahme nicht angewandt. (Diese Information gilt nicht für die 1. Aufnahme)</translation>
    </message>
    <message>
        <source>Inheritance changes</source>
        <translation>Vererbte Änderungen</translation>
    </message>
    <message>
        <source>Inherit changes: If this box is checked, the changes made in a previous shot will be applied to this object in this shot</source>
        <translation>Vererbte Änderungen. Wenn diese Option gesetzt ist, werden die Änderungen des Blockes in der vorherigen Aufnahme, auch in diesem Block angewandt</translation>
    </message>
    <message>
        <source>This settings group defines how changes to the block parameters are reflected to the different shots.</source>
        <translation>Diese Einstellungsgruppe legt fest, wie Änderungen eines Blockes sich auf andere Aufnahmen auswirkt.</translation>
    </message>
</context>
<context>
    <name>0120</name>
    <message>
        <source>Edit text</source>
        <translation>Text editieren</translation>
    </message>
    <message>
        <source>This dialog allows you to modify the text within a block.</source>
        <translation>Dieser Dialog ermöglicht das Ändern des Textes innerhalb eines Blockes.</translation>
    </message>
    <message>
        <source>Properties for all shots</source>
        <translation>Eigenschaften für alle Aufnhamen</translation>
    </message>
    <message>
        <source> The modifications made to the following properties will apply to all shots of the slide. </source>
        <translation>Die Änderungen, die an folgenden Einstellungen vorgenommen werden, wirken sich auf alle Aufnahmen des Dias aus.</translation>
    </message>
    <message>
        <source>To understand indeed the differences between the properties which apply to all shots and those who apply only to the current shot, consult: &lt;a href=&quot;0010.html&quot;&gt;How ffDiaporama works&lt;/a&gt;. </source>
        <translation>Um den Unterschied zwischen Eigenschaften, die sich nur auf aktuelle Aufnahmen auswirken und Eigenschaften die sich auf alle Aufnahmen auswirken zu erfahren, lesen Sie &lt;a href=&quot;0010.html&quot;&gt;wie ffDiaporama arbeitet&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Text tab</source>
        <translation>Karteireiter Text</translation>
    </message>
    <message>
        <source>First line at the top of the dialog</source>
        <translation>Erste Reihe der Werkzeugleiste</translation>
    </message>
    <message>
        <source>This settings group is the object of style management. for more information on style management, see : &lt;a href=&quot;0016.html&quot;&gt;Using style management&lt;/a&gt;</source>
        <translation>Diese Einstellung legt den verwendeten Stil fest. Für Informationen über die Stilverwaltung, siehe : &lt;a href=&quot;0016.html&quot;&gt;Stilvorlagen verwenden&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Allows you to select the font to be used, its size and its colour. This setting applies to the current selection.</source>
        <translation>Festlegen der zu verwendenden Schriftart, Größe und Farbe. Die Einstellung wird auf die aktuelle Auswahl übertragen.</translation>
    </message>
    <message>
        <source>Allows to establish (or to remove) a bullet list. This setting applies to the paragraphs of the current selection.</source>
        <translation>Aktivieren oder Entfernen einer Punkteliste. Diese Einstellung wirkt sich auf die selektierten Absätze aus.</translation>
    </message>
    <message>
        <source>Allows to establish (or to remove) a numbered list. This setting applies to the paragraphs of the current selection.</source>
        <translation>Aktivieren oder Entfernen einer nummerierten Liste.Diese Einstellung wirkt sich auf die selektierten Absätze aus.</translation>
    </message>
    <message>
        <source>Horizontal alignment: left. This setting applies to the paragraph in which the cursor is.</source>
        <translation>Horizontale Ausrichtung: Links. Den Absatz, in dem sich der Cursor befindet, linksbündig ausrichten.</translation>
    </message>
    <message>
        <source>Horizontal alignment: centered. This setting applies to the paragraph in which the cursor is.</source>
        <translation>Horizontale Ausrichtung: Zentriert. Den Absatz, in dem sich der Cursor befindet, zentriert ausrichten.</translation>
    </message>
    <message>
        <source>Horizontal alignment: justified. This setting applies to the paragraph in which the cursor is.</source>
        <translation>Horizontale Ausrichtung: Blocksatz. Den Absatz, in dem sich der Cursor befindet, im Blocksatz ausrichten.</translation>
    </message>
    <message>
        <source>Horizontal alignment: right. This setting applies to the paragraph in which the cursor is.</source>
        <translation>Horzontale Ausrichtung: Rechts. Den Absatz, in dem sich der Cursor befindet, rechtsbündig ausrichten.</translation>
    </message>
    <message>
        <source>Second line at the top of the dialog</source>
        <translation>Zweite Reihe der Werkzeugleiste</translation>
    </message>
    <message>
        <source>Allows you to add outline or shadow to the whole text: </source>
        <translation>Ermöglicht das Hinzufügen von Schrifteffekten wie Umrandung oder Schatten:</translation>
    </message>
    <message>
        <source>The first list allows you to select the effect: </source>
        <translation>Die erste Option ermöglicht die Auswahl des Schrifteffektes:</translation>
    </message>
    <message>
        <source>No effect</source>
        <translation>Kein Effekt</translation>
    </message>
    <message>
        <source>Text is shown without any shadow or outline</source>
        <translation>Der Text wird ohne Schatten oder Umrandung angezeigt</translation>
    </message>
    <message>
        <source>Outline</source>
        <translation>Umrahmt</translation>
    </message>
    <message>
        <source>Surrounds the characters with a line in the current shadow color</source>
        <translation>Die Buchstaben erhalten eine Umrandung</translation>
    </message>
    <message>
        <source>Shadow ...</source>
        <translation>Schatten ...</translation>
    </message>
    <message>
        <source>Add a shadow in the current shadow color in one of the 4 corners.</source>
        <translation>Fügt einen Schatten in der gewünschten Richtung (rechts oben; links unten; usw.) hinzu.</translation>
    </message>
    <message>
        <source>The second list allows you to select the color of the shadow or the outline.</source>
        <translation>Die zweite Option legt die Farbe des Schattens oder der Umrandung fest.</translation>
    </message>
    <message>
        <source>Sets bold characters. This setting applies to the current selection.</source>
        <translation>Fettschrift aktivieren. Diese Einstellung wirkt sich auf den ausgewählten Text aus.</translation>
    </message>
    <message>
        <source>Sets characters to italics. This setting applies to the current selection.</source>
        <translation>Kursivschrift aktivieren. Diese Einstellung wirkt sich auf den ausgewählten Text aus.</translation>
    </message>
    <message>
        <source>Underlines the characters. This setting applies to the current selection.</source>
        <translation>Unterstreichen aktivieren. Diese Einstellung wirkt sich auf den ausgewählten Text aus.</translation>
    </message>
    <message>
        <source>Puts the characters to super. This setting applies to the current selection.</source>
        <translation>Hochstellung des Textes aktivieren. Diese Einstellung wirkt sich auf den ausgewählten Text aus.</translation>
    </message>
    <message>
        <source>Puts the characters to sub. This setting applies to the current selection.</source>
        <translation>Tiefstellung des Textes aktivieren. Diese Einstellung wirkt sich auf den ausgewählten Text aus.</translation>
    </message>
    <message>
        <source>Move the paragraph of a notch towards the right (indent). This setting applies to the paragraph in which is the cursor.</source>
        <translation>Absatz um eine Ebene (nach rechts) einrücken. Diese Einstellung wirkt sich auf den ausgewählten Text aus.</translation>
    </message>
    <message>
        <source>Move the paragraph of a notch towards the left (unindent). This setting applies to the paragraph in which is the cursor.</source>
        <translation>Absatz um eine Ebene (nach links) ausrücken. Diese Einstellung wirkt sich auf den ausgewählten Text aus.</translation>
    </message>
    <message>
        <source>Vertical alignment: top. This setting applies to the block (to the whole text).</source>
        <translation>Vertikale Ausrichtung : Oben. Text nach oben ausrichten. Diese Einstellung wirkt sich auf den Block (auf den gesamten Text) aus.</translation>
    </message>
    <message>
        <source>Vertical alignment: middle. This setting applies to the block (to the whole text).</source>
        <translation>Vertikale Ausrichtung: Mittig. Text mittig ausrichten. Diese Einstellung wirkt sich auf den Block (auf den gesamten Text) aus.</translation>
    </message>
    <message>
        <source>Vertical alignment: bottom. This setting applies to the block (to the whole text).</source>
        <translation>Vertikale Ausrichtung: Unten. Text nach unten ausrichten. Diese Einstellung wirkt sich auf den Block (auf den gesamten Text) aus.</translation>
    </message>
    <message>
        <source>Background text tab</source>
        <translation>Karteireiter Hintergrund</translation>
    </message>
    <message>
        <source>&lt;U&gt;&lt;B&gt;&lt;I&gt;Note: This tab is available only for the title blocks (It&apos;s not available when the text applies to an image block).&lt;/I&gt;&lt;/B&gt;&lt;/U&gt;</source>
        <translation>&lt;U&gt;&lt;B&gt;&lt;I&gt;Anmerkung: Dieser Karteireiter ist nur bei Textblöcken auswählbar (Er ist nicht verfügbar wenn ein Texxt einem Grafikblock zugewiesen wird).&lt;/I&gt;&lt;/B&gt;&lt;/U&gt;</translation>
    </message>
    <message>
        <source>Allows you to define a background brush for the shape. The following options are available: </source>
        <translation>Definiert die Hintergrundfarbe des Titelblockes für die aktuelle Aufnahme. Folgende Optionen sind möglich:</translation>
    </message>
    <message>
        <source>No brush</source>
        <translation>Keine Farbe</translation>
    </message>
    <message>
        <source>The shape will have no background and will thus be totally transparent.</source>
        <translation>Die Form hat keine Hintergrundfarbe und wird demnach transparent dargestellt.</translation>
    </message>
    <message>
        <source>Solid brush</source>
        <translation>Einfarbig</translation>
    </message>
    <message>
        <source>Allows you to select a plain color.</source>
        <translation>Ermöglicht die Auswahl einer Hintergrundfarbe für die Form.</translation>
    </message>
    <message>
        <source>Pattern brush</source>
        <translation>Muster</translation>
    </message>
    <message>
        <source>Allows you to select a hatched brush.</source>
        <translation>Ermöglicht die Auswahl eines Schraffurmusters als Hintergrund für die Form.</translation>
    </message>
    <message>
        <source>Gradient 2 colors</source>
        <translation>Farbverlauf aus zwei Farben</translation>
    </message>
    <message>
        <source>Allows you to select a gradient of 2 colors.</source>
        <translation>Es stehen zwei Farben zur Auswahl, die einen Farbverlauf bilden.</translation>
    </message>
    <message>
        <source>Gradient 3 colors</source>
        <translation>Farbverlauf aus drei Farben</translation>
    </message>
    <message>
        <source>Allows you to select a gradient of 3 colors.</source>
        <translation>Es stehen drei Farben zur Auswahl, die einen Farbverlauf bilden.</translation>
    </message>
    <message>
        <source>Image from library</source>
        <translation>Bild aus Bibliothek</translation>
    </message>
    <message>
        <source>Allows you to select an image from the library.</source>
        <translation>Es besteht die Möglichkeit aus der Hintergrundbibliothek ein geeignetes Bild auszuwählen, das als Hintergrund für die Form festgelegt wird.</translation>
    </message>
    <message>
        <source>If background brush is Solid, Pattern or Gradient brush, then this line appears and allows you to select a color. (Depending on the brush you select, there will be one, two or three selectable colors.)</source>
        <translation>In Abhängigkeit Ihrer Wahl des Hintergrundes können Sie hier die entsprechenden Farben für den Hintergrund festlegen. Bei einfarbig können sie eine Farbe wählen, bei Farbverlauf aus drei Farben können Sie dementsprechend drei Farben wählen</translation>
    </message>
    <message>
        <source>If background brush is Pattern brush, then this line appears and allows you to select a pattern.</source>
        <translation>Wurde Muster als Hintergrund gewählt, können Sie mit dieser Option das Muster der Schaffur festlegen.</translation>
    </message>
    <message>
        <source>If background brush is Gradient, then this line appears and allows you to select the gradient orientation. </source>
        <translation>Wenn für den Hintergrund ein Farbverlauf gewählt wurde, kann hier die Richtung und Ausdehnung des Farbverlaufes festgelegt werden.</translation>
    </message>
    <message>
        <source>If the Gradient has 3 colors, additional controls allow to define the position (in percentage) of the 3rd gradient color.</source>
        <translation>Bei Farbverlauf aus drei Farben kann über eine zusätzliche Kontrolleinstellung die Position (in Prozent) der 3. Farbe festgelegt werden.</translation>
    </message>
    <message>
        <source>If background brush is Image from library, then this line appears and allows you to select an image.</source>
        <translation>Wurde als Hintergrund Bild angegeben, kann hier das entsprechende Bild gewählt werden.</translation>
    </message>
    <message>
        <source>Margins tab</source>
        <translation>Karteireiter Ränder</translation>
    </message>
    <message>
        <source>Default margins</source>
        <translation>Standardränder</translation>
    </message>
    <message>
        <source>To use predefined margins for the shape of the block. In general, these margins ensure that the text is contained in the form.</source>
        <translation>Um die vordefinierten Seitenränder für die Form eines Block zu verwenden. Grundsätzlich stellen diese Seitenränder sicher, dass der Text in der Form sichtbar ist.</translation>
    </message>
    <message>
        <source>Full shape</source>
        <translation>Volle Form</translation>
    </message>
    <message>
        <source>To use margins corresponding to the entire form, in fact, the selection rectangle shape regardless of the design.</source>
        <translation>Um Seitenränder entsprechend der verwendeten Form zu erhalten. Tatsächlich ist die Auswahlrechteck immer gleich, unabhängig vom Design der Form.</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation>Benutzerdefiniert</translation>
    </message>
    <message>
        <source>To use custom margins. The following settings allow you to adjust the margins: </source>
        <translation>Um benutzerdefinierte Seitenränder zu erhalten. Folgende Einstellungen ermöglichen es, die Ränder zu justieren:</translation>
    </message>
    <message>
        <source>Represents the horizontal position of the margins relative to the top-left corner of the block. (This value is expressed in % of the width of the block.)</source>
        <translation>Repräsentiert die horizontale Position des Randes von der linken/oberen Ecke des Blocks. (Dieser Wert wird in Prozent % der Breite des Blocks ausgedrückt.)</translation>
    </message>
    <message>
        <source>Represents the vertical position of the margins relative to the top-left corner of the block. (This value is expressed in % of the height of the block.)</source>
        <translation>Repräsentiert die vertikale Position des Randes von der linken/oberen Ecke des Blocks. (Dieser Wert wird in Prozent % der Höhe des Blocks ausgedrückt.)</translation>
    </message>
    <message>
        <source>Represents the width of the margins. (This value is expressed in % of the width of the block.)</source>
        <translation>Repräsentiert die Breite des Randes. (Dieser Wert wird in % der Originalbreite des Blocks ausgedrückt.)</translation>
    </message>
    <message>
        <source>Represents the height of the margins. (This value is expressed in % of the height of the block.)</source>
        <translation>Repräsentiert die Höhe des Randes. (Dieser Wert wird in % der Originalhöhe des Blocks ausgedrückt.)</translation>
    </message>
    <message>
        <source>Allows you to add a dynamic variable to the text. For more information on dynamic variables see: &lt;a href=&quot;0013.html&quot;&gt;Dynamic variables&lt;/a&gt;</source>
        <translation>Ermöglicht das Hinzufügen einer Variable zum Text. Für mehr Informationen zu dynamischen Variablen siehe: &lt;a href=&quot;0013.html&quot;&gt;Dynamische Variablen&lt;/a&gt;</translation>
    </message>
</context>
<context>
    <name>0121</name>
    <message>
        <source>Select transition duration for a set of slides</source>
        <translation>Wählen Sie die Effektdauer für eine Reihe von Dias</translation>
    </message>
    <message>
        <source>Duration</source>
        <translation>Laufzeit</translation>
    </message>
    <message>
        <source>Define the animation duration.</source>
        <translation>Festlegen der Animationsdauer.</translation>
    </message>
    <message>
        <source>When you click the OK button, the new transition duration is applied to all the slides that were selected. </source>
        <translation>Wenn Sie auf OK klicken, wird die neue Laufzeit allen Dias zugewiesen, die gerade ausgewählt sind.</translation>
    </message>
    <message>
        <source>This function can not be used to delete or change the slide&apos;s transition. </source>
        <translation>Diese Funktion kann nicht zum Löschen oder Ändern des Diaeffektes verwendet werden.</translation>
    </message>
    <message>
        <source>If it&apos;s what you want, then call the context transitions menu by right clicking on one of the slides of the selection from the &lt;a href=&quot;0023.html&quot;&gt;timeline&lt;/a&gt; and then select &quot;Modify the transition for all the slides of the selection&quot; option.</source>
        <translation>Wenn es das war, was Sie wollten, dann klicken Sie mit der rechten Maustaste auf eines der selektieren Dias in der &lt;a href=&quot;0023.html&quot;&gt;Zeitleiste&lt;/a&gt; und rufen aus dem Kontextmenü den Eintrag: &quot;Ändern des Übergangs für alle Dias dieser Auswahl&quot;.</translation>
    </message>
    <message>
        <source>This dialog allows you to define the transition duration for a set of slides:</source>
        <translation>In diesem Dialog können Sie die Übergangsdauer für eine Auswahl an Dias festlegen:</translation>
    </message>
</context>
<context>
    <name>0122</name>
    <message>
        <source>Transition properties</source>
        <translation>Überblendungseigenschaften</translation>
    </message>
    <message>
        <source> This dialog allows you to define the entering transition for a slide. </source>
        <translation>Der Übergangsdialog ermöglicht das Auswählen des einleitenden Überblendeffektes für ein Dia.</translation>
    </message>
    <message>
        <source>It shows a preview of the available transitions by transition family. </source>
        <translation>Er zeigt eine Vorschau auf alle verfügbaren Übergänge, gruppiert in Effektfamilien.</translation>
    </message>
    <message>
        <source>Remark : In case this dialog is opened for a multiple slide selection, it&apos;s the first slide of the selection that is used for the preview. </source>
        <translation>Anmerkung: Im Falle, dass dieser Dialog für eine Mehrfachauswahl von Dias geöffnet wurd, wird das erste Dia der Selektion für die Vorschau verwendet.</translation>
    </message>
    <message>
        <source>Transition type</source>
        <translation>Übergangstyp</translation>
    </message>
    <message>
        <source>Allows you to select a transition family: </source>
        <translation>Sie können aus der Effektfamilie wählen:</translation>
    </message>
    <message>
        <source>No transition</source>
        <translation>Kein Übergang</translation>
    </message>
    <message>
        <source>No transition: The new slide immediately replaces the old one. </source>
        <translation>Kein Übergang : Das neue Dia folgt unmittelbar auf das alte Dia.</translation>
    </message>
    <message>
        <source>Note that this also deactivates:</source>
        <translation>Beachten Sie: Dies deaktiviert auch:</translation>
    </message>
    <message>
        <source>Sound fades (The playlist of the new slide immediately replaces that of the old one)</source>
        <translation>Musikübergänge (Die evtl. neue Abspielliste ersetzt abrupt die bisherige Abspielliste)</translation>
    </message>
    <message>
        <source>Background transitions</source>
        <translation>Hintergrundüberblendungen</translation>
    </message>
    <message>
        <source>Basic</source>
        <translation>Einfach</translation>
    </message>
    <message>
        <source>Dissolve effect: The slide appears gradually, with gradually increasing opacity.</source>
        <translation>Auflöseeffekt: Das alte Dia verschwindet langsam und wird durch das neue Dia ersetzt. Hier bleiben die Übergangseffekte für Musik und Hintergrund entsprechend der Übergangsdauer erhalten.</translation>
    </message>
    <message>
        <source>Scripted transition</source>
        <translation>Programmierte Übergänge</translation>
    </message>
    <message>
        <source>Zoom: The new slide appears by getting bigger while the old slide disappears with a dissolve effect. </source>
        <translation>Zoom : Das neue Dia vergrößert sich allmählich, während das alte Dia seine Sichtbarkeit verliert.</translation>
    </message>
    <message>
        <source>Slide: The new slide glides onto the old slide which disappears with a dissolve effect. </source>
        <translation>Dia : Das neue Dia schiebt sich allmählich über das alte Dia, während das alte Dia seine Sichtbarkeit verliert.</translation>
    </message>
    <message>
        <source>Push: The new slide takes the place of the old slide by pushing it aside.</source>
        <translation>Austausch : Das neue Dia verdrängt das alte, während das alte sich in gleicher Weise auflöst.</translation>
    </message>
    <message>
        <source>LUMA transition</source>
        <translation>LUMA Übergänge</translation>
    </message>
    <message>
        <source>The animation is based on a luminance mask : the darker the points in the mask, the faster the corresponding points in the new slide replace those in the old slide.</source>
        <translation>Verschiedene Übergänge, die basiernd auf Ein- und Ausblenden der Helligkeit erstellt wurden. Die Helligkeitsüberblendungen werden dabei durch Masken erstellt.</translation>
    </message>
    <message>
        <source>Speed wave</source>
        <translation>Anstiegskurve</translation>
    </message>
    <message>
        <source>Allows you to select a speed curve to apply to the transition</source>
        <translation>Ermöglicht das Wählen einer Geschwindigkeitskurve für den Übergang</translation>
    </message>
    <message>
        <source>Duration</source>
        <translation>Laufzeit</translation>
    </message>
    <message>
        <source>Allows you to define the duration of the animation. </source>
        <translation>Legt die Laufzeit der Animation fest.</translation>
    </message>
    <message>
        <source>The possible choices are of 0,5 seconds (very fast) to 10 seconds (very slow)</source>
        <translation>Die möglichen Werte gehen von 0,5 Sekunden (sehr schnell) bis zu 10 Sekunden (sehr langsam)</translation>
    </message>
    <message>
        <source>See also</source>
        <translation>Siehe auch</translation>
    </message>
    <message>
        <source>Description of LUMA</source>
        <translation>Beschreibung zu LUMA (englisch)</translation>
    </message>
</context>
<context>
    <name>0123</name>
    <message>
        <source>Add or modify a location</source>
        <translation>Hinzufügen oder Ändern eines Ortes</translation>
    </message>
    <message>
        <source> This dialog allows you to define a location using Google Maps. </source>
        <translation> Dieser Dialog ermöglicht das Festlegen eines Ortes für Google Maps.</translation>
    </message>
    <message>
        <source>Google address</source>
        <translation>Google Adresse</translation>
    </message>
    <message>
        <source>Enter the postal adress to find in this zone.</source>
        <translation>Geben Sie die zu suchende Postadresse ein.</translation>
    </message>
    <message>
        <source>When you press the Enter key, a search is made using Google Maps and the addresses found are used to fill the list.</source>
        <translation>Wenn Sie die Enter-Taste drücken, wird eine Suche bei Google Maps ausgelöst und die gefundenen Adressen aufgelistet.</translation>
    </message>
    <message>
        <source>Then select the correct address in the list</source>
        <translation>Anschliessend wählen Sie die korrekte Adresse aus der Liste</translation>
    </message>
    <message>
        <source>Open the favorite menu: </source>
        <translation>Öffnen des Menü Favoriten:</translation>
    </message>
    <message>
        <source>Add to favorite: Adds the current location to the list.</source>
        <translation>Zu den Favoriten hinzufügen. Fügt die aktuelle Position zur Liste hinzu.</translation>
    </message>
    <message>
        <source>Update this favorite: Update the favorite using current settings.</source>
        <translation>Aktualisiere diesen Favoriten. Aktualisiere den aktuellen Favoriten mit der aktuellen Position.</translation>
    </message>
    <message>
        <source>Remove this favorites: Remove the favorite from the list</source>
        <translation>Entferne diesen Favoriten. Löscht den Favoriten aus der Liste</translation>
    </message>
    <message>
        <source>The list of the favourite: Use a favorite to fill the dialog box fields.</source>
        <translation>Die Liste der Favoriten. Verwenden Sie einen Favoriten um die Felder dieser Dialogbox zu befüllen.</translation>
    </message>
    <message>
        <source>Friendly address</source>
        <translation>Bezeichnung Adresse</translation>
    </message>
    <message>
        <source>Enter the address in a more readable form. This form will be used to display the marker.</source>
        <translation>Geben Sie hier eine leicht lesbare Kurzform der Adresse ein. Diese Bezeichnung wird  beim Anzeigen der Marker verwendet.</translation>
    </message>
    <message>
        <source>Friendly name</source>
        <translation>Bezeichnung Name</translation>
    </message>
    <message>
        <source>Enter a name for this location. This name will be used to display the marker.</source>
        <translation>Geben Sie hier eine leicht lesbare Bezeichnung für den Namen ein. Dieser Name wird beim Anzeigen des Markers verwendet.</translation>
    </message>
    <message>
        <source>Icon</source>
        <translation>Symbol</translation>
    </message>
    <message>
        <source>Select an image to be used as icon to display the marker.</source>
        <translation>Wählen Sie ein Bild, welches als Symbol für den Marker verwendet werden soll.</translation>
    </message>
    <message>
        <source> Click on the icon zone or on the </source>
        <translation>Klicken Sie in die Symbolleite oder auf den </translation>
    </message>
    <message>
        <source> button to select an image and edit it.</source>
        <translation> Knopf, um das Bild auszuwählen und ändern.</translation>
    </message>
    <message>
        <source> Click on this </source>
        <translation> Klicken sie diesen </translation>
    </message>
    <message>
        <source> button to clear the icon.</source>
        <translation> Knopf, um das Symbol zurückzusetzen.</translation>
    </message>
    <message>
        <source>Map zone</source>
        <translation>Kartenbereich</translation>
    </message>
    <message>
        <source>Click on a point on the map zone to select it.</source>
        <translation>Klicken sie auf einen Punkt des Kartenbereichs, um diesen auszuwählen.</translation>
    </message>
    <message>
        <source>You can also use the slider and the </source>
        <translation>Sie können den Schieberegler verwenden und die Knöpfe </translation>
    </message>
    <message>
        <source> and </source>
        <translation> und </translation>
    </message>
    <message>
        <source> buttons to modify the zoom level.</source>
        <translation>, um die Zoomstufe zu verändern.</translation>
    </message>
</context>
<context>
    <name>0124</name>
    <message>
        <source>Cut a sound file</source>
        <translation>Schneiden einer Audiodatei</translation>
    </message>
    <message>
        <source>This dialog allows you to cut a sound file.</source>
        <translation>Der Dialog ermöglicht das Schneiden einer Audiodatei.</translation>
    </message>
    <message>
        <source>The progress bar</source>
        <translation>Der Fortschrittsbalken</translation>
    </message>
    <message>
        <source>Displays as follows: </source>
        <translation>wurd wie folgt angezeigt:</translation>
    </message>
    <message>
        <source>The ruler representing the duration of the sound file is dispayed under a black background. Remark than the length of the ruler is increased in proportion to the duration of the sound file.</source>
        <translation>Das Lineal repräsentiert die Laufzeit der Audiodatei und wird auf schwarzem Hintergrund angezeigt. Anmerkung: Die Länge des Lineals ändert sich proportional zur Laufzeit der Audiodatei.</translation>
    </message>
    <message>
        <source>The blue part, on wave form and ruler, represents the part of the sound file which is selected (which will be used in the assembly).</source>
        <translation>Der blaue Anteil - in der Audiowelle und dem Lineal - repräsentiert den Teil der Audiodatei, der ausgewählt wurde (welcher für die Montage verwendet wird).</translation>
    </message>
    <message>
        <source> This button starts playback. Click again on this button to pause. </source>
        <translation> Dieser Knopf startet das Playback. Ein weiterer Klick auf denselben Knopf pausiert die Wiedergabe.</translation>
    </message>
    <message>
        <source>You can move with the mouse the </source>
        <translation>Sie können mit der Maus den Marker </translation>
    </message>
    <message>
        <source> handle, on the progress bar, to move the current position</source>
        <translation> auf dem Fortschrittsbalken verschieben, um die aktuelle Position zu ändern</translation>
    </message>
    <message>
        <source>You can move with the mouse the two </source>
        <translation>Sie können mit der Maus die zwei Marker </translation>
    </message>
    <message>
        <source> and </source>
        <translation> und </translation>
    </message>
    <message>
        <source> handles, on the progress bar, to move the Start and End positions</source>
        <translation> auf dem Fortschrittsbalken verschieben um die Start- und Endposition zu verändern</translation>
    </message>
    <message>
        <source>The working range</source>
        <translation>Der Arbeitsbereich</translation>
    </message>
    <message>
        <source> Positions the cursor at the starting point</source>
        <translation> Positioniert den Cursor auf den Startpunkt</translation>
    </message>
    <message>
        <source> Uses the current cursor position as starting point (carries out an edit)</source>
        <translation> Verwendet die aktuelle Cursorposition als Startpunkt (Berücksichtigt eine Änderung)</translation>
    </message>
    <message>
        <source> Positions the cursor at the end point</source>
        <translation> Positioniert den Cursor an den Endpunkt</translation>
    </message>
    <message>
        <source> Uses the current cursor position as end point (carries out an edit)</source>
        <translation> Verwendet die aktuelle Cursorposition als Endpunkt (Berücksichtigt eine Änderung)</translation>
    </message>
    <message>
        <source>The wave form of the sound is displayed under a white background.</source>
        <translation>Die Audiowelle der Datei wird auf weißem Hintergrund angezeigt.</translation>
    </message>
</context>
<context>
    <name>QHP</name>
    <message>
        <source>Welcome to the ffDiaporama WIKI</source>
        <translation>Herzlich Willkommen im WIKI von ffDiaporama</translation>
    </message>
    <message>
        <source>How ffDiaporama works</source>
        <translation>Wie ffDiaporama arbeitet</translation>
    </message>
    <message>
        <source>Functional principles</source>
        <translation>Grundsätzliche Funktionalität</translation>
    </message>
    <message>
        <source>The Visible property of blocks and the management of the breaks</source>
        <translation>Die “Sichtbar” Eigenschaft von Blöcken und die Verwaltung von Pausen</translation>
    </message>
    <message>
        <source>All shots regulations versus current shot regulations</source>
        <translation>“Alle Aufnahmen” Einstellungen versus “Aktuelle Aufnahme” Einstellungen</translation>
    </message>
    <message>
        <source>Style sheets</source>
        <translation>Stilvorlagen</translation>
    </message>
    <message>
        <source>Interface description</source>
        <translation>Schnittstellen-Beschreibung</translation>
    </message>
    <message>
        <source>The main window</source>
        <translation>Das Hauptfenster</translation>
    </message>
    <message>
        <source>The toolbar</source>
        <translation>Die Werkzeugleiste</translation>
    </message>
    <message>
        <source>The timeline</source>
        <translation>Die Zeitleiste</translation>
    </message>
    <message>
        <source>The multimedia file browser</source>
        <translation>Der Dateibrowser für Multimedia Dateien</translation>
    </message>
    <message>
        <source>Dialog boxes</source>
        <translation>Dialogfenster</translation>
    </message>
    <message>
        <source>Application options</source>
        <translation>Anwendungseinstellungen</translation>
    </message>
    <message>
        <source>Manage devices</source>
        <translation>Geräte verwalten</translation>
    </message>
    <message>
        <source>Add or modify a predefined title slide</source>
        <translation>Hinzufügen oder Ändern von vordefinierten Titeln</translation>
    </message>
    <message>
        <source>Background properties</source>
        <translation>Hintergrundeigenschaften</translation>
    </message>
    <message>
        <source>Chapter properties</source>
        <translation>Kapiteleigenschaften</translation>
    </message>
    <message>
        <source>Check configuration</source>
        <translation>Konfiguration überprüfen</translation>
    </message>
    <message>
        <source>Export project</source>
        <translation>Projekt exportieren</translation>
    </message>
    <message>
        <source>Project properties</source>
        <translation>Projekteigenschaften</translation>
    </message>
    <message>
        <source>Select files</source>
        <translation>Dateien auswählen</translation>
    </message>
    <message>
        <source>Correct, reframe or cut image or video</source>
        <translation>Korrigieren, Beschneiden oder Kürzen von Bildern oder Videos</translation>
    </message>
    <message>
        <source>File information</source>
        <translation>Dateiinformationen</translation>
    </message>
    <message>
        <source>Manage favorite</source>
        <translation>Favoriten verwalten</translation>
    </message>
    <message>
        <source>Manage style</source>
        <translation>Stile verwalten</translation>
    </message>
    <message>
        <source>Music properties</source>
        <translation>Musikeigenschaften</translation>
    </message>
    <message>
        <source>Render video</source>
        <translation>Video erstellen</translation>
    </message>
    <message>
        <source>Ruler properties</source>
        <translation>Linealeigenschaften</translation>
    </message>
    <message>
        <source>Edit thumbnail model</source>
        <translation>Ändern Modell für Vorschaubilder</translation>
    </message>
    <message>
        <source>Set first shot duration for a set of slides</source>
        <translation>Setzen der Dauer für die erste Aufnahme für eine Reihe von Dias</translation>
    </message>
    <message>
        <source>Slide properties</source>
        <translation>Diaeigenschaften</translation>
    </message>
    <message>
        <source>Edit text</source>
        <translation>Text editieren</translation>
    </message>
    <message>
        <source>Select transition duration for a set of slides</source>
        <translation>Effektdauer für eine Reihe von Dias</translation>
    </message>
    <message>
        <source>Transition properties</source>
        <translation>Effekteigenschaften</translation>
    </message>
    <message>
        <source>Rendering videos</source>
        <translation>Videos erstellen</translation>
    </message>
    <message>
        <source>Smartphones and tablets</source>
        <translation>Smartphones; Handys; Tablets</translation>
    </message>
    <message>
        <source>Portable devices</source>
        <translation>Portable Geräte</translation>
    </message>
    <message>
        <source>Multimedia system (Home cinema)</source>
        <translation>Multimediasysteme (Heimkino)</translation>
    </message>
    <message>
        <source>For the WEB</source>
        <translation>Für das Internet</translation>
    </message>
    <message>
        <source>Video codec</source>
        <translation>Videocodec</translation>
    </message>
    <message>
        <source>Audio codec</source>
        <translation>Audiocodec</translation>
    </message>
    <message>
        <source>Containers</source>
        <translation>Container</translation>
    </message>
    <message>
        <source>Video standards and resolutions</source>
        <translation>Videostandards und Auflösung</translation>
    </message>
    <message>
        <source>File attachments (Thumbnails, nfo, etc...)</source>
        <translation>Dateianhänge (Vorschaubilder, nfo, usw....)</translation>
    </message>
    <message>
        <source>Technical information on ffDiaporama</source>
        <translation>Technische Informationen über ffdiaporama</translation>
    </message>
    <message>
        <source>ffDiaporama command line arguments</source>
        <translation>ffDiaporama Startparameter</translation>
    </message>
    <message>
        <source>ffDiaporama project files</source>
        <translation>Projektdateien von ffDiaporama</translation>
    </message>
    <message>
        <source>The configuration files for ffDiaporama</source>
        <translation>Die Konfigurationsdateien für ffDiaporama</translation>
    </message>
    <message>
        <source>XBMC nfo files</source>
        <translation>XBMC nfo Dateien</translation>
    </message>
    <message>
        <source>Dynamic variables</source>
        <translation>Dynamische Variablen</translation>
    </message>
    <message>
        <source>Predefined title slide</source>
        <translation>Vordefinierte Titel</translation>
    </message>
    <message>
        <source>Configuration dialog boxes</source>
        <translation>Dialogfenster für die Konfiguration</translation>
    </message>
    <message>
        <source>Editing dialog boxes</source>
        <translation>Dialoge für Änderungen</translation>
    </message>
    <message>
        <source>Dialog boxes related to the project</source>
        <translation>Projektbezogenen Dialoge </translation>
    </message>
    <message>
        <source>Various dialog boxes</source>
        <translation>Weitere Dialogfenster</translation>
    </message>
    <message>
        <source>Types of objects in ffDiaporama</source>
        <translation>Objekttypen in ffDiaporama</translation>
    </message>
    <message>
        <source>Add or modify a location</source>
        <translation>Hinzufügen oder Ändern eines Ortes</translation>
    </message>
    <message>
        <source>Cut a sound file</source>
        <translation>Schneiden einer Audiodatei</translation>
    </message>
</context>
<context>
    <name>main</name>
    <message>
        <source>Welcome to the ffDiaporama WIKI</source>
        <translation>Herzlich Willkommen im WIKI von ffDiaporama</translation>
    </message>
    <message>
        <source>How ffDiaporama works</source>
        <translation>Wie ffDiaporama arbeitet</translation>
    </message>
    <message>
        <source>Interface description</source>
        <translation>Schnittstellen-Beschreibung</translation>
    </message>
    <message>
        <source>Rendering videos</source>
        <translation>Videos erstellen</translation>
    </message>
    <message>
        <source>Technical information on ffDiaporama</source>
        <translation>Technische Informationen über ffDiaporama</translation>
    </message>
    <message>
        <source>ffDiaporama Web site</source>
        <translation>ffDiaporama Webseite</translation>
    </message>
    <message>
        <source>Finally, you&apos;ll also find help on the </source>
        <translation>Letztendlich finden Sie ebenfalls Hilfe im </translation>
    </message>
    <message>
        <source>ffDiaporama forum</source>
        <translation>ffDiaporama Forum</translation>
    </message>
    <message>
        <source>Other elements of documentation are available on the </source>
        <translation>Weitere Dokumentation sind verfügbar im</translation>
    </message>
    <message>
        <source>This documentation is divided into the followed themes:</source>
        <translation>Dieses Dokument ist geteilt in folgende Themen:</translation>
    </message>
</context>
</TS>
