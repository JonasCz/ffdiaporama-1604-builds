<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="es_ES">
<context>
    <name>0010</name>
    <message>
        <source>How ffDiaporama works</source>
        <translation>Cómo trabaja ffDiaporama</translation>
    </message>
    <message>
        <source>Functional principles</source>
        <translation>Principios de funcionamiento</translation>
    </message>
    <message>
        <source>Predefined title slide</source>
        <translation>Diapositiva de título predefinido</translation>
    </message>
    <message>
        <source>The &quot;Visible&quot; property of blocks and the management of the breaks</source>
        <translation>La propiedad &quot;Visible de bloques y gestión de las pausas</translation>
    </message>
    <message>
        <source>All shots regulations versus current shot regulations</source>
        <translation>Todos los ajustes de tomas vs ajustes de toma actual</translation>
    </message>
    <message>
        <source>Style sheets</source>
        <translation>Hoja de estilo</translation>
    </message>
    <message>
        <source> This section contains general information on the concepts and methods of use of ffDiaporama </source>
        <translation>Esta sección contiene información general sobre conceptos y métodos de uso de ffDiaporama</translation>
    </message>
    <message>
        <source>Index</source>
        <translation>Indice</translation>
    </message>
    <message>
        <source>Dynamic variables</source>
        <translation>Variables dinámicas</translation>
    </message>
</context>
<context>
    <name>0011</name>
    <message>
        <source>Functional principles</source>
        <translation>Principios del funcionamiento</translation>
    </message>
    <message>
        <source>The main control element of ffDiaporama is the timeline. The timeline lists the slides which compose the project.</source>
        <translation>El elemento principal de control de ffDiaporama es la línea de tiempo. La línea de tiempo muestra las diapositivas que componen el proyecto.</translation>
    </message>
    <message>
        <source>It consists of 3 tracks: </source>
        <translation>Consiste en 3 pistas:</translation>
    </message>
    <message>
        <source>the background track</source>
        <translation>la pista de fondo</translation>
    </message>
    <message>
        <source>the mounting track</source>
        <translation>la pista de montaje</translation>
    </message>
    <message>
        <source>and the music track.</source>
        <translation>y la pista de audio.</translation>
    </message>
    <message>
        <source>The slides</source>
        <translation>Las diapositivas</translation>
    </message>
    <message>
        <source>Slides are shown one after another, in the order in which they appear in the time line.</source>
        <translation>Las diapositivas se muestran una tras otra, en el orden en el que aparecen en la línea de tiempo.</translation>
    </message>
    <message>
        <source>The following diagram shows how slides function:</source>
        <translation>El siguiente diagrama muestra cómo funcionan las diapositivas:</translation>
    </message>
    <message>
        <source>The upper part of the diagram represents four slides: A, B, C and D. </source>
        <translation>En la parte superior del diagrama están representadas las diapositivas: A, B, C y D.</translation>
    </message>
    <message>
        <source>Each slide possesses an entering transition (symbolized on the diagram by a small rectangle labelled T). The transitions can have different durations (symbolized on the diagram by the lengths TA&apos;, TB&apos;, etc.): It is possible to define the duration of the entering transition for each slide separately (or to indicate no transition: duration=0).</source>
        <translation>Cada diapositiva posee una transición (simbolizada en el diagrama por un pequeño rectángulo etiquetado como T). Las transiciones pueden tener diferente duración (simbolizado en el diagrama por las longitudes TA&apos;, TB&apos;, etc.): Es posible definir la duración de cada transición para cada diapositiva (o para indicar que no hay ninguna transición: duración = 0).</translation>
    </message>
    <message>
        <source>Each slide possesses a duration which is appropriate for it (symbolized on the diagram by the lengths B&apos;, C&apos;, etc.): Some last only a few seconds while others can last several minutes. The durations are expressed in seconds but are not necessarily whole numbers: a slide might last 12.234 seconds.</source>
        <translation>Cada diapositiva tiene una duración que es apropiada para ello (simbolizado en el diagrama por las longitudes B&apos;, C&apos;, etc): Algunas tienen una duración de unos pocos segundos, mientras que otras pueden durar varios minutos. Los tiempos se expresan en segundos, pero no son necesariamente números enteros: una diapositiva puede tener 12.234 segundos.</translation>
    </message>
    <message>
        <source>Each slide is a composite, an assembly of one or more multimedia elements which are animated over time. The animation is realized through shots.</source>
        <translation>Cada diapositiva es una composición, un conjunto de uno o más elementos multimedia que se animan en el tiempo. La animación se realiza a través de planos o tomas.</translation>
    </message>
    <message>
        <source>Each slide can define a new background (that is shown under the multimedia elements of the slide if they don&apos;t fill out the whole screen).</source>
        <translation>En cada diapositiva se puede definir un fondo (que se muestra debajo de los elementos multimedia de la diapositiva si no llena toda la pantalla).</translation>
    </message>
    <message>
        <source>Each slide can define a new musical play-list.</source>
        <translation>En cada diapositiva se puede definir una nueva lista de reproducción.</translation>
    </message>
    <message>
        <source>Slides which do not define a background use the background defined in a previous slide. So in the following example: </source>
        <translation>Las diapositivas en las que no se ha configurado un fondo utilizan el fondo definido en una diapositiva anterior. He aquí un ejemplo:</translation>
    </message>
    <message>
        <source>Slide 1: Defines a background</source>
        <translation>Diapositiva 1: Define un fondo</translation>
    </message>
    <message>
        <source>Slide 2: Does not define a background and therefore uses the background defined by slide 1</source>
        <translation>Diapositiva 2: no define un fondo y  por lo tanto utiliza el fondo definido por diapositiva 1</translation>
    </message>
    <message>
        <source>Slide 3: Does not define a background and therefore uses the background defined by slide 1</source>
        <translation>Diapositiva 3: no define un fondo y  por lo tanto utiliza el fondo definido por diapositiva 1</translation>
    </message>
    <message>
        <source>Slide 4: Defines a background</source>
        <translation>Diapositiva 4: Define un fondo</translation>
    </message>
    <message>
        <source>Slide 5: Does not define a background and therefore uses the background defined by slide 4</source>
        <translation>Diapositiva 5: no define un fondo y  por lo tanto utiliza el fondo definido por diapositiva 4</translation>
    </message>
    <message>
        <source>The same principle applies to the musical play-lists. As long as slides do not define a new play-list, they use the last defined play-list.</source>
        <translation>Este mismo principio se aplica a la lista de reproducción de música. Si en las diapositivas no se configura una nueva lista de reproducción, se usa la última lista definida.</translation>
    </message>
    <message>
        <source>Remarks:</source>
        <translation>Notas:</translation>
    </message>
    <message>
        <source>The total duration of the project is not equal to the sum of the durations of the slides because the transitions make the slides overlap: Two slides of 10 seconds, each with a transition of 1 second, will give a total duration for the project of 19 seconds (and not 20 seconds)!</source>
        <translation>La duración total del proyecto no es igual a la suma de la duración de las diapositivas porque las transiciones hacen que las diapositivas se superpongan: Dos diapositivas de 10 segundos, cada una con una transición de 1 segundo, ¡el resultado será una duración total del proyecto de 19 segundos (y no de 20 segundos)!</translation>
    </message>
    <message>
        <source>Shots and blocks</source>
        <translation>Tomas y bloques</translation>
    </message>
    <message>
        <source>The lower part of the diagram represents the composition of slide C. </source>
        <translation>La parte inferior del diagrama representa la diapositiva C.</translation>
    </message>
    <message>
        <source>Each slide comprises one or more shots. The shots are represented on the diagram by rectangles C1, C2, C3, etc...</source>
        <translation>Cada diapositiva contiene uno o más tomas. Las tomas están representadas en el diagrama por los rectángulos C1, C2, C3, etc. …</translation>
    </message>
    <message>
        <source>Each shot has its own duration (symbolized on the diagram by the lengths C1 &apos;, C2 &apos;, C3 &apos;, etc.). Some shots can last only seconds while others can last several minutes. Some shots can have a duration of zero. (The durations are expressed in seconds but are not necessarily whole numbers: A shot can very well last 12.234 seconds).</source>
        <translation>Cada toma tiene su propia duración (simbolizado en el diagrama con las longitudes C1, C2, C3, etc.). Algunas tomas pueden durar sólo algunos segundos, mientras que otras pueden durar varios minutos. Otras tomas pueden tener una duración cero. (Los tiempos se expresan en segundos, pero no son necesariamente números enteros: Una toma puede durar perfectamente 12.234 segundos).</translation>
    </message>
    <message>
        <source>The shots can contain several multimedia objects. The multimedia objects are integrated into blocks which can be of three types: title (containing only text), images (or photos), or video.</source>
        <translation>Las tomas contienen varios objetos multimedia. Los objetos multimedia se integran en bloques que pueden ser de tres tipos: de título (que contiene sólo texto), imágenes (o fotos), o vídeo.</translation>
    </message>
    <message>
        <source>The blocks define where and how the multimedia object appears on the screen. Each block can have a different framing that defines what is visible from the multimedia object within the block.</source>
        <translation>Los bloques definen dónde y cómo el objeto multimedia aparece en la pantalla. Cada bloque puede tener un encuadre diferente que define lo que es visible para el objeto multimedia dentro del bloque.</translation>
    </message>
    <message>
        <source>The background of the shots is transparent. This means that if the image does not fill the whole screen, the background will appear.</source>
        <translation>El fondo de las tomas es transparente. Esto significa que si la imagen no ocupa toda la pantalla, el fondo aparecerá.</translation>
    </message>
    <message>
        <source>The shots define the arrangement of blocks (multimedia objects) at any given moment.</source>
        <translation>Las tomas definen la disposición de los bloques (objetos multimedia) en un momento dado.</translation>
    </message>
    <message>
        <source>The shot animations are generated by the transformation of these arrangements from one shot to another.</source>
        <translation>Las animaciones de las tomas se generan por la transformación de estas posiciones que se lleva a cabo de una toma a otra.</translation>
    </message>
    <message>
        <source>The lengths of the shot animations are defined by the shot durations.</source>
        <translation>La duración de las animaciones de la toma se define por el tiempo de cada toma.</translation>
    </message>
    <message>
        <source>Specifically, if in the foreground, a block containing an image occupies the whole screen, and then in the following shot the same block occupies only a small part of the screen, then the animation will consist of the transformation of the image from the whole screen into that small part of the screen.</source>
        <translation>Concretando, si en el primer plano un bloque conteniendo una imagen ocupa toda la pantalla, y la siguiente toma, el mismo bloque sólo ocupa una pequeña parte de la pantalla, entonces la animación estará formada por la transformación de ésta ocupando toda la pantalla hasta ocupar sólo una pequeña parte de la pantalla.</translation>
    </message>
    <message>
        <source>Example:</source>
        <translation>Ejemplo:</translation>
    </message>
    <message>
        <source>Let&apos;s have 3 shots within a slide:</source>
        <translation>Tenemos 3 tomas en una diapositiva:</translation>
    </message>
    <message>
        <source>Shot 1: Image using the whole screen: Duration=2 seconds.</source>
        <translation>Toma 1: La imagen ocupa la pantalla entera: Duración=2 segundos.</translation>
    </message>
    <message>
        <source>Shot 2: Image using only the bottom right screen quarter: Duration 3 seconds.</source>
        <translation>Toma 2: La imagen sólo ocupa el cuadrante inferior derecho: Duración 3 segundos.</translation>
    </message>
    <message>
        <source>Shot 3: Image again using the whole screen: Duration=2 seconds.</source>
        <translation>Toma 3: La imagen vuelve a ocupar otra vez la pantalla entera: Duratción=2 segundos.</translation>
    </message>
    <message>
        <source>Result:</source>
        <translation>Resultado:</translation>
    </message>
    <message>
        <source>The image will be shown on the whole screen for 2 seconds, will shrink gradually over 3 seconds towards the right lower quarter of the screen, and then will grow again for 2 seconds until it once more occupies the whole screen.</source>
        <translation>La imagen se mostrará en la pantalla completa durante 2 segundos, encogerá gradualmente durante otros 3 segundos hacia el el cuadrante inferior derecho de la pantalla, y luego crecerá otra vez durante 2 segundos hasta que una vez más ocupe la pantalla completa.</translation>
    </message>
    <message>
        <source>The slide will end as soon as the image has reached the position defined in shot 3.</source>
        <translation>La diapositiva terminará tan pronto como la imagen haya llegado a la posición definida en la toma 3.</translation>
    </message>
    <message>
        <source>The transformations are gradual: in the example you will see the image being gradually reduced.</source>
        <translation>Las transformaciones son graduales: en el ejemplo que hemos visto la imagen va reduciédose gradualmente.</translation>
    </message>
    <message>
        <source>The transformations are made over the whole duration of the following shot.</source>
        <translation>Las transformaciones tienen lugar a través de toda la duración de la toma siguiente.</translation>
    </message>
    <message>
        <source>The framing definition of the objects in each block can vary from one shot to another. The following example shows three different definitions from the same block:</source>
        <translation>La definición de encuadre de los objetos en cada bloque puede variar de una toma a otra. En el siguiente ejemplo se puede comprobar tres diferentes definiciones en el mismo bloque:</translation>
    </message>
    <message>
        <source>1st shot: The image is complete.</source>
        <translation>1ª toma: La imagen está completa.</translation>
    </message>
    <message>
        <source>2nd shot: The image is re-framed on the statue.</source>
        <translation>2ª toma: La imagen se ha enmarcado en la zona de la estatua.</translation>
    </message>
    <message>
        <source>3rd shot: The image is re-framed on the pedestrians.</source>
        <translation>3ª toma: La imagen se ha enmarcado en la zona de los peatones.</translation>
    </message>
    <message>
        <source>If we apply these framing definitions to the previous 3 shots: </source>
        <translation>Si aplicamos estos encuadres a las 3 tomas mencionadas anteriormente:</translation>
    </message>
    <message>
        <source>The complete image will be shown on all the screen for 2 seconds, then it will be reduced gradually towards the right lower quarter of the screen over 3 seconds while zooming in on the statue, then it will grow again over 2 seconds until it once more occupies the whole screen while the &quot;camera&quot; moves towards the pedestrians.</source>
        <translation>La imagen completa se muestra en toda la pantalla durante 2 segundos, luego va disminuyendo de tamaño gradualmente durante 3 segundos haciendo un zoom sobre la imagen en el cuadrante inferior derecho de la pantalla, entonces crece durante otros 2 segundos hasta que, una vez más, ocupa toda la pantalla mientras la &quot;cámara&quot; se mueve hacia la zona de los peatones.</translation>
    </message>
    <message>
        <source>ffDiaporama can manage up to several hundreds slides in a single project.</source>
        <translation>ffDiaporama puede gestionar cientos de diapositivas en un solo proyecto.</translation>
    </message>
    <message>
        <source>Each slide can consist of tens of shots.</source>
        <translation>Cada diapositiva puede contener decenas de tomas.</translation>
    </message>
    <message>
        <source>Each slide can contain tens of blocks.</source>
        <translation>Cada diapositiva puede contener decenas de bloques.</translation>
    </message>
    <message>
        <source>Blocks can be visible on some shots and invisible on other.</source>
        <translation>Los bloques pueden ser visibles en algunas tomas e invisibles en otras.</translation>
    </message>
</context>
<context>
    <name>0012</name>
    <message>
        <source>Predefined title slide</source>
        <translation>Diapositiva de título predefinido</translation>
    </message>
    <message>
        <source> Predefined title slide are complete slides including formatting and animations. </source>
        <translation>Diapositivas de título predefinido son diapositivas completas que incluyen formato y animaciones. </translation>
    </message>
    <message>
        <source>The main interest of these slides is to standardize the slides within a project or across projects. </source>
        <translation>El principal interés de estas diapositivas es la estandarización de las diapositivas en un proyecto o en varios proyectos.</translation>
    </message>
    <message>
        <source>ffDiaporama included many Predefined title slides, but you can also define your own Predefined title slides. </source>
        <translation>ffDiaporama incluye muchas diapositivas de título predefinidos, pero tú también puedes definir tus propias diapositivas de título predefinido.</translation>
    </message>
    <message>
        <source>To do this, create a standard slide using the &lt;a href=&quot;0119.html&quot;&gt;Slide properties dialog box&lt;/a&gt; and save your slide as a model using: </source>
        <translation>Para ello, crear una diapositiva patrón utilizando la ventana &lt;a href=&quot;0119.html&quot;&gt;Propiedades de diapositiva&lt;/a&gt; y guardar la diapositiva como modelo usando:</translation>
    </message>
    <message>
        <source> Save as model function.</source>
        <translation>Guardar como modelo.</translation>
    </message>
    <message>
        <source>Remarks:</source>
        <translation>Notas:</translation>
    </message>
    <message>
        <source>Predefined title slides are defined according to the following three categories: </source>
        <translation>Las diapositivas de título predefino se definen de acuerdo a las tres categorías siguientes: </translation>
    </message>
    <message>
        <source>Project title</source>
        <translation>Título del proyecto</translation>
    </message>
    <message>
        <source>This type of slide is usually used early in the project as the opening credits. </source>
        <translation>Este tipo de diapositiva se usa generalmente como inicio del proyecto al iniciar los créditos.</translation>
    </message>
    <message>
        <source>The texts variables that are used by the models of this slide type are based only on project information. For more information on project information, see: &lt;a href=&quot;0108.html&quot;&gt;Project properties dialog&lt;/a&gt;</source>
        <translation>Las variables de textos que son utilizados por los modelos de este tipo de diapositivas se basan únicamente en la información del proyecto. Para obtener más información sobre la información del proyecto, ver: &lt;a href=&quot;0108.html&quot;&gt;Propiedades del proyecto&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Chapter title</source>
        <translation>Título del capítulo</translation>
    </message>
    <message>
        <source>This type of slide is usually used several times in the project to mark the beginning of the chapter. </source>
        <translation>Este tipo de diapositiva se utiliza por lo general varias veces en el proyecto para marcar el comienzo del capítulo.</translation>
    </message>
    <message>
        <source>The texts variables that are used by the models of this slide type are based on project information and on chapter information.</source>
        <translation>Las variables de textos que son utilizados por los modelos de este tipo de diapositivas se basan en la información del proyecto y en la información del capítulo.</translation>
    </message>
    <message>
        <source>Credit title</source>
        <translation>Título de crédito</translation>
    </message>
    <message>
        <source>This type of slide is usually used at the end of the project as the end credits. </source>
        <translation>Este tipo de diapositiva se utiliza por lo general al final del proyecto, en los créditos del final.</translation>
    </message>
    <message>
        <source>The texts variables that are used by the models of this slide type are generally computed. For more information on texts variables, see: &lt;a href=&quot;0013.html&quot;&gt;Dynamic variables&lt;/a&gt;</source>
        <translation>Las variables de textos que son utilizados por los modelos de este tipo de diapositiva se calculan en general. Para obtener más información sobre los textos variables consultar: &lt;a href=&quot;0013.html&quot;&gt;Variables dinámicas&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Within each category, the predefined title slides are classified into the following types: </source>
        <translation>Dentro de cada categoría, las diapositivas de título predefinidos se clasifican en los siguientes tipos:</translation>
    </message>
    <message>
        <source>Statics models</source>
        <translation>Modelos estáticos</translation>
    </message>
    <message>
        <source>This type lists statics models ie without animations.</source>
        <translation>Este tipo lista los modelos estáticos, sin animación.</translation>
    </message>
    <message>
        <source>Animated models</source>
        <translation>Modelos animados</translation>
    </message>
    <message>
        <source>This type lists animated models ie with several shots.</source>
        <translation>Este tipo lista los modelos animados, contienen varias tomas.</translation>
    </message>
    <message>
        <source>Custom models</source>
        <translation>Modelos personalizados</translation>
    </message>
    <message>
        <source>This type lists the templates that you saved with the &lt;B&gt;&lt;I&gt;Save as model&lt;/I&gt;&lt;/B&gt; function of the &lt;a href=&quot;0119.html&quot;&gt;Slide properties&lt;/a&gt; dialog box.</source>
        <translation>Este tipo lista los modelos que se han guardado como &lt;B&gt;&lt;I&gt;Guardar como modelo&lt;/I&gt;&lt;/B&gt; en la ventana &lt;a href=&quot;0119.html&quot;&gt;Propiedades de diapositiva&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>It will always be possible to create slides from a model using the &lt;a href=&quot;0103.html&quot;&gt;Add or modify a predefined title slide dialog box&lt;/a&gt; then convert it to a standard slide using this function: </source>
        <translation>Siempre será posible crear diapositivas de un modelo usando la ventana &lt;a href=&quot;0103.html&quot;&gt;Añadir o editar una diapositiva de título predefinido&lt;/a&gt; y después convertirlo a una diapositiva estándar utilizando esta función:</translation>
    </message>
    <message>
        <source> Convert to standard slide</source>
        <translation> Convertir a diapositiva estándar</translation>
    </message>
    <message>
        <source>The resources used by the models you create are not moved. So, if you include a photo in a model, the model will only be valid until the picture will not move. This is why it is recommended, to think resources included before creating a new model.</source>
        <translation>Los recursos utilizados por los modelos que se crean no se mueven. Por lo tanto, si se incluye una foto de un modelo, el modelo sólo será válido mientras que la imagen no se mueve. Es por esto que se recomienda, pensar y diseñar los recursos incluidos antes de crear un nuevo modelo.</translation>
    </message>
</context>
<context>
    <name>0013</name>
    <message>
        <source>Dynamic variables</source>
        <translation>Variables dinámicas</translation>
    </message>
    <message>
        <source>It&apos;s why variables are used in many parts of the application (slide, thumbnails, predefined titles slides, video tags, xbmc nfo, etc...)</source>
        <translation>Es por eso que las variables se utilizan en muchas partes de la aplicación (diapositivas, miniaturas, títulos, etiquetas predefinidas diapositivas de vídeo, nfo para XBMC, etc ..)</translation>
    </message>
    <message>
        <source>Category</source>
        <translation>Categoría</translation>
    </message>
    <message>
        <source>Variable</source>
        <translation>Variable</translation>
    </message>
    <message>
        <source>Content</source>
        <translation>Contenido</translation>
    </message>
    <message>
        <source>Project properties values</source>
        <translation>Valores de propiedades del proyecto</translation>
    </message>
    <message>
        <source>%PTT%</source>
        <translation>%PTT%</translation>
    </message>
    <message>
        <source>Value of the &lt;B&gt;&lt;I&gt;Project title&lt;/I&gt;&lt;/B&gt; field of the &lt;a href=&quot;0108.html&quot;&gt;Project properties&lt;/a&gt;</source>
        <translation>Valor del campo &lt;B&gt;&lt;I&gt;Título del proyecto&lt;/I&gt;&lt;/B&gt; desde &lt;a href=&quot;0108.html&quot;&gt;Propiedades del proyecto&lt;/a&gt;</translation>
    </message>
    <message>
        <source>%PAU%</source>
        <translation>%PAU%</translation>
    </message>
    <message>
        <source>Value of the &lt;B&gt;&lt;I&gt;Project author&lt;/I&gt;&lt;/B&gt; field of the &lt;a href=&quot;0108.html&quot;&gt;Project properties&lt;/a&gt;</source>
        <translation>Valor del campo &lt;B&gt;&lt;I&gt;Autor del proyecto&lt;/I&gt;&lt;/B&gt; desde &lt;a href=&quot;0108.html&quot;&gt;Propiedades del proyecto&lt;/a&gt;</translation>
    </message>
    <message>
        <source>%PAI%</source>
        <translation>%PAI%</translation>
    </message>
    <message>
        <source>Value of the &lt;B&gt;&lt;I&gt;Project author&lt;/I&gt;&lt;/B&gt; field of the &lt;a href=&quot;0108.html&quot;&gt;Project properties&lt;/a&gt; displayed as &lt;U&gt;Author presents&lt;/U&gt;</source>
        <translation>Valor del campo &lt;B&gt;&lt;I&gt;Autor del proyecto&lt;/I&gt;&lt;/B&gt; desde &lt;a href=&quot;0108.html&quot;&gt;Propiedades del proyecto&lt;/a&gt; mostrándose como  &lt;U&gt;Autor presenta&lt;/U&gt;</translation>
    </message>
    <message>
        <source>%PAP%</source>
        <translation>%PAP%</translation>
    </message>
    <message>
        <source>Value of the &lt;B&gt;&lt;I&gt;Project author&lt;/I&gt;&lt;/B&gt; field of the &lt;a href=&quot;0108.html&quot;&gt;Project properties&lt;/a&gt; displayed as &lt;U&gt;A Author production&lt;/U&gt;</source>
        <translation>Valor del campo &lt;B&gt;&lt;I&gt;Autor del proyecto&lt;/I&gt;&lt;/B&gt; desde &lt;a href=&quot;0108.html&quot;&gt;Propiedades del prpyecto&lt;/a&gt; mostrándose como &lt;U&gt;Una producción Autor&lt;/U&gt;</translation>
    </message>
    <message>
        <source>%PAL%</source>
        <translation>%PAL%</translation>
    </message>
    <message>
        <source>Value of the &lt;B&gt;&lt;I&gt;Project album&lt;/I&gt;&lt;/B&gt; field of the &lt;a href=&quot;0108.html&quot;&gt;Project properties&lt;/a&gt;</source>
        <translation>Valor del campo &lt;B&gt;&lt;I&gt;Album del proyecto&lt;/I&gt;&lt;/B&gt; desde &lt;a href=&quot;0108.html&quot;&gt;Propiedades del proyecto&lt;/a&gt;</translation>
    </message>
    <message>
        <source>%PCT%</source>
        <translation>%PCT%</translation>
    </message>
    <message>
        <source>Value of the &lt;B&gt;&lt;I&gt;Project comment&lt;/I&gt;&lt;/B&gt; field of the &lt;a href=&quot;0108.html&quot;&gt;Project properties&lt;/a&gt;</source>
        <translation>Valor del campo &lt;B&gt;&lt;I&gt;Comentarios del proyecto&lt;/I&gt;&lt;/B&gt; desde &lt;a href=&quot;0108.html&quot;&gt;Propiedades del proyecto&lt;/a&gt;</translation>
    </message>
    <message>
        <source>%PDD%</source>
        <translation>%PDD%</translation>
    </message>
    <message>
        <source>Duration of the project displayed as &lt;U&gt;hh:mm:ss&lt;/U&gt;</source>
        <translation>La duración del proyecto se muestra como &lt;U&gt;hh:mm:ss&lt;/U&gt;</translation>
    </message>
    <message>
        <source>%PSC%</source>
        <translation>%PSC%</translation>
    </message>
    <message>
        <source>Project slide count (Number of slide in the project)</source>
        <translation>Número de diapositiva en el proyecto</translation>
    </message>
    <message>
        <source>%PLD%</source>
        <translation>%PLD%</translation>
    </message>
    <message>
        <source>Long date (The form of the display depends on geographical information provided by the computer, depending on the current language)</source>
        <translation>Fecha larga (La forma como se muestra depende de la información geográfica proporcionada por el ordenador, dependiendo del idioma actual)</translation>
    </message>
    <message>
        <source>%PSD%</source>
        <translation>%PSD%</translation>
    </message>
    <message>
        <source>Short date (The form of the display depends on &lt;B&gt;&lt;I&gt;Short date format&lt;/I&gt;&lt;/B&gt; selected in the &lt;a href=&quot;0101.html&quot;&gt;Application options dialog&lt;/a&gt;)</source>
        <translation>Fecha corta (La forma como se muestra depende de &lt;B&gt;&lt;I&gt;Formato de fecha corta&lt;/I&gt;&lt;/B&gt; seleccionado en &lt;a href=&quot;0101.html&quot;&gt;Opciones de la aplicación&lt;/a&gt;)</translation>
    </message>
    <message>
        <source>%PYR%</source>
        <translation>%PYR%</translation>
    </message>
    <message>
        <source>Year (The year of the event date as a four digit number)</source>
        <translation>Año (El año de la fecha del evento está formado por un número de cuatro dígitos)</translation>
    </message>
    <message>
        <source>%PMM%</source>
        <translation>%PMM%</translation>
    </message>
    <message>
        <source>Month (The month of the event date as a name, depending on the current language: January, February, etc...)</source>
        <translation>Mes (El mes de la fecha del evento  es un nombre, en función del idioma usado: Enero, Febrero, etc...)</translation>
    </message>
    <message>
        <source>%PMD%</source>
        <translation>%PMD%</translation>
    </message>
    <message>
        <source>Month as number (The month of the event date as a two digit number)</source>
        <translation>Mes como número (El mes de la fecha del evento bajo la forma de un número con dos dígitos)</translation>
    </message>
    <message>
        <source>%PDY%</source>
        <translation>%PDY%</translation>
    </message>
    <message>
        <source>Day (The day of the event date as a two digit number)</source>
        <translation>Día (El día de la fecha del evento bajo la forma de un número con dos dígitos)</translation>
    </message>
    <message>
        <source>%PDW%</source>
        <translation>%PDW%</translation>
    </message>
    <message>
        <source>Day of week (The day of week of the event date as a name, depending on the current language: Monday, Thuesday, etc...)</source>
        <translation>Día de la semana (El día de la semana de la fecha del evento bajo la forma de un nombre, en función del idioma usado: Lunes, Martes, etc...)</translation>
    </message>
    <message>
        <source>Current slide values</source>
        <translation>Valores de la diapositiva actual</translation>
    </message>
    <message>
        <source>%CSN%</source>
        <translation>%CSN%</translation>
    </message>
    <message>
        <source>Value of the &lt;B&gt;&lt;I&gt;Slide name&lt;/I&gt;&lt;/B&gt; field of the slide as defined in the &lt;U&gt;Slide settings zone&lt;/U&gt; of the &lt;a href=&quot;0119.html&quot;&gt;Slide properties dialog&lt;/a&gt;</source>
        <translation>Valor del campo &lt;B&gt;&lt;I&gt;Nombre de la diapositiva&lt;/I&gt;&lt;/B&gt; definido en la zona &lt;U&gt;Ajustes de la diapositiva&lt;/U&gt; en la ventana &lt;a href=&quot;0119.html&quot;&gt;Propiedades de la diapositiva&lt;/a&gt;</translation>
    </message>
    <message>
        <source>%CSR%</source>
        <translation>%CSR%</translation>
    </message>
    <message>
        <source>Current slide number</source>
        <translation>Número de la diapositiva actual</translation>
    </message>
    <message>
        <source>Chapters values</source>
        <translation>Valores del capítulo actual</translation>
    </message>
    <message>
        <source>%CCN%</source>
        <translation>%CCN%</translation>
    </message>
    <message>
        <source>Value of the &lt;B&gt;&lt;I&gt;Chapter name&lt;/I&gt;&lt;/B&gt; field of the latest slide which defined &lt;U&gt;Chapters information&lt;/U&gt;. (Chapters information may be defined in &lt;a href=&quot;0105.html&quot;&gt;Chapter properties dialog&lt;/a&gt; or in &lt;a href=&quot;0103.html&quot;&gt;Predefined title slide dialog&lt;/a&gt;).</source>
        <translation>Valor del campo &lt;B&gt;&lt;I&gt;Nmbre del capítulo&lt;/I&gt;&lt;/B&gt; de la última diapositiva definida &lt;U&gt;Iformación del capítulo&lt;/U&gt;. (Lainformación del capítulo se define en el diaĺogo  &lt;a href=&quot;0105.html&quot;&gt;Propiedades del capítulo&lt;/a&gt; o en  &lt;a href=&quot;0103.html&quot;&gt;Editar diapositiva de título predefiido&lt;/a&gt;).</translation>
    </message>
    <message>
        <source>%CCR%</source>
        <translation>%CCR%</translation>
    </message>
    <message>
        <source>Current chapter number</source>
        <translation>Número del capítulo actual</translation>
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
        <translation>Duración del capítulo actual</translation>
    </message>
    <message>
        <source>%CCT%</source>
        <translation>%CCT%</translation>
    </message>
    <message>
        <source>Chapter count (Number of chapter in the project)</source>
        <translation>Número del capítulo (Número del capítulo en el proyecto)</translation>
    </message>
    <message>
        <source>%CLD%</source>
        <translation>%CLD%</translation>
    </message>
    <message>
        <source>Long date of the chapter (if one is defined or project&apos;s date). (The form of the display depends on geographical information provided by the computer, depending on the current language)</source>
        <translation>Fecha larga del capítulo (Si se define una fecha, y si no es así se tiene encuenta la del proyecto) (La forma en que se presenta depende de la información geográfica local  provista por el ordenador)</translation>
    </message>
    <message>
        <source>%CSD%</source>
        <translation>%CSD%</translation>
    </message>
    <message>
        <source>Short date of the chapter (if one is defined or project&apos;s date). (The form of the display depends on &lt;B&gt;&lt;I&gt;Short date format&lt;/I&gt;&lt;/B&gt; selected in the &lt;a href=&quot;0101.html&quot;&gt;Application options dialog&lt;/a&gt;)</source>
        <translation>Fecha corta del capítulo (Si se define una fecha, y si no es así se tiene encuenta la del proyecto). (La forma en que se presenta depende de &lt;B&gt;&lt;I&gt;Formato de fecha corta&lt;/I&gt;&lt;/B&gt; seleccionándolo en  &lt;a href=&quot;0101.html&quot;&gt;Opciones de la aplicación&lt;/a&gt;)</translation>
    </message>
    <message>
        <source>%CYR%</source>
        <translation>%CYR%</translation>
    </message>
    <message>
        <source>Year of the chapter&apos;s date (if one is defined or year of project&apos;s date), as a four digit number.</source>
        <translation>Año de la Fecha del capítulo (si se ha definido, o si no se tendrá en cuenta el año de la fecha del proyecto), y se muestra como un número de cuatro dígitos.</translation>
    </message>
    <message>
        <source>%CMM%</source>
        <translation>%CMM%</translation>
    </message>
    <message>
        <source>Month of the chapter&apos;s date (if one is defined or month of project&apos;s date) as a name (depending on the current language: January, February, etc...)</source>
        <translation>Mes de la fecha del capítulo (si se ha definido, o si no se tendrá en cuenta el mes de la fecha de proyecto) como nombre (dependiendo del idioma actual: Enero, Febrero, etc ..)</translation>
    </message>
    <message>
        <source>%CMD%</source>
        <translation>%CMD%</translation>
    </message>
    <message>
        <source>Month of the chapter&apos;s date (if one is defined or month of project&apos;s date) as a two digit number.</source>
        <translation>Mes de la fecha del capítulo (si se ha definido, o si no: se tendrá en cuenta el mes de la fecha del Proyecto) y se muestra como un número de dos dígitos.</translation>
    </message>
    <message>
        <source>%CDY%</source>
        <translation>%CDY%</translation>
    </message>
    <message>
        <source>Day of the chapter&apos;s date (if one is defined or day of project&apos;s date) as a two digit number.</source>
        <translation>Día de la fecha del capítulo (si se ha definido, o si no se tendrá en cuenta el día de la fecha del proyecto) y se muestra como un número de dos dígitos.</translation>
    </message>
    <message>
        <source>%CDW%</source>
        <translation>%CDW%</translation>
    </message>
    <message>
        <source>Day of week of the chapter&apos;s date (if one is defined or day of project&apos;s date) as a a name (depending on the current language: Monday, Thuesday, etc...)</source>
        <translation>Día de la semana de la fecha del capítulo (si se ha definido, o si no se tendrá en cuenta el día de la fecha del proyecto) y se muestra como nombre (dependiendo del idioma actual: Lunes, Martes, etc ..)</translation>
    </message>
    <message>
        <source>Various values</source>
        <translation>Varios valores</translation>
    </message>
    <message>
        <source>%FFD%</source>
        <translation>%FFD%</translation>
    </message>
    <message>
        <source>ffDiaporama version as &lt;U&gt;ffDiaporama 1.7 (20130919)&lt;/U&gt;</source>
        <translation>ffDiaporama versión como &lt;U&gt;ffDiaporama 1.7 (20130919)&lt;/U&gt;</translation>
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
        <translation>Fin (en función del idioma actual)</translation>
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
        <translation>El texto completo integrado de estadísticas del proyecto (número de diapositivas, duración del proyecto, lista de capítulos, la lista de músicas, las fotos, imágenes vectoriales, vídeos y diapositivas de título predefinidos, etc ..)</translation>
    </message>
    <message>
        <source>%STM%</source>
        <translation>%STM%</translation>
    </message>
    <message>
        <source>A full text composed of list of musics</source>
        <translation>El texto completo está compuesto de la lista de músicas</translation>
    </message>
    <message>
        <source>%TLD%</source>
        <translation>%TLD%</translation>
    </message>
    <message>
        <source>Current date as long date format (The form of the display depends on geographical information provided by the computer, depending on the current language)</source>
        <translation>Fecha y hora actual en formato de fecha larga (La forma como se muestra depende de la información geográfica proporcionada por el ordenador, dependiendo del idioma actual)</translation>
    </message>
    <message>
        <source>%TSD%</source>
        <translation>%TSD%</translation>
    </message>
    <message>
        <source>Current date as short date format (The form of the display depends on &lt;B&gt;&lt;I&gt;Short date format&lt;/I&gt;&lt;/B&gt; selected in the &lt;a href=&quot;0101.html&quot;&gt;Application options dialog&lt;/a&gt;)</source>
        <translation>Fecha y hora actual como formato de fecha corta (La forma como se muestra depende de &lt;B&gt;&lt;I&gt;Formato de fecha corta&lt;/I&gt;&lt;/B&gt; seleccionado en el diálogo &lt;a href=&quot;0101.html&quot;&gt;Opciones de la aplicación&lt;/a&gt;)</translation>
    </message>
    <message>
        <source>%TYR%</source>
        <translation>%TYR%</translation>
    </message>
    <message>
        <source>Current date&apos;s year as a four digit number</source>
        <translation>Año de la fecha actual como un número de cuatro dígitos</translation>
    </message>
    <message>
        <source>%TMM%</source>
        <translation>%TMM%</translation>
    </message>
    <message>
        <source>Current date&apos;s month as a name (depending on the current language: January, February, etc...)</source>
        <translation>Mes de la fecha actual como nombre (dependiendo del idioma actual: Enero, Febrero, etc...)</translation>
    </message>
    <message>
        <source>%TMD%</source>
        <translation>%TMD%</translation>
    </message>
    <message>
        <source>Current date&apos;s month as as a two digit number</source>
        <translation>Mes de la fecha actual como un número de dos dígitos</translation>
    </message>
    <message>
        <source>%TDY%</source>
        <translation>%TDY%</translation>
    </message>
    <message>
        <source>Current date&apos;s day as a two digit number</source>
        <translation>Día de la fecha actual como un número de dos dígitos</translation>
    </message>
    <message>
        <source>%TDW%</source>
        <translation>%TDW%</translation>
    </message>
    <message>
        <source>Current date&apos;s day of week as a a name (depending on the current language: Monday, Thuesday, etc...)</source>
        <translation>Días de la fecha actual de la semana como un nombre (dependiendo del idioma actual: Lunes, Martes, etc ..)</translation>
    </message>
    <message>
        <source>%PLN%</source>
        <translation>%PLN%</translation>
    </message>
    <message>
        <source>Value of the &lt;B&gt;&lt;I&gt;Project location name&lt;/I&gt;&lt;/B&gt; field of the &lt;a href=&quot;0108.html&quot;&gt;Project properties&lt;/a&gt;</source>
        <translation>Valor del campo &lt;B&gt;&lt;I&gt;nombre de ubicación del proyecto&lt;/I&gt;&lt;/B&gt; en &lt;a href=&quot;0108.html&quot;&gt;Propiedades del proyecto&lt;/a&gt;</translation>
    </message>
    <message>
        <source>%PLA%</source>
        <translation>%PLA%</translation>
    </message>
    <message>
        <source>Value of the &lt;B&gt;&lt;I&gt;Project location address&lt;/I&gt;&lt;/B&gt; field of the &lt;a href=&quot;0108.html&quot;&gt;Project properties&lt;/a&gt;</source>
        <translation>Valor del campo &lt;B&gt;&lt;I&gt;dirección de ubicación del proyecto&lt;/I&gt;&lt;/B&gt; en &lt;a href=&quot;0108.html&quot;&gt;Propiedades del proyecto&lt;/a&gt;</translation>
    </message>
    <message>
        <source>%CLN%</source>
        <translation>%CLN%</translation>
    </message>
    <message>
        <source>Current chapter location name (if one is defined or project&apos;s location name).</source>
        <translation>Nombre actual de la ubicación del capítulo (si se define uno o nombre de la ubicación del proyecto).</translation>
    </message>
    <message>
        <source>%CLA%</source>
        <translation>%CLA%</translation>
    </message>
    <message>
        <source>Current chapter location address (if one is defined or project&apos;s location address).</source>
        <translation>Dirección actual de la ubicación del capítulo (si se define uno o dirección de la ubicación del proyecto).</translation>
    </message>
    <message>
        <source>The following table lists all the available variables:</source>
        <translation>La siguiente lista con todas las variables disponibles:</translation>
    </message>
    <message>
        <source>The big interest of variables is that they are inserted into text (see: &lt;a href=&quot;0120.html&quot;&gt;Edit text dialog&lt;/a&gt;) and are transformed into values ​​only when they are used.</source>
        <translation>El gran interés de las variables es que se insertan en el texto (consultar: &lt;a href=&quot;0120.html&quot;&gt;Editar diálogo de texto&lt;/a&gt;) y se transforman en valores sólo cuando se usan.</translation>
    </message>
    <message>
        <source>Current chapter number displayed as &lt;U&gt;Chapter N°&lt;/U&gt; (depending on the current language)</source>
        <translation>Número del capítulo actual se muestra como &lt;U&gt; Capítulo N° &lt;/U&gt; (dependiendo del idioma actual)</translation>
    </message>
    <message>
        <source>Copyright of the project construct as &lt;U&gt;© Year - Author&lt;/U&gt; with &lt;B&gt;&lt;I&gt;Year&lt;/I&gt;&lt;/B&gt; is the year of today&apos;s date and &lt;B&gt;&lt;I&gt;Author&lt;/I&gt;&lt;/B&gt; is the value of the &lt;B&gt;&lt;I&gt;Project author&lt;/I&gt;&lt;/B&gt; field of the &lt;a href=&quot;0108.html&quot;&gt;Project properties&lt;/a&gt;</source>
        <translation>Copyright de la construcción del proyecto como &lt;U&gt;© Año - Autor&lt;/U&gt; con &lt;B&gt;&lt;I&gt;Año&lt;/I&gt;&lt;/B&gt; de la fecha actual &lt;B&gt;&lt;I&gt;Autor&lt;/I&gt;&lt;/B&gt; es el valor &lt;B&gt;&lt;I&gt;Autor del proyecto&lt;/I&gt;&lt;/B&gt; campo de &lt;a href=&quot;0108.html&quot;&gt;Propiedades del proyecto&lt;/a&gt;</translation>
    </message>
    <message>
        <source>A full text composed of: Project done the &lt;U&gt;&lt;B&gt;&lt;I&gt;short date&lt;/I&gt;&lt;/B&gt;&lt;/U&gt; with «&lt;U&gt;&lt;B&gt;&lt;I&gt;ffDiaporama version&lt;/I&gt;&lt;/B&gt;&lt;/U&gt;» on a &lt;U&gt;&lt;B&gt;&lt;I&gt;Operating system&lt;/I&gt;&lt;/B&gt;&lt;/U&gt; (&lt;U&gt;&lt;B&gt;&lt;I&gt;Number of Core/CPU&lt;/I&gt;&lt;/B&gt;&lt;/U&gt; Core/CPU) computer.</source>
        <translation>Un texto completo compuesto por: Proyecto realizado el &lt;U&gt;&lt;B&gt;&lt;I&gt;fecha corta&lt;/I&gt;&lt;/B&gt;&lt;/U&gt; con «&lt;U&gt;&lt;B&gt;&lt;I&gt;versión de ffDiaporama&lt;/I&gt;&lt;/B&gt;&lt;/U&gt;» en un &lt;U&gt;&lt;B&gt;&lt;I&gt;sistema operativo&lt;/I&gt;&lt;/B&gt;&lt;/U&gt; (&lt;U&gt;&lt;B&gt;&lt;I&gt;Número de núcleos/CPU&lt;/I&gt;&lt;/B&gt;&lt;/U&gt; Núcleo/CPU) del PC.</translation>
    </message>
</context>
<context>
    <name>0014</name>
    <message>
        <source>The &quot;Visible&quot; property of blocks and the management of the breaks</source>
        <translation>La propiedad &quot;Visible&quot; de los bloques y la gestión de las pausas</translation>
    </message>
    <message>
        <source>Blocks have a visible/invisible property. In the following example, the one image is inserted 3 times (in 3 different blocks) into the same slide.</source>
        <translation>Los bloques tienen una propiedad visible/invisible. En el siguiente ejemplo, una imagen se inserta 3 veces (en 3 bloques diferentes) en la misma diapositiva.</translation>
    </message>
    <message>
        <source>The first block consists of the whole image filling the whole screen</source>
        <translation>El primer bloque se compone de la imagen completa llenando toda la pantalla</translation>
    </message>
    <message>
        <source>The second block consists of the image re-framed on the statue and positioned in an ellipse at the right of the screen</source>
        <translation>El segundo bloque consiste en la imagen de reencuadrada en la estatua y posicionada en una elipse en la parte derecha de la pantalla</translation>
    </message>
    <message>
        <source>The third block consists of the image re-framed on the pedestrians and also positioned in an ellipse at the right of the screen</source>
        <translation>El tercer bloque se compone de la imagen reencuadrada en los peatones y también colocada en una elipse en la parte derecha de la pantalla</translation>
    </message>
    <message>
        <source>The statue and the pedestrians have their visibility property set to invisible on the 1st shot.</source>
        <translation>La estatua y los peatones tienen la propiedad de visibilidad establecido en invisible en la 1ª toma.</translation>
    </message>
    <message>
        <source>Then the statue becomes visible on the 2nd shot.</source>
        <translation>A continuación, la estatua se hace visible en la 2ª toma.</translation>
    </message>
    <message>
        <source>Finally, the statue once more becomes invisible on the 3rd shot and the pedestrians become visible.</source>
        <translation>Por último, la estatua, una vez más se vuelve invisible en la tercera toma y los peatones se hacen visibles.</translation>
    </message>
    <message>
        <source>Result:</source>
        <translation>Resultado:</translation>
    </message>
    <message>
        <source>For 2 seconds, the 1st shot is shown and we see only the whole image which occupies all the screen</source>
        <translation>Durante 2 segundos, la 1ª toma se muestra y vemos sólo la imagen completa que ocupa toda la pantalla</translation>
    </message>
    <message>
        <source>Over the next 2 seconds, the statue appears</source>
        <translation>Durante los próximos 2 segundos, aparece la estatua</translation>
    </message>
    <message>
        <source>Over a further 2 seconds, the statue is replaced by the pedestrians</source>
        <translation>En otros 2 segundos, la estatua será sustituida por los peatones</translation>
    </message>
    <message>
        <source>This example is really very simple, because it is also possible to animate the appearance and the disappearance of blocks.</source>
        <translation>Este ejemplo es realmente muy simple, ya que también es posible animar la aparición y la desaparición de los bloques.</translation>
    </message>
    <message>
        <source>Indeed, as shown previously, animations are generated by the transformation of the arrangement from one shot to another.</source>
        <translation>En efecto, como se indica anteriormente, las animaciones son generadas por las transformaciones de la disposición de una toma a otra.</translation>
    </message>
    <message>
        <source>So, if on the 1st shot, the statue occupied the left lower quarter of the screen rather than the same position as on the 2nd shot, then instead of simply appearing for 2 seconds on the 2nd shot, it would appear by growing out of the left lower quarter of the screen.</source>
        <translation>Por lo tanto, si en la 1ª toma, la estatua ocupa la cuarta parte inferior izquierda de la pantalla en  la misma posición que en la 2ª toma, entonces en vez de simplemente aparecer durante 2 segundos en la 2ª toma, irá apareciendo por el crecimiento de la cuarta parte inferior izquierda de la pantalla.</translation>
    </message>
    <message>
        <source>Using videos:</source>
        <translation>Usando vídeos:</translation>
    </message>
    <message>
        <source>You should note that videos are paused when they are invisible.</source>
        <translation>Hay que tener en cuenta que los videos están en pausa cuando son invisibles.</translation>
    </message>
    <message>
        <source>Therefore a video can be displayed for several seconds in the 1st shot, then be made invisible and thus paused in a 2nd shot, then be visible in a 3rd shot and resume playing, from where it stopped at the end of the 1st shot.</source>
        <translation>Por lo tanto, un vídeo se puede visualizar durante varios segundos en la 1ª toma, y luego hacerse invisible y después detenerse en una 2ª toma, a continuación ser visible en una 3ª toma y reanudar la reproducción desde donde se detuvo al final de la 1ª toma.</translation>
    </message>
</context>
<context>
    <name>0015</name>
    <message>
        <source>All shots regulations versus current shot regulations</source>
        <translation>Todos los ajustes de las tomas vs ajustes de toma actual</translation>
    </message>
    <message>
        <source>&lt;B&gt;The settings which apply to the current shot.&lt;/B&gt; These settings are made shot by shot. So, every shot possesses its own settings and the passage from a shot to the other one is defined by the passage from one setting to an other one creating a shot animation: these are called Ken Burns effects. Here are some some: </source>
        <translation>&lt;B&gt;Los ajustes que se aplican a la toma actual.&lt;/B&gt; Estos ajustes se realizan toma a toma. Por lo tanto, cada toma posee sus propios ajustes y el paso de una toma a otra se define por el paso de un escenario a otro que crea una animación de : son los llamados efectos Ken Burns. Éstos son algunos:</translation>
    </message>
    <message>
        <source>Zoom on a portion of the image</source>
        <translation>Zoom en una parte de la imagen</translation>
    </message>
    <message>
        <source>Scrolling from a portion of the image to an other one</source>
        <translation>Desplazarse desde una parte de la imagen a otra</translation>
    </message>
    <message>
        <source>Clarification or darkening of a portion of the image</source>
        <translation>Esclarecimiento u oscurecimiento de una parte de la imagen</translation>
    </message>
    <message>
        <source>etc...</source>
        <translation>etc...</translation>
    </message>
    <message>
        <source>&lt;B&gt;The settings which apply to all shots.&lt;/B&gt; These settings are made globally, that is their effects will be visible on all the shots of the slide. Here are some: </source>
        <translation>&lt;B&gt;Los ajustes que se aplican a todas las tomas.&lt;/B&gt; Estos ajustes se realizan globalmente, es decir, sus efectos serán visibles en todos los planos de la diapositiva. Éstos son algunos: </translation>
    </message>
    <message>
        <source>There are two types of settings in the &lt;a href=&quot;0119.html&quot;&gt;Slide properties dialog&lt;/a&gt;:</source>
        <translation>Existen dos tipos de ajustes en la ventana &lt;a href=&quot;0119.html&quot;&gt;Propiedades de la diapositiva &lt;/a&gt;:</translation>
    </message>
    <message>
        <source>Text and text format</source>
        <translation>Texto y formato de texto</translation>
    </message>
    <message>
        <source>Shape form</source>
        <translation>Forma de bloque</translation>
    </message>
</context>
<context>
    <name>0016</name>
    <message>
        <source>Style sheets</source>
        <translation>Hoja de estilo</translation>
    </message>
    <message>
        <source>ffDiaporama uses a style sheet system to facilitate the settings for various things.</source>
        <translation>ffDiaporama utiliza un sistema de hojas de estilo para facilitar la configuración de varios asuntos.</translation>
    </message>
    <message>
        <source>Style sheets exist for:</source>
        <translation>Existen hojas de estilo para:</translation>
    </message>
    <message>
        <source>Controlling the block coordinates, including the parameters of size, position and block rotation, and also the framing style.</source>
        <translation>El control de las coordenadas del bloque, incluyendo los parámetros de tamaño, posición y rotación de bloques, así como el estilo de marco.</translation>
    </message>
    <message>
        <source>Controlling the block shape, which includes the parameters of form, opacity, shadow and block borders.</source>
        <translation>El control de la forma de bloque, que incluye los parámetros de forma, la opacidad, la sombra y los bordes del bloque .</translation>
    </message>
    <message>
        <source>Controlling image framing, which includes the parameters of geometrical constraint and size.</source>
        <translation>Controla el encuadre de imagen, que incluye los parámetros de geometría y tamaño.</translation>
    </message>
    <message>
        <source>Formatting text, which includes the parameters of font, character attributes, alignment and text shadow.</source>
        <translation>Dar formato al texto, que incluye los parámetros de la fuente, los atributos de caracteres, la alineación y la sombra del texto.</translation>
    </message>
    <message>
        <source>Controlling text background, which includes the parameters of background (color, brush, etc.).</source>
        <translation>El control del fondo del texto, que incluye los parámetros de fondo (color, pincel, etc).</translation>
    </message>
    <message>
        <source> Open the style menu:</source>
        <translation> Abrir menu de estilo:</translation>
    </message>
    <message>
        <source>The first part of the menu lists the known styles. </source>
        <translation>La primera parte del menú enumera los estilos conocidos.</translation>
    </message>
    <message>
        <source>If the current settings correspond to a known style, this style is marked with an asterisk.</source>
        <translation>Si los valores actuales corresponden a un estilo conocido, este estilo está marcado con un asterisco.</translation>
    </message>
    <message>
        <source>The standard styles of ffDiaporama are marked with this icon: </source>
        <translation>Los estilos estándar de ffDiaporama están marcados con este icono:</translation>
    </message>
    <message>
        <source>Standard styles that you have modified and styles which you created are marked with this icon: </source>
        <translation>Los estilos estándar que se han modificado y los estilos que se han creado están marcados con este icono: </translation>
    </message>
    <message>
        <source>The second part of the menu allows you to modify the style list. </source>
        <translation>La segunda parte del menú permite modificar la lista de estilos.</translation>
    </message>
    <message>
        <source>Create a new style: allows you to create a new style with the current settings. When you select this option, a dialog appears asking you to name the new style.</source>
        <translation>Crear un nuevo estilo: permite crear un nuevo estilo con la configuración actual. Al seleccionar esta opción, aparecerá un cuadro de diálogo que solicitará que nombre dar al nuevo estilo.</translation>
    </message>
    <message>
        <source>Modify an existing style: allows you to change the settings of an existing style by using the current settings. When you select this option, the list of known styles appears. Select the style to be modified.</source>
        <translation>Modificar un estilo existente: permite cambiar la configuración de un estilo existente mediante el uso de la configuración actual. Al seleccionar esta opción, aparecerá la lista de estilos conocidos. Seleccionar el estilo de que se desea modificar.</translation>
    </message>
    <message>
        <source>Manage styles: opens the Manage style dialog.</source>
        <translation>Gestionar estilos: abrir el diálogo Gestinar estilo.</translation>
    </message>
</context>
<context>
    <name>0020</name>
    <message>
        <source>Interface description</source>
        <translation>Descripción de la interfaz</translation>
    </message>
    <message>
        <source>The main window</source>
        <translation>La ventana principal</translation>
    </message>
    <message>
        <source>The toolbar</source>
        <translation>La barra de herramientas</translation>
    </message>
    <message>
        <source>The timeline</source>
        <translation>La línea de tiempo</translation>
    </message>
    <message>
        <source>The multimedia file browser</source>
        <translation>El navegador multimedia de archivos</translation>
    </message>
    <message>
        <source>Application options</source>
        <translation>Opciones de la aplicación</translation>
    </message>
    <message>
        <source>Manage devices</source>
        <translation>Gestionar dispositivos</translation>
    </message>
    <message>
        <source>Add or modify a predefined title slide</source>
        <translation>Agregar o modificar una diapositiva de título predefinido</translation>
    </message>
    <message>
        <source>Background properties</source>
        <translation>Propiedades del fondo</translation>
    </message>
    <message>
        <source>Chapter properties</source>
        <translation>Propiedades del capítulo</translation>
    </message>
    <message>
        <source>Check configuration</source>
        <translation>Comprobar configuración</translation>
    </message>
    <message>
        <source>Export project</source>
        <translation>Exportar proyecto</translation>
    </message>
    <message>
        <source>Project properties</source>
        <translation>Propiedades del proyecto</translation>
    </message>
    <message>
        <source>Select files</source>
        <translation>Seleccionar archivos</translation>
    </message>
    <message>
        <source>Correct, reframe or cut image or video</source>
        <translation>Corregir, reencuadrar, cortar, ya sea una  imagen o un vídeo</translation>
    </message>
    <message>
        <source>File information</source>
        <translation>Información de archivo</translation>
    </message>
    <message>
        <source>Manage favorite</source>
        <translation>Gestionar favoritos</translation>
    </message>
    <message>
        <source>Manage style</source>
        <translation>Gestionar estilos</translation>
    </message>
    <message>
        <source>Music properties</source>
        <translation>Propiedades de la música</translation>
    </message>
    <message>
        <source>Render video</source>
        <translation>Generar vídeo</translation>
    </message>
    <message>
        <source>Ruler properties</source>
        <translation>Propiedades de Guías</translation>
    </message>
    <message>
        <source>Edit thumbnail model</source>
        <translation>Editar miniatura de modelo</translation>
    </message>
    <message>
        <source>Set first shot duration for a set of slides</source>
        <translation>Situar duración de primera toma para una serie de diapositivas</translation>
    </message>
    <message>
        <source>Slide properties</source>
        <translation>Propiedades de diapositiva</translation>
    </message>
    <message>
        <source>Edit text</source>
        <translation>Editar texto</translation>
    </message>
    <message>
        <source>Select transition duration for a set of slides</source>
        <translation>Seleccionar duración de transición para una serie de diapositivas</translation>
    </message>
    <message>
        <source>Transition properties</source>
        <translation>Propiedades de transición</translation>
    </message>
    <message>
        <source>Dialog boxes</source>
        <translation>Ventanas de diálogo</translation>
    </message>
    <message>
        <source> This section contains information about using ffDiaporama. </source>
        <translation>Esta sección contiene información sobre cómo usar ffDiaporama.</translation>
    </message>
    <message>
        <source>Index</source>
        <translation>Índice</translation>
    </message>
    <message>
        <source>Configuration dialog boxes</source>
        <translation>Diálogos de configuración</translation>
    </message>
    <message>
        <source>Editing dialog boxes</source>
        <translation>Diálogos de edición</translation>
    </message>
    <message>
        <source>Dialog boxes related to the project</source>
        <translation>Diálogos relacionados con el proyecto</translation>
    </message>
    <message>
        <source>Various dialog boxes</source>
        <translation>Ventanas varias</translation>
    </message>
    <message>
        <source>Add or modify a location</source>
        <translation>Añadir o modificar una localización</translation>
    </message>
    <message>
        <source>Cut a sound file</source>
        <translation>Cortar un archivo de audio</translation>
    </message>
</context>
<context>
    <name>0021</name>
    <message>
        <source>The main window</source>
        <translation>La ventana principal</translation>
    </message>
    <message>
        <source>The main window of ffDiaporama allows all the common tasks of slide management.</source>
        <translation>La ventana principal de ffDiaporama permite seleccionar todas las tareas comunes para gestionar las diapositivas.</translation>
    </message>
    <message>
        <source>The general principle is:</source>
        <translation>El principio general es:</translation>
    </message>
    <message>
        <source>Add files and titles to the &lt;a href=&quot;0023.html&quot;&gt;timeline&lt;/a&gt; in the form of slides</source>
        <translation>Añadir archivos y los títulos a la &lt;a href=&quot;0023.html&quot;&gt; línea de tiempo &lt;/a&gt; en forma de diapositivas</translation>
    </message>
    <message>
        <source>Organize slides</source>
        <translation>Organizar las diapositivas</translation>
    </message>
    <message>
        <source>Adjust slides and create animations</source>
        <translation>Ajustar las diapositivas y crear animaciones</translation>
    </message>
    <message>
        <source>To manage slides, ffDiaporama provides three display modes:</source>
        <translation>Para gestionar las diapositivas, ffDiaporama provee tres modos visuales:</translation>
    </message>
    <message>
        <source>File mode</source>
        <translation>Modo navegador de archivos</translation>
    </message>
    <message>
        <source>In this mode, the main window is divided into 3 zones: </source>
        <translation>En este modo, la ventana principal se divide en 3 zonas:</translation>
    </message>
    <message>
        <source>The &lt;a href=&quot;0023.html&quot;&gt;timeline&lt;/a&gt;</source>
        <translation>La &lt;a href=&quot;0023.html&quot;&gt;línea de tiempo&lt;/a&gt;</translation>
    </message>
    <message>
        <source>The &lt;a href=&quot;0024.html&quot;&gt;multimedia file browser&lt;/a&gt;</source>
        <translation>El &lt;a href=&quot;0024.html&quot;&gt;navegador de archivos multimedia&lt;/a&gt;</translation>
    </message>
    <message>
        <source> In this mode, you can display the multimedia files present on your hard disks and insert them using Drag &amp; Drop into the &lt;a href=&quot;0023.html&quot;&gt;timeline&lt;/a&gt; to create your slide show. </source>
        <translation>En este modo, se pueden visualizar los archivos multimedia instalados en los discos duros e insertarlos mediante Drag &amp; Drop (arrastrar y soltar) en la &lt;a href=&quot;0023.html&quot;&gt; línea de tiempo &lt;/a&gt; para crear una presentación de diapositivas.</translation>
    </message>
    <message>
        <source>A small multimedia player is displayed above on the right, near the toolbar and menu, to allow you to preview the slide show. </source>
        <translation>Un pequeño reproductor multimedia se muestra arriba a la derecha, cerca de la barra de herramientas y menús, que  permite una vista previa de la presentación de diapositivas.</translation>
    </message>
    <message>
        <source>Sheet mode</source>
        <translation>Modo hoja completa</translation>
    </message>
    <message>
        <source>In this mode, the main window is divided into 2 zones: </source>
        <translation>En este modo, la ventana principal se divide en 2 zonas:</translation>
    </message>
    <message>
        <source> In this mode, the &lt;a href=&quot;0023.html&quot;&gt;timeline&lt;/a&gt; is displayed on several lines to show as much slides as possible of the slide show. Slides are shown as on a musical score, in the form of line and at the end of a line, we pass over to the beginning og the following line. </source>
        <translation>En este modo, la &lt;a href=&quot;0023.html&quot;&gt; línea de tiempo &lt;/a&gt; se muestra en varias líneas para mostrar la mayor cantidad posible de diapositivas de la presentación. Las diapositivas se muestran como en una partitura musical, en forma de línea, y al final de una línea, se pasa al principio de la siguiente línea.</translation>
    </message>
    <message>
        <source>You can reorganize your slides by moving them using Drag &amp; Drop within the &lt;a href=&quot;0023.html&quot;&gt;timeline&lt;/a&gt;. </source>
        <translation>Se pueden reorganizar las diapositivas moviéndolas mediante Drag &amp; Drop (arrastrar y soltar) en la &lt;a href=&quot;0023.html&quot;&gt; línea de tiempo &lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Preview mode</source>
        <translation>Modo vista previa</translation>
    </message>
    <message>
        <source>A big multimedia player</source>
        <translation>Un gran reproductor multimedia</translation>
    </message>
    <message>
        <source> In this mode, you can preview your slide show in big size. </source>
        <translation>En este modo, se puede obtener una vista previa de la presentación en tamaño grande.</translation>
    </message>
    <message>
        <source>You can modify your slides and preview your changes in the multimedia player </source>
        <translation>Se pueden modificar las diapositivas y la vista previa de los cambios realizados en el reproductor multimedia</translation>
    </message>
    <message>
        <source> Switch display to file mode</source>
        <translation>Intercambiar la vista al modo navegador de archivos</translation>
    </message>
    <message>
        <source> Switch display to sheet mode</source>
        <translation>Intercambiar la vista al modo hoja completa</translation>
    </message>
    <message>
        <source> Switch display to preview mode</source>
        <translation>Intercambiar la vista al modo vista previa</translation>
    </message>
    <message>
        <source>by using contextual menus (right click on an element)</source>
        <translation>mediante el uso del menú contextual (botón derecho del ratón sobre un elemento)</translation>
    </message>
    <message>
        <source>by double clicking on elements of the slide</source>
        <translation>haciendo doble clic en los elementos de la diapositiva</translation>
    </message>
    <message>
        <source>The &lt;a href=&quot;0022.html&quot;&gt;toolbar&lt;/a&gt; and menu at the top</source>
        <translation>La &lt;a href=&quot;0022.html&quot;&gt;barra de herramientas&lt;/a&gt; y menu en parte superior de la interfaz</translation>
    </message>
    <message>
        <source>by using the buttons of the &lt;a href=&quot;0022.html&quot;&gt;toolbar&lt;/a&gt;</source>
        <translation>Usando los botones situados en la &lt;a href=&quot;0022.html&quot;&gt;barra de herramientas&lt;/a&gt;</translation>
    </message>
    <message>
        <source>To change display mode, use the buttons located in the status bar, to the right, at the bottom of the main window.</source>
        <translation>Para cambiar el modo de visualización, utilizar los botones situados en la barra de estado, en la parte inferior de la ventana principal, a la derecha.</translation>
    </message>
    <message>
        <source>The editing of slides is done:</source>
        <translation>La edición de las diapositivas se realiza:</translation>
    </message>
</context>
<context>
    <name>0022</name>
    <message>
        <source>The toolbar</source>
        <translation>La barra de herramientas</translation>
    </message>
    <message>
        <source>These buttons are grouped under four tabs: File / Project / Render and Help</source>
        <translation>Estos botones se agrupan en cuatro pestañas Archivo / Proyecto / Procesamiento y Ayuda</translation>
    </message>
    <message>
        <source>The project management commands</source>
        <translation>Los comandos de gestión del proyectos</translation>
    </message>
    <message>
        <source>The following table summarizes the main project management commands:</source>
        <translation>El siguiente cuadro resume los principales comandos de gestión del proyecto:</translation>
    </message>
    <message>
        <source>Toolbar button</source>
        <translation>Botón de barra de herramientas</translation>
    </message>
    <message>
        <source>Project menu command</source>
        <translation>Comando de menú Proyecto</translation>
    </message>
    <message>
        <source>Keyboard shortcut</source>
        <translation>Atajos de teclado</translation>
    </message>
    <message>
        <source>Action</source>
        <translation>Acción</translation>
    </message>
    <message>
        <source>New</source>
        <translation>Nuevo</translation>
    </message>
    <message>
        <source>CTRL+N</source>
        <translation>CTRL+N</translation>
    </message>
    <message>
        <source>(If the current project has unsaved modifications, ffDiaporama prompts you to save it.)</source>
        <translation>(Si el proyecto actual no ha guardado las modificaciones, ffDiaporama le pide que lo guarde.)</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Abrir</translation>
    </message>
    <message>
        <source>CTRL+O</source>
        <translation>CTRL+O</translation>
    </message>
    <message>
        <source>Allows you to open an existing project. The file selection dialog appears and allows you to select the project to be opened. </source>
        <translation>Permite abrir un proyecto existente. El cuadro de diálogo de selección de archivos aparece y permite seleccionar el proyecto que se abrirá.</translation>
    </message>
    <message>
        <source>(If the current project has unsaved modifications, ffDiaporama prompts you to save it.) </source>
        <translation>(Si el proyecto actual no ha guardado las modificaciones, ffDiaporama solicita que lo guarde.)</translation>
    </message>
    <message>
        <source>Remark: if the project contains files which were moved or renamed, ffDiaporama will fail to open them again. In that case, a dialog appears allowing you to select a new file.</source>
        <translation>Nota: si el proyecto contiene archivos que se mueven o renombran, ffDiaporama no podrá abrirlo de nuevo. En ese caso, aparece un diálogo que permite seleccionar un archivo nuevo.</translation>
    </message>
    <message>
        <source>Open recent</source>
        <translation>Abrir reciente</translation>
    </message>
    <message>
        <source>Allows you to reopen a recently opened project. ffDiaporama stores a list of the last ten projects.</source>
        <translation>Permite volver a abrir un proyecto de reciente apertura. ffDiaporama almacena una lista de los últimos diez proyectos.</translation>
    </message>
    <message>
        <source>Save</source>
        <translation>Guardar</translation>
    </message>
    <message>
        <source>CTRL+S</source>
        <translation>CTRL+S</translation>
    </message>
    <message>
        <source>Allows you to save the current project in a project file.</source>
        <translation>Permite guardar el proyecto actual en un archivo de proyecto.</translation>
    </message>
    <message>
        <source>If you have not saved previously the project, a file selection dialog appears and allows you to select a destination file.</source>
        <translation>Si no se ha guardado el proyecto, aparece un cuadro de diálogo de selección de archivos y permite seleccionar un archivo de destino.</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation>Guardar como</translation>
    </message>
    <message>
        <source>Project properties</source>
        <translation>Propiedades del proyecto</translation>
    </message>
    <message>
        <source>Settings</source>
        <translation>Configurar</translation>
    </message>
    <message>
        <source>Quit</source>
        <translation>Salir</translation>
    </message>
    <message>
        <source>CTRL+W</source>
        <translation>CTRL+W</translation>
    </message>
    <message>
        <source>Allows you to exit ffDiaporama.</source>
        <translation>Permite salir de ffDiaporama.</translation>
    </message>
    <message>
        <source>The slide management commands</source>
        <translation>Los comandos de administración de diapositivas</translation>
    </message>
    <message>
        <source>The following table summarizes the slide management commands:</source>
        <translation>En la siguiente tabla se resumen los comandos de administración de diapositivas:</translation>
    </message>
    <message>
        <source>Edit menu command</source>
        <translation>Comando de edición de menu</translation>
    </message>
    <message>
        <source>Add title</source>
        <translation>Añadir título</translation>
    </message>
    <message>
        <source>Add files</source>
        <translation>Añadir archivos</translation>
    </message>
    <message>
        <source>INS</source>
        <translation>INS</translation>
    </message>
    <message>
        <source>Add project</source>
        <translation>Añadir proyecto</translation>
    </message>
    <message>
        <source>Cut</source>
        <translation>Cortar</translation>
    </message>
    <message>
        <source>CTRL+X</source>
        <translation>CTRL+X</translation>
    </message>
    <message>
        <source>Copy</source>
        <translation>Copiar</translation>
    </message>
    <message>
        <source>CTRL+C</source>
        <translation>CTRL+C</translation>
    </message>
    <message>
        <source>Allows you to copy the current slide to the clipboard.</source>
        <translation>Permite copiar la diapositiva actual en el portapapeles.</translation>
    </message>
    <message>
        <source>Paste</source>
        <translation>Pegar</translation>
    </message>
    <message>
        <source>CTRL+V</source>
        <translation>CTRL+V</translation>
    </message>
    <message>
        <source>Edit</source>
        <translation>Editar</translation>
    </message>
    <message>
        <source>Opens a sub-menu giving access to the slide modification functions</source>
        <translation>Abre un submenú que da acceso a las funciones de modificación de diapositivas</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Eliminar</translation>
    </message>
    <message>
        <source>DEL</source>
        <translation>DEL</translation>
    </message>
    <message>
        <source>Allows you to remove the current slide.</source>
        <translation>Permite eliminar la diapositiva actual.</translation>
    </message>
    <message>
        <source>Remarks:</source>
        <translation>Notas:</translation>
    </message>
    <message>
        <source>Inserted slides are either at the end of the project, or after the current slide, depending to the option &quot;add the new slides (at the end of the project or after the current slide) &quot; in the configuration dialog.</source>
        <translation>Las inserciones de diapositivas se posicionan al final del proyecto, después de la diapositiva actual, dependiendo de la opción &quot;añadir nuevas diapositivas (al final del proyecto o después de la diapositiva actual)&quot; del cuadro de diálogo de configuración.</translation>
    </message>
    <message>
        <source>The render commands</source>
        <translation>Los comandos de generación de videos</translation>
    </message>
    <message>
        <source>The following table summarizes the main render commands:</source>
        <translation>La siguiente tabla resume los principales comandos para generar videos :</translation>
    </message>
    <message>
        <source>Render menu command</source>
        <translation>Comando del menu Generar video</translation>
    </message>
    <message>
        <source>Player and Smartphone</source>
        <translation>Reproductor y Smartphone</translation>
    </message>
    <message>
        <source>Multimedia system</source>
        <translation>Sistema Multimedia</translation>
    </message>
    <message>
        <source>For the WEB</source>
        <translation>Para la WEB</translation>
    </message>
    <message>
        <source>Lossless</source>
        <translation>Sin pérdidas</translation>
    </message>
    <message>
        <source>Advanced</source>
        <translation>Avanzado</translation>
    </message>
    <message>
        <source>Remark:</source>
        <translation>Nota:</translation>
    </message>
    <message>
        <source>The lossless format is readable only by few equipment and generates files of enormous size. Consequently, it is useful only to generate parts of a project which will then be joined into a final project.</source>
        <translation>El formato lossless es legible sólo por pocos equipos y genera archivos de gran tamaño. Por consiguiente, es útil sólo para generar partes de un proyecto que luego se unirán en un proyecto final.</translation>
    </message>
    <message>
        <source>The help commands</source>
        <translation>Comandos de ayuda</translation>
    </message>
    <message>
        <source>The following table summarizes the main help commands:</source>
        <translation>La siguiente tabla resume los comandos de la ayuda principal:</translation>
    </message>
    <message>
        <source>Help menu command</source>
        <translation>Comando del menu de ayuda</translation>
    </message>
    <message>
        <source>About</source>
        <translation>Acerca de</translation>
    </message>
    <message>
        <source>Opens the about dialog. This displays information about the release, license and system information</source>
        <translation>Abre el diálogo acerca de. Muestra información acerca de la información de la versión, la licencia y el sistema</translation>
    </message>
    <message>
        <source>Support and help (F1)</source>
        <translation>Soporte y ayuda (F1)</translation>
    </message>
    <message>
        <source>Opens the ffDiaporama WIKI index</source>
        <translation>Abre el índice de la Ayuda de ffDiaporama</translation>
    </message>
    <message>
        <source>What&apos;s new</source>
        <translation>Qué es nuevo</translation>
    </message>
    <message>
        <source>Opens the Blog/News page from the ffDiaporama website</source>
        <translation>Abre Blog/Noticias del sitio web de ffDiaporama</translation>
    </message>
    <message>
        <source>Allows you to create a new blank project. The &lt;a href=&quot;0108.html&quot;&gt;project properties dialog&lt;/a&gt; appears and allows you to setup the new project. </source>
        <translation>Permite crear un nuevo proyecto en blanco. El &lt;a href=&quot;0108.html&quot;&gt; diálogo Propiedades del proyecto &lt;/a&gt; aparece y permite configurar el nuevo proyecto.</translation>
    </message>
    <message>
        <source>Opens a sub-menu giving you access to the following functions</source>
        <translation>Abrir un submenú que da acceso a las siguientes funciones</translation>
    </message>
    <message>
        <source>Save as: Allows you to save the current project in a different file. The &lt;a href=&quot;0109.html&quot;&gt;file selection dialog&lt;/a&gt; appears and allows you to select a destination file.</source>
        <translatorcomment> </translatorcomment>
        <translation>Guardar como: Permite guardar el proyecto actual en un nuevo archivo. El diálogo &lt;a href=&quot;0109.html&quot;&gt;Selección de archivo&lt;/a&gt; aparece y permite seleccionar un archivo de destino.</translation>
    </message>
    <message>
        <source>Export project: Export current project and all used files in a new folder. The &lt;a href=&quot;0107.html&quot;&gt;export project dialog&lt;/a&gt; appears and allows you to setup the export.</source>
        <translation>Exportar proyectot: Exportar proyecto actual y todos los archivos que se utilizan en una nueva carpeta. El diálogo &lt;a href=&quot;0107.html&quot;&gt;Exportar proyecto&lt;/a&gt; aparece y permite configurar la exportación.</translation>
    </message>
    <message>
        <source>Allows you to open the &lt;a href=&quot;0108.html&quot;&gt;project properties dialog&lt;/a&gt;</source>
        <translation>Permite abrir el diálogo&lt;a href=&quot;0108.html&quot;&gt;Propiedades del proyecto&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Allows you to define applications settings. The &lt;a href=&quot;0101.html&quot;&gt;application settings dialog&lt;/a&gt; appears.</source>
        <translation>Permite definir las opcioes de la aplicación. Aparece el diálogo. The &lt;a href=&quot;0101.html&quot;&gt;Opciones de la aplicación&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Add empty slide: Allows you to add an empty slide : the new empty slide is appended to the project and is displayed in the &lt;a href=&quot;0023.html&quot;&gt;timeline&lt;/a&gt;.</source>
        <translation>Añadir diapositiva vacía:Permite agregar una diapositiva vacía: la nueva diapositiva vacía se añade al proyecto y se muestra en la  &lt;a href=&quot;0023.html&quot;&gt;Línea de tiempo&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Add a predefined title slide: Allows you to add a slide based on a model. The &lt;a href=&quot;0103.html&quot;&gt;predefined title slide properties dialog&lt;/a&gt; appears.</source>
        <translation>Añadir una diapositiva de título predefinido: permite agregar una diapositiva basado en un modelo. Aparece el diálogo &lt;a href=&quot;0103.html&quot;&gt;Editar diapositiva de título predefinido&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Allows you to add photo or video files : A &lt;a href=&quot;0109.html&quot;&gt;file selection dialog&lt;/a&gt; appears and allows you to select one or more files. </source>
        <translation>Permite agregar los archivos de fotos o de vídeo en : A &lt;a href=&quot;0109.html&quot;&gt;Seleccionar archivo&lt;/a&gt; y se abre el diálogo, permitiendo seleccionar uno o más archivos.</translation>
    </message>
    <message>
        <source>Allows you to add the slides of an existing project to the end the current project: a &lt;a href=&quot;0109.html&quot;&gt;file selection dialog&lt;/a&gt; appears and allows you to select a project file. Slides, slide settings, music and background of the project are added to the current project.</source>
        <translation>Permite agregar las diapositivas de un proyecto existente al final del proyecto actual: el diálogo &lt;a href=&quot;0109.html&quot;&gt;Seleccionar archivo&lt;/a&gt; permite seleccionar un archivo de proyecto. Diapositivas, ajustes de diapositivas, música y fondos del proyecto se añaden al proyecto actual.</translation>
    </message>
    <message>
        <source>Allows you to cut the current slide (remove it from the &lt;a href=&quot;0023.html&quot;&gt;timeline&lt;/a&gt; and put it in the clipboard).</source>
        <translation>Permite cortar la diapositiva actual (eliminarlo de la &lt;a href=&quot;0023.html&quot;&gt;Línea de tiempo&lt;/a&gt; y ponerlo en el portapapeles).</translation>
    </message>
    <message>
        <source>Open the &lt;a href=&quot;0104.html&quot;&gt;background properties dialog&lt;/a&gt; (Equivalent to a double click on the background track)</source>
        <translation>Abrir el diálogo &lt;a href=&quot;0104.html&quot;&gt;Propiedades del fondo&lt;/a&gt; (Equivalente a un doble clic en la pista del fondo)</translation>
    </message>
    <message>
        <source>Depending on the slide type, open the &lt;a href=&quot;0119.html&quot;&gt;slide properties dialog&lt;/a&gt; if it&apos;s a standard slide or open the &lt;a href=&quot;0103.html&quot;&gt;predefined title slide properties dialog&lt;/a&gt; if it&apos;s a predefined title slide. (Equivalent to a double click on the mounting track)</source>
        <translation>Dependiendo del tipo de diapositivas, abrir el diálogo &lt;a href=&quot;0119.html&quot;&gt; Propiedades de diapositiva &lt;/a&gt; si se trata de una diapositiva estándar, o abrir el diçalogo  &lt;a href=&quot;0103.html&quot;&gt;diapositiva de título predefinido&lt;/a&gt; si se trata de una diapositiva de título predefinido. (Equivalente a un doble clic en la pista de montaje)</translation>
    </message>
    <message>
        <source>Open the &lt;a href=&quot;0114.html&quot;&gt;music properties dialog&lt;/a&gt; (Equivalent to a double click on the music track)</source>
        <translation>Abrir el diálogo &lt;a href=&quot;0114.html&quot;&gt;Propiedades de la música&lt;/a&gt; (Equivalente a hacer un doble clic en la pista de sonido)</translation>
    </message>
    <message>
        <source>Open the &lt;a href=&quot;0122.html&quot;&gt;transition properties dialog&lt;/a&gt; (Equivalent to a double click on the transition)</source>
        <translation>Abrir el diálogo &lt;a href=&quot;0122.html&quot;&gt;Propiedades de la transición&lt;/a&gt; (Equivalente a hacer un doble clic en el icono para la transición)</translation>
    </message>
    <message>
        <source>It is possible to add slides by Drag and Drop directly using the file browser. Drag photos or videos onto the &lt;a href=&quot;0023.html&quot;&gt;timeline&lt;/a&gt; and slides are created at the point you release the files.</source>
        <translation>Es posible añadir diapositivas arrastrando y soltando (Drag and Drop) directamente, utilizando el explorador de archivos. Arrastrar fotos o videos sobre la &lt;a href=&quot;0023.html&quot;&gt; línea de tiempo &lt;/a&gt; y las diapositivas se crean al soltar los archivos.</translation>
    </message>
    <message>
        <source>Allows you to render the video for selected equipment from the device database. </source>
        <translation>Permite hacer el video para el equipo seleccionado de la base de datos.</translation>
    </message>
    <message>
        <source>The &lt;a href=&quot;0115.html&quot;&gt;render movie dialog&lt;/a&gt; from database appears.</source>
        <translation>Aparece el diálogo &lt;a href=&quot;0115.html&quot;&gt;Generar video&lt;/a&gt; a partir de un modelo desde la base de datos.</translation>
    </message>
    <message>
        <source>Allows you to render the video in a lossless format. Lossless format is not destructive, so it is possible to render several times the same video without losing in quality. The &lt;a href=&quot;0115.html&quot;&gt;render movie dialog&lt;/a&gt; appears.</source>
        <translation>Permite generar el video en un formato sin pérdidas. El formato sin pérdidas no es destructivo, por lo que es posible generar varias veces el mismo vídeo sin perder en calidad. Aparece el diálogo &lt;a href=&quot;0115.html&quot;&gt;Generar video&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Allows you to render the video using the &lt;a href=&quot;0115.html&quot;&gt;Advanced render movie dialog&lt;/a&gt;.</source>
        <translation>Permite generar el vídeo usando el diálogo &lt;a href=&quot;0115.html&quot;&gt;Generarción de video avanzada&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Export Soundtrack</source>
        <translation>Exportar pista de sonido</translation>
    </message>
    <message>
        <source>Allows you to render only the sound track of the project. The &lt;a href=&quot;0115.html&quot;&gt;render movie dialog&lt;/a&gt; appears.</source>
        <translation>Permite procesar sólo la banda sonora del proyecto. Aparece el diálogo &lt;a href=&quot;0115.html&quot;&gt;Exportar pista de audio&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Note: Each selected file is added to the project using sort order specified in the configuration menu of the multimedia file explorer.</source>
        <translation>Nota: Cada archivo seleccionado se añade al proyecto utilizando orden de clasificación especificado en el menú de configuración del explorador de archivos multimedia.</translation>
    </message>
    <message>
        <source>Allows you to paste the slide or the image currently in the clipboard into the &lt;a href=&quot;0023.html&quot;&gt;timeline&lt;/a&gt;.</source>
        <translation>Permite pegar la diapositiva o la imagen actual en el portapapeles en la &lt;a href=&quot;0023.html&quot;&gt;línea de tiempo&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Add a map: Allows you to add a Google Maps map. The &lt;a href=&quot;0110.html&quot;&gt;correct, reframe or cut image or video dialog&lt;/a&gt; appears.</source>
        <translation>Añadir un mapa: Permite agregar un mapa de Google Maps. Aparece el diálogo &lt;a href=&quot;0110.html&quot;&gt;Corregir, reencuadrar o cortar imagen o video&lt;/a&gt;.</translation>
    </message>
</context>
<context>
    <name>0023</name>
    <message>
        <source>The timeline</source>
        <translation>La línea de tiempo</translation>
    </message>
    <message>
        <source>The timeline lists the slides which compose the project. The slides are listed from left to right.</source>
        <translation>La línea de tiempo muestra las diapositivas que componen el proyecto. Las diapositivas se presentan de izquierda a derecha.</translation>
    </message>
    <message>
        <source>Each slide is represented by the 3 tracks:</source>
        <translation>Cada diapositiva está representada por 3 pistas:</translation>
    </message>
    <message>
        <source>The background track:</source>
        <translation>Una pista de fondo:</translation>
    </message>
    <message>
        <source>An icon corresponding to the transition selected to pass from the previous background to this slide (if a new background is defined). .</source>
        <translation>Un icono correspondiente a la transición seleccionada para pasar de los fondos anteriores a esta diapositiva (si se define un nuevo fondo).</translation>
    </message>
    <message>
        <source>A thumbnail representing the background associated with this slide.</source>
        <translation>Una miniatura representando el fondo que está asociado con su diapositiva.</translation>
    </message>
    <message>
        <source>The slide number.</source>
        <translation>Número de la diapositiva.</translation>
    </message>
    <message>
        <source> Possibly this icon may appear at the upper left if the slide is used as chapter start</source>
        <translation>Posíblemente aparezca un icono en la parte superior izquierda si la diapositiva es usada como inicio de capítulo</translation>
    </message>
    <message>
        <source>The mounting track:</source>
        <translation>La pista de montaje:</translation>
    </message>
    <message>
        <source>An icon corresponding to the transition selected to pass from the previous slide to this slide, under which is indicated the duration of the transition in seconds.</source>
        <translation>Un icono correspondiente a la transición seleccionada y que enlaza la diapositiva anterior con la actual, bajo la cual se indica la duración de la transición en segundos.</translation>
    </message>
    <message>
        <source>A thumbnail in the form of a static image for slides consisting of title or photo, or in the form of a video (under which is placed a soundtrack).</source>
        <translation>Una miniatura que es una imagen estática representando a la diapositiva, y que puede ser el título, una fotografía, o un vídeo (y debajo se situaría la banda sonora).</translation>
    </message>
    <message>
        <source> Possibly this icon may appear at the upper left if the slide is composed of several blocks.</source>
        <translation>Posíblemente este icono puede aparecer en la zona superior izquierda si una diapositiva está compuesta por varios bloques.</translation>
    </message>
    <message>
        <source> Possibly this icon may appear at the upper right if the slide is animated (that is consisting of more than one shot).</source>
        <translation>Posíblemente este iconopuede aparecer en la zona superior izquierda si una diapositiva contiene animación (consiste en más de una toma).</translation>
    </message>
    <message>
        <source> Possibly this icon may appear at the bottom right if the slide contains at least an image for which you defined a transformation.</source>
        <translation>Posíblemente este icono puede aparecer en la zona inferior derecha si una diapositiva contiene una transformación que se ha definido.</translation>
    </message>
    <message>
        <source> Possibly this icon may appear at the bottom left if the slide is an automatic predefined slide.</source>
        <translation>Posíblemente este icono puede aparecer en la zona inferior izquierda si la diapositiva se ha definido de forma automática.</translation>
    </message>
    <message>
        <source> Possibly this icon may appear at the bottom right if the predefined slide is a project title slide.</source>
        <translation>Posíblemente este icono puede aparecer en la zona inferior derecha si una diapositiva es un proyecto de diapositiva título.</translation>
    </message>
    <message>
        <source> Possibly this icon may appear at the bottom right if the predefined slide is a chapter title slide.</source>
        <translation>Posíblemente este icono puede aparecer en la zona inferior derecha si una diapositiva es un capítulo de diapositiva de título.</translation>
    </message>
    <message>
        <source> Possibly this icon may appear at the bottom right if the predefined slide is a generic title slide.</source>
        <translation>Posíblemente este icono puede aparecer en la zona inferior derecha si una diapositiva es una diapositiva de título genérico.</translation>
    </message>
    <message>
        <source>Remark: The thumbnail represents the first image on the slide.</source>
        <translation>Nota: La miniatura representa la primera imagen de la diapositiva.</translation>
    </message>
    <message>
        <source>The music track:</source>
        <translation>La pista de música:</translation>
    </message>
    <message>
        <source>Every play-list is shown by a change of color.</source>
        <translation>Cada lista de reproducción se muestra por una alternancia de color.</translation>
    </message>
    <message>
        <source>The track is more or less filled according to the sound volume selected, displaying the variation in volume.</source>
        <translation>La pista se llena más o menos dependiendo del volumen de sonido seleccionado, mostrando cómo va variando el volumen.</translation>
    </message>
    <message>
        <source>The musical transitions (fade in/out) are shown as crossings.</source>
        <translation>Las transiciones musicales (fade in/out) se muestran bajo la forma de cruces.</translation>
    </message>
    <message>
        <source>Remark: Possible pauses are symbolized by a change in the volume to zero and the display of this icon: </source>
        <translation>Nota: Las posibles pausas están simbolizadas por un cambio de volumen a cero y mostrando este icono:</translation>
    </message>
    <message>
        <source>To modify an element:</source>
        <translation>Modificar un elemento:</translation>
    </message>
    <message>
        <source>You can also call a contextual menu by doing a right click ahead the thumbnail or click on the Edit button. This contextual menu allows you to select an action.</source>
        <translation>También se puede llamar a un menú contextual al hacer un clic derecho delante de la miniatura o en el botón Editar. Este menú contextual permite seleccionar una acción.</translation>
    </message>
    <message>
        <source>To modify several elements at one time:</source>
        <translation>Se pueden modificar varios elementos a la vez:</translation>
    </message>
    <message>
        <source>You can select several slides by using the mouse and the CTRL and SHIFT:</source>
        <translation>Se pueden seleccionar varias diapositivas con el ratón y las teclas CTRL y SHIFT:</translation>
    </message>
    <message>
        <source>CTRL + click on a slide: add or removes the slide of the selection</source>
        <translation>CTRL + clic en una diapositiva: agrega o elimina la diapositiva seleccionada</translation>
    </message>
    <message>
        <source>SHIFT + click on a slide: add all the slides understood between the last one selected and the slide which you have just clicked</source>
        <translation>SHIFT + clic en una diapositiva: agregar todas las diapositivas comprendidas entre la última seleccionada y la diapositiva donde se acaba de hacer clic</translation>
    </message>
    <message>
        <source>Then, by making a right click on one of the slides of the selection, a contextual menu appears.</source>
        <translation>Entonces, haciendo clic con el botón derecho en una de las diapositivas de la selección, aparecerá un menú contextual.</translation>
    </message>
    <message>
        <source>This menu suggests various actions making on all the slides of the selection such as:</source>
        <translation>Este menú sugiere diversas acciones que actúan en todas las diapositivas de la selección, tales como:</translation>
    </message>
    <message>
        <source>Copy/Cut/Paste/Remove all slide of the selection</source>
        <translation>Copiar/Cortar/Pegar/Eliminar todas las diapositivas de la selección</translation>
    </message>
    <message>
        <source>Modify the duration of the 1st shot for all the slides of the selection</source>
        <translation>Modificar la duración de la primera toma para todas las diapositivas de la selección</translation>
    </message>
    <message>
        <source>Modify the transition for all the slides of the selection</source>
        <translation>Modificar la transición para todas las diapositivas de la selección</translation>
    </message>
    <message>
        <source>Modify the music for all the slides of the selection</source>
        <translation>Modificar la música para todas las diapositivas de la selección</translation>
    </message>
    <message>
        <source>etc...</source>
        <translation>etc...</translation>
    </message>
    <message>
        <source>To reorder the slide in the timeline:</source>
        <translation>Reordenar diapositivas en la línea de tiempo:</translation>
    </message>
    <message>
        <source>Simply drag the slide to a new position with the mouse (drag &amp; drop)</source>
        <translation>Símplemente arrastrando con el ratón la diapositiva a una nueva posición (drag &amp; drop)</translation>
    </message>
    <message>
        <source>To modify the display of the timeline:</source>
        <translation>Modificar la visualización de la línea de tiempo:</translation>
    </message>
    <message>
        <source>The timeline settings commands are in the status bar, to the right, at the bottom of the main window.</source>
        <translation>La configuración de las acciones para la línea de tiempo están en la barra de estado, en la parte inferior derecha de la ventana principal.</translation>
    </message>
    <message>
        <source> Increases the size of the thumbnails but reduces the number of thumbnails shown in the timeline.</source>
        <translation>Aumenta el tamaño de las miniaturas, pero reduce el número de miniaturas que se mostrará en la línea de tiempo.</translation>
    </message>
    <message>
        <source> Reduces the size of the thumbnails and increases the number of thumbnails shown in the timeline.</source>
        <translation>Reduce el tamaño de las miniaturas, pero incrementa el número de miniaturas que se mostrará en la línea de tiempo.</translation>
    </message>
    <message>
        <source>To modify the background, double-click the thumbnail of the background. This action opens the &lt;a href=&quot;0104.html&quot;&gt;Define background&lt;/a&gt; dialog.</source>
        <translation>Para modificar el fondo, doble-clic en la miniatura que representa el fondo. Esta acción abre la ventana que contiene &lt;a href=&quot;0104.html&quot;&gt;Configurar el fondo&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>To modify the entering slide transition, double-click the slide transition. This action opens the &lt;a href=&quot;0122.html&quot;&gt;Define the entering slides transitions&lt;/a&gt; dialog.</source>
        <translation>Para modificar la transición entre diapositivas , hacer doble clic en la miniatura que representa la transición de diapositivas. Esta acción abre la ventana &lt;a href=&quot;0122.html&quot;&gt;Definir las transiciones&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>To modify the music associated with the slide, double-click the zone corresponding to the slide musical track. This action opens the &lt;a href=&quot;0114.html&quot;&gt;Define the music track&lt;/a&gt; dialog.</source>
        <translation>Para modificar la música asociada con la diapositiva, hacer doble clic en la zona correspondiente a la pista musical para diapositivas. Esta acción abre la ventana &lt;a href=&quot;0114.html&quot;&gt;Definir la pista de audio&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>To modify the slide (framing, filter, animation, etc.) double-click the thumbnail. This action opens the &lt;a href=&quot;0119.html&quot;&gt;slides properties dialog&lt;/a&gt; if it&apos;s a standard slide or open the &lt;a href=&quot;0103.html&quot;&gt;predefined title slide properties dialog&lt;/a&gt; if it&apos;s a predefined title slide.</source>
        <translation>Para modificar la diapositiva (encuadre, filtro, animación, etc) hacer doble clic en la miniatura. Esta acción abre la ventana &lt;a href=&quot;0119.html&quot;&gt;Propiedades de diapositivas&lt;/a&gt; si se trata de una diapositiva estándar o abrir la ventana &lt;a href=&quot;0103.html&quot;&gt;diapositiva de título prefefinido&lt;/a&gt; si se trata de una diapositiva de título predefinido.</translation>
    </message>
    <message>
        <source>To select the current slide:</source>
        <translation>Para seleccionar la diapositiva actual:</translation>
    </message>
    <message>
        <source>Click on a slide to define it as current slide.</source>
        <translation>Hacer clic en una diapositiva para definirla con diapositiva actual.</translation>
    </message>
    <message>
        <source>Use the mouse wheel to change the current slide.</source>
        <translation>Usar la rueda del ratón para cambiar a la diapositiva actual. </translation>
    </message>
    <message>
        <source>Note: When previewing the selected slide is automatically defined on the current slide preview.</source>
        <translation>Nota: Cuando previsualizamos la diapositiva seleccionada, ésta es definida automáticamente como diapositiva actual mostrada.</translation>
    </message>
    <message>
        <source>On slide associated with the music, the cover, artist and song title are displayed</source>
        <translation>En la diapositiva asociada con la música, se muestran la portada, el artista y el título de la canción</translation>
    </message>
    <message>
        <source>To move the music or the background associated to a slide to another slide:</source>
        <translation>Para mover la música o el fondo asociado de una diapositiva a otra:</translation>
    </message>
    <message>
        <source>Simply drag the music or background to a new position with the mouse (drag &amp; drop)</source>
        <translation>Basta con arrastrar la música o el fondo a una nueva posición con el ratón (arrastrar y soltar)</translation>
    </message>
</context>
<context>
    <name>0024</name>
    <message>
        <source>The multimedia file browser</source>
        <translation>El navegador multimedia de archivos</translation>
    </message>
    <message>
        <source>ffDiaporama offers a multimedia file browser which is shown in the main window when you select the file browser mode in the main window. It is designed for quick access to the multimedia files on your computer.</source>
        <translation>ffDiaporama ofrece un explorador de archivos multimedia que se muestra en la ventana principal cuando se selecciona el modo de explorador de archivos . Está diseñado para un rápido acceso a los archivos multimedia en el ordenador.</translation>
    </message>
    <message>
        <source>The main advantages are, that you can view the multimedia information of specific files even without or before adding them to your project. For instance, you can filter the view to obtain information of only photos, video files or music files.</source>
        <translation>Las principales ventajas son que se puede ver la información multimedia de los archivos concretos, incluso antes de añadirlos al proyecto. Por ejemplo, se puede filtrar la vista para obtener información de sólo fotos, archivos de vídeo o archivos de música.</translation>
    </message>
    <message>
        <source>And moreover, you can select one or more multimedia files and add them to your project with drag &amp; drop.</source>
        <translation>Y por otra parte, se pueden seleccionar uno o más archivos multimedia y añadirlos al proyecto realizando drag &amp; drop (arrastrar y soltar).</translation>
    </message>
    <message>
        <source>The main purpose of the file browser is therefore the viewing and use of (multimedia) files. Some file management tasks are integrated for your convenience, i.e. creating folders deleting files or folders and renaming files or folders.</source>
        <translation>Por consiguiente, el objetivo principal del navegador de archivos es la visualización y el uso de archivos multimedia. Algunas de las tareas de gestión de archivos se integran para mayor comodidad, es decir, la creación de carpetas, borrar archivos o carpetas y renombrar archivos o carpetas.</translation>
    </message>
    <message>
        <source>Remark:</source>
        <translation>Nota:</translation>
    </message>
    <message>
        <source>Files can be presented differently than by the system file browser (presence of filters showing only some files - management of the file/icon pairs - etc.)</source>
        <translation>Los archivos pueden ser presentados de manera diferente que por el explorador de archivos del sistema (presencia de filtros que muestran sólo algunos archivos - Gestión de los pares de archivos/icono - etc</translation>
    </message>
    <message>
        <source>The multimedia file browser follows the display rules used by the majority of multimedia systems (gateway, multimedia hard drive, etc.): </source>
        <translation>El explorador de archivos multimedia se ajusta a las reglas de visualización utilizados por la mayoría de los sistemas multimedia (pasarela, disco duro multimedia, etc:</translation>
    </message>
    <message>
        <source>If a drive or a folder contains a folder.jpg file, then this image file is used as icon for the drive or the folder</source>
        <translation>Si una unidad o una carpeta contiene un archivo folder.jpg, entonces, este archivo de imagen se utiliza como icono de la unidad o la carpeta</translation>
    </message>
    <message>
        <source>If a video or music file is accompanied with an image file with the .jpg extension carrying the same name, then this image file is used as icon for this file (example: holidays.mkv and holidays.jpg in the same folder</source>
        <translation>Si un archivo de vídeo o de música se acompaña con un archivo de imagen con la extensión jpg y lleva el mismo nombre, el archivo de imagen se utiliza como icono para el archivo (por ejemplo: holidays.mkv y holidays.jpg en la misma carpeta</translation>
    </message>
    <message>
        <source>The ffDiaporama multimedia file browser is not designed to manage files: so you cannot make copies of files or move files.</source>
        <translation>El explorador de archivos multimedia de ffDiaporama no está diseñado para manejar archivos: por lo que no puede hacer copias de archivos o mover archivos.</translation>
    </message>
    <message>
        <source> Folder tree</source>
        <translation> Árbol de directorios</translation>
    </message>
    <message>
        <source>The folder tree shows the drives and folders of your system. Under every drive the folders of that drive are listed, then under every folder the subfolders, if present and so on.</source>
        <translation>El árbol de directorios muestra las unidades y carpetas del sistema. En cada unidad  las carpetas de esa unidad están listados, entonces bajo todas las carpetas de las subcarpetas, si existen, y así sucesivamente.</translation>
    </message>
    <message>
        <source>You can:</source>
        <translation>Se puede:</translation>
    </message>
    <message>
        <source>Click a drive or a folder to select it</source>
        <translation>Hacer clic sobre una unidad o carpeta para seleccionar</translation>
    </message>
    <message>
        <source>Click the triangle preceding the drive name or folder name to display or hide the list of subfolders</source>
        <translation>Hacer clic en el triángulo que precede al nombre de la unidad o de la carpeta para mostrar u ocultar la lista de subcarpetas</translation>
    </message>
    <message>
        <source>Make a right click on a drive or a folder to call the contextual menu on this drive or folder. The contextual menu proposes then the following options:</source>
        <translation>Hacer un clic botón derecho del ratón en una unidad o una carpeta para abrir el menú contextual sobre esta unidad o carpeta. El menú contextual plantea a continuación las siguientes opciones:</translation>
    </message>
    <message>
        <source>&lt;B&gt;Refresh all&lt;/B&gt; to update the whole tree (as so if you have to insert a CD-ROM, a DVD or an USB drive, this one is shown in the tree)</source>
        <translation>&lt;B&gt;Actualizar todo&lt;/B&gt; para actualizar todo el árbol (por ejemplo, al insertar un CD-ROM, un DVD o una unidad USB, para que estos se muestra en el árbol)</translation>
    </message>
    <message>
        <source>&lt;B&gt;Refresh from here&lt;/B&gt; to update the tree from this folder (update only what is under this folder)</source>
        <translation>&lt;B&gt;Actualizar a partir de aquí&lt;/B&gt; para actualizar el árbol en esta carpeta (actualizar sólo lo que está en esta carpeta)</translation>
    </message>
    <message>
        <source>Create a new folder</source>
        <translation>Crear una nueva carpeta</translation>
    </message>
    <message>
        <source>Remove a folder</source>
        <translation>Eliminar un directorio</translation>
    </message>
    <message>
        <source>Rename a folder</source>
        <translation>Renombrar un directorio</translation>
    </message>
    <message>
        <source>The current folder view lists files and subfolders present in the current folder.</source>
        <translation>La actual vista de carpetas muestra los archivos y subcarpetas presentes en la carpeta actual.</translation>
    </message>
    <message>
        <source>Files are shown:</source>
        <translation>Los archivos se muestra a continuación:</translation>
    </message>
    <message>
        <source>Either as a table with numerous information if you selected the details view in the settings menu of the browser</source>
        <translation>Sea como una tabla con numerosas informaciones si ha seleccionado ver los detalles en el menú de configuración del explorador</translation>
    </message>
    <message>
        <source>Or as image if you selected the icons view in the settings menu of the browser</source>
        <translation>O como imagen si se ha seleccionado ver los iconos en el menú de configuración del explorador</translation>
    </message>
    <message>
        <source>Files are shown according to the filter of file selection in the settings menu of the browser</source>
        <translation>Los archivos se muestran según el filtro de selección de archivos en el menú de configuración del explorador</translation>
    </message>
    <message>
        <source>Select a file or a folder by clicking it</source>
        <translation>Seleccionar un archivo o una carpeta haciendo clic en él</translation>
    </message>
    <message>
        <source>Select several files or folders by using SHIFT and CTRL keys</source>
        <translation>Seleccionar varios archivos o carpetas utilizando las teclas SHIFT y CTRL</translation>
    </message>
    <message>
        <source>CTRL+Click on a file: Add to the current selection or remove from the current selection</source>
        <translation>CTRL + clic en un archivo: Añadir a la selección actual o quitar de la selección actual</translation>
    </message>
    <message>
        <source>SHIFT+Click on a file: Select all the files between the last selected and the one which you have just clicked</source>
        <translation>SHIFT + clic en un archivo: Seleccionar todos los archivos entre el último seleccionado y el que se acaba de hacer clic</translation>
    </message>
    <message>
        <source>Double click a file or a folder:</source>
        <translation>Hacer doble clic en un archivo o una carpeta:</translation>
    </message>
    <message>
        <source>If it&apos;s a folder: select it as the current folder and opens it</source>
        <translation>Si se trata de una carpeta: seleccionar como la carpeta actual y la abre</translation>
    </message>
    <message>
        <source>If it&apos;s a file: open the program that is by default associated with the file type in the system. For example, if you have associated GIMP with .jpg files in the system file browser, then a double click on a .jpg file will open the file with GIMP. (Remark: A double click on a ffDiaporama project file, opens the ffDiaporama project)</source>
        <translation>Si se trata de un archivo: abrir el programa que está por defecto asociado al tipo de archivo en el sistema. Por ejemplo, si se han asociado GIMP con . jpg en el explorador de archivos del sistema, entonces un doble clic en un archivo jpg. abrirá el archivo con GIMP. (Nota: Al hacer doble clic en un archivo de proyecto ffDiaporama, abre el proyecto ffDiaporama)</translation>
    </message>
    <message>
        <source>Perform a right click on one of the files or folders of the selection to open the contextual menu. According to the elements that are present in the selection, the menu will propose different actions</source>
        <translation>Realizar un clic derecho en uno de los archivos o carpetas de la selección para abrir el menú contextual. De acuerdo con los elementos que están presentes en la selección, el menú va a proponer diferentes acciones</translation>
    </message>
    <message>
        <source>You can also use Drag &amp; Drop to move selected files towards the timeline to:</source>
        <translation>También se puede utilizar Dag &amp; Drop (arrastrar y soltar) para mover los archivos seleccionados a la línea de tiempo:</translation>
    </message>
    <message>
        <source>Add them to the project, if they are images, videos or ffDiaporama project files</source>
        <translation>Añadir al proyecto, si se trata de imágenes, vídeos o archivos de proyecto ffDiaporama</translation>
    </message>
    <message>
        <source>Use them as playlist, if they are audio files</source>
        <translation>Utilizarlos como una lista de reproducción, si se trata de archivos de audio</translation>
    </message>
    <message>
        <source>Status bar to the current selection</source>
        <translation>Barra de estado sobre la selección actual</translation>
    </message>
    <message>
        <source>The status bar to the current selection shows information about one or several selected files.</source>
        <translation>La barra de estado de la selección actual muestra información sobre uno o varios archivos seleccionados.</translation>
    </message>
    <message>
        <source>For a single file selection, the following information is shown:</source>
        <translation>Para una sencilla selección de archivos, se muestra la siguiente información:</translation>
    </message>
    <message>
        <source>Image of the file</source>
        <translation>Icono del archivo</translation>
    </message>
    <message>
        <source>Filename (Filesize)</source>
        <translation>Nombre del archivo (Tamaño del archivo)</translation>
    </message>
    <message>
        <source>According to the file type: </source>
        <translation>En función del tipo de archivo:</translation>
    </message>
    <message>
        <source>Image: Information about the size of the image / copyright / camera / orientation </source>
        <translation>Imagen: La información sobre el tamaño de la imagen / copyright / cámara / orientación </translation>
    </message>
    <message>
        <source>Video: Information about the format of the images / the video track / the audio track / duration </source>
        <translation>Vídeo: Información sobre el formato de las imágenes / la pista de vídeo / la pista de audio / duración</translation>
    </message>
    <message>
        <source>Music: Information about the audio format / duration </source>
        <translation>Música: Información sobre el formato de audio / duración</translation>
    </message>
    <message>
        <source>ffDiaporama project: Version of ffDiaporama / Format / Number of slide and chapter / duration of the project </source>
        <translation>Proyecto de ffDiaporama: Versión de ffDiaporama / Formato / Número de diapositiva y capítulo / duración del proyecto</translation>
    </message>
    <message>
        <source>Image : Information about the picture shooting (Aperture and Focal / Lens / With or without flash) </source>
        <translation>Imagen: La información sobre la toma de fotografías (apertura y focal / objetivo / Con o sin flash)</translation>
    </message>
    <message>
        <source>Video: TAG contents (Title / Artist / Album / Year) </source>
        <translation>Vídeo: contenido de la etiqueta TAG (Título / Artista / Álbum / Año)</translation>
    </message>
    <message>
        <source>Music: TAG contents (Title / Artist / Album / Year) </source>
        <translation>Música: contenido de la etiqueta TAG (Título / Artista / Álbum / Año)</translation>
    </message>
    <message>
        <source>ffDiaporama project: TAG contents (Title / Artist / Album / Year) </source>
        <translation>proyecto ffDiaporama: contenido de la etiqueta TAG (Título / Artista / Álbum / Año)</translation>
    </message>
    <message>
        <source>For a multiple files selection, the following information is shown:</source>
        <translation>Para una selección múltiple de archivos, se muestra la siguiente información :</translation>
    </message>
    <message>
        <source>Icon of the file type</source>
        <translation>Icono del tipo de archivo</translation>
    </message>
    <message>
        <source>Number of files and type of files</source>
        <translation>Número de archivos y tipos de archivos</translation>
    </message>
    <message>
        <source>Durations accumulated by files</source>
        <translation>Duraciónes acumuladas de archivos</translation>
    </message>
    <message>
        <source>Size accumulated by files</source>
        <translation>Tamaño acumulado de archivos</translation>
    </message>
    <message>
        <source>Status bar of the current folder</source>
        <translation>Barra de estado de la carpeta actual</translation>
    </message>
    <message>
        <source>The status bar of the current folder shows the following information about the current folder:</source>
        <translation>La barra de estado de la carpeta actual muestra la siguiente información acerca de la carpeta actual:</translation>
    </message>
    <message>
        <source> Number of files</source>
        <translation> Número de archivos</translation>
    </message>
    <message>
        <source> Number of sub-folders</source>
        <translation> Número de subcarpetas</translation>
    </message>
    <message>
        <source> Total size of shown files</source>
        <translation> Tamaño total de los archivos que se muestran</translation>
    </message>
    <message>
        <source> Total duration of shown files</source>
        <translation> Duración total de archivos que se muestran</translation>
    </message>
    <message>
        <source>Space occupied on the disk / Total space of the disk</source>
        <translation>Espacio ocupado en el disco / espacio total del disco</translation>
    </message>
    <message>
        <source> Favorites menu</source>
        <translation> menú Favoritos</translation>
    </message>
    <message>
        <source>The list of the favourite folders can be managed in the favorites menu.</source>
        <translation>La lista de las carpetas de favoritos se puede gestionar en el menú de favoritos.</translation>
    </message>
    <message>
        <source>First line of the menu: </source>
        <translation>Primera línea del menú:</translation>
    </message>
    <message>
        <source>&lt;U&gt;&lt;B&gt; Add to favorite&lt;/B&gt;&lt;/U&gt; adds the current folder to the list. Then an edit box allows you to give a name for this favorite</source>
        <translation>&lt;U&gt;&lt;B&gt; Añadir a favoritos&lt;/B&gt;&lt;/U&gt; añade la carpeta actual a la lista. Entonces un cuadro de edición permite dar un nombre a este favorito</translation>
    </message>
    <message>
        <source>Between the first and the last line: </source>
        <translation>Entre la primera y la última línea:</translation>
    </message>
    <message>
        <source> &lt;U&gt;&lt;B&gt;The list of favorites folders&lt;/B&gt;&lt;/U&gt; is displayed. Select one of the favorite folders to access it directly</source>
        <translation> &lt;U&gt;&lt;B&gt;La lista de carpetas de favoritos&lt;/B&gt;&lt;/U&gt; Seleccionar una de las carpetas de favoritos para acceder a ellos directamente</translation>
    </message>
    <message>
        <source>Last line of the menu: </source>
        <translation>Última línea del menú:</translation>
    </message>
    <message>
        <source>&lt;U&gt;&lt;B&gt; Manage favorite&lt;/B&gt;&lt;/U&gt; allows to rename or to delete entries of the list. A dialogbox for the modification of the list is displayed</source>
        <translation>&lt;U&gt;&lt;B&gt; Gestionar favorito&lt;/B&gt;&lt;/U&gt; permite cambiar el nombre o eliminar entradas de la lista. Aparecerá un diálogo para la modificación de la lista</translation>
    </message>
    <message>
        <source> Settings menu</source>
        <translation>menú de Configuración</translation>
    </message>
    <message>
        <source>The settings menu allows to modify the display of the current folder:</source>
        <translation>El menú de configuración permite modificar la visualización de la carpeta actual:</translation>
    </message>
    <message>
        <source>Settings of the display mode</source>
        <translation>Configuración del modo de visualización</translation>
    </message>
    <message>
        <source>Details view</source>
        <translation>Vista en detalle</translation>
    </message>
    <message>
        <source>Switch the display of the current folder to detail mode. In this mode, the present elements in the folder are shown in a table with numerous information</source>
        <translation>Cambiar la visualización de la carpeta actual a modo de detalle. En este modo, los elementos presentes en la carpeta se muestran en una tabla con numerosas informaciones</translation>
    </message>
    <message>
        <source>Icon view</source>
        <translation>Vista en icono</translation>
    </message>
    <message>
        <source>Switch the display of the current folder to icon mode. In this mode, the present elements in the folder are shown as images</source>
        <translation>Cambiar la visualización de la carpeta actual a modo de icono. En este modo, los elementos presentes en la carpeta se muestran como iconos</translation>
    </message>
    <message>
        <source>Settings of the filter on files</source>
        <translation>Ajustes del filtro sobre los archivos</translation>
    </message>
    <message>
        <source>All files</source>
        <translation>Todos los archivos</translation>
    </message>
    <message>
        <source>Show all the present elements in the current folder</source>
        <translation>Mostrar todos los elementos presentes en la carpeta actual</translation>
    </message>
    <message>
        <source>Managed files</source>
        <translation>Los archivos gestionados</translation>
    </message>
    <message>
        <source>Limit the display to the usable elements of the current folder:</source>
        <translation>Limitar la visualización de los elementos útiles de la carpeta actual:</translation>
    </message>
    <message>
        <source>Image, video and audio files of which the format is recognized by ffDiaporama</source>
        <translation>Los archivos de imagen, vídeo y audio de los cuales el formato es reconocido por ffDiaporama</translation>
    </message>
    <message>
        <source>Subfolders</source>
        <translation>Subcarpetas</translation>
    </message>
    <message>
        <source>Image files</source>
        <translation>Archivos de imágenes</translation>
    </message>
    <message>
        <source>Limit the display of the current folder to the image files of which the format is recognized by ffDiaporama in the present subfolders</source>
        <translation>Limitar la visualización de la carpeta actual a los archivos de imagen de los cuales el formato es reconocido por ffDiaporama en las presentes subcarpetas</translation>
    </message>
    <message>
        <source>Video files</source>
        <translation>Archivos de videos</translation>
    </message>
    <message>
        <source>Limit the display of the current folder to the video files of which the format is recognized by ffDiaporama in the present subfolders</source>
        <translation>Limitar la visualización de la carpeta actual a los archivos de vídeo de los cuales el formato es reconocido por ffDiaporama en las presentes subcarpetas</translation>
    </message>
    <message>
        <source>Audio files</source>
        <translation>Archivos de audio</translation>
    </message>
    <message>
        <source>Limit the display of the current folder to the audio files of which the format is recognized by ffDiaporama inthe present subfolders</source>
        <translation>Limitar la visualización de la carpeta actual a los archivos de audio de los cuales el formato es reconocido por ffDiaporama enlas presentes subcarpetas</translation>
    </message>
    <message>
        <source>ffDiaporama projects</source>
        <translation>Proyectos de ffDiaporama</translation>
    </message>
    <message>
        <source>Limit the display of the current folder to the ffDiaporama project files in the present subfolders</source>
        <translation>Limitar la visualización de la carpeta actual a los archivos de proyecto de ffDiaporama en las presentes subcarpetas</translation>
    </message>
    <message>
        <source>Additional settings</source>
        <translation>Ajustes adicionales</translation>
    </message>
    <message>
        <source>Display hidden files and folders</source>
        <translation>Mostrar archivos y directorios ocultos</translation>
    </message>
    <message>
        <source>Show or hide the hidden files and folders. </source>
        <translation>Mostrar u ocultar archivos y directorios.</translation>
    </message>
    <message>
        <source>Under Windows, hidden files and folders have the &lt;B&gt;Hide&lt;/B&gt; file attribute activated. </source>
        <translation>En Windows, los archivos y carpetas ocultos tienen el atributo de archivo&lt;B&gt; Hide &lt;/B&gt; activado.</translation>
    </message>
    <message>
        <source>Under Linux, hidden files and folders have a name beginning with a dot &quot;.&quot; </source>
        <translation>En Linux, los archivos y carpetas ocultos tienen un nombre que comienza con un punto &quot;.&quot;</translation>
    </message>
    <message>
        <source>This option accumulates both versions for both systems. So, even under Windows, files and folders with a name beginning with a &quot;.&quot; are considered as hidden files or folders. </source>
        <translation>Esta opción se acumula en las versiones para ambos sistemas. Por lo tanto, incluso en Windows, archivos y carpetas con un nombre comenzando con un &quot;.&quot; son considerados como archivos o carpetas ocultos.</translation>
    </message>
    <message>
        <source>Remark: </source>
        <translation>Nota:</translation>
    </message>
    <message>
        <source> or </source>
        <translation> o </translation>
    </message>
    <message>
        <source> One of this icon is displayed in front of the name of the option as this one is activated or not.</source>
        <translation>Uno de estos iconos aparece delante del nombre de la opción, ya éste activado o no.</translation>
    </message>
    <message>
        <source>Hide filename</source>
        <translation>Ocultar archivos</translation>
    </message>
    <message>
        <source>This option is available only for the icon view mode. If this option is activated, the file names will not be shown under the file images. It allows to increase the number of images shown in the view of the current directory. </source>
        <translation>Esta opción sólo está disponible para el modo de vista de iconos. Si se activa esta opción, los nombres de los archivos no se mostrarán en las imágenes de archivo. Permite aumentar el número de imágenes que se muestran en la vista del directorio actual.</translation>
    </message>
    <message>
        <source>Sort by number</source>
        <translation>Ordenar por número</translation>
    </message>
    <message>
        <source>This option sorts the files in order of their numerical suffix : Example: if you select IMG_0025, IMG_0032, MVI_0029 and MVI_0040, the files will be inserted as follows : IMG_0025, MVI_0029, IMG_0032 and MVI_0040</source>
        <translation>Esta opción ordena los archivos en el orden de su sufijo numérico: Ejemplo: si se selecciona IMG_0025, IMG_0032, MVI_0029 y MVI_0040, se insertarán los archivos de la siguiente manera : IMG_0025, MVI_0029, IMG_0032 and MVI_0040</translation>
    </message>
    <message>
        <source>Sort by name</source>
        <translation>Ordenar por nombre</translation>
    </message>
    <message>
        <source>This option sorts the files in alphabetical order</source>
        <translation>Esta opción ordena los archivos en orden alfabético</translation>
    </message>
    <message>
        <source>Sort by date</source>
        <translation>Ordenar por fecha</translation>
    </message>
    <message>
        <source>This option sorts the files in order of last modification date</source>
        <translation>Esta opción ordena los archivos por orden de fecha según última modificación</translation>
    </message>
    <message>
        <source>Show folder first</source>
        <translation>Ordenar por carpeta</translation>
    </message>
    <message>
        <source>If this option is enabled, the directories will be displayed first</source>
        <translation>Si se activa esta opción, los directorios se mostrarán primero</translation>
    </message>
    <message>
        <source>Settings of the sort order</source>
        <translation>Configuración del orden de clasificación</translation>
    </message>
    <message>
        <source>This option sorts the files in order of their creation date</source>
        <translation>Esta opción ordena los archivos por orden de fecha de creación</translation>
    </message>
    <message>
        <source>Image vector files</source>
        <translation>Archivos de imágenes vectoriales</translation>
    </message>
    <message>
        <source>Limit the display of the current folder to the image vector files of which the format is recognized by ffDiaporama in the present subfolders</source>
        <translation>Limitar la visualización de la carpeta actual a los archivos de imagenes vectoriales cuyo formato es reconocido por ffDiaporama en las actuales subcarpetas</translation>
    </message>
</context>
<context>
    <name>0030</name>
    <message>
        <source>Rendering videos</source>
        <translation>Generar vídeos</translation>
    </message>
    <message>
        <source>Smartphones and tablets</source>
        <translation>Smartphones y tablets</translation>
    </message>
    <message>
        <source>Portable devices</source>
        <translation>Dispositivos portátiles</translation>
    </message>
    <message>
        <source>Multimedia system (Home cinema)</source>
        <translation>Sistema Multimedia (Home cinema)</translation>
    </message>
    <message>
        <source>For the WEB</source>
        <translation>Para la WEB</translation>
    </message>
    <message>
        <source>Video codec</source>
        <translation>Codec de Video</translation>
    </message>
    <message>
        <source>Audio codec</source>
        <translation>Codec de Audio</translation>
    </message>
    <message>
        <source>Containers</source>
        <translation>Contenedores</translation>
    </message>
    <message>
        <source>Video standards and resolutions</source>
        <translation>Normas y resoluciones de Video</translation>
    </message>
    <message>
        <source>File attachments (Thumbnails, nfo, etc...)</source>
        <translation>Archivos adjuntos (Miniaturas, nfo, etc...)</translation>
    </message>
    <message>
        <source> This section contains information about generating video with ffDiaporama. </source>
        <translation> Esta sección contiene información acerca de la generación de video con ffDiaporama. </translation>
    </message>
    <message>
        <source>Index</source>
        <translation>Indice</translation>
    </message>
</context>
<context>
    <name>0031</name>
    <message>
        <source>Rendering videos</source>
        <translation>Generar vídeos</translation>
    </message>
    <message>
        <source>A digital video consists of a computer file called the &lt;a href=&quot;0038.html&quot;&gt;container&lt;/a&gt;</source>
        <translation>Un video digital consiste en un fichero de dispoitivo denominado &lt;a href=&quot;0038.html&quot;&gt;contenedor&lt;/a&gt;</translation>
    </message>
    <message>
        <source>In this file we find:</source>
        <translation>En este archivo encontramos:</translation>
    </message>
    <message>
        <source>One or more video tracks. Each track is built using a &lt;a href=&quot;0036.html&quot;&gt;Video Codec&lt;/a&gt;</source>
        <translation>Uno o más pistas de vídeo. Cada pista está construida utilizando un &lt;a href=&quot;0036.html&quot;&gt;Codec de Video&lt;/a&gt;</translation>
    </message>
    <message>
        <source>One or more audio tracks. Each track is built using an &lt;a href=&quot;0037.html&quot;&gt;Audio Codec&lt;/a&gt;</source>
        <translation>Una o más pistas de audio. Cada pista está construida utilizando un &lt;a href=&quot;0037.html&quot;&gt;Codec de Audio&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Possibly, one or more subtitles. Each subtitle is built in a subtitle format.</source>
        <translation>Posiblemente, uno o más subtítulos. Cada subtítulo se basa en un formato de subtítulos.</translation>
    </message>
    <message>
        <source>Possibly, a definition of tags and chapters.</source>
        <translation>Posiblemente, una definición de las etiquetas y capítulos.</translation>
    </message>
    <message>
        <source>Limitations :</source>
        <translation>Limitaciones :</translation>
    </message>
    <message>
        <source>ffDiaporama does not manage subtitles.</source>
        <translation>ffDiaporama no gestiona subtítulos.</translation>
    </message>
    <message>
        <source>ffDiaporama generates files that include a single video track and a single audio track.</source>
        <translation>ffDiaporama genera archivos que incluyen una pista de vídeo y una única pista audio.</translation>
    </message>
    <message>
        <source>Unlike music files, which are widely portable from one device to another, videos require a certain amount of juggling between various formats to adapt to the equipment used to play them.</source>
        <translation>A diferencia de los archivos de música, que son muy portátiles de un dispositivo a otro, los videos requieren una cierta cantidad de juegos malabares entre varios formatos para adaptarse a los equipos utilizados para manejarlos.</translation>
    </message>
    <message>
        <source>A video rendered for a &quot;Home Cinema&quot; device can occupy several Gb and will be unreadable on a smartphone.</source>
        <translation>Un vídeo renderizado para un dispositivo de &quot;Home Cinema&quot; puede ocupar varios GB y será ilegible en un smartphone.</translation>
    </message>
    <message>
        <source>The same video rendered for a smartphone will require only one Mb, and can be played on a &quot;Home Cinema&quot; device but it will look ugly.</source>
        <translation>El mismo vídeo renderizado un smartphone requerirá solamente un Mb, y se puede reproducir en un dispositivo de &quot;Home Cinema&quot;, pero se verá de mala calidad.</translation>
    </message>
    <message>
        <source>That is why we recommend that you preserve your original project files as far as possible, and create from them videos suitable for the devices you wish to use for playback.</source>
        <translation>Por eso se recomienda conservar los archivos originales del proyecto en la medida de lo posible, y crear vídeos con ellos adecuados para los dispositivos que se desea utilizar para la reproducción.</translation>
    </message>
    <message>
        <source>To simplify settings for the rendering operation, ffDiaporama contains predefined settings for the following devices:</source>
        <translation>Para simplificar la configuración de la operación de renderizado, ffDiaporama contiene ajustes predefinidos para los siguientes dispositivos:</translation>
    </message>
    <message>
        <source>&lt;a href=&quot;0032.html&quot;&gt;Smartphones&lt;/a&gt; and &lt;a href=&quot;0033.html&quot;&gt;portable devices&lt;/a&gt;, and small video-playing devices in general</source>
        <translation>&lt;a href=&quot;0032.html&quot;&gt;Smartphones&lt;/a&gt; y &lt;a href=&quot;0033.html&quot;&gt;dispositivos portátiles&lt;/a&gt;, y pequeños reproductores en general</translation>
    </message>
    <message>
        <source>&lt;a href=&quot;0034.html&quot;&gt;Multimedia systems&lt;/a&gt; for domestic use (&quot;Home Cinema&quot; devices)</source>
        <translation>&lt;a href=&quot;0034.html&quot;&gt;Los sistemas Multimedia&lt;/a&gt; para uso doméstico (dispositivos &quot;Home Cinema&quot;)</translation>
    </message>
    <message>
        <source>&lt;a href=&quot;0035.html&quot;&gt;Display on the Web&lt;/a&gt; (blogs, picture-sharing and social networking sites)</source>
        <translation>&lt;a href=&quot;0035.html&quot;&gt;Mostrar en la Web&lt;/a&gt; (blogs, imágenes para compartir y sitios de redes sociales)</translation>
    </message>
    <message>
        <source>It is also possible for you to define all parameters directly by using the advanced option.</source>
        <translation>También es posible definir todos los parámetros directamente mediante el uso de la opción avanzada.</translation>
    </message>
</context>
<context>
    <name>0032</name>
    <message>
        <source>Smartphones and tablets</source>
        <translation>Smartphones y tablets</translation>
    </message>
    <message>
        <source>Generally speaking the main differences between these devices are:</source>
        <translation>En términos generales las principales diferencias entre estos dispositivos son:</translation>
    </message>
    <message>
        <source>Screen size and maximal resolution</source>
        <translation>Tamaño de la pantalla y máxima resolución</translation>
    </message>
    <message>
        <source>Operating system on the device</source>
        <translation>El sistema operativo del dispositivo</translation>
    </message>
    <message>
        <source>Consult the documentation for your equipment or search the Internet to determine these two characteristics.</source>
        <translation>Consultar la documentación del equipo o buscar en Internet para determinar estas dos características.</translation>
    </message>
    <message>
        <source>Device type</source>
        <translation>Tipo de dispositivo</translation>
    </message>
    <message>
        <source>Operating system</source>
        <translation>Sistema operativo</translation>
    </message>
    <message>
        <source>Available resolution</source>
        <translation>Resoluciones disponibles</translation>
    </message>
    <message>
        <source>Remarks</source>
        <translation>Notas</translation>
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
        <translation>En general, los teléfonos Nokia que trabajan con el sistema operativo Symbian y equipado con una cámara, son capaces de reproducir vídeos. Muy a menudo, están provistos con un teclado y ofrecen una resolución de 320x240 (QVGA), mientras que aquellos que tienen sólo una pantalla táctil ofrece una resolución de 640x360 (VGA).</translation>
    </message>
    <message>
        <source>Movie format is: Container: MP4 - Video Codec: MPEG4 - Audio Codec: MP3</source>
        <translation>El formato de la película es: Contenedor: MP4 - Codec de vídeo: MPEG4 - Codec de audio: MP3</translation>
    </message>
    <message>
        <source>Note: Video files should be stored in the &quot;My videos&quot; folder after connecting the telephone to the PC in &quot;mass storage&quot; mode. </source>
        <translation>Nota: Los archivos de vídeo se almacenarán en la carpeta &quot;Mis vídeos&quot; después de conectar el teléfono a la PC en el modo de &quot;almacenamiento masivo&quot;.</translation>
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
        <translation>Numerosos fabricantes hacen teléfonos que utilizan el sistema operativo Microsoft Windows Mobile 6 (HP, HTC, etc) entre 2006 y 2010.</translation>
    </message>
    <message>
        <source>Movie format is: Container: 3GP - Video Codec: MPEG4 - Audio Codec: AMR</source>
        <translation>El formato de la película es: Contenedor: 3GP - Códec de vídeo: MPEG4 - Codec de audio: AMR</translation>
    </message>
    <message>
        <source>Note: Store video files in the &quot;My videos&quot; folder having connected the telephone to the PC in &quot;mass storage&quot; mode. </source>
        <translation>Nota: Almacenan los archivos de vídeo en la carpeta &quot;Mis vídeos&quot; al tener conectado el teléfono al PC en el modo de &quot;almacenamiento masivo&quot;.</translation>
    </message>
    <message>
        <source>Windows Phone 7</source>
        <translation>Windows Phone 7</translation>
    </message>
    <message>
        <source>Microsoft Windows Phone 7 is the evolution of Windows Mobil 6</source>
        <translation>Microsoft Windows Phone 7 es la evolución de Windows Mobil 6</translation>
    </message>
    <message>
        <source>Movie format is: Container: MP4 - Video Codec: h264 - Audio Codec: AAC-LC</source>
        <translation>El formato de la película es: Contenedor: MP4 - Codec de vídeo: h264 - Codec de audio: AAC-LC</translation>
    </message>
    <message>
        <source>Android</source>
        <translation>Android</translation>
    </message>
    <message>
        <source>Many manufacturers made or still make phones using the Google Android operating system.</source>
        <translation>Muchos fabricantes hacen teléfonos que utilizan el sistema operativo Google Android.</translation>
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
        <translation>WebOS surge de la recompra de Palm por HP.</translation>
    </message>
    <message>
        <source>&lt;B&gt;To be completed&lt;/B&gt;</source>
        <translation>&lt;B&gt;Por completar&lt;/B&gt;</translation>
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
        <translation>El formato de la película es: Contenedor: AVI - Video Codec: MPEG4 - Codec de audio: MP3</translation>
    </message>
    <message>
        <source>Note: store video files in the \Blackberry\Video folder after connecting the telephone to the PC &quot;mass storage&quot; mode.</source>
        <translation>Nota: Los archivos de vídeo se almacenan en la carpeta de videos \BlackBerry\ después de conectar el teléfono al  PC en modo  &quot;almacenamiento masivo&quot;.</translation>
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
        <translation>Ejemplos de Tablets: Archos 4/5/70/Arnova 10, Dell Streak, Creative ZiiO 7</translation>
    </message>
    <message>
        <source>XGA</source>
        <translation>XGA</translation>
    </message>
    <message>
        <source>Tablet examples: Archos 101, Samsung Galaxy Tab, HTC Flyer, Hannspree HANNSpad SN10T, Toshiba Folio 100</source>
        <translation>Ejemplos de Tablets: Archos 101, Samsung Galaxy Tab, HTC Flyer, Hannspree HANNSpad SN10T, Toshiba Folio 100</translation>
    </message>
    <message>
        <source>Tablet examples: HP TouchPad</source>
        <translation>Ejemplos de Tablets: HP TouchPad</translation>
    </message>
    <message>
        <source>Tablet examples: ASUS Eee Pad, Motorola Xoom, Packard Bell Liberty Tab, LG Optimus Pad, Archos G9</source>
        <translation>Ejemplos de Tablets: ASUS Eee Pad, Motorola Xoom, Packard Bell Liberty Tab, LG Optimus Pad, Archos G9</translation>
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
        <translation>Libro Electrónico</translation>
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
        <translation>Requiere xVid o DivX codec para ser instalado en el ordenador.</translation>
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
        <translation>En lo que se refiere a la resolución, tener en cuenta que la mayoría de los dispositivos permiten reproducir vídeos diseñados para dispositivos con baja resolución sin dificultad.</translation>
    </message>
    <message>
        <source>The device models available in ffDiaporama are as follows: </source>
        <translation>Los modelos de dispositivos disponibles en ffDiaporama son los siguientes:</translation>
    </message>
</context>
<context>
    <name>0033</name>
    <message>
        <source>Portable devices</source>
        <translation>Dispositivos portátiles</translation>
    </message>
    <message>
        <source>These portable devices are usually very specific. We will not discuss therefore either operating system or resolution.</source>
        <translation>Estos dispositivos portátiles son por lo general muy específicos. No vamos a discutir por lo tanto por cualquiera de los sistemas operativos o la resolución .</translation>
    </message>
    <message>
        <source>Device type</source>
        <translation>Tipo de dispositivo</translation>
    </message>
    <message>
        <source>Manufacturer/Model</source>
        <translation>Fabricacnte/Modelo</translation>
    </message>
    <message>
        <source>Remark</source>
        <translation>Nota</translation>
    </message>
    <message>
        <source>Portable player</source>
        <translation>Reproductor portátil</translation>
    </message>
    <message>
        <source>DVD/DivX portable player (car player or travel player)</source>
        <translation>Rproductor DVD/DicX (de coche o de viaje)</translation>
    </message>
    <message>
        <source>All these devices use the old DVD/DIVX format with anamorphic resolution 720x576 (PAL) or 720x480 ( NTSC).</source>
        <translation>Todos estos dispositivos utilizan el antiguo formato DVD / DIVX con la resolución anamórfica 720x576 (PAL) o 720x480 (NTSC).</translation>
    </message>
    <message>
        <source>Movie format is: Container: AVI - Video Codec: MPEG4 - Audio Codec: MP3</source>
        <translation>El formato de la película es: Contenedor: AVI - Video Codec: MPEG4 - Codec de audio: MP3</translation>
    </message>
    <message>
        <source>If the device does not have a USB port, burn a DVD from your video files. Otherwise simply copy your files to a USB pendrive.</source>
        <translation>Si el dispositivo no dispone de un puerto USB, grabar un DVD con los archivos de vídeo. Otra posibilidad, simplemente copiar los archivos a un pendrive USB.</translation>
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
        <translation>Estos dos reproductores portátiles están especialmente diseñados para la música. Por lo tanto, su resolución es sólo QVGA.</translation>
    </message>
    <message>
        <source>Movie format is: Container: MP4 - Video Codec: h264 - Audio Codec: AAC-LC</source>
        <translation>El formato de la película es: Contenedor: MP4 - Codec : h264 - Codec de audio: AAC-LC</translation>
    </message>
    <message>
        <source>Apple iPod Touch</source>
        <translation>Apple iPod Touch</translation>
    </message>
    <message>
        <source>This portable player has a video resolution comparable to the DVD (without anamorphism).</source>
        <translation>Este reproductor portátil tiene una resolución de vídeo comparable a la del DVD (sin anamorfismo).</translation>
    </message>
    <message>
        <source>Portable LED/LCD TV</source>
        <translation>Portátil LED/LCD TV</translation>
    </message>
    <message>
        <source>These devices, when they support the HD TV, have a real resolution of 1024x576.</source>
        <translation>Estos dispositivos, cuando soportan la TV de alta definición, tienen una resolución real de 1024x576.</translation>
    </message>
    <message>
        <source>Handheld game console</source>
        <translation>Consola de juegos portátil</translation>
    </message>
    <message>
        <source>Sony PSP</source>
        <translation>Sony PSP</translation>
    </message>
    <message>
        <source>Resolution 320x480 / NTSC</source>
        <translation>Resolución 320x480 / NTSC</translation>
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
        <translation>Sistema Multimedia (Home cinema)</translation>
    </message>
    <message>
        <source>Device type</source>
        <translation>Tipo de dispositivo</translation>
    </message>
    <message>
        <source>Manufacturer/Model</source>
        <translation>Fabricante/Modelo</translation>
    </message>
    <message>
        <source>Remark</source>
        <translation>Nota</translation>
    </message>
    <message>
        <source>TV box of ADSL box</source>
        <translation>TV box de ADSL box</translation>
    </message>
    <message>
        <source>France - Livebox (Orange)</source>
        <translation>Francia - Livebox (Orange)</translation>
    </message>
    <message>
        <source>All these devices support the old DVD/DIVX format with anamorphic resolution 720x576 (PAL) for the DVD resolution</source>
        <translation>Todos estos dispositivos son compatibles con el antiguo formato DVD/DIVX con una resolución de 720x576 anamórfico (PAL) para la resolución de DVD</translation>
    </message>
    <message>
        <source>Movie format is: Container: AVI - Video Codec: MPEG4 - Audio Codec: MP3</source>
        <translation>El formato de la película es: Contenedor: AVI - Video Codec: MPEG4 - Codec de audio: MP3</translation>
    </message>
    <message>
        <source>All these devices support the MP4 format up to the FullHD 1080p resolution</source>
        <translation>Todos estos dispositivos son compatibles con el formato MP4 hasta la resolución 1080p FullHD</translation>
    </message>
    <message>
        <source>Movie format is: Container: MP4 - Video Codec: h264 - Audio Codec: AAC-LC</source>
        <translation>El formato de la película es: Contenedor: MP4 - Codec : h264 - Codec de audio: AAC-LC</translation>
    </message>
    <message>
        <source>Copy your video files to a USB pendrive or an external hard disk and use the multimedia player integrated into the menu of the decoder</source>
        <translation>Copiar los archivos de vídeo a un pendrive USB o un disco duro externo y utilizar el reproductor multimedia integrado en el menú del decodificador</translation>
    </message>
    <message>
        <source>France - Freebox</source>
        <translation>Francia - Freebox</translation>
    </message>
    <message>
        <source>France - Neufbox (SFR)</source>
        <translation>Francia - Neufbox (SFR)</translation>
    </message>
    <message>
        <source>France - Bbox (Bouygues Telecom)</source>
        <translation>Francia - Bbox (Bouygues Telecom)</translation>
    </message>
    <message>
        <source>Multimedia hard drive and gateway</source>
        <translation>Disco duro y pasarela multimedia</translation>
    </message>
    <message>
        <source>All manufacturers</source>
        <translation>Todos los fabricantes</translation>
    </message>
    <message>
        <source>Equipments supporting HD (to verify in the technical specifications of the device) support the MP4 format until the FullHD 1080p resolution</source>
        <translation>Equipos que soportan HD (verificar las especificaciones técnicas del dispositivo) son compatibles con el formato MP4 hasta la resolución 1080p FullHD</translation>
    </message>
    <message>
        <source>Player</source>
        <translation>Reproductor</translation>
    </message>
    <message>
        <source>DVD/DivX Player</source>
        <translation>DVD/DivX Player</translation>
    </message>
    <message>
        <source>These devices only support the old DVD/DIVX format with anamorphic resolution 720x576 (PAL) for the DVD resolution</source>
        <translation>Estos dispositivos sólo soportan el antiguo formato DVD/DIVX con la resolución anamórfica 720x576 (PAL) para la resolución de DVD</translation>
    </message>
    <message>
        <source>If the device does not have an USB connector: burn a DVD with your video files. Otherwise simply copy your videos files to a USB pendrive.</source>
        <translation>Si el dispositivo no dispone de un conector USB: grabar un DVD con los archivos de vídeo. O también, simplemente copiar los archivos de vídeos a un pendrive USB.</translation>
    </message>
    <message>
        <source>BlueRay player</source>
        <translation>Reproductor BlueRay</translation>
    </message>
    <message>
        <source>&lt;B&gt;To be completed&lt;/B&gt;</source>
        <translation>&lt;B&gt;Por completar&lt;/B&gt;</translation>
    </message>
    <message>
        <source>Games console</source>
        <translation>Consola de juegos</translation>
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
        <translation>Estos dispositivos &quot;Home Cinema&quot; se suelen conectar a un aparato de televisión. La elección de este formato se realiza de acuerdo con los requisitos del sistema usado.</translation>
    </message>
    <message>
        <source>Warning: The old SD format is only suitable for old television sets using cathode ray tube technology. With these tubes, points were not circular but oval: we call this anamorphism. </source>
        <translation>Advertencia: El antiguo formato SD sólo es adecuado para las antiguas televisiones, que utilizan tecnología de tubo de rayos catódicos. Con estos tubos, los puntos no son circulares sino ovalados: lo llamamos anamorfismo.</translation>
    </message>
    <message>
        <source>Playing a video in SD format on a modern LCD, LED or plasma television set gives openly disastrous results: The image is particularly ugly! Thus, if your television is new and if your device allows it, always use a HD or Full-HD format in preference to a SD format. </source>
        <translation>Reproducir un vídeo en formato SD en un moderno LCD, LED o televisión de plasma da resultados francamente desastrosos: ¡La imagen es especialmente fea! Por lo tanto, si el televisor es nuevo, y si el dispositivo lo permite, usar siempre un formato HD o Full-HD en vez de un formato SD.</translation>
    </message>
</context>
<context>
    <name>0035</name>
    <message>
        <source>For the WEB</source>
        <translation>Para la WEB</translation>
    </message>
    <message>
        <source>Device type</source>
        <translation>Tipo de dispositivo</translation>
    </message>
    <message>
        <source>Manufacturer/Model</source>
        <translation>Fbricante/Modelo</translation>
    </message>
    <message>
        <source>Remark</source>
        <translation>Nota</translation>
    </message>
    <message>
        <source>Flash player (SWF)</source>
        <translation>Flash player (SWF)</translation>
    </message>
    <message>
        <source>All SWF players</source>
        <translation>Todos los reproductores SWF</translation>
    </message>
    <message>
        <source>To be used with the HTML tag object class=&quot;player&quot; type=&quot;application/x-shockwave-flash&quot;</source>
        <translation>Para ser usados con etiquetas HTML object class=&quot;player&quot; type=&quot;application/x-shockwave-flash&quot;</translation>
    </message>
    <message>
        <source>- For 4/3 : 320x240, 640x480, 960x720, 1440x1080</source>
        <translation>- Para 4/3 : 320x240, 640x480, 960x720, 1440x1080</translation>
    </message>
    <message>
        <source>- For 16/9 : 320x180, 640x360, 1280x720, 1920x1080</source>
        <translation>- Para 16/9 : 320x180, 640x360, 1280x720, 1920x1080</translation>
    </message>
    <message>
        <source>- For 40/17 : 320x136, 640x272, 1280x544, 1920x816</source>
        <translation>- Para 40/17 : 320x136, 640x272, 1280x544, 1920x816</translation>
    </message>
    <message>
        <source>Movie format is: Container: SWF(2008) - Video Codec: h264 - Audio Codec: AAC-LC</source>
        <translation>Formato de video es: Contenedor: SWF(2008) - Video Codec: h264 - Audio Codec: AAC-LC</translation>
    </message>
    <message>
        <source>Sharing and social networking</source>
        <translation>Plataforma en red</translation>
    </message>
    <message>
        <source>Youtube</source>
        <translation>Youtube</translation>
    </message>
    <message>
        <source>720p - Movie format is: Container: MP4 - Video Codec: xVid - Audio Codec: MP3</source>
        <translation>720p - Formato de video es: Contenedor: MP4 - Video Codec: xVid - Audio Codec: MP3</translation>
    </message>
    <message>
        <source>Daily Motion</source>
        <translation>Daily Motion</translation>
    </message>
    <message>
        <source>720p - Movie format is: Container: MP4 - Video Codec: h264 - Audio Codec: AAC-LC</source>
        <translation>720p - Formato de video es: Contenedor: MP4 - Video Codec: h264 - Audio Codec: AAC-LC</translation>
    </message>
    <message>
        <source>Facebook</source>
        <translation>Facebook</translation>
    </message>
    <message>
        <source>Publish the video on YouTube or Daily Motion and integrate a link towards this video into Facebook</source>
        <translation>Publicar el video en Youtube o Daily Motion e integrar un enlace en Facebook</translation>
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
        <translation>Para ser añadido a todos los TAG en navegadores HTML5. </translation>
    </message>
    <message>
        <source>WebM is an open source format usable with Firefox, Google Chrome and Opera </source>
        <translation>WebM es un formato de código abierto para usar con Firefox, Google Chrome y Opera </translation>
    </message>
    <message>
        <source>H264 is a format usable in Safari, Internet Explorer and Google Chrome </source>
        <translation>H264 es un formato utilizable en Safari, Internet Explorer y Google Chrome</translation>
    </message>
    <message>
        <source>To maintain backward compatibility with older browsers, it is advisable to offer a flash version within the tag. See: </source>
        <translation>Para mantener la compatibilidad con navegadores más antiguos, es conveniente ofrecer una versión en flash dentro de la etiqueta. Consultar:</translation>
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
        <translation>Codec de Video</translation>
    </message>
    <message>
        <source>The following table lists the video codecs which ffDiaporama can use to generate videos:</source>
        <translation>La siguiente tabla muestra los codecs de vídeo que ffDiaporama puede utilizar para generar vídeos:</translation>
    </message>
    <message>
        <source>Codec</source>
        <translation>Codec</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Nombre</translation>
    </message>
    <message>
        <source>WIKIPEDIA/Remark</source>
        <translation>WIKIPEDIA/Nota</translation>
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
        <translation>http://es.wikipedia.org/wiki/MJPEG</translation>
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
        <translation>fhttp://es.wikipedia.org/wiki/MPEG-2</translation>
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
        <translation>http://es.wikipedia.org/wiki/Xvid</translation>
    </message>
    <message>
        <source>H264HQ</source>
        <translation>H264HQ</translation>
    </message>
    <message>
        <source>High Quality H.264 AVC/MPEG-4 AVC</source>
        <translation>Ata Calidad H.264 AVC/MPEG-4 AVC</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/H.264/MPEG-4_AVC</source>
        <translation>http://es.wikipedia.org/wiki/H.264/MPEG-4_AVC</translation>
    </message>
    <message>
        <source>H264PQ</source>
        <translation>H264PQ</translation>
    </message>
    <message>
        <source>Phone Quality H.264 AVC/MPEG-4 AVC</source>
        <translation>Calidad Móvil H.264 AVC/MPEG-4 AVC</translation>
    </message>
    <message>
        <source>X264LL</source>
        <translation>X264LL</translation>
    </message>
    <message>
        <source>x264 Lossless</source>
        <translation>x264 Sin pérdidas</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/X264</source>
        <translation>http://es.wikipedia.org/wiki/X264</translation>
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
        <translation>http://es.wikipedia.org/wiki/WebM</translation>
    </message>
    <message>
        <source>Sorenson H.263</source>
        <translation>Sorenson H.263</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/H.263</source>
        <translation>http://es.wikipedia.org/wiki/H.263</translation>
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
        <translation>http://es.wikipedia.org/wiki/Theora</translation>
    </message>
    <message>
        <source>ffDiaporama uses specific settings for encoding with x264. This settings are including: </source>
        <translation>ffDiaporama utiliza la configuración específica para codificar con x264. Estos ajustes están incluidos:</translation>
    </message>
    <message>
        <source>- &lt;B&gt;High Quality&lt;/B&gt; for &quot;Home Cinema&quot; devices based on x264 &lt;U&gt;main&lt;/U&gt; profile, with 3 refs and 3 bframes. </source>
        <translation>- &lt;B&gt;Alta Calidad&lt;/B&gt; para &quot;Home Cinema&quot; dispositivos basados en x264 &lt;U&gt;principal&lt;/U&gt; perfil, con 3 refs y 3 bframes. </translation>
    </message>
    <message>
        <source>- &lt;B&gt;Phone Quality&lt;/B&gt; for mobile devices based on x264 &lt;U&gt;baseline&lt;/U&gt; profile, with 3 refs and 0 bframes. </source>
        <translation>- &lt;B&gt;Calidad Móvil&lt;/B&gt; para dispositivos móviles basados en  x264 &lt;U&gt;referencia&lt;/U&gt; perfil, con 3 refs y 0 bframes. </translation>
    </message>
    <message>
        <source>ffDiaporama uses the standard x264 &lt;U&gt;fast&lt;/U&gt; preset with 3 refs and qp set to 0.</source>
        <translation>ffDiaporama utiliza la norma x264 &lt;U&gt; rápido &lt;/U&gt; preajustado con 3 refs qp establecido en 0.</translation>
    </message>
    <message>
        <source>Both settings are using &lt;U&gt;veryfast&lt;/U&gt; preset. </source>
        <translation>Ambas configuraciones utilizan perfil &lt;U&gt;muy rápido&lt;/U&gt;.</translation>
    </message>
    <message>
        <source>Note: Variable bitrate is used with these two codecs. For more information on variable bitrate, see: &lt;a href=&quot;0115.html&quot;&gt;Render video&lt;/a&gt;</source>
        <translation>Nota: tasa de bits variable es utilizado con estos dos codecs. Para obtener más información sobre la tasa de bits variable, consultar: &lt;a href=&quot;0115.html&quot;&gt;Render video&lt;/a&gt;</translation>
    </message>
</context>
<context>
    <name>0037</name>
    <message>
        <source>Audio codec</source>
        <translation>Codec de Audio</translation>
    </message>
    <message>
        <source>The following table lists the audio codecs which ffDiaporama can use to generate videos:</source>
        <translation>La siguiente tabla muestra los codecs de audio que ffDiaporama puede usar al generar los videos:</translation>
    </message>
    <message>
        <source>Codec</source>
        <translation>Codec</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Nombre</translation>
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
        <translation>http://es.wikipedia.org/wiki/Modulación_por_impulsos_codificados</translation>
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
        <translation>http://es.wikipedia.org/wiki/MP3</translation>
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
        <translation>http://es.wikipedia.org/wiki/Advanced_Audio_Coding</translation>
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
        <translation>http://es.wikipedia.org/wiki/Dolby_Digital_(AC-3)</translation>
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
        <translation>http://es.wikipedia.org/wiki/Vorbis</translation>
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
        <translation>http://es.wikipedia.org/wiki/MPEG-2</translation>
    </message>
    <message>
        <source>AMR</source>
        <translation>AMR</translation>
    </message>
    <message>
        <source>Adaptive Multi-Rate</source>
        <translation>Compresión multi-tasa adaptativa</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/Adaptive_Multi-Rate_audio_codec</source>
        <translation>http://es.wikipedia.org/wiki/Compresión_multi-tasa_adaptativa</translation>
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
        <translation>http://es.wikipedia.org/wiki/Free_Lossless_Audio_Codec</translation>
    </message>
</context>
<context>
    <name>0038</name>
    <message>
        <source>Container</source>
        <translation>Contenedor</translation>
    </message>
    <message>
        <source>The following table lists the containers which ffDiaporama can use to generate videos, as well as the available audio and video codecs for every container:</source>
        <translation>En la siguiente tabla se muestran los contenedores ffDiaporama puede utilizar para generar vídeos, así como el audio disponible y codecs de vídeo para cada contenedor:</translation>
    </message>
    <message>
        <source>Extension</source>
        <translation>Extension</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Nombre</translation>
    </message>
    <message>
        <source>Video Codecs</source>
        <translation>Codecs de Video</translation>
    </message>
    <message>
        <source>Audio Codecs</source>
        <translation>Codecs de Audio</translation>
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
        <translation>http://es.wikipedia.org/wiki/3GP</translation>
    </message>
    <message>
        <source>AVI</source>
        <translation>AVI</translation>
    </message>
    <message>
        <source>Audio Video Interleave</source>
        <translation>Audio Vídeo entrelazado</translation>
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
        <translation>http://es.wikipedia.org/wiki/AVI</translation>
    </message>
    <message>
        <source>MKV</source>
        <translation>MKV</translation>
    </message>
    <message>
        <source>Matroska file format</source>
        <translation>Formato de archivo matroska</translation>
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
        <translation>http://es.wikipedia.org/wiki/Matroska</translation>
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
        <translation>http://es.wikipedia.org/wiki/MJPEG</translation>
    </message>
    <message>
        <source>MP4</source>
        <translation>MP4</translation>
    </message>
    <message>
        <source>MPEG-4 Part 14</source>
        <translation>MPEG-4 Parte 14</translation>
    </message>
    <message>
        <source>MP3, AAC</source>
        <translation>MP3, AAC</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/MPEG-4_Part_14</source>
        <translation>http://es.wikipedia.org/wiki/MPEG-4_Parte_14</translation>
    </message>
    <message>
        <source>MPEG</source>
        <translation>MPEG</translation>
    </message>
    <message>
        <source>MPEG program stream</source>
        <translation>MPEG stream</translation>
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
        <translation>http://es.wikipedia.org/wiki/MPEG_program_stream</translation>
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
        <translation>http://es.wikipedia.org/wiki/WebM</translation>
    </message>
    <message>
        <source>FLV</source>
        <translation>FLV</translation>
    </message>
    <message>
        <source>Flash file format 2005</source>
        <translation>Flash 2005</translation>
    </message>
    <message>
        <source>MP3</source>
        <translation>MP3</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/Adobe_Flash</source>
        <translation>http://es.wikipedia.org/wiki/Adobe_Flash_Professional</translation>
    </message>
    <message>
        <source>Flash file format 2008</source>
        <translation>Flash 2008</translation>
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
        <translation>http://es.wikipedia.org/wiki/Ogg</translation>
    </message>
</context>
<context>
    <name>0039</name>
    <message>
        <source>Video standards and resolutions</source>
        <translation>Normas y resoluciones de los videos</translation>
    </message>
    <message>
        <source> Standards and resolution are both fundamental properties which define a video. </source>
        <translation> Ls normas y resoluciones son propiedades fundamentales que definen un video.</translation>
    </message>
    <message>
        <source>Two associated properties are the geometry and the FPS number. </source>
        <translation>Estás dos propiedades están asociadas a otras propiedades : la geometría y el número de FPS.</translation>
    </message>
    <message>
        <source>Standard</source>
        <translation>Norma</translation>
    </message>
    <message>
        <source> Standards are a historic feature which continues today in spite of technological progress. </source>
        <translation>La norma es una propiedad histórica que perdura aún hoy día a pesar de las novedades tecnológicas.</translation>
    </message>
    <message>
        <source>A rich literature on this subject can be found on the internet. </source>
        <translation>Se puede encontrar en internet una extensa literatura acerca de este tema.</translation>
    </message>
    <message>
        <source>To simplify things we shall summarize as follows: </source>
        <translation>Para simplificar el asunto lo podemos resumir como sigue:</translation>
    </message>
    <message>
        <source>PAL is effective in all the countries where the electricity network is 50 hz (which is the case, for example, for Western European countries)</source>
        <translation>PAL está en vigor en todos los paises donde se encuentra la red eléctrica con 50 hz (que es el caso, por ejemplo, para los países de Europa Occidental)</translation>
    </message>
    <message>
        <source>NTSC is effective in all the countries where the electricity network is 60 hz (which is the case, for example, for the United States of America)</source>
        <translation>NTSC está en vigor en todos los paises con red eléctrica con 60 hz (es el caso, por ejemplo, de los Estados Unidos de América)</translation>
    </message>
    <message>
        <source>Geometry</source>
        <translation>Geometría</translation>
    </message>
    <message>
        <source> The geometry is the ratio of Width to Height. </source>
        <translation>La geometría es la relación entre Anchura y Altura.</translation>
    </message>
    <message>
        <source>4:3 corresponds to screens that are almost square</source>
        <translation>04:03 corresponde a pantallas que son casi cuadradas</translation>
    </message>
    <message>
        <source>16:9 corresponds to screens that are rectangular</source>
        <translation>16:09 corresponde a pantallas que son rectangulares</translation>
    </message>
    <message>
        <source>40:17 corresponds to cinema screens in overall size</source>
        <translation>40:17 corresponde a las pantallas de cine en tamaño total</translation>
    </message>
    <message>
        <source>Resolution</source>
        <translation>Resolución</translation>
    </message>
    <message>
        <source> Unlike with photos, video resolution is not expressed in megapixels but in number of points (pixels) shown by the screen multiplied by the number of lines. </source>
        <translation>A diferencia de las fotos, la resolución de vídeo no se expresa en megapíxeles sino en número de puntos (píxeles) mostrados por la pantalla multiplicado por el número de líneas.</translation>
    </message>
    <message>
        <source>So, 320x240 corresponds to 320 points of width and 240 lines in height </source>
        <translation>Entonces, 320x240 corresponde a 320 puntos de ancho y 240 líneas de altura</translation>
    </message>
    <message>
        <source>FPS (Frames per second)</source>
        <translation>FPS (Cuadros por segundo)</translation>
    </message>
    <message>
        <source> Corresponds to the number of images shown every second. You should know that in cinemas, 24 images are shown per second and this figure of 24 images is recognized as corresponding to the maximum number of images which the eye is capable of differentiating: </source>
        <translation>Se corresponde con el número de imágenes que se muestran cada segundo. Saber que en los cines se muestran 24 imágenes por segundo, y esta cifra de 24 imágenes se reconoce como correspondiente al número máximo de imágenes que el ojo es capaz de diferenciar:</translation>
    </message>
    <message>
        <source>More images per second and the eye does not notice it</source>
        <translation>Más imágenes por segundo y el ojo no lo nota</translation>
    </message>
    <message>
        <source>Fewer images per second and the film appears jerky</source>
        <translation>Menos imágenes por segundo y la película parece desigual</translation>
    </message>
    <message>
        <source>Matrix of combinations managed by ffDiaporama</source>
        <translation>Matriz de combinaciones gestionado por ffDiaporama</translation>
    </message>
    <message>
        <source> The following table indicates all the combinations of geometry, standards and resolutions managed by ffDiaporama. For every combination, it indicates the number of associated FPS: </source>
        <translation>La siguiente tabla muestra todas las combinaciones de geometría, normas y resoluciones que gestiona ffDiaporama. Para cada combinación, se indica el número de FPS asociado:</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Nombre</translation>
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
        <translation>Nota</translation>
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
        <translation>Formato especial usado en Blackberry, en pantallas muy pequeñas</translation>
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
        <translation>Usado fundamentalmente en internet y por la primera generación de smartphones y reproductores portátiles.</translation>
    </message>
    <message>
        <source>HVGA</source>
        <translation>HVGA</translation>
    </message>
    <message>
        <source>Used mainly on the Internet and by second generation smartphones and mobile video players. &lt;B&gt;Because this format does not respect the traditional video geometry&lt;/B&gt;, &lt;B&gt;black bands appear to fill the screen to 480x320.&lt;/B&gt;</source>
        <translation>Se utiliza principalmente en Internet y los smartphones de segunda generación, y reproductores de video móviles. &lt;B&gt; Debido a que este formato no respeta la geometría de vídeo tradicional &lt;/B&gt;, &lt;B&gt; aparecen bandas negras para llenar la pantalla de 480x320. &lt;/B&gt;</translation>
    </message>
    <message>
        <source>VGA</source>
        <translation>VGA</translation>
    </message>
    <message>
        <source>Used mainly on the Internet and by some smartphones.</source>
        <translation>Se utiliza principalmente en Internet y por algunos smartphones.</translation>
    </message>
    <message>
        <source>SD-DVD</source>
        <translation>SD-DVD</translation>
    </message>
    <message>
        <source>The old television format for cathode ray tubes. Note that this format was specifically created for equipment with oval points: It is the anamorphism of the points that determines the geometry. That is why &lt;B&gt;it is absolutely necessary to avoid this format for anything other than television sets with cathode ray tubes.&lt;/B&gt;</source>
        <translation>El antiguo formato de televisión para tubos de rayos catódicos. Tener en cuenta que este formato fue creado específicamente para los equipos con los puntos ovales: Es el anamorfismo de los puntos que determina la geometría. Es por eso que &lt;B&gt; es absolutamente necesario evitar este formato para cualquier dispositivo que no sea para los aparatos de televisión con tubos de rayos catódicos . &lt;/B&gt;</translation>
    </message>
    <message>
        <source>WVGA</source>
        <translation>WVGA</translation>
    </message>
    <message>
        <source>Used mainly on the Internet and by new generation smartphones and mobile video players. This format has become widespread and has replaced the old  QVGA, HVGA and VGA format used in the years 2000-2010. &lt;B&gt;Because this format does not respect the traditional video geometries, black bands appear to fill the screen to 800x480.&lt;/B&gt;</source>
        <translation>Se utiliza principalmente en Internet y los nuevos smartphones de generación y reproductores de video móviles. Este formato se ha extendido y ha sustituido el antiguo QVGA, HVGA y formato VGA utilizado en los años 2000-2010. &lt;B&gt; Debido a que este formato no respeta las geometrías de vídeo tradicionales, aparecen bandas negras para llenar la pantalla de 800x480. &lt;/B&gt;</translation>
    </message>
    <message>
        <source>XGA</source>
        <translation>XGA</translation>
    </message>
    <message>
        <source>Historically this format was used only by computers (fixed or portable). Now we meet it more and more on tablet computers like the iPad.</source>
        <translation>Históricamente, este formato fue utilizado sólo por computadoras (fijo o móvil). Ahora los encontramos cada vez más en los Tablet PC como el iPad.</translation>
    </message>
    <message>
        <source>23,976 FPS</source>
        <translation>23,976 FPS</translation>
    </message>
    <message>
        <source>Today, this format is widely used on the Internet, in particular by social networking and video-sharing sites. We also find it on certain &quot;home cinema&quot; devices.</source>
        <translation>Hoy, este formato es muy utilizado en Internet, en particular por las redes sociales y sitios para compartir videos. También lo encontramos en ciertos dispositivos &quot;home cinema&quot;.</translation>
    </message>
    <message>
        <source>This is the real &quot;home cinema&quot; format. It is used by the Blue Ray players and the &quot;home cinema&quot; devices.</source>
        <translation>Este es el formato real del &quot;home cinema&quot; . Es utilizado por los reproductores de Blue Ray y los dispositivos de &quot;home cinema&quot;.</translation>
    </message>
    <message>
        <source>Note that many other resolutions exists but which are not used by ffDiaporama.</source>
        <translation>Tener en cuenta que existen muchas otras resoluciones , pero que no son utilizados por ffDiaporama.</translation>
    </message>
</context>
<context>
    <name>003A</name>
    <message>
        <source>File attachments (Thumbnails, nfo, etc...)</source>
        <translation>Archivos adjuntos (Mniaturas, nfo, etc...)</translation>
    </message>
    <message>
        <source>ffDiaporama allows you to produce joint files during the rendering process.</source>
        <translation>ffDiaporama permite generar archivos adjuntos durante el proceso de renderizado.</translation>
    </message>
    <message>
        <source>The following files are availables:</source>
        <translation>Están disponibles los archivos siguientes:</translation>
    </message>
    <message>
        <source>Thumbnails</source>
        <translation>Miniaturas</translation>
    </message>
    <message>
        <source>A video or music file can be accompanied with an image file which must have the same name but with the .jpg extension (example: holidays.mkv and holidays.jpg in the same folder). </source>
        <translation>Un archivo de vídeo o música puede ir acompañado de un archivo de imagen que debe tener el mismo nombre pero con la extensión .jpg (ejemplo: holidays.mkv y holidays.jpg en la misma carpeta)..</translation>
    </message>
    <message>
        <source>This image is called a thumbnail and is used as icon for this file by ffDiaporama and many </source>
        <translation>Esta imagen se crea como una miniatura y se utiliza como icono de este archivo, tanto por ffDiaporama como por otros muchos </translation>
    </message>
    <message>
        <source>Media Center Systems</source>
        <translation>Sistemas Centro Multimedia</translation>
    </message>
    <message>
        <source>XBMC .nfo files</source>
        <translation>archivos .nfo de XBMC</translation>
    </message>
    <message>
        <source>The .nfo file for XBMC allows XBMC to recognize the rendered videos as movies. </source>
        <translation>El archivo .nfo para XBMC permite a este programa reconocer videos y películas generadas. </translation>
    </message>
    <message>
        <source>For more information see: &lt;a href=&quot;0044.html&quot;&gt;XBMC nfo files&lt;/a&gt;</source>
        <translation>Para más información consultar:  &lt;a href=&quot;0044.html&quot;&gt;archivos nfo de XBMC&lt;/a&gt;</translation>
    </message>
</context>
<context>
    <name>0040</name>
    <message>
        <source>Technical information on ffDiaporama</source>
        <translation>Información técnica en ffDiaporama</translation>
    </message>
    <message>
        <source>ffDiaporama command line arguments</source>
        <translation>Comandos en línea de argumentos para ffDiaporama</translation>
    </message>
    <message>
        <source>ffDiaporama project files</source>
        <translation>Archivos de proyecto de ffDiaporama</translation>
    </message>
    <message>
        <source>The configuration files for ffDiaporama</source>
        <translation>Archivos de configuración de ffDiaporama</translation>
    </message>
    <message>
        <source>XBMC nfo files</source>
        <translation>archivos nfo de XBMC</translation>
    </message>
    <message>
        <source> This section contains technical information about ffDiaporama. </source>
        <translation> Esta sección contiene información técnica acerca de ffDiaporama. </translation>
    </message>
    <message>
        <source>Index</source>
        <translation>Índice</translation>
    </message>
    <message>
        <source>Types of objects in ffDiaporama</source>
        <translation>Tipos de objetos en ffDiaporama</translation>
    </message>
</context>
<context>
    <name>0041</name>
    <message>
        <source>ffDiaporama command line arguments</source>
        <translation>Comandos en línea de argumentos para ffDiaporama</translation>
    </message>
    <message>
        <source>Syntax : ffDiaporama [-lang=] [-loglevel=] [Filename]</source>
        <translation>Sintaxis : ffDiaporama [-lang=] [-loglevel=] [Filename]</translation>
    </message>
    <message>
        <source>Setting</source>
        <translation>Parámetro</translation>
    </message>
    <message>
        <source>Explanation</source>
        <translation>Explicación</translation>
    </message>
    <message>
        <source>Filename</source>
        <translation>Archivo</translation>
    </message>
    <message>
        <source>Filename of the project file to load at application startup</source>
        <translation>El archivo del proyecto para cargar al inicio de la aplicación</translation>
    </message>
    <message>
        <source>-lang=</source>
        <translation>-lang=</translation>
    </message>
    <message>
        <source>The language to be used. can take the following values: </source>
        <translation>Para determinar el idioma en la aplicación se tendrán en cuenta los siguientes valores:</translation>
    </message>
    <message>
        <source>&lt;B&gt;cz&lt;/B&gt; to use Czech</source>
        <translation>&lt;B&gt;cz&lt;/B&gt; para el Checo</translation>
    </message>
    <message>
        <source>&lt;B&gt;de&lt;/B&gt; to use German</source>
        <translation>&lt;B&gt;de&lt;/B&gt; para el Alemán</translation>
    </message>
    <message>
        <source>&lt;B&gt;en&lt;/B&gt; to use English</source>
        <translation>&lt;B&gt;en&lt;/B&gt; para el Inglés</translation>
    </message>
    <message>
        <source>&lt;B&gt;es&lt;/B&gt; to use Spanish</source>
        <translation>&lt;B&gt;es&lt;/B&gt; para el Español</translation>
    </message>
    <message>
        <source>&lt;B&gt;el&lt;/B&gt; to use Greek</source>
        <translation>&lt;B&gt;el&lt;/B&gt; para el Griego</translation>
    </message>
    <message>
        <source>&lt;B&gt;fr&lt;/B&gt; to use French</source>
        <translation>&lt;B&gt;fr&lt;/B&gt; para el Francés</translation>
    </message>
    <message>
        <source>&lt;B&gt;it&lt;/B&gt; to use Italian</source>
        <translation>&lt;B&gt;it&lt;/B&gt; para el Italiano</translation>
    </message>
    <message>
        <source>&lt;B&gt;nl&lt;/B&gt; to use Dutch</source>
        <translation>&lt;B&gt;nl&lt;/B&gt; para el Holandés</translation>
    </message>
    <message>
        <source>&lt;B&gt;pt&lt;/B&gt; to use Portuguese</source>
        <translation>&lt;B&gt;pt&lt;/B&gt; para el Portugués</translation>
    </message>
    <message>
        <source>&lt;B&gt;ru&lt;/B&gt; to use Russian</source>
        <translation>&lt;B&gt;ru&lt;/B&gt; para el Ruso</translation>
    </message>
    <message>
        <source>&lt;B&gt;zh-tw&lt;/B&gt; to use Taiwanese</source>
        <translation>&lt;B&gt;zh-tw&lt;/B&gt; para el Taiwanés</translation>
    </message>
    <message>
        <source>-loglevel=</source>
        <translation>-loglevel=</translation>
    </message>
    <message>
        <source>Adjust the level of messages shown in the console: </source>
        <translation>Ajustar el nivel de los mensajes que se muestran en la consola: </translation>
    </message>
    <message>
        <source>1 to show all the messages of Debug, Information, Warning and Error levels</source>
        <translation>1 para mostrar todos los mensajes de Depuración, Información, Peligro y niveles de Error</translation>
    </message>
    <message>
        <source>2 to show the messages of Information, Warning and Error levels</source>
        <translation>2 para mostrar todos los mensajes de Información, Peligro y niveles de Error </translation>
    </message>
    <message>
        <source>3 to show the messages of Warning and Error levels</source>
        <translation>3 para mostrar todos los mensajes de Peligro y niveles de Error</translation>
    </message>
    <message>
        <source>4 to show only the messages of Error levels</source>
        <translation>4 para mostrar todos los mensajes de niveles de Error</translation>
    </message>
    <message>
        <source> Note: messages appear only if you launched the program from a console (CMD under Windows or Terminal under Linux). It is possible to redirect these messages into a log file by using &gt;. </source>
        <translation>Nota: Los mensajes sólo aparecen si se ha iniciado el programa desde una consola (CMD en Windows o Terminal en Linux). Es posible redirigir estos mensajes a un archivo de registro usando el carácter &gt;.</translation>
    </message>
    <message>
        <source>&lt;B&gt;gl&lt;/B&gt; to use Galician</source>
        <translation>&lt;B&gt;gl&lt;/B&gt; para usar el Gallego</translation>
    </message>
</context>
<context>
    <name>0042</name>
    <message>
        <source>ffDiaporama project files</source>
        <translation>Archivos de proyecto de ffDiaporama</translation>
    </message>
    <message>
        <source>Project files for ffDiaporama are XML files with .ffd extension.</source>
        <translation>Los archivos del proyecto de ffDiaporama son archivos XML con la extensión .ffd.</translation>
    </message>
    <message>
        <source>This XML file does not contain copies of the multimedia elements (image, video, music) which are included in the project but only links to these files.</source>
        <translation>Este archivo XML no contiene copias de elementos multimedia (imagen, video, música) que están incluídos en el proyecto sino que son enlaces a estos archivos.</translation>
    </message>
    <message>
        <source>The links are relative to the location of the .ffd file. This ensures that if the directory containing the project file (.ffd ) also contains the multimedia elements (directly or in subdirectories), it is possible to move and/or to rename the directory.</source>
        <translation>Los enlaces son relativos respecto a la ubicación del archivo  ffd.. Esto asegura que si el directorio que contiene el archivo de proyecto (.ffd) también contiene los elementos multimedia (directamente o en subdirectorios), es posible mover y/o cambiar el nombre del directorio.</translation>
    </message>
    <message>
        <source>Another advantage is that a project created under Linux can be opened under Windows and conversely.</source>
        <translation>Otra ventaja es que un proyecto creado bajo Linux se puede abrir bajo Windows y viceversa.</translation>
    </message>
</context>
<context>
    <name>0043</name>
    <message>
        <source>The configuration files for ffDiaporama</source>
        <translation>Archivos de configuración de ffDiaporama</translation>
    </message>
    <message>
        <source>The primary ffDiaporama.xml file is stored in the ffDiaporama directory. This file is global for all users: it contains the default ffDiaporama application settings. </source>
        <translation>El archivo de ffDiaporama.xml principal se almacena en el directorio ffDiaporama. Este archivo es global para todos los usuarios: contiene los parámetros de la aplicación ffDiaporama por defecto.</translation>
    </message>
    <message>
        <source>For Windows, this is C:\Program Files\ffDiaporama</source>
        <translation>Para Wndows es C:\Program Files\ffDiaporama</translation>
    </message>
    <message>
        <source>For Linux, it is /usr/share/ffDiaporama</source>
        <translation>Para Linux es /usr/share/ffDiaporama</translation>
    </message>
    <message>
        <source>A secondary user-specific ffDiaporama.xml file is stored in the user&apos;s profile folder. </source>
        <translation>Un archivo secundario ffDiaporama.xml específico del usuario está situado en el directorio de perfil de usario. </translation>
    </message>
    <message>
        <source>For Windows, this is C:\Document and settings\[user]</source>
        <translation>Para Windows es C:\Document and settings\[user]</translation>
    </message>
    <message>
        <source>For Linux, it is ~/.ffDiaporama</source>
        <translation>Para Linux es ~/.ffDiaporama</translation>
    </message>
    <message>
        <source>Remark: </source>
        <translation>Nota:</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Archivo</translation>
    </message>
    <message>
        <source>Use</source>
        <translation>Uso</translation>
    </message>
    <message>
        <source>ffDiaporama.xml</source>
        <translation>ffDiaporama.xml</translation>
    </message>
    <message>
        <source>Contains the application options for ffDiaporama</source>
        <translation>Contiene las opciones de la aplicación para ffDiaporama</translation>
    </message>
    <message>
        <source>Devices.xml</source>
        <translation>Devices.xml</translation>
    </message>
    <message>
        <source>Contains the base of profiles for video generation.</source>
        <translation>Contiene la base de los perfiles para la generación del video.</translation>
    </message>
    <message>
        <source>For example:</source>
        <translation>Por ejemplo:</translation>
    </message>
    <message>
        <source>In order to work, the application needs two configuration files and one database. The two configuration files consists of a pair of files.</source>
        <translation>Para que funcione, la aplicación necesita dos archivos de configuración y una base de datos. Los dos archivos de configuración se componen de un par de archivos.</translation>
    </message>
    <message>
        <source> When the application is launched for the first time, the user configuration files and the database are created if they dont already exist. </source>
        <translation> Cuando la aplicación se inicia por primera vez, los archivos de configuración del usuario y la base de datos se crean si aún no estan disponibles.</translation>
    </message>
    <message>
        <source>If ffDiaporama is used by several users on the same PC, there will be separate configuration files and database for each user.</source>
        <translation>Si ffDiaporama es utilizado por varios usuarios en el mismo PC, habrá archivos de configuración y de base de datos independientes para cada usuario.</translation>
    </message>
    <message>
        <source>ffDiaporama.db</source>
        <translation>ffDiaporama.db</translation>
    </message>
    <message>
        <source>Is a SQLite3 database containing cached objects and some configuration options.</source>
        <translation>Es una base de datos SQLite3 que contiene objetos en caché y algunas opciones de configuración.</translation>
    </message>
</context>
<context>
    <name>0044</name>
    <message>
        <source>XBMC nfo files</source>
        <translation>archivos nfo de XBMC</translation>
    </message>
    <message>
        <source>The .nfo file for XBMC allows XBMC to recognize the rendered videos as movies.</source>
        <translation>El archivo .nfo para XBMC permite que XBMC reconozca las películas y videos generados.</translation>
    </message>
    <message>
        <source>When doing a scan or an automatic new file discovery, XBMC uses the .nfo files.</source>
        <translation>Cuando comprueba que existe un nuevo archivo, XBMC usa los archivos .nfo.</translation>
    </message>
    <message>
        <source>During a manual refresh, XBMC offers you to find the film through one of its scrapers. Refuse its proposal to use the information contained in the .nfo file.</source>
        <translation>Durante una actualización manual, XBMC ofrece: encontrar la película a través de uno de sus rastreadores. Rechazar su propuesta de utilizar la información contenida en el archivo nfo.</translation>
    </message>
    <message>
        <source>Information included in the .nfo file</source>
        <translation>Iformación incluída en el archivo .nfo</translation>
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
        <translation> &lt;title&gt;&lt;U&gt;&lt;B&gt;Título del Proyecto&lt;/B&gt;&lt;/U&gt;&lt;/title&gt;</translation>
    </message>
    <message>
        <source> &lt;sorttitle&gt;&lt;U&gt;&lt;B&gt;Rendered filename&lt;/B&gt;&lt;/U&gt;&lt;/sorttitle&gt;</source>
        <translation> &lt;sorttitle&gt;&lt;U&gt;&lt;B&gt;Archivo renderizado&lt;/B&gt;&lt;/U&gt;&lt;/sorttitle&gt;</translation>
    </message>
    <message>
        <source> &lt;set&gt;&lt;B&gt;&lt;U&gt;Project Album&lt;/U&gt;&lt;/B&gt;&lt;/set&gt;</source>
        <translation> &lt;set&gt;&lt;B&gt;&lt;U&gt;Album del Proyecto&lt;/U&gt;&lt;/B&gt;&lt;/set&gt;</translation>
    </message>
    <message>
        <source> &lt;genre&gt;&lt;B&gt;&lt;U&gt;Project Album&lt;/U&gt;&lt;/B&gt;&lt;/genre&gt;</source>
        <translation> &lt;genre&gt;&lt;B&gt;&lt;U&gt;Album del Proyecto&lt;/U&gt;&lt;/B&gt;&lt;/genre&gt;</translation>
    </message>
    <message>
        <source> &lt;year&gt;&lt;U&gt;&lt;B&gt;Year of project date&lt;/B&gt;&lt;/U&gt;&lt;/year&gt;</source>
        <translation> &lt;year&gt;&lt;U&gt;&lt;B&gt;Año del proyecto&lt;/B&gt;&lt;/U&gt;&lt;/year&gt;</translation>
    </message>
    <message>
        <source> &lt;outline&gt;&lt;U&gt;&lt;B&gt;Project Title&lt;/B&gt;&lt;/U&gt;&lt;/outline&gt;</source>
        <translation> &lt;outline&gt;&lt;U&gt;&lt;B&gt;Título del Proyecto&lt;/B&gt;&lt;/U&gt;&lt;/outline&gt;</translation>
    </message>
    <message>
        <source> &lt;plot&gt;&lt;U&gt;&lt;B&gt;Project Comment&lt;/B&gt;&lt;/U&gt;&lt;/plot&gt;</source>
        <translation> &lt;plot&gt;&lt;U&gt;&lt;B&gt;Comentario del Proyecto&lt;/B&gt;&lt;/U&gt;&lt;/plot&gt;</translation>
    </message>
    <message>
        <source> &lt;director&gt;&lt;U&gt;&lt;B&gt;Project Author&lt;/B&gt;&lt;/U&gt;&lt;/director&gt;</source>
        <translation> &lt;director&gt;&lt;U&gt;&lt;B&gt;Autor del Proyecto&lt;/B&gt;&lt;/U&gt;&lt;/director&gt;</translation>
    </message>
    <message>
        <source> &lt;credits&gt;&lt;U&gt;&lt;B&gt;Project Author&lt;/B&gt;&lt;/U&gt;&lt;/credits&gt;</source>
        <translation> &lt;credits&gt;&lt;U&gt;&lt;B&gt;Autor del Proyecto&lt;/B&gt;&lt;/U&gt;&lt;/credits&gt;</translation>
    </message>
    <message>
        <source> &lt;runtime&gt;&lt;U&gt;&lt;B&gt;Project duration in minutes&lt;/B&gt;&lt;/U&gt;&lt;/runtime&gt;</source>
        <translation> &lt;runtime&gt;&lt;U&gt;&lt;B&gt;Duración del proyecto en minutos&lt;/B&gt;&lt;/U&gt;&lt;/runtime&gt;</translation>
    </message>
    <message>
        <source> &lt;thumb&gt;&lt;U&gt;&lt;B&gt;Project thumbnail&lt;/B&gt;&lt;/U&gt;&lt;/thumb&gt;</source>
        <translation> &lt;thumb&gt;&lt;U&gt;&lt;B&gt;Miniatura del proyecto&lt;/B&gt;&lt;/U&gt;&lt;/thumb&gt;</translation>
    </message>
    <message>
        <source> &lt;/movie&gt; </source>
        <translation> &lt;/movie&gt; </translation>
    </message>
    <message>
        <source>See also</source>
        <translation>Consultar también</translation>
    </message>
    <message>
        <source>Information on XBMC movies .nfo file</source>
        <translation>Información en XBMC de archivos .nfo</translation>
    </message>
</context>
<context>
    <name>0045</name>
    <message>
        <source>Types of objects in ffDiaporama</source>
        <translation>Tipos de objetos en ffDiaporama</translation>
    </message>
    <message>
        <source> This section contains information about types of objects that can be used with ffDiaporama. </source>
        <translation> Esta sección contiene información sobre los tipos de objetos que se pueden utilizar con ffDiaporama.</translation>
    </message>
    <message>
        <source>Index</source>
        <translation>Indice</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Texto</translation>
    </message>
    <message>
        <source>Music file</source>
        <translation>Archivo de música</translation>
    </message>
    <message>
        <source>Bitmap image file</source>
        <translation>Archivo de imagen bitmap</translation>
    </message>
    <message>
        <source>Bitmap image from clipboard</source>
        <translation>Archivo de imagen bitmap desde el portapapeles</translation>
    </message>
    <message>
        <source>Vector image file</source>
        <translation>Archivo de imagen vectorial</translation>
    </message>
    <message>
        <source>Video file</source>
        <translation>Archivo de Video</translation>
    </message>
    <message>
        <source>Google maps map</source>
        <translation>Mapa de Google maps</translation>
    </message>
    <message>
        <source>There are several things to know about Google Maps</source>
        <translation>Hay varias cosas que debemos conocer acerca de Google Maps</translation>
    </message>
    <message>
        <source>Google Maps generates images with up to 640x640. Within these images, Google Maps inserts logos that must be removed so that useful images are really only 640x600. Therefore, to generate an image for example 1080p, we have to assemble 6 Google Maps images.</source>
        <translation>Google Maps genera imágenes de hasta 640x640. Dentro de estas imágenes, Google Maps inserta logos que deben ser eliminados para que las imágenes útiles sean en realidad sólo de 640x600. Por lo tanto, para generar una imagen de 1080p por ejemplo, tenemos que montar 6 imágenes de Google Maps.</translation>
    </message>
    <message>
        <source>Google Maps limit the number of queries a user can send. This limitation is made to prevent robots to saturate the servers. Unfortunately, this limitation may cause problems when generating big picture. It is possible that you may receive an error warning message saying that you have reached the limit of Google Maps request grants to you.</source>
        <translation>Google Maps limita el número de consultas que un usuario puede solicitar. Esta limitación se hace para evitar que los robots puedan saturar los servidores. Por desgracia, esta limitación puede causar problemas al generar grandes imágenes. Es posible que se pueda recibir un mensaje de aviso de error que dice que se ha llegado al límite de mapas de Google que se puedan solicitar.</translation>
    </message>
    <message>
        <source>To resolve this problem, ffDiaporama integrates a mechanical of recovery. Thus, if a card can not be generated immediately, you can resume it generation later.</source>
        <translation>Para resolver este problema, ffDiaporama incorpora una mecánica de recuperación. Por lo tanto, si una tarjeta no se puede generar de inmediato, puede reanudar una generación posterior.</translation>
    </message>
    <message>
        <source>The roads are perpetually modified and Google Maps is constantly updated. Of course, it is not possible to generate a map for road conditions at a specific date. Therefore, think before you update a map of an old project.</source>
        <translation>Las carreteras se modifican perpetuamente y Google Maps se actualiza constantemente. Por supuesto, no es posible generar un mapa para las condiciones del camino en una fecha específica. Por lo tanto, piensa antes de actualizar un mapa de un viejo proyecto.</translation>
    </message>
    <message>
        <source>Image size and Map size</source>
        <translation>Tamaño de imagen y tamaño de Mapa</translation>
    </message>
    <message>
        <source>Depending on the zoom level, Google Maps decides himself of the information displayed on the map. Thus, it is not possible to generate several maps at different zoom levels and then to create a zoom animation because there is no chance that this animation be fluid. It&apos;s why ffDiaporama proposes to generate maps of several image sizes. So, to create a fluid zoom animation, you can use a large image.</source>
        <translation>Dependiendo del nivel de zoom, Google Maps decide él mismo sobre la información que se muestra en el mapa. Por lo tanto, no es posible generar varios mapas en diferentes niveles de zoom y entonces crear una animación de zoom, porque no hay posibilidad de que esta animación sea fluida. Es por eso que ffDiaporama propone generar mapas de varios tamaños. Por lo tanto, para crear una animación fluida con zoom, se pueden utilizar una imagen de gran tamaño.</translation>
    </message>
    <message>
        <source>The following table shows the different &lt;U&gt;Image sizes&lt;/U&gt; that you can generate.</source>
        <translation>La siguiente tabla muestra los diferentes &lt;U&gt;Tamaños de imágenes&lt;/U&gt; que se pueden generar.</translation>
    </message>
    <message>
        <source>Image size</source>
        <translation>Tamaño de imagen</translation>
    </message>
    <message>
        <source>Resolution</source>
        <translation>Resolución</translation>
    </message>
    <message>
        <source>Comment</source>
        <translation>Comentario</translation>
    </message>
    <message>
        <source>Small-16:9</source>
        <translation>Pequeño-16:9</translation>
    </message>
    <message>
        <source>640x360 (0.2 MPix)</source>
        <translation>640x360 (0.2 MPix)</translation>
    </message>
    <message>
        <source>Quarter of 720p. Useful to add a small map in a photo collage</source>
        <translation>Cuarta parte de 720p. Útil para añadir un pequeño mapa en un collage de fotos</translation>
    </message>
    <message>
        <source>1280x720 (0.9 MPix)</source>
        <translation>1280x720 (0.9 MPix)</translation>
    </message>
    <message>
        <source>Useful for creating a full-screen map in a 720p project or to add a map to a title slide in a 1080p project</source>
        <translation>Útil para crear un mapa de pantalla completa en un proyecto de 720p o para añadir un mapa a una diapositiva de título en un proyecto de 1080p</translation>
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
        <translation>Útil para crear un mapa &lt;B&gt; animado &lt;/B&gt; a pantalla completa en un proyecto de 720p o añadir un mapa &lt;B&gt; animado &lt;/B&gt; a una diapositiva de título en un proyecto de 1080p</translation>
    </message>
    <message>
        <source>1920x1080 (2 MPix)</source>
        <translation>1920x1080 (2 MPix)</translation>
    </message>
    <message>
        <source>Useful for creating a full-screen map in a 1080p project</source>
        <translation>Útil para crear un mapa a pantalla completa en un proyecto de 1080p</translation>
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
        <translation>Útil para crear un mapa &lt;B&gt; animado &lt;/B&gt; a pantalla completa en un proyecto de 1080p</translation>
    </message>
    <message>
        <source>Note that all image sizes are 16:9 geometry to simplify computation.</source>
        <translation>Observar que todos los tamaños son de geometría 16:9 para simplificar el cálculo.</translation>
    </message>
    <message>
        <source>Because a map is formed by joining multiple pieces of map, based on the image size, the card will be a map greater or lesser.</source>
        <translation>Debido a que un mapa está formado por la unión de múltiples piezas del mapa, basándose en el tamaño de la imagen, la tarjeta será un mapa mayor o menor.</translation>
    </message>
    <message>
        <source>The following table shows the &lt;U&gt;Map sizes&lt;/U&gt; in kilometers for each &lt;U&gt;Image sizes&lt;/U&gt; and &lt;U&gt;Google Maps zoom levels&lt;/U&gt;.</source>
        <translation>La siguiente tabla muestra los &lt;U&gt; tamaños del Mapa &lt;/U&gt; en kilómetros por cada &lt;U&gt;tamaño de las imágenes&lt;/U&gt; y &lt;U&gt;niveles de zoom de Google Maps&lt;/U&gt;.</translation>
    </message>
    <message>
        <source>Zoom</source>
        <translation>Zoom</translation>
    </message>
    <message>
        <source>Maps sizes (kilometers)</source>
        <translation>Tamaños de Mapas (kilometers)</translation>
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
        <translation>Notas:</translation>
    </message>
    <message>
        <source>Because Google Maps don&apos;t respect perfect alignment when using high zoom level, all map sizes lesser than 400 meters are useless with ffDiaporama.</source>
        <translation>Debido a que Google Maps no respeta la alineación perfecta cuando se utiliza con zoom de alto nivel, todo el mapa con tamaños menor que 400 metros son inútiles con ffDiaporama.</translation>
    </message>
    <message>
        <source>Google Maps zoom levels 0 and 1 are useless with ffDiaporama because they produce images that are too small.</source>
        <translation>los niveles de zoom de Google Maps 0 y 1 son inútiles con ffDiaporama ya que producen imágenes que son demasiado pequeñas.</translation>
    </message>
    <message>
        <source>Google Maps zoom levels 20 and 11 are useless with ffDiaporama Google Maps don&apos;t respect perfect alignment when using high zoom level.</source>
        <translation>los  niveles de zoom de Google Maps 20 y 11 son inútiles con ffDiaporama ya que Google Maps no respeta la alineación perfecta al usar elevados niveles de zoom.</translation>
    </message>
    <message>
        <source>Bitmap image file and Bitmap image from clipboard</source>
        <translation>Archivo de imagen de mapa de bits e imagen de mapa de bits desde el portapapeles</translation>
    </message>
    <message>
        <source>Google Maps</source>
        <translation>Google Maps</translation>
    </message>
    <message>
        <source>ffDiaporama can use music file in the following formats: wav, aac, adts, ac3, mp2, mp3, m4a or m4b or m4p, 3g2 or 3ga or 3gp, ogg or oga, spx, wma, flac</source>
        <translation>ffDiaporama puede utilizar archivos de música en los siguientes formatos: wav, aac, adts, ac3, mp2, mp3, m4a or m4b or m4p, 3g2 or 3ga or 3gp, ogg or oga, spx, wma, flac</translation>
    </message>
    <message>
        <source>See also: </source>
        <translation>Consultar también:</translation>
    </message>
    <message>
        <source>Definition of music file on Wikipedia</source>
        <translation>Definición del archivo de música en Wikipedia</translation>
    </message>
    <message>
        <source>ffDiaporama can use bitmap images in the following formats: bmp, gif (but not animated gif), jpg or jpeg, png, pbm, pgm, ppm, tiff or tif, xbm, xpm</source>
        <translation>ffDiaporama puede utilizar las imágenes de mapa de bits en los siguientes formatos: bmp, gif (pero no gif animado), jpg o jpeg, png, PBM, PGM, ppm, tiff o tif, xbm, xpm</translation>
    </message>
    <message>
        <source>Definition of Bitmap image file on Wikipedia</source>
        <translation>Definición de archivo de imagen de mapa de bits en la Wikipedia</translation>
    </message>
    <message>
        <source>ffDiaporama can use vector images in the following formats: svg</source>
        <translation>ffDiaporama puede utilizar imágenes de vectores en los siguientes formatos: svg</translation>
    </message>
    <message>
        <source>Definition of vector image file on Wikipedia</source>
        <translation>Definición de archivo de imagen del vector en Wikipedia</translation>
    </message>
    <message>
        <source>ffDiaporama can use video files in the following formats: avi, mov, mpg or mpeg, mkv, mp4 or m4v, flv, 3gp, ogv, webm, dv, wmv, mts or m2ts or mod</source>
        <translation>ffDiaporama puede usar archivos de vídeo en los siguientes formatos: avi, mov, mpg o mpeg, avi, mp4 o m4v, flv, 3gp, OGV, WebM, dv, wmv, mts o m2ts o mod</translation>
    </message>
    <message>
        <source>Note: mts, m2ts and mod files are stream formats (AVCHD) which involve some limitations. For more information on AVCHD, see: </source>
        <translation>Nota: mts, m2ts y archivos mod son formatos de flujo (AVCHD) que implican algunas limitaciones. Para obtener más información sobre AVCHD, consultar:</translation>
    </message>
    <message>
        <source>Advanced Video Coding High Definition on Wikipedia</source>
        <translation>Advanced Video Coding Alta definición en Wikipedia</translation>
    </message>
    <message>
        <source>Definition of video file on Wikipedia</source>
        <translation>Definición de archivo de vídeo en Wikipedia</translation>
    </message>
    <message>
        <source>Note: ffDiaporama uses the filename extension to determine the type of image. It is therefore necessary that this extension was valid.</source>
        <translation>Nota: ffDiaporama utiliza la extensión de nombre de archivo para determinar el tipo de imagen. Por lo tanto, es necesario que esta extensión sea válida.</translation>
    </message>
</context>
<context>
    <name>0101</name>
    <message>
        <source>Application options dialog</source>
        <translation>Modificar las opciones del programa</translation>
    </message>
    <message>
        <source>The Application options tab allows to define the general behavior of ffDiaporama.</source>
        <translation>La pestaña Opciones de la Aplicación permite definir el comportamiento general de ffDiaporama.</translation>
    </message>
    <message>
        <source>The Project options tab allows to define the options by default of the current project and for the new projects.</source>
        <translation>La pestaña Opciones del proyecto permite definir las opciones por defecto del proyecto actual y para nuevos proyectos.</translation>
    </message>
    <message>
        <source>The Rendering options Tab allows to define the options used by default during the generation of videos.</source>
        <translation>La pestaña Opciones de la generación de video permite definir las opciones por defecto para usar durante la generación de los videos.</translation>
    </message>
    <message>
        <source>Application options</source>
        <translation>Opciones de la aplicación</translation>
    </message>
    <message>
        <source>Remember Windows size and positions</source>
        <translation>Recordar el tamaño y la posición de las ventanas</translation>
    </message>
    <message>
        <source>If this box is checked, the sizes and the positions of all windows and dialogs will be saved and reused the next time you use ffDiaporama.</source>
        <translation>Si esta casilla está marcada, los tamaños y posiciones de todas las ventanas de ffDiaporama se guardarán para ser utilizados la próxima vez que abramos la aplicación.</translation>
    </message>
    <message>
        <source>Remember last used folders</source>
        <translation>Recordar los últimas carpetas usadas</translation>
    </message>
    <message>
        <source>If this box is checked, the directories for images, videos, projects, music and the generation of your movie will be saved and reused the next time you use ffDiaporama.</source>
        <translation>Si esta casilla está marcada, las carpetas con las imágenes, videos, proyectos, música y generación de películas serán guardados para ser usados la próxima vez que abramos la aplicación.</translation>
    </message>
    <message>
        <source>Enable &quot;raster&quot; Graphics system</source>
        <translation>Activar sistema gráfico &quot;raster&quot;</translation>
    </message>
    <message>
        <source>&lt;B&gt;For Linux users only: &lt;/B&gt;If this box is checked, the graphic system &quot;raster&quot; is used instead of the default graphic system. This option is used only at application start up. </source>
        <translation>&lt;B&gt;Sólo para usuarios de Linux: &lt;/B&gt;Si esta casilla está marcada, el sistema gráfico &quot;raster&quot; será utilizado en lugar del sistema gráfico por defecto. Esta opción sólo se utiliza en la aplicación al iniciarse.</translation>
    </message>
    <message>
        <source>The &quot;raster&quot; Graphics accelerates the display but can raise problems on some computer in particular with KDE.</source>
        <translation>El sistema gráfico &quot;raster&quot; acelera la pantalla, pero puede plantear problemas en algún equipo, en particular con KDE.</translation>
    </message>
    <message>
        <source>Memory profil</source>
        <translation>Perfil de memoria</translation>
    </message>
    <message>
        <source>Preview options</source>
        <translation>Opciones de previsualización</translation>
    </message>
    <message>
        <source>Frame rate</source>
        <translation>Imágenes por segundo</translation>
    </message>
    <message>
        <source>Defines the number of images per second which will be generated to show the preview. </source>
        <translation>Define el número de imágenes por segundo que se generarán para mostrar la previsualización.</translation>
    </message>
    <message>
        <source>Note: the higher this number, the more smooth the preview will be. On the other hand, more computer resources will be required. Reduce this number on slow computers or if the gauge for your multimedia reader is frequently in the red zone.</source>
        <translation>Nota: cuanto mayor sea este número, más suave será la vista previa. Por otro lado, se requerirán más recursos del equipo. Reducir este número en equipos lentos o si el medidor para su lector multimedia está frecuente en la zona roja.</translation>
    </message>
    <message>
        <source>Image smoothing (smooth images during preview)</source>
        <translation>Suavizar imagen (imágenes suaves durante la previsualización)</translation>
    </message>
    <message>
        <source>If this box is checked, the image smoothing effect will be applied to the images during the preview. </source>
        <translation>Si esta casilla está marcada, el efecto de suavizado de imagen se aplicará a las imágenes durante la previsualización.</translation>
    </message>
    <message>
        <source>Editor options</source>
        <translation>Opciones del editor</translation>
    </message>
    <message>
        <source>Coordinates unit</source>
        <translation>Unidades de coordenadas</translation>
    </message>
    <message>
        <source>This option allows to select the unit for the coordinates which will be used in the properties dialog. You can choose: </source>
        <translation>Esta opción permite seleccionar la unidad de coordenas que se usará en el cuadro de propiedades. Se puede escoger:</translation>
    </message>
    <message>
        <source>Percentage: Coordinates (X, Y, Width and Height) are expressed in percentages</source>
        <translation>Porcentaje: Coordenadas (X,Y Anchura y Altura) expresados en tanto por ciento</translation>
    </message>
    <message>
        <source>Pixel: Coordinates (X, Y, Width and Height) are expressed in pixels relative to a screen in 1080p mode</source>
        <translation>Pixel: Coordenadas (X,Y Anchura y Altura) expresados en pixels relativos a una pantalla en modo 1080p</translation>
    </message>
    <message>
        <source>Object position</source>
        <translation>Posición de los objetos</translation>
    </message>
    <message>
        <source>This option allows you to adjust the positions occupied by new objects inserted into the timeline. </source>
        <translation>Esta opción permite ajustar las posiciones que ocuparán los nuevos objetos insertados en la línea de tiempo.</translation>
    </message>
    <message>
        <source>If &lt;I&gt;&lt;B&gt;Insert after the current selected object&lt;/B&gt;&lt;/I&gt; is selected, then the new slides will be created after the current slide.</source>
        <translation>Si se selecciona &lt;I&gt;&lt;B&gt;Insertar después del objeto actual&lt;/B&gt;&lt;/I&gt; entonces se crearán las nuevas diapositivas después de la diapositiva actual.</translation>
    </message>
    <message>
        <source>If &lt;I&gt;&lt;B&gt;Append to the end of the project&lt;/B&gt;&lt;/I&gt; is selected, then the new slides will be created at the end of the project.</source>
        <translation>Si se selecciona &lt;I&gt;&lt;B&gt;Añadir al final del proyecto&lt;/B&gt;&lt;/I&gt;, entonces se crearán las nuevas diapositivas al final del proyecto.</translation>
    </message>
    <message>
        <source>Object deletion</source>
        <translation>Eliminación de objetos</translation>
    </message>
    <message>
        <source>If this box is checked, a confirmation prompt will be displayed every time you remove an object: </source>
        <translation>Si esta casilla está marcada, surge una solicitud de confirmación que se muestra cada vez que se elimina un objeto :</translation>
    </message>
    <message>
        <source>A slide from the main window</source>
        <translation>Una diapositiva en la ventana principal</translation>
    </message>
    <message>
        <source>A shot or bloc from the slide properties dialog box</source>
        <translation>Una toma o un bloque en la ventana de propiedades de diapositiva</translation>
    </message>
    <message>
        <source>If the &lt;B&gt;Activate deinterlace filter when add new MTS videos&lt;/B&gt; is checked, deinterlace filter will automatically be activated for all .mts videos added to the project. </source>
        <translation>Si está activada la casilla &lt;B&gt;Activar el filtro desentrelazar cuando se añaden nuevos vídeos MTS&lt;/B&gt; el filtro de desentrelazado se activará automáticamente para todos los vídeos mts añadidos al proyecto. añadidos al proyecto.</translation>
    </message>
    <message>
        <source>interlaced video</source>
        <translation>Video Entrelazado</translation>
    </message>
    <message>
        <source>Project options</source>
        <translation>Opciones del proyecto</translation>
    </message>
    <message>
        <source>Project properties</source>
        <translation>Propiedades del proyecto</translation>
    </message>
    <message>
        <source>Title</source>
        <translation>Título</translation>
    </message>
    <message>
        <source>Defined the automatic filling method to use for the title&apos;s project properties: </source>
        <translation>Definir el método de llenado automático para utilizar las propiedades del título del proyecto :</translation>
    </message>
    <message>
        <source>No automatic filling : You will have to define manually the title</source>
        <translation>Sin llenado automático: se tendrá que definir manualmente el título</translation>
    </message>
    <message>
        <source>Fill with project name when project save : The title will take the same name as the .ffd file</source>
        <translation>Rellenar con el nombre del proyecto al guardar el proyecto: El título tendrá el mismo nombre que el archivo ffd</translation>
    </message>
    <message>
        <source>Author</source>
        <translation>Autor</translation>
    </message>
    <message>
        <source>Default language</source>
        <translation>Idioma por defecto</translation>
    </message>
    <message>
        <source>Defines the default value for the field Language</source>
        <translation>Define el valor predeterminado para el campo Idioma</translation>
    </message>
    <message>
        <source>New project geometry</source>
        <translation>Nueva geometría del proyecto</translation>
    </message>
    <message>
        <source>Selects the image geometry to be used for the creation of projects. Three geometries are available : </source>
        <translation>Seleccionar la geometría de la imagen para ser utilizado para la creación de proyectos. Tres geometrías están disponibles:</translation>
    </message>
    <message>
        <source> Note: the geometry of a project is defined once and for all when it is created. It is not possible to modify it afterwards.</source>
        <translation>Nota: la geometría de un proyecto se define de una vez por todas cuando se crea. No es posible modificarlo posteriormente.</translation>
    </message>
    <message>
        <source>Default 1&lt;SUP&gt;st&lt;/SUP&gt; shot duration</source>
        <translation>Duración de la 1&lt;SUP&gt;a&lt;/SUP&gt; toma</translation>
    </message>
    <message>
        <source>Defines the default duration of the first shot for slides during their creation.</source>
        <translation>Define la duración predeterminada de la primera toma de diapositivas durante su creación.</translation>
    </message>
    <message>
        <source>Next shot duration</source>
        <translation>Duración de las tomas siguientes</translation>
    </message>
    <message>
        <source>Defines the default duration of further shots.</source>
        <translation>Define la duración predeterminada de nuevas tomas.</translation>
    </message>
    <message>
        <source>Default transition</source>
        <translation>Transición por defecto</translation>
    </message>
    <message>
        <source>Defines the transition to be inserted between inserted slides : </source>
        <translation>Define la transición para ser insertada entre las diapositivas introducidas:</translation>
    </message>
    <message>
        <source> A transition chosen randomly from the library</source>
        <translation> Una transición elegida al azar de la biblioteca</translation>
    </message>
    <message>
        <source> No transition</source>
        <translation>Sin transición</translation>
    </message>
    <message>
        <source> Cross-fade transition</source>
        <translation> Transición de fundido</translation>
    </message>
    <message>
        <source>Default options for speed waves</source>
        <translation>Las opciones por defecto para las curvas de velocidad</translation>
    </message>
    <message>
        <source>Transition</source>
        <translation>Transición</translation>
    </message>
    <message>
        <source>Sets the default speed wave for the transitions of new projects</source>
        <translation>Ajustar la curva de velocidad predeterminada para las transiciones de los nuevos proyectos</translation>
    </message>
    <message>
        <source>Blocks animation</source>
        <translation>Animación de bloques</translation>
    </message>
    <message>
        <source>Sets the default speed curve for the blocks animations of new projects</source>
        <translation>Ajustar la curva de velocidad por defecto de las animaciones de los bloques de los nuevos proyectos</translation>
    </message>
    <message>
        <source>Images animation</source>
        <translation>Animaciones de las imágenes</translation>
    </message>
    <message>
        <source>Sets the default speed for the image effects animations of new projects</source>
        <translation>Ajustar la velocidad predeterminada para animaciones de efectos de imagen de nuevos proyectos</translation>
    </message>
    <message>
        <source>Default options for new text block</source>
        <translation>Las opciones por defecto para el nuevo bloque de texto</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Texto</translation>
    </message>
    <message>
        <source>Allows to select the characters style applied to the new text blocks. This style defines the font, its size, its color and the shadow effects applied to the text.</source>
        <translation>Permite seleccionar el estilo de caracteres aplicado a los nuevos bloques de texto. Este estilo define el tipo de letra, su tamaño, su color y los efectos de sombra aplicados al texto.</translation>
    </message>
    <message>
        <source>Background</source>
        <translation>Fondo</translation>
    </message>
    <message>
        <source>Allows to select the style of background applied to the new text blocks. This style defines the transparency of the block and its filling.</source>
        <translation>Permite seleccionar el estilo del fondo aplicado a los nuevos bloques de texto. Este estilo define la transparencia del bloque y su relleno.</translation>
    </message>
    <message>
        <source>Shape</source>
        <translation>Forma</translation>
    </message>
    <message>
        <source>Coordinates</source>
        <translation>Coordenadas</translation>
    </message>
    <message>
        <source>Allows to select, for every project geometry, the style of the location applied to the new text blocks. This style defines the size, the coordinates, the rotations and the geometrical constraint.</source>
        <translation>Permite seleccionar, para cada geometría de proyecto, el estilo de la ubicación aplicado a los nuevos bloques de texto. Este estilo define el tamaño, las coordenadas, las rotaciones y la restricción geométrica.</translation>
    </message>
    <message>
        <source>Locking</source>
        <translation>Bloqueo</translation>
    </message>
    <message>
        <source>Allows to Select the geometric constraint applied to the new text blocks. </source>
        <translation>Permite seleccionar la restricción geométrica aplicada a los nuevos bloques de texto.</translation>
    </message>
    <message>
        <source>Unlock: The shape of the block is free</source>
        <translation>Desbloquear: La forma del bloque es libre</translation>
    </message>
    <message>
        <source>Lock to project geometry: The shape of the has the same shape as the image</source>
        <translation>Bloquear la geometría del proyecto: Su forma tiene la misma forma que la imagen</translation>
    </message>
    <message>
        <source>Default options for new image or video block (when creating slide)</source>
        <translation>Las opciones por defecto para el nuevo bloque de imagen o vídeo (durante la creación de diapositivas)</translation>
    </message>
    <message>
        <source>The following settings apply to all image formats:</source>
        <translation>Los siguientes ajustes se aplican a todos los formatos de imagen:</translation>
    </message>
    <message>
        <source>Text style</source>
        <translation>Estilo de texto</translation>
    </message>
    <message>
        <source>Allows to select the characters style applied to the text of the blocks. This style defines the font, its size, its color and the shadow effects applied to the text.</source>
        <translation>Permite seleccionar el estilo de caracteres aplicado al texto de los bloques. Este estilo define el tipo de letra, su tamaño, su color y los efectos de sombra aplicados al texto.</translation>
    </message>
    <message>
        <source>For every image format and every project geometry select the style of location to applied to the new blocks. This style concerns the size, the coordinates, the rotations and the geometrical constraint.</source>
        <translation>Para todos los formatos de imagen y geometría de cada proyecto, seleccionar el estilo de la ubicación para aplicar a los nuevos bloques. Este estilo se refiere al tamaño, las coordenadas, las rotaciones y la restricción geométrica.</translation>
    </message>
    <message>
        <source>Framing styles define how to crop the image to make it compatible with the block in which is displayed.</source>
        <translation>Los estilos de encuadre definen cómo recortar la imagen para que sea compatible con el bloque en el que se muestra.</translation>
    </message>
    <message>
        <source>The positioning styles define the the size, coordinates, rotations and geometric constraint to apply to blocks.</source>
        <translation>Los estilos de posición definen el tamaño, coordenadas, rotaciones y restricciones geométricas para aplicar a bloques.</translation>
    </message>
    <message>
        <source>Default options for new image or video block (when adding block in slide dialog)</source>
        <translation>Las opciones por defecto para el nuevo bloque de imagen o de vídeo (al añadir el bloque en el diálogo de diapositivas)</translation>
    </message>
    <message>
        <source>The same selection that when creating slides apply.</source>
        <translation>La misma selección que se aplica al crear diapositivas.</translation>
    </message>
    <message>
        <source>Rendering options</source>
        <translation>Opciones de generación</translation>
    </message>
    <message>
        <source>Default video name</source>
        <translation>Nombre por defecto del video</translation>
    </message>
    <message>
        <source>This option allows to select the name which will be proposed by default during the rendering of videos. This option can be applied only if the project was saved at first.</source>
        <translation>Esta opción permite seleccionar el nombre que será propuesto por defecto durante la generación de los vídeos. Esta opción sólo se puede aplicar si el proyecto se guardó en un principio.</translation>
    </message>
    <message>
        <source>Use project name as video name</source>
        <translation>Utilizar el nombre del proyecto como nombre del video</translation>
    </message>
    <message>
        <source>If the project name is &quot;assembly.ffd&quot;, then &quot;assembly&quot; will be the proposed name</source>
        <translation>Si el nombre del proyecto es &quot;assembly.ffd&quot;, entonces &quot;assembly&quot; será el nombre propuesto</translation>
    </message>
    <message>
        <source>Use project folder&apos;s name as video name</source>
        <translation>Utilizar el nombre de la carpeta del proyecto como nombre del video</translation>
    </message>
    <message>
        <source>If the project name is &quot;assembly.ffd&quot; and is saved in the &quot;My holidays 2011&quot; directory, then &quot;My holidays 2011&quot; will be the proposed name</source>
        <translation>Si el nombre del proyecto es &quot;assembly.ffd&quot; y se guarda en la carpeta  &quot;Mis vacaciones 2011&quot; , entonces &quot;Mis vacaciones 2011&quot; será el nombre propuesto</translation>
    </message>
    <message>
        <source>Use title project as video name</source>
        <translation>Usar el título del proyecto como nombre del video</translation>
    </message>
    <message>
        <source>Use the title defined in the project properties as the name of video</source>
        <translation>Usar el título definido en las propiedades del proyecto como el nombre del video</translation>
    </message>
    <message>
        <source>Default device mode rendering options</source>
        <translation>Opciones por defecto en modo dispositivo</translation>
    </message>
    <message>
        <source>Smartphone</source>
        <translation>Smartphone</translation>
    </message>
    <message>
        <source>Selects the default type and equipment model when you will click the &quot;Player and Smartphone&quot; button of the &quot;Render movie&quot; menu</source>
        <translation>Seleccionar el tipo por defecto y el modelo de equipo cuando se hace clic en el botón &quot;Player y Smartphone&quot; del menú &quot;Generar video&quot;</translation>
    </message>
    <message>
        <source>Multimedia system</source>
        <translation>Sistema Multimedia</translation>
    </message>
    <message>
        <source>Selects the default type and equipment model when you will click the &quot;Multimedia system&quot; button of the &quot;Render movie&quot; menu</source>
        <translation>Seleccionar el tipo por defecto y el modelo de equipo cuando se hace clic en el botón &quot;Sistema Multimedia&quot; del menú &quot;Generar video&quot;</translation>
    </message>
    <message>
        <source>For the WEB</source>
        <translation>Para la WEB</translation>
    </message>
    <message>
        <source>Selects the default type and equipment model when you will click the &quot;For the Web&quot; button of the &quot;Render movie&quot; menu</source>
        <translation>Seleccionar el tipo por defecto y el modelo de equipo cuando se hace clic en el botón &quot;Para la Web&quot; del menú &quot;Generar video&quot;</translation>
    </message>
    <message>
        <source>Lossless</source>
        <translation>Lossless</translation>
    </message>
    <message>
        <source>Selects the default image size to be used when you will click the &quot;Lossless&quot; button of the &quot;Render movie&quot; menu</source>
        <translation>Seleccionar el formato de imagen por defecto y el modelo de equipo cuando se hace clic en el botón &quot;Lossless&quot; del menú &quot;Generar video&quot;</translation>
    </message>
    <message>
        <source>Default advanced rendering options</source>
        <translation>Opciones por defecto en modo avanzado</translation>
    </message>
    <message>
        <source>File format</source>
        <translation>Formato de archivo</translation>
    </message>
    <message>
        <source>Selects the default file type to use for the rendering out of the proposed list.</source>
        <translation>Selecciona el tipo de archivo predeterminado que se utilizará para la generación de la lista propuesta.</translation>
    </message>
    <message>
        <source>Video standard</source>
        <translation>Norma de video</translation>
    </message>
    <message>
        <source>Selects the default video standard to use: PAL or NTSC.</source>
        <translation>Permite seleccionar la norma de vídeo por defecto a usar: PAL o NTSC.</translation>
    </message>
    <message>
        <source>Format</source>
        <translation>Formato</translation>
    </message>
    <message>
        <source>Selects the default image format to use for the rendering out of the proposed list.</source>
        <translation>Permite seleccionar el formato de imagen predeterminado para la generación del video de la lista propuesta.</translation>
    </message>
    <message>
        <source>Video codec</source>
        <translation>Codec de Video</translation>
    </message>
    <message>
        <source>Selects the default video codec to use for the rendering out of the proposed list.</source>
        <translation>Permite seleccionar el códec de vídeo predeterminado que se utilizará para la generación del video de la lista propuesta.</translation>
    </message>
    <message>
        <source>Selects the default bit rate to use for video during the rendering out of the proposed list.</source>
        <translation>Seleccionar la velocidad de bits predeterminada para el vídeo durante la generación del video de la lista propuesta.</translation>
    </message>
    <message>
        <source>Audio codec</source>
        <translation>Codec de Audio</translation>
    </message>
    <message>
        <source>Selects the default audio codec to use for the rendering out of the proposed list.</source>
        <translation>Permite seleccionar el codec de audio predeterminado para la generación del video de la lista propuesta.</translation>
    </message>
    <message>
        <source>Selects the default bit rate to use for audio during the rendering out of the proposed list.</source>
        <translation>Seleccionar la velocidad de bits predeterminada para el audio durante la generación del video de la lista propuesta.</translation>
    </message>
    <message>
        <source>Other actions</source>
        <translation>Otras acciones</translation>
    </message>
    <message>
        <source>If the &lt;B&gt;Automatically crop 1920x1088 video to 1920x1080&lt;/B&gt; is checked then video images are automatically cropped. </source>
        <translation>Si se está marcada la opción &lt;B&gt;Recortar automáticamente el video 1920x1088 a 1920x1080&lt;/B&gt; entonces las imágenes de vídeo se recortan automáticamente.</translation>
    </message>
    <message>
        <source>Remark: Some manufacturers produce FullHD videos 1920x1088 rather than 1920x1080. They make it to accelerate the encoding which is faster with a multiple of 16 lines. But this size is not 16:9. To keep the whole image, not only the image is deformed to fit into the screen but besides black bands appear on the sides. To avoid all these problems, by checking this box, these videos are truncated to be returned to the 1920x1080 sizes. Then 4 lines are cut at the top and bottom.</source>
        <translation>Nota: Algunos fabricantes producen videos FullHD 1920x1088 en vez de 1920x1080. Lo hacen para acelerar la codificación, que es más rápido con un múltiplo de 16 líneas. Sin embargo, este tamaño no es 16:09. Para mantener la imagen completa, no sólo la imagen se deforma para adaptarse a la pantalla, sino que además aparecen bandas negras a los lados. Para evitar todos estos problemas, al marcar esta casilla, estos videos se actualizan a las dimensiones 1920x1080 . Entonces 4 líneas se cortan en la parte superior e inferior.</translation>
    </message>
    <message>
        <source>Remark: Some manufacturers produce videos using interlaced mode. They make it to accelerate the encoding. The problem is it deforms the image on which moved lines appear. For more information on interlaced video, see this Wikipedia page: </source>
        <translation>Nota: Algunos fabricantes producen vídeos utilizando el modo entrelazado. Lo hacen para acelerar la codificación. El problema es que deforma la imagen en la que aparecen las líneas movidas. Para obtener más información sobre el vídeo entrelazado, consultar esta página Wikipedia:</translation>
    </message>
    <message>
        <source>4:3: Corresponds to an old TV with (almost) square screen</source>
        <translation>4:3: Corresponde a un viejo televisor con (casi) pantalla cuadrada</translation>
    </message>
    <message>
        <source>16:9: Corresponds to a modern TV with rectangular screen</source>
        <translation>16:9: Corresponde a un televisor moderno con pantalla rectangular</translation>
    </message>
    <message>
        <source>2.35:1: Corresponds to the Cinema format (on a TV, this format will use black strips at the top and below).</source>
        <translation>2.35:1: Corresponde al formato de cine (en un televisor, este formato usará bandas negras en la parte superior e inferior).</translation>
    </message>
    <message>
        <source>This group of settings applies to the new text blocks created in slide dialogue by means of this button: </source>
        <translation>Este grupo de configuración se aplica a los nuevos bloques de texto creados en el diálogo de diapositivas por medio de este botón:</translation>
    </message>
    <message>
        <source>This group of settings applies to the new image or video blocks created from the main window by means of this button: </source>
        <translation>Este grupo de parámetros se aplica a los nuevos bloques de imagen o de vídeo creados a partir de la ventana principal por medio de este botón:</translation>
    </message>
    <message>
        <source>Select, for each image format, the style of framing and the style of positioning to be applied to new blocks.</source>
        <translation>Seleccionar, para cada formato de imagen, el estilo de encuadre y el estilo de posicionamiento para ser aplicado a nuevos bloques.</translation>
    </message>
    <message>
        <source>This group of settings applies to the new image or video blocks created in slide dialogue by means of this button: </source>
        <translation>Este grupo de configuración se aplica a los nuevos bloques de imagen o de vídeo creados en el diálogo de diapositivas por medio de este botón:</translation>
    </message>
    <message>
        <source>Bitrate</source>
        <translation>Bitrate</translation>
    </message>
    <message>
        <source>This dialog box allows you to define options for the application. It consists of the following 3 tabs:</source>
        <translation>Este cuadro de diálogo permite definir las opciones de la aplicación. Se compone de las siguientes 3 ​​pestañas:</translation>
    </message>
    <message>
        <source>The Application options tab allows you to define the general behavior of ffDiaporama.</source>
        <translation>La pestaña Opciones de aplicación permite definir el comportamiento general de ffDiaporama.</translation>
    </message>
    <message>
        <source>The Project options tab allows you to define the options by default of the current project and for the new projects.</source>
        <translation>La pestaña Opciones del proyecto permite definir las opciones por defecto del proyecto actual y de los nuevos proyectos.</translation>
    </message>
    <message>
        <source>The Rendering options Tab allows you to define the options used by default during the generation of videos.</source>
        <translation>La pestaña Opciones de generación de video permite definir las opciones que se utilizan de forma predeterminada durante la generación de videos.</translation>
    </message>
    <message>
        <source>Disable tooltips in dialog box</source>
        <translation>Desactivar tooltips en el cuadro de diálogo</translation>
    </message>
    <message>
        <source>If this box is checked, tooltips will no longer appear in dialog boxes (only what&apos;s this will be available).</source>
        <translation>Si esta casilla está marcada, los tooltips ya no aparecerán en los cuadros de diálogo (sólo lo que esté disponible).</translation>
    </message>
    <message>
        <source>Offer to open the download Web page when a new version is available</source>
        <translation>Permite abrir la página web de descargas cuando aparezca una nueva versión</translation>
    </message>
    <message>
        <source>If this box is checked, a dialog box will appear at startup the next time a new version will be available. </source>
        <translation>Si esta casilla está marcada, aparecerá un cuadro de diálogo al iniciar, la próxima vez que una nueva versión estará disponible.</translation>
    </message>
    <message>
        <source>By default, this box is checked for Windows users and unchecked for Linux users</source>
        <translation>De forma predeterminada, esta casilla está marcada para los usuarios de Windows y sin marcar para usuarios de Linux</translation>
    </message>
    <message>
        <source>Defines the quantity of memory used as cache memory by ffDiaporama. This parameter is important because it allows to adapt ffDiaporama to your hardware. </source>
        <translation>Define la cantidad de memoria utilizada como memoria caché por ffDiaporama. Este parámetro es importante porque permite adaptar ffDiaporama al hardware.</translation>
    </message>
    <message>
        <source>For users of 32-bit systems, it is recommended that set this value to 512 MB if the computer has at least 2 GB of RAM. </source>
        <translation>Para los usuarios de sistemas de 32 bits, es recomendable establecer este valor en 512 MB ​​si el equipo tiene al menos 2 GB de RAM.</translation>
    </message>
    <message>
        <source>For users of 64-bit systems, it is recommended that set this value to 2 GB if the computer has at least 4 GB of RAM.</source>
        <translation>Para los usuarios de sistemas de 64 bits, es recomendable establecer este valor en 2 GB si el equipo tiene al menos 4 GB de RAM.</translation>
    </message>
    <message>
        <source>Max video preview height</source>
        <translation>Altura máxima de la previsualización de los videos</translation>
    </message>
    <message>
        <source>Sets the maximum height of videos used for the preview. Beyond this height, the videos are automatically reduced for creating images. </source>
        <translation>Establecer la altura máxima de los vídeos utilizados para la vista previa. Más allá de esta altura, los vídeos se reducen automáticamente para crear imágenes.</translation>
    </message>
    <message>
        <source>This parameter affects only the preview and does not change the quality of rendered video. </source>
        <translation>Este parámetro sólo afecta a la vista previa y no cambia la calidad de vídeo renderizado.</translation>
    </message>
    <message>
        <source>It is recommended to reduce this value for slow computer.</source>
        <translation>Se recomienda reducir este valor para PC lentos.</translation>
    </message>
    <message>
        <source>This effect consumes lots of resources and can result in slow preview on small machines. Unchecking this box allows then to keep a fluid preview. </source>
        <translation>Este efecto consume muchos recursos y puede resultar en la vista previa lento en equipos pequeños. Desmarcar esta casilla entonces para mantener un avance fluido.</translation>
    </message>
    <message>
        <source>This parameter affects only the preview and does not change the quality of rendered video.</source>
        <translation>Este parámetro sólo afecta a la vista previa y no cambia la calidad de vídeo renderizado.</translation>
    </message>
    <message>
        <source>Sound sample rate</source>
        <translation>Frecuencia</translation>
    </message>
    <message>
        <source>Defines the frequency of the sound generated to show the preview. </source>
        <translation>Define la frecuencia del sonido generado para reproducir la vista previa.</translation>
    </message>
    <message>
        <source>Video cropping</source>
        <translation>Recortar video</translation>
    </message>
    <message>
        <source>Video deinterlacing</source>
        <translation>Video desentrelazado</translation>
    </message>
    <message>
        <source>Various options</source>
        <translation>Opciones diversas</translation>
    </message>
    <message>
        <source>Short date format</source>
        <translation>Formato de fecha corto</translation>
    </message>
    <message>
        <source>This option allows you to specify the format in which computed dates are displayed. </source>
        <translation>Esta opción permite especificar el formato en el que se muestran las fechas calculadas.</translation>
    </message>
    <message>
        <source>Normally this format depends on the language used on your system, but it can be useful to change it especially if the interface is not available for your language.</source>
        <translation>Normalmente, este formato depende del idioma que se utiliza en el sistema, pero puede ser útil para cambiarlo todo si la interfaz no está disponible para el idioma.</translation>
    </message>
    <message>
        <source>Media Center Systems</source>
        <translation>Sistemas Centro Multimedia</translation>
    </message>
    <message>
        <source>Enhance id3v2 comptatibility</source>
        <translation>Compatibilidad con id3v2</translation>
    </message>
    <message>
        <source>For more compatibility with the standard id3v2, check this box to limit Title, Author and Album fields to 30 characters</source>
        <translation>Para mayor compatibilidad con el estándar id3v2, marcar esta casilla para limitar el Título, Autor y Álbum a 30 caracteres</translation>
    </message>
    <message>
        <source>Default thumbnail</source>
        <translation>Mniatura por defecto</translation>
    </message>
    <message>
        <source>Defines the model use as default thumbnail. Thumbnails are images that are generated along with the videos. These images are used as a poster by most </source>
        <translation>Define el uso del modelo como miniatura por defecto. Las miniaturas son imágenes que se generan, junto con los videos. Estas imágenes se utilizan como póster</translation>
    </message>
    <message>
        <source>For more information on joined files, see &lt;a href=&quot;003A.html&quot;&gt;File attachments&lt;/a&gt;</source>
        <translation>Para más información, consultar &lt;a href=&quot;003A.html&quot;&gt;Archivos adjuntos&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Allows to select the style of the shape to applied to the new text blocks. This style defines the shape (rectangle, circle, ...), the border, the opaqueness and the shadow effect applied to the block.</source>
        <translation>Permite seleccionar el estilo de la forma para aplicar a los nuevos bloques de texto. Este estilo define la forma (rectángulo, círculo, ...), el borde, la opacidad y el efecto de sombra aplicada al bloque.</translation>
    </message>
    <message>
        <source>Default joined files options</source>
        <translation>Archivos adjuntos por defecto</translation>
    </message>
    <message>
        <source>Join thumbnail to rendered file</source>
        <translation>Unir miniaturas a los videos generados</translation>
    </message>
    <message>
        <source>If this box is checked then a thumbnail file will be created with video.</source>
        <translation>Si esta casilla está marcada, un archivo de miniatura se creará con el vídeo.</translation>
    </message>
    <message>
        <source>Join XBMC .nfo file to rendered file</source>
        <translation>Adjuntar archivo .nfo para XBMC al generar el video</translation>
    </message>
    <message>
        <source>If this box is checked then a XMBC .nfo file will be created with video.</source>
        <translation>Si esta casilla está marcada, un archivo. nfo de XMBC se creará con el vídeo.</translation>
    </message>
    <message>
        <source>Frequency</source>
        <translation>Frecuencia</translation>
    </message>
    <message>
        <source>Select the default frequency to use for audio during the rendering.</source>
        <translation>Seleccionar la frecuencia de audio por defecto.</translation>
    </message>
    <message>
        <source>Default soundtrack rendering options</source>
        <translation>Opciones por defecto en modo exportar pista de audio</translation>
    </message>
    <message>
        <source>At the bottom of the dialog these buttons allow you to:</source>
        <translation>En la parte inferior del diálogo de estos botones permiten:</translation>
    </message>
    <message>
        <source> Check configuration allows to open the &lt;a href=&quot;0106.html&quot;&gt;Check configuration dialog&lt;/a&gt;</source>
        <translation>Comprobar la configuración que permite abrir el diálogo &lt;a href=&quot;0106.html&quot;&gt;Verificar la configuración&lt;/a&gt;</translation>
    </message>
    <message>
        <source> Manage device allows to open the &lt;a href=&quot;0102.html&quot;&gt;Manage device dialog&lt;/a&gt;</source>
        <translation>Gestionar dispositivo que permite abrir &lt;a href=&quot;0102.html&quot;&gt;Gestionar dispositivos&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Defines the default value for the field Author that is often so called Artist by </source>
        <translation>Define el valor predeterminado para el campo Autor que a menudo se llama así para el artista</translation>
    </message>
    <message>
        <source>Fill with project folder name when project save : The title will take the same name as the folder in which is save the .ffd file</source>
        <translation>Se completa con el nombre de la carpeta del proyecto cuando el proyecto se guarda: El título tendrá el mismo nombre que la carpeta en la que se guarda el archivo ffd</translation>
    </message>
    <message>
        <source>Network settings</source>
        <translation>Configuración de la red</translation>
    </message>
    <message>
        <source>Use a proxy to access the Internet</source>
        <translation>Usar un proxy para acceder a Internet</translation>
    </message>
    <message>
        <source>Check this box if your network requires that you use a proxy.</source>
        <translation>Marcar esta casilla si la red requiere el uso de un proxy.</translation>
    </message>
    <message>
        <source>Proxy address</source>
        <translation>Dirección de proxy</translation>
    </message>
    <message>
        <source>Enter address of the proxy host.</source>
        <translation>Introducir dirección del proxy.</translation>
    </message>
    <message>
        <source>Proxy port</source>
        <translation>Puerto del proxy</translation>
    </message>
    <message>
        <source>Enter the port number to access the proxy or nothing to use default port.</source>
        <translation>Introducir el número de puerto para acceder al proxy, o nada para utilizar el puerto por defecto.</translation>
    </message>
    <message>
        <source>Login</source>
        <translation>Login</translation>
    </message>
    <message>
        <source>Enter the login name to access the proxy or nothing if no login is required.</source>
        <translation>Introducir el nombre de inicio de sesión para acceder al proxy, o nada si no se requiere inicio de sesión.</translation>
    </message>
    <message>
        <source>Password</source>
        <translation>Password</translation>
    </message>
    <message>
        <source>Enter the login password to access the proxy or nothing if no login is required.</source>
        <translation>Introducir la contraseña de inicio de sesión para acceder al proxy, o nada si no se requiere un inicio de sesión.</translation>
    </message>
    <message>
        <source>Distance unit</source>
        <translation>Unidad de distancia</translation>
    </message>
    <message>
        <source>This option lets you specify the unit to be used for distances.</source>
        <translation>Esta opción permite especificar la unidad que se utilizará para las distancias.</translation>
    </message>
    <message>
        <source>Album</source>
        <translation>Album</translation>
    </message>
    <message>
        <source>Defines the default value for the field Album</source>
        <translation>Define el valor predeterminado para el campo Álbum</translation>
    </message>
    <message>
        <source>Default sound level</source>
        <translation>Nivel de sonido predeterminado</translation>
    </message>
    <message>
        <source>Set the volume level to be achieved by amplification for music and audio tracks when the volume is set to auto</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>0102</name>
    <message>
        <source>Manage devices dialog</source>
        <translation>Gestionar los dispositivos</translation>
    </message>
    <message>
        <source>The default database (supplied with ffDiaporama). These devices are registered in the global ffDiaporama configuration file.</source>
        <translation>La base de datos por defecto (suministrado con ffDiaporama). Estos dispositivos están registrados en el fichero de configuración global de ffDiaporama.</translation>
    </message>
    <message>
        <source>The devices which you modify or add. These are registered in your personal configuration file.</source>
        <translation>Los dispositivos que se modifiquen o agreguen. Éstos se encuentran registrados en el archivo de configuración personal.</translation>
    </message>
    <message>
        <source>You must first create a device</source>
        <translation>Debes crear primero un dispositivo</translation>
    </message>
    <message>
        <source>You define the various parameters</source>
        <translation>Defines varios parámetros</translation>
    </message>
    <message>
        <source>You click the &quot;Apply modifications&quot; button to register the parameters</source>
        <translation>Hacer clic en el botón &quot;Aplicar modificaciones&quot; para registrar los nuevos parámetros</translation>
    </message>
    <message>
        <source>Remarks:</source>
        <translation>Notas:</translation>
    </message>
    <message>
        <source>Device subtype</source>
        <translation>Subtipo de dispositivo</translation>
    </message>
    <message>
        <source>Allows you to select the category in which the equipment is classified</source>
        <translation>Permite seleccionar la categoría en la que el equipo está clasificado</translation>
    </message>
    <message>
        <source>Device model</source>
        <translation>Modelo de dispositivo</translation>
    </message>
    <message>
        <source>Note that you can delete only devices which you created - those shown with this icon: </source>
        <translation>Tener en cuenta que se pueden eliminar sólo los dispositivos que se han creado - los que se muestran con este icono:</translation>
    </message>
    <message>
        <source>Enter here the name of the device (free text entry field) and then, enter all the parameters required for rendering videos that are to be associated with the device profile (File format, video Standard, etc.)</source>
        <translation>Introducir aquí el nombre del dispositivo ( campo libre de entrada de texto) y, a continuación, introducir todos los parámetros necesarios para la generación de videos que están asociados con el perfil del dispositivo (formato de archivo, estándar de vídeo, etc)</translation>
    </message>
    <message>
        <source>Devices preceded by this icon are defined in the default database.</source>
        <translation>Dispositivos precedidos por este símbolo están definidos en la base de datos por defecto.</translation>
    </message>
    <message>
        <source>Devices preceded by this icon are those that you defined yourself, or those from the default database that you have modified.</source>
        <translation>Dispositivos precedidos por este símbolo son los que se han definido personalmente, o los de la base de datos que se han modificado.</translation>
    </message>
    <message>
        <source>Add device: Allows you to create a new device which will be added to the database. </source>
        <translation>Añadir dispositivo: Permite crear un nuevo dispositivo que se agrega a la base de datos.</translation>
    </message>
    <message>
        <source>The creation of a new device is made in 3 steps: </source>
        <translation>La creación de un nuevo dispositivo se hace en 3 pasos:</translation>
    </message>
    <message>
        <source>Remove device: Allows you to delete a device. </source>
        <translation>Eliminar dispositivo: Permite eliminar un dispositivo.</translation>
    </message>
    <message>
        <source>Reset to default: Cancels the modifications that you made on a device defined in the default ffDiaporama database</source>
        <translation>Restablecer a valores predeterminados: Cancelar las modificaciones que se realizaron en un dispositivo definido en la base de datos por defecto en ffDiaporama</translation>
    </message>
    <message>
        <source>The device type zone allows you to select the type of equipment to be shown in the list.</source>
        <translation>La zona del tipo de dispositivo permite seleccionar el tipo de equipo que se muestra en la lista.</translation>
    </message>
    <message>
        <source>The list shows the categories and the device types present in the database.</source>
        <translation>La lista muestra las categorías y los tipos de dispositivos presentes en la base de datos.</translation>
    </message>
    <message>
        <source>The following buttons allow you to act on the database:</source>
        <translation>Los siguientes botones permiten actuar sobre la base de datos:</translation>
    </message>
    <message>
        <source>This dialog box allows you to modify the equipment profiles database.</source>
        <translation>Este cuadro de diálogo permite modificar la base de datos de perfiles de equipos.</translation>
    </message>
    <message>
        <source>The database is actually composed of two parts:</source>
        <translation>La base de datos se compone realmente de dos partes:</translation>
    </message>
</context>
<context>
    <name>0103</name>
    <message>
        <source>Add or modify a predefined title slide</source>
        <translation>Agregar o modificar una diapositiva de título predefinido</translation>
    </message>
    <message>
        <source>This dialog allows you to select a model and define chapter information for predefined title slides.</source>
        <translation>Este cuadro de diálogo permite seleccionar un modelo y definir información del capítulo de diapositivas de título predefinido.</translation>
    </message>
    <message>
        <source>To understand the differences between &lt;B&gt;&lt;I&gt;Predefined title slides&lt;/I&gt;&lt;/B&gt; and &lt;B&gt;&lt;I&gt;Standard slides&lt;/I&gt;&lt;/B&gt;, see: &lt;a href=&quot;0012.html&quot;&gt;Predefined title slide&lt;/a&gt;</source>
        <translation>Para entender las diferencias entre &lt;B&gt;&lt;I&gt;Diapositivas de título predefinido&lt;/I&gt;&lt;/B&gt; y &lt;B&gt;&lt;I&gt;Diapositivas estándar&lt;/I&gt;&lt;/B&gt;, consultar: &lt;a href=&quot;0012.html&quot;&gt;Diapositiva de título predefinido&lt;/a&gt;</translation>
    </message>
    <message>
        <source>At the top of the box, the following two settings allow you to filter the Predefined title slide that are displayed in the selection area.</source>
        <translation>En la parte superior del diálogo, los dos parámetros siguientes permiten filtrar la diapositiva de título predefinidos que se muestran en el área de selección.</translation>
    </message>
    <message>
        <source>Slide type</source>
        <translation>Tipo de diapositiva</translation>
    </message>
    <message>
        <source>You can select between: </source>
        <translation>Se puede seleccionar entre:</translation>
    </message>
    <message>
        <source>Project title</source>
        <translation>Título del proyecto</translation>
    </message>
    <message>
        <source>This type of slide is usually used early in the project as the opening credits. </source>
        <translation>Este tipo de diapositiva se utiliza por lo general al principio del proyecto, por ejemplo, los créditos de apertura.</translation>
    </message>
    <message>
        <source>The texts variables that are used by the models of this slide type are based only on project information. For more information on project information, see: &lt;a href=&quot;0108.html&quot;&gt;Project properties dialog&lt;/a&gt;</source>
        <translation>Las variables de textos que son utilizados por los modelos de este tipo de diapositivas se basan únicamente en la información del proyecto. Para obtener más información sobre la información del proyecto, ver el diálogo: &lt;a href=&quot;0108.html&quot;&gt;Propiedades del proyecto&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Chapter title</source>
        <translation>Título del capítulo</translation>
    </message>
    <message>
        <source>This type of slide is usually used several times in the project to mark the beginning of the chapter. </source>
        <translation>Este tipo de diapositiva se utiliza por lo general varias veces en el proyecto para marcar el comienzo del capítulo.</translation>
    </message>
    <message>
        <source>The texts variables that are used by the models of this slide type are based on project information and on chapter information.</source>
        <translation>Las variables de textos que son utilizados por los modelos de este tipo de diapositivas se basan en la información del proyecto y en la información del capítulo.</translation>
    </message>
    <message>
        <source>Credit title</source>
        <translation>Título de crédito</translation>
    </message>
    <message>
        <source>This type of slide is usually used at the end of the project as the end credits. </source>
        <translation>ste tipo de diapositiva se utiliza por lo general al final del proyecto, por ejemplo, los créditos finales.</translation>
    </message>
    <message>
        <source>The texts variables that are used by the models of this slide type are generally computed. For more information on texts variables, see: &lt;a href=&quot;0013.html&quot;&gt;Dynamic variables&lt;/a&gt;</source>
        <translation>Las variables de textos que son utilizados por los modelos de este tipo de diapositiva se calculan automáticamente. Para obtener más información sobre las variables de textos , consultar: &lt;a href=&quot;0013.html&quot;&gt;Variables dinámicas&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Category</source>
        <translation>Categoría</translation>
    </message>
    <message>
        <source>Statics models</source>
        <translation>Modelos estáticos</translation>
    </message>
    <message>
        <source>This type lists statics models ie without animations.</source>
        <translation>Tipo de modelos estáticos, es decir, sin animaciones.</translation>
    </message>
    <message>
        <source>Animated models</source>
        <translation>Títulos animados</translation>
    </message>
    <message>
        <source>This type lists animated models ie with several shots.</source>
        <translation>Tipo de modelos animados, es decir, con varias tomas.</translation>
    </message>
    <message>
        <source>Custom models</source>
        <translation>Títulos personalizados</translation>
    </message>
    <message>
        <source>This type lists the templates that you saved with the &lt;B&gt;&lt;I&gt;Save as model&lt;/I&gt;&lt;/B&gt; function of the &lt;a href=&quot;0119.html&quot;&gt;Slide properties&lt;/a&gt; dialog box.</source>
        <translation>Este tipo enumera las plantillas que se guardan con el diálogo &lt;B&gt;&lt;I&gt;Guardar como modelo&lt;/I&gt;&lt;/B&gt; en el diálogo &lt;a href=&quot;0119.html&quot;&gt;Propiedades de la diapositiva&lt;/a&gt;.</translation>
    </message>
    <message>
        <source> The selection area display models corresponding to the current Type and Category you previously selected.</source>
        <translation>La zona de selección muestra los modelos que corresponden al tipo y categoría que se han seleccionado anteriormente.</translation>
    </message>
    <message>
        <source>The models are displayed and played, so you can see the slide as it will appear in your project with the content of dynamic variables.</source>
        <translation>Los modelos se muestran y reproducen, se puede ver la diapositiva que aparece en el proyecto con el contenido de las varibles dinámicas.</translation>
    </message>
    <message>
        <source>The slide duration is displayed on the bottom of each thumbnails model.</source>
        <translation>La duración de la diapositiva se muestra en la parte inferior de cada miniatura de modelo.</translation>
    </message>
    <message>
        <source>When your selection of model is made, the following settings are available if slide type is &lt;B&gt;&lt;I&gt;Chapter model&lt;/I&gt;&lt;/B&gt;:</source>
        <translation>Cuando se hace la selección del modelo, las siguientes opciones están disponibles si el tipo de diapositiva es &lt;B&gt;&lt;I&gt;Título de capítulo&lt;/I&gt;&lt;/B&gt;:</translation>
    </message>
    <message>
        <source>Chapter name</source>
        <translation>Nombre del capítulo</translation>
    </message>
    <message>
        <source>Enter here the name of the chapter.</source>
        <translation>Escribir aquí el nombre del capítulo.</translation>
    </message>
    <message>
        <source>Chapter date different from project date</source>
        <translation>Fecha del capítulo diferente de la fecha del proyecto</translation>
    </message>
    <message>
        <source>If this box is checked, the date of the chapter is different from the date of the project. </source>
        <translation>Si esta casilla está activada, la fecha del capítulo es diferente de la fecha del proyecto.</translation>
    </message>
    <message>
        <source>Remark: It is often useful to differentiate the date of the chapter of the date of the project. </source>
        <translation>Nota: A menudo es útil para diferenciar la fecha del capítulo de la fecha del proyecto.</translation>
    </message>
    <message>
        <source>Event date</source>
        <translation>Fecha del evento</translation>
    </message>
    <message>
        <source>Select a date for the chapter. </source>
        <translation>Seleccione una fecha para el capítulo.</translation>
    </message>
    <message>
        <source>Remark: This field is enabled only if the &lt;I&gt;&lt;B&gt;Chapter date different from project date&lt;/B&gt;&lt;/I&gt; check box is checked.</source>
        <translation>Nota: Este campo sólo se activa si la casilla &lt;I&gt;&lt;B&gt; fecha del capítulo  diferente de la fecha del proyecto &lt;/B&gt; &lt;/I&gt; está marcada.</translation>
    </message>
    <message>
        <source>Override date</source>
        <translation>Reemplazar la fecha</translation>
    </message>
    <message>
        <source>Check this box to override the date and offer you to enter the date as a free multi-line text. </source>
        <translation>Marcar esta casilla para reemplazar la fecha y permitir introducir la fecha como un texto de varias líneas libres.</translation>
    </message>
    <message>
        <source>Under these settings, the following two buttons allow you:</source>
        <translation>Bajo este procedimiento, los dos siguientes botones permiten:</translation>
    </message>
    <message>
        <source> Project properties</source>
        <translation> Propiedades del proyecto</translation>
    </message>
    <message>
        <source>This button allows you to open &lt;a href=&quot;0108.html&quot;&gt;Project properties dialog&lt;/a&gt;.</source>
        <translation>Este botón permite abrir el diálogo &lt;a href=&quot;0108.html&quot;&gt;Propiedades del proyecto&lt;/a&gt;.</translation>
    </message>
    <message>
        <source> Convert to standard slide</source>
        <translation>  Convertir en una diapositiva estándar</translation>
    </message>
    <message>
        <source>This button allows you to convert this slide to a standard slide which are fully customizable.</source>
        <translation>Este botón permite convertir la diapositiva a una diapositiva estándar que son completamente personalizables.</translation>
    </message>
    <message>
        <source>For example, if the project is &lt;U&gt;My vacation from 1 to 15&lt;/U&gt;, the chapter may be limited to the &lt;U&gt;3&lt;/U&gt;.</source>
        <translation>Por ejemplo, si el proyecto es &lt;U&gt;Mis vacaciones del 1 al 15&lt;/U&gt;, el capítulo puede ser limitado a &lt;U&gt;3&lt;/U&gt;.</translation>
    </message>
    <message>
        <source>Chapter location different from project location</source>
        <translation>Ubicación del capítulo diferente de la ubicación del proyecto</translation>
    </message>
    <message>
        <source>If this box is checked, the location of the chapter is different from the location of the project. </source>
        <translation>Si se marca esta casilla, la ubicación del capítulo es diferente a la ubicación del proyecto.</translation>
    </message>
    <message>
        <source>Remark: It is often useful to differentiate the location of the chapter of the location of the project. </source>
        <translation>Observación: A menudo es útil para diferenciar la ubicación del capítulo de la ubicación del proyecto.</translation>
    </message>
    <message>
        <source>For example, if the project location is &lt;U&gt;where I rented for the holidays&lt;/U&gt;, the chapter location may be &lt;U&gt;where I went on tour&lt;/U&gt;.</source>
        <translation>Por ejemplo, si la ubicación del proyecto es &lt;U&gt;donde he alquilado para las vacaciones&lt;/U&gt;, la ubicación del capítulo puede ser &lt;U&gt;donde me fui de gira&lt;/U&gt;.</translation>
    </message>
    <message>
        <source>Event location</source>
        <translation>Ubicación del evento</translation>
    </message>
    <message>
        <source>The location where the chapter&apos;s event took place</source>
        <translation>La ubicación donde el evento de este capítulo se llevó a cabo</translation>
    </message>
    <message>
        <source>Click on this </source>
        <translation>Hacer clic en este </translation>
    </message>
    <message>
        <source> button to select a location from the &lt;a href=&quot;0123.html&quot;&gt;Add or modify a location&lt;/a&gt; dialog or using a favorite</source>
        <translation> botón para seleccionar una ubicación en el diálogo &lt;a href=&quot;0123.html&quot;&gt;Añadir o modificar una ubicación&lt;/a&gt;, o usar un favorito</translation>
    </message>
    <message>
        <source> button to remove actual location (set to empty)</source>
        <translation> botón para quitar ubicación actual (establecido como vacío)</translation>
    </message>
    <message>
        <source>Remark: These fields and buttons are enabled only if the &lt;I&gt;&lt;B&gt;Chapter location different from project location&lt;/B&gt;&lt;/I&gt; check box is checked.</source>
        <translation>Observación: Estos campos y botones sólo están disponibles si la casilla &lt;I&gt;&lt;B&gt;Ubicación del capítulo diferente de la ubicación del proyecto&lt;/B&gt;&lt;/I&gt; está marcada.</translation>
    </message>
</context>
<context>
    <name>0104</name>
    <message>
        <source>Background properties</source>
        <translation>Propiedades del fondo</translation>
    </message>
    <message>
        <source>Same background as preceding object.</source>
        <translation>Usar el mismo fondo que el objeto precedente.</translation>
    </message>
    <message>
        <source> If this option is selected, the slide will have no background definition  but will use the same background as the previous slide: </source>
        <translation>Si se selecciona esta opción, la diapositiva no tendrá ninguna definición de fondo, pero se utilizará el mismo fondo que la diapositiva anterior:</translation>
    </message>
    <message>
        <source>If the previous slide does not have a background definition either, the check continues backwards until a slide is found which does have a background definition.</source>
        <translation>Si la diapositiva anterior no tiene una definición de fondo o bien, la comprobación sigue hacia atrás hasta que se encuentra una diapositiva que no tiene una definición de fondo.</translation>
    </message>
    <message>
        <source>If no previous slide has a background definition, then a black frame will be used.</source>
        <translation>Si la diapositiva anterior no tiene una definición de fondo, a continuación, se utiliza un marco negro.</translation>
    </message>
    <message>
        <source>Select a new background</source>
        <translation>Seleccionar un nuevo fondo</translation>
    </message>
    <message>
        <source> If this option is selected, the slide will have its own background definition. In that case, the following zones set properties for the background. </source>
        <translation>Si se selecciona esta opción, la diapositiva tendrá su propia definición de fondo. En ese caso, las siguientes zonas establecerán las propiedades del fondo.</translation>
    </message>
    <message>
        <source>Solid brush</source>
        <translation>Pincel sólido</translation>
    </message>
    <message>
        <source>Selects a plain color.</source>
        <translation>Permite seleccionar un color plano.</translation>
    </message>
    <message>
        <source>Gradient 2 colors</source>
        <translation>Gradiente de 2 colores</translation>
    </message>
    <message>
        <source>Selects a gradient of 2 colors</source>
        <translation>Permite seleccionar un gradiente de 2 colores</translation>
    </message>
    <message>
        <source>Gradient 3 colors</source>
        <translation>Gradiente de 3 colores</translation>
    </message>
    <message>
        <source>Selects a gradient of 3 colors</source>
        <translation>Permite seleccionar un gradiente de 3 colores</translation>
    </message>
    <message>
        <source>Image from library</source>
        <translation>Imagen de la librería</translation>
    </message>
    <message>
        <source>Image disk</source>
        <translation>Imagen desde un fichero</translation>
    </message>
    <message>
        <source>Allows you to select a photo or an image. </source>
        <translation>Permite seleccionar una foto o una imagen.</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Archivo</translation>
    </message>
    <message>
        <source>Indicates the name of the current file</source>
        <translation>Indica el nombre del archivo actual</translation>
    </message>
    <message>
        <source>Keep aspect ratio</source>
        <translation>Conservar la geometría</translation>
    </message>
    <message>
        <source>Full filling</source>
        <translation>Llenado completo</translation>
    </message>
    <message>
        <source>Allows the image to fill the whole screen with image deformation as needed.</source>
        <translation>Permite que la imagen llene toda pantalla con deformación de la imagen si es necesario.</translation>
    </message>
    <message>
        <source>Allow you to selects an image file</source>
        <translation>Permite seleccionar un archivo de imagen</translation>
    </message>
    <message>
        <source>If this box is checked, then the image will not be deformed, and: </source>
        <translation>Si esta casilla está marcada, la imagen no se deforma, y:</translation>
    </message>
    <message>
        <source> Open the &lt;a href=&quot;0110.html&quot;&gt;Image framing and correction dialog&lt;/a&gt; to regulate framing and image corrections </source>
        <translation>Abrir la ventana &lt;a href=&quot;0110.html&quot;&gt;Encuadre y corrección de imagen&lt;/a&gt; para regular el encuadre y corrección de imágenes</translation>
    </message>
    <message>
        <source>Selects a background image from the library </source>
        <translation>Seleccionar una imagen de fondo desde la librería</translation>
    </message>
    <message>
        <source>Remark: By default, the library contains a dozen of background screens. </source>
        <translation>Nota: De forma predeterminada, la biblioteca contiene una docena de fondos de pantalla.</translation>
    </message>
    <message>
        <source>Download extensions</source>
        <translation>Descargar extensiones</translation>
    </message>
    <message>
        <source>You can get additionals backgrounds installing the &lt;B&gt;&lt;U&gt;Texturemate&lt;/U&gt;&lt;/B&gt; extension from this page </source>
        <translation>Se pueden obtener fondos adicionales instalando la extensión &lt;B&gt; &lt;U&gt; Texturemate &lt;/U&gt; &lt;/B&gt; desde esta dirección</translation>
    </message>
    <message>
        <source>The &quot;Background properties&quot; dialog allows you to define settings for the background of the slide.</source>
        <translation>El cuadro de diálogo &quot;Propiedades de fondo&quot; permite definir los ajustes para el fondo de la diapositiva.</translation>
    </message>
</context>
<context>
    <name>0105</name>
    <message>
        <source>Chapter properties</source>
        <translation>Propiedades del capítulo</translation>
    </message>
    <message>
        <source> All slides have information chaptering so each slide can mark the beginning of a new chapter. </source>
        <translation> Todas las diapositivas tienen datos sobre división de capítulos para cada diapositiva se puede marcar el comienzo de un nuevo capítulo.</translation>
    </message>
    <message>
        <source>Remarks:</source>
        <translation>Notas:</translation>
    </message>
    <message>
        <source>Except for the first chapter which start at 0, all other chapters begin after the entering transition.</source>
        <translation>A excepción del primer capítulo que comienza en 0, el resto de los capítulos comienzan después de la transición entrante.</translation>
    </message>
    <message>
        <source>The 1st slide of the mount always mark the beginning of a new chapter.</source>
        <translation>La 1ª diapositiva del montaje siempre marca el inicio de un nuevo capítulo.</translation>
    </message>
    <message>
        <source>Start a new chapter with this slide</source>
        <translation>Iniciar un nuevo capítulo con esta diapositiva</translation>
    </message>
    <message>
        <source>If this box is checked, the slide will mark the beginning of a new chapter. </source>
        <translation>Si se marca esta casilla, la diapositiva marcará el comienzo de un nuevo capítulo.</translation>
    </message>
    <message>
        <source>Chapter name</source>
        <translation>Nombre de capítulo</translation>
    </message>
    <message>
        <source>Enter here the name of the chapter.</source>
        <translation>Introducir aquí el nombre del capítulo.</translation>
    </message>
    <message>
        <source>Chapter date different from project date</source>
        <translation>Fecha del capítulo diferente de la fecha del proyecto</translation>
    </message>
    <message>
        <source>If this box is checked, the date of the chapter is different from the date of the project. </source>
        <translation>Si esta casilla está activada, la fecha del capítulo es diferente de la fecha del proyecto.</translation>
    </message>
    <message>
        <source>Remark: It is often useful to differentiate the date of the chapter of the date of the project. </source>
        <translation>Nota: A menudo es útil para diferenciar la fecha del capítulo de la fecha del proyecto.</translation>
    </message>
    <message>
        <source>Event date</source>
        <translation>Fecha del evento</translation>
    </message>
    <message>
        <source>Select a date for the chapter. </source>
        <translation>Seleccionar una fecha para el capítulo.</translation>
    </message>
    <message>
        <source>Remark: This field is enabled only if the &lt;I&gt;&lt;B&gt;Chapter date different from project date&lt;/B&gt;&lt;/I&gt; check box is checked.</source>
        <translation>Nota: Este campo sólo se activa si la casilla&lt;B&gt;&lt;I&gt;  Fecha del capítulo diferente de la fecha del proyecto &lt;/B&gt; &lt;/I&gt; está marcada.</translation>
    </message>
    <message>
        <source>Check this box to override the date and offer you to enter the date as a free multi-line text. </source>
        <translation>Marcar esta casilla para reemplazar la fecha y permitir introducir la fecha como un texto de varias líneas libres.</translation>
    </message>
    <message>
        <source>Remark: This box cannot be deactivated for the first slide of the project.</source>
        <translation>Nota: Esta casilla no puede ser desactivada para la primera diapositiva del proyecto.</translation>
    </message>
    <message>
        <source>Override date</source>
        <translation>Reemplazar la fecha</translation>
    </message>
    <message>
        <source>This dialog allows you to define settings for the chapter information of the slide:</source>
        <translation>Este cuadro de diálogo permite definir la configuración de la información de los capítulos de la diapositiva:</translation>
    </message>
    <message>
        <source>For example, if the project is &lt;U&gt;My vacation from 1 to 15&lt;/U&gt;, the chapter may be limited to the &lt;U&gt;3&lt;/U&gt;.</source>
        <translation>Por ejemplo, si el proyecto es &lt;U&gt;Mis vacaciones del 1 al 15&lt;/U&gt;, el capítulo puede ser limitado a &lt;U&gt;3&lt;/U&gt;.</translation>
    </message>
    <message>
        <source>Chapter location different from project location</source>
        <translation>Ubicación del capítulo diferente diferente a la ubicación del proyecto</translation>
    </message>
    <message>
        <source>If this box is checked, the location of the chapter is different from the location of the project. </source>
        <translation>Si se marca esta casilla, la ubicación del capítulo es diferente a la ubicación del proyecto.</translation>
    </message>
    <message>
        <source>Remark: It is often useful to differentiate the location of the chapter of the location of the project. </source>
        <translation>Observación: A menudo es útil para diferenciar la ubicación del capítulo de la ubicación del proyecto.</translation>
    </message>
    <message>
        <source>For example, if the project location is &lt;U&gt;where I rented for the holidays&lt;/U&gt;, the chapter location may be &lt;U&gt;where I went on tour&lt;/U&gt;.</source>
        <translation>Por ejemplo, si la ubicación del proyecto es &lt;U&gt;donde he alquilado para las vacaciones&lt;/U&gt;, la ubicación del capítulo puede ser &lt;U&gt;donde me fui de gira&lt;/U&gt;.</translation>
    </message>
    <message>
        <source>Event location</source>
        <translation>Lugar del evento</translation>
    </message>
    <message>
        <source>The location where the chapter&apos;s event took place</source>
        <translation>La ubicación donde el evento de este capítulo se llevó a cabo</translation>
    </message>
    <message>
        <source>Click on this </source>
        <translation>Clic en este </translation>
    </message>
    <message>
        <source> button to select a location from the &lt;a href=&quot;0123.html&quot;&gt;Add or modify a location&lt;/a&gt; dialog or using a favorite</source>
        <translation> botón para seleccionar una ubicación en el diálogo &lt;a href=&quot;0123.html&quot;&gt;Añadir o modificar una ubicación&lt;/a&gt;, o usar un favorito</translation>
    </message>
    <message>
        <source> button to remove actual location (set to empty)</source>
        <translation> botón para quitar ubicación actual (establecido como vacío)</translation>
    </message>
    <message>
        <source>Remark: These fields and buttons are enabled only if the &lt;I&gt;&lt;B&gt;Chapter location different from project location&lt;/B&gt;&lt;/I&gt; check box is checked.</source>
        <translation>Observación: Estos campos y botones sólo están disponibles si la casilla &lt;I&gt;&lt;B&gt;Ubicación del capítulo diferente de la ubicación del proyecto&lt;/B&gt;&lt;/I&gt; está marcada.</translation>
    </message>
</context>
<context>
    <name>0106</name>
    <message>
        <source>Check configuration</source>
        <translation>Comprobar configuración</translation>
    </message>
    <message>
        <source>This dialog allows to check external tools configuration and libraries used by ffDiaporama.</source>
        <translation>Este cuadro de diálogo permite comprobar la configuración de herramientas externas y librerías utilizadas por ffDiaporama.</translation>
    </message>
    <message>
        <source>It is especially useful for the Linux users and for those who compiles the application.</source>
        <translation>Es especialmente útil para los usuarios de Linux y para aquellos que compilan la aplicación.</translation>
    </message>
    <message>
        <source>The most common shown errors concern the supported formats, codec and library versions.</source>
        <translation>Los errores más comunes que se muestran se refieren a versiones de los formatos soportados, codec y biblioteca.</translation>
    </message>
    <message>
        <source>To solve the problems you will have to install additional packages on your computer and may be to make ffDiaporama from source and verify again the configuration.</source>
        <translation>Para resolver algunos problemas se tienen que instalar paquetes adicionales en el ordenador y compilar ffDiaporama desde el código fuente, y comprobar de nuevo la configuración.</translation>
    </message>
</context>
<context>
    <name>0107</name>
    <message>
        <source>Export project</source>
        <translation>Exportar proyecto</translation>
    </message>
    <message>
        <source>This dialog box allows you to export the project and all ressources used by the project to a folder</source>
        <translation>Este cuadro de diálogo permite exportar el proyecto y todos los recursos utilizados por el proyecto a una carpeta</translation>
    </message>
    <message>
        <source>Destination folder</source>
        <translation>Carpeta de destino</translation>
    </message>
    <message>
        <source>Allows you to select the base destination folder. Click on the folder button to open the directory selector.</source>
        <translation>Permite seleccionar la carpeta de destino base. Hacer clic en el botón de la carpeta para abrir el selector de directorio.</translation>
    </message>
    <message>
        <source>Project subfolder</source>
        <translation>Subcarpeta del proyecto</translation>
    </message>
    <message>
        <source> Once completed your selections, click the OK button to start the export. </source>
        <translation>Una vez completada la selección, hacer clic en el botón OK para iniciar la exportación.</translation>
    </message>
    <message>
        <source>At any time during this process, you can click the cancel button to stop the export. </source>
        <translation>En cualquier momento durante este proceso, se puede hacer clic en el botón Cancelar para detener la exportación.</translation>
    </message>
    <message>
        <source>Remarks:</source>
        <translation>Notas:</translation>
    </message>
    <message>
        <source>The export takes into account all the resources that compose the project:</source>
        <translation>La exportación tiene en cuenta todos los recursos que componen el proyecto:</translation>
    </message>
    <message>
        <source>Images</source>
        <translation>Imágenes</translation>
    </message>
    <message>
        <source>Videos</source>
        <translation>Videos</translation>
    </message>
    <message>
        <source>Music</source>
        <translation>Música</translation>
    </message>
    <message>
        <source>Thumbnail elements</source>
        <translation>Elementos miniaturas</translation>
    </message>
    <message>
        <source>Wallpapers</source>
        <translation>Fondos</translation>
    </message>
    <message>
        <source>clipart that are not stored under the ClipArt alias.</source>
        <translation>clipart que no se almacenan bajo el alias de Clipart.</translation>
    </message>
    <message>
        <source>Export does not just only copy the files. The following rules apply:</source>
        <translation>Las exportaciones no sólo copian los archivos. Se aplican las siguientes reglas:</translation>
    </message>
    <message>
        <source>If multiple files from different directories have the same names, these files are re-named.</source>
        <translation>Si hay varios archivos de diferentes directorios que tienen los mismos nombres, estos archivos son renombrados.</translation>
    </message>
    <message>
        <source>A .ffd project file is created taking into account any changes in directory and file name.</source>
        <translation>Un archivo de proyecto .ffd se crea teniendo en cuenta los cambios en el directorio y el nombre del archivo.</translation>
    </message>
    <message>
        <source>Allows you to select the folder name to be created for the project files. By default the project title is proposed.</source>
        <translation>Permite seleccionar el nombre de la carpeta que se creará para los archivos del proyecto. Por defecto se propone el título del proyecto.</translation>
    </message>
</context>
<context>
    <name>0108</name>
    <message>
        <source>Project properties</source>
        <translation>Propiedades del proyecto</translation>
    </message>
    <message>
        <source>This information will then be registered in the form of TAGs in the rendered video files. </source>
        <translation>Esta información será registrada en forma de etiquetas en los archivos de vídeo generados.</translation>
    </message>
    <message>
        <source>Some fields are automatically filled and do not appear in this dialog: </source>
        <translation>Nota: Algunos campos se rellenans automáticamente y no aparecen en este diálogo:</translation>
    </message>
    <message>
        <source>Remarks:</source>
        <translation>Notas:</translation>
    </message>
    <message>
        <source>Settable fields</source>
        <translation>Campos configurables</translation>
    </message>
    <message>
        <source>Fields</source>
        <translation>Campos</translation>
    </message>
    <message>
        <source>Remark</source>
        <translation>Nota</translation>
    </message>
    <message>
        <source>Project geometry</source>
        <translation>Geometría del proyecto</translation>
    </message>
    <message>
        <source>This field allows you to select the geometry to be used for the project. </source>
        <translation>Este campo permite seleccionar la geometría que se usará para el proyecto.</translation>
    </message>
    <message>
        <source>Title</source>
        <translation>Título</translation>
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
        <translation>Idioma</translation>
    </message>
    <message>
        <source>Comment</source>
        <translation>Comentario</translation>
    </message>
    <message>
        <source>A free comment which can spread out on several lines. </source>
        <translation>Un comentario libre que puede extenderse en varias líneas.</translation>
    </message>
    <message>
        <source>Timestamp</source>
        <translation>Fecha y hora</translation>
    </message>
    <message>
        <source>Date and time of generation of the video.</source>
        <translation>Fecha y hora de la generación del vídeo.</translation>
    </message>
    <message>
        <source>Composer</source>
        <translation>Compositor</translation>
    </message>
    <message>
        <source>Contains the version of ffDiaporama with which the video was produced.</source>
        <translation>Contiene la versión del ffDiaporama con la que se generó el video.</translation>
    </message>
    <message>
        <source>Encoder</source>
        <translation>Codificador</translation>
    </message>
    <message>
        <source>Contains the version of libavformat (ffmpeg) with which the video was produced.</source>
        <translation>Contiene la versión de libavformat (ffmpeg) con la que se generó el video.</translation>
    </message>
    <message>
        <source>Chapters</source>
        <translation>Capítulos</translation>
    </message>
    <message>
        <source>The following fields appear: </source>
        <translation>Los siguientes campos aparecen:</translation>
    </message>
    <message>
        <source>Chapter number</source>
        <translation>Número del capítulo</translation>
    </message>
    <message>
        <source>Slide</source>
        <translation>Diapositiva</translation>
    </message>
    <message>
        <source>Slide number in wich chapter is defined</source>
        <translation>El número de diapositivas en el cual se define el capítulo</translation>
    </message>
    <message>
        <source>Chapter title</source>
        <translation>Título del capítulo</translation>
    </message>
    <message>
        <source>Start</source>
        <translation>Inicio</translation>
    </message>
    <message>
        <source>Chapter start position</source>
        <translation>Posición inicial del capítulo</translation>
    </message>
    <message>
        <source>End</source>
        <translation>Final</translation>
    </message>
    <message>
        <source>Chapter end position</source>
        <translation>Posición final del capítulo</translation>
    </message>
    <message>
        <source>Duration</source>
        <translation>Duración</translation>
    </message>
    <message>
        <source>Chapter duration</source>
        <translation>Duración del capítulo</translation>
    </message>
    <message>
        <source>Format</source>
        <translation>Formato</translation>
    </message>
    <message>
        <source>3GP/MP4/MKV</source>
        <translation>3GP/MP4/MKV</translation>
    </message>
    <message>
        <source>Full support</source>
        <translation>Soporte completo</translation>
    </message>
    <message>
        <source>AVI/MPG/FLV/OGV/WEBM</source>
        <translation>AVI/MPG/FLV/OGV/WEBM</translation>
    </message>
    <message>
        <source>No support</source>
        <translation>Sin soporte</translation>
    </message>
    <message>
        <source>Options for speed waves</source>
        <translation>Opciones para las curvas de velocidad</translation>
    </message>
    <message>
        <source>Transition</source>
        <translation>Transición</translation>
    </message>
    <message>
        <source>Defined default speed curve for transitions</source>
        <translation>Curva de velocidad definida por defecto para las transiciones</translation>
    </message>
    <message>
        <source>Block animations</source>
        <translation>Aimaciones de bloques</translation>
    </message>
    <message>
        <source>Defined default speed curve for block animations</source>
        <translation>Curva de velocidad definida por defecto para las animaciones</translation>
    </message>
    <message>
        <source>Image animations</source>
        <translation>Animaciones de imagen</translation>
    </message>
    <message>
        <source>Defined default speed curve for image animations</source>
        <translation>Curva de velocidad definida por defecto para las animaciones de imágenes</translation>
    </message>
    <message>
        <source>See also</source>
        <translation>Consultar también</translation>
    </message>
    <message>
        <source>TAG in ffmpeg</source>
        <translation>TAG en ffmpeg</translation>
    </message>
    <message>
        <source>Standard ID3v2</source>
        <translation>Norma ID3v2</translation>
    </message>
    <message>
        <source>Standard MPEG-7 on the descriptors of multimedia contents</source>
        <translation>Norma MPEG-7 sobre los descriptores de contenido multimedia</translation>
    </message>
    <message>
        <source>The properties of the project are a partial implementation of the </source>
        <translation>Las propiedades del proyecto son una implementación parcial de </translation>
    </message>
    <message>
        <source>MPEG-7</source>
        <translation>MPEG-7</translation>
    </message>
    <message>
        <source> standard on the descriptors of multimedia contents.</source>
        <translation>sobre los descriptores de contenido multimedia.</translation>
    </message>
    <message>
        <source>These properties are written into the video files during the rendering and can be exploited by indexing systems (collection managers) or by </source>
        <translation>Estas propiedades se escriben en los archivos de vídeo durante la generación y pueden ser aprovechados por los sistemas de indexación (administradores de colecciones) o por </translation>
    </message>
    <message>
        <source>Media Center Systems</source>
        <translation>Sistemas Centro Multimedia</translation>
    </message>
    <message>
        <source>Remark:</source>
        <translation>Nota:</translation>
    </message>
    <message>
        <source>This field is only editable when the dialog box is used for creating a new project. Subsequently, it is not possible to change this value.</source>
        <translation>Este campo sólo puede editarse cuando se utiliza el cuadro de diálogo para crear un proyecto nuevo. Posteriormente, no es posible cambiar este valor.</translation>
    </message>
    <message>
        <source>The title of the project </source>
        <translation>El título del proyecto </translation>
    </message>
    <message>
        <source>If the id3v2 compatibility option is set in &lt;a href=&quot;0101.html&quot;&gt;option dialog&lt;/a&gt;, this fields is limited to 30 characters</source>
        <translation>Si la opción de compatibilidad id3v2 se encuentra en &lt;a href=&quot;0101.html&quot;&gt;Opciones de la aplicación&lt;/a&gt;, este campo está limitado a 30 caracteres</translation>
    </message>
    <message>
        <source>Event date</source>
        <translation>Fecha del evento</translation>
    </message>
    <message>
        <source>The date of the event of the project</source>
        <translation>La fecha del evento del proyecto</translation>
    </message>
    <message>
        <source>Override date</source>
        <translation>Reemplazar la fecha</translation>
    </message>
    <message>
        <source>Check this box to override the date and offer you to enter the date as a free multi-line text</source>
        <translation>Marcar esta casilla para reemplazar la fecha y permitir introducir la fecha como un texto de varias líneas libres</translation>
    </message>
    <message>
        <source>The name of the author of the project. </source>
        <translation>El nombre del autor del proyecto.</translation>
    </message>
    <message>
        <source>This field is often shown by indexing system and </source>
        <translation>Este campo se muestra a menudo por el sistema de indexación y </translation>
    </message>
    <message>
        <source> under the term Artist.</source>
        <translation> bajo el término Artista.</translation>
    </message>
    <message>
        <source>The album of the project </source>
        <translation>El album del proyecto </translation>
    </message>
    <message>
        <source>ISO 639</source>
        <translation>ISO 639</translation>
    </message>
    <message>
        <source>Numerous indexing systems or </source>
        <translation>Numeros del sistema de indexación o </translation>
    </message>
    <message>
        <source>For more compatibility with indexing systems and </source>
        <translation>Para más compatibilidad con los sistemas de indexación y </translation>
    </message>
    <message>
        <source>, ffDiaporama does not include the whole video TAGs but is closer rather to the standard id3v2 than is the most used by these systems today. Furthermore, the video formats do not support every TAG in the same way.</source>
        <translation>, ffDiaporama no incluye TAG de videos, pero se acerca más a la norma ID3v2 que es la más usada hoy día por muchos sistemas, Por otra parte, los formatos de video no soportan todas las etiquetas TAG de la misma forma.</translation>
    </message>
    <message>
        <source> Chapters defined in the project are listed for consultation. (To modify chapters use Chapter button in &lt;a href=&quot;0119.html&quot;&gt;modify slide dialog&lt;/a&gt;.) </source>
        <translation> Los capítulos definidos en el proyecto se listan para su consulta. (Para modificar capítulos utilizar el botón Capítulo en &lt;a href=&quot;0119.html&quot;&gt;Propiedades de la diapositiva&lt;/a&gt;.)</translation>
    </message>
    <message>
        <source>Thumbnail</source>
        <translation>Miniatura</translation>
    </message>
    <message>
        <source>Create a new model from this thumbnail or edit custom thumbnail. Opens the &lt;a href=&quot;0117.html&quot;&gt;Edit thumbnail dialog&lt;/a&gt;.</source>
        <translation>Crear un nuevo modelo de esta miniatura o editar miniatura personalizada. Abrir el diálogo &lt;a href=&quot;0117.html&quot;&gt; Editar miniatura&lt;a &lt;/ a&gt;.</translation>
    </message>
    <message>
        <source>Customize the thumbnail only for this project (without creating a new thumbnail model). Opens the &lt;a href=&quot;0117.html&quot;&gt;Edit thumbnail dialog&lt;/a&gt;.</source>
        <translation>Personalizar la miniatura solo para este proyecto (sin necesidad de crear un nuevo modelo de miniatura). Abrir el diálogo &lt;a href=&quot;0117.html&quot;&gt;Editar miniatura&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Expor thumbnail to a jpeg file. By default, the proposed file name is &quot;folder.jpg&quot;. ffDiaporama and many </source>
        <translation>Exportar miniatura a un archivo jpeg. Por defecto, el nombre del archivo propuesto es &quot;folder.jpg&quot;. ffDiaporama y muchos </translation>
    </message>
    <message>
        <source> recognize this file as the icon to be used for the directory that contains it.</source>
        <translation>reconocen el archivo como el icono que se utilizará para el directorio que lo contiene.</translation>
    </message>
    <message>
        <source>The language of the audio track </source>
        <translation>El idioma de la pista de audio </translation>
    </message>
    <message>
        <source>(ISO 639 standard - 3 characters)</source>
        <translation>(Estándar ISO 639 - 3 caracteres)</translation>
    </message>
    <message>
        <source> will read only the 1&lt;SUP&gt;st&lt;/SUP&gt; line.</source>
        <translation> sólo reconocemos la línea 1&lt;SUP&gt;a&lt;/SUP&gt;.</translation>
    </message>
    <message>
        <source>Remark: Video formats do not support all the chapters in the same way:</source>
        <translation>Observación: Los formatos de vídeo no son compatibles con todos los capítulos de la misma manera:</translation>
    </message>
    <message>
        <source> This dialog allows you to define the information which qualifies the project. </source>
        <translation>Este cuadro de diálogo permite definir la información que califica el proyecto.</translation>
    </message>
    <message>
        <source>These options allow you to define the thumbnail that will be attached to the video file when rendering </source>
        <translation>Estas opciones permiten definir la imagen que se adjunta al archivo de vídeo al renderizar</translation>
    </message>
    <message>
        <source>Event location</source>
        <translation>Ubicación del evento</translation>
    </message>
    <message>
        <source>The location where the project&apos;s event took place</source>
        <translation>La ubicación donde el evento del proyecto se llevó a cabo</translation>
    </message>
    <message>
        <source>Click on this </source>
        <translation>Clic en este </translation>
    </message>
    <message>
        <source> button to select a location from the &lt;a href=&quot;0123.html&quot;&gt;Add or modify a location&lt;/a&gt; dialog or using a favorite</source>
        <translation> botón para seleccionar una ubicación desde el diálogo  &lt;a href=&quot;0123.html&quot;&gt;Añadir o modificar una ubicación&lt;/a&gt;, o usar un favorito</translation>
    </message>
    <message>
        <source> button to remove actual location (set to empty)</source>
        <translation> botón para eliminar ubicación actual (definido como vacío)</translation>
    </message>
    <message>
        <source>These options sets the value of the velocity curves for use whenever the corresponding options are set to &quot;Project Default&quot; </source>
        <translation>Estas opciones establecen el valor de las curvas de velocidad para su uso siempre que las opciones correspondientes se establecen en &quot;Proyecto por defecto&quot;</translation>
    </message>
</context>
<context>
    <name>0109</name>
    <message>
        <source>Select files</source>
        <translation>Seleccionar archivos</translation>
    </message>
    <message>
        <source>This dialog box is used in very many cases in the application.</source>
        <translation>Este cuadro de diálogo se utiliza en muchos casos en la aplicación.</translation>
    </message>
    <message>
        <source>It is used to select either one or multiple files depending on the purpose for which is was called.</source>
        <translation>Se utiliza para seleccionar uno o varios archivos en función de la finalidad para la que se ha llamado.</translation>
    </message>
    <message>
        <source>It consists of a multimedia file browser.</source>
        <translation>Se trata de un explorador de archivos multimedia.</translation>
    </message>
    <message>
        <source>For more information on the ffDiaporama&apos;s multimedia file browser, see: &lt;a href=&quot;0024.html&quot;&gt;The multimedia file browser&lt;/a&gt;</source>
        <translation>Para obtener más información sobre el explorador de archivos multimedia de ffDiaporama, ver: &lt;a href=&quot;0024.html&quot;&gt; El explorador de archivos multimedia &lt;/a&gt;</translation>
    </message>
</context>
<context>
    <name>0110</name>
    <message>
        <source>Correct, reframe or cut image or video</source>
        <translation>Corregir, reencuadrar y/o cortar una imagen o un vídeo</translation>
    </message>
    <message>
        <source>Allows to select a framing from a list of predefined framings. The framings are classified in different categories: </source>
        <translation>Permite seleccionar un encuadre de una lista de encuadres predefinidos. Los encuadres se clasifican en diferentes categorías:</translation>
    </message>
    <message>
        <source>Lock on the project geometry</source>
        <translation>Bloqueo sobre la geometría del proyecto</translation>
    </message>
    <message>
        <source>Lock the image framing selection rectangle to the same geometry as the project. If you place the image in full screen, the reframed part will correspond to the whole screen.</source>
        <translation>Bloquear el rectángulo de selección que enmarca la imagen a la misma geometría que el proyecto, , si se coloca la imagen en pantalla completa la parte recortada corresponderá a toda la pantalla.</translation>
    </message>
    <message>
        <source>Lock on the image geometry</source>
        <translation>Bloquear sobre la geometría de la imagen</translation>
    </message>
    <message>
        <source>Lock the image framing selection rectangle to the same geometry as the image</source>
        <translation>Bloquear la selección de imagen enmarcada como la geometría de la misma imagen</translation>
    </message>
    <message>
        <source>No constraint</source>
        <translation>Sin restricciones</translation>
    </message>
    <message>
        <source>No constraint is applied to the image framing selection rectangle.</source>
        <translation>No se aplica ninguna restricción al rectángulo de la imagen encuadrada.</translation>
    </message>
    <message>
        <source>Lock on this geometry</source>
        <translation>Bloquear esta geometría</translation>
    </message>
    <message>
        <source>Lock image framing selection rectangle to the actual geometry. This only has meaning when a shape has been defined in &quot;no constraint&quot; mode.</source>
        <translation>Bloquear la selección de imagen encuadrada como la geometría actual. Esto solo tiene significado cuando una forma-ha sido definida bajo el modo &quot;ninguna restricción&quot; .</translation>
    </message>
    <message>
        <source>According to the image format, various choices will be proposed to you. For example: </source>
        <translation>De acuerdo con el formato de la imagen, varias opciones serán propuestas . Por ejemplo:</translation>
    </message>
    <message>
        <source>The horizontal position from the left (X). This position is expressed as a percentage (%) of the width of the image.</source>
        <translation>La posición horizontal desde la izquierda (X). Esta posición se expresa como un porcentaje (%) de la anchura de la imagen.</translation>
    </message>
    <message>
        <source>The vertical position from the top of the image ( Y ). This position is expressed as a percentage (%) of the height of the image.</source>
        <translation>La posición vertical desde la parte superior de la imagen (Y). Esta posición se expresa como un porcentaje (%) de la altura de la imagen.</translation>
    </message>
    <message>
        <source>The width. This value is expressed as a percentage (%) of the original width of the image.</source>
        <translation>La anchura. Este valor se expresa como un porcentaje (%) de la anchura original de la imagen.</translation>
    </message>
    <message>
        <source>The height. This value is expressed as a percentage (%) of the original height of the image.</source>
        <translation>La altura. Este valor se expresa como un porcentaje (%) de la altura original de la imagen.</translation>
    </message>
    <message>
        <source>Remarks:</source>
        <translation>Notas:</translation>
    </message>
    <message>
        <source>With the mouse</source>
        <translation>Con el ratón</translation>
    </message>
    <message>
        <source>Click one of the handles and, with the mouse button down, drag the mouse to modify the size (to increase or reduce the part of the image to be kept). </source>
        <translation>Hacer clic en uno de los controladores y, con el botón pulsado, arrastrar el ratón para modificar el tamaño (para aumentar o reducir la parte de la imagen que se ha de  mantener).</translation>
    </message>
    <message>
        <source>Click the image and, with the mouse button down, drag the mouse to modify the part of the image which will be kept.</source>
        <translation>Hacer clic en la imagen y, con el botón del ratón, arrastrar el ratón para modificar la parte de la imagen que se mantendrá.</translation>
    </message>
    <message>
        <source>With the keyboard</source>
        <translation>Con el ratón</translation>
    </message>
    <message>
        <source>Use the arrows to move the part of the image which will be kept. </source>
        <translation>Usar las flechas para mover la parte de la imagen que se mantendrá.</translation>
    </message>
    <message>
        <source>Use SHIFT+arrows to move the upper left corner handle or CTRL+arraows to move the lower right corner handle, to change the size of the part of the image which will be kept.</source>
        <translation>Utilizar Mayús + flechas para mover el control de la esquina superior izquierda o CTRL + flechas para mover el control de la esquina inferior derecha., para cambiar el tamaño de la parte de la imagen que se mantendrá.</translation>
    </message>
    <message>
        <source>When the image does not correspond to the geometry of the video to be produced, transparent zones appear. For example: an 4:3 image used in a 16:9 project will be shown by default with a transparent zone on each side.</source>
        <translation>Cuando la imagen no se corresponde con la geometría del vídeo que va a ser generado, aparecen zonas transparentes. Por ejemplo: una imagen 4:03 utilizado en un proyecto de 16:9 se muestra de forma predeterminada con una zona transparente en cada lado.</translation>
    </message>
    <message>
        <source>Allows you to increase or decrease the luminosity of the image</source>
        <translation>Permite aumentar o reducir la luminosidad de la imagen</translation>
    </message>
    <message>
        <source>Allows you to increase or decrease the contrast of the image</source>
        <translation>Permite aumentar o disminuir el contraste de la imagen</translation>
    </message>
    <message>
        <source>Allows you to to increase or decrease the gamma value of the image</source>
        <translation>Permite aumentar o disminuir el valor gamma de la imagen</translation>
    </message>
    <message>
        <source>Allows you to modify the colorization of an image by changing the primary color red. Example : Reducing the red component makes the image more yellow - increasing it makes make the image more red</source>
        <translation>Permite modificar la coloración de una imagen cambiando el color rojo primario. Ejemplo: La reducción del componente rojo hace que la imagen sea más amarilla - el aumento hace que la imagen sea más roja</translation>
    </message>
    <message>
        <source>Allows you to modify the colorization of an image by changing the primary color green. Example : Reducing the green component makes the image more red - increasing it makes the image more green</source>
        <translation>Permite modificar la coloración de una imagen cambiando el color primario verde. Ejemplo: La reducción del componente verde hace que la imagen sea más roja - el aumento hace que la imagen sea más verde</translation>
    </message>
    <message>
        <source>Allows you to modify the colorization of an image by changing the primary color blue. Example : Reducing the green component makes the image more red - increasing it makes the image more blue</source>
        <translation>Permite modificar la coloración de una imagen cambiando el color azul primario. Ejemplo: La reducción del componente verde hace que la imagen sea más roja - el aumento hace que la imagen sea más azul</translation>
    </message>
    <message>
        <source> This button allows the value to be reset to zero for all correction settings.</source>
        <translation> Este botón permite que el valor se restablece a cero para todos los valores de corrección.</translation>
    </message>
    <message>
        <source>Increase the blur with a negative value, using radius.</source>
        <translation>Aumentar la falta de definición con un valor negativo, usando radio.</translation>
    </message>
    <message>
        <source>Increase the sharpen with a positive value, using radius.</source>
        <translation>Aumentar la nitidez con un valor positivo, utilizando radio.</translation>
    </message>
    <message>
        <source>The progress bar</source>
        <translation>La barra de progreso</translation>
    </message>
    <message>
        <source>The working range</source>
        <translation>La zona de trabajo</translation>
    </message>
    <message>
        <source> Positions the cursor at the starting point</source>
        <translation> Coloca el cursor en el punto de partida</translation>
    </message>
    <message>
        <source> Uses the current cursor position as starting point (carries out an edit)</source>
        <translation>Utiliza la posición actual como punto de partida (llena la zona de edición)</translation>
    </message>
    <message>
        <source> Positions the cursor at the end point</source>
        <translation> Posiciona el cursor sobre el final</translation>
    </message>
    <message>
        <source> Uses the current cursor position as end point (carries out an edit)</source>
        <translation>Utiliza la posición actual del cursor como punto final (llena la zona de edición)</translation>
    </message>
    <message>
        <source>The additional settings zone</source>
        <translation>La zona de ajuste adicional</translation>
    </message>
    <message>
        <source>&lt;B&gt;Volume&lt;/B&gt; allows you to define the &quot;Master Volume&quot; for the file</source>
        <translation>&lt;B&gt;Volumen&lt;/B&gt; permite definir el &quot;Volumen Maestro&quot; para el archivo</translation>
    </message>
    <message>
        <source>&lt;B&gt;Deinterlace video&lt;/B&gt; allows you to activate the deinterlace filter</source>
        <translation>&lt;B&gt;Desentrelazar video&lt;/B&gt; permite activar el filtro para desentrelazar</translation>
    </message>
    <message>
        <source>See also</source>
        <translation>Consultar también</translation>
    </message>
    <message>
        <source>Ken Burns effects</source>
        <translation>Efectos Ken Burns</translation>
    </message>
    <message>
        <source>Filter: Histogram equalization</source>
        <translation>Filtro: Ecualización de Histograma</translation>
    </message>
    <message>
        <source>Filter: Noise reduction</source>
        <translation>Filtro: Reducción de ruido</translation>
    </message>
    <message>
        <source>You can use the + and - buttons in each input field to change the settings, or directly enter values for the four parameters.</source>
        <translation>Se pueden utilizar las teclas + y - en cada campo de entrada para cambiar la configuración o introducir los valores directamente para los cuatro parámetros.</translation>
    </message>
    <message>
        <source>Example: if X=25% then the 1st quarter to the left of the image is eliminated.</source>
        <translation>Ejemplo: si X=25%, entonces la primera cuarta parte a la izquierda de la imagen es eliminada.</translation>
    </message>
    <message>
        <source>Example: if Y=25% the 1st quarter at the top of the image is eliminated.</source>
        <translation>Ejemplo: si Y=25%, entonces el 1er cuarto de la parte superior de la imagen es eliminada.</translation>
    </message>
    <message>
        <source>Example: if Width=33%, the re-framed image will represent 1/3 of the original.</source>
        <translation>Ejemplo: Si Ancho=33%, la imagen reenmarcada representará un tercio del original.</translation>
    </message>
    <message>
        <source>Example: if Height=33%, the re-framed image will represent 1/3 of the original.</source>
        <translation>Ejemplo: si la Altura=33%, la imagen reenmarcada representará un tercio del original.</translation>
    </message>
    <message>
        <source> This button allows you to change the file </source>
        <translation> Este botón permite cambiar el archivo</translation>
    </message>
    <message>
        <source>Warning! If you replace a file (image or video) with another one with a different image geometry, you will need to review the image framing in all shots. </source>
        <translation>¡Advertencia! Si se reemplaza un archivo (imagen o video) con otro con una geometría de imagen diferente, se tendrá que revisar el encuadre de la imagen en todas las tomas.</translation>
    </message>
    <message>
        <source>Blur/Sharpen </source>
        <translation>Difuminado/Nitidez</translation>
    </message>
    <message>
        <source> This button allows you to reset the value to zero. (For some transformation settings.)</source>
        <translation> Este botón permite restablecer el valor a cero. (En algunos parámetros de transformación.)</translation>
    </message>
    <message>
        <source> This button starts playback. Click again on this button to pause. </source>
        <translation>Este botón inicia la reproducción. Hacer otra vez clic en este botón para hacer una pausa.</translation>
    </message>
    <message>
        <source>This dialog box allows you to:</source>
        <translation>Este cuadro de diálogo permite:</translation>
    </message>
    <message>
        <source>Change image framing (select a part of the image).</source>
        <translation>Cambiar encuadre de la imagen (seleccionar una parte de la imagen).</translation>
    </message>
    <message>
        <source>Rotate image (change or restore the orientation portrait/landscape).</source>
        <translation>Girar imagen (cambiar o restablecer la orientación vertical/horizontal).</translation>
    </message>
    <message>
        <source>Correct image (change the color and/or exposure parameters) but also applying graphical filters.</source>
        <translation>Corrección de imagen (cambiar el color y/o los parámetros de exposición), y también la aplicación de filtros gráficos.</translation>
    </message>
    <message>
        <source>Define the beginning and end of a video sequence.</source>
        <translation>Definir el principio y el final de una secuencia de vídeo.</translation>
    </message>
    <message>
        <source>To the left: The interactive area</source>
        <translation>A la izquierda: la zona interactiva</translation>
    </message>
    <message>
        <source>To the right: The settings area</source>
        <translation>A la derecha: El área de configuración</translation>
    </message>
    <message>
        <source>At the bottom of the interactive zone, is an area for changing the image or video file:</source>
        <translation>En la parte inferior de la zona interactiva, es un área para cambiar el archivo de imagen o de vídeo:</translation>
    </message>
    <message>
        <source>At the bottom of the dialog box:</source>
        <translation>En la parte inferior del cuadro de diálogo:</translation>
    </message>
    <message>
        <source> This button enables or disables the magnetic rulers: When rulers are enabled, the mouse will automatically snap to the edges of the photo, facilitating the framing. </source>
        <translation>Este botón activa o desactiva los controles magnéticos: Cuando los controles están habilitados, el ratón se ajustará automáticamente a los bordes de la foto, lo que facilita el encuadre.</translation>
    </message>
    <message>
        <source>The interactive area</source>
        <translation>La zona interactiva</translation>
    </message>
    <message>
        <source>You can use the interactive zone to set the framing with the mouse or the keyboard:</source>
        <translation>Se puede utilizar la zona interactiva para ajustar el encuadre con el ratón o con el teclado:</translation>
    </message>
    <message>
        <source>The settings area - Framing and form</source>
        <translation>El área de configuración - Encuadre y forma</translation>
    </message>
    <message>
        <source>Shape</source>
        <translation>Forma</translation>
    </message>
    <message>
        <source>Select a shape for the current block.</source>
        <translation>Seleccionar una forma para el bloque actual.</translation>
    </message>
    <message>
        <source>The settings area - Annimation settings</source>
        <translation>La zona de ajustes - Ajustes de animaciones</translation>
    </message>
    <message>
        <source>Speed wave</source>
        <translation>Curva de velocidad</translation>
    </message>
    <message>
        <source>Defined speed curve for image animations.</source>
        <translation>Definir la curva de velocidad para aplicar a las animaciones de las imágenes.</translation>
    </message>
    <message>
        <source>The settings area - Image rotation</source>
        <translation>La zona de ajustes - Rotación de la imagen</translation>
    </message>
    <message>
        <source>The settings area - Luminosity, contrast and gamma and Color enhancement</source>
        <translation>El área de configuración - mejora de Luminosidad, Contraste, Gamma y Color</translation>
    </message>
    <message>
        <source>Allows you to activate the grayscale (black &amp; white) filter.</source>
        <translation>Permite activar el filtro de la escala de grises (blanco y negro).</translation>
    </message>
    <message>
        <source>Allows you to activate the equalize (Histogram equalization) filter.</source>
        <translation>Permite activar el filtro de equalización.</translation>
    </message>
    <message>
        <source>All the combinations are possible. For example: you can increase the red and reduce the green at the same time. The results depend on the initial strength of the primary color components of the source image.</source>
        <translation>Todas las combinaciones son posibles. Por ejemplo: se puede aumentar el rojo y reducir el verde al mismo tiempo. Los resultados dependen de los valores iniciales de los componentes de color primarios de la imagen de origen.</translation>
    </message>
    <message>
        <source>The settings area - Image enhancement</source>
        <translation>El área de configuración - Mejora de la imagen</translation>
    </message>
    <message>
        <source> Apply a filter to the photo or video images. The following filters are available: </source>
        <translation> Aplicar un filtro a las imágenes fotográficas o de video. Los siguientes filtros están disponibles:</translation>
    </message>
    <message>
        <source>Type: Select the blur/sharpen algorythm</source>
        <translation>Tipo: Seleccionar el tipo de algoritmo para el filtro Difuminado/Nitidez</translation>
    </message>
    <message>
        <source>Allows you to activate the despeckle (Noise reduction) filter.</source>
        <translation>Permite activar el filtro de despeckle (Reducción de ruido) .</translation>
    </message>
    <message>
        <source>Allows you to activate the antialias (minimizing the distortion artifacts) filter.</source>
        <translation>Permite activar el filtro de antialias (minimizar artefactos de distorsión) .</translation>
    </message>
    <message>
        <source>The settings area - Artistic effects</source>
        <translation>El área de configuración - Efectos Artísticos</translation>
    </message>
    <message>
        <source>Allows you to activate the negative filter..</source>
        <translation>Permite activar el filtro Negativo.</translation>
    </message>
    <message>
        <source>Allows you to activate the emboss filter.</source>
        <translation>Permite activar el filtro Relieve.</translation>
    </message>
    <message>
        <source>Allows you to activate the edge filter.</source>
        <translation>Permite activar el filtro Contorno.</translation>
    </message>
    <message>
        <source>Allows you to activate the charcoal filter.</source>
        <translation>Permite activar el filtro Carbón.</translation>
    </message>
    <message>
        <source>Allows you to activate the oilpaint filter.</source>
        <translation>Permite activar el filtro Pintura al óleo.</translation>
    </message>
    <message>
        <source>The settings area - Image distortion</source>
        <translation>La zona de ajustes - Distorsión de imagen</translation>
    </message>
    <message>
        <source> The image correct and reframe tag</source>
        <translation>Pestaña de corrección y reencuadre</translation>
    </message>
    <message>
        <source>This tab is available for both images and video. It is divided into two parts:</source>
        <translation>Esta pestaña está disponible tanto para imágenes como videos. Se divide en dos partes:</translation>
    </message>
    <message>
        <source>Allows you to activate the swirl transformation. Image swirling is a non-linear image deformation that creates a whirlpool effect.</source>
        <translation>Permite activar la transformación de remolino. La imagen de remolino es una deformación de la imagen no lineal que crea un efecto de remolino.</translation>
    </message>
    <message>
        <source>Allows you to activate the implode transformation</source>
        <translation>Permite activar la transformación de implosión</translation>
    </message>
    <message>
        <source>A value of 0 disables the filter.</source>
        <translation>Un valor de 0 desactiva el filtro.</translation>
    </message>
    <message>
        <source>A negative or positive value active the filter in one direction or the other.</source>
        <translation>Un valor negativo o positivo activa el filtro en una dirección u otra.</translation>
    </message>
    <message>
        <source> This button allows the value to be reset to zero.</source>
        <translation> Este botón permite que el valor se restablezca a cero.</translation>
    </message>
    <message>
        <source> The video tag</source>
        <translation> Etiqueta de video</translation>
    </message>
    <message>
        <source>This tag is available only for video.</source>
        <translation>Esta etiqueta sólo está dispoible para los videos.</translation>
    </message>
    <message>
        <source>Define a Google Maps map.</source>
        <translation>Definir un mapa de Google Maps.</translation>
    </message>
    <message>
        <source> The Google Maps Map tag</source>
        <translation> Etiqueta de Mapa de Google Maps</translation>
    </message>
    <message>
        <source>This tag is available only for Google Maps map.</source>
        <translation>Esta etiqueta sólo está disponible para mapa de Google Maps.</translation>
    </message>
    <message>
        <source>this dialog box is organized in tab that are available depending on the type of the object to edit.</source>
        <translation>este cuadro de diálogo está organizado en pestañas que están disponibles en función del tipo de objeto que desea editar.</translation>
    </message>
    <message>
        <source>&lt;a href=&quot;#IMAGETAG&quot;&gt;The image correct and reframe tag&lt;/a&gt; is available with all object types</source>
        <translation>&lt;a href=&quot;#IMAGETAG&quot;&gt;La etiqueta de imagen corregida y reencuadrada&lt;/a&gt; está disponible con todos los tipos de objetos</translation>
    </message>
    <message>
        <source>&lt;a href=&quot;#VIDEOTAG&quot;&gt;The video tag&lt;/a&gt; is available only with video object</source>
        <translation>&lt;a href=&quot;#VIDEOTAG&quot;&gt;Una etiqueta de video&lt;/a&gt; está disponible solo con objetos de video</translation>
    </message>
    <message>
        <source>For more information on available types of objects see: &lt;a href=&quot;0045.html&quot;&gt;Types of objects in ffDiaporama&lt;/a&gt;</source>
        <translation>Para obtener más información sobre los tipos de objetos disponibles ver: &lt;a href=&quot;0045.html&quot;&gt;Tipos de objetos en ffDiaporama&lt;/a&gt; {0045.?}</translation>
    </message>
    <message>
        <source>&lt;a href=&quot;#GMAPSMAPTAG&quot;&gt;The Google Maps map tag&lt;/a&gt; is available only with Google Maps map object</source>
        <translation>&lt;a href=&quot;#GMAPSMAPTAG&quot;&gt;La etiqueta de mapa Google Maps&lt;/a&gt; sólo está disponible con objetos de mapa de Google Maps</translation>
    </message>
    <message>
        <source>On the upper left part, you define the map properties</source>
        <translation>En la parte superior izquierda, se definen las propiedades del mapa</translation>
    </message>
    <message>
        <source>On the bottom left part, the map is displayed with markers</source>
        <translation>En la parte inferior izquierda, el mapa se muestra con marcadores</translation>
    </message>
    <message>
        <source>On the upper right part, the table of location is displayed</source>
        <translation>En la parte superior derecha, se muestra la tabla de ubicación</translation>
    </message>
    <message>
        <source>On the bottom right part, you define the properties of the selected location</source>
        <translation>En la parte inferior derecha, se definen las propiedades de la ubicación seleccionada</translation>
    </message>
    <message>
        <source>The map properties</source>
        <translation>Propiedades del mapa</translation>
    </message>
    <message>
        <source>Map type</source>
        <translation>Tipo de mapa</translation>
    </message>
    <message>
        <source>Define the type of the map. You can select between the four Google Maps possibilities:</source>
        <translation>Definir el tipo de mapa. Puedes seleccionar entre las cuatro posibilidades de Google Maps:</translation>
    </message>
    <message>
        <source>Roadmap</source>
        <translation>Mapa de carreteras</translation>
    </message>
    <message>
        <source>Satellite</source>
        <translation>Satelite</translation>
    </message>
    <message>
        <source>Terrain</source>
        <translation>Terreno</translation>
    </message>
    <message>
        <source>Hybrid</source>
        <translation>Híbrido</translation>
    </message>
    <message>
        <source>Map size</source>
        <translation>Tamaño de mapa</translation>
    </message>
    <message>
        <source>Define the size of the map. This size represents the distance in width and height of the map.</source>
        <translation>Definir el tamaño del mapa. Este tamaño representa la distancia en anchura y altura del mapa.</translation>
    </message>
    <message>
        <source>Smaller the zoom is and huger the area represented by the map is.</source>
        <translation>Disminuir el zoom y aumentar el area representada por el mapa.</translation>
    </message>
    <message>
        <source>Higher the zoom is and smaller the area represented by the map is.</source>
        <translation>Aumentar el zoom y disminuir el area representada por el mapa.</translation>
    </message>
    <message>
        <source>Image size</source>
        <translation>Tamaño de imagen</translation>
    </message>
    <message>
        <source>Define the size of the image generated for the map. ffDiaporama proposes to generate maps of several image sizes, so, to create a fluid zoom animation, you can use a large image.</source>
        <translation>Definir el tamaño de la imagen generada por el mapa. ffDiaporama propone generar mapas de varios tamaños, por lo que, para crear una animación de zoom fluido se puede utilizar una imagen de gran tamaño.</translation>
    </message>
    <message>
        <source>The table of locations</source>
        <translation>Tabla de ubicaciones</translation>
    </message>
    <message>
        <source>Select a location from the &lt;a href=&quot;0123.html&quot;&gt;Add or modify a location&lt;/a&gt; dialog or using a favorite.</source>
        <translation>Seleccionar una ubicación en el diálogo &lt;a href=&quot;0123.html&quot;&gt;Añadir o modificar una ubicación&lt;/a&gt; o usar un favorito.</translation>
    </message>
    <message>
        <source>Edit current location. Open the &lt;a href=&quot;0123.html&quot;&gt;Add or modify a location&lt;/a&gt; dialog.</source>
        <translation>Editar ubicación actual. Abrir el diálogo &lt;a href=&quot;0123.html&quot;&gt;Añadir o modificar una ubicación&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Remove current location.</source>
        <translation>Eliminar ubicación actual.</translation>
    </message>
    <message>
        <source>The marker properties</source>
        <translation>Propiedades del marcador</translation>
    </message>
    <message>
        <source>Properties for all shots</source>
        <translation>Propiedades para todas las tomas</translation>
    </message>
    <message>
        <source>This settings group defines properties for all shots, so, the modifications made to the following properties will apply to all shots. To understand the differences between the properties which apply to all shots and those which apply only to the current shot, consult: &lt;a href=&quot;0010.html&quot;&gt;How ffDiaporama works&lt;/a&gt;.</source>
        <translation>Este grupo define la configuración de propiedades para todas las tomas, por lo que, las modificaciones realizadas a las siguientes propiedades se aplicarán a todas las tomas. Para entender las diferencias entre las propiedades que se aplican a todas las tomas y las que se aplican sólo a la toma actual, consultar: &lt;a href=&quot;0010.html&quot;&gt;Cómo trabaja ffDiaporama&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>GPS Position form</source>
        <translation>Forma Posición GPS</translation>
    </message>
    <message>
        <source>Define a form for the GPS position</source>
        <translation>Definir una forma para la posición GPS</translation>
    </message>
    <message>
        <source>Marker form</source>
        <translation>Forma del marcador</translation>
    </message>
    <message>
        <source>Define a form for the marker</source>
        <translation>Definir una forma del marcador</translation>
    </message>
    <message>
        <source>Composition</source>
        <translation>Composición</translation>
    </message>
    <message>
        <source>Defined what information will be displayed in the marker</source>
        <translation>Definir qué información se mostrará en el marcador</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Tamaño</translation>
    </message>
    <message>
        <source>Define the size of the marker and the GPS position</source>
        <translation>Definir el tamaño del marcador y posición GPS</translation>
    </message>
    <message>
        <source>Distance</source>
        <translation>Distancia</translation>
    </message>
    <message>
        <source>Defined where to display the marker (the distance between the marker and the GPS position)</source>
        <translation>Definir dónde mostrar el marcador (la distancia entre el marcador y la posición GPS)</translation>
    </message>
    <message>
        <source>Properties for this shot</source>
        <translation>Propiedades de esta toma</translation>
    </message>
    <message>
        <source>This settings group defines properties for the current shot, so you can create animation of makers by defining different properties for each shots.</source>
        <translation>Este grupo de la configuración define las propiedades de la toma actual, por lo que puedes crear la animación de los marcadores definiendo las diferentes propiedades de cada toma.</translation>
    </message>
    <message>
        <source>Text color</source>
        <translation>Color del texto</translation>
    </message>
    <message>
        <source>Defines the color of the text</source>
        <translation>Definir el color del texto</translation>
    </message>
    <message>
        <source>Background color</source>
        <translation>Color del fondo</translation>
    </message>
    <message>
        <source>Defines the color of the background of the marker, of the GPS position and of the part between the two</source>
        <translation>Definir el color del fondo del marcador, de la posición GPS y de la parte entre los dos</translation>
    </message>
    <message>
        <source>Line color</source>
        <translation>Color de línea</translation>
    </message>
    <message>
        <source>Defines the color of the border</source>
        <translation>Definir el color del borde</translation>
    </message>
    <message>
        <source>Visibility</source>
        <translation>Visibilidad</translation>
    </message>
    <message>
        <source>Defined if the marker is visible, half-visible (masked) or hidden</source>
        <translation>Definir si el marcador es visible, medio-visible (enmascarado) u oculto</translation>
    </message>
    <message>
        <source>The rotation angle for the z axis. This position is expressed in degrees. Example: if Rotation=90°, the image is turned by a quarter to the right.</source>
        <translation>El ángulo de rotación para el eje z. Esta posición se expresa en grados. Ejemplo: Si la rotación=90°, la imagen gira un cuarto a la derecha.</translation>
    </message>
    <message>
        <source>Turn the image to the left (to the nearest multiple of 90°).</source>
        <translation>Girar la imagen a la izquierda (múltiplo más cercano de 90°).</translation>
    </message>
    <message>
        <source>Turn the image to the right (to the nearest multiple of 90°).</source>
        <translation>Girar la imagen a la derecha (múltiplo más cercano de 90°).</translation>
    </message>
    <message>
        <source>You can move with the mouse the </source>
        <translation>Puedes mover con el ratón el </translation>
    </message>
    <message>
        <source> handle, on the progress bar, to move the current position</source>
        <translation>controlador, en la barra de progreso, para mover la posición actual</translation>
    </message>
    <message>
        <source>You can move with the mouse the two </source>
        <translation>Se puede mover con el ratón los dos </translation>
    </message>
    <message>
        <source> and </source>
        <translation> y </translation>
    </message>
    <message>
        <source> handles, on the progress bar, to move the Start and End positions</source>
        <translation> controladores, en la barra de progreso, para mover las posiciones de inicio y fin</translation>
    </message>
    <message>
        <source>Displays as follows: </source>
        <translation>Muestra de la siguiente manera: </translation>
    </message>
    <message>
        <source>The ruler representing the duration of the video is dispayed under a black background. Remark than the length of the ruler is increased in proportion to the duration of the video.</source>
        <translation>La regla que representa la duración del de vídeo se muestra bajo un fondo negro. Observar la longitud de la regla que se incrementa en proporción a la duración del vídeo.</translation>
    </message>
    <message>
        <source>The blue part, on wave form and ruler, represents the part of the video which is selected (which will be used in the assembly).</source>
        <translation>La parte azul, en forma de onda y una regla, representa la parte del vídeo que se selecciona (que se utiliza en el conjunto).</translation>
    </message>
    <message>
        <source>The wave form of the sound of the video is displayed under a white background.</source>
        <translation>La forma de onda del sonido del vídeo se muestra bajo un fondo blanco.</translation>
    </message>
</context>
<context>
    <name>0111</name>
    <message>
        <source>File information</source>
        <translation>Información de archivo</translation>
    </message>
    <message>
        <source>Information shown for the image files</source>
        <translation>Muestra información de los archivos de imagenes</translation>
    </message>
    <message>
        <source>Information on file</source>
        <translation>Información en archivo</translation>
    </message>
    <message>
        <source>File name</source>
        <translation>Nombre de archivo</translation>
    </message>
    <message>
        <source>The name of the file</source>
        <translation>Nombre de archivo</translation>
    </message>
    <message>
        <source>File type</source>
        <translation>Tipo de archivo</translation>
    </message>
    <message>
        <source>Image</source>
        <translation>Imagen</translation>
    </message>
    <message>
        <source>File size</source>
        <translation>Tamaño de imagen</translation>
    </message>
    <message>
        <source>The size of the file on the disk (Mb)</source>
        <translation>El tamaño del archivo en el disco (Mb)</translation>
    </message>
    <message>
        <source>File created</source>
        <translation>Fecha de creación</translation>
    </message>
    <message>
        <source>The date and the hour of creation of the file on the disk (when you transferred it since the camera)</source>
        <translation>La fecha y la hora de creación del archivo en el disco (cuando se transfiere desde la cámara)</translation>
    </message>
    <message>
        <source>File modify</source>
        <translation>Fecha de modificación</translation>
    </message>
    <message>
        <source>The date and the hour of the last modification of the file (when the photo was taken or when you modified it with an image editor)</source>
        <translation>La fecha y la hora de la última modificación del archivo (cuando la foto fue tomada, o cuando se ha modificado con un editor de imágenes)</translation>
    </message>
    <message>
        <source>Additional information</source>
        <translation>Información adicional</translation>
    </message>
    <message>
        <source> Show the EXIF information supplied by the camera. </source>
        <translation>Muestra la información EXIF suministrada por la cámara.</translation>
    </message>
    <message>
        <source>This zone can contain several hundreds of lines according to what the camera supplies. </source>
        <translation>Esta zona puede contener varios cientos de líneas de acuerdo a la información que la cámara suministre.</translation>
    </message>
    <message>
        <source>Information shown for the audio and video files</source>
        <translation>Información que se muestra para los archivos de audio y vídeo</translation>
    </message>
    <message>
        <source>Information on file (audio and video files)</source>
        <translation>Información sobre los archivos (archivos de audio y video)</translation>
    </message>
    <message>
        <source>Audio track information (audio and video files)</source>
        <translation>Información de la pista de audio (audio y vídeo)</translation>
    </message>
    <message>
        <source> This zone contains a table listing every audio track present in the file. </source>
        <translation> Esta zona contiene una tabla con todas las pistas de audio presentes en el archivo.</translation>
    </message>
    <message>
        <source>For every track, the following information is shown: </source>
        <translation>Para cada pista, se muestra la siguiente información:</translation>
    </message>
    <message>
        <source>Track number</source>
        <translation>Número de pista</translation>
    </message>
    <message>
        <source>Language</source>
        <translation>Idioma</translation>
    </message>
    <message>
        <source>The language in which is the audio track (generally cameras and camcorders indicate &lt;B&gt;und&lt;/B&gt; for undefine)</source>
        <translation>El idioma en el que está la pista de audio (en general, las cámaras y videocámaras indican &lt;B&gt; und &lt;/B&gt; para indefinido)</translation>
    </message>
    <message>
        <source>Codec</source>
        <translation>Codec</translation>
    </message>
    <message>
        <source>The audio codec used for compressed the sound</source>
        <translation>El codec de audio usado para comprimir el sonido</translation>
    </message>
    <message>
        <source>Channels</source>
        <translation>Canales</translation>
    </message>
    <message>
        <source>The number of audio channels (1=mono, 2=stereo, etc.)</source>
        <translation>El número de canales de audio (1=mono, 2=estéreo, etc...)</translation>
    </message>
    <message>
        <source>Bitrate</source>
        <translation>Bitrate</translation>
    </message>
    <message>
        <source>The audio compression ratio (when available)</source>
        <translation>La relación de compresión de audio (si está disponible)</translation>
    </message>
    <message>
        <source>Frequency</source>
        <translation>Frecuencia</translation>
    </message>
    <message>
        <source>The frequency of sampling used by the audio track</source>
        <translation>La frecuencia de muestreo utilizada por la pista de audio</translation>
    </message>
    <message>
        <source>Title</source>
        <translation>Título</translation>
    </message>
    <message>
        <source>A title (when available)</source>
        <translation>Un título (cuando esté disponible)</translation>
    </message>
    <message>
        <source>Video track information (video files only)</source>
        <translation>Información sobre las pistas de videos (archivos de video sólamente)</translation>
    </message>
    <message>
        <source> This zone contains a board listing every video track present in the file. </source>
        <translation> Esta zona contiene una tabla que lista cada pista de video presente en el archivo.</translation>
    </message>
    <message>
        <source>Image size</source>
        <translation>Tamaño de imagen</translation>
    </message>
    <message>
        <source>The size of the images of the video track in number of points by number of line</source>
        <translation>El tamaño de las imágenes de la pista de vídeo en número de puntos por número de línea</translation>
    </message>
    <message>
        <source>Image format</source>
        <translation>Formato de imagen</translation>
    </message>
    <message>
        <source>The size of the images of the video track in million of pixels</source>
        <translation>El tamaño de las imágenes de la pista de vídeo en millones de píxeles</translation>
    </message>
    <message>
        <source>Image geometry</source>
        <translation>Geometría de imagen</translation>
    </message>
    <message>
        <source>The image geometry of the video track (4:3, 16:9, etc.)</source>
        <translation>La geometría de la imagen de la pista de vídeo (04:03, 16:09, etc)</translation>
    </message>
    <message>
        <source>The video codec used for compressed the images</source>
        <translation>El códec de vídeo utilizado para comprimir las imágenes</translation>
    </message>
    <message>
        <source>Frame rate</source>
        <translation>Imágenes/segundo</translation>
    </message>
    <message>
        <source>The number of images per second of the video</source>
        <translation>El número de imágenes por segundo del video</translation>
    </message>
    <message>
        <source>The video compression ratio (when available)</source>
        <translation>La relación de compresión de vídeo (cuando esté disponible)</translation>
    </message>
    <message>
        <source>Chapter information (video files only)</source>
        <translation>Información de capítulo (sólo archivos de vídeo)</translation>
    </message>
    <message>
        <source> This zone appears only for files containing chapters. it contains a table listing every chapter present in the file. </source>
        <translation>Esta zona sólo aparece para los archivos que contienen los capítulos. Contiene una tabla con todos los capítulos en el archivo.</translation>
    </message>
    <message>
        <source>For every chapter, the following information is shown: </source>
        <translation>Para cada capítulo, se muestra la siguiente información:</translation>
    </message>
    <message>
        <source>Chapter number</source>
        <translation>Número de capítulo</translation>
    </message>
    <message>
        <source>The title of the chapter</source>
        <translation>Título del capítulo</translation>
    </message>
    <message>
        <source>Start</source>
        <translation>Inicio</translation>
    </message>
    <message>
        <source>The temporal position of the beginning of the chapter</source>
        <translation>La posición temporal del comienzo del capítulo</translation>
    </message>
    <message>
        <source>End</source>
        <translation>Final</translation>
    </message>
    <message>
        <source>The temporal position of the end of the chapter</source>
        <translation>La posición temporal del final del capítulo</translation>
    </message>
    <message>
        <source>Duration</source>
        <translation>Duración</translation>
    </message>
    <message>
        <source>The duration of the chapter</source>
        <translation>La duración del capítulo</translation>
    </message>
    <message>
        <source>Additional information (video files only)</source>
        <translation>Información adicional (sólo archivos de vídeo)</translation>
    </message>
    <message>
        <source> This zone contains diverse information on the video. </source>
        <translation> Esta zona contiene diversa información sobre el video.</translation>
    </message>
    <message>
        <source>At least the information about the duration of the video will be shown, but a lot of other information can appear according to what is available in the file, such as: </source>
        <translation>Al menos, se mostrará la información acerca de la duración del vídeo, sino una gran cantidad de información que puede aparecer de acuerdo a lo que está disponible en el archivo, como por ejemplo:</translation>
    </message>
    <message>
        <source>creation_time</source>
        <translation>creation_time</translation>
    </message>
    <message>
        <source>Date and time of creation of the video</source>
        <translation>Fecha y hora de creación de la vídeo</translation>
    </message>
    <message>
        <source>title</source>
        <translation>Título</translation>
    </message>
    <message>
        <source>Title field of the TAG ID3v2 of the video</source>
        <translation>Campo del título de la etiqueta TAG ID3v2 del video</translation>
    </message>
    <message>
        <source>artist</source>
        <translation>artista</translation>
    </message>
    <message>
        <source>Artist field of the TAG ID3v2 of the video</source>
        <translation>Campo del artista de la etiqueta TAG ID3v2 del video</translation>
    </message>
    <message>
        <source>album</source>
        <translation>album</translation>
    </message>
    <message>
        <source>Album field of the TAG ID3v2 of the video</source>
        <translation>Campo del album de la etiqueta TAG ID3v2 del video</translation>
    </message>
    <message>
        <source>date</source>
        <translation>fecha</translation>
    </message>
    <message>
        <source>Date field of the TAG ID3v2 of the video</source>
        <translation>Campo de la fecha de la etiqueta TAG ID3v2 del video</translation>
    </message>
    <message>
        <source>comment</source>
        <translation>comentario</translation>
    </message>
    <message>
        <source>Comment field of the TAG ID3v2 of the video</source>
        <translation>Campo del comentario de la etiqueta TAG ID3v2 del video</translation>
    </message>
    <message>
        <source>composer</source>
        <translation>compositior</translation>
    </message>
    <message>
        <source>The software with which the video was created</source>
        <translation>El software con el que se creó el video</translation>
    </message>
    <message>
        <source>See also</source>
        <translation>Consultar también</translation>
    </message>
    <message>
        <source>Information on EXIF data</source>
        <translation>Información sobre los datos EXIF</translation>
    </message>
    <message>
        <source>TAG in ffmpeg</source>
        <translation>TAG en ffmpeg</translation>
    </message>
    <message>
        <source>Standard ID3v2</source>
        <translation>Norma ID3v2</translation>
    </message>
    <message>
        <source>Standard MPEG-7 on the descriptors of multimedia contents</source>
        <translation>Norma MPEG-7 en las descripciones de contenidos multimedia</translation>
    </message>
    <message>
        <source>This dialog allows to obtain detailed information on a multimedia file.</source>
        <translation>Este cuadro de diálogo permite obtener información detallada sobre un archivo multimedia.</translation>
    </message>
</context>
<context>
    <name>0112</name>
    <message>
        <source> Rename: Allows to rename the selected favorite.</source>
        <translation> Renombrar: Permite renombrar el favorito seleccionado.</translation>
    </message>
    <message>
        <source> Remove: Allows to remove the selected favorite.</source>
        <translation> Eliminar: Permite eliminar el favorito seleccionado.</translation>
    </message>
    <message>
        <source>Manage favorites</source>
        <translation>Gestionar favoritos</translation>
    </message>
    <message>
        <source>The Manage favorite dialog allows you to manage existing favorites</source>
        <translation>La ventana de gestión de favoritos permite gestionar favoritos existentes</translation>
    </message>
    <message>
        <source>The existing favorites are listed in the high part of the dialog. Select one of them and click on one of the following buttons:</source>
        <translation>Los favoritos existentes se enumeran en la parte alta del cuadro de diálogo. Seleccionar uno de ellos y hacer clic en uno de los siguientes botones:</translation>
    </message>
</context>
<context>
    <name>0113</name>
    <message>
        <source>Manage style</source>
        <translation>Gestionar estilos</translation>
    </message>
    <message>
        <source>Reset a standard style (that you modified) has its default values.</source>
        <translation>Restablecer un estilo estándar (que se ha modificado) a sus valores por defecto.</translation>
    </message>
    <message>
        <source>Standard style</source>
        <translation>Estilo estándar</translation>
    </message>
    <message>
        <source>Rename</source>
        <translation>Renombrar</translation>
    </message>
    <message>
        <source>Standard style you modified</source>
        <translation>Estilo estándar modificado</translation>
    </message>
    <message>
        <source>Rename, Reset to default</source>
        <translation>Renombrar, Restablecer a valores por defecto</translation>
    </message>
    <message>
        <source>Custom style</source>
        <translation>Estilo personalizado</translation>
    </message>
    <message>
        <source>Rename, Remove</source>
        <translation>Renombrar, Eliminar</translation>
    </message>
    <message>
        <source>Allows to rename the selected style.</source>
        <translation>Permite renombrar el estilo seleccionado.</translation>
    </message>
    <message>
        <source>Reset to default</source>
        <translation>Restablecer valores predeterminados</translation>
    </message>
    <message>
        <source>Allows to delete the customizations of a standard style and thus to return it to the default values for this style. It concerns as well the name of the style as the associated settings.</source>
        <translation>Permite eliminar las personalizaciones de un estilo estándar y, por lo tanto, volver a los valores por defecto para este estilo. Concierne tanto al nombre del estilo como a los ajustes asociados.</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Eliminar</translation>
    </message>
    <message>
        <source>Allows to remove the personalized style.</source>
        <translation>Permite eliminar el estilo personalizado.</translation>
    </message>
    <message>
        <source>Rename existing style,</source>
        <translation>Renombrar un estilo existente,</translation>
    </message>
    <message>
        <source>Remove custom style,</source>
        <translation>Eliminar un estilo personalixzado,</translation>
    </message>
    <message>
        <source>for a standard style</source>
        <translation>representa un estilo estándar</translation>
    </message>
    <message>
        <source>for a standard style you modified or for a custom style</source>
        <translation>representa un estilo estándar que se ha modificado o para uno ya personalizado</translation>
    </message>
    <message>
        <source>The existing styles are listed in the high part of the dialog. They appear with an icon which has various meanings:</source>
        <translation>Los estilos existentes se encuentran en la parte alta del cuadro de diálogo. Estos aparecen con un icono que tiene varios significados:</translation>
    </message>
    <message>
        <source>The Manage style dialog allows several things:</source>
        <translation>La ventana de gestión de estilos permite varias cosas:</translation>
    </message>
    <message>
        <source>According to the type of the selected style, you can execute various actions:</source>
        <translation>De acuerdo con el tipo del estilo seleccionado, se pueden ejecutar varias acciones:</translation>
    </message>
    <message>
        <source>The followed actions are available:</source>
        <translation>Están disponibles las siguientes acciones:</translation>
    </message>
</context>
<context>
    <name>0114</name>
    <message>
        <source>Music properties</source>
        <translation>Propiedades de la música</translation>
    </message>
    <message>
        <source>Settings for the music track (upper part of the dialog)</source>
        <translation>Ajustes de la pista de música (zona superior de la ventana)</translation>
    </message>
    <message>
        <source>Functional Principles</source>
        <translation>Principios de funcionamiento</translation>
    </message>
    <message>
        <source> The main functional principle for music tracks is that as long as you do not change the settings, the previous settings apply. So, if: </source>
        <translation>El más importante principio de funcionamiento de las pistas de música es que mientras no cambien los ajustes, se aplican los ajustes previos. Por lo tanto, si:</translation>
    </message>
    <message>
        <source>Slide 1 - Defines a play list</source>
        <translation>La diapositiva 1 - Define una lista de reproducción</translation>
    </message>
    <message>
        <source>Slide 2 - Contains no settings</source>
        <translation>La diapositiva 2 -No contine ningún ajuste</translation>
    </message>
    <message>
        <source>Slide 3 - Contains no settings</source>
        <translation>La diapositiva 3 - No contine ningún ajuste</translation>
    </message>
    <message>
        <source>Slide 4 - Defines a play list</source>
        <translation>La diapositiva 4 - Define una lista de reproducción</translation>
    </message>
    <message>
        <source>Slide 5 - Contains no settings</source>
        <translation>La diapositiva 5 - No contine ningún ajuste</translation>
    </message>
    <message>
        <source>Slide 2 and 3 continue to play the play list defined in slide 1</source>
        <translation>Las diapositivas 2 y 3 continúan reproduciendo la lista definida en la diapositiva 1</translation>
    </message>
    <message>
        <source>Slide 5 continues to play the play list define in slide 4</source>
        <translation>La diapositivas 5 continúan reproduciendo la lista definida en la diapositiva 4</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Normal</translation>
    </message>
    <message>
        <source>No specific settings</source>
        <translation>NIngún ajuste en particular</translation>
    </message>
    <message>
        <source>Change sound level</source>
        <translation>Cambiar el nivel de sonido</translation>
    </message>
    <message>
        <source>Set to pause</source>
        <translation>Puesto en pausa</translation>
    </message>
    <message>
        <source>Start a new playlist</source>
        <translation>Iniciar una nueva lista de reproducción</translation>
    </message>
    <message>
        <source>Allows you to create a new playlist. If a list defined in a previous slide, is still playing, it is stopped with a fade-out effect (progressive decline of the sound volume up to complete stop).</source>
        <translation>Permite crear una nueva lista de reproducción. Si una lista definida en una diapositiva anterior, aún se está reproduciendo, se detiene con un efecto de fade-out (disminución progresiva del volumen del sonido hasta que se pare).</translation>
    </message>
    <message>
        <source>The playlist (bottom part of the dialog)</source>
        <translation>La lista de reproducción (parte inferior de la ventana)</translation>
    </message>
    <message>
        <source> This playlist section consists of two parts: </source>
        <translation> Esta sección de lista de reproducción consiste en dos partes:</translation>
    </message>
    <message>
        <source>The toolbar containing controls for the playlist</source>
        <translation>La barra de herramientas contiene los controles para la reproducción</translation>
    </message>
    <message>
        <source>The list of the music files composing the playlist</source>
        <translation>La lista de los archivos de música que componen la lista de reproducción</translation>
    </message>
    <message>
        <source>The toolbar</source>
        <translation>La barra de herramientas</translation>
    </message>
    <message>
        <source>Adds a file to the playlist A file selection dialog appears, allowing you to select a file.</source>
        <translation>Añadir un archivo a la lista de reproducción. Aparecerá un diálogo de selección de archivos, que permite seleccionar un archivo.</translation>
    </message>
    <message>
        <source>Changes the order in which the music files will be played. Moves the currently selected file one step up.</source>
        <translation>Cambia el orden en el que se reproducirán los archivos de música. Mueve el archivo seleccionado un lugar hacia arriba.</translation>
    </message>
    <message>
        <source>Changes the order in which the music files will be played. Moves the currently selected file one step down.</source>
        <translation>Cambia el orden en el que se reproducirán los archivos de música. Mueve el archivo seleccionado un lugar hacia abajo.</translation>
    </message>
    <message>
        <source>The playlist</source>
        <translation>La lista de reproducción</translation>
    </message>
    <message>
        <source>The fade in/out effects and the increase/decrease of volume take place during the entering slide transitions. Consequently: </source>
        <translation>Los efectos fade in/out y el aumento/disminución de volumen se realizan durante las transiciones de las diapositivas que entran. En consecuencia:</translation>
    </message>
    <message>
        <source>They last for the same time as the entering transition.</source>
        <translation>Duran el mismo tiempo que la transición entrante.</translation>
    </message>
    <message>
        <source>If a slide has an entering transition set to &quot;No transition&quot;, the sound effect is not progressive but instantaneous.</source>
        <translation>Si una diapositiva tiene una transición entrante configurada como &quot;Sin transición&quot;, el efecto de sonido no es progresivo, sino instantáneo.</translation>
    </message>
    <message>
        <source>The Music properties dialog allows you to specify the music track.</source>
        <translation>El diálogo de &quot;propiedades de la música&quot; permite especificar la pista de música.</translation>
    </message>
    <message>
        <source>Then:</source>
        <translation>Entonces:</translation>
    </message>
    <message>
        <source>The following options are apply to the current music during the slide:</source>
        <translation>Las siguientes opciones se aplican a la música actual en la diapositiva:</translation>
    </message>
    <message>
        <source>Specifies that the sound volume is reduced during this slide. (This option is particularly useful, for example, to reduce the sound of the music during the play of a video.)</source>
        <translation>Especifica que el volumen de sonido se reduce durante esta diapositiva. (Esta opción es particularmente útil, por ejemplo, para reducir el sonido de la música durante la reproducción de un video.)</translation>
    </message>
    <message>
        <source>Pauses the current play list.</source>
        <translation>Pausa la lista actual.</translation>
    </message>
    <message>
        <source>The music files are listed in the order in which they will be played, from top to bottom.</source>
        <translation>Los archivos de música se muestran en el orden en el que se reproducirán, de arriba a abajo.</translation>
    </message>
    <message>
        <source>The Volume column defines the &quot; Master volume &quot; for the file. This volume is independent of any reductions in the volume that you define in the upper part of the dialog.</source>
        <translation>La columna de Volumen define el &quot;volumen Maestro&quot; para el archivo. Este volumen es independiente de cualquier reducción en el volumen que se defina en la parte superior del cuadro de diálogo.</translation>
    </message>
    <message>
        <source>The Credit column defines if the file should appear or not when using %STM% variable in a credit title. For more information on variables, see: &lt;a href=&quot;0013.html&quot;&gt;Dynamic variables&lt;/a&gt;</source>
        <translation>La columna de Créditos define si el archivo debería aparecer o no cuando se utiliza la %STM% variable en un título de crédito. Para obtener más información sobre las variables, consultar: &lt;a href=&quot;0013.html&quot;&gt;Variables dinámicas&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Remarks</source>
        <translation>Notas</translation>
    </message>
    <message>
        <source>Cut the currently selected file from the playlist. The &lt;a href=&quot;0124.html&quot;&gt;Cut a sound file&lt;/a&gt; dialog appears.</source>
        <translation>Cortar el archivo seleccionado de la lista de reproducción. aparece la ventana &lt;a href=&quot;0124.html&quot;&gt;Cortar un archivo de sonido&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Removes the currently selected file from the playlist.</source>
        <translation>Eliminar el archivo seleccionado de la lista de reproducción.</translation>
    </message>
    <message>
        <source>You can double click a music file from the playlist to edit it, the &lt;a href=&quot;0124.html&quot;&gt;Cut a sound file&lt;/a&gt; dialog appears.</source>
        <translation>Puede hacer doble clic en un archivo de música de la lista de reproducción para editarlo, aparece la ventana &lt;a href=&quot;0124.html&quot;&gt;Crtar un arcivo de sonido&lt;/a&gt;.</translation>
    </message>
</context>
<context>
    <name>0115</name>
    <message>
        <source>Render video</source>
        <translation>Generar vídeo</translation>
    </message>
    <message>
        <source>Description of the dialog box</source>
        <translation>Descripción de la ventana de diálogo</translation>
    </message>
    <message>
        <source>Destination file</source>
        <translation>Archivo de destino</translation>
    </message>
    <message>
        <source>Indicate here the name of the destination file. </source>
        <translation>Indicar aquí el nombre del archivo de destino.</translation>
    </message>
    <message>
        <source> Click on this button to select graphically a file and a directory.</source>
        <translation> Hacer clic en este botón para seleccionar gráficamente un archivo y un directorio.</translation>
    </message>
    <message>
        <source>Rendering</source>
        <translation>Generar video</translation>
    </message>
    <message>
        <source>The rendering can be made on the whole project or only on a part.</source>
        <translation>La generación puede hacerse sobre todo el proyecto o sólo a una parte.</translation>
    </message>
    <message>
        <source>This choice is made: </source>
        <translation>Esta elección se hace:</translation>
    </message>
    <message>
        <source>By checking the option &lt;B&gt;All slides&lt;/B&gt; to render the video of the whole project</source>
        <translation>Al marcar la opción &lt;B&gt;Todas las diapositivas&lt;/B&gt; para hacer el video de todo el proyecto</translation>
    </message>
    <message>
        <source>Or by checking the option &lt;B&gt;From&lt;/B&gt; and then entering the numbers of the start and end slides to generate a video of only a part of the project.</source>
        <translation>O marcando la opción &lt;B&gt;De&lt;/B&gt; y luego ingresar los números de las diapositivas de inicio y fin para generar un video de sólo una parte del proyecto.</translation>
    </message>
    <message>
        <source>Sound (include sound in the video)</source>
        <translation>Sonido (incluir sonido en el vídeo)</translation>
    </message>
    <message>
        <source>If this box is checked then the sound track will be included in the video</source>
        <translation>Si esta casilla está marcada, la banda sonora se incluirá en el video</translation>
    </message>
    <message>
        <source>Language</source>
        <translation>Idioma</translation>
    </message>
    <message>
        <source>Defines the value of the Language field. </source>
        <translation>Define el valor del campo Idioma.</translation>
    </message>
    <message>
        <source>In device mode</source>
        <translation>En modo dispositivo</translation>
    </message>
    <message>
        <source>Device type</source>
        <translation>Tipo de dispositivo</translation>
    </message>
    <message>
        <source>Allows you to select a device type.</source>
        <translation>Permite seleccionar un tipo de dispositivo.</translation>
    </message>
    <message>
        <source>Model</source>
        <translation>Modelo</translation>
    </message>
    <message>
        <source>Allows you to select a device model.</source>
        <translation>Permite seleccionar un tipo de modelo de dispositivo.</translation>
    </message>
    <message>
        <source>In lossless mode</source>
        <translation>En modo lossless</translation>
    </message>
    <message>
        <source>Image format</source>
        <translation>Formato de imagen</translation>
    </message>
    <message>
        <source>Select the image format to be used to render the video from the displayed list.</source>
        <translation>Seleccionar el formato de imagen que se utiliza para hacer el video desde la lista que se muestra.</translation>
    </message>
    <message>
        <source>In advanced mode</source>
        <translation>En modo avanzado</translation>
    </message>
    <message>
        <source>File format</source>
        <translation>Formato de archivo</translation>
    </message>
    <message>
        <source>Select the type of file to be used to render the video from the displayed list.</source>
        <translation>Seleccionar el tipo de archivo que se utilizará para hacer el vídeo desde la lista que se muestra.</translation>
    </message>
    <message>
        <source>Video Standard</source>
        <translation>Norma de video</translation>
    </message>
    <message>
        <source>Select the video standard to be used: PAL or NTSC.</source>
        <translation>Seleccionar la norma del video que se usará: PAL o NTSC.</translation>
    </message>
    <message>
        <source>Video codec</source>
        <translation>Codec de Video</translation>
    </message>
    <message>
        <source>Select the video codec to be used to render the video from the displayed list.</source>
        <translation>Seleccionar el códec de vídeo que se utilizará para hacer el video desde la lista que se muestra.</translation>
    </message>
    <message>
        <source>Select the video compression ratio from the displayed list</source>
        <translation>Seleccionar la relación de compresión de vídeo desde la lista que se muestra</translation>
    </message>
    <message>
        <source>Audio codec</source>
        <translation>Codec de Audio</translation>
    </message>
    <message>
        <source>Select the audio codec to be used to render the video from the displayed list.</source>
        <translation>Seleccionar el códec de audio que se utilizará para hacer el video desde la lista que se muestra.</translation>
    </message>
    <message>
        <source>Render the movie</source>
        <translation>Generar el video</translation>
    </message>
    <message>
        <source> Once you have selected the device or set the advanced parameters, one click on the OK button starts the process of rendering the video. </source>
        <translation>Una vez que se haya seleccionado el dispositivo o configurados los parámetros avanzados, un clic en el botón OK y se inicia el proceso de geración del video.</translation>
    </message>
    <message>
        <source>At any time during this process, one click on the &quot;Cancel&quot; button stops the process. </source>
        <translation>En cualquier momento durante este proceso, un clic en el botón &quot;Cancelar&quot;, detiene el proceso.</translation>
    </message>
    <message>
        <source> Depending on the device model or the advanced parameters which you selected, the generation can take quite a long time. </source>
        <translation>Dependiendo del modelo de dispositivo o los parámetros avanzados que se hayan seleccionado, la generación puede tardar bastante tiempo.</translation>
    </message>
    <message>
        <source>Generally, for a Full-HD 1080p video: </source>
        <translation>En general, para un video de 1080p Full-HD:</translation>
    </message>
    <message>
        <source>On a PC with 4 fast cores (Core i7 for example) : The process will take approximately 2 minutes for each minute of video to be rendered</source>
        <translation>En una PC con 4 núcleos rápidos (Core i7 por ejemplo): El proceso tomará aproximadamente 2 minutos por cada minuto de video para ser procesados</translation>
    </message>
    <message>
        <source>On a PC with 2 cores (Core 2 duo for example) : The process will take approximately 5 minutes for each minute of video to be rendered</source>
        <translation>En un PC con 2 núcleos rápidos ((Core 2 duopor ejemplo): El proceso tomará aproximadamente 5 minutos por cada minuto de video para ser procesados</translation>
    </message>
    <message>
        <source> This amounts to 2 to 5 hours for a one-hour video. </source>
        <translation>Esto equivale de 2 a 5 horas para un vídeo de una hora.</translation>
    </message>
    <message>
        <source>This duration will be much shorter for a video in VGA resolution. That is why we recommend you to carry out all tests and focusing trials at low resolution, and to render your videos in Full-HD only for the last step. </source>
        <translation>Esta duración será mucho más corta para un vídeo con una resolución VGA. Por eso recomendamos que se lleven a cabo todas las pruebas y ensayos que se intenten en baja resolución, y que se generen los videos en Full-HD sólo para el último paso.</translation>
    </message>
    <message>
        <source>ISO 639</source>
        <translation>ISO 639</translation>
    </message>
    <message>
        <source>This dialog allows you to render the project as a video file.</source>
        <translation>Este cuadro de diálogo permite renderizar el proyecto como un archivo de vídeo.</translation>
    </message>
    <message>
        <source>This value is used by players to indicate in which language is the audio track. This value is on 3 characters and follows this recommendation: </source>
        <translation>Este valor es utilizado por los reproductores para indicar en qué idioma está la pista de audio. Este valor es de 3 caracteres y se sigue esta recomendación:</translation>
    </message>
    <message>
        <source>Bitrate</source>
        <translation>Bitrate</translation>
    </message>
    <message>
        <source>Note: the project properties are saved into the video as TAG (METADATA) which are used by a lot of indexing programs or by </source>
        <translation>Nota: las propiedades del proyecto se guardan en el vídeo como TAG (metadatos) que son utilizados por una gran cantidad de programas de indexación o por los </translation>
    </message>
    <message>
        <source>Media Center Systems</source>
        <translation>Sistemas Multimedia Center</translation>
    </message>
    <message>
        <source>This dialog has different appearances depending on whether you clicked the Device type, Lossless, Advanced or Soundtrack button. </source>
        <translation>Este diálogo tiene diferentes aspectos dependiendo de si se ha hecho clic en el tipo de dispositivo, Lossless, Avanzado o el botón pista de sonido.</translation>
    </message>
    <message>
        <source>Join thumbnail to rendered file</source>
        <translation>Añadir una miniatura a archivo renderizado</translation>
    </message>
    <message>
        <source>If this box is checked then a thumbnail file will be created with video. </source>
        <translation>Si esta casilla está marcada, un archivo de miniatura se creará con el vídeo.</translation>
    </message>
    <message>
        <source>Join XBMC .nfo file to rendered file</source>
        <translation>Añadir un archivo .nfo de XBMC al archivo renderizado</translation>
    </message>
    <message>
        <source>If this box is checked then a &lt;a href=&quot;0044.html&quot;&gt;XBMC .nfo&lt;/a&gt; file will be created with video. </source>
        <translation>Si esta casilla está marcada, un archivo &lt;a href=&quot;0044.html&quot;&gt;.nfo de XBMC&lt;/a&gt; será creado con el video.</translation>
    </message>
    <message>
        <source>Select the audio compression ratio from the displayed list</source>
        <translation>Seleccionar la relación de compresión de audio de la lista que se muestra</translation>
    </message>
    <message>
        <source>Frequency</source>
        <translation>Frecuencia</translation>
    </message>
    <message>
        <source>In export soundtrack mode</source>
        <translation>En modo exportar la pista de sonido</translation>
    </message>
    <message>
        <source>Select the type of file to be used to render the soundtrack from the displayed list.</source>
        <translation>Seleccionar el tipo de archivo que se utilizará para generar  la pista de sonido de la lista que se muestra.</translation>
    </message>
    <message>
        <source>At the dialog bottom</source>
        <translation>Debajo de la caja de diálogo</translation>
    </message>
    <message>
        <source>For more information on joined files, see &lt;a href=&quot;003A.html&quot;&gt;File attachments&lt;/a&gt;</source>
        <translation>Para obtener más información sobre los ficheros adjuntos, consultar &lt;a href=&quot;003A.html&quot;&gt;Archivos adjuntos&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Select the frequency to use for audio during the rendering.</source>
        <translation>Seleccionar la frecuencia a usar para el audio durante la generación.</translation>
    </message>
    <message>
        <source> The properties button allows you to open the &lt;a href=&quot;0108.html&quot;&gt;Project properties dialog&lt;/a&gt;. It allows you to adjust the properties before generating the video. </source>
        <translation> El botón de propiedades permite abrir el diálogo &lt;a href=&quot;0108.html&quot;&gt;Propiedades del proyecto/a&gt;. Esto permite ajustar las propiedades antes de generar el video.</translation>
    </message>
    <message>
        <source>Variable bitrate</source>
        <translation>Bitrate variable</translation>
    </message>
    <message>
        <source>If this box is checked, the bitrate is variable. (Note: This option is available only for h264 codec.)</source>
        <translation>Si esta casilla está marcada, el bitrate es variable. (Nota: esta opción sólo está disponible para el codec h264.)</translation>
    </message>
    <message>
        <source>Remarks:</source>
        <translation>Notas:</translation>
    </message>
    <message>
        <source> &lt;U&gt;Rendering duration:&lt;/U&gt;</source>
        <translation> &lt;U&gt;Duración del render:&lt;/U&gt;</translation>
    </message>
    <message>
        <source> &lt;U&gt;Variable bitrate:&lt;/U&gt;</source>
        <translation> &lt;U&gt;Bitrate variable:&lt;/U&gt;</translation>
    </message>
    <message>
        <source> If variable bitrate is activated, the video compression bitrate could vary from -50% to +125% </source>
        <translation>Si se activa el bitrate variable, el bitrate de compresión de video puede variar de -50% a +125%</translation>
    </message>
    <message>
        <source>If the project contains mostly pictures, this option can significantly reduce the size of the video file (up to 80%)</source>
        <translation>Si el proyecto contiene en su mayoría imágenes, esta opción puede reducir significativamente el tamaño del archivo de vídeo (más de un 80%)</translation>
    </message>
    <message>
        <source>By cons, if the project contains mostly videos this option will increase the size of the video file</source>
        <translation>Por contra, si el proyecto contiene en su mayoría vídeos esta opción aumentará el tamaño del archivo de vídeo</translation>
    </message>
    <message>
        <source> By default, variable bitrate is activated when duration of videos are less than half of the total duration of the projet. </source>
        <translation>Por defecto, el bitrate variable se activa cuando la duración de los vídeos son menos de la mitad de la duración total de la projet.</translation>
    </message>
</context>
<context>
    <name>0116</name>
    <message>
        <source>Ruler properties</source>
        <translation>Propiedades de Guías</translation>
    </message>
    <message>
        <source>Edge of the screen</source>
        <translation>Bordes de la pantalla</translation>
    </message>
    <message>
        <source>Corresponds to the edge of the screen.</source>
        <translation>Corresponde a los bordes de la pantalla.</translation>
    </message>
    <message>
        <source>TV margins</source>
        <translation>Márgenes de TV</translation>
    </message>
    <message>
        <source>In ffDiaporama, the TV margins are of type &quot;Title safe area&quot; and are defined on 90% in width and 90% in height, for all the project geometries.</source>
        <translation>En ffDiaporama, los márgenes de TV son del tipo &quot;zona segura de título&quot; y se definen sobre el 90% de la anchura y 90% de la altura, para todas las geometrías del proyecto.</translation>
    </message>
    <message>
        <source>Centre of the screen</source>
        <translation>Centro de la pantalla</translation>
    </message>
    <message>
        <source>Corresponds to the center of the screen.</source>
        <translation>Corresponde al centro de la pantalla.</translation>
    </message>
    <message>
        <source>Unselected blocks</source>
        <translation>Bloques no seleccionados</translation>
    </message>
    <message>
        <source>For all the objects which are not a part of the selection, create rulers for the top, bottom, left and right edges of blocks as well as for the centers of blocks.</source>
        <translation>Para todos los objetos que no forman parte de la selección, crea guías para los bordes superiores, inferiores, izquierda y derecha, así como para los centros de los bloques.</translation>
    </message>
    <message>
        <source>Remarks:</source>
        <translation>Notas:</translation>
    </message>
    <message>
        <source>Rulers can be activated or deactivated one by one.</source>
        <translation>Las guías pueden ser activadas o desactivadas una a una, individualmente.</translation>
    </message>
    <message>
        <source>When a ruler is activated, the mouse is attracted towards this ruler. This is valid as well for the movements of blocks as for the resizing (movements of the handles).</source>
        <translation>Cuando se activa una guía, el ratón es atraído hacia esta guía. Esto es válido también para los movimientos de bloques como para el cambio de tamaño (movimientos de los tiradores).</translation>
    </message>
    <message>
        <source>TV margins rullers are not available for thumbnails editing.</source>
        <translation>Las guías del tipo &quot;Margenes de TV&quot; no están disponibles para la edición de imágenes en miniatura.</translation>
    </message>
    <message>
        <source>See also</source>
        <translation>Consultar también</translation>
    </message>
    <message>
        <source>Description of TV margins and overscan</source>
        <translation>Descripción de los márgenes de TV y el &quot;overscan&quot;</translation>
    </message>
    <message>
        <source>This dialog allows you to enable or disable rulers.</source>
        <translation>Este diálogo permite activar o desactivar las guías.</translation>
    </message>
</context>
<context>
    <name>0117</name>
    <message>
        <source>Edit thumbnail model</source>
        <translation>Editar miniatura de modelo</translation>
    </message>
    <message>
        <source>This dialog allows you to edit custom thumbnails and custom thumbnails models.</source>
        <translation>Este diálogo permite editar miniaturas personalizadas y modelos de miniaturas personalizadas.</translation>
    </message>
    <message>
        <source>It&apos;s a simplified version of the &lt;a href=&quot;0119.html&quot;&gt;Slides properties dialog&lt;/a&gt; and as it, it includes numerous zones:</source>
        <translation>Es una versión simplificada del diálogo &lt;a href=&quot;0119.html&quot;&gt;Propiedades de la diapositiva&lt;/a&gt; y como esta, incluye numerosas zonas:</translation>
    </message>
    <message>
        <source>On the top: The &lt;a href=&quot;#Toolbar&quot;&gt;Toolbar&lt;/a&gt; allows to launch the main thumbnail editing commands.</source>
        <translation>Arriba: &lt;a href=&quot;#Toolbar&quot;&gt;Barra de herramientas&lt;/a&gt; permite poner en marcha los principales comandos de edición de miniaturas.</translation>
    </message>
    <message>
        <source>On the right: The &lt;a href=&quot;#BlockTable&quot;&gt;Blocks table&lt;/a&gt; and the &lt;a href=&quot;#BlockSettings&quot;&gt;Block settings&lt;/a&gt; zones.</source>
        <translation>A la derechat: la zona&lt;a href=&quot;#BlockTable&quot;&gt;Tabla de bloques&lt;/a&gt; y la zona &lt;a href=&quot;#BlockSettings&quot;&gt;Ajuste de bloques&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Toolbar</source>
        <translation>La barra de herramientas</translation>
    </message>
    <message>
        <source> The toolbar allows to launch the main thumbnail editing commands. </source>
        <translation> La barra de herramientas permite lanzar los principales comandos de edición de miniaturas.</translation>
    </message>
    <message>
        <source>Add a new title block - Open a sub menu with the following options: </source>
        <translation>Añadir un nuevo bloque de título - Abre un submenú con las siguientes opciones:</translation>
    </message>
    <message>
        <source>Add a simple title block</source>
        <translation>Añadir un texto simple</translation>
    </message>
    <message>
        <source>Add a title clip-art block</source>
        <translation>Añadir un texto en un clipart</translation>
    </message>
    <message>
        <source>Once you have selected one of the options, the &lt;a href=&quot;0120.html&quot;&gt;Edit Text dialog&lt;/a&gt; opens.</source>
        <translation>Una vez que haya seleccionado una de las opciones, se abre el diálogo &lt;a href=&quot;0120.html&quot;&gt;Editar texto&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Add one or several new blocks of images or video. A &lt;a href=&quot;0109.html&quot;&gt;file selection dialog&lt;/a&gt; appears allowing you to select files. </source>
        <translation>Añadir uno o varios nuevos bloques de imágenes o vídeo. Un diálogo &lt;a href=&quot;0109.html&quot;&gt;Seleccionar archivo&lt;/a&gt; aparece permitiéndo seleccionar los archivos.</translation>
    </message>
    <message>
        <source>Note: in case of multiple selection, files are added in the alphabetical order of the filenames or in the digital order of shots (according to the option selected in the &lt;a href=&quot;0101.html&quot;&gt;Application options dialog&lt;/a&gt;).</source>
        <translation>Nota: en caso de selección múltiple, se agregan los archivos en el orden alfabético de los nombres de archivo o en el orden numérico de las tomas (según la opción seleccionada en el diálogo &lt;a href=&quot;0101.html&quot;&gt;Opciones de la aplicación&lt;/a&gt;).</translation>
    </message>
    <message>
        <source>Edit blocks - Open a sub menu with the following options: </source>
        <translation>Editar los bloques -Abre un submenú con las siguientes opciones:</translation>
    </message>
    <message>
        <source>Copy the current block to the ffDiaporama clipboard and remove it from the thumbnail.</source>
        <translation>Copia el bloque actual al portapapeles de ffDiaporama y lo suprime de la miniatura.</translation>
    </message>
    <message>
        <source>Copy the current block to the ffDiaporama clipboard.</source>
        <translation>Copia el bloque actual al portapapeles de ffDiaporama.</translation>
    </message>
    <message>
        <source>Paste block from the ffDiaporama clipboard and insert it to the end of the block table</source>
        <translation>Pegar bloque desde el portapapeles de ffDiaporama e insertarlo al final de la tabla del bloque</translation>
    </message>
    <message>
        <source>Remove the current block</source>
        <translation>Eliminar el bloque actual</translation>
    </message>
    <message>
        <source>Open the &lt;a href=&quot;0120.html&quot;&gt;Edit text block dialog&lt;/a&gt;.</source>
        <translation>Abrir el diálogo &lt;a href=&quot;0120.html&quot;&gt;Editar texto del bloque&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Open the &lt;a href=&quot;0110.html&quot;&gt;Image framing and correction dialog&lt;/a&gt;. This button is active only for objects containing images or videos.</source>
        <translation>Abrir el diálogo &lt;a href=&quot;0110.html&quot;&gt;Reencuadrar y/o corregir una imagen o video&lt;/a&gt;. Este botón está activo sólo para los objetos que contienen imágenes o videos.</translation>
    </message>
    <message>
        <source>Arrange blocks - Open a sub menu with the following options: </source>
        <translation>Organizar bloques - Abrir un submenú con las siguientes opciones:</translation>
    </message>
    <message>
        <source>Align to top</source>
        <translation>Alinear arriba</translation>
    </message>
    <message>
        <source>Align to midle</source>
        <translation>Alinear al medio</translation>
    </message>
    <message>
        <source>Align to bottom</source>
        <translation>Alinear abajo</translation>
    </message>
    <message>
        <source>Align to left</source>
        <translation>Alinear a la izquierda</translation>
    </message>
    <message>
        <source>Align to center</source>
        <translation>Alinear al centro</translation>
    </message>
    <message>
        <source>Align to right</source>
        <translation>Alinear a la derecha</translation>
    </message>
    <message>
        <source>Distribute horizontally</source>
        <translation>Distribuir horizontalmente</translation>
    </message>
    <message>
        <source>Distribute vertically</source>
        <translation>Distribuir verticalmente</translation>
    </message>
    <message>
        <source>Change the order of blocks by moving the active block upward (towards the background)</source>
        <translation>Cambiar el orden de los bloques moviendo el bloque activo hacia arriba (hacia el fondo)</translation>
    </message>
    <message>
        <source>Change the order of blocks by moving the active block downward (towards the foreground)</source>
        <translation>Cambiar el orden de los bloques moviendo el bloque activo hacia abajo (hacia el frente)</translation>
    </message>
    <message>
        <source>Display information on active block. (Remark: This function is available only for &quot;image&quot; or &quot;video&quot; blocks.)</source>
        <translation>Mostrar la información en el bloque activo. (Nota: Esta función sólo está disponible para bloques de &quot;imagen&quot; o &quot;video&quot;)</translation>
    </message>
    <message>
        <source>Allows you to open the &lt;a href=&quot;0116.html&quot;&gt;Ruler properties dialog&lt;/a&gt;</source>
        <translation>Permite abrir el diálogo &lt;a href=&quot;0116.html&quot;&gt;Propiedades de las guías&lt;/a&gt;</translation>
    </message>
    <message>
        <source> It is also possible to open contextual menus by: </source>
        <translation> También es posible abrir menús contextuales de esta forma:</translation>
    </message>
    <message>
        <source>Right clicking on zones.</source>
        <translation>Clic derecho en zonas.</translation>
    </message>
    <message>
        <source>Right click on blocks table or on interactive zone when no block was selected.</source>
        <translation>Clic derecho sobre la tabla de bloques o sobre la zona interactiva cuando no se selecciona ningún bloque.</translation>
    </message>
    <message>
        <source>Right click on one of the blocks of a multiple selection, on blocks table or on interactive zone.</source>
        <translation>Clic derecho en uno de los bloques de una selección múltiple, sobre la tabla de los bloques o sobre la zona interactiva.</translation>
    </message>
    <message>
        <source>Each of these contextual menus propose commands which depend on what you have clicked.</source>
        <translation>Cada uno de estos menús contextuales proponen comandos que dependen donde se haya hecho clic.</translation>
    </message>
    <message>
        <source>Interactive zone</source>
        <translation>Zona interactiva</translation>
    </message>
    <message>
        <source> The interactive zone allows you to move and interactively re-size blocks. </source>
        <translation> La zona interactiva permite desplazar y redimensionar los bloques de forma interactiva.</translation>
    </message>
    <message>
        <source>Selected blocks are shown with a frame. (It allows to differentiate them from other graphic elements of the thumbnail).</source>
        <translation>Bloques seleccionados se muestran con un marco. ( Permite diferenciarlos de otros elementos gráficos de la imagen).</translation>
    </message>
    <message>
        <source>Control handles (small square) are shown on sides and on corners of the selection frame.</source>
        <translation>Mandos de control (cuadrado pequeño) que se muestran en los lados y en las esquinas del marco de selección.</translation>
    </message>
    <message>
        <source>Rulers are displayed to facilitate the work with the mouse. See &lt;a href=&quot;0116.html&quot;&gt;Rulers settings&lt;/a&gt;</source>
        <translation>Las guías se muestran para facilitar el trabajo con el ratón. Consultar &lt;a href=&quot;0116.html&quot;&gt;Ajustar guías&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Using the mouse:</source>
        <translation>Usando el ratón:</translation>
    </message>
    <message>
        <source>To select a block: click the block</source>
        <translation>Para seleccionar un bloque: hacer clic en el bloque</translation>
    </message>
    <message>
        <source>To select multiple blocks: Select a first block by clicking on it and then, by clicking on the other blocks to be selected with pressing either the SHIFT or the CTRL key.</source>
        <translation>Para seleccionar varios bloques: Seleccionar un primer bloque haciendo clic en él y, a continuación, hacer clic en los otros bloques que se seleccionarán presionando la tecla MAYÚS o la tecla CTRL.</translation>
    </message>
    <message>
        <source>To select a block under another block : Click the block to be selected by pushing both SHIFT and CTRL keys.</source>
        <translation>Para seleccionar un bloque bajo otro bloque: Hacer clic en el bloque a seleccionar pulsando las dos teclas MAYÚS y CTRL.</translation>
    </message>
    <message>
        <source>To unselect a block in a multiple selection: Click the block with pressing either the SHIFT or the CTRL key.</source>
        <translation>Para anular la selección de un bloque en una selección múltiple: Hacer clic en el bloque presionando la tecla MAYÚS o la tecla CTRL.</translation>
    </message>
    <message>
        <source>To modify the size of the blocks of the selection: Click one of the handles of the selection and, while keeping the button of the mouse pressed, move the mouse.</source>
        <translation>Para modificar el tamaño de los bloques de la selección: Hacer clic en uno de los controladores de la selección y, manteniendo el botón del ratón pulsado, mover el ratón.</translation>
    </message>
    <message>
        <source>To move the blocks of the selection: Click one of the blocks of the selection and, while keeping the button of the mouse pressed, move the mouse.</source>
        <translation>Para mover los bloques de la selección: Hacer clic en uno de los bloques de la selección y, manteniendo el botón del ratón pulsado, mover el ratón.</translation>
    </message>
    <message>
        <source>Using the keyboard:</source>
        <translation>Usando el teclado:</translation>
    </message>
    <message>
        <source>To move the blocks of the selection, use the arrow keys.</source>
        <translation>Para mover los bloques de la selección, utilizar las teclas de flecha.</translation>
    </message>
    <message>
        <source>To change the size of the blocks of the selection, use SHIFT+arrows to move the upper left corner handle or CTRL+arrows to move the lower right corner handle.</source>
        <translation>Para cambiar el tamaño de los bloques de la selección, utilizar SHIFT + flechas para mover el control de la esquina superior izquierda o CTRL + flechas para mover el control de la esquina inferior derecha.</translation>
    </message>
    <message>
        <source>Remarks:</source>
        <translation>Notas:</translation>
    </message>
    <message>
        <source>A double click on a block opens the block editor associated with the block type (for a text block this will be the text editor, for an image block the reframing dialog, etc.)</source>
        <translation>Un doble clic en un bloque, se abre el editor de bloques asociado con el tipo de bloque (para un bloque de texto que será el editor de texto, para un bloque de imagen el cuadro de diálogo reencuadre, etc)</translation>
    </message>
    <message>
        <source>A right click on a block when the selection includes only a single block opens a contextual menu proposing the editing commands for a block.</source>
        <translation>Un clic derecho en un bloque cuando la selección incluye un solo bloque, se abre un menú contextual que propone los comandos de edición de un bloque.</translation>
    </message>
    <message>
        <source>A right click on a block when the selection includes multiple blocks opens a contextual menu proposing the editing commands for multiple blocks.</source>
        <translation>Un clic derecho en un bloque cuando la selección incluye varios bloques, se abre un menú contextual que propone los comandos de edición de varios bloques.</translation>
    </message>
    <message>
        <source>Blocks table</source>
        <translation>La tabla de bloques</translation>
    </message>
    <message>
        <source>The blocks table lists, from top to bottom, the present blocks in the thumbnail.</source>
        <translation>Las listas de la tabla de bloques, de arriba a abajo, los actuales bloques en la miniatura.</translation>
    </message>
    <message>
        <source>The order of the blocks is important! The first block (at the top of the list) is covered by the second block which is even covered by the following block and so on.</source>
        <translation>¡El orden de los bloques es importante! El primer bloque (en la parte superior de la lista) está cubierto por el segundo bloque que está cubierto incluso por el siguiente bloque y así sucesivamente.</translation>
    </message>
    <message>
        <source>Blocks are shown on 3 columns:</source>
        <translation>Los bloques se muestran en 3 columnas:</translation>
    </message>
    <message>
        <source>The first column contains or: </source>
        <translation>La primera columna contiene o:</translation>
    </message>
    <message>
        <source> If the block is a title.</source>
        <translation> si el bloque es un título.</translation>
    </message>
    <message>
        <source>A thumbnail if the block is an image or a video.</source>
        <translation>Una miniatura si el bloque es una imagen o un video.</translation>
    </message>
    <message>
        <source> If the image or the video have a transformation filter.</source>
        <translation> Si la imagen o el video tienen un filtro de transformación.</translation>
    </message>
    <message>
        <source>The second column contains icons giving the state of the blocks</source>
        <translation>La segunda columna contiene iconos que muestran el estado de los bloques</translation>
    </message>
    <message>
        <source>The third column indicates: </source>
        <translation>La tercera columna indica:</translation>
    </message>
    <message>
        <source>If the block is a title: the text of the block</source>
        <translation>Si el bloque es un título: el texto del bloque</translation>
    </message>
    <message>
        <source>If the block is an image: </source>
        <translation>Si el bloque es una imagen:</translation>
    </message>
    <message>
        <source>The filename.</source>
        <translation>El nombre del archivo.</translation>
    </message>
    <message>
        <source>The width x the height of the image in pixel (the format of the image - the geometry of the image).</source>
        <translation>La anchura x la altura de la imagen en píxeles (el formato de la imagen - la geometría de la imagen).</translation>
    </message>
    <message>
        <source>A summary of EXIF information on the image.</source>
        <translation>Un resumen de la información EXIF de la imagen.</translation>
    </message>
    <message>
        <source>If the block is a video: </source>
        <translation>Si el bloque es un video:</translation>
    </message>
    <message>
        <source>The duration of the video.</source>
        <translation>La duración del vídeo.</translation>
    </message>
    <message>
        <source>Double clicking on a block opens the block editor associated with the block type (for a text block this will be the text editor, for an image block the reframing dialog, etc.)</source>
        <translation>Haciendo doble clic en un bloque, se abre el editor de bloque asociado con el tipo de bloque (para un bloque de texto será el editor de texto, para un bloque de imagen el cuadro de diálogo reencuadre, etc)</translation>
    </message>
    <message>
        <source>Right clicking on a block when the selection includes only a single block opens a contextual menu proposing the editing commands for a block.</source>
        <translation>Hacer clic en un bloque cuando la selección incluye un solo bloque, se abre un menú contextual que propone los comandos de edición de un bloque.</translation>
    </message>
    <message>
        <source>Right clicking on a block when the selection includes multiple blocks opens a contextual menu proposing the editing commands for multiple blocks.</source>
        <translation>Hacer clic en un bloque cuando la selección incluye varios bloques se abre un menú contextual que propone los comandos de edición de varios bloques.</translation>
    </message>
    <message>
        <source>Blocks with locked properties are shown on a grey bottom.</source>
        <translation>Bloques con propiedades de bloqueo se muestran en un fondo gris.</translation>
    </message>
    <message>
        <source>Selected blocks are shown on a red bottom if the focus is on the blocks table or on a blue bottom if the focus is on another element.</source>
        <translation>Bloques seleccionados se muestran sobre un fondo de color rojo si el foco está en la la tabla de bloques o en un fondo azul si el foco está en otro elemento.</translation>
    </message>
    <message>
        <source>To change the blocks order, use Drag &amp; Drop or &lt;B&gt;Up&lt;/B&gt; and &lt;B&gt;Down&lt;/B&gt; functions of the contextual menu.</source>
        <translation>Para cambiar el orden de los bloques, el uso de arrastrar y soltar (Drag &amp; Drop) será &lt;B&gt; Arriba &lt;/B&gt; y &lt;B&gt; Abajo &lt;/B&gt; del menú contextual.</translation>
    </message>
    <message>
        <source>It is possible to add files directly in the blocks table by using Drag and Drop with the file explorer.</source>
        <translation>Es posible añadir archivos directamente en la tabla de bloques mediante el uso de Drag &amp; Drop (arrastrar y soltar) con el explorador de archivos.</translation>
    </message>
    <message>
        <source>All blocks, whether title, image or video, possess a text element.</source>
        <translation>Todos los bloques, sean título, imagen o video, poseen un elemento de texto.</translation>
    </message>
    <message>
        <source>During the insertion of a new block (Add title, Add file or Paste), the block is inserted: </source>
        <translation>Durante la inserción de un nuevo bloque (Añadir título, Agregar archivo o Pegar), se inserta el bloque:</translation>
    </message>
    <message>
        <source>Always in the last position in the list of blocks (in the foreground)</source>
        <translation>Siempre en la última posición de la lista de bloques (en primer plano)</translation>
    </message>
    <message>
        <source>Block settings zone</source>
        <translation>La zona de ajuste de los bloques</translation>
    </message>
    <message>
        <source>Coordinates</source>
        <translation>Coordenadas</translation>
    </message>
    <message>
        <source>&lt;B&gt;For image or video blocks: &lt;/B&gt;Allows you to select a reframing style for the image. It has the same effect as selecting a style in the dialog: &lt;a href=&quot;0110.html&quot;&gt;Correct, reframe or cut image or video&lt;/a&gt;.</source>
        <translation>&lt;B&gt;Para los bloques de imagen o de vídeo: &lt;/B&gt; Permite seleccionar un estilo de reencuadre para la imagen. Tiene el mismo efecto que seleccionar un estilo en el diálogo: &lt;a href=&quot;0110.html&quot;&gt;Reencuadrar y/o corregir una imagen o video&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>&lt;B&gt;For text blocks: &lt;/B&gt;Allows you to select the geometrical constraints to be applied to the block. Three type of constraint are available:</source>
        <translation>&lt;B&gt;Pra bloques de texto: &lt;/B&gt;Permite seleccionar las limitaciones geométricas que deben aplicarse al bloque. Tres tipo de restricción están disponibles:</translation>
    </message>
    <message>
        <source>No constraint is applied to the selection rectangle.</source>
        <translation>Sin restricción : Ninguna restricción se aplica al rectángulo de selección. Se define libremente.</translation>
    </message>
    <message>
        <source>Lock selection rectangle to the actual geometry. It has no meaning until you have defined a shape in &quot;no constraint&quot; mode.</source>
        <translation>Bloquear rectángulo de selección a la geometría real. No tiene ningún sentido hasta que se haya definido una forma con el modo &quot;sin limitación&quot;.</translation>
    </message>
    <message>
        <source>Lock selection rectangle to the same geometry as the project, such that, if you place the image in full screen, the reframed part will correspond to the whole screen.</source>
        <translation>Bloquear rectángulo de selección para la misma geometría que el proyecto, de tal manera que, si se coloca la imagen en pantalla completa, la parte reencuadrada corresponderá a toda la pantalla.</translation>
    </message>
    <message>
        <source>Allows you to select a pre-defined block size</source>
        <translation>Permite seleccionar un tamaño de bloque predefinido</translation>
    </message>
    <message>
        <source>Represents the horizontal offset of the block from the left. This position is defined as a percentage (%) of the total width of the image or in pixels (for a 1080p screen) according to the unit defined in the configuration dialog.</source>
        <translation>Representa el desplazamiento horizontal del bloque desde la izquierda . Esta posición se define con un porcentaje (%) de la anchura total de la imagen o en píxeles (para una pantalla de 1080p) de acuerdo con la unidad definida en el cuadro de diálogo de configuración.</translation>
    </message>
    <message>
        <source>Represents the vertical offset of the block from the top. This position is defined as a percentage (%) of the total height of the image or in pixels (for a 1080p screen) according to the unit defined in the configuration dialog.</source>
        <translation>Representa el desplazamiento vertical del bloque desde la parte superior . Esta posición se define con un porcentaje (%) de la altura total de la imagen o en píxeles (para una pantalla de 1080p) de acuerdo con la unidad definida en el cuadro de diálogo de configuración.</translation>
    </message>
    <message>
        <source>Represents the width of the block. This value is defined as a percentage (%) of the total width of the image or in pixels (for a 1080p screen) according to the unit defined in the configuration dialog box.</source>
        <translation>Representa la anchura del bloque. Este valor se define con un porcentaje (%) de la anchura total de la imagen o en píxeles (para una pantalla de 1080p) de acuerdo con la unidad definida en el cuadro de diálogo de configuración.</translation>
    </message>
    <message>
        <source>Represents the height of the block. This value is defined as a percentage (%) of the total height of the image or in pixels (for a 1080p screen) according to the unit defined in the configuration dialog.</source>
        <translation>Representa la altura del bloque. Este valor se define con un porcentaje (%) de la altura total de la imagen o en píxeles (para una pantalla de 1080p) de acuerdo con la unidad definida en el cuadro de diálogo de configuración.</translation>
    </message>
    <message>
        <source>Rotation around the Z axis in degrees.</source>
        <translation>Rotación alrededor del eje Z en grados.</translation>
    </message>
    <message>
        <source>Rotation around the Y axis in degrees.</source>
        <translation>Rotación alrededor del eje Y en grados.</translation>
    </message>
    <message>
        <source>Rotation around the X axis in degrees.</source>
        <translation>Rotación alrededor del eje X en grados.</translation>
    </message>
    <message>
        <source>Block shape</source>
        <translation>Forma del bloque</translation>
    </message>
    <message>
        <source>This settings group deals with style management. For more information on style management, see : &lt;a href=&quot;0016.html&quot;&gt;Using style management&lt;/a&gt;</source>
        <translation>Este grupo de ajuste se ocupa de la gestión de estilo. Para obtener más información sobre la gestión de estilo., consultar : &lt;a href=&quot;0016.html&quot;&gt;Gestión de estilos&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Shape</source>
        <translation>Forma</translation>
    </message>
    <message>
        <source>Allows you to select a shape for the block. The selected shape will be used as:</source>
        <translation>Permite seleccionar una forma para el bloque. La forma seleccionada se utiliza como:</translation>
    </message>
    <message>
        <source>a fusion mask for the images and the videos.</source>
        <translation>una máscara de fusión de las imágenes y los vídeos.</translation>
    </message>
    <message>
        <source>A cutting zone for texts</source>
        <translation> Una zona de corte para los textos</translation>
    </message>
    <message>
        <source>Opacity</source>
        <translation>Opacidad</translation>
    </message>
    <message>
        <source>Defines the opacity of the block. This value also applies to the text of the block.</source>
        <translation>Define la opacidad del bloque. Este valor también se aplica al texto del bloque.</translation>
    </message>
    <message>
        <source>Border</source>
        <translation>Borde</translation>
    </message>
    <message>
        <source>Thickness of the border</source>
        <translation>Grosor del borde</translation>
    </message>
    <message>
        <source>Defines the thickness of the border (This value is defined as 1/1080 of the height of the screen. A value of 10 corresponds to 10 points on a 1920x1080 FullHD screen, but only to 6 points on a 1280x720 screen).</source>
        <translation>Define el grosor del borde (Este valor se define con 1/1080 de la altura de la pantalla. Un valor de 10 corresponde a 10 puntos en una pantalla FullHD 1920x1080, pero sólo 6 puntos en una pantalla de 1280x720).</translation>
    </message>
    <message>
        <source>Border color</source>
        <translation>Color del borde</translation>
    </message>
    <message>
        <source>Defines the color of the line to be used to draw the border</source>
        <translation>Define el color de la línea para dibujar el borde</translation>
    </message>
    <message>
        <source>Line type of border</source>
        <translation>Tipo de línea para el borde</translation>
    </message>
    <message>
        <source>Defines the type of line (solid, dotted line, etc.)</source>
        <translation>Define el tipo de línea que se usará (sólido, punteado, etc...)</translation>
    </message>
    <message>
        <source>Shadow</source>
        <translation>Sombra</translation>
    </message>
    <message>
        <source>Shadow position</source>
        <translation>Posición de la sombra</translation>
    </message>
    <message>
        <source>Defines in which corner the shadow will be positioned (Note: the position of the shadow is independent of rotation of the block: the right lower corner is always the right lower corner, whatever rotation is applied).</source>
        <translation>Define en qué esquina la sombra se situará (Nota: la posición de la sombra es independiente de la rotación del bloque: la esquina inferior derecha es siempre la esquina inferior derecha, sea cual sea la rotación aplicada).</translation>
    </message>
    <message>
        <source>Distance of the shadow</source>
        <translation>Distancia de la sombra</translation>
    </message>
    <message>
        <source>Defines the distance between the block and its shadow</source>
        <translation>Define la distancia entre el bloque y su sombra</translation>
    </message>
    <message>
        <source>Color</source>
        <translation>Color</translation>
    </message>
    <message>
        <source>Sets the color used to draw the shadow</source>
        <translation>Establecer el color que se usará para la sombra</translation>
    </message>
    <message>
        <source>See also</source>
        <translation>Consultar también</translation>
    </message>
    <message>
        <source>Description of EXIF - Exchangeable image file format</source>
        <translation>Descripción de EXIF - Formato de archivo de imagen intercambiable</translation>
    </message>
    <message>
        <source>On the left: The &lt;a href=&quot;#InteractiveZone&quot;&gt;Interactive&lt;/a&gt; zone allows you to graphically modify the blocks.</source>
        <translation>A la izquierda: &lt;a href=&quot;#InteractiveZone&quot;&gt;Zona interactiva&lt;/a&gt; que permite modificar gráficamente los bloques.</translation>
    </message>
</context>
<context>
    <name>0118</name>
    <message>
        <source>Set first shot duration for a set of slides</source>
        <translation>Situar duración de primera toma para una serie de diapositivas</translation>
    </message>
    <message>
        <source>First shot duration</source>
        <translation>Duración de la primera toma</translation>
    </message>
    <message>
        <source>Define the duration of the first shot.</source>
        <translation>Definir la duración de la primera toma.</translation>
    </message>
    <message>
        <source>When you click the OK button, the new duration is applied to all the slides that were selected. </source>
        <translation>Al hacer clic en el botón Aceptar, la nueva duración se aplica a todas las diapositivas que se han seleccionado.</translation>
    </message>
    <message>
        <source>This new duration affects only the first shot of each slide</source>
        <translation>Este nueva duración sólo afecta a la primera toma de cada diapositiva</translation>
    </message>
    <message>
        <source>This new duration is applied only to standard slides. The predefined title slides are not impacted.</source>
        <translation>Esta nueva duración se aplicará sólo a las diapositivas estándar. Las diapositivas de título predefinidos no se ven afectados.</translation>
    </message>
    <message>
        <source>This dialog allows you to define the duration of the fist shot of a set of slides:</source>
        <translation> Este cuadro de diálogo permite definir la duración de la primera toma de un conjunto de diapositivas:</translation>
    </message>
</context>
<context>
    <name>0119</name>
    <message>
        <source>Slide properties</source>
        <translation>Propiedades de diapositiva</translation>
    </message>
    <message>
        <source>Remarks: </source>
        <translation>Notas:</translation>
    </message>
    <message>
        <source>Toolbar</source>
        <translation>Barra de herramientas</translation>
    </message>
    <message>
        <source>Slide settings zone</source>
        <translation>La zona de ajustes de la diapositiva</translation>
    </message>
    <message>
        <source>Shots table</source>
        <translation>Tabla de las tomas</translation>
    </message>
    <message>
        <source>Blocks table</source>
        <translation>La tabla de los bloques</translation>
    </message>
    <message>
        <source>Shot settings zone</source>
        <translation>La zona de ajustes de las tomas</translation>
    </message>
    <message>
        <source>Interactive zone</source>
        <translation>La zona interactiva</translation>
    </message>
    <message>
        <source>Block settings zone</source>
        <translation>La zona de ajustes de los bloques</translation>
    </message>
    <message>
        <source> The toolbar allows to launch the main slide editing commands. </source>
        <translation> La barra de herramientas permite lanzar los principales comandos de edición de diapositivas.</translation>
    </message>
    <message>
        <source>Append a shot to the end of the shot table</source>
        <translation>Anexar una toma al final de la tabla de tomas</translation>
    </message>
    <message>
        <source>Remove current selected shot</source>
        <translation>Eliminar tomas seleccionadas</translation>
    </message>
    <message>
        <source>Change the order of the shots by moving the current selected shot a step to the left</source>
        <translation>Cambiar el orden de las fotos moviendo la actual toma seleccionada un paso a la izquierda</translation>
    </message>
    <message>
        <source>Change the order of the shots by moving the current selected shot a step to the right</source>
        <translation>Cambiar el orden de las fotos moviendo la actual toma seleccionada un paso a la derecha</translation>
    </message>
    <message>
        <source>Copy the current block to the ffDiaporama clipboard and remove it from the slide. The copy is made with the block parameters defined for the current selected shot.</source>
        <translation>Copiar el bloque actual al portapapeles de ffDiaporama y sacarlo de la diapositiva. La copia se hace con los parámetros de los bloques definidos para la toma seleccionada.</translation>
    </message>
    <message>
        <source>Copy the current block to the ffDiaporama clipboard. The copy is made with the block parameters defined for the current selected shot.</source>
        <translation>Copiar el bloque actual al portapapeles de ffDiaporama y sacarlo de la diapositiva. La copia se hace con los parámetros de los bloques definidos para la toma seleccionada .</translation>
    </message>
    <message>
        <source>Remove the current block</source>
        <translation>Eliminar el bloque actual</translation>
    </message>
    <message>
        <source>Change the order of blocks by moving the active block upward (towards the background)</source>
        <translation>Cambiar el orden de los bloques moviendo el bloque activo hacia arriba (hacia el fondo)</translation>
    </message>
    <message>
        <source>Change the order of blocks by moving the active block downward (towards the foreground)</source>
        <translation>Cambiar el orden de los bloques moviendo el bloque activo hacia abajo (hacia el frente)</translation>
    </message>
    <message>
        <source>Make the active block visible or hidden. Note: Hidden video blocks are automatically paused</source>
        <translation>Hacer que el bloque activo est´e visible u oculto. Nota: Los bloques de vídeo ocultos se detendrán automáticamente</translation>
    </message>
    <message>
        <source>Play the sound, during this shot, of the selected video block. (This button is active only for videos.)</source>
        <translation>Reproducir el sonido, durante esta toma, del bloque de vídeo seleccionado. (Este botón sólo está activo para los vídeos.)</translation>
    </message>
    <message>
        <source>Open the &lt;a href=&quot;0110.html&quot;&gt;Image framing and correction dialog&lt;/a&gt;. This button is active only for objects containing images or videos.</source>
        <translation>Abrir el diálogo &lt;a href=&quot;0110.html&quot;&gt;Reencuadrar y/o corregir una imagen o video&lt;/a&gt;. Este botón está activo sólo para los objetos que contienen imágenes o videos.</translation>
    </message>
    <message>
        <source>Display information on active block. (Remark: This function is available only for &quot;image&quot; or &quot;video&quot; blocks.)</source>
        <translation>Mostrar la información en el bloque activo. (Nota:. Esta función sólo está disponible para bloques de &quot;imagen&quot; o &quot;video&quot;)</translation>
    </message>
    <message>
        <source>Align to top</source>
        <translation>Alinear arriba</translation>
    </message>
    <message>
        <source>Align to midle</source>
        <translation>Alinear al medio</translation>
    </message>
    <message>
        <source>Align to bottom</source>
        <translation>Alinear abajo</translation>
    </message>
    <message>
        <source>Align to left</source>
        <translation>Alinear a la izquierda</translation>
    </message>
    <message>
        <source>Align to center</source>
        <translation>Alinear al centro</translation>
    </message>
    <message>
        <source>Align to right</source>
        <translation>Alinear a la derecha</translation>
    </message>
    <message>
        <source>Distribute horizontally</source>
        <translation>Distribuir horizontalmente</translation>
    </message>
    <message>
        <source>Distribute vertically</source>
        <translation>Distribuir verticalmente</translation>
    </message>
    <message>
        <source>Name of the slide</source>
        <translation>Nombre de la diapositiva</translation>
    </message>
    <message>
        <source>Indicate here a name for the slide. It is this name which will appear on the thumbnail in the main window timeline.</source>
        <translation>Indicar aquí el nombre de la diapositiva. Este es el nombre que aparecerá en la imagen en la ventana de la línea de tiempo principal.</translation>
    </message>
    <message>
        <source>Total slide duration</source>
        <translation>Duración total de la diapositiva</translation>
    </message>
    <message>
        <source>The total slide duration is displayed here. This duration takes into account possible adjustments for minimal duration of the shot as described above.</source>
        <translation>La duración total de las diapositivas se muestran aquí. Esta duración tiene en cuenta los posibles ajustes para la duración mínima de la toma como se describe anteriormente.</translation>
    </message>
    <message>
        <source> The shots table shows the shots as thumbnails, in the order in which they will be played (from left to right). </source>
        <translation>La tabla muestra las tomas como miniaturas, en el orden en que se reproducirán (de izquierda a derecha).</translation>
    </message>
    <message>
        <source>For each shot, the thumbnail shows: </source>
        <translation>Por cada toma, la imagen muestra:</translation>
    </message>
    <message>
        <source>The shot duration (At the top of the thumbnail)</source>
        <translation>La duración de la toma (En la parte superior de la imagen)</translation>
    </message>
    <message>
        <source>The temporal position of the shot at the end of its duration (At the bottom right of the thumbnail)</source>
        <translation>La posición temporal de la toma al final de su duración (En la parte inferior derecha de la imagen)</translation>
    </message>
    <message>
        <source>An image representing the shot at the end of its duration</source>
        <translation>Una imagen que representa la toma en el extremo de su duración</translation>
    </message>
    <message>
        <source>Remark:</source>
        <translation>Nota:</translation>
    </message>
    <message>
        <source>The order of the shots can be changed by using Drag &amp; Drop.</source>
        <translation>El orden de las fotos se puede cambiar mediante Drag &amp; Drop.</translation>
    </message>
    <message>
        <source>Shot duration</source>
        <translation>Duración de la toma</translation>
    </message>
    <message>
        <source> Indicate here the duration of the currently selected shot. For the last shot of the slide, there is a minimum duration.The following rules are used to calculate the minimum duration of the shot: </source>
        <translation>Indicar aquí la duración de la toma seleccionada. Para el última toma de la diapositiva, hay una mínima duración. Las siguientes reglas se utilizan para calcular la duración mínima de la toma:</translation>
    </message>
    <message>
        <source>The total slide duration cannot be lower than the sum of the durations of the entering transition of the slide plus that of the transition to the following slide</source>
        <translation>La duración total de la diapositiva no puede ser inferiór a la suma de las transiciones entrantes de la diapositiva + la duración de la transición entrante de la diapositiva siguiente</translation>
    </message>
    <message>
        <source>The total slide duration must permit complete play of the longest video sequence (time of breaks is taken into account)</source>
        <translation>La duración total de las diapositivas debe permitir la reproducción completa de la secuencia de vídeo más larga (el tiempo de las interrupciones se tiene en cuenta)</translation>
    </message>
    <message>
        <source>The total slide duration cannot be lower than 1:30 second</source>
        <translation>La duración de la total de de las diapositivas no puede ser inferior a 1:30 segundos</translation>
    </message>
    <message>
        <source> The interactive zone allows you to move and interactively re-size blocks within the selected shot. </source>
        <translation>La zona interactiva permite desplazar y redimensionar gráficamente los bloques, para la toma actual seleccionada.</translation>
    </message>
    <message>
        <source>Selected blocks are shown with a frame. (It allows to differentiate them from other graphic elements of the slide).</source>
        <translation>Los bloques seleccionados se muestran con un marco. ( Permite diferenciarlos de otros elementos gráficos de la diapositiva).</translation>
    </message>
    <message>
        <source>Control handles (small square) are shown on sides and on corners of the selection frame.</source>
        <translation>Mandos de control (cuadrado pequeño) que se muestran en los lados y en las esquinas del marco de selección.</translation>
    </message>
    <message>
        <source>Rulers are displayed to facilitate the work with the mouse. See &lt;a href=&quot;0116.html&quot;&gt;Rulers settings&lt;/a&gt;</source>
        <translation>Las guías se muestran para facilitar el trabajo con el ratón. Ver &lt;a href=&quot;0116.html&quot;&gt;Ajustes de las guías&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Using the mouse:</source>
        <translation>Usando el ratón:</translation>
    </message>
    <message>
        <source>To select a block: click the block</source>
        <translation>Para seleccionar un bloque: hacer clic en el bloque</translation>
    </message>
    <message>
        <source>To select multiple blocks: Select a first block by clicking on it and then, by clicking on the other blocks to be selected with pressing either the SHIFT or the CTRL key.</source>
        <translation>Para seleccionar varios bloques: Seleccionar un primer bloque haciendo clic en él y, a continuación, hacer clic en los otros bloques que se seleccionarán presionando la tecla MAYÚS o la tecla CTRL.</translation>
    </message>
    <message>
        <source>To select a block under another block : Click the block to be selected by pushing both SHIFT and CTRL keys.</source>
        <translation>Para seleccionar un bloque bajo otro bloque: Hacer clic en el bloque a seleccionar pulsando las dos teclas MAYÚS y CTRL.</translation>
    </message>
    <message>
        <source>To unselect a block in a multiple selection: Click the block with pressing either the SHIFT or the CTRL key.</source>
        <translation>Para anular la selección de un bloque en una selección múltiple: Hacer clic en el bloque presionando la tecla MAYÚS o la tecla CTRL.</translation>
    </message>
    <message>
        <source>To modify the size of the blocks of the selection: Click one of the handles of the selection and, while keeping the button of the mouse pressed, move the mouse.</source>
        <translation>Para modificar el tamaño de los bloques de la selección: Hacer clic en uno de los controladores de la selección y, manteniendo el botón del ratón pulsado, mover el ratón.</translation>
    </message>
    <message>
        <source>To move the blocks of the selection: Click one of the blocks of the selection and, while keeping the button of the mouse pressed, move the mouse.</source>
        <translation>Para mover los bloques de la selección: Hacer clic en uno de los bloques de la selección y, manteniendo el botón del ratón pulsado, mover el ratón.</translation>
    </message>
    <message>
        <source>Using the keyboard:</source>
        <translation>Usando el teclado:</translation>
    </message>
    <message>
        <source>To move the blocks of the selection, use the arrow keys.</source>
        <translation>Para mover los bloques de la selección, utilizar las teclas de flecha.</translation>
    </message>
    <message>
        <source>To change the size of the blocks of the selection, use SHIFT+arrows to move the upper left corner handle or CTRL+arrows to move the lower right corner handle.</source>
        <translation>Para cambiar el tamaño de los bloques de la selección, utilizar SHIFT + flechas para mover el control de la esquina superior izquierda o CTRL + flechas para mover el control de la esquina inferior derecha..</translation>
    </message>
    <message>
        <source>Remarks:</source>
        <translation>Notas:</translation>
    </message>
    <message>
        <source>A double click on a block opens the block editor associated with the block type (for a text block this will be the text editor, for an image block the reframing dialog, etc.)</source>
        <translation>Un doble clic en un bloque, se abre el editor de bloques asociado con el tipo de bloque (para un bloque de texto será el editor de texto, para un bloque de imagen será el cuadro de diálogo reencuadre, etc)</translation>
    </message>
    <message>
        <source>A right click on a block when the selection includes only a single block opens a contextual menu proposing the editing commands for a block.</source>
        <translation>Un clic derecho en un bloque cuando la selección incluye un solo bloque, se abre un menú contextual que propone comandos de edición de un bloque.</translation>
    </message>
    <message>
        <source>A right click on a block when the selection includes multiple blocks opens a contextual menu proposing the editing commands for multiple blocks.</source>
        <translation>Un clic derecho en un bloque cuando la selección incluye varios bloques se abre un menú contextual que propone comandos de edición de varios bloques.</translation>
    </message>
    <message>
        <source>The order of the blocks is important! The first block (at the top of the list) is covered by the second block which is even covered by the following block and so on.</source>
        <translation>¡El orden de los bloques es importante! El primer bloque (de la parte superior de la lista) está cubierto por el segundo bloque que está cubierto incluso por el siguiente bloque y así sucesivamente..</translation>
    </message>
    <message>
        <source>The order of the blocks is defined shot by shot.</source>
        <translation>El orden de los bloques se define toma a toma.</translation>
    </message>
    <message>
        <source>The first column contains or: </source>
        <translation>La primera columna contiene :</translation>
    </message>
    <message>
        <source> If the block is a title.</source>
        <translation> si el bloque es un título.</translation>
    </message>
    <message>
        <source>A thumbnail if the block is an image or a video.</source>
        <translation>Una miniatura si el bloque es una imagen o un video.</translation>
    </message>
    <message>
        <source> If the image or the video have a transformation filter.</source>
        <translation> si la imagen o el video tienen un filtro de transformación.</translation>
    </message>
    <message>
        <source>The second column contains icons giving the state of the blocks for the current shot: </source>
        <translation>La segunda columna contiene los iconos que dan el estado del bloque de la toma actual:</translation>
    </message>
    <message>
        <source> If the video has the sound during this shot. This information appears only for the video blocks.</source>
        <translation>si el vídeo tiene el sonido en esta toma. Esta información aparece sólo para los bloques de vídeo.</translation>
    </message>
    <message>
        <source>The third column indicates: </source>
        <translation>La tercera columna indica:</translation>
    </message>
    <message>
        <source>If the block is a title: the text of the block</source>
        <translation>Si el bloque es un título: el texto del bloque</translation>
    </message>
    <message>
        <source>If the block is an image: </source>
        <translation>Si el bloque es una imagen:</translation>
    </message>
    <message>
        <source>The filename.</source>
        <translation>El nombre del archivo.</translation>
    </message>
    <message>
        <source>The width x the height of the image in pixel (the format of the image - the geometry of the image).</source>
        <translation>La anchura x la altura de la imagen en píxeles (el formato de la imagen - la geometría de la imagen).</translation>
    </message>
    <message>
        <source>A summary of EXIF information on the image.</source>
        <translation>Un resumen de la información EXIF de la imagen.</translation>
    </message>
    <message>
        <source>If the block is a video: </source>
        <translation>Si el bloque es un video:</translation>
    </message>
    <message>
        <source>The duration of the video.</source>
        <translation>La duración del vídeo.</translation>
    </message>
    <message>
        <source>Double clicking on a block opens the block editor associated with the block type (for a text block this will be the text editor, for an image block the reframing dialog, etc.)</source>
        <translation>Hacer doble clic sobre un bloque, se abre el editor de bloque asociado con el tipo de bloque (para un bloque de texto este será el editor de texto, para un bloque de imagen el cuadro de diálogo reencuadre, etc)</translation>
    </message>
    <message>
        <source>Right clicking on a block when the selection includes only a single block opens a contextual menu proposing the editing commands for a block.</source>
        <translation>Hacer clic derecho en un bloque cuando la selección incluye un solo bloque, se abre un menú contextual que propone los comandos de edición de un bloque.</translation>
    </message>
    <message>
        <source>Right clicking on a block when the selection includes multiple blocks opens a contextual menu proposing the editing commands for multiple blocks.</source>
        <translation>Hacer clic derecho en un bloque cuando la selección incluye varios bloques, se abre un menú contextual que propone los comandos de edición de varios bloques.</translation>
    </message>
    <message>
        <source>Blocks with locked properties are shown on a grey bottom.</source>
        <translation>Bloques con propiedades bloqueados se muestran en un fondo gris.</translation>
    </message>
    <message>
        <source>Selected blocks are shown on a red bottom if the focus is on the blocks table or on a blue bottom if the focus is on another element.</source>
        <translation>Bloques seleccionados se muestran sobre un fondo de color rojo si el foco está en la tabla de bloques o en un fondo azul si el foco está en otro elemento.</translation>
    </message>
    <message>
        <source>To change the blocks order, use Drag &amp; Drop or &lt;B&gt;Up&lt;/B&gt; and &lt;B&gt;Down&lt;/B&gt; functions of the contextual menu.</source>
        <translation>Para cambiar el orden de los bloques, el uso de arrastrar y soltar (Drag &amp; Drop) con las funciones &lt;B&gt; Arriba&lt;/B&gt; y &lt;B&gt;Abajo&lt;/B&gt; del menú contextual.</translation>
    </message>
    <message>
        <source>It is possible to add files directly in the blocks table by using Drag and Drop with the file explorer.</source>
        <translation>Es posible añadir archivos directamente en la tabla de bloques mediante el uso de Drag &amp; Drop (arrastrar y soltar) con el explorador de archivos.</translation>
    </message>
    <message>
        <source>All blocks, whether title, image or video, possess a text element.</source>
        <translation>Todos los bloques, ya sean título, imagen o video, poseen un elemento de texto.</translation>
    </message>
    <message>
        <source>During the insertion of a new block (Add title, Add file or Paste), the block is inserted: </source>
        <translation>Durante la inserción de un nuevo bloque (Agregar título, Agregar archivo o pegar), se inserta el bloque:</translation>
    </message>
    <message>
        <source>In visible mode for the current shot and for all the following shots</source>
        <translation>En el modo visible para la toma actual y para todos las siguientes tomas</translation>
    </message>
    <message>
        <source>In hidden mode for the shots located before the current shot</source>
        <translation>En modo oculto para las tomas situadas antes de la toma actual</translation>
    </message>
    <message>
        <source>Always in the last position in the list of blocks (in the foreground)</source>
        <translation>Siempre en la última posición de la lista de bloques (en primer plano)</translation>
    </message>
    <message>
        <source>Coordinates</source>
        <translation>Coordenadas</translation>
    </message>
    <message>
        <source>&lt;B&gt;For image or video blocks: &lt;/B&gt;Allows you to select a reframing style for the image. It has the same effect as selecting a style in the dialog: &lt;a href=&quot;0110.html&quot;&gt;Correct, reframe or cut image or video&lt;/a&gt;.</source>
        <translation>&lt;B&gt;Para los bloques de imagen o video: &lt;/B&gt;Permite seleccionar un estilo de reencuadre para la imagen. Tiene el mismo efecto que seleccionar un estilo en el diálogo: &lt;a href=&quot;0110.html&quot;&gt;Corregir, reencuadrar o cortar la imagen o el vídeo&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>&lt;B&gt;For text blocks: &lt;/B&gt;Allows you to select the geometrical constraints to be applied to the block. Three type of constraint are available:</source>
        <translation>&lt;B&gt;Para los bloques de texto: &lt;/B&gt;Permite seleccionar las limitaciones geométricas que deben aplicarse en el bloque. Tres tipo de restricciónes están disponibles:</translation>
    </message>
    <message>
        <source>No constraint is applied to the selection rectangle.</source>
        <translation>Sn restricción : No se aplica ninguna restricción al rectángulo de selección. </translation>
    </message>
    <message>
        <source>Lock selection rectangle to the actual geometry. It has no meaning until you have defined a shape in &quot;no constraint&quot; mode.</source>
        <translation>Bloquear rectángulo de selección a la geometría real. No tiene ningún sentido hasta que se haya definido una forma con el modo &quot;sin restricción&quot;.</translation>
    </message>
    <message>
        <source>Lock selection rectangle to the same geometry as the project, such that, if you place the image in full screen, the reframed part will correspond to the whole screen.</source>
        <translation>Bloquear rectángulo de selección para la misma geometría que el proyecto, de tal manera que, si se coloca la imagen en pantalla completa, la parte reencuadrada corresponderá a toda la pantalla.</translation>
    </message>
    <message>
        <source>Allows you to select a pre-defined block size</source>
        <translation>Permite seleccionar un tamaño de bloque predefinido</translation>
    </message>
    <message>
        <source>Represents the horizontal offset of the block from the left. This position is defined as a percentage (%) of the total width of the image or in pixels (for a 1080p screen) according to the unit defined in the configuration dialog.</source>
        <translation>Representa el desplazamiento horizontal del bloque desde la izquierda. Esta posición se representa en porcentaje (%) de la anchura total de la imagen, en pixels (para una pantalla 1080p) en función de la unidad definida en el diálogo de configuración.</translation>
    </message>
    <message>
        <source>Represents the vertical offset of the block from the top. This position is defined as a percentage (%) of the total height of the image or in pixels (for a 1080p screen) according to the unit defined in the configuration dialog.</source>
        <translation>Representa el desplazamiento vertical del bloque desde arriba Esta posición se representa en porcentaje (%) de la altura total de la imagen, en pixels (para una pantalla 1080p) en función de la unidad definida en el diálogo de configuración.</translation>
    </message>
    <message>
        <source>Represents the width of the block. This value is defined as a percentage (%) of the total width of the image or in pixels (for a 1080p screen) according to the unit defined in the configuration dialog box.</source>
        <translation>Representa la anchura del bloque. Este valor se define como un porcentaje (%) de la anchura total de la imagen o en píxeles (para una pantalla de 1080p) de acuerdo con la unidad definida en el cuadro de diálogo de configuración.</translation>
    </message>
    <message>
        <source>Represents the height of the block. This value is defined as a percentage (%) of the total height of the image or in pixels (for a 1080p screen) according to the unit defined in the configuration dialog.</source>
        <translation>Representa la altura del bloque. Este valor se define como un porcentaje (%) de la altura total de la imagen o en píxeles (para una pantalla de 1080p) de acuerdo con la unidad definida en el cuadro de diálogo de configuración.</translation>
    </message>
    <message>
        <source>Rotation around the Z axis in degrees.</source>
        <translation>Rotación según el eje Z representado en grados.</translation>
    </message>
    <message>
        <source>Rotation around the Y axis in degrees.</source>
        <translation>Rotación según el eje Y representado en grados.</translation>
    </message>
    <message>
        <source>Rotation around the X axis in degrees.</source>
        <translation>Rotación según el eje X representado en grados.</translation>
    </message>
    <message>
        <source>Block shape</source>
        <translation>Forma del bloque</translation>
    </message>
    <message>
        <source>Shape</source>
        <translation>Forma</translation>
    </message>
    <message>
        <source>Allows you to select a shape for the block. The selected shape will be used as:</source>
        <translation>Permite seleccionar una forma para el bloque. La forma seleccionada se utiliza como:</translation>
    </message>
    <message>
        <source>a fusion mask for the images and the videos.</source>
        <translation>una máscara de fusión para las imágenes y los vídeos.</translation>
    </message>
    <message>
        <source>A cutting zone for texts</source>
        <translation>Una zona de corte para los textos</translation>
    </message>
    <message>
        <source>Opacity</source>
        <translation>Opacidad</translation>
    </message>
    <message>
        <source>Defines the opacity of the block. This value also applies to the text of the block.</source>
        <translation>Define la opacidad del bloque. Este valor también se aplica al texto del bloque.</translation>
    </message>
    <message>
        <source>Border</source>
        <translation>Borde</translation>
    </message>
    <message>
        <source>Thickness of the border</source>
        <translation>Grosor del borde</translation>
    </message>
    <message>
        <source>Defines the thickness of the border (This value is defined as 1/1080 of the height of the screen. A value of 10 corresponds to 10 points on a 1920x1080 FullHD screen, but only to 6 points on a 1280x720 screen).</source>
        <translation>Define el grosor del borde (Este valor se define como 1/1080 de la altura de la pantalla. Un valor de 10 corresponde a 10 puntos en una pantalla FullHD 1920x1080, pero sólo a 6 puntos en una pantalla de 1280x720).</translation>
    </message>
    <message>
        <source>Border color</source>
        <translation>Color del borde</translation>
    </message>
    <message>
        <source>Defines the color of the line to be used to draw the border</source>
        <translation>Define el color de la línea que se utilizará para dibujar el borde</translation>
    </message>
    <message>
        <source>Line type of border</source>
        <translation>Tipo de línea del borde</translation>
    </message>
    <message>
        <source>Defines the type of line (solid, dotted line, etc.)</source>
        <translation>Define el tipo de línea (línea sólida, punteada, etc)</translation>
    </message>
    <message>
        <source>Shadow</source>
        <translation>Sombra</translation>
    </message>
    <message>
        <source>Shadow position</source>
        <translation>Posición de la sombra</translation>
    </message>
    <message>
        <source>Defines in which corner the shadow will be positioned (Note: the position of the shadow is independent of rotation of the block: the right lower corner is always the right lower corner, whatever rotation is applied).</source>
        <translation>Define en qué esquina de la sombra se posicionará (Nota: la posición de la sombra es independiente de la rotación del bloque: la esquina inferior derecha es siempre la esquina inferior derecha, sea cual sea la rotación que se aplique).</translation>
    </message>
    <message>
        <source>Distance of the shadow</source>
        <translation>Distancia de la sombra</translation>
    </message>
    <message>
        <source>Defines the distance between the block and its shadow</source>
        <translation>Define la distancia entre el bloque y su sombra</translation>
    </message>
    <message>
        <source>Color</source>
        <translation>Color</translation>
    </message>
    <message>
        <source>Animation option</source>
        <translation>Opción de animación</translation>
    </message>
    <message>
        <source>Speed wave</source>
        <translation>Curva de velocidad</translation>
    </message>
    <message>
        <source>Text annimation</source>
        <translation>Animación de texto</translation>
    </message>
    <message>
        <source>Zoom</source>
        <translation>Zoom</translation>
    </message>
    <message>
        <source>Defines a level of zoom for the text</source>
        <translation>Define un nivel de zoom para el texto</translation>
    </message>
    <message>
        <source>Defines the horizontal position of the text inside the block</source>
        <translation>Define la posición horizontal del texto dentro del bloque</translation>
    </message>
    <message>
        <source>Defines the vertical position of the text inside the block</source>
        <translation>Define la posición vertical del texto dentro del bloque</translation>
    </message>
    <message>
        <source>Define values for zoom and scrolling for the 1st shot</source>
        <translation>Definir los valores de zoom y el desplazamiento para la 1ª  toma</translation>
    </message>
    <message>
        <source>Define different values for zoom and scrolling for the 2nd</source>
        <translation>Definir valores diferentes para el zoom y el desplazamiento para la 2 ª</translation>
    </message>
    <message>
        <source>Block animation</source>
        <translation>Aimación del bloque</translation>
    </message>
    <message>
        <source>Multiple rotations</source>
        <translation>Múltiples rotaciones</translation>
    </message>
    <message>
        <source> This animation allows to turn a block several times during the shot. </source>
        <translation>Esta animación permite girar un bloque varias veces durante la toma.</translation>
    </message>
    <message>
        <source>Remark: the rotation direction is defined by the sign, so +5 will give 5 rotations in one direction while -5 will give 5 rotations in the other direction </source>
        <translation>Observación: la dirección de rotación se define por un numero, por lo que 5 dará 5 vueltas en una dirección, mientras -5 dará 5 vueltas en sentido contrario</translation>
    </message>
    <message>
        <source>Defines the number of rotation to be made according to the Z axis.</source>
        <translation>Define el número de rotación para realizarse con arreglo al eje Z.</translation>
    </message>
    <message>
        <source>Defines the number of rotation to be made according to the Y axis.</source>
        <translation>Define el número de rotación para ser realizado de acuerdo con el eje Y.</translation>
    </message>
    <message>
        <source>Defines the number of rotation to be made according to the X axis.</source>
        <translation>Define el número de rotación para ser realizado de acuerdo con el eje X.</translation>
    </message>
    <message>
        <source>Dissolve</source>
        <translation>Disolver</translation>
    </message>
    <message>
        <source>This animation dissolves between the block and a transparent zone according to the following settings.</source>
        <translation>Esta animación disuelve entre el bloque y una zona transparente de acuerdo con siguientes ajustes.</translation>
    </message>
    <message>
        <source>Appear</source>
        <translation>Aparecer</translation>
    </message>
    <message>
        <source>The block will appear during the shot</source>
        <translation>Aparecerá el bloque durante la toma</translation>
    </message>
    <message>
        <source>Disappear</source>
        <translation>Desaparecer</translation>
    </message>
    <message>
        <source>The block will disappear during the shot</source>
        <translation>El bloque va a desaparecer durante la toma</translation>
    </message>
    <message>
        <source>Blink</source>
        <translation>Reverberar</translation>
    </message>
    <message>
        <source>The block will blink during the shot (appear then disappear). 4 speeds are proposed (from slow to very fast).</source>
        <translation>El bloque reverbera durante la toma (aparece y luego desaparece). Se proponen 4 velocidades (de lento a muy rápido).</translation>
    </message>
    <message>
        <source>See also</source>
        <translation>Consultar también</translation>
    </message>
    <message>
        <source>Description of EXIF - Exchangeable image file format</source>
        <translation>Descripción de EXIF - Formato de archivo de imagen intercambiable</translation>
    </message>
    <message>
        <source>This settings group defines the coordinates of the block for the current shot, so, the modifications made to the following properties will apply only to current shot. To understand the differences between the properties which apply to all shots and those which apply only to the current shot, consult: &lt;a href=&quot;0010.html&quot;&gt;How ffDiaporama works&lt;/a&gt;.</source>
        <translation>Este grupo de configuración define las coordenadas del bloque para la toma actual, por lo que, las modificaciones realizadas en las propiedades se aplicarán únicamente a la toma actual. Para entender las diferencias entre las propiedades que se aplican a todas las tomas y las que se aplican sólo a la toma actual, consultar: &lt;a href=&quot;0010.html&quot;&gt;Cómo funciona ffDiaporama &lt;/a&gt;.</translation>
    </message>
    <message>
        <source> This settings group defines the shape of the block for all shots, so, modification of the following properties will apply to all shots in the slide. To understand the differences between the properties which apply to all shots and those which apply only to the current shot, consult: &lt;a href=&quot;0010.html&quot;&gt;How ffDiaporama works&lt;/a&gt;. </source>
        <translation>Este grupo de configuración define la forma del bloque para todas las tomas, por lo que, la modificación de las propiedades siguientes se aplicará a todas las tomas de la diapositiva. Para entender las diferencias entre las propiedades que se aplican a todas las tomas y las que se aplican sólo a la toma actual, consultar: &lt;a href=&quot;0010.html&quot;&gt; Cómo funciona ffDiaporama &lt;/a&gt;.</translation>
    </message>
    <message>
        <source>On the top: The &lt;a href=&quot;#Toolbar&quot;&gt;Toolbar&lt;/a&gt; allows to launch the main slide editing commands, and the &lt;a href=&quot;#ShotSettings&quot;&gt;Shot settings&lt;/a&gt; zone.</source>
        <translation>Arriba: La &lt;a href=&quot;#Toolbar&quot;&gt;Barra de herramientas&lt;/a&gt; permite lanzar los principales comandos de edición de diapositivas y la zona &lt;a href=&quot;#ShotSettings&quot;&gt;Ajustes de la toma&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>On the left: The &lt;a href=&quot;#SlideSettings&quot;&gt;Slide settings zone&lt;/a&gt;, the &lt;a href=&quot;#ShotsTable&quot;&gt;Shots table&lt;/a&gt; and the &lt;a href=&quot;#InteractiveZone&quot;&gt;Interactive&lt;/a&gt; zones.</source>
        <translation>A la izquierda: La zona &lt;a href=&quot;#SlideSettings&quot;&gt;Ajustes de la diapositiva&lt;/a&gt;, la &lt;a href=&quot;#ShotsTable&quot;&gt;Tabla de tomas&lt;/a&gt; y la zona &lt;a href=&quot;#InteractiveZone&quot;&gt;Interactiva&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>On the right: The &lt;a href=&quot;#BlockTable&quot;&gt;Blocks table&lt;/a&gt; and the &lt;a href=&quot;#BlockSettings&quot;&gt;Block settings&lt;/a&gt; zones.</source>
        <translation>A la derecha: La &lt;a href=&quot;#BlockTable&quot;&gt;Tabla de bloques&lt;/a&gt; y la zona &lt;a href=&quot;#BlockSettings&quot;&gt;Ajuste de los bloques&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Open the &lt;a href=&quot;0120.html&quot;&gt;Edit text block dialog&lt;/a&gt;.</source>
        <translation>Abrir el diálogo &lt;a href=&quot;0120.html&quot;&gt;Editar bloque de texto&lt;/a&gt;.</translation>
    </message>
    <message>
        <source> If the block is visible during this shot.</source>
        <translation> Si el bloque es visible en esta toma.</translation>
    </message>
    <message>
        <source> If the block is hidden during this shot.</source>
        <translation> Si el bloque está oculto durante esta toma.</translation>
    </message>
    <message>
        <source>Sets the color used to draw the shadow</source>
        <translation>Ajustar el color utilizado para dibujar la sombra</translation>
    </message>
    <message>
        <source>If you specify a duration lower than the minimum calculated duration for the shot, it is this minimum duration that will be used in place of the value which you specified.</source>
        <translation>Si se especifica una duración inferior a la duración mínima calculada para la toma, es esta duración mínima la que se utiliza en lugar del valor que se ha especificado.</translation>
    </message>
    <message>
        <source>Blocks are shown on 3 columns:</source>
        <translation>Los bloques se muestran en 3 columnas :</translation>
    </message>
    <message>
        <source>The blocks table lists, from top to bottom, the present blocks in the slide.</source>
        <translation>Las listas de la tabla de bloques, de arriba a abajo, las presentes bloques de la diapositiva.</translation>
    </message>
    <message>
        <source>To make animations of text, you have to create at least 2 shots then:</source>
        <translation>Para hacer animaciones de texto, se deben crear al menos 2 tomas, entonces:</translation>
    </message>
    <message>
        <source>This dialog allows you to define settings for the slides. It includes numerous zones:</source>
        <translation>Este cuadro de diálogo permite definir los ajustes para las diapositivas. Se incluyen numerosas zonas:</translation>
    </message>
    <message>
        <source>Open the &lt;a href=&quot;0105.html&quot;&gt;Chapter properties dialog&lt;/a&gt;</source>
        <translation>Abrir el diálogo &lt;a href=&quot;0105.html&quot;&gt;Propiedades del capítulo&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Add a new title block - Open a sub menu with the following options: </source>
        <translation>Añadir un nuevo bloque de título - Abre un submenú con las siguientes opciones:</translation>
    </message>
    <message>
        <source>Add a simple title block</source>
        <translation>Añadir un texto simple</translation>
    </message>
    <message>
        <source>Add a title clip-art block</source>
        <translation>Añadir un texto en un clipart</translation>
    </message>
    <message>
        <source>Once you have selected one of the options, the &lt;a href=&quot;0120.html&quot;&gt;Edit Text dialog&lt;/a&gt; opens.</source>
        <translation>Una vez que se haya seleccionado una de las opciones, se abre el diálogo &lt;a href=&quot;0120.html&quot;&gt;Editar texto&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Add one or several new blocks of images or video. A &lt;a href=&quot;0109.html&quot;&gt;file selection dialog&lt;/a&gt; appears allowing you to select files. </source>
        <translation>Añadir uno o varios de los nuevos bloques de imágenes o vídeo.Aparece el diálogo &lt;a href=&quot;0109.html&quot;&gt;file selection&lt;/a&gt; permitiendo seleccionar archivos.</translation>
    </message>
    <message>
        <source>Note: in case of multiple selection, files are added in the alphabetical order of the filenames or in the digital order of shots (according to the option selected in the &lt;a href=&quot;0101.html&quot;&gt;Application options dialog&lt;/a&gt;).</source>
        <translation>Nota: en caso de selección múltiple, se agregan los archivos en el orden alfabético de los nombres de archivo o en el orden numérico de tomas (según la opción seleccionada en el diálogo &lt;a href=&quot;0101.html&quot;&gt;Ociones de la aplicación&lt;/a&gt;).</translation>
    </message>
    <message>
        <source>Edit blocks - Open a sub menu with the following options: </source>
        <translation>Editar bloques - Abre un submenú con las siguientes opciones:</translation>
    </message>
    <message>
        <source>Arrange blocks - Open a sub menu with the following options: </source>
        <translation>Organizar bloques - Abrir un submenú con las siguientes opciones:</translation>
    </message>
    <message>
        <source>Save as model - Allows you to save current slide as a new Predefined custom title. </source>
        <translation>Guardar como modelo - Permite guardar la diapositiva actual como un nuevo título personalizado.</translation>
    </message>
    <message>
        <source>For more information on predefined title slide, see: &lt;a href=&quot;0012.html&quot;&gt;Predefined title slide&lt;/a&gt;</source>
        <translation>Para obtener más información sobre la diapositiva de título predefinido, consultar: &lt;a href=&quot;0012.html&quot;&gt; diapositiva de título predefinido&lt;/a&gt;</translation>
    </message>
    <message>
        <source> At the bottom of the box, the &quot;Rullers&quot; button allows you to open the &lt;a href=&quot;0116.html&quot;&gt;Ruler properties dialog&lt;/a&gt; </source>
        <translation>En la parte inferior de la ventana, el botón &quot;Guías&quot; permite abrir el diálogo &lt;a href=&quot;0116.html&quot;&gt;Propiedades de las guías&lt;/a&gt;</translation>
    </message>
    <message>
        <source> It is also possible to open contextual menus by: </source>
        <translation>También es posible abrir menús contextuales así:</translation>
    </message>
    <message>
        <source>Right clicking on zones.</source>
        <translation>Un clic derecho sobre las zonas.</translation>
    </message>
    <message>
        <source>Right click on shots table.</source>
        <translation>Un clic derecho sobre la tabla de tomas.</translation>
    </message>
    <message>
        <source>Right click on blocks table or on interactive zone when no block was selected.</source>
        <translation>Un clic derecho sobre la tabla de bloques o sobre la zona interactiva cuando se selecciona un bloque.</translation>
    </message>
    <message>
        <source>Right click on one of the blocks of a multiple selection, on blocks table or on interactive zone.</source>
        <translation>Un clic derecho sobre uno de los bloques de una selección múltiple, sobre la tabla de bloques o sobre la zona interactiva.</translation>
    </message>
    <message>
        <source>Each of these contextual menus propose commands which depend on what you have clicked.</source>
        <translation>Cada uno de estos menús contextuales proponen comandos que dependen donde se haya hecho clic.</translation>
    </message>
    <message>
        <source>This settings group deals with style management. For more information on style management, see: &lt;a href=&quot;0016.html&quot;&gt;Using style management&lt;/a&gt;</source>
        <translation>Este grupo de ajuste se ocupa de la gestión de estilo. Para obtener más información sobre la gestión de estilo., ver: &lt;a href=&quot;0016.html&quot;&gt;Gsetión de estilos&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Add special - Open a sub menu with the following options: </source>
        <translation>Añadir especial - Abre un submenú con las siguientes opciones:</translation>
    </message>
    <message>
        <source>Add image from clipboard</source>
        <translation>Añadir imagen desde portapapeles</translation>
    </message>
    <message>
        <source>Add a GMaps map</source>
        <translation>Añadir un mapa de  Google Maps</translation>
    </message>
    <message>
        <source>Once you have selected one of the options, the new object is inserted into the block table and depending on object, the &lt;a href=&quot;0110.html&quot;&gt;Image framing and correction dialog&lt;/a&gt; opens.</source>
        <translation>Una vez que se haya seleccionado una de las opciones, el nuevo objeto se inserta en la tabla del bloque y dependiendo del objeto, se abre el &lt;a href=&quot;0110.html&quot;&gt;Diálogo de encuadre y corrección de la imagen&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Paste block or image from the clipboard and insert it to the end of the block table</source>
        <translation>Pegar el bloque o la imagen desde el portapapeles e insertarlo al final de la tabla del bloque</translation>
    </message>
    <message>
        <source>Selects a speed curve for block animations (movement, resizing and rotating of blocks, animation of text and blocks)</source>
        <translation>Selecciona una curva de velocidad para las animaciones de bloques (movimiento, cambiar el tamaño y rotar los bloques, animación de texto y bloques)</translation>
    </message>
    <message>
        <source>To change the velocity curve for image animation (graphic effect and framing), edit the image or video and select a velocity in the Image framing and correction dialog</source>
        <translation>Para cambiar la curva de velocidad para la animación de imágenes (efecto gráfico y encuadre), editar la imagen o vídeo y seleccionar una velocidad en el diálogo de encuadre  y corrección</translation>
    </message>
    <message>
        <source>This setting is define for the current shot, so, the modifications made will apply only to current shot. To understand the differences between the properties which apply to all shots and those which apply only to the current shot, consult: &lt;a href=&quot;0010.html&quot;&gt;How ffDiaporama works&lt;/a&gt;.</source>
        <translation>Este ajuste se define para la toma actual, por lo tanto, las modificaciones realizadas se aplicarán únicamente a la toma actual. Para entender las diferencias entre las propiedades que se aplican a todas las tomas y las que se aplican sólo a la toma actual, consultar: &lt;a href=&quot;0010.html&quot;&gt;Cómo trabaja ffDiaporama&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>These settings are defines for the current shot, so, the modifications made will apply only to current shot. To understand the differences between the properties which apply to all shots and those which apply only to the current shot, consult: &lt;a href=&quot;0010.html&quot;&gt;How ffDiaporama works&lt;/a&gt;.</source>
        <translation>Estos parámetros fueron definidos para la toma actual, por lo tanto, las modificaciones realizadas se aplicarán únicamente a la toma actual. Para entender las diferencias entre las propiedades que se aplican a todas las tomas y las que se aplican sólo a la toma actual, consultar:&lt;a href=&quot;0010.html&quot;&gt;Cómo trabaja ffDiaporama&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>The block animations define which animations will run during the current shot. You can define different animations for every shot!</source>
        <translation>Las animaciones de bloque definen qué animaciones se ejecutarán durante la toma actual. ¡Se pueden definir distintas animaciones para cada toma!</translation>
    </message>
    <message>
        <source> If changes made on previous shot are applied for this block also to this shot. (This information does not appear for the 1st shot.)</source>
        <translation>Si se aplican los cambios realizados en la toma anterior se aplicarán para este bloque también la toma actual. (Esta información no aparece para la primera toma.)</translation>
    </message>
    <message>
        <source> If changes made on previous shot are not applied for this block to this shot. (This information does not appear for the 1st shot.)</source>
        <translation>Si no se aplican los cambios realizados en la toma anterior para este bloque a esta toma. (Esta información no aparece para la primera toma.)</translation>
    </message>
    <message>
        <source>Inheritance changes</source>
        <translation>Cambios heredados</translation>
    </message>
    <message>
        <source>Inherit changes: If this box is checked, the changes made in a previous shot will be applied to this object in this shot</source>
        <translation>Los cambios heredados: Si esta casilla está marcada, los cambios realizados en una toma anterior serán aplicados a este objeto en esta toma</translation>
    </message>
    <message>
        <source>This settings group defines how changes to the block parameters are reflected to the different shots.</source>
        <translation>Este grupo de parámetros define cómo se reflejan los cambios en los parámetros de los bloques de las diferentes tomas.</translation>
    </message>
</context>
<context>
    <name>0120</name>
    <message>
        <source>Edit text</source>
        <translation>Editar texto</translation>
    </message>
    <message>
        <source>Properties for all shots</source>
        <translation>Propiedades para todas las tomas</translation>
    </message>
    <message>
        <source> The modifications made to the following properties will apply to all shots of the slide. </source>
        <translation> Las modificaciones realizadas sobre las siguientes propiedades que se aplicacrán a todas las tomas de la diapositiva.</translation>
    </message>
    <message>
        <source>Text tab</source>
        <translation>Pestaña de texto</translation>
    </message>
    <message>
        <source>First line at the top of the dialog</source>
        <translation>Primera línea en la parte superior del cuadro de diálogo</translation>
    </message>
    <message>
        <source>Allows you to select the font to be used, its size and its colour. This setting applies to the current selection.</source>
        <translation>Permite seleccionar el tipo de letra a utilizar, su tamaño y su color. Este ajuste se aplica a la selección actual.</translation>
    </message>
    <message>
        <source>Allows to establish (or to remove) a bullet list. This setting applies to the paragraphs of the current selection.</source>
        <translation>Permite establecer (o eliminar) una lista de viñetas. Este ajuste se aplica a los párrafos de la selección actual.</translation>
    </message>
    <message>
        <source>Allows to establish (or to remove) a numbered list. This setting applies to the paragraphs of the current selection.</source>
        <translation>Permite establecer (o eliminar) una lista numerada. Este ajuste se aplica a los párrafos de la selección actual.</translation>
    </message>
    <message>
        <source>Horizontal alignment: left. This setting applies to the paragraph in which the cursor is.</source>
        <translation>Alineación horizontal: izquierda. Este ajuste se aplica al párrafo en el que está el cursor.</translation>
    </message>
    <message>
        <source>Horizontal alignment: centered. This setting applies to the paragraph in which the cursor is.</source>
        <translation>Alineación horizontal: centrado. Este ajuste se aplica al párrafo en el que está el cursor.</translation>
    </message>
    <message>
        <source>Horizontal alignment: justified. This setting applies to the paragraph in which the cursor is.</source>
        <translation>Alineación horizontal: justificado. Este ajuste se aplica al párrafo en el que está el cursor.</translation>
    </message>
    <message>
        <source>Horizontal alignment: right. This setting applies to the paragraph in which the cursor is.</source>
        <translation>Alineación horizontal: derecha. Este ajuste se aplica al párrafo en el que está el cursor.</translation>
    </message>
    <message>
        <source>Second line at the top of the dialog</source>
        <translation>Segunda línea en la parte superior del cuadro de diálogo</translation>
    </message>
    <message>
        <source>Allows you to add outline or shadow to the whole text: </source>
        <translation>Permite agregar contorno o sombra a todo el texto:</translation>
    </message>
    <message>
        <source>The first list allows you to select the effect: </source>
        <translation>La primera lista permite seleccionar el efecto:</translation>
    </message>
    <message>
        <source>No effect</source>
        <translation>Sin efecto</translation>
    </message>
    <message>
        <source>Text is shown without any shadow or outline</source>
        <translation>El texto se muestra sin ningún tipo de sombra o contorno</translation>
    </message>
    <message>
        <source>Outline</source>
        <translation>Contorno</translation>
    </message>
    <message>
        <source>Surrounds the characters with a line in the current shadow color</source>
        <translation>Rodea los caracteres con una línea en el color de la sombra</translation>
    </message>
    <message>
        <source>Shadow ...</source>
        <translation>Sombra...</translation>
    </message>
    <message>
        <source>Add a shadow in the current shadow color in one of the 4 corners.</source>
        <translation>Añadir una sombra en el color de la sombra en una de las 4 esquinas.</translation>
    </message>
    <message>
        <source>The second list allows you to select the color of the shadow or the outline.</source>
        <translation>La segunda lista permite seleccionar el color de la sombra o el contorno.</translation>
    </message>
    <message>
        <source>Sets bold characters. This setting applies to the current selection.</source>
        <translation>Establece negrita. Este ajuste se aplica a la selección actual.</translation>
    </message>
    <message>
        <source>Sets characters to italics. This setting applies to the current selection.</source>
        <translation>Establece caracteres de cursiva. Este ajuste se aplica a la selección actual.</translation>
    </message>
    <message>
        <source>Underlines the characters. This setting applies to the current selection.</source>
        <translation>Subraya los caracteres. Este ajuste se aplica a la selección actual.</translation>
    </message>
    <message>
        <source>Puts the characters to super. This setting applies to the current selection.</source>
        <translation>Pone los caracteres un exponente. Este ajuste se aplica a la selección actual.</translation>
    </message>
    <message>
        <source>Puts the characters to sub. This setting applies to the current selection.</source>
        <translation>Pone a los caracteres un subindice. Este ajuste se aplica a la selección actual.</translation>
    </message>
    <message>
        <source>Move the paragraph of a notch towards the right (indent). This setting applies to the paragraph in which is the cursor.</source>
        <translation>Mueve el párrafo una señal a la derecha (sangría). Este ajuste se aplica al párrafo en el que está el cursor.</translation>
    </message>
    <message>
        <source>Move the paragraph of a notch towards the left (unindent). This setting applies to the paragraph in which is the cursor.</source>
        <translation>Mueve el párrafo una señal a la izquierda (Eliminar sangrado). Este ajuste se aplica al párrafo en el que está el cursor.</translation>
    </message>
    <message>
        <source>Vertical alignment: top. This setting applies to the block (to the whole text).</source>
        <translation>Alineación vertical: arriba. Este ajuste se aplica al bloque (a la totalidad del texto).</translation>
    </message>
    <message>
        <source>Vertical alignment: middle. This setting applies to the block (to the whole text).</source>
        <translation>Alineación vertical: medio. Este ajuste se aplica al bloque (a la totalidad del texto).</translation>
    </message>
    <message>
        <source>Vertical alignment: bottom. This setting applies to the block (to the whole text).</source>
        <translation>Alineación vertical: abajo. Este ajuste se aplica al bloque (a la totalidad del texto).</translation>
    </message>
    <message>
        <source>Background text tab</source>
        <translation>Pestaña del fondo del texto</translation>
    </message>
    <message>
        <source>&lt;U&gt;&lt;B&gt;&lt;I&gt;Note: This tab is available only for the title blocks (It&apos;s not available when the text applies to an image block).&lt;/I&gt;&lt;/B&gt;&lt;/U&gt;</source>
        <translation>&lt;U&gt;&lt;B&gt;&lt;I&gt;Nota: Esta pestaña sólo está disponible para los bloques de título (No está disponible cuando el texto se aplica a un bloque de imagen).&lt;/I&gt;&lt;/B&gt;&lt;/U&gt;</translation>
    </message>
    <message>
        <source>Allows you to define a background brush for the shape. The following options are available: </source>
        <translation>Permite definir un pincel de fondo para la forma. Las siguientes opciones están disponibles:</translation>
    </message>
    <message>
        <source>No brush</source>
        <translation>Sin pincel</translation>
    </message>
    <message>
        <source>The shape will have no background and will thus be totally transparent.</source>
        <translation>La forma no tendrá fondo y el por lo tanto será totalmente transparente.</translation>
    </message>
    <message>
        <source>Solid brush</source>
        <translation>Pincel sólido</translation>
    </message>
    <message>
        <source>Allows you to select a plain color.</source>
        <translation>Permite seleccionar un color plano.</translation>
    </message>
    <message>
        <source>Pattern brush</source>
        <translation>Patrón</translation>
    </message>
    <message>
        <source>Allows you to select a hatched brush.</source>
        <translation>Permite seleccionar un pincel rayado.</translation>
    </message>
    <message>
        <source>Gradient 2 colors</source>
        <translation>Gadiente de 2 colores</translation>
    </message>
    <message>
        <source>Allows you to select a gradient of 2 colors.</source>
        <translation>Permite seleccionar un gradiente de 2 colores.</translation>
    </message>
    <message>
        <source>Gradient 3 colors</source>
        <translation>Gadiente de 3 colores</translation>
    </message>
    <message>
        <source>Allows you to select a gradient of 3 colors.</source>
        <translation>Permite seleccionar un gradiente de 3 colores.</translation>
    </message>
    <message>
        <source>Image from library</source>
        <translation>Imagen de la biblioteca</translation>
    </message>
    <message>
        <source>Allows you to select an image from the library.</source>
        <translation>Permite seleccionar una imagen de la biblioteca.</translation>
    </message>
    <message>
        <source>If background brush is Solid, Pattern or Gradient brush, then this line appears and allows you to select a color. (Depending on the brush you select, there will be one, two or three selectable colors.)</source>
        <translation>Si el pincel de fondo es sólido, de patrón o degradado , entonces esta línea aparece y permite seleccionar un color. (Dependiendo del pincel que se seleccione, habrá uno, dos o tres colores seleccionables.)</translation>
    </message>
    <message>
        <source>If background brush is Pattern brush, then this line appears and allows you to select a pattern.</source>
        <translation>Si el pincel de fondo es un pincel de patrón, esta línea aparece y permite seleccionar un patrón.</translation>
    </message>
    <message>
        <source>If background brush is Gradient, then this line appears and allows you to select the gradient orientation. </source>
        <translation>Si el pincel de fondo es un gradiente, entonces esta línea aparece y permite seleccionar la orientación del gradiente.</translation>
    </message>
    <message>
        <source>If the Gradient has 3 colors, additional controls allow to define the position (in percentage) of the 3rd gradient color.</source>
        <translation>Si el Gradiente tiene 3 colores, controles adicionales permiten definir la posición (en porcentaje) del 3er color del gradiente.</translation>
    </message>
    <message>
        <source>If background brush is Image from library, then this line appears and allows you to select an image.</source>
        <translation>Si el pincel de fondo es una imagen de la biblioteca, entonces esta línea aparece y permite seleccionar una imagen.</translation>
    </message>
    <message>
        <source>Margins tab</source>
        <translation>Pestaña de márgenes</translation>
    </message>
    <message>
        <source>Default margins</source>
        <translation>Márgenes por defecto</translation>
    </message>
    <message>
        <source>To use predefined margins for the shape of the block. In general, these margins ensure that the text is contained in the form.</source>
        <translation>Para utilizar los márgenes predefinidos para la_ forma del bloque. En general, estos márgenes aseguran que el texto está contenido en la forma.</translation>
    </message>
    <message>
        <source>Full shape</source>
        <translation>Forma completa (sin margen)</translation>
    </message>
    <message>
        <source>To use margins corresponding to the entire form, in fact, the selection rectangle shape regardless of the design.</source>
        <translation>Para utilizar márgenes correspondientes a toda la forma, de hecho, elrectángulo de selección de la forma es independiente del diseño.</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation>Personalizado</translation>
    </message>
    <message>
        <source>To use custom margins. The following settings allow you to adjust the margins: </source>
        <translation>Para utilizar márgenes personalizados. Las siguientes opciones permiten ajustar los márgenes:</translation>
    </message>
    <message>
        <source>Represents the horizontal position of the margins relative to the top-left corner of the block. (This value is expressed in % of the width of the block.)</source>
        <translation>Representa la posición horizontal de los márgenes relativos a la esquina superior izquierda del bloque. (Este valor se expresa e n% de la anchura del bloque.)</translation>
    </message>
    <message>
        <source>Represents the vertical position of the margins relative to the top-left corner of the block. (This value is expressed in % of the height of the block.)</source>
        <translation>Representa la posición vertical de los márgenes relativos a la esquina superior izquierda del bloque. (Este valor se expresa en % de la altura del bloque.)</translation>
    </message>
    <message>
        <source>Represents the width of the margins. (This value is expressed in % of the width of the block.)</source>
        <translation>Representa la anchura de los márgenes. (Este valor se expresa en % de la anchura del bloque.)</translation>
    </message>
    <message>
        <source>Represents the height of the margins. (This value is expressed in % of the height of the block.)</source>
        <translation>Representa la altura de los márgenes. (Este valor se expresa en % de la altura del bloque.)</translation>
    </message>
    <message>
        <source>This dialog allows you to modify the text within a block.</source>
        <translation>Este cuadro de diálogo permite modificar el texto dentro de un bloque.</translation>
    </message>
    <message>
        <source>To understand indeed the differences between the properties which apply to all shots and those who apply only to the current shot, consult: &lt;a href=&quot;0010.html&quot;&gt;How ffDiaporama works&lt;/a&gt;. </source>
        <translation>Para entender realmente las diferencias entre las propiedades que se aplican a todas las tomas y los que se aplican sólo a la toma actual, consultar: &lt;a href=&quot;0010.html&quot;&gt;Cómo trabaja ffDiaporama&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>This settings group is the object of style management. for more information on style management, see : &lt;a href=&quot;0016.html&quot;&gt;Using style management&lt;/a&gt;</source>
        <translation>Este grupo de configuración es el objeto de la gestión del estilo. para más información sobre el estilo de gestión, consultar : &lt;a href=&quot;0016.html&quot;&gt;La gestión de estilos&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Allows you to add a dynamic variable to the text. For more information on dynamic variables see: &lt;a href=&quot;0013.html&quot;&gt;Dynamic variables&lt;/a&gt;</source>
        <translation>Permite agregar una variable dinámica al texto. Para obtener más información sobre las variables dinámicas véase: &lt;a href=&quot;0013.html&quot;&gt;Variables dinámicas&lt;/a&gt;</translation>
    </message>
</context>
<context>
    <name>0121</name>
    <message>
        <source>Select transition duration for a set of slides</source>
        <translation>Seleccionar duración de transición para una serie de diapositivas</translation>
    </message>
    <message>
        <source>Duration</source>
        <translation>Duración</translation>
    </message>
    <message>
        <source>Define the animation duration.</source>
        <translation>Definir la duración de la animación.</translation>
    </message>
    <message>
        <source>When you click the OK button, the new transition duration is applied to all the slides that were selected. </source>
        <translation>Al hacer clic en el botón OK, la nueva duración de la transición se aplica a todas las diapositivas que se han seleccionado. </translation>
    </message>
    <message>
        <source>This function can not be used to delete or change the slide&apos;s transition. </source>
        <translation>Esta función no se puede utilizar para eliminar o cambiar la transición de la diapositiva.</translation>
    </message>
    <message>
        <source>If it&apos;s what you want, then call the context transitions menu by right clicking on one of the slides of the selection from the &lt;a href=&quot;0023.html&quot;&gt;timeline&lt;/a&gt; and then select &quot;Modify the transition for all the slides of the selection&quot; option.</source>
        <translation>Si es lo que quieres, a continuación, llamar el menú transiciones contextual haciendo clic derecho en una de las diapositivas de la selección de la línea de tiempo &lt;a href=&quot;0023.html&quot;&gt; &lt;/a&gt; y después seleccionar la opci´on &quot;Modificar la transición para todas los diapositivas de la selección &quot;.</translation>
    </message>
    <message>
        <source>This dialog allows you to define the transition duration for a set of slides:</source>
        <translation>Este cuadro de diálogo permite definir la duración de la transición de un conjunto de diapositivas:</translation>
    </message>
</context>
<context>
    <name>0122</name>
    <message>
        <source>Transition properties</source>
        <translation>Propiedades de transición</translation>
    </message>
    <message>
        <source> This dialog allows you to define the entering transition for a slide. </source>
        <translation>Esta ventana permite definir la transición entrante para una diapositiva.</translation>
    </message>
    <message>
        <source>It shows a preview of the available transitions by transition family. </source>
        <translation>Muestra una previsualización de las transiciones disponibles por grupos.</translation>
    </message>
    <message>
        <source>Remark : In case this dialog is opened for a multiple slide selection, it&apos;s the first slide of the selection that is used for the preview. </source>
        <translation>Nota : En el caso de aparecer esta ventana para una selección múltiple de diapositivas, la primera diapositiva seleccionada será la utilizada para la previsualización.</translation>
    </message>
    <message>
        <source>Transition type</source>
        <translation>Tipo de transición</translation>
    </message>
    <message>
        <source>No transition</source>
        <translation>Sin transición</translation>
    </message>
    <message>
        <source>Note that this also deactivates:</source>
        <translation>Tener en cuenta que en este caso, se ha desactivado también:</translation>
    </message>
    <message>
        <source>Sound fades (The playlist of the new slide immediately replaces that of the old one)</source>
        <translation>Desvanecimiento de Sonido (La lista de reproducción de la nueva diapositiva inmediatamente reemplaza a la de la anterior)</translation>
    </message>
    <message>
        <source>Background transitions</source>
        <translation>Transiciones de fondo</translation>
    </message>
    <message>
        <source>Basic</source>
        <translation>Básico</translation>
    </message>
    <message>
        <source>Scripted transition</source>
        <translation>Transiciones programadas</translation>
    </message>
    <message>
        <source>LUMA transition</source>
        <translation>Transición LUMA</translation>
    </message>
    <message>
        <source>The animation is based on a luminance mask : the darker the points in the mask, the faster the corresponding points in the new slide replace those in the old slide.</source>
        <translation>La animación se basa en una máscara de luminancia: los puntos más oscuros en la máscara son los más rápidos correspondientes en la nueva diapositiva entrante y que sustituyen a los de la diapositiva saliente.</translation>
    </message>
    <message>
        <source>Speed wave</source>
        <translation>Curva de velocidad</translation>
    </message>
    <message>
        <source>Allows you to select a speed curve to apply to the transition</source>
        <translation>Permite seleccionar una curva de velocidad para aplicar a la transición</translation>
    </message>
    <message>
        <source>Duration</source>
        <translation>Duración</translation>
    </message>
    <message>
        <source>Allows you to define the duration of the animation. </source>
        <translation>Permite definir la duración de la animación.</translation>
    </message>
    <message>
        <source>The possible choices are of 0,5 seconds (very fast) to 10 seconds (very slow)</source>
        <translation>Las posibilidades para escoger son 0,5 segundos (muy rápido) a 10 segundos (muy lento)</translation>
    </message>
    <message>
        <source>See also</source>
        <translation>Consultar también</translation>
    </message>
    <message>
        <source>Description of LUMA</source>
        <translation>Descripción LUMA</translation>
    </message>
    <message>
        <source>Allows you to select a transition family: </source>
        <translation>Permite seleccionar una familia de transición:</translation>
    </message>
    <message>
        <source>No transition: The new slide immediately replaces the old one. </source>
        <translation>Sin transición: La diapositiva entrante sustituye inmediatamente a la diapositiva saliente.</translation>
    </message>
    <message>
        <source>Dissolve effect: The slide appears gradually, with gradually increasing opacity.</source>
        <translation>Efecto de fondo: La diapositiva aparece progresívamente, su opacidad aumenta progresívamente.</translation>
    </message>
    <message>
        <source>Zoom: The new slide appears by getting bigger while the old slide disappears with a dissolve effect. </source>
        <translation>Zoom: La diapositiva entrante aparece aumentando su tamaño mientras que la diapositiva saliente desaparece con un efecto de fundido.</translation>
    </message>
    <message>
        <source>Slide: The new slide glides onto the old slide which disappears with a dissolve effect. </source>
        <translation>Deslizamiento: La diapositiva entrante se desliza sobre la diapositiva saliente que desaparece con un efecto de fundido.</translation>
    </message>
    <message>
        <source>Push: The new slide takes the place of the old slide by pushing it aside.</source>
        <translation>Empuje: La diapositiva entrante ocupa el sitio de la diapositiva saliente empujándola hasta desaparecer.</translation>
    </message>
</context>
<context>
    <name>0123</name>
    <message>
        <source>Add or modify a location</source>
        <translation>Agregar o modificar una ubicación</translation>
    </message>
    <message>
        <source> This dialog allows you to define a location using Google Maps. </source>
        <translation>Este cuadro de diálogo permite definir una ubicación a través de Google Maps.</translation>
    </message>
    <message>
        <source>Google address</source>
        <translation>Dirección de Google</translation>
    </message>
    <message>
        <source>Enter the postal adress to find in this zone.</source>
        <translation>Introducir la dirección postal para encontrar en esta zona.</translation>
    </message>
    <message>
        <source>When you press the Enter key, a search is made using Google Maps and the addresses found are used to fill the list.</source>
        <translation>Cuando se presiona la tecla Intro, se realiza una búsqueda a través de Google Maps y las direcciones encontradas se utilizan para rellenar la lista.</translation>
    </message>
    <message>
        <source>Then select the correct address in the list</source>
        <translation>A continuación, seleccionar la dirección correcta en la lista</translation>
    </message>
    <message>
        <source>Open the favorite menu: </source>
        <translation>Abrir el menú favorito:</translation>
    </message>
    <message>
        <source>Add to favorite: Adds the current location to the list.</source>
        <translation>Añadir a favoritos: agrega la ubicación actual a la lista.</translation>
    </message>
    <message>
        <source>Update this favorite: Update the favorite using current settings.</source>
        <translation>Actualización de este favorito: Actualizar el favorito usando la configuración actual.</translation>
    </message>
    <message>
        <source>Remove this favorites: Remove the favorite from the list</source>
        <translation>Eliminar este favorito: Quitar el favorito de la lista</translation>
    </message>
    <message>
        <source>The list of the favourite: Use a favorite to fill the dialog box fields.</source>
        <translation>La lista de los favoritos: Utilizar uno de los favoritos para llenar los campos del cuadro de diálogo.</translation>
    </message>
    <message>
        <source>Friendly address</source>
        <translation>Dirección amigable</translation>
    </message>
    <message>
        <source>Enter the address in a more readable form. This form will be used to display the marker.</source>
        <translation>Introducir la dirección en una forma más legible. Este formulario se utiliza para mostrar el marcador.</translation>
    </message>
    <message>
        <source>Friendly name</source>
        <translation>Nombre amigable</translation>
    </message>
    <message>
        <source>Enter a name for this location. This name will be used to display the marker.</source>
        <translation>Escribir un nombre para esta ubicación. Este nombre se utiliza para mostrar el marcador.</translation>
    </message>
    <message>
        <source>Icon</source>
        <translation>Icono</translation>
    </message>
    <message>
        <source>Select an image to be used as icon to display the marker.</source>
        <translation>Seleccionar una imagen que se utilizará como icono para mostrar el marcador.</translation>
    </message>
    <message>
        <source> Click on the icon zone or on the </source>
        <translation> Hacer clic en el icono de la zona o en el</translation>
    </message>
    <message>
        <source> button to select an image and edit it.</source>
        <translation>botón para seleccionar una imagen y editarla.</translation>
    </message>
    <message>
        <source> Click on this </source>
        <translation> Hacer clic en este </translation>
    </message>
    <message>
        <source> button to clear the icon.</source>
        <translation> botón para borrar el icono.</translation>
    </message>
    <message>
        <source>Map zone</source>
        <translation>Zona del Mapa</translation>
    </message>
    <message>
        <source>Click on a point on the map zone to select it.</source>
        <translation>Hacer clic en un punto de la zona del mapa para seleccionarlo.</translation>
    </message>
    <message>
        <source>You can also use the slider and the </source>
        <translation>También se puede usar el control deslizante y </translation>
    </message>
    <message>
        <source> and </source>
        <translation> y </translation>
    </message>
    <message>
        <source> buttons to modify the zoom level.</source>
        <translation>los botones para modificar el nivel de zoom.</translation>
    </message>
</context>
<context>
    <name>0124</name>
    <message>
        <source>Cut a sound file</source>
        <translation>Cortar un archivo de sonido</translation>
    </message>
    <message>
        <source>This dialog allows you to cut a sound file.</source>
        <translation>Este cuadro de diálogo permite cortar un archivo de sonido.</translation>
    </message>
    <message>
        <source>The progress bar</source>
        <translation>La barra de progreso</translation>
    </message>
    <message>
        <source>Displays as follows: </source>
        <translation>Mestra lo siguiente: </translation>
    </message>
    <message>
        <source>The ruler representing the duration of the sound file is dispayed under a black background. Remark than the length of the ruler is increased in proportion to the duration of the sound file.</source>
        <translation>El controlador representa la duración del archivo de sonido y se muestra bajo un fondo negro. Observar la longitud de la regla que se incrementa en proporción a la duración del archivo de sonido.</translation>
    </message>
    <message>
        <source>The blue part, on wave form and ruler, represents the part of the sound file which is selected (which will be used in the assembly).</source>
        <translation>La parte azul, en forma de onda y una regla, representa la parte del archivo de sonido que se selecciona (que se utilizará en el montaje).</translation>
    </message>
    <message>
        <source> This button starts playback. Click again on this button to pause. </source>
        <translation>Este botón inicia la reproducción. Hacer otra vez clic en este botón para hacer una pausa.</translation>
    </message>
    <message>
        <source>You can move with the mouse the </source>
        <translation>Se puede mover con el ratón el </translation>
    </message>
    <message>
        <source> handle, on the progress bar, to move the current position</source>
        <translation>controlador, en la barra de progreso, para mover la posición actual</translation>
    </message>
    <message>
        <source>You can move with the mouse the two </source>
        <translation>Puede mover con el ratón los dos </translation>
    </message>
    <message>
        <source> and </source>
        <translation> y </translation>
    </message>
    <message>
        <source> handles, on the progress bar, to move the Start and End positions</source>
        <translation> controladores, en la barra de progreso, para mover las posiciones de inicio y fin</translation>
    </message>
    <message>
        <source>The working range</source>
        <translation>La zona de trabajo</translation>
    </message>
    <message>
        <source> Positions the cursor at the starting point</source>
        <translation> Coloca el cursor en el punto de partida</translation>
    </message>
    <message>
        <source> Uses the current cursor position as starting point (carries out an edit)</source>
        <translation>Utiliza la posición actual como punto de partida (llena la zona de edición)</translation>
    </message>
    <message>
        <source> Positions the cursor at the end point</source>
        <translation> Posiciona el cursor sobre el final</translation>
    </message>
    <message>
        <source> Uses the current cursor position as end point (carries out an edit)</source>
        <translation>Utiliza la posición actual del cursor como punto final (llena la zona de edición)</translation>
    </message>
    <message>
        <source>The wave form of the sound is displayed under a white background.</source>
        <translation>La forma de onda del sonido del vídeo se muestra bajo un fondo blanco.</translation>
    </message>
</context>
<context>
    <name>QHP</name>
    <message>
        <source>Welcome to the ffDiaporama WIKI</source>
        <translation>Bienvenido al WIKI de ffDiaporama</translation>
    </message>
    <message>
        <source>How ffDiaporama works</source>
        <translation>Cómo trabaja ffDiaporama</translation>
    </message>
    <message>
        <source>Functional principles</source>
        <translation>Principios del funcionamiento</translation>
    </message>
    <message>
        <source>The Visible property of blocks and the management of the breaks</source>
        <translation>La propiedad Visible de los bloques y la gestión de las pausas</translation>
    </message>
    <message>
        <source>All shots regulations versus current shot regulations</source>
        <translation>Todos los ajustes de tomas vs ajustes de toma actual</translation>
    </message>
    <message>
        <source>Style sheets</source>
        <translation>Hoja de estilo</translation>
    </message>
    <message>
        <source>Interface description</source>
        <translation>Descripción de la interfaz</translation>
    </message>
    <message>
        <source>The main window</source>
        <translation>La ventana principal</translation>
    </message>
    <message>
        <source>The toolbar</source>
        <translation>La barra de herramientas</translation>
    </message>
    <message>
        <source>The timeline</source>
        <translation>La línea de tiempo</translation>
    </message>
    <message>
        <source>The multimedia file browser</source>
        <translation>El navegador multimedia de archivos</translation>
    </message>
    <message>
        <source>Rendering videos</source>
        <translation>Generar vídeos</translation>
    </message>
    <message>
        <source>Smartphones and tablets</source>
        <translation>Smartphones y tablets</translation>
    </message>
    <message>
        <source>Portable devices</source>
        <translation>Dispositivos portátiles</translation>
    </message>
    <message>
        <source>Multimedia system (Home cinema)</source>
        <translation>Sistema Multimedia (Home cinema)</translation>
    </message>
    <message>
        <source>For the WEB</source>
        <translation>Para la WEB</translation>
    </message>
    <message>
        <source>Video codec</source>
        <translation>Codec de Video</translation>
    </message>
    <message>
        <source>Audio codec</source>
        <translation>Codec de Audio</translation>
    </message>
    <message>
        <source>Containers</source>
        <translation>Contenedores</translation>
    </message>
    <message>
        <source>Video standards and resolutions</source>
        <translation>Normas y resoluciones de video</translation>
    </message>
    <message>
        <source>File attachments (Thumbnails, nfo, etc...)</source>
        <translation>Archivos adjuntos (Miniaturas, nfo, etc...)</translation>
    </message>
    <message>
        <source>Technical information on ffDiaporama</source>
        <translation>Información técnica en ffDiaporama</translation>
    </message>
    <message>
        <source>ffDiaporama command line arguments</source>
        <translation>Comandos en línea de argumentos para ffDiaporama</translation>
    </message>
    <message>
        <source>ffDiaporama project files</source>
        <translation>Archivos del proyecto de ffDiaporama</translation>
    </message>
    <message>
        <source>The configuration files for ffDiaporama</source>
        <translation>Archivos de configuración de ffDiaporama</translation>
    </message>
    <message>
        <source>XBMC nfo files</source>
        <translation>archivos nfo de XBMC</translation>
    </message>
    <message>
        <source>Dialog boxes</source>
        <translation>Ventanas de diálogo</translation>
    </message>
    <message>
        <source>Application options</source>
        <translation>Opciones de la aplicación</translation>
    </message>
    <message>
        <source>Manage devices</source>
        <translation>Gestionar dispositivos</translation>
    </message>
    <message>
        <source>Add or modify a predefined title slide</source>
        <translation>Agregar o modificar una diapositiva de título predefinido</translation>
    </message>
    <message>
        <source>Background properties</source>
        <translation>Propiedades del fondo</translation>
    </message>
    <message>
        <source>Chapter properties</source>
        <translation>Propiedades del capítulo</translation>
    </message>
    <message>
        <source>Check configuration</source>
        <translation>Comprobar configuración</translation>
    </message>
    <message>
        <source>Export project</source>
        <translation>Exportar proyecto</translation>
    </message>
    <message>
        <source>Project properties</source>
        <translation>Propiedades del proyecto</translation>
    </message>
    <message>
        <source>Select files</source>
        <translation>Seleccionar archivos</translation>
    </message>
    <message>
        <source>Correct, reframe or cut image or video</source>
        <translation>Corregir, reencuadrar, cortar, ya sea una imagen o un vídeo</translation>
    </message>
    <message>
        <source>File information</source>
        <translation>Información de archivo</translation>
    </message>
    <message>
        <source>Manage favorite</source>
        <translation>Gestionar favoritos</translation>
    </message>
    <message>
        <source>Manage style</source>
        <translation>Gestionar estilos</translation>
    </message>
    <message>
        <source>Music properties</source>
        <translation>Propiedades de la música</translation>
    </message>
    <message>
        <source>Render video</source>
        <translation>Generar vídeo</translation>
    </message>
    <message>
        <source>Ruler properties</source>
        <translation>Propiedades de Guías</translation>
    </message>
    <message>
        <source>Edit thumbnail model</source>
        <translation>Editar miniatura de modelo</translation>
    </message>
    <message>
        <source>Set first shot duration for a set of slides</source>
        <translation>Situar duración de primera toma para una serie de diapositivas</translation>
    </message>
    <message>
        <source>Slide properties</source>
        <translation>Propiedades de diapositiva</translation>
    </message>
    <message>
        <source>Edit text</source>
        <translation>Editar texto</translation>
    </message>
    <message>
        <source>Select transition duration for a set of slides</source>
        <translation>Seleccionar duración de transición para una serie de diapositivas</translation>
    </message>
    <message>
        <source>Transition properties</source>
        <translation>Propiedades de transición</translation>
    </message>
    <message>
        <source>Dynamic variables</source>
        <translation>Variables dinámicas</translation>
    </message>
    <message>
        <source>Predefined title slide</source>
        <translation>Diapositiva de título predefinido</translation>
    </message>
    <message>
        <source>Configuration dialog boxes</source>
        <translation>Diálogos de configuración</translation>
    </message>
    <message>
        <source>Editing dialog boxes</source>
        <translation>Diálogos de edición</translation>
    </message>
    <message>
        <source>Dialog boxes related to the project</source>
        <translation>Diálogos relacionados con el proyecto</translation>
    </message>
    <message>
        <source>Various dialog boxes</source>
        <translation>Ventanas varias</translation>
    </message>
    <message>
        <source>Types of objects in ffDiaporama</source>
        <translation>Tipos de objetos en ffDiaporama</translation>
    </message>
    <message>
        <source>Add or modify a location</source>
        <translation>Agregar o modificar una localización</translation>
    </message>
    <message>
        <source>Cut a sound file</source>
        <translation>Cortar un archivo de sonido</translation>
    </message>
</context>
<context>
    <name>main</name>
    <message>
        <source>Welcome to the ffDiaporama WIKI</source>
        <translation>Bienvenido al WIKI de ffDiaporama</translation>
    </message>
    <message>
        <source>How ffDiaporama works</source>
        <translation>Cómo trabaja ffDiaporama</translation>
    </message>
    <message>
        <source>Interface description</source>
        <translation>Descripción de la interfaz</translation>
    </message>
    <message>
        <source>Rendering videos</source>
        <translation>Generar vídeos</translation>
    </message>
    <message>
        <source>Technical information on ffDiaporama</source>
        <translation>Información técnica en ffDiaporama</translation>
    </message>
    <message>
        <source>ffDiaporama Web site</source>
        <translation>Sitio Web de ffDiaporama</translation>
    </message>
    <message>
        <source>Finally, you&apos;ll also find help on the </source>
        <translation>También puedes encontrar ayuda en </translation>
    </message>
    <message>
        <source>ffDiaporama forum</source>
        <translation>ffDiaporama foro</translation>
    </message>
    <message>
        <source>Other elements of documentation are available on the </source>
        <translation>Otros elementos de la documentación están disponibles en el </translation>
    </message>
    <message>
        <source>This documentation is divided into the followed themes:</source>
        <translation>Esta documentación está dividida en los temas siguientes:</translation>
    </message>
</context>
</TS>
