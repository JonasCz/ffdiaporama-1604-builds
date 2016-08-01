<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="pt_PT">
<context>
    <name>0010</name>
    <message>
        <source>How ffDiaporama works</source>
        <translation>Como trabalha ffDiaporama</translation>
    </message>
    <message>
        <source> This section contains general information on the concepts and methods of use of ffDiaporama </source>
        <translation> Esta secção contém informação geral nos conceitos e métodos usados na utilização do ffDiaporama </translation>
    </message>
    <message>
        <source>Index</source>
        <translation>Índice</translation>
    </message>
    <message>
        <source>Functional principles</source>
        <translation>Princípios funcionais</translation>
    </message>
    <message>
        <source>Predefined title slide</source>
        <translation>Titulos de slides pré-definidos</translation>
    </message>
    <message>
        <source>The &quot;Visible&quot; property of blocks and the management of the breaks</source>
        <translation>A propriedade &quot;Visível&quot; dos blocos e a gestão das pausas</translation>
    </message>
    <message>
        <source>All shots regulations versus current shot regulations</source>
        <translation>Regras “Todas os disparos” versus “Disparo actual”</translation>
    </message>
    <message>
        <source>Style sheets</source>
        <translation>Folhas de estilo</translation>
    </message>
    <message>
        <source>Dynamic variables</source>
        <translation>Variáveis dinâmicas</translation>
    </message>
</context>
<context>
    <name>0011</name>
    <message>
        <source>Functional principles</source>
        <translation>Princípios funcionais</translation>
    </message>
    <message>
        <source>The main control element of ffDiaporama is the timeline. The timeline lists the slides which compose the project.</source>
        <translation>O principal elemento de controlo de ffDiaporama é a linha do tempo (cronograma). A linha do tempo lista os slides (ou diapositivos) que compõem o projecto.</translation>
    </message>
    <message>
        <source>It consists of 3 tracks: </source>
        <translation>É composto por três faixas:</translation>
    </message>
    <message>
        <source>the background track</source>
        <translation> a faixa de fundo</translation>
    </message>
    <message>
        <source>the mounting track</source>
        <translation>a faixa de montagem</translation>
    </message>
    <message>
        <source>and the music track.</source>
        <translation>e a faixa de música.</translation>
    </message>
    <message>
        <source>The slides</source>
        <translation>Os slides</translation>
    </message>
    <message>
        <source>Slides are shown one after another, in the order in which they appear in the time line.</source>
        <translation>Os slides (ou diapositivos), são mostrados um após o outro, na ordem em que aparecem na linha de tempo.</translation>
    </message>
    <message>
        <source>The following diagram shows how slides function:</source>
        <translation>O diagrama seguinte mostra como funcionam os slides:</translation>
    </message>
    <message>
        <source>The upper part of the diagram represents four slides: A, B, C and D. </source>
        <translation>A parte superior do diagrama representa quatro slides: A, B, C e D. </translation>
    </message>
    <message>
        <source>Each slide possesses an entering transition (symbolized on the diagram by a small rectangle labelled T). The transitions can have different durations (symbolized on the diagram by the lengths TA&apos;, TB&apos;, etc.): It is possible to define the duration of the entering transition for each slide separately (or to indicate no transition: duration=0).</source>
        <translation>Cada slide possui uma transição de entrada (simbolizado no diagrama por um pequeno rectângulo etiquetado T). As transições podem ter diferentes durações (simbolizada no diagrama pela comprimentos TA &apos;, TB&apos;, etc.): É possível definir a duração da transição para cada slide entrando separadamente (ou para indicar que não há transição: duração = 0).</translation>
    </message>
    <message>
        <source>Each slide possesses a duration which is appropriate for it (symbolized on the diagram by the lengths B&apos;, C&apos;, etc.): Some last only a few seconds while others can last several minutes. The durations are expressed in seconds but are not necessarily whole numbers: a slide might last 12.234 seconds.</source>
        <translation>Cada slide possui uma duração que é apropriado para ele (simbolizado no diagrama pela comprimentos B &apos;, C&apos;, etc.): Alguns duram apenas alguns segundos, enquanto outros podem durar vários minutos. As durações são expressos em segundos, mas não são necessariamente os números inteiros: um slide pode durar 12,234 segundo.</translation>
    </message>
    <message>
        <source>Each slide is a composite, an assembly of one or more multimedia elements which are animated over time. The animation is realized through shots.</source>
        <translation>Cada um dos slides é um composto, um conjunto de um ou mais elementos de multimédia, que são animadas ao longo do tempo. A animação é realizada por meio de disparos.</translation>
    </message>
    <message>
        <source>Each slide can define a new background (that is shown under the multimedia elements of the slide if they don&apos;t fill out the whole screen).</source>
        <translation>Cada slide pode definir um novo plano de fundo (que é mostrado sob os elementos multimédia do slide se não preencher toda a tela).</translation>
    </message>
    <message>
        <source>Each slide can define a new musical play-list.</source>
        <translation>Cada slide pode definir uma nova lista de reprodução musical.</translation>
    </message>
    <message>
        <source>Slides which do not define a background use the background defined in a previous slide. So in the following example: </source>
        <translation>Slides que não definem um fundo usam o fundo definido no slide anterior. Assim, no exemplo a seguir:</translation>
    </message>
    <message>
        <source>Slide 1: Defines a background</source>
        <translation>Slide 1 - Define um fundo</translation>
    </message>
    <message>
        <source>Slide 2: Does not define a background and therefore uses the background defined by slide 1</source>
        <translation>Slide 2 - Não define um fundo e, portanto, usa o fundo definida pelo slide 1</translation>
    </message>
    <message>
        <source>Slide 3: Does not define a background and therefore uses the background defined by slide 1</source>
        <translation>Slide 3 - Não define um fundo e, portanto, usa o fundo definido pelo slide 1</translation>
    </message>
    <message>
        <source>Slide 4: Defines a background</source>
        <translation>Slide 4 - Define um fundo</translation>
    </message>
    <message>
        <source>Slide 5: Does not define a background and therefore uses the background defined by slide 4</source>
        <translation> Slide 5 - Não define um fundo e, portanto, usa o fundo definido pelo slide 4</translation>
    </message>
    <message>
        <source>The same principle applies to the musical play-lists. As long as slides do not define a new play-list, they use the last defined play-list.</source>
        <translation>O mesmo princípio se aplica aos musicais da lista de músicas. Enquanto não definir uma nova lista de reprodução, eles usam a última lista de músicas definida.</translation>
    </message>
    <message>
        <source>Remarks:</source>
        <translation>Observações:</translation>
    </message>
    <message>
        <source>The total duration of the project is not equal to the sum of the durations of the slides because the transitions make the slides overlap: Two slides of 10 seconds, each with a transition of 1 second, will give a total duration for the project of 19 seconds (and not 20 seconds)!</source>
        <translation>A duração total do projecto não é igual à soma das durações dos slides (ou diapositivos), porque as transições tornam os slides (ou diapositivos) sobrepostos: Dois slides de 10 segundos cada um, com uma transição de um segundo, vai dar uma duração total prevista para o projecto de 19 segundos (e não 20 segundos)!</translation>
    </message>
    <message>
        <source>Shots and blocks</source>
        <translation>Disparos e blocos</translation>
    </message>
    <message>
        <source>The lower part of the diagram represents the composition of slide C. </source>
        <translation>A parte inferior do diagrama representa a composição do slide C.</translation>
    </message>
    <message>
        <source>Each slide comprises one or more shots. The shots are represented on the diagram by rectangles C1, C2, C3, etc...</source>
        <translation>Cada slide é composto por um ou mais disparos. Os disparos são representadas no diagrama por rectângulos C1, C2, C3, etc. ...</translation>
    </message>
    <message>
        <source>Each shot has its own duration (symbolized on the diagram by the lengths C1 &apos;, C2 &apos;, C3 &apos;, etc.). Some shots can last only seconds while others can last several minutes. Some shots can have a duration of zero. (The durations are expressed in seconds but are not necessarily whole numbers: A shot can very well last 12.234 seconds).</source>
        <translation>Cada disparo tem a sua própria duração (simbolizado no diagrama pela comprimentos C1 &apos;, C2&apos; C3 &apos;, etc.). Alguns disparos podem durar apenas alguns segundos, enquanto outros podem durar vários minutos. Alguns disparos podem ter uma duração de zero. (As durações são expressos em segundos, mas não são necessariamente números inteiros: Um disparo pode muito bem passado 12,234 segundo).</translation>
    </message>
    <message>
        <source>The shots can contain several multimedia objects. The multimedia objects are integrated into blocks which can be of three types: title (containing only text), images (or photos), or video.</source>
        <translation>Os disparos podem conter vários objectos multimédia. Os objectos multimédia são integrados em blocos que podem ser de três tipos: Título (contendo apenas texto), as imagens (ou fotos), ou vídeo.</translation>
    </message>
    <message>
        <source>The blocks define where and how the multimedia object appears on the screen. Each block can have a different framing that defines what is visible from the multimedia object within the block.</source>
        <translation>Os blocos definem onde e como o objecto multimédia é exibido na tela. Cada bloco pode ter uma formulação diferente que define o que é visível a partir do objecto multimédia dentro do bloco.</translation>
    </message>
    <message>
        <source>The background of the shots is transparent. This means that if the image does not fill the whole screen, the background will appear.</source>
        <translation>O pano de fundo das cenas é transparente. Isso significa que, se a imagem não preenche a tela inteira, o fundo vai aparecer.</translation>
    </message>
    <message>
        <source>The shots define the arrangement of blocks (multimedia objects) at any given moment.</source>
        <translation>Os disparos definem o arranjo de blocos (objectos multimédia) a qualquer momento.</translation>
    </message>
    <message>
        <source>The shot animations are generated by the transformation of these arrangements from one shot to another.</source>
        <translation>As animações do disparo são geradas pela transformação desses arranjos de um disparo para outro.</translation>
    </message>
    <message>
        <source>The lengths of the shot animations are defined by the shot durations.</source>
        <translation>As durações das animações (num disparo) são definidas pela duração do disparo.</translation>
    </message>
    <message>
        <source>Specifically, if in the foreground, a block containing an image occupies the whole screen, and then in the following shot the same block occupies only a small part of the screen, then the animation will consist of the transformation of the image from the whole screen into that small part of the screen.</source>
        <translation>Especificamente, se em primeiro plano, um bloco que contém uma imagem ocupa toda a tela, e em seguida, na seguinte tomada do mesmo bloco ocupa apenas uma pequena parte da tela, em consequência, a animação consistirá na transformação da imagem a partir de toda a tela para um pequena parte da tela.</translation>
    </message>
    <message>
        <source>Example:</source>
        <translation>Exemplo:</translation>
    </message>
    <message>
        <source>Let&apos;s have 3 shots within a slide:</source>
        <translation>Vamos ter três disparos dentro de um slide:</translation>
    </message>
    <message>
        <source>Shot 1: Image using the whole screen: Duration=2 seconds.</source>
        <translation>Disparo 1: Imagem usando a tela inteira: Duração = 2 segundos.</translation>
    </message>
    <message>
        <source>Shot 2: Image using only the bottom right screen quarter: Duration 3 seconds.</source>
        <translation>Disparo 2: A imagem usando apenas a parte inferior direita da tela trimestre: Duração de 3 segundos.</translation>
    </message>
    <message>
        <source>Shot 3: Image again using the whole screen: Duration=2 seconds.</source>
        <translation>Disparo 3: Imagem de novo usando a tela inteira: Duração = 2 segundos.</translation>
    </message>
    <message>
        <source>Result:</source>
        <translation>Resultado:</translation>
    </message>
    <message>
        <source>The image will be shown on the whole screen for 2 seconds, will shrink gradually over 3 seconds towards the right lower quarter of the screen, and then will grow again for 2 seconds until it once more occupies the whole screen.</source>
        <translation>A imagem será mostrada em toda a tela por 2 segundos, irá diminuir gradualmente ao longo de 3 segundos para o quarto inferior direito da tela, e em seguida, vai crescer novamente por 2 segundos até que mais uma vez ocupar a tela inteira.</translation>
    </message>
    <message>
        <source>The slide will end as soon as the image has reached the position defined in shot 3.</source>
        <translation>O slide vai terminar logo que a imagem tenha atingido a posição definida no disparo 3.</translation>
    </message>
    <message>
        <source>The transformations are gradual: in the example you will see the image being gradually reduced.</source>
        <translation>As transformações são graduais: no exemplo, você vai ver a imagem que está sendo gradualmente reduzida.</translation>
    </message>
    <message>
        <source>The transformations are made over the whole duration of the following shot.</source>
        <translation>As transformações são feitas ao longo de toda a duração do seguinte disparo.</translation>
    </message>
    <message>
        <source>The framing definition of the objects in each block can vary from one shot to another. The following example shows three different definitions from the same block:</source>
        <translation>A definição de enquadramento dos objectos em cada bloco pode variar de um disparo para outro. O exemplo a seguir mostra três diferentes definições do mesmo bloco:</translation>
    </message>
    <message>
        <source>1st shot: The image is complete.</source>
        <translation>1º disparo: A imagem está completa.</translation>
    </message>
    <message>
        <source>2nd shot: The image is re-framed on the statue.</source>
        <translation>2º disparo: A imagem é reenquadrada na estátua.</translation>
    </message>
    <message>
        <source>3rd shot: The image is re-framed on the pedestrians.</source>
        <translation>3º disparo: A imagem é reenquadrada nos pedestres.</translation>
    </message>
    <message>
        <source>If we apply these framing definitions to the previous 3 shots: </source>
        <translation>Se aplicarmos essas definições de enquadramento para os 3 disparos anteriores:</translation>
    </message>
    <message>
        <source>The complete image will be shown on all the screen for 2 seconds, then it will be reduced gradually towards the right lower quarter of the screen over 3 seconds while zooming in on the statue, then it will grow again over 2 seconds until it once more occupies the whole screen while the &quot;camera&quot; moves towards the pedestrians.</source>
        <translation>A imagem completa será mostrada em toda a tela por 2 segundos, então ela vai ser reduzida gradualmente em direcção ao canto inferior direito da tela por mais 3 segundos, durante o zoom sobre a estátua, em seguida, ela vai voltar a crescer mais 2 segundos até que ocupe toda a tela, enquanto a &quot;câmara&quot; se move em direcção aos pedestres.</translation>
    </message>
    <message>
        <source>ffDiaporama can manage up to several hundreds slides in a single project.</source>
        <translation> ffDiaporama pode gerir até vários centenas de slides  num único projecto.</translation>
    </message>
    <message>
        <source>Each slide can consist of tens of shots.</source>
        <translation>Cada slide pode ser composto por dezenas de disparos.</translation>
    </message>
    <message>
        <source>Each slide can contain tens of blocks.</source>
        <translation> Cada slide pode conter dezenas de blocos.</translation>
    </message>
    <message>
        <source>Blocks can be visible on some shots and invisible on other.</source>
        <translation>Os blocos podem ser visíveis em algumas fotos e invisível no outro.</translation>
    </message>
</context>
<context>
    <name>0012</name>
    <message>
        <source>Predefined title slide</source>
        <translation>Titulos de slides pré-definidos</translation>
    </message>
    <message>
        <source> Predefined title slide are complete slides including formatting and animations. </source>
        <translation>Slide de título predefinido são slides completos, incluindo formatação e animações.</translation>
    </message>
    <message>
        <source>The main interest of these slides is to standardize the slides within a project or across projects. </source>
        <translation>O principal interesse desses slides é padronizar os slides dentro de um projecto ou entre projectos. </translation>
    </message>
    <message>
        <source>ffDiaporama included many Predefined title slides, but you can also define your own Predefined title slides. </source>
        <translation>ffDiaporama incluiu muitos slides de título predefinidos, mas você também pode definir os seus próprios slides de título predefinidos. </translation>
    </message>
    <message>
        <source>To do this, create a standard slide using the &lt;a href=&quot;0119.html&quot;&gt;Slide properties dialog box&lt;/a&gt; and save your slide as a model using: </source>
        <translation>Para fazer isso, crie um slide padrão, utilizando a &lt;a href=&quot;0119.html&quot;&gt;Caixa de diálogo Propriedades do slide&lt;/a&gt;e salve o seu slide como um modelo usando:</translation>
    </message>
    <message>
        <source> Save as model function.</source>
        <translation>Função modelo Salvar como.</translation>
    </message>
    <message>
        <source>Remarks:</source>
        <translation>Observações:</translation>
    </message>
    <message>
        <source>Predefined title slides are defined according to the following three categories: </source>
        <translation>Slides de título predefinidos são definidos de acordo com as três categorias seguintes:</translation>
    </message>
    <message>
        <source>Project title</source>
        <translation>Título do Projeto</translation>
    </message>
    <message>
        <source>This type of slide is usually used early in the project as the opening credits. </source>
        <translation>Este tipo de slide é usado geralmente no início do projeto, como os créditos de abertura.</translation>
    </message>
    <message>
        <source>The texts variables that are used by the models of this slide type are based only on project information. For more information on project information, see: &lt;a href=&quot;0108.html&quot;&gt;Project properties dialog&lt;/a&gt;</source>
        <translation>As variáveis ​​de textos que são usados ​​pelas modelos deste tipo de slide são baseadas apenas em informações do projecto. Para mais informações sobre informações sobre o projecto, consulte: &lt;a href=&quot;0108.html&quot;&gt; Caixa de diálogo Propriedades do projecto &lt;/a&gt;</translation>
    </message>
    <message>
        <source>Chapter title</source>
        <translation>Título do Capítulo</translation>
    </message>
    <message>
        <source>This type of slide is usually used several times in the project to mark the beginning of the chapter. </source>
        <translation>Este tipo de slide é normalmente usado várias vezes no projecto para marcar o início do capítulo.</translation>
    </message>
    <message>
        <source>The texts variables that are used by the models of this slide type are based on project information and on chapter information.</source>
        <translation>As variáveis ​​de textos que são usados ​​pelas modelos deste tipo de slides são baseados em informações do projecto e na informação capítulo.</translation>
    </message>
    <message>
        <source>Credit title</source>
        <translation>Título de créditos</translation>
    </message>
    <message>
        <source>This type of slide is usually used at the end of the project as the end credits. </source>
        <translation>Este tipo de slide é usado geralmente no final do projecto, como os créditos finais.</translation>
    </message>
    <message>
        <source>The texts variables that are used by the models of this slide type are generally computed. For more information on texts variables, see: &lt;a href=&quot;0013.html&quot;&gt;Dynamic variables&lt;/a&gt;</source>
        <translation>As variáveis ​​de textos que são usados ​​pelas modelos deste tipo de slide são geralmente calculadas. Para mais informações sobre variáveis ​​de textos, veja: &lt;a href=&quot;0013.html&quot;&gt; Variáveis ​​dinâmicas &lt;/ a&gt;</translation>
    </message>
    <message>
        <source>Within each category, the predefined title slides are classified into the following types: </source>
        <translation>Dentro de cada categoria, os slides de título predefinidos são classificados nos seguintes tipos:</translation>
    </message>
    <message>
        <source>Statics models</source>
        <translation>Modelos estáticos</translation>
    </message>
    <message>
        <source>This type lists statics models ie without animations.</source>
        <translation>Este tipo de listas estática modelos ou seja, sem animações.</translation>
    </message>
    <message>
        <source>Animated models</source>
        <translation>Modelos animados</translation>
    </message>
    <message>
        <source>This type lists animated models ie with several shots.</source>
        <translation>Este tipo apresenta modelos animados ou seja, com vários tiros.</translation>
    </message>
    <message>
        <source>Custom models</source>
        <translation>Modelos personalizados</translation>
    </message>
    <message>
        <source>This type lists the templates that you saved with the &lt;B&gt;&lt;I&gt;Save as model&lt;/I&gt;&lt;/B&gt; function of the &lt;a href=&quot;0119.html&quot;&gt;Slide properties&lt;/a&gt; dialog box.</source>
        <translation>Este tipo lista os modelos que você salvou com o &lt;I&gt; &lt;B&gt; Salvar como modelo &lt;/I&gt; &lt;/B&gt; função da &lt;a href=&quot;0119.html&quot;&gt; caixa de diálogo propriedades do slide &lt;/a&gt;.</translation>
    </message>
    <message>
        <source>It will always be possible to create slides from a model using the &lt;a href=&quot;0103.html&quot;&gt;Add or modify a predefined title slide dialog box&lt;/a&gt; then convert it to a standard slide using this function: </source>
        <translation>Será sempre possível criar slides a partir de um modelo usando &lt;a href=&quot;0103.html&quot;&gt;Caixa de diálogo Adicionar ou modificar slide de título predefinido &lt;/a&gt;e, em seguida, convertê-lo em um slide padrão usando esta função:</translation>
    </message>
    <message>
        <source> Convert to standard slide</source>
        <translation>Converter para slide padrão</translation>
    </message>
    <message>
        <source>The resources used by the models you create are not moved. So, if you include a photo in a model, the model will only be valid until the picture will not move. This is why it is recommended, to think resources included before creating a new model.</source>
        <translation>Os recursos utilizados pelos modelos criados por si não são movidos. Então, se você incluir uma foto em um modelo, o modelo só será válida até que a imagem não se mova. Por isso, recomenda-se, que pense na utilização de recursos incluídos antes de criar um novo modelo.</translation>
    </message>
</context>
<context>
    <name>0013</name>
    <message>
        <source>Dynamic variables</source>
        <translation>Variáveis dinâmicas</translation>
    </message>
    <message>
        <source>It&apos;s why variables are used in many parts of the application (slide, thumbnails, predefined titles slides, video tags, xbmc nfo, etc...)</source>
        <translation>É por isso que as variáveis ​​são usados ​​em muitas partes da aplicação (slides, miniaturas, slides de títulos predefinidos, tags de vídeo, o XBMC nfo, etc ..)</translation>
    </message>
    <message>
        <source>Category</source>
        <translation>Categoria</translation>
    </message>
    <message>
        <source>Variable</source>
        <translation>Variável</translation>
    </message>
    <message>
        <source>Content</source>
        <translation>Conteúdo</translation>
    </message>
    <message>
        <source>Project properties values</source>
        <translation>Valores de propriedades do projeto</translation>
    </message>
    <message>
        <source>%PTT%</source>
        <translation>%PTT%</translation>
    </message>
    <message>
        <source>Value of the &lt;B&gt;&lt;I&gt;Project title&lt;/I&gt;&lt;/B&gt; field of the &lt;a href=&quot;0108.html&quot;&gt;Project properties&lt;/a&gt;</source>
        <translation>Valor do &lt;B&gt;&lt;I&gt; Título do Projeto &lt;/I&gt;&lt;/B&gt; campo das &lt;a href=&quot;0108.html&quot;&gt;Propriedades do projecto&lt;/a&gt;</translation>
    </message>
    <message>
        <source>%PAU%</source>
        <translation>%PAU%</translation>
    </message>
    <message>
        <source>Value of the &lt;B&gt;&lt;I&gt;Project author&lt;/I&gt;&lt;/B&gt; field of the &lt;a href=&quot;0108.html&quot;&gt;Project properties&lt;/a&gt;</source>
        <translation>Valor das &lt;B&gt;&lt;I&gt;Autor do projecto&lt;/I&gt; &lt;/B&gt; campo das &lt;a href=&quot;0108.html&quot;&gt;Propriedades do projecto&lt;/a&gt;</translation>
    </message>
    <message>
        <source>%PAI%</source>
        <translation>%PAI%</translation>
    </message>
    <message>
        <source>Value of the &lt;B&gt;&lt;I&gt;Project author&lt;/I&gt;&lt;/B&gt; field of the &lt;a href=&quot;0108.html&quot;&gt;Project properties&lt;/a&gt; displayed as &lt;U&gt;Author presents&lt;/U&gt;</source>
        <translation>Valor do &lt;B&gt;&lt;I&gt;Autor do projecto&lt;/I&gt;&lt;/B&gt; campo das &lt;a href=&quot;0108.html&quot;&gt;Propriedades do projecto&lt;/a&gt; exibido como &lt;U&gt;Autor apresenta&lt;/U&gt;</translation>
    </message>
    <message>
        <source>%PAP%</source>
        <translation>%PAP%</translation>
    </message>
    <message>
        <source>Value of the &lt;B&gt;&lt;I&gt;Project author&lt;/I&gt;&lt;/B&gt; field of the &lt;a href=&quot;0108.html&quot;&gt;Project properties&lt;/a&gt; displayed as &lt;U&gt;A Author production&lt;/U&gt;</source>
        <translation>Valor do &lt;B&gt;&lt;I&gt;Autor do projecto&lt;/I&gt;&lt;/B&gt; campo das &lt;a href=&quot;0108.html&quot;&gt;Propriedades do projecto&lt;/a&gt; exibido como &lt;U&gt;Uma produção Autor&lt;/ U&gt;</translation>
    </message>
    <message>
        <source>%PAL%</source>
        <translation>%PAL%</translation>
    </message>
    <message>
        <source>Value of the &lt;B&gt;&lt;I&gt;Project album&lt;/I&gt;&lt;/B&gt; field of the &lt;a href=&quot;0108.html&quot;&gt;Project properties&lt;/a&gt;</source>
        <translation>Valor do &lt;B&gt;&lt;I&gt;Álbum do projecto &lt;/I&gt; &lt;/B&gt; campo das &lt;a href=&quot;0108.html&quot;&gt;Propriedades do projecto&lt;/a&gt;</translation>
    </message>
    <message>
        <source>%PCT%</source>
        <translation>%PCT%</translation>
    </message>
    <message>
        <source>Value of the &lt;B&gt;&lt;I&gt;Project comment&lt;/I&gt;&lt;/B&gt; field of the &lt;a href=&quot;0108.html&quot;&gt;Project properties&lt;/a&gt;</source>
        <translation>Valor dos &lt;B&gt; &lt;I&gt; Comentários do projecto &lt;/ I&gt; &lt;/ B&gt; campo das &lt;a href=&quot;0108.html&quot;&gt; Propriedades do projecto &lt;/a&gt;</translation>
    </message>
    <message>
        <source>%PDD%</source>
        <translation>%PDD%</translation>
    </message>
    <message>
        <source>Duration of the project displayed as &lt;U&gt;hh:mm:ss&lt;/U&gt;</source>
        <translation>Duração do projecto apresentado em &lt;U&gt;hh:mm:ss&lt;/U&gt;</translation>
    </message>
    <message>
        <source>%PSC%</source>
        <translation>%PSC%</translation>
    </message>
    <message>
        <source>Project slide count (Number of slide in the project)</source>
        <translation>Contagem de slides do projecto (Número de slides no projeto)</translation>
    </message>
    <message>
        <source>%PLD%</source>
        <translation>%PLD%</translation>
    </message>
    <message>
        <source>Long date (The form of the display depends on geographical information provided by the computer, depending on the current language)</source>
        <translation>Data longa (A forma da exibição depende de informação geográfica fornecida pelo computador, dependendo da idioma corrente)</translation>
    </message>
    <message>
        <source>%PSD%</source>
        <translation>%PSD%</translation>
    </message>
    <message>
        <source>Short date (The form of the display depends on &lt;B&gt;&lt;I&gt;Short date format&lt;/I&gt;&lt;/B&gt; selected in the &lt;a href=&quot;0101.html&quot;&gt;Application options dialog&lt;/a&gt;)</source>
        <translation>Data abreviada (A forma da exibição depende do &lt;B&gt;&lt;I&gt;Formato de data abreviada&lt;/I&gt;&lt;/B&gt; selecionado na &lt;a href=&quot;0101.html&quot;&gt;Caixa de diálogo Opções da Aplicação&lt;/a&gt;)</translation>
    </message>
    <message>
        <source>%PYR%</source>
        <translation>%PYR%</translation>
    </message>
    <message>
        <source>Year (The year of the event date as a four digit number)</source>
        <translation>Year (O ano da data do evento como um número de quatro dígitos)</translation>
    </message>
    <message>
        <source>%PMM%</source>
        <translation>%PMM%</translation>
    </message>
    <message>
        <source>Month (The month of the event date as a name, depending on the current language: January, February, etc...)</source>
        <translation>Mês (o mês da data do evento como um nome, dependendo do idioma corrente: Janeiro, Fevereiro, etc ..)</translation>
    </message>
    <message>
        <source>%PMD%</source>
        <translation>%PMD%</translation>
    </message>
    <message>
        <source>Month as number (The month of the event date as a two digit number)</source>
        <translation>Mês como número (o mês da data do evento como um número de dois dígitos)</translation>
    </message>
    <message>
        <source>%PDY%</source>
        <translation>%PDY%</translation>
    </message>
    <message>
        <source>Day (The day of the event date as a two digit number)</source>
        <translation>Dia (O dia da data do evento como um número de dois dígitos)</translation>
    </message>
    <message>
        <source>%PDW%</source>
        <translation>%PDW%</translation>
    </message>
    <message>
        <source>Day of week (The day of week of the event date as a name, depending on the current language: Monday, Thuesday, etc...)</source>
        <translation>Dia da semana (o dia da semana da data do evento como um nome, dependendo do idioma corrente: Segunda-feira, Sábado, etc ..)</translation>
    </message>
    <message>
        <source>Current slide values</source>
        <translation>Valores do slide actual</translation>
    </message>
    <message>
        <source>%CSN%</source>
        <translation>%CSN%</translation>
    </message>
    <message>
        <source>Value of the &lt;B&gt;&lt;I&gt;Slide name&lt;/I&gt;&lt;/B&gt; field of the slide as defined in the &lt;U&gt;Slide settings zone&lt;/U&gt; of the &lt;a href=&quot;0119.html&quot;&gt;Slide properties dialog&lt;/a&gt;</source>
        <translation>Valor do &lt;B&gt;&lt;I&gt;Nome do slide&lt;/I&gt;&lt;/B&gt; campo do slide, tal como definido na &lt;U&gt;Zona de configurações de slides&lt;/U&gt; da &lt;a href=&quot;0119.html&quot;&gt;Caixa de diálogo propriedades do slide&lt;/a&gt;</translation>
    </message>
    <message>
        <source>%CSR%</source>
        <translation>%CSR%</translation>
    </message>
    <message>
        <source>Current slide number</source>
        <translation>Número do slide actual</translation>
    </message>
    <message>
        <source>Chapters values</source>
        <translation>Valores dos capítulos</translation>
    </message>
    <message>
        <source>%CCN%</source>
        <translation>%CCN%</translation>
    </message>
    <message>
        <source>Value of the &lt;B&gt;&lt;I&gt;Chapter name&lt;/I&gt;&lt;/B&gt; field of the latest slide which defined &lt;U&gt;Chapters information&lt;/U&gt;. (Chapters information may be defined in &lt;a href=&quot;0105.html&quot;&gt;Chapter properties dialog&lt;/a&gt; or in &lt;a href=&quot;0103.html&quot;&gt;Predefined title slide dialog&lt;/a&gt;).</source>
        <translation>Valor do &lt;B&gt;&lt;I&gt;Nome do Capítulo&lt;/I&gt;&lt;/B&gt; campo do último slide que definiu &lt;U&gt;Informações dos capítulos&lt;/U&gt;. (Informações dos capítulos pode ser definido em &lt;a href=&quot;0105.html&quot;&gt;Caixa diálogo de propriedades capítulo&lt;/a&gt; ou &lt;a href=&quot;0103.html&quot;&gt;Caixa de diálogo slide de título predefinidos&lt;/a&gt;).</translation>
    </message>
    <message>
        <source>%CCR%</source>
        <translation>%CCR%</translation>
    </message>
    <message>
        <source>Current chapter number</source>
        <translation>Número do capítulo actual</translation>
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
        <translation>Duração do Capítulo actual</translation>
    </message>
    <message>
        <source>%CCT%</source>
        <translation>%CCT%</translation>
    </message>
    <message>
        <source>Chapter count (Number of chapter in the project)</source>
        <translation>Contagem Capítulos (Número de capítulos no projecto)</translation>
    </message>
    <message>
        <source>%CLD%</source>
        <translation>%CLD%</translation>
    </message>
    <message>
        <source>Long date of the chapter (if one is defined or project&apos;s date). (The form of the display depends on geographical information provided by the computer, depending on the current language)</source>
        <translation>Data longa do capítulo (se estiver definido ou Data do projecto). (A forma da exibição depende de informação geográfica fornecida pelo computador, dependendo do idioma corrente)</translation>
    </message>
    <message>
        <source>%CSD%</source>
        <translation>%CSD%</translation>
    </message>
    <message>
        <source>Short date of the chapter (if one is defined or project&apos;s date). (The form of the display depends on &lt;B&gt;&lt;I&gt;Short date format&lt;/I&gt;&lt;/B&gt; selected in the &lt;a href=&quot;0101.html&quot;&gt;Application options dialog&lt;/a&gt;)</source>
        <translation>Data abreviada do capítulo (se estiver definido ou Data do projecto). (A forma de exibição depende &lt;B&gt;&lt;I&gt;Formato de data abreviada&lt;/I&gt;&lt;/B&gt; selecionado na &lt;a href=&quot;0101.html&quot;&gt;Caixa de diálogo Opções da Aplicação&lt;/a&gt;)</translation>
    </message>
    <message>
        <source>%CYR%</source>
        <translation>%CYR%</translation>
    </message>
    <message>
        <source>Year of the chapter&apos;s date (if one is defined or year of project&apos;s date), as a four digit number.</source>
        <translation>Ano da data dos capítulos (se estiver definido ou ano da data do projecto), como um número de quatro dígitos.</translation>
    </message>
    <message>
        <source>%CMM%</source>
        <translation>%CMM%</translation>
    </message>
    <message>
        <source>Month of the chapter&apos;s date (if one is defined or month of project&apos;s date) as a name (depending on the current language: January, February, etc...)</source>
        <translation>Mês da Data dos capítulos (se estiver definido ou meses de Data do projecto) como um nome (dependendo do idioma atual: Janeiro, Fevereiro, etc ..)</translation>
    </message>
    <message>
        <source>%CMD%</source>
        <translation>%CMD%</translation>
    </message>
    <message>
        <source>Month of the chapter&apos;s date (if one is defined or month of project&apos;s date) as a two digit number.</source>
        <translation>Mês da Data dos capítulos (se estiver definido ou meses da Data do projecto) como um número de dois dígitos.</translation>
    </message>
    <message>
        <source>%CDY%</source>
        <translation>%CDY%</translation>
    </message>
    <message>
        <source>Day of the chapter&apos;s date (if one is defined or day of project&apos;s date) as a two digit number.</source>
        <translation>Dia da Data dos capítulos (se estiver definido ou dia da Data do projecto) como um número de dois dígitos.</translation>
    </message>
    <message>
        <source>%CDW%</source>
        <translation>%CDW%</translation>
    </message>
    <message>
        <source>Day of week of the chapter&apos;s date (if one is defined or day of project&apos;s date) as a a name (depending on the current language: Monday, Thuesday, etc...)</source>
        <translation>Dia da semana da data dos capítulos (se estiver definido ou dia da Data do projecto) como o nome aa (dependendo da linguagem corrente: Segunda-feira, Sábado, etc ..)</translation>
    </message>
    <message>
        <source>Various values</source>
        <translation>Vários valores</translation>
    </message>
    <message>
        <source>%FFD%</source>
        <translation>%FFD%</translation>
    </message>
    <message>
        <source>ffDiaporama version as &lt;U&gt;ffDiaporama 1.7 (20130919)&lt;/U&gt;</source>
        <translation>Versão ffDiaporama como &lt;U&gt;ffDiaporama 1.7 (20130919)&lt;/U&gt;</translation>
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
        <translation>Fim (dependendo da linguagem corrente)</translation>
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
        <translation>Um texto completo composto por estatísticas do projecto (número de slides, duração do projecto, a lista de capítulos, a lista de músicas, quantas fotos, imagens vetoriais, vídeos e slides de título predefinidos, etc ..)</translation>
    </message>
    <message>
        <source>%STM%</source>
        <translation>%STM%</translation>
    </message>
    <message>
        <source>A full text composed of list of musics</source>
        <translation>Um texto completo composto de uma lista das músicas</translation>
    </message>
    <message>
        <source>%TLD%</source>
        <translation>%TLD%</translation>
    </message>
    <message>
        <source>Current date as long date format (The form of the display depends on geographical information provided by the computer, depending on the current language)</source>
        <translation>Data actual como o formato Data longa (A forma da exibição depende de informação geográfica fornecida pelo computador, dependendo do idioma corrente)</translation>
    </message>
    <message>
        <source>%TSD%</source>
        <translation>%TSD%</translation>
    </message>
    <message>
        <source>Current date as short date format (The form of the display depends on &lt;B&gt;&lt;I&gt;Short date format&lt;/I&gt;&lt;/B&gt; selected in the &lt;a href=&quot;0101.html&quot;&gt;Application options dialog&lt;/a&gt;)</source>
        <translation>Data actual no formato de data abreviada (A forma da tela depende do &lt;B&gt;&lt;I&gt;Formato de data abreviada&lt;/I&gt;&lt;/B&gt; selecionado na &lt;a href=&quot;0101.html&quot;&gt;Caixa de diálogo Opções do aplicativo&lt;/a&gt;)</translation>
    </message>
    <message>
        <source>%TYR%</source>
        <translation>%TYR%</translation>
    </message>
    <message>
        <source>Current date&apos;s year as a four digit number</source>
        <translation>Ano da data actual com um número de quatro dígitos</translation>
    </message>
    <message>
        <source>%TMM%</source>
        <translation>%TMM%</translation>
    </message>
    <message>
        <source>Current date&apos;s month as a name (depending on the current language: January, February, etc...)</source>
        <translation>Mês da data actual com um nome (dependendo do idioma atual: Janeiro, Fevereiro, etc ..)</translation>
    </message>
    <message>
        <source>%TMD%</source>
        <translation>%TMD%</translation>
    </message>
    <message>
        <source>Current date&apos;s month as as a two digit number</source>
        <translation>Mês da Data actual, como um número de dois dígitos</translation>
    </message>
    <message>
        <source>%TDY%</source>
        <translation>%TDY%</translation>
    </message>
    <message>
        <source>Current date&apos;s day as a two digit number</source>
        <translation>Dia actual com um número de dois dígitos</translation>
    </message>
    <message>
        <source>%TDW%</source>
        <translation>%TDW%</translation>
    </message>
    <message>
        <source>Current date&apos;s day of week as a a name (depending on the current language: Monday, Thuesday, etc...)</source>
        <translation>Dia da data actual da semana como um nome (dependendo do idioma corrente: Segunda-feira, Sábado, etc ..)</translation>
    </message>
    <message>
        <source>%PLN%</source>
        <translation>%PLN%</translation>
    </message>
    <message>
        <source>Value of the &lt;B&gt;&lt;I&gt;Project location name&lt;/I&gt;&lt;/B&gt; field of the &lt;a href=&quot;0108.html&quot;&gt;Project properties&lt;/a&gt;</source>
        <translation>Valor do &lt;B&gt;&lt;I&gt;Nome do local do Projecto&lt;/I&gt;&lt;/B&gt; campo de &lt;a href=&quot;0108.html&quot;&gt; Propriedades do Projecto &lt;/a&gt;</translation>
    </message>
    <message>
        <source>%PLA%</source>
        <translation>%PLA%</translation>
    </message>
    <message>
        <source>Value of the &lt;B&gt;&lt;I&gt;Project location address&lt;/I&gt;&lt;/B&gt; field of the &lt;a href=&quot;0108.html&quot;&gt;Project properties&lt;/a&gt;</source>
        <translation>Valor do &lt;B&gt;&lt;I&gt;Nome da morada do local do Projecto&lt;/I&gt;&lt;/B&gt; campo de &lt;a href=&quot;0108.html&quot;&gt; Propriedades do Projecto &lt;/a&gt;</translation>
    </message>
    <message>
        <source>%CLN%</source>
        <translation>%CLN%</translation>
    </message>
    <message>
        <source>Current chapter location name (if one is defined or project&apos;s location name).</source>
        <translation>Nome da localização do capítulo actual (se estiver definido ou nome do local do do projeto).</translation>
    </message>
    <message>
        <source>%CLA%</source>
        <translation>%CLA%</translation>
    </message>
    <message>
        <source>Current chapter location address (if one is defined or project&apos;s location address).</source>
        <translation>Nome  do endereço do local do capítulo actual (se estiver definido ou nome do endereço do local do do projeto).</translation>
    </message>
    <message>
        <source>The following table lists all the available variables:</source>
        <translation>A tabela seguinte lista todas as variáveis ​​disponíveis:</translation>
    </message>
    <message>
        <source>The big interest of variables is that they are inserted into text (see: &lt;a href=&quot;0120.html&quot;&gt;Edit text dialog&lt;/a&gt;) and are transformed into values ​​only when they are used.</source>
        <translation>O grande interesse de variáveis é que elas são inseridos no texto (ver: &lt;a href=&quot;0120.html&quot;&gt;Editar texto diálogo&lt;/a&gt;) e são transformados em valores apenas quando eles são usados.</translation>
    </message>
    <message>
        <source>Current chapter number displayed as &lt;U&gt;Chapter N°&lt;/U&gt; (depending on the current language)</source>
        <translation>Número do capítulo actual é exibido como &lt;U&gt;Capítulo N ° &lt;/U&gt; (dependendo do idioma corrente)</translation>
    </message>
    <message>
        <source>Copyright of the project construct as &lt;U&gt;© Year - Author&lt;/U&gt; with &lt;B&gt;&lt;I&gt;Year&lt;/I&gt;&lt;/B&gt; is the year of today&apos;s date and &lt;B&gt;&lt;I&gt;Author&lt;/I&gt;&lt;/B&gt; is the value of the &lt;B&gt;&lt;I&gt;Project author&lt;/I&gt;&lt;/B&gt; field of the &lt;a href=&quot;0108.html&quot;&gt;Project properties&lt;/a&gt;</source>
        <translation>Direitos de autor do projecto construido como &lt;U&gt;© Ano - Autor&lt;/U&gt; com &lt;B&gt;&lt;I&gt;Ano&lt;/I&gt;&lt;/B&gt; é o ano da data de hoje e &lt;B&gt;&lt;I&gt;Autor&lt;/I&gt;&lt;/B&gt; é o valor do &lt;B&gt; &lt;I&gt;Autor do Projecto&lt;/I&gt;&lt;/B&gt; campo de &lt;a href=&quot;0108.html&quot;&gt;Propriedades do Projecto&lt;/a&gt;</translation>
    </message>
    <message>
        <source>A full text composed of: Project done the &lt;U&gt;&lt;B&gt;&lt;I&gt;short date&lt;/I&gt;&lt;/B&gt;&lt;/U&gt; with «&lt;U&gt;&lt;B&gt;&lt;I&gt;ffDiaporama version&lt;/I&gt;&lt;/B&gt;&lt;/U&gt;» on a &lt;U&gt;&lt;B&gt;&lt;I&gt;Operating system&lt;/I&gt;&lt;/B&gt;&lt;/U&gt; (&lt;U&gt;&lt;B&gt;&lt;I&gt;Number of Core/CPU&lt;/I&gt;&lt;/B&gt;&lt;/U&gt; Core/CPU) computer.</source>
        <translation>O texto completo composto por: Projecto realizado a &lt;U&gt;&lt;B&gt;&lt;I&gt;data abreviada&lt;/I&gt;&lt;/B&gt;&lt;/U&gt; com «&lt;U&gt;&lt;B&gt;&lt;I&gt;ffDiaporama versão&lt;/I&gt;&lt;/B&gt;&lt;/U&gt;»num &lt;U&gt;&lt;B&gt;&lt;I&gt; sistema operacional&lt;/I&gt;&lt;/B&gt;&lt;/U&gt; (&lt;U&gt;&lt;B&gt;&lt;I&gt;Número de Núcleo/CPU&lt;/I&gt;&lt;/B&gt;&lt;/U&gt; Núcleo/CPU) do computador.</translation>
    </message>
</context>
<context>
    <name>0014</name>
    <message>
        <source>The &quot;Visible&quot; property of blocks and the management of the breaks</source>
        <translation>A propriedade &quot;Visível&quot; dos blocos e a gestão das pausas</translation>
    </message>
    <message>
        <source>Blocks have a visible/invisible property. In the following example, the one image is inserted 3 times (in 3 different blocks) into the same slide.</source>
        <translation>Blocos têm uma propriedade visível / invisível. No exemplo a seguir, uma imagem que se está inserida três vezes (em três blocos diferentes) no mesmo slide.</translation>
    </message>
    <message>
        <source>The first block consists of the whole image filling the whole screen</source>
        <translation>O primeiro bloco é composto por toda a imagem preenchendo toda a tela</translation>
    </message>
    <message>
        <source>The second block consists of the image re-framed on the statue and positioned in an ellipse at the right of the screen</source>
        <translation>O segundo bloco é composto por uma imagem emoldurada sobre a imagem e posicionado em uma elipse no lado direito do ecrã</translation>
    </message>
    <message>
        <source>The third block consists of the image re-framed on the pedestrians and also positioned in an ellipse at the right of the screen</source>
        <translation>O terceiro bloco é constituído por uma imagem emoldurada sobre os peões e também posicionado em uma elipse no lado direito do ecrã</translation>
    </message>
    <message>
        <source>The statue and the pedestrians have their visibility property set to invisible on the 1st shot.</source>
        <translation>A estátua e os pedestres têm a sua propriedade de visibilidade definida como invisível no primeiro disparo.</translation>
    </message>
    <message>
        <source>Then the statue becomes visible on the 2nd shot.</source>
        <translation>Então a estátua torna-se visível no segundo disparo.</translation>
    </message>
    <message>
        <source>Finally, the statue once more becomes invisible on the 3rd shot and the pedestrians become visible.</source>
        <translation>Finalmente, a estátua mais uma vez torna-se invisível no terceiro disparo e os pedestres se tornam visíveis.</translation>
    </message>
    <message>
        <source>Result:</source>
        <translation>Resultado:</translation>
    </message>
    <message>
        <source>For 2 seconds, the 1st shot is shown and we see only the whole image which occupies all the screen</source>
        <translation>Durante 2 segundos, o primeiro disparo é mostrado e vemos apenas toda a imagem que ocupa toda a tela</translation>
    </message>
    <message>
        <source>Over the next 2 seconds, the statue appears</source>
        <translation>Durante os próximos 2 segundos, a estátua aparece</translation>
    </message>
    <message>
        <source>Over a further 2 seconds, the statue is replaced by the pedestrians</source>
        <translation>Ao longo de mais 2 segundos, a estátua é substituído pelos pedestres</translation>
    </message>
    <message>
        <source>This example is really very simple, because it is also possible to animate the appearance and the disappearance of blocks.</source>
        <translation>Este exemplo é muito simples, porque também é possível animar o aparecimento e desaparecimento de blocos.</translation>
    </message>
    <message>
        <source>Indeed, as shown previously, animations are generated by the transformation of the arrangement from one shot to another.</source>
        <translation>De facto, como foi mostrado anteriormente, as animações são gerados pela transformação do arranjo de um disparo para outro.</translation>
    </message>
    <message>
        <source>So, if on the 1st shot, the statue occupied the left lower quarter of the screen rather than the same position as on the 2nd shot, then instead of simply appearing for 2 seconds on the 2nd shot, it would appear by growing out of the left lower quarter of the screen.</source>
        <translation>Assim, se no primeiro disparo, a estátua ocupava o quarto inferior esquerdo da tela, em vez de a mesma posição sobre o segundo disparo, em seguida, em vez de simplesmente aparecer por 2 segundos sobre o segundo disparo,  parece por que cresce para fora do quarto inferior esquerdo da tela.</translation>
    </message>
    <message>
        <source>Using videos:</source>
        <translation>Usando vídeos:</translation>
    </message>
    <message>
        <source>You should note that videos are paused when they are invisible.</source>
        <translation>Você deve ter notado que os vídeos são pausados ​​quando eles são invisíveis.</translation>
    </message>
    <message>
        <source>Therefore a video can be displayed for several seconds in the 1st shot, then be made invisible and thus paused in a 2nd shot, then be visible in a 3rd shot and resume playing, from where it stopped at the end of the 1st shot.</source>
        <translation>Portanto, um vídeo pode ser exibido por alguns segundos no primeiro disparo, em seguida, ser invisível e, assim, fazer uma pausa num segundo disparo,e  em seguida, ser visível num terceiro disparo e continuar a rodar, a partir de onde parou, no final do primeiro disparo.</translation>
    </message>
</context>
<context>
    <name>0015</name>
    <message>
        <source>All shots regulations versus current shot regulations</source>
        <translation>Regras “Todas os disparos” versus “Disparo actual”</translation>
    </message>
    <message>
        <source>&lt;B&gt;The settings which apply to the current shot.&lt;/B&gt; These settings are made shot by shot. So, every shot possesses its own settings and the passage from a shot to the other one is defined by the passage from one setting to an other one creating a shot animation: these are called Ken Burns effects. Here are some some: </source>
        <translation>&lt;B&gt;As configurações que se aplicam ao disparo actual.&lt;/B&gt; Essas configurações são feitas disparo por disparo. Assim, cada disparo possui suas próprias configurações e a passagem de um disparo para o outro é definido pela passagem de um cenário para uma outro criando uma animação no disparo: estes são chamados efeitos Ken Burns. Aqui estão algumas:</translation>
    </message>
    <message>
        <source>Zoom on a portion of the image</source>
        <translation>Zoom numa parte da imagem</translation>
    </message>
    <message>
        <source>Scrolling from a portion of the image to an other one</source>
        <translation>Deslizar a partir de uma porção da imagem a uma outra</translation>
    </message>
    <message>
        <source>Clarification or darkening of a portion of the image</source>
        <translation>A clarificação ou escurecimento de uma porção da imagem</translation>
    </message>
    <message>
        <source>etc...</source>
        <translation>etc...</translation>
    </message>
    <message>
        <source>There are two types of settings in the &lt;a href=&quot;0119.html&quot;&gt;Slide properties dialog&lt;/a&gt;:</source>
        <translation>Há dois tipos de configurações na &lt;a href=&quot;0119.html&quot;&gt;Caixa de diálogo Propriedades do slide&lt;/a&gt;:</translation>
    </message>
    <message>
        <source>&lt;B&gt;The settings which apply to all shots.&lt;/B&gt; These settings are made globally, that is their effects will be visible on all the shots of the slide. Here are some: </source>
        <translation>&lt;B&gt;As configurações que se aplicam a todos os disparos.&lt;/B&gt; Essas configurações são feitas globalmente, em que os seus efeitos serão visíveis em todos os disparos do slide. Aqui estão algumas:</translation>
    </message>
    <message>
        <source>Text and text format</source>
        <translation>Texto e formato de texto</translation>
    </message>
    <message>
        <source>Shape form</source>
        <translation>Moldar forma</translation>
    </message>
</context>
<context>
    <name>0016</name>
    <message>
        <source>Style sheets</source>
        <translation>Folhas de estilo</translation>
    </message>
    <message>
        <source>ffDiaporama uses a style sheet system to facilitate the settings for various things.</source>
        <translation>ffDiaporama usa um sistema de folha de estilo para facilitar os ajustes para várias coisas.</translation>
    </message>
    <message>
        <source>Style sheets exist for:</source>
        <translation>Existem folhas de estilo para:</translation>
    </message>
    <message>
        <source>Controlling the block coordinates, including the parameters of size, position and block rotation, and also the framing style.</source>
        <translation>Controlar as coordenadas do bloco, incluindo os parâmetros de tamanho, posição e rotação do bloco, e também o estilo de enquadramento.</translation>
    </message>
    <message>
        <source>Controlling the block shape, which includes the parameters of form, opacity, shadow and block borders.</source>
        <translation>Controlando a forma de um bloco, que inclui os parâmetros de forma, a opacidade, a sombra e bloqueio das fronteiras.</translation>
    </message>
    <message>
        <source>Controlling image framing, which includes the parameters of geometrical constraint and size.</source>
        <translation>Controlando o enquadramento de imagem, o qual inclui os parâmetros de restrição e tamanho geométrico.</translation>
    </message>
    <message>
        <source>Formatting text, which includes the parameters of font, character attributes, alignment and text shadow.</source>
        <translation>Formatação de texto, o que inclui os parâmetros da fonte, atributos de caracteres, alinhamento e sombra texto.</translation>
    </message>
    <message>
        <source>Controlling text background, which includes the parameters of background (color, brush, etc.).</source>
        <translation>Controlando o fundo do texto, que inclui os parâmetros de fundo (cor, pincel, etc.).</translation>
    </message>
    <message>
        <source> Open the style menu:</source>
        <translation>Abre o menu de estilo:</translation>
    </message>
    <message>
        <source>The first part of the menu lists the known styles. </source>
        <translation>A primeira parte do menu lista os estilos conhecidos.</translation>
    </message>
    <message>
        <source>If the current settings correspond to a known style, this style is marked with an asterisk.</source>
        <translation>Se as definições actuais correspondem a um estilo conhecido, este modelo está marcado com um asterisco.</translation>
    </message>
    <message>
        <source>The standard styles of ffDiaporama are marked with this icon: </source>
        <translation>Os estilos padrão de ffDiaporama são marcados com o ícone: </translation>
    </message>
    <message>
        <source>Standard styles that you have modified and styles which you created are marked with this icon: </source>
        <translation>Estilos padrão que você modificou e estilos que você criou são marcados com o ícone: </translation>
    </message>
    <message>
        <source>The second part of the menu allows you to modify the style list. </source>
        <translation>A segunda parte do menu permite que você modifique a lista de estilos. </translation>
    </message>
    <message>
        <source>Create a new style: allows you to create a new style with the current settings. When you select this option, a dialog appears asking you to name the new style.</source>
        <translation>Criar um novo estilo: permite que você crie um novo estilo com as configurações actuais. Ao seleccionar esta opção, uma caixa de diálogo pedindo-lhe para nomear o novo estilo.</translation>
    </message>
    <message>
        <source>Modify an existing style: allows you to change the settings of an existing style by using the current settings. When you select this option, the list of known styles appears. Select the style to be modified.</source>
        <translation>Modificar um estilo existente: permite que você altere as configurações de um estilo existente, usando as configurações atuais. Ao seleccionar esta opção, aparece a lista de estilos conhecidos. Seleccione o estilo a ser modificado.</translation>
    </message>
    <message>
        <source>Manage styles: opens the Manage style dialog.</source>
        <translation>Gerir estilos: abre a caixa de diálogo Gerir estilos.</translation>
    </message>
</context>
<context>
    <name>0020</name>
    <message>
        <source>Interface description</source>
        <translation>Interface - Descrição</translation>
    </message>
    <message>
        <source> This section contains information about using ffDiaporama. </source>
        <translation>Esta seção contém informações sobre a utilização do ffDiaporama.</translation>
    </message>
    <message>
        <source>Index</source>
        <translation>Índice</translation>
    </message>
    <message>
        <source>The main window</source>
        <translation>A janela principal</translation>
    </message>
    <message>
        <source>The toolbar</source>
        <translation>A barra de ferramentas</translation>
    </message>
    <message>
        <source>The timeline</source>
        <translation>A linha do tempo</translation>
    </message>
    <message>
        <source>The multimedia file browser</source>
        <translation>O navegador de arquivos multimédia</translation>
    </message>
    <message>
        <source>Dialog boxes</source>
        <translation>Caixas de diálogo</translation>
    </message>
    <message>
        <source>Application options</source>
        <translation>Opções da aplicação</translation>
    </message>
    <message>
        <source>Manage devices</source>
        <translation>Gerir dispositivos</translation>
    </message>
    <message>
        <source>Add or modify a predefined title slide</source>
        <translation>Adicionar ou modificar um slide de título predefinido</translation>
    </message>
    <message>
        <source>Background properties</source>
        <translation>Propriedades do fundo</translation>
    </message>
    <message>
        <source>Chapter properties</source>
        <translation>Propriedades do Capítulo</translation>
    </message>
    <message>
        <source>Check configuration</source>
        <translation>Verificar a configuração</translation>
    </message>
    <message>
        <source>Export project</source>
        <translation>Exportar projecto</translation>
    </message>
    <message>
        <source>Project properties</source>
        <translation>Projecto - propriedades</translation>
    </message>
    <message>
        <source>Select files</source>
        <translation>Selecione os arquivos</translation>
    </message>
    <message>
        <source>Correct, reframe or cut image or video</source>
        <translation>Corrigir, reenquadrar ou cortar imagem ou vídeo</translation>
    </message>
    <message>
        <source>File information</source>
        <translation>Informações do ficheiro</translation>
    </message>
    <message>
        <source>Manage favorite</source>
        <translation>Gerir favoritos</translation>
    </message>
    <message>
        <source>Manage style</source>
        <translation>Gerir estilos</translation>
    </message>
    <message>
        <source>Music properties</source>
        <translation>Propriedades da música</translation>
    </message>
    <message>
        <source>Render video</source>
        <translation>Renderização de vídeos</translation>
    </message>
    <message>
        <source>Ruler properties</source>
        <translation>Propriedades das réguas</translation>
    </message>
    <message>
        <source>Edit thumbnail model</source>
        <translation>Editar modelo de miniaturas</translation>
    </message>
    <message>
        <source>Set first shot duration for a set of slides</source>
        <translation>Define a duração do primeiro disparo para um conjunto de slides</translation>
    </message>
    <message>
        <source>Slide properties</source>
        <translation>Propriedades dos slides</translation>
    </message>
    <message>
        <source>Edit text</source>
        <translation>Editar texto</translation>
    </message>
    <message>
        <source>Select transition duration for a set of slides</source>
        <translation>Selecione duração da transição para um conjunto de slides</translation>
    </message>
    <message>
        <source>Transition properties</source>
        <translation>Propriedades das transições</translation>
    </message>
    <message>
        <source>Configuration dialog boxes</source>
        <translation>Caixas de diálogo de configuração</translation>
    </message>
    <message>
        <source>Editing dialog boxes</source>
        <translation>Edição de caixas de diálogo</translation>
    </message>
    <message>
        <source>Dialog boxes related to the project</source>
        <translation>Caixas de diálogo relacionados com o projecto</translation>
    </message>
    <message>
        <source>Various dialog boxes</source>
        <translation>Várias caixas de diálogo</translation>
    </message>
    <message>
        <source>Add or modify a location</source>
        <translation>Adicionar ou modificar uma localização</translation>
    </message>
    <message>
        <source>Cut a sound file</source>
        <translation>Corte dum ficheiro de som</translation>
    </message>
</context>
<context>
    <name>0021</name>
    <message>
        <source>The main window</source>
        <translation>A janela principal</translation>
    </message>
    <message>
        <source>The main window of ffDiaporama allows all the common tasks of slide management.</source>
        <translation>A janela principal do ffDiaporama permite aceder a todas as tarefas comuns de gestão do slide.</translation>
    </message>
    <message>
        <source>The general principle is:</source>
        <translation>O princípio geral é:</translation>
    </message>
    <message>
        <source>Add files and titles to the &lt;a href=&quot;0023.html&quot;&gt;timeline&lt;/a&gt; in the form of slides</source>
        <translation>Adicionar ficheiros e títulos para a &lt;a href=&quot;0023.html&quot;&gt;linha do tempo&lt;/a&gt; na forma de slides</translation>
    </message>
    <message>
        <source>Organize slides</source>
        <translation>Organizar slides</translation>
    </message>
    <message>
        <source>Adjust slides and create animations</source>
        <translation>Ajustar slides e criar animações</translation>
    </message>
    <message>
        <source>To manage slides, ffDiaporama provides three display modes:</source>
        <translation>Para gerir slides, ffDiaporama oferece três modos de exibição:</translation>
    </message>
    <message>
        <source>File mode</source>
        <translation>Modo de arquivo</translation>
    </message>
    <message>
        <source>In this mode, the main window is divided into 3 zones: </source>
        <translation>Neste modo, a janela principal é dividida em três zonas:</translation>
    </message>
    <message>
        <source>The &lt;a href=&quot;0023.html&quot;&gt;timeline&lt;/a&gt;</source>
        <translation>A  &lt;a href=&quot;0023.html&quot;&gt;linha do tempo&lt;/a&gt;</translation>
    </message>
    <message>
        <source>The &lt;a href=&quot;0024.html&quot;&gt;multimedia file browser&lt;/a&gt;</source>
        <translation>O &lt;a href=&quot;0024.html&quot;&gt;navegador de ficheiros multimédia&lt;/a&gt;</translation>
    </message>
    <message>
        <source> In this mode, you can display the multimedia files present on your hard disks and insert them using Drag &amp; Drop into the &lt;a href=&quot;0023.html&quot;&gt;timeline&lt;/a&gt; to create your slide show. </source>
        <translation>Neste modo, você pode exibir os ficheiros multimédia presentes nos seus discos rígidos e inseri-los usando “Arrastar e soltar” (Drag &amp; Drop) na &lt;a href=&quot;0023.html&quot;&gt;linha do tempo&lt;/a&gt; para criar o seu slide show (apresentação de diapositivos).</translation>
    </message>
    <message>
        <source>A small multimedia player is displayed above on the right, near the toolbar and menu, to allow you to preview the slide show. </source>
        <translation>Um pequeno leitor multimédia é exibido acima do lado direito, perto da barra de ferramentas e menu, para permitir que você visualize a apresentação de slides.</translation>
    </message>
    <message>
        <source>Sheet mode</source>
        <translation>Modo Folha</translation>
    </message>
    <message>
        <source>In this mode, the main window is divided into 2 zones: </source>
        <translation>Neste modo, a janela principal é dividida em duas zonas:</translation>
    </message>
    <message>
        <source> In this mode, the &lt;a href=&quot;0023.html&quot;&gt;timeline&lt;/a&gt; is displayed on several lines to show as much slides as possible of the slide show. Slides are shown as on a musical score, in the form of line and at the end of a line, we pass over to the beginning og the following line. </source>
        <translation>Neste modo, a &lt;a href=&quot;0023.html&quot;&gt;linha do tempo&lt;/a&gt; é exibida em várias linhas para mostrar o máximo possível de slides da apresentação de slides. Os slides são mostrados como em uma contagem musical, sob a forma de linha e no fim de uma linha, que passa para o início da linha seguinte.</translation>
    </message>
    <message>
        <source>You can reorganize your slides by moving them using Drag &amp; Drop within the &lt;a href=&quot;0023.html&quot;&gt;timeline&lt;/a&gt;. </source>
        <translation>Você pode reorganizar os seus slides, movendo-os usando “Arrastar e soltar” (Drag &amp; Drop) dentro da &lt;a href=&quot;0023.html&quot;&gt;linha do tempo&lt;/a&gt;. </translation>
    </message>
    <message>
        <source>Preview mode</source>
        <translation>Modo de pré-visualização</translation>
    </message>
    <message>
        <source>A big multimedia player</source>
        <translation>Um leitor de multimédia grande</translation>
    </message>
    <message>
        <source> In this mode, you can preview your slide show in big size. </source>
        <translation>Neste modo, você pode visualizar a apresentação de slides em tamanho grande.</translation>
    </message>
    <message>
        <source>You can modify your slides and preview your changes in the multimedia player </source>
        <translation>Você pode modificar seus slides e visualizar as suas alterações no leitor multimédia</translation>
    </message>
    <message>
        <source>To change display mode, use the buttons located in the status bar, to the right, at the bottom of the main window.</source>
        <translation>Para alterar o modo de exibição, use os botões localizados na barra de estado, para a direita, na parte inferior da janela principal.</translation>
    </message>
    <message>
        <source> Switch display to file mode</source>
        <translation>Mudar exibição para modo de arquivo</translation>
    </message>
    <message>
        <source> Switch display to sheet mode</source>
        <translation>Mudar exibição para modo folha</translation>
    </message>
    <message>
        <source> Switch display to preview mode</source>
        <translation>Mudar exibição para modo de pré-visualização</translation>
    </message>
    <message>
        <source>The editing of slides is done:</source>
        <translation>A edição de slides é feita:</translation>
    </message>
    <message>
        <source>by using contextual menus (right click on an element)</source>
        <translation>Usando menus contextuais (botão direito do mouse em um elemento)</translation>
    </message>
    <message>
        <source>by double clicking on elements of the slide</source>
        <translation>Clicando duas vezes sobre elementos do slide</translation>
    </message>
    <message>
        <source>The &lt;a href=&quot;0022.html&quot;&gt;toolbar&lt;/a&gt; and menu at the top</source>
        <translation>A &lt;a href=&quot;0022.html&quot;&gt;barra de ferramentas&lt;/a&gt; e menu no topo</translation>
    </message>
    <message>
        <source>by using the buttons of the &lt;a href=&quot;0022.html&quot;&gt;toolbar&lt;/a&gt;</source>
        <translation>usando os botões da &lt;a href=&quot;0022.html&quot;&gt;barra de ferramentas&lt;/a&gt;</translation>
    </message>
</context>
<context>
    <name>0022</name>
    <message>
        <source>The toolbar</source>
        <translation>A barra de ferramentas</translation>
    </message>
    <message>
        <source>These buttons are grouped under four tabs: File / Project / Render and Help</source>
        <translation>Estes botões são agrupados em quatro separadores ou abas:Ficheiro / Projecto /Renderizar vídeo e Ajuda</translation>
    </message>
    <message>
        <source>The project management commands</source>
        <translation>Os comandos de gestão de projectos</translation>
    </message>
    <message>
        <source>The following table summarizes the main project management commands:</source>
        <translation>Os comandos de gestão de projectos são resumidos na tabela seguinte:</translation>
    </message>
    <message>
        <source>Toolbar button</source>
        <translation>Botão da barra</translation>
    </message>
    <message>
        <source>Project menu command</source>
        <translation>Comando menu do projecto</translation>
    </message>
    <message>
        <source>Keyboard shortcut</source>
        <translation>Atalho de teclado</translation>
    </message>
    <message>
        <source>Action</source>
        <translation>Acção</translation>
    </message>
    <message>
        <source>New</source>
        <translation>Novo projecto</translation>
    </message>
    <message>
        <source>CTRL+N</source>
        <translation>CTRL+N</translation>
    </message>
    <message>
        <source>(If the current project has unsaved modifications, ffDiaporama prompts you to save it.)</source>
        <translation>( Se o projecto actual têm modificações por salvar, ffDiaporama pede-lhe para salvá-lo.)</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Abrir projecto</translation>
    </message>
    <message>
        <source>CTRL+O</source>
        <translation>CTRL+O</translation>
    </message>
    <message>
        <source>Allows you to open an existing project. The file selection dialog appears and allows you to select the project to be opened. </source>
        <translation>Permite que você abra um projecto existente. O diálogo de selecção de arquivo aparece e permite que você seleccione o projecto a ser aberto.</translation>
    </message>
    <message>
        <source>(If the current project has unsaved modifications, ffDiaporama prompts you to save it.) </source>
        <translation>( Se o projecto actual têm modificações por salvar, ffDiaporama pede-lhe para salvá-lo.)</translation>
    </message>
    <message>
        <source>Remark: if the project contains files which were moved or renamed, ffDiaporama will fail to open them again. In that case, a dialog appears allowing you to select a new file.</source>
        <translation>Observação: se o projecto contém arquivos que foram movidos ou renomeados, ffDiaporama vai deixar de abri-los novamente. Nesse caso, uma caixa de diálogo aparece permitindo que você seleccione um novo arquivo.</translation>
    </message>
    <message>
        <source>Open recent</source>
        <translation>Abrir recente</translation>
    </message>
    <message>
        <source>Allows you to reopen a recently opened project. ffDiaporama stores a list of the last ten projects.</source>
        <translation>Permite reabrir um projecto recentemente salvo. ffDiaporama armazena uma lista dos últimos dez projectos.</translation>
    </message>
    <message>
        <source>Save</source>
        <translation>Salvar projecto</translation>
    </message>
    <message>
        <source>CTRL+S</source>
        <translation>CTRL+S</translation>
    </message>
    <message>
        <source>Allows you to save the current project in a project file.</source>
        <translation>Permite salvar o projecto actual num arquivo de projecto.</translation>
    </message>
    <message>
        <source>If you have not saved previously the project, a file selection dialog appears and allows you to select a destination file.</source>
        <translation>Se você ainda não tiver salvado o projecto, uma caixa de diálogo da selecção de arquivo aparece e permite que você seleccione um arquivo de destino.</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation>Salvar projecto como</translation>
    </message>
    <message>
        <source>Project properties</source>
        <translation>Projecto - propriedades</translation>
    </message>
    <message>
        <source>Settings</source>
        <translation>Configurações</translation>
    </message>
    <message>
        <source>Quit</source>
        <translation>Sair</translation>
    </message>
    <message>
        <source>CTRL+W</source>
        <translation>CTRL+W</translation>
    </message>
    <message>
        <source>Allows you to exit ffDiaporama.</source>
        <translation>Permite-lhe sair do ffDiaporama.</translation>
    </message>
    <message>
        <source>The slide management commands</source>
        <translation>Os comandos de gestão de slides</translation>
    </message>
    <message>
        <source>The following table summarizes the slide management commands:</source>
        <translation>Os comandos de gestão de slides são resumidos na tabela seguinte:</translation>
    </message>
    <message>
        <source>Edit menu command</source>
        <translation>Comando de menu Editar</translation>
    </message>
    <message>
        <source>Add title</source>
        <translation>Adicionar título</translation>
    </message>
    <message>
        <source>Add files</source>
        <translation>Adicionar ficheiros</translation>
    </message>
    <message>
        <source>INS</source>
        <translation>INS</translation>
    </message>
    <message>
        <source>Add project</source>
        <translation>Adicionar projecto</translation>
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
        <translation>Permite copiar o slide actual para  área de transferência.</translation>
    </message>
    <message>
        <source>Paste</source>
        <translation>Colar</translation>
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
        <translation>Abre um sub-menu que dá acesso às funções de modificação</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Remover</translation>
    </message>
    <message>
        <source>DEL</source>
        <translation>DEL</translation>
    </message>
    <message>
        <source>Allows you to remove the current slide.</source>
        <translation>Permite que você remova o slide actual.</translation>
    </message>
    <message>
        <source>Remarks:</source>
        <translation>Observações:</translation>
    </message>
    <message>
        <source>Inserted slides are either at the end of the project, or after the current slide, depending to the option &quot;add the new slides (at the end of the project or after the current slide) &quot; in the configuration dialog.</source>
        <translation> Os slides são inseridos, quer no final do projecto, ou após o slide actual, dependendo da opção &quot;adicionar os novos slides (no final do projecto ou após o slide actual) &quot; na janela de configuração .</translation>
    </message>
    <message>
        <source>The render commands</source>
        <translation>Os comandos de renderização</translation>
    </message>
    <message>
        <source>The following table summarizes the main render commands:</source>
        <translation>Os comandos de renderização são resumidos na tabela seguinte:</translation>
    </message>
    <message>
        <source>Render menu command</source>
        <translation>Comando de menu Renderizar vídeo</translation>
    </message>
    <message>
        <source>Player and Smartphone</source>
        <translation>Leitor e Smartphone</translation>
    </message>
    <message>
        <source>Multimedia system</source>
        <translation>Sistema multimédia</translation>
    </message>
    <message>
        <source>For the WEB</source>
        <translation>Para a WEB</translation>
    </message>
    <message>
        <source>Lossless</source>
        <translation>Sem Perdas</translation>
    </message>
    <message>
        <source>Advanced</source>
        <translation>Avançado</translation>
    </message>
    <message>
        <source>Remark:</source>
        <translation>Observação:</translation>
    </message>
    <message>
        <source>The lossless format is readable only by few equipment and generates files of enormous size. Consequently, it is useful only to generate parts of a project which will then be joined into a final project.</source>
        <translation>O formato lossless (sem perdas) é elegível apenas por poucos equipamentos e gera arquivos de tamanho enorme. Consequentemente, é útil apenas para gerar parte de um projecto que será então junto a um projecto final.</translation>
    </message>
    <message>
        <source>The help commands</source>
        <translation>Os comandos de ajuda</translation>
    </message>
    <message>
        <source>The following table summarizes the main help commands:</source>
        <translation>Os comandos de ajuda são resumidos na tabela seguinte:</translation>
    </message>
    <message>
        <source>Help menu command</source>
        <translation>Comando de menu Ajuda</translation>
    </message>
    <message>
        <source>About</source>
        <translation>Acerca</translation>
    </message>
    <message>
        <source>Opens the about dialog. This displays information about the release, license and system information</source>
        <translation>Abre a caixa de diálogo sobre. Exibe informações de informações sobre a licença e sistema</translation>
    </message>
    <message>
        <source>Support and help (F1)</source>
        <translation>Suporte e ajuda (F1)</translation>
    </message>
    <message>
        <source>Opens the ffDiaporama WIKI index</source>
        <translation>Abre o índice WIKI ffDiaporama </translation>
    </message>
    <message>
        <source>What&apos;s new</source>
        <translation>O que há de novo</translation>
    </message>
    <message>
        <source>Opens the Blog/News page from the ffDiaporama website</source>
        <translation>Abre o Blog / página de notícias do site ffDiaporama</translation>
    </message>
    <message>
        <source>Allows you to create a new blank project. The &lt;a href=&quot;0108.html&quot;&gt;project properties dialog&lt;/a&gt; appears and allows you to setup the new project. </source>
        <translation>Permite que você crie um novo projecto em branco. A &lt;a href=&quot;0108.html&quot;&gt;Caixa de diálogo Propriedades do projecto&lt;/a&gt; aparece e permite-lhe configurar o novo projecto. </translation>
    </message>
    <message>
        <source>Opens a sub-menu giving you access to the following functions</source>
        <translation>Abre um sub-menu que lhe dá acesso às seguintes funções</translation>
    </message>
    <message>
        <source>Save as: Allows you to save the current project in a different file. The &lt;a href=&quot;0109.html&quot;&gt;file selection dialog&lt;/a&gt; appears and allows you to select a destination file.</source>
        <translation>Salvar como: Permite salvar o projeto atual em um arquivo diferente. A &lt;a href=&quot;0109.html&quot;&gt; Caixa de diálogo de seleção de arquivo&lt;/a&gt; aparece e permite que você selecione um arquivo de destino.</translation>
    </message>
    <message>
        <source>Export project: Export current project and all used files in a new folder. The &lt;a href=&quot;0107.html&quot;&gt;export project dialog&lt;/a&gt; appears and allows you to setup the export.</source>
        <translation>Exportar projeto: Exportações do projecto actual e de todos os arquivos utilizados para uma nova pasta. A &lt;a href=&quot;0107.html&quot;&gt; Caixa de diálogo exportação de projecto &lt;/a&gt; aparece e permite que você configure a exportação.</translation>
    </message>
    <message>
        <source>Allows you to open the &lt;a href=&quot;0108.html&quot;&gt;project properties dialog&lt;/a&gt;</source>
        <translation>Permite que você abra a &lt;a href=&quot;0108.html&quot;&gt; Caixa de diálogo Propriedades do projecto&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Allows you to define applications settings. The &lt;a href=&quot;0101.html&quot;&gt;application settings dialog&lt;/a&gt; appears.</source>
        <translation>Permite definir configurações da aplicação. A &lt;a href=&quot;0101.html&quot;&gt; Caixa de diálogo de configurações do aplicativo &lt;/a&gt; aparece.</translation>
    </message>
    <message>
        <source>Add empty slide: Allows you to add an empty slide : the new empty slide is appended to the project and is displayed in the &lt;a href=&quot;0023.html&quot;&gt;timeline&lt;/a&gt;.</source>
        <translation>Adicionar slide vazio: Permite adicionar um slide vazio: o novo slide vazio é anexado ao projeto e será exibido na &lt;a href=&quot;0023.html&quot;&gt; linha do tempo &lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Add a predefined title slide: Allows you to add a slide based on a model. The &lt;a href=&quot;0103.html&quot;&gt;predefined title slide properties dialog&lt;/a&gt; appears.</source>
        <translation>Adiciona um slide de título predefinido: Permite que você adicione um slide com base em um modelo. A &lt;a href=&quot;0103.html&quot;&gt; caixa de diálogo de propriedades slide de título predefinido &lt;/a&gt; aparece.</translation>
    </message>
    <message>
        <source>Allows you to add photo or video files : A &lt;a href=&quot;0109.html&quot;&gt;file selection dialog&lt;/a&gt; appears and allows you to select one or more files. </source>
        <translation>Permite que você adicione arquivos de foto ou vídeo: A &lt;a href=&quot;0109.html&quot;&gt; Caixa de diálogo de seleção de arquivo &lt;/a&gt; aparece e permite que você selecione um ou mais arquivos.</translation>
    </message>
    <message>
        <source>Allows you to add the slides of an existing project to the end the current project: a &lt;a href=&quot;0109.html&quot;&gt;file selection dialog&lt;/a&gt; appears and allows you to select a project file. Slides, slide settings, music and background of the project are added to the current project.</source>
        <translation>Permite adicionar os slides de um projecto existente ao final do projecto atual: a &lt;a href=&quot;0109.html&quot;&gt;Caixa de diálogo de seleção de arquivo&lt;/a&gt; aparece e permite que você selecione um arquivo de projecto. Slides, configurações de slides, música de fundo do projecto são adicionados ao projeto atual.</translation>
    </message>
    <message>
        <source>Allows you to cut the current slide (remove it from the &lt;a href=&quot;0023.html&quot;&gt;timeline&lt;/a&gt; and put it in the clipboard).</source>
        <translation>Permite que você corte o slide atual (removê-lo da &lt;a href=&quot;0023.html&quot;&gt; linha do tempo &lt;/a&gt; e colocá-lo na área de transferência).</translation>
    </message>
    <message>
        <source>Open the &lt;a href=&quot;0104.html&quot;&gt;background properties dialog&lt;/a&gt; (Equivalent to a double click on the background track)</source>
        <translation>Abra a &lt;a href=&quot;0104.html&quot;&gt; caixa de diálogo de propriedades do fundo &lt;/a&gt; (equivalente a um duplo clique sobre a faixa de fundo)</translation>
    </message>
    <message>
        <source>Depending on the slide type, open the &lt;a href=&quot;0119.html&quot;&gt;slide properties dialog&lt;/a&gt; if it&apos;s a standard slide or open the &lt;a href=&quot;0103.html&quot;&gt;predefined title slide properties dialog&lt;/a&gt; if it&apos;s a predefined title slide. (Equivalent to a double click on the mounting track)</source>
        <translation>Dependendo do tipo slide, abre a &lt;a href=&quot;0119.html&quot;&gt; Caixa de diálogo de propriedades do slide &lt;/a&gt; se é um slide padrão ou abre a &lt;a href=&quot;0103.html&quot;&gt; Caixa de diálogo de propriedades do slide título predefinido &lt;/a&gt; se é um slide de título predefinido. (Equivalente a um duplo clique sobre a faixa de montagem)</translation>
    </message>
    <message>
        <source>Open the &lt;a href=&quot;0114.html&quot;&gt;music properties dialog&lt;/a&gt; (Equivalent to a double click on the music track)</source>
        <translation>Abre a &lt;a href=&quot;0114.html&quot;&gt; caixa de diálogo de propriedades da música &lt;/a&gt; (equivalente a um duplo clique sobre a faixa de música)</translation>
    </message>
    <message>
        <source>Open the &lt;a href=&quot;0122.html&quot;&gt;transition properties dialog&lt;/a&gt; (Equivalent to a double click on the transition)</source>
        <translation>Abre a &lt;a href=&quot;0122.html&quot;&gt; caixa de diálogo de propriedades de transição &lt;/a&gt; (equivalente a um duplo clique sobre a transição)</translation>
    </message>
    <message>
        <source>It is possible to add slides by Drag and Drop directly using the file browser. Drag photos or videos onto the &lt;a href=&quot;0023.html&quot;&gt;timeline&lt;/a&gt; and slides are created at the point you release the files.</source>
        <translation>É possível adicionar slides arrastando e soltando directamente usando o navegador de arquivos. Arraste fotos ou vídeos para a &lt;a href=&quot;0023.html&quot;&gt; linha do tempo &lt;/a&gt; e os slides são criados no ponto em que soltar os arquivos.</translation>
    </message>
    <message>
        <source>Allows you to render the video for selected equipment from the device database. </source>
        <translation>Permite renderizar (gerar) o vídeo para o equipamento seleccionado a partir do banco de dados do dispositivo.</translation>
    </message>
    <message>
        <source>The &lt;a href=&quot;0115.html&quot;&gt;render movie dialog&lt;/a&gt; from database appears.</source>
        <translation>A &lt;a href=&quot;0115.html&quot;&gt; Caixa de diálogo renderizar vídeo&lt;/a&gt; a partir de banco de dados aparece.</translation>
    </message>
    <message>
        <source>Allows you to render the video in a lossless format. Lossless format is not destructive, so it is possible to render several times the same video without losing in quality. The &lt;a href=&quot;0115.html&quot;&gt;render movie dialog&lt;/a&gt; appears.</source>
        <translation>ermite renderizar o vídeo em um formato lossless. Formato sem perdas (lossless), não é destrutivo, de modo que é possível processar várias vezes o mesmo vídeo sem perda de qualidade. A &lt;a href=&quot;0115.html&quot;&gt;caixa de diálogo de renderizar vídeo&lt;/a&gt; aparece.</translation>
    </message>
    <message>
        <source>Allows you to render the video using the &lt;a href=&quot;0115.html&quot;&gt;Advanced render movie dialog&lt;/a&gt;.</source>
        <translation>Permite renderizar o vídeo usando a &lt;a href=&quot;0115.html&quot;&gt;caixa de diálogo de renderizar vídeo avançado&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Export Soundtrack</source>
        <translation>Exportar trilha sonora</translation>
    </message>
    <message>
        <source>Allows you to render only the sound track of the project. The &lt;a href=&quot;0115.html&quot;&gt;render movie dialog&lt;/a&gt; appears.</source>
        <translation>Permite renderizar apenas a trilha sonora do projeto. A &lt;a href=&quot;0115.html&quot;&gt; Caixa de diálogo renderizar vídeo &lt;/a&gt; aparece.</translation>
    </message>
    <message>
        <source>Note: Each selected file is added to the project using sort order specified in the configuration menu of the multimedia file explorer.</source>
        <translation>Nota: Cada arquivo seleccionado é adicionado ao projecto usando ordem de classificação especificada no menu de configuração do gestor de arquivos multimédia.</translation>
    </message>
    <message>
        <source>Allows you to paste the slide or the image currently in the clipboard into the &lt;a href=&quot;0023.html&quot;&gt;timeline&lt;/a&gt;.</source>
        <translation>Permite que você cole o slide ou a imagem actualmente na área de transferência para a &lt;a href=&quot;0023.html&quot;&gt;linha do tempo&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Add a map: Allows you to add a Google Maps map. The &lt;a href=&quot;0110.html&quot;&gt;correct, reframe or cut image or video dialog&lt;/a&gt; appears.</source>
        <translation>Adicionar um mapa: Permite adicionar um mapa do Google Maps. A &lt;a href=&quot;0110.html&quot;&gt;caixa de diálogo corrigir, reenquadrar ou cortar imagem ou vídeo&lt;/a&gt;aparece.</translation>
    </message>
</context>
<context>
    <name>0023</name>
    <message>
        <source>The timeline</source>
        <translation>A linha do tempo</translation>
    </message>
    <message>
        <source>The timeline lists the slides which compose the project. The slides are listed from left to right.</source>
        <translation>A linha do tempo lista os slides que compõem o projeto. Os slides são listados da esquerda para a direita.</translation>
    </message>
    <message>
        <source>Each slide is represented by the 3 tracks:</source>
        <translation>Cada um dos slides é representado por três faixas:</translation>
    </message>
    <message>
        <source>The background track:</source>
        <translation>A faixa de fundo:</translation>
    </message>
    <message>
        <source>An icon corresponding to the transition selected to pass from the previous background to this slide (if a new background is defined). .</source>
        <translation>Um ícone correspondente à transição seleccionada para passar do fundo anterior a este slide (se um novo plano de fundo é definida). </translation>
    </message>
    <message>
        <source>A thumbnail representing the background associated with this slide.</source>
        <translation> Uma miniatura representando o fundo associado a este slide.</translation>
    </message>
    <message>
        <source>The slide number.</source>
        <translation>O número do slide.</translation>
    </message>
    <message>
        <source> Possibly this icon may appear at the upper left if the slide is used as chapter start</source>
        <translation>Possivelmente, este ícone pode aparecer no canto superior esquerdo, se o slide é utilizado como início de capítulo</translation>
    </message>
    <message>
        <source>The mounting track:</source>
        <translation>A faixa de montagem:</translation>
    </message>
    <message>
        <source>An icon corresponding to the transition selected to pass from the previous slide to this slide, under which is indicated the duration of the transition in seconds.</source>
        <translation>Um ícone correspondente à transição seleccionada para passar a partir do slide anterior a este slide, nas quais é indicada a duração da transição em segundos.</translation>
    </message>
    <message>
        <source>A thumbnail in the form of a static image for slides consisting of title or photo, or in the form of a video (under which is placed a soundtrack).</source>
        <translation>Uma miniatura sob a forma de uma imagem estática por slides consistindo num título ou foto, ou sob a forma de um vídeo (sob a qual é colocada uma banda sonora).</translation>
    </message>
    <message>
        <source> Possibly this icon may appear at the upper left if the slide is composed of several blocks.</source>
        <translation>Possivelmente, este ícone pode aparecer no canto superior esquerdo, se o slide é composto por vários blocos.</translation>
    </message>
    <message>
        <source> Possibly this icon may appear at the upper right if the slide is animated (that is consisting of more than one shot).</source>
        <translation>Possivelmente, este ícone pode aparecer  no canto superior direito, se o slide é animado (que é composto por mais de um tiro).</translation>
    </message>
    <message>
        <source> Possibly this icon may appear at the bottom right if the slide contains at least an image for which you defined a transformation.</source>
        <translation>Possivelmente, este ícone pode aparecer no canto inferior direito, se o slide contém pelo menos uma imagem em que você definiu uma transformação.</translation>
    </message>
    <message>
        <source> Possibly this icon may appear at the bottom left if the slide is an automatic predefined slide.</source>
        <translation>Possivelmente, este ícone pode no canto inferior esquerdo se o slide é um slide automaticamnete pré-definido.</translation>
    </message>
    <message>
        <source> Possibly this icon may appear at the bottom right if the predefined slide is a project title slide.</source>
        <translation>Possivelmente, este ícone pode no canto inferior direito se o slide pré-definido é um slide de projecto dum título.</translation>
    </message>
    <message>
        <source> Possibly this icon may appear at the bottom right if the predefined slide is a chapter title slide.</source>
        <translation>Possivelmente, este ícone pode no canto inferior direito se o slide pré-definido é um slide dum capítulo dum título.</translation>
    </message>
    <message>
        <source> Possibly this icon may appear at the bottom right if the predefined slide is a generic title slide.</source>
        <translation>Possivelmente, este ícone pode no canto inferior direito se o slide pré-definido é um slide genérico dum título.</translation>
    </message>
    <message>
        <source>Remark: The thumbnail represents the first image on the slide.</source>
        <translation>Observação:  A miniatura representa a primeira imagem no slide.</translation>
    </message>
    <message>
        <source>The music track:</source>
        <translation>A faixa de música:</translation>
    </message>
    <message>
        <source>Every play-list is shown by a change of color.</source>
        <translation>Cada lista de reprodução será mostrada por uma mudança de cor.</translation>
    </message>
    <message>
        <source>The track is more or less filled according to the sound volume selected, displaying the variation in volume.</source>
        <translation>A faixa é mais ou menos preenchida de acordo com o volume de som escolhido, mostrando a variação de volume.</translation>
    </message>
    <message>
        <source>The musical transitions (fade in/out) are shown as crossings.</source>
        <translation>As transições musicais entrada/saída gradual (fade in / out) são mostradas como cruzamentos.</translation>
    </message>
    <message>
        <source>Remark: Possible pauses are symbolized by a change in the volume to zero and the display of this icon: </source>
        <translation>Obervação: Possíveis pausas são simbolizadas por uma mudança no volume de zero e o ícone: </translation>
    </message>
    <message>
        <source>To modify an element:</source>
        <translation>Para modificar um elemento:</translation>
    </message>
    <message>
        <source>You can also call a contextual menu by doing a right click ahead the thumbnail or click on the Edit button. This contextual menu allows you to select an action.</source>
        <translation>Você também pode chamar um menu contextual, fazendo um clique direito em frente a miniatura, ou clique no botão Editar. Este menu contextual permite que você seleccione uma acção.</translation>
    </message>
    <message>
        <source>To modify several elements at one time:</source>
        <translation>Para modificar vários elementos de uma só vez:</translation>
    </message>
    <message>
        <source>You can select several slides by using the mouse and the CTRL and SHIFT:</source>
        <translation>Você pode seleccionar vários slides usando o rato e as teclas CTRL e SHIFT:</translation>
    </message>
    <message>
        <source>CTRL + click on a slide: add or removes the slide of the selection</source>
        <translation> CTRL + clique num slide: adiciona ou remove o slide da selecção</translation>
    </message>
    <message>
        <source>SHIFT + click on a slide: add all the slides understood between the last one selected and the slide which you have just clicked</source>
        <translation>SHIFT + clique num slide: adicionar todos os slides compreendidos entre o último seleccionado e o slide que você acabou de clicar</translation>
    </message>
    <message>
        <source>Then, by making a right click on one of the slides of the selection, a contextual menu appears.</source>
        <translation>Então, ao fazer um clique direito em um dos slides da selecção, aparece um menu contextual.</translation>
    </message>
    <message>
        <source>This menu suggests various actions making on all the slides of the selection such as:</source>
        <translation>Este menu sugere várias acções fazem em todas as slides da selecção, tais como:</translation>
    </message>
    <message>
        <source>Copy/Cut/Paste/Remove all slide of the selection</source>
        <translation>Copiar / cortar / colar / Remover tudo slide da selecção</translation>
    </message>
    <message>
        <source>Modify the duration of the 1st shot for all the slides of the selection</source>
        <translation>Modificar o período de duração do primeiro tiro para todos os slides da selecção</translation>
    </message>
    <message>
        <source>Modify the transition for all the slides of the selection</source>
        <translation>Modificar a transição para todos os slides da selecção</translation>
    </message>
    <message>
        <source>Modify the music for all the slides of the selection</source>
        <translation>Modificar a música para todos os slides da selecção</translation>
    </message>
    <message>
        <source>etc...</source>
        <translation>etc...</translation>
    </message>
    <message>
        <source>To reorder the slide in the timeline:</source>
        <translation>Para reordenar o slide na linha do tempo:</translation>
    </message>
    <message>
        <source>Simply drag the slide to a new position with the mouse (drag &amp; drop)</source>
        <translation>Basta arrastar o slide para uma nova posição com o rato usando arrastar e largar (drag &amp; drop)</translation>
    </message>
    <message>
        <source>To modify the display of the timeline:</source>
        <translation>Para modificar a visualização da linha do tempo:</translation>
    </message>
    <message>
        <source>The timeline settings commands are in the status bar, to the right, at the bottom of the main window.</source>
        <translation>Os comandos configurações da linha do tempo estão na barra de estado, para a direita, na parte inferior da janela principal.</translation>
    </message>
    <message>
        <source> Increases the size of the thumbnails but reduces the number of thumbnails shown in the timeline.</source>
        <translation>Aumenta o tamanho das miniaturas, mas reduz o número de miniaturas mostradas na linha do tempo.</translation>
    </message>
    <message>
        <source> Reduces the size of the thumbnails and increases the number of thumbnails shown in the timeline.</source>
        <translation>Reduz o tamanho das miniaturas e aumenta o número de miniaturas mostradas na linha do tempo.</translation>
    </message>
    <message>
        <source>To modify the background, double-click the thumbnail of the background. This action opens the &lt;a href=&quot;0104.html&quot;&gt;Define background&lt;/a&gt; dialog.</source>
        <translation>Para modificar o plano de fundo, clique duas vezes na miniatura do fundo. Esta acção abre a&lt;a href=&quot;0104.html&quot;&gt; caixa de diálogo Definir fundo&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>To modify the entering slide transition, double-click the slide transition. This action opens the &lt;a href=&quot;0122.html&quot;&gt;Define the entering slides transitions&lt;/a&gt; dialog.</source>
        <translation> Para modificar a transição de slides de entrada, clique duas vezes na transição de slides. Esta acção abre a &lt;a href=&quot;0122.html&quot;&gt;caixa de diálogo Definir transições dos slides&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>To modify the slide (framing, filter, animation, etc.) double-click the thumbnail. This action opens the &lt;a href=&quot;0119.html&quot;&gt;slides properties dialog&lt;/a&gt; if it&apos;s a standard slide or open the &lt;a href=&quot;0103.html&quot;&gt;predefined title slide properties dialog&lt;/a&gt; if it&apos;s a predefined title slide.</source>
        <translation>Para modificar o slide (enquadramento, filtro, animação, etc) dê um duplo clique na miniatura. Essa acção abre a &lt;a href=&quot;0119.html&quot;&gt;caixa de diálogo Propriedades do slide&lt;/a&gt;se é um slide padrão ou abre a &lt;a href=&quot;0103.html&quot;&gt; caixa de diálogo de propriedades slide de título predefinido &lt;/a&gt; se é um slide de título predefinido.</translation>
    </message>
    <message>
        <source>To modify the music associated with the slide, double-click the zone corresponding to the slide musical track. This action opens the &lt;a href=&quot;0114.html&quot;&gt;Define the music track&lt;/a&gt; dialog.</source>
        <translation>Para modificar a música associada com o slide, clique duas vezes na zona correspondente à faixa musical slide. Esta acção abre a &lt;a href=&quot;0114.html&quot;&gt;caixa de diálogo Definir faixa de música&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>To select the current slide:</source>
        <translation>Para selecionar o slide actual:</translation>
    </message>
    <message>
        <source>Click on a slide to define it as current slide.</source>
        <translation>Clique num slide para defini-lo como slide actual.</translation>
    </message>
    <message>
        <source>Use the mouse wheel to change the current slide.</source>
        <translation>Use a roda do rato para mudar o slide actual.</translation>
    </message>
    <message>
        <source>Note: When previewing the selected slide is automatically defined on the current slide preview.</source>
        <translation>Nota: Ao visualizar o slide selecionado é automaticamente definido na corrente pré-visualização de slides.</translation>
    </message>
    <message>
        <source>On slide associated with the music, the cover, artist and song title are displayed</source>
        <translation>No slide associado com a música, a capa, artista e título da música são exibidos</translation>
    </message>
    <message>
        <source>To move the music or the background associated to a slide to another slide:</source>
        <translation>Para mover a música ou o fundo associado de um slide para outro:</translation>
    </message>
    <message>
        <source>Simply drag the music or background to a new position with the mouse (drag &amp; drop)</source>
        <translation>Basta arrastar a música ou o fundo para uma nova posição com o rato (drag &amp; drop ou arrastar e largar)</translation>
    </message>
</context>
<context>
    <name>0024</name>
    <message>
        <source>The multimedia file browser</source>
        <translation>O navegador de arquivos multimédia</translation>
    </message>
    <message>
        <source>ffDiaporama offers a multimedia file browser which is shown in the main window when you select the file browser mode in the main window. It is designed for quick access to the multimedia files on your computer.</source>
        <translation>ffDiaporama oferece um navegador de arquivos multimédia que é mostrado na janela principal quando você selecciona o modo de navegador de arquivos na janela principal. Ele é projectado para acesso rápido aos arquivos multimédia do seu computador.</translation>
    </message>
    <message>
        <source>The main advantages are, that you can view the multimedia information of specific files even without or before adding them to your project. For instance, you can filter the view to obtain information of only photos, video files or music files.</source>
        <translation>As principais vantagens são que você pode visualizar as informações multimédia de arquivos específicos e antes de adicioná-los ao seu projeto. Por exemplo, você pode filtrar a exibição para obter informações apenas de fotos, arquivos de vídeo ou arquivos de música.</translation>
    </message>
    <message>
        <source>And moreover, you can select one or more multimedia files and add them to your project with drag &amp; drop.</source>
        <translation>E além disso, você pode seleccionar um ou mais arquivos multimédia e adicioná-los ao seu projecto com arrastar e soltar (drag &amp; drop).</translation>
    </message>
    <message>
        <source>The main purpose of the file browser is therefore the viewing and use of (multimedia) files. Some file management tasks are integrated for your convenience, i.e. creating folders deleting files or folders and renaming files or folders.</source>
        <translation>O principal objectivo do navegador de arquivos é, portanto, a visualização e uso de arquivos (multimédia). Algumas tarefas de gestão de arquivos são integrados para a sua conveniência, isto é, a criação de pastas, apagar arquivos ou pastas e renomear arquivos ou pastas.</translation>
    </message>
    <message>
        <source>Remark:</source>
        <translation>Observação:</translation>
    </message>
    <message>
        <source>Files can be presented differently than by the system file browser (presence of filters showing only some files - management of the file/icon pairs - etc.)</source>
        <translation>Os arquivos podem ser apresentados de forma diferente pelo navegador de arquivos do sistema (presença de filtros que mostram apenas alguns arquivos - a gestão dos pares de arquivo / ícone - etc)</translation>
    </message>
    <message>
        <source>The multimedia file browser follows the display rules used by the majority of multimedia systems (gateway, multimedia hard drive, etc.): </source>
        <translation>O navegador de arquivos multimédia segue as regras de exibição utilizado pela maioria dos sistemas multimédia (dispositivos portáteis, disco rígido multimédia, etc): </translation>
    </message>
    <message>
        <source>If a drive or a folder contains a folder.jpg file, then this image file is used as icon for the drive or the folder</source>
        <translation>Se uma unidade ou uma pasta contém um arquivo folder.jpg, então este arquivo de imagem é usada como ícone para a unidade ou a pasta</translation>
    </message>
    <message>
        <source>If a video or music file is accompanied with an image file with the .jpg extension carrying the same name, then this image file is used as icon for this file (example: holidays.mkv and holidays.jpg in the same folder</source>
        <translation>Se um arquivo de vídeo ou música é acompanhada de um arquivo de imagem com extensão .jpg carregando o mesmo nome, então este arquivo de imagem é usada como ícone para este arquivo (exemplo: holidays.mkv e holidays.jpg na mesma pasta)</translation>
    </message>
    <message>
        <source>The ffDiaporama multimedia file browser is not designed to manage files: so you cannot make copies of files or move files.</source>
        <translation>O navegador de arquivos multimédia ffDiaporama não é projectado para gerir arquivos pelo que você não pode fazer cópias de arquivos ou mover arquivos.</translation>
    </message>
    <message>
        <source> Folder tree</source>
        <translation>Árvore de pastas</translation>
    </message>
    <message>
        <source>The folder tree shows the drives and folders of your system. Under every drive the folders of that drive are listed, then under every folder the subfolders, if present and so on.</source>
        <translation>A árvore de pastas mostra as unidades e pastas do seu sistema. Sob cada unidade as pastas de que a unidade está listada, então sob cada pasta ou sub-pastas, se presente, e assim por diante.</translation>
    </message>
    <message>
        <source>You can:</source>
        <translation>Você pode:</translation>
    </message>
    <message>
        <source>Click a drive or a folder to select it</source>
        <translation>Clicar numa unidade ou numa pasta para seleccioná-la</translation>
    </message>
    <message>
        <source>Click the triangle preceding the drive name or folder name to display or hide the list of subfolders</source>
        <translation>Clicar no triângulo que precede o nome da unidade ou nome da pasta para exibir ou ocultar a lista de subpastas</translation>
    </message>
    <message>
        <source>Make a right click on a drive or a folder to call the contextual menu on this drive or folder. The contextual menu proposes then the following options:</source>
        <translation>Faça um clique directo numa unidade ou numa pasta para chamar o menu contextual dessa unidade ou pasta. O menu contextual propõe então as seguintes opções:</translation>
    </message>
    <message>
        <source>&lt;B&gt;Refresh all&lt;/B&gt; to update the whole tree (as so if you have to insert a CD-ROM, a DVD or an USB drive, this one is shown in the tree)</source>
        <translation>&lt;B&gt;Actualizar tudo&lt;/B&gt; para actualizar a árvore inteira (então se você inserir um CD-ROM, um DVD ou um drive USB, este é mostrado na árvore)</translation>
    </message>
    <message>
        <source>&lt;B&gt;Refresh from here&lt;/B&gt; to update the tree from this folder (update only what is under this folder)</source>
        <translation>&lt;B&gt;Refresque a partir daqui&lt;/B&gt; para actualizar a árvore a partir desta pasta (actualiza somente o que está sob esta pasta)</translation>
    </message>
    <message>
        <source>Create a new folder</source>
        <translation>Criar uma nova pasta</translation>
    </message>
    <message>
        <source>Remove a folder</source>
        <translation>Remover uma pasta</translation>
    </message>
    <message>
        <source>Rename a folder</source>
        <translation>Renomear uma pasta</translation>
    </message>
    <message>
        <source>The current folder view lists files and subfolders present in the current folder.</source>
        <translation>A pasta corrente exibe listas de arquivos actuais, pasta e sub-pastas, presentes na pasta actual.</translation>
    </message>
    <message>
        <source>Files are shown:</source>
        <translation>Os ficheiros serão exibidos:</translation>
    </message>
    <message>
        <source>Either as a table with numerous information if you selected the details view in the settings menu of the browser</source>
        <translation>Ou como uma tabela com informações diversas Se você seleccionou a exibição de detalhes no menu de configurações do navegador</translation>
    </message>
    <message>
        <source>Or as image if you selected the icons view in the settings menu of the browser</source>
        <translation>Ou como a imagem se você seleccionou os ícones ver no menu de configurações do navegador</translation>
    </message>
    <message>
        <source>Files are shown according to the filter of file selection in the settings menu of the browser</source>
        <translation>Os arquivos são mostrados de acordo com o filtro de selecção de arquivo no menu de configurações do navegador</translation>
    </message>
    <message>
        <source>Select a file or a folder by clicking it</source>
        <translation>Seleccionar um arquivo ou uma pasta, clicando nele</translation>
    </message>
    <message>
        <source>Select several files or folders by using SHIFT and CTRL keys</source>
        <translation>Seleccionar vários arquivos ou pastas usando teclas SHIFT e CTRL</translation>
    </message>
    <message>
        <source>CTRL+Click on a file: Add to the current selection or remove from the current selection</source>
        <translation>CTRL + Clique em um arquivo: Adicionar à selecção actual ou remover da selecção actual</translation>
    </message>
    <message>
        <source>SHIFT+Click on a file: Select all the files between the last selected and the one which you have just clicked</source>
        <translation>SHIFT + Clique em um arquivo: Seleccionar todos os arquivos seleccionados entre o último e aquele que você acabou de clicar</translation>
    </message>
    <message>
        <source>Double click a file or a folder:</source>
        <translation>Dê um duplo clique em um arquivo ou uma pasta:</translation>
    </message>
    <message>
        <source>If it&apos;s a folder: select it as the current folder and opens it</source>
        <translation>Se é uma pasta: selecciona como a pasta actual e abre-o</translation>
    </message>
    <message>
        <source>If it&apos;s a file: open the program that is by default associated with the file type in the system. For example, if you have associated GIMP with .jpg files in the system file browser, then a double click on a .jpg file will open the file with GIMP. (Remark: A double click on a ffDiaporama project file, opens the ffDiaporama project)</source>
        <translation>e for um arquivo: abrir o programa que é, por padrão associado ao tipo de arquivo no sistema. Por exemplo, se você tiver associado com GIMP. Jpg no navegador de arquivos do sistema, então um duplo clique em um arquivo jpg. Irá abrir o arquivo com o GIMP. (Nota: um duplo clique em um arquivo de projecto ffDiaporama, abre o projecto ffDiaporama)</translation>
    </message>
    <message>
        <source>Perform a right click on one of the files or folders of the selection to open the contextual menu. According to the elements that are present in the selection, the menu will propose different actions</source>
        <translation>Execute um clique com o lado direito do rato, num dos arquivos ou pastas da selecção para abrir o menu contextual. De acordo com os elementos que estão presentes na selecção, o menu irá propor acções diferentes</translation>
    </message>
    <message>
        <source>You can also use Drag &amp; Drop to move selected files towards the timeline to:</source>
        <translation>Você também pode arrastar e soltar ( Drag &amp; Drop) ficheiros para alinha do tempo de modo a:</translation>
    </message>
    <message>
        <source>Add them to the project, if they are images, videos or ffDiaporama project files</source>
        <translation>Adicioná-los ao projecto, se são ficheiros de imagens, vídeos ou projectos ffDiaporama</translation>
    </message>
    <message>
        <source>Use them as playlist, if they are audio files</source>
        <translation>Usá-los como listas de reprodução musical, se são ficheiros audio</translation>
    </message>
    <message>
        <source>Status bar to the current selection</source>
        <translation>Barra de estado para a selecção actual</translation>
    </message>
    <message>
        <source>The status bar to the current selection shows information about one or several selected files.</source>
        <translation>A barra de estado à selecção actual mostra informações sobre um ou mais arquivos seleccionados.</translation>
    </message>
    <message>
        <source>For a single file selection, the following information is shown:</source>
        <translation>Para uma única selecção de arquivo, a seguinte informação é exibida:</translation>
    </message>
    <message>
        <source>Image of the file</source>
        <translation>Imagem do arquivo</translation>
    </message>
    <message>
        <source>Filename (Filesize)</source>
        <translation>Nome do ficheiro (Tamanho)</translation>
    </message>
    <message>
        <source>According to the file type: </source>
        <translation>De acordo com o tipo de arquivo:</translation>
    </message>
    <message>
        <source>Image: Information about the size of the image / copyright / camera / orientation </source>
        <translation>Imagem: Informações sobre o tamanho da imagem / direitos de autor / câmara / orientação</translation>
    </message>
    <message>
        <source>Video: Information about the format of the images / the video track / the audio track / duration </source>
        <translation>Vídeo: Informações sobre o formato das imagens / a faixa de vídeo / a faixa de áudio / duração</translation>
    </message>
    <message>
        <source>Music: Information about the audio format / duration </source>
        <translation>Música: Informações sobre o formato / duração de áudio </translation>
    </message>
    <message>
        <source>ffDiaporama project: Version of ffDiaporama / Format / Number of slide and chapter / duration of the project </source>
        <translation>Projecto ffDiaporama: Versão do ffDiaporama / Formato / Número de slides e capítulo / duração do projecto</translation>
    </message>
    <message>
        <source>Image : Information about the picture shooting (Aperture and Focal / Lens / With or without flash) </source>
        <translation>Imagem: Informações sobre a captura da imagem (Abertura e Focal / Lens / Com ou sem flash)</translation>
    </message>
    <message>
        <source>Video: TAG contents (Title / Artist / Album / Year) </source>
        <translation>Vídeo: conteúdo tag ou etiquetas (Título / Artista / Álbum / Ano)</translation>
    </message>
    <message>
        <source>Music: TAG contents (Title / Artist / Album / Year) </source>
        <translation>Música: conteúdos tag ou etiquetas (Título / Artista / Álbum / Ano)</translation>
    </message>
    <message>
        <source>ffDiaporama project: TAG contents (Title / Artist / Album / Year) </source>
        <translation>Projecto ffDiaporama: conteúdo tag ou etiquetas (Título / Artista / Álbum / Ano)</translation>
    </message>
    <message>
        <source>For a multiple files selection, the following information is shown:</source>
        <translation>Para uma selecção múltipla de arquivos, a seguinte informação é apresentada:</translation>
    </message>
    <message>
        <source>Icon of the file type</source>
        <translation>Ícone do tipo de arquivo</translation>
    </message>
    <message>
        <source>Number of files and type of files</source>
        <translation>Número de arquivos e tipos de arquivos</translation>
    </message>
    <message>
        <source>Durations accumulated by files</source>
        <translation>Durações acumuladas por arquivos</translation>
    </message>
    <message>
        <source>Size accumulated by files</source>
        <translation>Tamanho acumulado por arquivos</translation>
    </message>
    <message>
        <source>Status bar of the current folder</source>
        <translation>Barra de estado da pasta actual</translation>
    </message>
    <message>
        <source>The status bar of the current folder shows the following information about the current folder:</source>
        <translation>A barra de estado da pasta actual, mostra as seguintes informações sobre a pasta actual:</translation>
    </message>
    <message>
        <source> Number of files</source>
        <translation>Número de arquivos</translation>
    </message>
    <message>
        <source> Number of sub-folders</source>
        <translation>Número de sub-pastas</translation>
    </message>
    <message>
        <source> Total size of shown files</source>
        <translation>Tamanho total dos arquivos mostrados</translation>
    </message>
    <message>
        <source> Total duration of shown files</source>
        <translation>Duração total de arquivos exibidos</translation>
    </message>
    <message>
        <source>Space occupied on the disk / Total space of the disk</source>
        <translation>O espaço ocupado no disco / Área total do disco</translation>
    </message>
    <message>
        <source> Favorites menu</source>
        <translation>Menu Favoritos</translation>
    </message>
    <message>
        <source>The list of the favourite folders can be managed in the favorites menu.</source>
        <translation>A lista de pastas favoritas pode ser gerida no menu de favoritos.</translation>
    </message>
    <message>
        <source>First line of the menu: </source>
        <translation>Primeira linha do menu:</translation>
    </message>
    <message>
        <source>&lt;U&gt;&lt;B&gt; Add to favorite&lt;/B&gt;&lt;/U&gt; adds the current folder to the list. Then an edit box allows you to give a name for this favorite</source>
        <translation>&lt;U&gt;&lt;B&gt; Adicionar aos favoritos&lt;/B&gt;&lt;/U&gt; adiciona a pasta actual na lista. Em seguida, uma caixa de edição permite que você dê um nome para este favorito</translation>
    </message>
    <message>
        <source>Between the first and the last line: </source>
        <translation>Entre a primeira linha e a última linha do menu: </translation>
    </message>
    <message>
        <source> &lt;U&gt;&lt;B&gt;The list of favorites folders&lt;/B&gt;&lt;/U&gt; is displayed. Select one of the favorite folders to access it directly</source>
        <translation> &lt;U&gt;&lt;B&gt;Pasta Favoritos&lt;/B&gt;&lt;/U&gt; é exibida. Seleccione uma das pastas de favoritos para aceder directamente</translation>
    </message>
    <message>
        <source>Last line of the menu: </source>
        <translation>A última linha do menu: </translation>
    </message>
    <message>
        <source>&lt;U&gt;&lt;B&gt; Manage favorite&lt;/B&gt;&lt;/U&gt; allows to rename or to delete entries of the list. A dialogbox for the modification of the list is displayed</source>
        <translation>&lt;U&gt;&lt;B&gt;Gerir favorito&lt;/B&gt;&lt;/U&gt; permite renomear ou excluir entradas da lista. A caixa de diálogo para a modificação da lista é exibida</translation>
    </message>
    <message>
        <source> Settings menu</source>
        <translation>Menu Configurações</translation>
    </message>
    <message>
        <source>The settings menu allows to modify the display of the current folder:</source>
        <translation>O menu de configurações permite modificar a exibição da pasta actual:</translation>
    </message>
    <message>
        <source>Settings of the display mode</source>
        <translation>Configurações do modo de exibição</translation>
    </message>
    <message>
        <source>Details view</source>
        <translation>Ver detalhes</translation>
    </message>
    <message>
        <source>Switch the display of the current folder to detail mode. In this mode, the present elements in the folder are shown in a table with numerous information</source>
        <translation>Muda a exibição da pasta actual para o modo de detalhes. Neste modo, os elementos presentes na pasta são exibidos numa tabela com informações diversas</translation>
    </message>
    <message>
        <source>Icon view</source>
        <translation>Vista Ícone </translation>
    </message>
    <message>
        <source>Switch the display of the current folder to icon mode. In this mode, the present elements in the folder are shown as images</source>
        <translation>Muda a exibição da pasta actual para o modo de ícone. Neste modo, os elementos presentes na pasta são mostrados como imagens</translation>
    </message>
    <message>
        <source>Settings of the filter on files</source>
        <translation>Configurações do filtro em arquivos</translation>
    </message>
    <message>
        <source>All files</source>
        <translation>Todos os arquivos</translation>
    </message>
    <message>
        <source>Show all the present elements in the current folder</source>
        <translation>Mostra todos os elementos presentes na pasta actual</translation>
    </message>
    <message>
        <source>Managed files</source>
        <translation>Arquivos geridos</translation>
    </message>
    <message>
        <source>Limit the display to the usable elements of the current folder:</source>
        <translation>Limitar a exposição aos elementos utilizáveis ​​da pasta actual:</translation>
    </message>
    <message>
        <source>Image, video and audio files of which the format is recognized by ffDiaporama</source>
        <translation>Imagem, vídeo e arquivos de áudio do que o formato é reconhecido pelo ffDiaporama</translation>
    </message>
    <message>
        <source>Subfolders</source>
        <translation>Sub-pastas</translation>
    </message>
    <message>
        <source>Image files</source>
        <translation>Os arquivos de imagem</translation>
    </message>
    <message>
        <source>Limit the display of the current folder to the image files of which the format is recognized by ffDiaporama in the present subfolders</source>
        <translation>Limita a exibição da pasta actual para os arquivos de imagem que o formato é reconhecido pelo ffDiaporama na presente sub-pastas</translation>
    </message>
    <message>
        <source>Video files</source>
        <translation>Os arquivos de vídeo</translation>
    </message>
    <message>
        <source>Limit the display of the current folder to the video files of which the format is recognized by ffDiaporama in the present subfolders</source>
        <translation>Limita a exibição da pasta actual para os arquivos de vídeo cujo formato é reconhecido pelo ffDiaporama nas presentes sub-pastas</translation>
    </message>
    <message>
        <source>Audio files</source>
        <translation>Os arquivos de áudio</translation>
    </message>
    <message>
        <source>Limit the display of the current folder to the audio files of which the format is recognized by ffDiaporama inthe present subfolders</source>
        <translation>Limita a exibição da pasta actual para os arquivos de áudio do que o formato é reconhecido pelo ffDiaporama nas presentes sub-pastas</translation>
    </message>
    <message>
        <source>ffDiaporama projects</source>
        <translation>Projectos ffDiaporama</translation>
    </message>
    <message>
        <source>Limit the display of the current folder to the ffDiaporama project files in the present subfolders</source>
        <translation>Limita a exibição da pasta actual para os arquivos do projecto ffDiaporama nas presentes sub-pastas</translation>
    </message>
    <message>
        <source>Additional settings</source>
        <translation>Configurações adicionais</translation>
    </message>
    <message>
        <source>Display hidden files and folders</source>
        <translation>Exibe as pastas e arquivos ocultos</translation>
    </message>
    <message>
        <source>Show or hide the hidden files and folders. </source>
        <translation>Mostrar ou ocultar as pastas e arquivos ocultos.</translation>
    </message>
    <message>
        <source>Under Windows, hidden files and folders have the &lt;B&gt;Hide&lt;/B&gt; file attribute activated. </source>
        <translation>No Windows, pastas e arquivos ocultos têm o atributo de arquivo &lt;B&gt;Esconder&lt;/B&gt; activado.</translation>
    </message>
    <message>
        <source>Under Linux, hidden files and folders have a name beginning with a dot &quot;.&quot; </source>
        <translation>No Linux, os arquivos e pastas ocultas têm um nome que começa com um ponto &quot;.&quot;</translation>
    </message>
    <message>
        <source>This option accumulates both versions for both systems. So, even under Windows, files and folders with a name beginning with a &quot;.&quot; are considered as hidden files or folders. </source>
        <translation>Esta opção acumula ambas as versões para ambos os sistemas. Assim, mesmo no Windows, arquivos e pastas com um nome começando com um &quot;.&quot; são considerados como arquivos ou pastas ocultas. </translation>
    </message>
    <message>
        <source>Remark: </source>
        <translation>Observação:</translation>
    </message>
    <message>
        <source> or </source>
        <translation> ou </translation>
    </message>
    <message>
        <source> One of this icon is displayed in front of the name of the option as this one is activated or not.</source>
        <translation>Um destes ícones é exibido na frente do nome da opção como esta está ou não activada.</translation>
    </message>
    <message>
        <source>Hide filename</source>
        <translation>Ocultar nome ficheiro</translation>
    </message>
    <message>
        <source>This option is available only for the icon view mode. If this option is activated, the file names will not be shown under the file images. It allows to increase the number of images shown in the view of the current directory. </source>
        <translation>Esta opção só está disponível para o modo de exibição de ícones. Se esta opção estiver activada, os nomes de arquivo não serão exibidos sob as imagens de arquivo. Permite aumentar o número de imagens mostradas na visão do directório actual. </translation>
    </message>
    <message>
        <source>Sort by number</source>
        <translation>Ordenar por número</translation>
    </message>
    <message>
        <source>This option sorts the files in order of their numerical suffix : Example: if you select IMG_0025, IMG_0032, MVI_0029 and MVI_0040, the files will be inserted as follows : IMG_0025, MVI_0029, IMG_0032 and MVI_0040</source>
        <translation>Esta opção ordena os arquivos por ordem de seu sufixo numérico: Exemplo: se você selecionar IMG_0025, IMG_0032, MVI_0029 e MVI_0040, os arquivos serão inseridos os seguintes: IMG_0025, MVI_0029, IMG_0032 e MVI_0040</translation>
    </message>
    <message>
        <source>Sort by name</source>
        <translation>Ordenar por nome</translation>
    </message>
    <message>
        <source>This option sorts the files in alphabetical order</source>
        <translation>Esta opção ordena os arquivos por ordem alfabética</translation>
    </message>
    <message>
        <source>Sort by date</source>
        <translation>Ordenar por data</translation>
    </message>
    <message>
        <source>This option sorts the files in order of last modification date</source>
        <translation>Esta opção ordena os arquivos por ordem da data da última modificação</translation>
    </message>
    <message>
        <source>Show folder first</source>
        <translation>Mostrar pasta primeiro</translation>
    </message>
    <message>
        <source>If this option is enabled, the directories will be displayed first</source>
        <translation>Se esta opção estiver activada, os diretórios serão exibidos em  primeiro lugar</translation>
    </message>
    <message>
        <source>Settings of the sort order</source>
        <translation>Configurações da ordem de classificação</translation>
    </message>
    <message>
        <source>This option sorts the files in order of their creation date</source>
        <translation>Esta opção ordena os arquivos na ordem da sua data de criação</translation>
    </message>
    <message>
        <source>Image vector files</source>
        <translation>Ficheiros vectoriais de Imagem</translation>
    </message>
    <message>
        <source>Limit the display of the current folder to the image vector files of which the format is recognized by ffDiaporama in the present subfolders</source>
        <translation>Limitar a exibição da pasta actual para os ficheiros de imagem vectoriais cujo formato é reconhecido pelo ffDiaporama nas presentes subpastas</translation>
    </message>
</context>
<context>
    <name>0030</name>
    <message>
        <source>Rendering videos</source>
        <translation>Renderização de vídeos</translation>
    </message>
    <message>
        <source> This section contains information about generating video with ffDiaporama. </source>
        <translation>Esta seção contém informações sobre como gerar vídos com o  ffDiaporama.</translation>
    </message>
    <message>
        <source>Index</source>
        <translation>Índice</translation>
    </message>
    <message>
        <source>Smartphones and tablets</source>
        <translation>Smartphones e tablets</translation>
    </message>
    <message>
        <source>Portable devices</source>
        <translation>Dispositivos portáteis</translation>
    </message>
    <message>
        <source>Multimedia system (Home cinema)</source>
        <translation>Sistema multimédia (cinema em casa)</translation>
    </message>
    <message>
        <source>For the WEB</source>
        <translation>Para a WEB</translation>
    </message>
    <message>
        <source>Video codec</source>
        <translation>Codec de vídeo</translation>
    </message>
    <message>
        <source>Audio codec</source>
        <translation>Codec de áudio</translation>
    </message>
    <message>
        <source>Containers</source>
        <translation>Recipiente</translation>
    </message>
    <message>
        <source>Video standards and resolutions</source>
        <translation>Padrões de vídeo e resoluções</translation>
    </message>
    <message>
        <source>File attachments (Thumbnails, nfo, etc...)</source>
        <translation>Ficheiros anexados (Miniaturas, nfo, etc...)</translation>
    </message>
</context>
<context>
    <name>0031</name>
    <message>
        <source>Rendering videos</source>
        <translation>Renderização de vídeos</translation>
    </message>
    <message>
        <source>A digital video consists of a computer file called the &lt;a href=&quot;0038.html&quot;&gt;container&lt;/a&gt;</source>
        <translation>Um vídeo digital consiste num arquivo de computador chamado &lt;a href=&quot;0038.html&quot;&gt;recipiente&lt;/a&gt;</translation>
    </message>
    <message>
        <source>In this file we find:</source>
        <translation>Neste arquivo, encontramos:</translation>
    </message>
    <message>
        <source>One or more video tracks. Each track is built using a &lt;a href=&quot;0036.html&quot;&gt;Video Codec&lt;/a&gt;</source>
        <translation>&lt;/a&gt;Uma ou mais faixas de vídeo. Cada faixa é construída usando um &lt;a href=&quot;0036.html&quot;&gt;codec de vídeo</translation>
    </message>
    <message>
        <source>One or more audio tracks. Each track is built using an &lt;a href=&quot;0037.html&quot;&gt;Audio Codec&lt;/a&gt;</source>
        <translation>Uma ou mais faixas de áudio. Cada faixa é construída usando um &lt;a href=&quot;0037.html&quot;&gt;codec de áudio&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Possibly, one or more subtitles. Each subtitle is built in a subtitle format.</source>
        <translation>Possivelmente, um ou mais legendas. Cada subtítulo é construído em um formato de legenda.</translation>
    </message>
    <message>
        <source>Possibly, a definition of tags and chapters.</source>
        <translation>Possivelmente, uma definição de tags (etiquetas) e capítulos.</translation>
    </message>
    <message>
        <source>Limitations :</source>
        <translation>Limitações:</translation>
    </message>
    <message>
        <source>ffDiaporama does not manage subtitles.</source>
        <translation>ffDiaporama não trabalha com legendas.</translation>
    </message>
    <message>
        <source>ffDiaporama generates files that include a single video track and a single audio track.</source>
        <translation>ffDiaporama gera arquivos que incluem uma faixa de vídeo único e uma única faixa de áudio.</translation>
    </message>
    <message>
        <source>Unlike music files, which are widely portable from one device to another, videos require a certain amount of juggling between various formats to adapt to the equipment used to play them.</source>
        <translation>Ao contrário de arquivos de música, que são amplamente portáteis de um dispositivo para outro, os vídeos exigem uma certa quantidade de malabarismo entre vários formatos para se adaptar ao equipamento utilizado para rodá-los.</translation>
    </message>
    <message>
        <source>A video rendered for a &quot;Home Cinema&quot; device can occupy several Gb and will be unreadable on a smartphone.</source>
        <translation>Um vídeo renderizado para um dispositivo &quot;Home Cinema&quot; pode ocupar vários Gb e será ilegível num smartphone.</translation>
    </message>
    <message>
        <source>The same video rendered for a smartphone will require only one Mb, and can be played on a &quot;Home Cinema&quot; device but it will look ugly.</source>
        <translation>O mesmo vídeo renderizado para um smartphone vai exigir apenas um Mb, e pode ser reproduzido num dispositivo &quot;Home Cinema&quot;, mas vai ficar feio.</translation>
    </message>
    <message>
        <source>That is why we recommend that you preserve your original project files as far as possible, and create from them videos suitable for the devices you wish to use for playback.</source>
        <translation>É por isso que recomendamos que você preserve seus arquivos originais do projeto, tanto quanto possível, e criar com eles vídeos apropriados para os dispositivos que você deseja usar para a reprodução.</translation>
    </message>
    <message>
        <source>To simplify settings for the rendering operation, ffDiaporama contains predefined settings for the following devices:</source>
        <translation>Para simplificar as configurações para a operação de renderização, ffDiaporama contém configurações pré-definidas para os seguintes dispositivos:</translation>
    </message>
    <message>
        <source>&lt;a href=&quot;0032.html&quot;&gt;Smartphones&lt;/a&gt; and &lt;a href=&quot;0033.html&quot;&gt;portable devices&lt;/a&gt;, and small video-playing devices in general</source>
        <translation>&lt;a href=&quot;0032.html&quot;&gt;Smartphones&lt;/a&gt; e &lt;a href=&quot;0033.html&quot;&gt;dispositivos portáteis&lt;/a&gt;,e pequenos dispositivos de vídeo-jogos em geral</translation>
    </message>
    <message>
        <source>&lt;a href=&quot;0034.html&quot;&gt;Multimedia systems&lt;/a&gt; for domestic use (&quot;Home Cinema&quot; devices)</source>
        <translation>&lt;a href=&quot;0034.html&quot;&gt;Sistemas Multimédia&lt;/a&gt; par uso domestico (dipositivos &quot;Home Cinema&quot;)</translation>
    </message>
    <message>
        <source>&lt;a href=&quot;0035.html&quot;&gt;Display on the Web&lt;/a&gt; (blogs, picture-sharing and social networking sites)</source>
        <translation>&lt;a href=&quot;0035.html&quot;&gt;Exibição na Web&lt;/a&gt; (blogs, sites de compartilhamento de imagem e redes sociais)</translation>
    </message>
    <message>
        <source>It is also possible for you to define all parameters directly by using the advanced option.</source>
        <translation>Também é possível que você defina todos os parâmetros diretamente usando a opção avançado.</translation>
    </message>
</context>
<context>
    <name>0032</name>
    <message>
        <source>Smartphones and tablets</source>
        <translation>Smartphones e tablets</translation>
    </message>
    <message>
        <source>Generally speaking the main differences between these devices are:</source>
        <translation>De um modo geral as principais diferenças entre esses dispositivos são:</translation>
    </message>
    <message>
        <source>Screen size and maximal resolution</source>
        <translation>Tamanho da tela e resolução máxima</translation>
    </message>
    <message>
        <source>Operating system on the device</source>
        <translation>Sistema operacional do dispositivo</translation>
    </message>
    <message>
        <source>Consult the documentation for your equipment or search the Internet to determine these two characteristics.</source>
        <translation>Consulte a documentação do seu equipamento ou pesquise na Internet para determinar essas duas características.</translation>
    </message>
    <message>
        <source>Device type</source>
        <translation>Tipo de dispositivo</translation>
    </message>
    <message>
        <source>Operating system</source>
        <translation>Sistema operacional</translation>
    </message>
    <message>
        <source>Available resolution</source>
        <translation>Resolução disponível</translation>
    </message>
    <message>
        <source>Remarks</source>
        <translation>Observações</translation>
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
        <translation>Geralmente, os telefones Nokia que trabalham com o sistema operacional Symbian e equipado com uma câmara, são capazes de reproduzir vídeos. Muitas vezes, aqueles fornecidos com um teclado oferecem uma resolução de 320 × 240 (QVGA), no entanto aqueles com apenas uma tela sensível ao toque oferecem uma resolução de 640 × 360 (VGA).</translation>
    </message>
    <message>
        <source>Movie format is: Container: MP4 - Video Codec: MPEG4 - Audio Codec: MP3</source>
        <translation>Formato de filme é: Recipiente: MP4 - Video Codec: MPEG4 - Codec de Áudio: MP3</translation>
    </message>
    <message>
        <source>Note: Video files should be stored in the &quot;My videos&quot; folder after connecting the telephone to the PC in &quot;mass storage&quot; mode. </source>
        <translation>Nota: Os arquivos de vídeo devem ser armazenados na pasta &quot;Meus vídeos&quot;, depois de ligar o telefone ao PC no modo &quot;Armazenamento em massa&quot;.</translation>
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
        <translation>Numerosos fabricantes fizeram telefones que utilizam o sistema operacional Microsoft Windows Mobile 6 (HP, HTC, etc), entre 2006 e 2010.</translation>
    </message>
    <message>
        <source>Movie format is: Container: 3GP - Video Codec: MPEG4 - Audio Codec: AMR</source>
        <translation>Formato de filme é:Recipiente: 3GP - Video Codec: MPEG4 - Codec de Áudio: AMR</translation>
    </message>
    <message>
        <source>Note: Store video files in the &quot;My videos&quot; folder having connected the telephone to the PC in &quot;mass storage&quot; mode. </source>
        <translation>Nota: Armazenar arquivos de vídeo na pasta &quot;Meus vídeos&quot; ter ligado o telefone ao PC no modo &quot;Armazenamento em massa&quot;. </translation>
    </message>
    <message>
        <source>Windows Phone 7</source>
        <translation>Windows Phone 7</translation>
    </message>
    <message>
        <source>Microsoft Windows Phone 7 is the evolution of Windows Mobil 6</source>
        <translation>Microsoft Windows Phone 7 é a evolução do Windows Mobil 6</translation>
    </message>
    <message>
        <source>Movie format is: Container: MP4 - Video Codec: h264 - Audio Codec: AAC-LC</source>
        <translation>Formato de filme é:Recipiente: MP4 - Video Codec: h264 - Codec de Áudio: AAC-LC</translation>
    </message>
    <message>
        <source>Android</source>
        <translation>Android</translation>
    </message>
    <message>
        <source>Many manufacturers made or still make phones using the Google Android operating system.</source>
        <translation>Muitos fabricantes fizeram ou ainda fazem os telefones que usam o sistema operacional Google Android.</translation>
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
        <translation>WebOS é oriundo da recompra da Palm pela HP.</translation>
    </message>
    <message>
        <source>&lt;B&gt;To be completed&lt;/B&gt;</source>
        <translation>&lt;B&gt;Para ser concluída&lt;/B&gt;</translation>
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
        <translation>Formato de filme é: Recipiente: AVI - Video Codec: MPEG4 - Codec de Áudio: MP3</translation>
    </message>
    <message>
        <source>Note: store video files in the \Blackberry\Video folder after connecting the telephone to the PC &quot;mass storage&quot; mode.</source>
        <translation>Nota: armazenar arquivos de vídeo na pasta &quot;\ BlackBerry \ Video&quot; depois de ligar o telefone para o modo PC &quot;armazenamento em massa&quot;.</translation>
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
        <translation>Tablet exemplos: Archos 4/5/70/Arnova 10, Dell Streak, criativo ZiiO 7</translation>
    </message>
    <message>
        <source>XGA</source>
        <translation>XGA</translation>
    </message>
    <message>
        <source>Tablet examples: Archos 101, Samsung Galaxy Tab, HTC Flyer, Hannspree HANNSpad SN10T, Toshiba Folio 100</source>
        <translation>Tablet exemplos: Archos 101, Samsung Galaxy Tab, HTC Flyer, Hannspree HANNSpad SN10T, Toshiba Folio 100</translation>
    </message>
    <message>
        <source>Tablet examples: HP TouchPad</source>
        <translation>Tablet exemplos: HP TouchPad</translation>
    </message>
    <message>
        <source>Tablet examples: ASUS Eee Pad, Motorola Xoom, Packard Bell Liberty Tab, LG Optimus Pad, Archos G9</source>
        <translation>Tablet exemplos: ASUS Eee Pad, Motorola Xoom, Packard Bell Liberdade Tab, LG Optimus Pad, Archos G9</translation>
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
        <translation>Requere codec xVid ou DivX para ser instalado no computador.</translation>
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
        <translation>Na medida em que está em causa a resolução, note que a maioria dos dispositivos pode reproduzir vídeos concebidos para dispositivos de baixa resolução, sem dificuldade.</translation>
    </message>
    <message>
        <source>The device models available in ffDiaporama are as follows: </source>
        <translation>Os modelos de dispositivos disponíveis no ffDiaporama são como se segue:</translation>
    </message>
</context>
<context>
    <name>0033</name>
    <message>
        <source>Portable devices</source>
        <translation>Dispositivos portáteis</translation>
    </message>
    <message>
        <source>These portable devices are usually very specific. We will not discuss therefore either operating system or resolution.</source>
        <translation>Estes aparelhos portáteis são de uso muito específico. Em consequência, não serão referidos, qualquer sistema ou resolução de funcionamento.</translation>
    </message>
    <message>
        <source>Device type</source>
        <translation>Tipo de dispositivo</translation>
    </message>
    <message>
        <source>Manufacturer/Model</source>
        <translation>Marca / Modelo</translation>
    </message>
    <message>
        <source>Remark</source>
        <translation>Observação</translation>
    </message>
    <message>
        <source>Portable player</source>
        <translation>Leitor portátil</translation>
    </message>
    <message>
        <source>DVD/DivX portable player (car player or travel player)</source>
        <translation>Leitor portátil DVD / DivX l (leitor de carro ou leitor de viagem)</translation>
    </message>
    <message>
        <source>All these devices use the old DVD/DIVX format with anamorphic resolution 720x576 (PAL) or 720x480 ( NTSC).</source>
        <translation>Todos esses dispositivos utilizam o formato DVD / DIVX velho com resolução anamórfica 720 × 576 (PAL) ou 720 × 480 (NTSC).</translation>
    </message>
    <message>
        <source>Movie format is: Container: AVI - Video Codec: MPEG4 - Audio Codec: MP3</source>
        <translation>Formato de filme é: Recipiente: AVI - Video Codec: MPEG4 - Codec de Áudio: MP3</translation>
    </message>
    <message>
        <source>If the device does not have a USB port, burn a DVD from your video files. Otherwise simply copy your files to a USB pendrive.</source>
        <translation>Se o dispositivo não tiver uma porta USB, gravar um DVD a partir de seus arquivos de vídeo. Caso contrário, basta copiar os arquivos para um pendrive USB.</translation>
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
        <translation>Estes dois Leitor portátil foram especialmente projectados para a música. Portanto, a resolução é apenas QVGA.</translation>
    </message>
    <message>
        <source>Movie format is: Container: MP4 - Video Codec: h264 - Audio Codec: AAC-LC</source>
        <translation>Formato de filme é: Recipiente: MP4 - Video Codec: h264 - Codec de Áudio: AAC-LC</translation>
    </message>
    <message>
        <source>Apple iPod Touch</source>
        <translation>Apple iPod Touch</translation>
    </message>
    <message>
        <source>This portable player has a video resolution comparable to the DVD (without anamorphism).</source>
        <translation>Este portátil tem uma resolução de imagem comparável ao DVD (sem anamorfismo).</translation>
    </message>
    <message>
        <source>Portable LED/LCD TV</source>
        <translation>TV Portátil LED /  LCD</translation>
    </message>
    <message>
        <source>These devices, when they support the HD TV, have a real resolution of 1024x576.</source>
        <translation>Estes dispositivos, quando eles suportam TV HD, tem uma verdadeira resolução de 1024 × 576.</translation>
    </message>
    <message>
        <source>Handheld game console</source>
        <translation>Videogame portátil</translation>
    </message>
    <message>
        <source>Sony PSP</source>
        <translation>Sony PSP</translation>
    </message>
    <message>
        <source>Resolution 320x480 / NTSC</source>
        <translation>Resolução de 320 × 480 / NTSC</translation>
    </message>
    <message>
        <source>-s 320x480 -b 512000 -ar 24000 -ab 64000 -f psp -r 29.97</source>
        <translation>-s 320x480 -b 512000 -ar 24000 -ab 64000 -f psp -r 29.97</translation>
    </message>
    <message>
        <source>-ac 2 -ar 48000 -acodec libfAAC-LC -ab 128k -r FRAME_RATE -s WIDTHxHEIGHT -vcodec libh264 -vpre slower -vpre main -level 21 -refs 2 -b BIT_RATE -bt BIT_RATE -aspect WIDTH:HEIGHT -f psp</source>
        <translation>-Ac 2-ar 48000-acodec libfaac-LC-ab 128k-r-s FRAME_RATE LARGURAxALTURA-vcodec libh264-vpre mais lento vpre  nível principal de 21-refs 2-b BIT_RATE-bt-BIT_RATE aspecto Largura: Altura-f-f psp</translation>
    </message>
</context>
<context>
    <name>0034</name>
    <message>
        <source>Multimedia system (Home cinema)</source>
        <translation>Sistema multimédia (cinema em casa)</translation>
    </message>
    <message>
        <source>Device type</source>
        <translation>Tipo de dispositivo</translation>
    </message>
    <message>
        <source>Manufacturer/Model</source>
        <translation>Marca / Modelo</translation>
    </message>
    <message>
        <source>Remark</source>
        <translation>Observação</translation>
    </message>
    <message>
        <source>TV box of ADSL box</source>
        <translation>Caixa de TV da caixa ADSL (TV box of ADSL box)</translation>
    </message>
    <message>
        <source>France - Livebox (Orange)</source>
        <translation>França - Livebox (Orange)</translation>
    </message>
    <message>
        <source>All these devices support the old DVD/DIVX format with anamorphic resolution 720x576 (PAL) for the DVD resolution</source>
        <translation>Todos esses dispositivos suportam o formato DVD / DIVX velho com resolução anamórfica 720 × 576 (PAL) para a resolução de DVD</translation>
    </message>
    <message>
        <source>Movie format is: Container: AVI - Video Codec: MPEG4 - Audio Codec: MP3</source>
        <translation>Formato de filme é: Recipiente: AVI - Video Codec: MPEG4 - Codec de Áudio: MP3</translation>
    </message>
    <message>
        <source>All these devices support the MP4 format up to the FullHD 1080p resolution</source>
        <translation>Todos esses dispositivos suportam o formato MP4 até a resolução de 1080p FullHD</translation>
    </message>
    <message>
        <source>Movie format is: Container: MP4 - Video Codec: h264 - Audio Codec: AAC-LC</source>
        <translation>Formato de filme é: Recipiente: MP4 - Video Codec: h264 - Codec de Áudio: AAC-LC</translation>
    </message>
    <message>
        <source>Copy your video files to a USB pendrive or an external hard disk and use the multimedia player integrated into the menu of the decoder</source>
        <translation>Copie os arquivos de vídeo para um pendrive USB ou um disco rígido externo e utilize o leitor multimédia integrado no menu do descodificador</translation>
    </message>
    <message>
        <source>France - Freebox</source>
        <translation>França - Freebox</translation>
    </message>
    <message>
        <source>France - Neufbox (SFR)</source>
        <translation>França - Neufbox (SFR)</translation>
    </message>
    <message>
        <source>France - Bbox (Bouygues Telecom)</source>
        <translation>França - Bbox (Bouygues Telecom)</translation>
    </message>
    <message>
        <source>Multimedia hard drive and gateway</source>
        <translation>Disco rígido e dispositivo de multimédia</translation>
    </message>
    <message>
        <source>All manufacturers</source>
        <translation>Todos os fabricantes</translation>
    </message>
    <message>
        <source>Equipments supporting HD (to verify in the technical specifications of the device) support the MP4 format until the FullHD 1080p resolution</source>
        <translation>Equipamentos com suporte HD (verifique nas especificações técnicas do aparelho) suportam o formato de MP4 até a resolução de 1080p FullHD</translation>
    </message>
    <message>
        <source>Player</source>
        <translation>Leitor</translation>
    </message>
    <message>
        <source>DVD/DivX Player</source>
        <translation>Leitor DVD/DivX</translation>
    </message>
    <message>
        <source>These devices only support the old DVD/DIVX format with anamorphic resolution 720x576 (PAL) for the DVD resolution</source>
        <translation>Estes dispositivos só suportam o formato DVD / DIVX velho com resolução anamórfica 720 × 576 (PAL) para a resolução de DVD</translation>
    </message>
    <message>
        <source>If the device does not have an USB connector: burn a DVD with your video files. Otherwise simply copy your videos files to a USB pendrive.</source>
        <translation>Se o dispositivo não tiver uma ligaçãoUSB: gravar um DVD com os seus arquivos de vídeo. Caso contrário, basta copiar seus arquivos de vídeos para um pendrive USB.</translation>
    </message>
    <message>
        <source>BlueRay player</source>
        <translation>Leitor BlueRay</translation>
    </message>
    <message>
        <source>&lt;B&gt;To be completed&lt;/B&gt;</source>
        <translation>&lt;B&gt;Para ser concluída&lt;/B&gt;</translation>
    </message>
    <message>
        <source>Games console</source>
        <translation>Consola de jogos</translation>
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
        <translation>Estes dispositivos &quot;Cinema em Casa&quot; estão ligados um aparelho de televisão. A escolha do formato será, assim, de ser feita de acordo com os requisitos do conjunto utilizado.</translation>
    </message>
    <message>
        <source>Warning: The old SD format is only suitable for old television sets using cathode ray tube technology. With these tubes, points were not circular but oval: we call this anamorphism. </source>
        <translation>Aviso: O formato antigo SD só é adequado para as televisões antigas definidas pela utilização da tecnologia de tubo de raios catódicos. Com estes tubos, os pontos não eram circulares, mas oval: chamamos isso anamorphism.</translation>
    </message>
    <message>
        <source>Playing a video in SD format on a modern LCD, LED or plasma television set gives openly disastrous results: The image is particularly ugly! Thus, if your television is new and if your device allows it, always use a HD or Full-HD format in preference to a SD format. </source>
        <translation>A reprodução de vídeo em formato SD numa televisão moderna LCD, LED ou plasma, (aparelho de televisão ampla) dá resultados desastrosos: A imagem é particularmente feia! Assim, se a sua televisão é nova e se o dispositivo permite que ele, use sempre um formato HD ou Full-HD, de preferência ao formato SD. </translation>
    </message>
</context>
<context>
    <name>0035</name>
    <message>
        <source>For the WEB</source>
        <translation>Para a WEB</translation>
    </message>
    <message>
        <source>Device type</source>
        <translation>Tipo de dispositivo</translation>
    </message>
    <message>
        <source>Manufacturer/Model</source>
        <translation>Marca / Modelo</translation>
    </message>
    <message>
        <source>Remark</source>
        <translation>Observação</translation>
    </message>
    <message>
        <source>Flash player (SWF)</source>
        <translation>Leitor Flash (SWF)</translation>
    </message>
    <message>
        <source>All SWF players</source>
        <translation>Todos os leitores (SWF)</translation>
    </message>
    <message>
        <source>To be used with the HTML tag object class=&quot;player&quot; type=&quot;application/x-shockwave-flash&quot;</source>
        <translation>Para ser usado com a classe de objeto HTML tag = tipo &quot;Leitor&quot; = &quot;application / x-shockwave-flash&quot;</translation>
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
        <translation>Formato de filme é: Recipiente: SWF (2008) - Video Codec: h264 - Codec de Áudio: AAC-LC</translation>
    </message>
    <message>
        <source>Sharing and social networking</source>
        <translation>Compartilhamento e redes sociais</translation>
    </message>
    <message>
        <source>Youtube</source>
        <translation>Youtube</translation>
    </message>
    <message>
        <source>720p - Movie format is: Container: MP4 - Video Codec: xVid - Audio Codec: MP3</source>
        <translation>720p - formato do filme é: Recipiente: MP4 - Video Codec: Xvid - Codec de Áudio: MP3</translation>
    </message>
    <message>
        <source>Daily Motion</source>
        <translation>Daily Motion</translation>
    </message>
    <message>
        <source>720p - Movie format is: Container: MP4 - Video Codec: h264 - Audio Codec: AAC-LC</source>
        <translation>720p - formato do filme é: Recipiente: MP4 - Video Codec: h264 - Codec de Áudio: AAC-LC</translation>
    </message>
    <message>
        <source>Facebook</source>
        <translation>Facebook</translation>
    </message>
    <message>
        <source>Publish the video on YouTube or Daily Motion and integrate a link towards this video into Facebook</source>
        <translation>Publicar o vídeo no YouTube ou Daily Motion e integrar um link para este vídeo no Facebook</translation>
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
        <translation>Para ser adicionado para permitir que o novo vídeo TAG em  HTML5 browsers.</translation>
    </message>
    <message>
        <source>WebM is an open source format usable with Firefox, Google Chrome and Opera </source>
        <translation>WebM é um formato open source utilizável com  Firefox , Google Chrome e Opera</translation>
    </message>
    <message>
        <source>H264 is a format usable in Safari, Internet Explorer and Google Chrome </source>
        <translation>H264 é um formato utilizável no Safari, Internet Explorer e Google Chrome</translation>
    </message>
    <message>
        <source>To maintain backward compatibility with older browsers, it is advisable to offer a flash version within the tag. See: </source>
        <translation>Para manter a compatibilidade com os navegadores mais antigos , é aconselhável usar uma versão em flash dentro da tag. Ver: </translation>
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
        <translation>Codec de vídeo</translation>
    </message>
    <message>
        <source>The following table lists the video codecs which ffDiaporama can use to generate videos:</source>
        <translation>A tabela seguinte lista os codecs de vídeo que ffDiaporama pode usar para gerar vídeos:</translation>
    </message>
    <message>
        <source>Codec</source>
        <translation>Codec</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Nome</translation>
    </message>
    <message>
        <source>WIKIPEDIA/Remark</source>
        <translation>WIKIPEDIA/Observação</translation>
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
        <translation>http://en.wikipedia.org/wiki/MPEG-2</translation>
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
        <translation>http://en.wikipedia.org/wiki/Xvid</translation>
    </message>
    <message>
        <source>H264HQ</source>
        <translation>H264HQ</translation>
    </message>
    <message>
        <source>High Quality H.264 AVC/MPEG-4 AVC</source>
        <translation>Alta Qualidade H.264 AVC AVC/MPEG-4 AVC</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/H.264/MPEG-4_AVC</source>
        <translation>http://en.wikipedia.org/wiki/H.264/MPEG-4_AVC</translation>
    </message>
    <message>
        <source>H264PQ</source>
        <translation>H264PQ</translation>
    </message>
    <message>
        <source>Phone Quality H.264 AVC/MPEG-4 AVC</source>
        <translation>Qualidade telefone H.264 AVC AVC/MPEG-4</translation>
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
        <translation>http://en.wikipedia.org/wiki/X264</translation>
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
        <translation>http://en.wikipedia.org/wiki/WebM</translation>
    </message>
    <message>
        <source>Sorenson H.263</source>
        <translation>Sorenson H.263</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/H.263</source>
        <translation>http://en.wikipedia.org/wiki/H.263</translation>
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
        <translation>http://en.wikipedia.org/wiki/Theora</translation>
    </message>
    <message>
        <source>ffDiaporama uses specific settings for encoding with x264. This settings are including: </source>
        <translation>ffDiaporama usa configurações específicas para codificar com x264. Estas configurações estão incluindo:</translation>
    </message>
    <message>
        <source>- &lt;B&gt;High Quality&lt;/B&gt; for &quot;Home Cinema&quot; devices based on x264 &lt;U&gt;main&lt;/U&gt; profile, with 3 refs and 3 bframes. </source>
        <translation>- &lt;B&gt; Alta qualidade &lt;/B&gt; para dispositivos &quot;Cinema em Casa&quot;, com base em x264 &lt;U&gt; principal &lt;/U&gt; perfil, com 3 refs e 3 bframes.</translation>
    </message>
    <message>
        <source>- &lt;B&gt;Phone Quality&lt;/B&gt; for mobile devices based on x264 &lt;U&gt;baseline&lt;/U&gt; profile, with 3 refs and 0 bframes. </source>
        <translation>- &lt;B&gt; Qualidade Telefone &lt;/B&gt; para dispositivos móveis baseados em x264 &lt;U&gt; base &lt;/U&gt; perfil, com 3 refs e 0 bframes. </translation>
    </message>
    <message>
        <source>ffDiaporama uses the standard x264 &lt;U&gt;fast&lt;/U&gt; preset with 3 refs and qp set to 0.</source>
        <translation>ffDiaporama usa o padrão x264 &lt;U&gt; rápido &lt;/U&gt; preset com 3 refs e qp definido para 0.</translation>
    </message>
    <message>
        <source>Both settings are using &lt;U&gt;veryfast&lt;/U&gt; preset. </source>
        <translation>Ambas as configurações estão usando &lt;U&gt;muito rápido&lt;/U&gt;como predefinido. </translation>
    </message>
    <message>
        <source>Note: Variable bitrate is used with these two codecs. For more information on variable bitrate, see: &lt;a href=&quot;0115.html&quot;&gt;Render video&lt;/a&gt;</source>
        <translation>Nota: Taxa de bits variável é utilizada com estes dois codecs. Para mais informações sobre taxa de bits variável, veja: &lt;a href=&quot;0115.html&quot;&gt;Renderizar vídeo&lt;/a&gt;</translation>
    </message>
</context>
<context>
    <name>0037</name>
    <message>
        <source>Audio codec</source>
        <translation>Codec de áudio</translation>
    </message>
    <message>
        <source>The following table lists the audio codecs which ffDiaporama can use to generate videos:</source>
        <translation>A tabela seguinte lista os codecs de áudio que ffDiaporama pode usar para gerar vídeos:</translation>
    </message>
    <message>
        <source>Codec</source>
        <translation>Codec</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Nome</translation>
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
        <translation>http://en.wikipedia.org/wiki/MP3</translation>
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
        <translation>http://en.wikipedia.org/wiki/Advanced_Audio_Coding</translation>
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
        <translation>http://en.wikipedia.org/wiki/Dolby_Digital</translation>
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
        <translation>http://en.wikipedia.org/wiki/Vorbis</translation>
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
        <translation>Recipiente</translation>
    </message>
    <message>
        <source>The following table lists the containers which ffDiaporama can use to generate videos, as well as the available audio and video codecs for every container:</source>
        <translation>A tabela seguinte lista os recipientes que ffDiaporama pode usar para gerar vídeos, assim como o áudio disponível e codecs de vídeo para cada recipiente:</translation>
    </message>
    <message>
        <source>Extension</source>
        <translation>Extensão</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Nome</translation>
    </message>
    <message>
        <source>Video Codecs</source>
        <translation>Codec de vídeo</translation>
    </message>
    <message>
        <source>Audio Codecs</source>
        <translation>Codec de áudio</translation>
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
        <translation>http://en.wikipedia.org/wiki/Audio_Video_Interleave</translation>
    </message>
    <message>
        <source>MKV</source>
        <translation>MKV</translation>
    </message>
    <message>
        <source>Matroska file format</source>
        <translation>Formato ficheiro Matroska</translation>
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
        <translation>http://en.wikipedia.org/wiki/Matroska</translation>
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
        <translation>http://en.wikipedia.org/wiki/Motion_JPEG</translation>
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
        <translation>http://en.wikipedia.org/wiki/WebM</translation>
    </message>
    <message>
        <source>FLV</source>
        <translation>FLV</translation>
    </message>
    <message>
        <source>Flash file format 2005</source>
        <translation>Formato ficheiro Flash 2005</translation>
    </message>
    <message>
        <source>MP3</source>
        <translation>MP3</translation>
    </message>
    <message>
        <source>http://en.wikipedia.org/wiki/Adobe_Flash</source>
        <translation>http://en.wikipedia.org/wiki/Adobe_Flash</translation>
    </message>
    <message>
        <source>Flash file format 2008</source>
        <translation>Formato ficheiro Flash 2008</translation>
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
        <translation>http://en.wikipedia.org/wiki/Ogg</translation>
    </message>
</context>
<context>
    <name>0039</name>
    <message>
        <source>Video standards and resolutions</source>
        <translation>Padrões de vídeo e resoluções</translation>
    </message>
    <message>
        <source> Standards and resolution are both fundamental properties which define a video. </source>
        <translation>Os padrões e resolução são as duas propriedades fundamentais que definem um vídeo. </translation>
    </message>
    <message>
        <source>Two associated properties are the geometry and the FPS number. </source>
        <translation>As duas propriedades associadas são a geometria e do número de QPS.</translation>
    </message>
    <message>
        <source>Standard</source>
        <translation>Padrões</translation>
    </message>
    <message>
        <source> Standards are a historic feature which continues today in spite of technological progress. </source>
        <translation>Padrões são uma característica histórica que continua até hoje, apesar do progresso tecnológico. </translation>
    </message>
    <message>
        <source>A rich literature on this subject can be found on the internet. </source>
        <translation>Uma literatura rica sobre este assunto pode ser encontrada na internet. </translation>
    </message>
    <message>
        <source>To simplify things we shall summarize as follows: </source>
        <translation>Para simplicficar podemos resumir da seguinte forma: </translation>
    </message>
    <message>
        <source>PAL is effective in all the countries where the electricity network is 50 hz (which is the case, for example, for Western European countries)</source>
        <translation>PAL é eficaz em todos os países onde a rede de electricidade é de 50 Hz (que é o caso, por exemplo, para países da Europa ocidental)</translation>
    </message>
    <message>
        <source>NTSC is effective in all the countries where the electricity network is 60 hz (which is the case, for example, for the United States of America)</source>
        <translation>NTSC é eficaz em todos os países onde a rede de electricidade é 60 Hz (que é o caso, por exemplo, para os Estados Unidos da América)</translation>
    </message>
    <message>
        <source>Geometry</source>
        <translation>Geometria</translation>
    </message>
    <message>
        <source> The geometry is the ratio of Width to Height. </source>
        <translation>A Geometria é a relação entre largura e altura.</translation>
    </message>
    <message>
        <source>4:3 corresponds to screens that are almost square</source>
        <translation>4:3 Corresponde a telas que são quase quadradas</translation>
    </message>
    <message>
        <source>16:9 corresponds to screens that are rectangular</source>
        <translation>16:9 Corresponde à telas que são rectangulares</translation>
    </message>
    <message>
        <source>40:17 corresponds to cinema screens in overall size</source>
        <translation>40:17 Corresponde às telas de cinema em tamanho total </translation>
    </message>
    <message>
        <source>Resolution</source>
        <translation>Resolução</translation>
    </message>
    <message>
        <source> Unlike with photos, video resolution is not expressed in megapixels but in number of points (pixels) shown by the screen multiplied by the number of lines. </source>
        <translation>Ao contrário com fotografias, a resolução de vídeo não é expressa em megapixéis mas em número de pontos (pixels) mostrados pela tela multiplicada pelo número de linhas. </translation>
    </message>
    <message>
        <source>So, 320x240 corresponds to 320 points of width and 240 lines in height </source>
        <translation> Assim, a título de exemplo, 320 × 240 corresponde a 320 pontos de largura e 240 linhas de altura </translation>
    </message>
    <message>
        <source>FPS (Frames per second)</source>
        <translation>QPS (quadros por segundo) ou FPS (frames por segundo)</translation>
    </message>
    <message>
        <source> Corresponds to the number of images shown every second. You should know that in cinemas, 24 images are shown per second and this figure of 24 images is recognized as corresponding to the maximum number of images which the eye is capable of differentiating: </source>
        <translation>Corresponde ao número de imagens apresentadas em cada segundo. Você deve saber que nas salas de cinema, 24 imagens são mostradas por segundo e este número de 24 imagens é reconhecido como correspondente ao número máximo de imagens que o olho é capaz de diferenciar:</translation>
    </message>
    <message>
        <source>More images per second and the eye does not notice it</source>
        <translation>Mais imagens por segundo e olho não percebe</translation>
    </message>
    <message>
        <source>Fewer images per second and the film appears jerky</source>
        <translation>Menos imagens por segundo e do filme parece “turvo”</translation>
    </message>
    <message>
        <source>Matrix of combinations managed by ffDiaporama</source>
        <translation>Matriz de combinações gerido pela ffDiaporama</translation>
    </message>
    <message>
        <source> The following table indicates all the combinations of geometry, standards and resolutions managed by ffDiaporama. For every combination, it indicates the number of associated FPS: </source>
        <translation>A tabela seguinte indica todas as combinações de geometria, normas e resoluções geridos pela ffDiaporama. Para cada combinação é indicado o número de QPS associados:</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Nome</translation>
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
        <translation>Observação</translation>
    </message>
    <message>
        <source>FPS</source>
        <translation>QPS</translation>
    </message>
    <message>
        <source>RIM 240</source>
        <translation>RIM 240</translation>
    </message>
    <message>
        <source>24 FPS</source>
        <translation>24 QPS</translation>
    </message>
    <message>
        <source>Special format used on Blackberry&apos;s very small screen</source>
        <translation>Formato especial utilizado na tela muito pequena Blackberry</translation>
    </message>
    <message>
        <source>QVGA</source>
        <translation>QVGA</translation>
    </message>
    <message>
        <source>25 FPS</source>
        <translation>25 QPS</translation>
    </message>
    <message>
        <source>29,97 FPS</source>
        <translation>29,97 QPS</translation>
    </message>
    <message>
        <source>Used mainly on the Internet and by first generation smartphones and mobile video players.</source>
        <translation>Usado principalmente na internet e por smartphones de primeira geração e reprodutores de vídeo portáteis.</translation>
    </message>
    <message>
        <source>HVGA</source>
        <translation>HVGA</translation>
    </message>
    <message>
        <source>Used mainly on the Internet and by second generation smartphones and mobile video players. &lt;B&gt;Because this format does not respect the traditional video geometry&lt;/B&gt;, &lt;B&gt;black bands appear to fill the screen to 480x320.&lt;/B&gt;</source>
        <translation>Usado principalmente na internet e por smartphones de segunda geração e reprodutores de vídeo portáteis. &lt;B&gt;Devido a este formato não respeitar a geometria de vídeo tradicionais&lt;/B&gt;, &lt;B&gt;faixas pretas aparecem para preencher a tela de 480 × 320..&lt;/B&gt;</translation>
    </message>
    <message>
        <source>VGA</source>
        <translation>VGA</translation>
    </message>
    <message>
        <source>Used mainly on the Internet and by some smartphones.</source>
        <translation>Usado principalmente na internet e por alguns smartphones.</translation>
    </message>
    <message>
        <source>SD-DVD</source>
        <translation>SD-DVD</translation>
    </message>
    <message>
        <source>The old television format for cathode ray tubes. Note that this format was specifically created for equipment with oval points: It is the anamorphism of the points that determines the geometry. That is why &lt;B&gt;it is absolutely necessary to avoid this format for anything other than television sets with cathode ray tubes.&lt;/B&gt;</source>
        <translation>O formato de televisão antiga para tubos de raios catódicos. Note que este formato foi criado especificamente para equipamentos com pontos ovais: É o anamorfismo dos pontos que determinam a geometria. É por isso que &lt;B&gt;é absolutamente necessário para evitar este formato para qualquer outra coisa do que os televisores com tubos de raios catódicos..&lt;/B&gt;</translation>
    </message>
    <message>
        <source>WVGA</source>
        <translation>WVGA</translation>
    </message>
    <message>
        <source>Used mainly on the Internet and by new generation smartphones and mobile video players. This format has become widespread and has replaced the old  QVGA, HVGA and VGA format used in the years 2000-2010. &lt;B&gt;Because this format does not respect the traditional video geometries, black bands appear to fill the screen to 800x480.&lt;/B&gt;</source>
        <translation>Usado principalmente na internet e por smartphones da nova geração e aparelhos de vídeo móveis. Este formato tornou-se generalizado e substituiu o antigo QVGA, VGA e HVGA formato utilizado nos anos 2000-2010. &lt;B&gt;Devido a este formato não respeitar as geometrias de vídeo tradicionais, faixas pretas aparecem para preencher a tela para 800 × 480.&lt;/B&gt;</translation>
    </message>
    <message>
        <source>XGA</source>
        <translation>XGA</translation>
    </message>
    <message>
        <source>Historically this format was used only by computers (fixed or portable). Now we meet it more and more on tablet computers like the iPad.</source>
        <translation>Historicamente, este formato foi usado apenas por computadores (fixo ou portátil). Hoje encontram-se cada vez mais em computadores tipo tablet como o iPad.</translation>
    </message>
    <message>
        <source>23,976 FPS</source>
        <translation>23,976 QPS</translation>
    </message>
    <message>
        <source>Today, this format is widely used on the Internet, in particular by social networking and video-sharing sites. We also find it on certain &quot;home cinema&quot; devices.</source>
        <translation>Hoje, este formato é amplamente utilizado na Internet, nomeadamente através de redes sociais e sites de compartilhamento.Também se encontram em certos dispositivos &quot;home cinema&quot;.</translation>
    </message>
    <message>
        <source>This is the real &quot;home cinema&quot; format. It is used by the Blue Ray players and the &quot;home cinema&quot; devices.</source>
        <translation>Este é o verdadeiro formato &quot;home cinema&quot;. É usado pelos leitores Blue Ray e os dispositivos &quot;home cinema&quot;.</translation>
    </message>
    <message>
        <source>Note that many other resolutions exists but which are not used by ffDiaporama.</source>
        <translation>Note-se que muitas outras resoluções existem mas que não são utilizados por ffDiaporama.</translation>
    </message>
</context>
<context>
    <name>003A</name>
    <message>
        <source>File attachments (Thumbnails, nfo, etc...)</source>
        <translation>Ficheiros anexados (Miniaturas, nfo, etc...)</translation>
    </message>
    <message>
        <source>ffDiaporama allows you to produce joint files during the rendering process.</source>
        <translation>ffDiaporama permite produzir arquivos conjuntos durante o processo de renderização.</translation>
    </message>
    <message>
        <source>The following files are availables:</source>
        <translation>Os seguintes arquivos estão disponíveis:</translation>
    </message>
    <message>
        <source>Thumbnails</source>
        <translation>Miniaturas</translation>
    </message>
    <message>
        <source>A video or music file can be accompanied with an image file which must have the same name but with the .jpg extension (example: holidays.mkv and holidays.jpg in the same folder). </source>
        <translation>Um arquivo de vídeo ou música pode ser acompanhada de um arquivo de imagem que deve ter o mesmo nome mas com a extensão jpg (exemplo: holidays.mkv e holidays.jpg na mesma pasta). </translation>
    </message>
    <message>
        <source>This image is called a thumbnail and is used as icon for this file by ffDiaporama and many </source>
        <translatorcomment>many? means &quot;many others&quot; ?</translatorcomment>
        <translation>Esta imagem é chamada de miniatura e é usada como ícone para este arquivo ffDiaporama e muitos outros </translation>
    </message>
    <message>
        <source>Media Center Systems</source>
        <translation>Centro de Sistemas Média (Media Center Systems)</translation>
    </message>
    <message>
        <source>XBMC .nfo files</source>
        <translation>Ficheiros XBMC .nfo</translation>
    </message>
    <message>
        <source>The .nfo file for XBMC allows XBMC to recognize the rendered videos as movies. </source>
        <translation>O arquivo .nfo para XBMC permite ao XBMC reconhecer os vídeos renderizados como filmes.</translation>
    </message>
    <message>
        <source>For more information see: &lt;a href=&quot;0044.html&quot;&gt;XBMC nfo files&lt;/a&gt;</source>
        <translation>Para mais informações consulte: &lt;a href=&quot;0044.html&quot;&gt; arquivos XBMC .nfo &lt;/a&gt;</translation>
    </message>
</context>
<context>
    <name>0040</name>
    <message>
        <source>Technical information on ffDiaporama</source>
        <translation>Informações técnicas sobre ffDiaporama</translation>
    </message>
    <message>
        <source> This section contains technical information about ffDiaporama. </source>
        <translation> Esta seção contém informações técnicas sobre ffDiaporama. </translation>
    </message>
    <message>
        <source>Index</source>
        <translation>Índice</translation>
    </message>
    <message>
        <source>ffDiaporama command line arguments</source>
        <translation>Argumentos de linha de comando ffDiaporama</translation>
    </message>
    <message>
        <source>ffDiaporama project files</source>
        <translation>Arquivos de projecto ffDiaporama</translation>
    </message>
    <message>
        <source>The configuration files for ffDiaporama</source>
        <translation>Os arquivos de configuração para o ffDiaporama</translation>
    </message>
    <message>
        <source>XBMC nfo files</source>
        <translation>Ficheiros XBMC nfo</translation>
    </message>
    <message>
        <source>Types of objects in ffDiaporama</source>
        <translation>Tipos de objectos no ffDiaporama</translation>
    </message>
</context>
<context>
    <name>0041</name>
    <message>
        <source>ffDiaporama command line arguments</source>
        <translation>Argumentos de linha de comando ffDiaporama</translation>
    </message>
    <message>
        <source>Syntax : ffDiaporama [-lang=] [-loglevel=] [Filename]</source>
        <translation>Sintaxe: ffDiaporama [-lang =] [-loglevel =] [arquivo] </translation>
    </message>
    <message>
        <source>Setting</source>
        <translation>Configuração</translation>
    </message>
    <message>
        <source>Explanation</source>
        <translation>Explicação</translation>
    </message>
    <message>
        <source>Filename</source>
        <translation>Nome do ficheiro</translation>
    </message>
    <message>
        <source>Filename of the project file to load at application startup</source>
        <translation>Nome do arquivo de projecto para carregar na inicialização do aplicativo</translation>
    </message>
    <message>
        <source>-lang=</source>
        <translation>-lang=</translation>
    </message>
    <message>
        <source>The language to be used. can take the following values: </source>
        <translation>A língua (idioma) a ser usada. Pode tomar os seguintes valores:</translation>
    </message>
    <message>
        <source>&lt;B&gt;cz&lt;/B&gt; to use Czech</source>
        <translation>&lt;B&gt;cz&lt;/B&gt; para usar Checa</translation>
    </message>
    <message>
        <source>&lt;B&gt;de&lt;/B&gt; to use German</source>
        <translation>&lt;B&gt;de&lt;/B&gt; para usar Alemã</translation>
    </message>
    <message>
        <source>&lt;B&gt;en&lt;/B&gt; to use English</source>
        <translation>&lt;B&gt;en&lt;/B&gt; para usar Inglês</translation>
    </message>
    <message>
        <source>&lt;B&gt;es&lt;/B&gt; to use Spanish</source>
        <translation>&lt;B&gt;es&lt;/B&gt; para usar Espanhol</translation>
    </message>
    <message>
        <source>&lt;B&gt;el&lt;/B&gt; to use Greek</source>
        <translation>&lt;B&gt;el&lt;/B&gt; para usar Grego</translation>
    </message>
    <message>
        <source>&lt;B&gt;fr&lt;/B&gt; to use French</source>
        <translation>&lt;B&gt;fr&lt;/B&gt; para usar Francês</translation>
    </message>
    <message>
        <source>&lt;B&gt;it&lt;/B&gt; to use Italian</source>
        <translation>&lt;B&gt;it&lt;/B&gt; para usar Italiana</translation>
    </message>
    <message>
        <source>&lt;B&gt;nl&lt;/B&gt; to use Dutch</source>
        <translation>&lt;B&gt;nl&lt;/B&gt; para usar Holandesa</translation>
    </message>
    <message>
        <source>&lt;B&gt;pt&lt;/B&gt; to use Portuguese</source>
        <translation>&lt;B&gt;pt&lt;/B&gt; para usar Portuguêsa</translation>
    </message>
    <message>
        <source>&lt;B&gt;ru&lt;/B&gt; to use Russian</source>
        <translation>&lt;B&gt;ru&lt;/B&gt; para usar Russo</translation>
    </message>
    <message>
        <source>&lt;B&gt;zh-tw&lt;/B&gt; to use Taiwanese</source>
        <translation>&lt;B&gt;zh-tw&lt;/B&gt; para usar Taiwan</translation>
    </message>
    <message>
        <source>-loglevel=</source>
        <translation>-loglevel=</translation>
    </message>
    <message>
        <source>Adjust the level of messages shown in the console: </source>
        <translation>Ajuste do nível de mensagens mostradas na consola de comandos:</translation>
    </message>
    <message>
        <source>1 to show all the messages of Debug, Information, Warning and Error levels</source>
        <translation>1 para mostrar todas as mensagens dos níveis de Debug, Informação, Aviso e Erro</translation>
    </message>
    <message>
        <source>2 to show the messages of Information, Warning and Error levels</source>
        <translation> 2 para mostrar as mensagens de níveis de Informação, Aviso e Erro</translation>
    </message>
    <message>
        <source>3 to show the messages of Warning and Error levels</source>
        <translation>3 para mostrar as mensagens de níveis de alerta e de erro</translation>
    </message>
    <message>
        <source>4 to show only the messages of Error levels</source>
        <translation>4 para mostrar apenas as mensagens dos níveis de erro</translation>
    </message>
    <message>
        <source> Note: messages appear only if you launched the program from a console (CMD under Windows or Terminal under Linux). It is possible to redirect these messages into a log file by using &gt;. </source>
        <translation>Nota: As mensagens só aparecem se você lançou o programa a partir de uma consola de comandos (CMD no Windows ou no Linux Terminal). É possível redireccionar essas mensagens para um arquivo de log usando &gt;. </translation>
    </message>
    <message>
        <source>&lt;B&gt;gl&lt;/B&gt; to use Galician</source>
        <translation>&lt;B&gt;gl&lt;/B&gt;para usar Galego</translation>
    </message>
</context>
<context>
    <name>0042</name>
    <message>
        <source>ffDiaporama project files</source>
        <translation>Arquivos de projecto ffDiaporama</translation>
    </message>
    <message>
        <source>Project files for ffDiaporama are XML files with .ffd extension.</source>
        <translation>Arquivos de projecto para ffDiaporama são arquivos XML com extensão .ffd.</translation>
    </message>
    <message>
        <source>This XML file does not contain copies of the multimedia elements (image, video, music) which are included in the project but only links to these files.</source>
        <translation>Este arquivo XML não contém cópias dos elementos multimédia (imagem, vídeo, música) que estão incluídas no projeto, mas apenas links para esses arquivos.</translation>
    </message>
    <message>
        <source>The links are relative to the location of the .ffd file. This ensures that if the directory containing the project file (.ffd ) also contains the multimedia elements (directly or in subdirectories), it is possible to move and/or to rename the directory.</source>
        <translation>As ligações (links) são em relação à localização do ficheiro de .ffd. Isso garante que se o directório que contém o arquivo de projecto (.ffd) também contém os elementos multimídia (directamente ou em subdirectórios), é possível mover e / ou renomear o directório.</translation>
    </message>
    <message>
        <source>Another advantage is that a project created under Linux can be opened under Windows and conversely.</source>
        <translation>Outra vantagem é que um projecto criado no Linux pode ser aberto no Windows e vice-versa.</translation>
    </message>
</context>
<context>
    <name>0043</name>
    <message>
        <source>The configuration files for ffDiaporama</source>
        <translation>Os arquivos de configuração para o ffDiaporama</translation>
    </message>
    <message>
        <source>The primary ffDiaporama.xml file is stored in the ffDiaporama directory. This file is global for all users: it contains the default ffDiaporama application settings. </source>
        <translation>O arquivo ffDiaporama.xml primário é armazenado no directório ffDiaporama. Este arquivo é global para todos os utilizadores: contém as configurações do aplicativo ffDiaporama padrão.</translation>
    </message>
    <message>
        <source>For Windows, this is C:\Program Files\ffDiaporama</source>
        <translation>Para o Windows, é C: \ Program Files \ ffDiaporama</translation>
    </message>
    <message>
        <source>For Linux, it is /usr/share/ffDiaporama</source>
        <translation>Para Linux, é / usr / share / ffDiaporama</translation>
    </message>
    <message>
        <source>A secondary user-specific ffDiaporama.xml file is stored in the user&apos;s profile folder. </source>
        <translation>Um arquivo ffDiaporama.xml específico do utilizador secundário é armazenado na pasta de perfil do utilizador.</translation>
    </message>
    <message>
        <source>For Windows, this is C:\Document and settings\[user]</source>
        <translation>Para o Windows, é C: \ Document and Settings \ [utilizador]</translation>
    </message>
    <message>
        <source>For Linux, it is ~/.ffDiaporama</source>
        <translation>Para Linux, é ~ /. FfDiaporama</translation>
    </message>
    <message>
        <source>Remark: </source>
        <translation>Observação:</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Arquivo</translation>
    </message>
    <message>
        <source>Use</source>
        <translation>Utilização</translation>
    </message>
    <message>
        <source>ffDiaporama.xml</source>
        <translation>ffDiaporama.xml</translation>
    </message>
    <message>
        <source>Contains the application options for ffDiaporama</source>
        <translation>Contém as opções de aplicação para ffDiaporama</translation>
    </message>
    <message>
        <source>Devices.xml</source>
        <translation>Devices.xml</translation>
    </message>
    <message>
        <source>Contains the base of profiles for video generation.</source>
        <translation>Contém a base de perfis de geração de vídeo.</translation>
    </message>
    <message>
        <source>For example:</source>
        <translation>Por exemplo:</translation>
    </message>
    <message>
        <source>In order to work, the application needs two configuration files and one database. The two configuration files consists of a pair of files.</source>
        <translation>Para funcionar, o aplicativo precisa de dois arquivos de configuração e de um banco de dados. Os dois arquivos de configuração consistem de um par de arquivos.</translation>
    </message>
    <message>
        <source> When the application is launched for the first time, the user configuration files and the database are created if they dont already exist. </source>
        <translation>Quando o aplicativo é iniciado pela primeira vez, os arquivos configuração do utilizador e o banco de dados são criados, se eles já não existirem.</translation>
    </message>
    <message>
        <source>If ffDiaporama is used by several users on the same PC, there will be separate configuration files and database for each user.</source>
        <translation>Se ffDiaporama é usado por vários utilizadores no mesmo PC, haverá arquivos de configuração separados e banco de dados do para cada um.</translation>
    </message>
    <message>
        <source>ffDiaporama.db</source>
        <translation>ffDiaporama.db</translation>
    </message>
    <message>
        <source>Is a SQLite3 database containing cached objects and some configuration options.</source>
        <translation>É um banco de dados SQLite3 contendo objetos armazenados na cache (memória) e algumas opções de configuração.</translation>
    </message>
</context>
<context>
    <name>0044</name>
    <message>
        <source>XBMC nfo files</source>
        <translation>Ficheiros XBMC nfo</translation>
    </message>
    <message>
        <source>The .nfo file for XBMC allows XBMC to recognize the rendered videos as movies.</source>
        <translation>O arquivo .nfo para XBMC permite ao XBMC reconhecer os vídeos renderizados como filmes.</translation>
    </message>
    <message>
        <source>When doing a scan or an automatic new file discovery, XBMC uses the .nfo files.</source>
        <translation>Ao fazer uma varredura ou um novo arquivo de descoberta automática, XBMC usa os arquivos .nfo.</translation>
    </message>
    <message>
        <source>During a manual refresh, XBMC offers you to find the film through one of its scrapers. Refuse its proposal to use the information contained in the .nfo file.</source>
        <translation>Durante uma actualização manual, XBMC oferece-lhe para encontrar o filme através de um de seus scrapers Recuse a sua proposta de utilizar as informações contidas no arquivo .nfo.</translation>
    </message>
    <message>
        <source>Information included in the .nfo file</source>
        <translation>As informações incluídas no arquivo .nfo</translation>
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
        <translation> &lt;title&gt;&lt;U&gt;&lt;B&gt;Título do Projecto&lt;/B&gt;&lt;/U&gt;&lt;/title&gt;</translation>
    </message>
    <message>
        <source> &lt;sorttitle&gt;&lt;U&gt;&lt;B&gt;Rendered filename&lt;/B&gt;&lt;/U&gt;&lt;/sorttitle&gt;</source>
        <translation> &lt;sorttitle&gt;&lt;U&gt;&lt;B&gt;Nome do arquivo renderizado&lt;/B&gt;&lt;/U&gt;&lt;/sorttitle&gt;</translation>
    </message>
    <message>
        <source> &lt;set&gt;&lt;B&gt;&lt;U&gt;Project Album&lt;/U&gt;&lt;/B&gt;&lt;/set&gt;</source>
        <translation> &lt;set&gt;&lt;B&gt;&lt;U&gt;Album projecto&lt;/U&gt;&lt;/B&gt;&lt;/set&gt;</translation>
    </message>
    <message>
        <source> &lt;genre&gt;&lt;B&gt;&lt;U&gt;Project Album&lt;/U&gt;&lt;/B&gt;&lt;/genre&gt;</source>
        <translation> &lt;genre&gt;&lt;B&gt;&lt;U&gt;Album projecto&lt;/U&gt;&lt;/B&gt;&lt;/genre&gt;</translation>
    </message>
    <message>
        <source> &lt;year&gt;&lt;U&gt;&lt;B&gt;Year of project date&lt;/B&gt;&lt;/U&gt;&lt;/year&gt;</source>
        <translation> &lt;year&gt;&lt;U&gt;&lt;B&gt;Ano da data do projecto&lt;/B&gt;&lt;/U&gt;&lt;/year&gt;</translation>
    </message>
    <message>
        <source> &lt;outline&gt;&lt;U&gt;&lt;B&gt;Project Title&lt;/B&gt;&lt;/U&gt;&lt;/outline&gt;</source>
        <translation> &lt;outline&gt;&lt;U&gt;&lt;B&gt;Título do Projecto&lt;/B&gt;&lt;/U&gt;&lt;/outline&gt;</translation>
    </message>
    <message>
        <source> &lt;plot&gt;&lt;U&gt;&lt;B&gt;Project Comment&lt;/B&gt;&lt;/U&gt;&lt;/plot&gt;</source>
        <translation> &lt;plot&gt;&lt;U&gt;&lt;B&gt;Comentários do projecto&lt;/B&gt;&lt;/U&gt;&lt;/plot&gt;</translation>
    </message>
    <message>
        <source> &lt;director&gt;&lt;U&gt;&lt;B&gt;Project Author&lt;/B&gt;&lt;/U&gt;&lt;/director&gt;</source>
        <translation> &lt;director&gt;&lt;U&gt;&lt;B&gt;Autor do projecto&lt;/B&gt;&lt;/U&gt;&lt;/director&gt;</translation>
    </message>
    <message>
        <source> &lt;credits&gt;&lt;U&gt;&lt;B&gt;Project Author&lt;/B&gt;&lt;/U&gt;&lt;/credits&gt;</source>
        <translation> &lt;credits&gt;&lt;U&gt;&lt;B&gt;Autor do projector&lt;/B&gt;&lt;/U&gt;&lt;/credits&gt;</translation>
    </message>
    <message>
        <source> &lt;runtime&gt;&lt;U&gt;&lt;B&gt;Project duration in minutes&lt;/B&gt;&lt;/U&gt;&lt;/runtime&gt;</source>
        <translation> &lt;runtime&gt;&lt;U&gt;&lt;B&gt;Duração do projecto em minutos&lt;/B&gt;&lt;/U&gt;&lt;/runtime&gt;</translation>
    </message>
    <message>
        <source> &lt;thumb&gt;&lt;U&gt;&lt;B&gt;Project thumbnail&lt;/B&gt;&lt;/U&gt;&lt;/thumb&gt;</source>
        <translation>thumb&gt;&lt;U&gt;&lt;B&gt;Miniaturas do projecto&lt;/B&gt;&lt;/U&gt;&lt;/thumb&gt;</translation>
    </message>
    <message>
        <source> &lt;/movie&gt; </source>
        <translation> &lt;/movie&gt; </translation>
    </message>
    <message>
        <source>See also</source>
        <translation>Veja também</translation>
    </message>
    <message>
        <source>Information on XBMC movies .nfo file</source>
        <translation>Informações sobre ficheiros .nfo filmes XBMC</translation>
    </message>
</context>
<context>
    <name>0045</name>
    <message>
        <source>Types of objects in ffDiaporama</source>
        <translation>Tipos de objectos no ffDiaporama</translation>
    </message>
    <message>
        <source> This section contains information about types of objects that can be used with ffDiaporama. </source>
        <translation>Esta seção contém informações sobre os tipos de objectos que podem ser usados ​​com ffDiaporama.</translation>
    </message>
    <message>
        <source>Index</source>
        <translation>Índice</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Texto</translation>
    </message>
    <message>
        <source>Music file</source>
        <translation>Ficheiro de música</translation>
    </message>
    <message>
        <source>Bitmap image file</source>
        <translation>Ficheiro de imagem bitmap</translation>
    </message>
    <message>
        <source>Bitmap image from clipboard</source>
        <translation>Imagem bitmap a partir da área de transferência</translation>
    </message>
    <message>
        <source>Vector image file</source>
        <translation>Imagem de arquivo Vectorial</translation>
    </message>
    <message>
        <source>Video file</source>
        <translation>Ficheiro de vídeo</translation>
    </message>
    <message>
        <source>Google maps map</source>
        <translation>Mapas do Google maps</translation>
    </message>
    <message>
        <source>There are several things to know about Google Maps</source>
        <translation>Há várias coisas a saber sobre o Google Maps</translation>
    </message>
    <message>
        <source>Google Maps generates images with up to 640x640. Within these images, Google Maps inserts logos that must be removed so that useful images are really only 640x600. Therefore, to generate an image for example 1080p, we have to assemble 6 Google Maps images.</source>
        <translation>Google Maps gera imagens até 640x640. Dentro dessas imagens, o Google Maps insere logos que devem ser removidos para que as imagens sejam realmente úteis apenas 640x600. Portanto, para gerar uma imagem, por exemplo, 1080p, temos que montar seis imagens do Google Maps.</translation>
    </message>
    <message>
        <source>Google Maps limit the number of queries a user can send. This limitation is made to prevent robots to saturate the servers. Unfortunately, this limitation may cause problems when generating big picture. It is possible that you may receive an error warning message saying that you have reached the limit of Google Maps request grants to you.</source>
        <translation>Google Maps limita o número de consultas que um utilizador pode enviar. Esta limitação é feito para prevenir robôs de saturar os servidores. Infelizmente, esta limitação pode causar problemas na geração de uma figura grande. É possível que você possa receber uma mensagem de aviso de erro dizendo que você tenha atingido o limite de Google Maps de solicitação de subvenções destinadas a você.
</translation>
    </message>
    <message>
        <source>To resolve this problem, ffDiaporama integrates a mechanical of recovery. Thus, if a card can not be generated immediately, you can resume it generation later.</source>
        <translation>Para resolver esse problema, ffDiaporama integra um mecanismo de recuperação. Assim, se um cartão não pode ser gerado imediatamente, você pode retomá-lo numa geração mais tarde.</translation>
    </message>
    <message>
        <source>The roads are perpetually modified and Google Maps is constantly updated. Of course, it is not possible to generate a map for road conditions at a specific date. Therefore, think before you update a map of an old project.</source>
        <translation>As estradas são perpetuamente modificadas e Google Maps é constantemente actualizado. É claro que não é possível gerar um mapa para as condições da estrada, numa data específica. Portanto, pense antes de actualizar um mapa de um projecto antigo.</translation>
    </message>
    <message>
        <source>Image size and Map size</source>
        <translation>Tamanho de imagem e Tamanho do Mapa</translation>
    </message>
    <message>
        <source>Depending on the zoom level, Google Maps decides himself of the information displayed on the map. Thus, it is not possible to generate several maps at different zoom levels and then to create a zoom animation because there is no chance that this animation be fluid. It&apos;s why ffDiaporama proposes to generate maps of several image sizes. So, to create a fluid zoom animation, you can use a large image.</source>
        <translation>Dependendo do nível de zoom, o Google Maps decide-se das informações exibidas no mapa. Assim, não é possível gerar vários mapas de diferentes níveis de zoom e, em seguida, criar uma animação de zoom, porque não há nenhuma possibilidade de que esta animação ser fluida. É por isso que ffDiaporama propõe a geração de mapas de vários tamanhos de imagem. Assim, para criar uma animação fluida zoom, você pode usar uma imagem grande.</translation>
    </message>
    <message>
        <source>The following table shows the different &lt;U&gt;Image sizes&lt;/U&gt; that you can generate.</source>
        <translation>A tabela seguinte mostra os diferentes &lt;U&gt; Tamanhos de Imagem &lt;/U&gt; que você pode gerar.</translation>
    </message>
    <message>
        <source>Image size</source>
        <translation>Tamanho da imagem</translation>
    </message>
    <message>
        <source>Resolution</source>
        <translation>Resolução</translation>
    </message>
    <message>
        <source>Comment</source>
        <translation>Comentário</translation>
    </message>
    <message>
        <source>Small-16:9</source>
        <translation>Pequeno-16:9</translation>
    </message>
    <message>
        <source>640x360 (0.2 MPix)</source>
        <translation>640x360 (0.2 MPix)</translation>
    </message>
    <message>
        <source>Quarter of 720p. Useful to add a small map in a photo collage</source>
        <translation>Um quarto de 720p. Útil para adicionar um pequeno mapa numa colagem de fotos</translation>
    </message>
    <message>
        <source>1280x720 (0.9 MPix)</source>
        <translation>1280x720 (0.9 MPix)</translation>
    </message>
    <message>
        <source>Useful for creating a full-screen map in a 720p project or to add a map to a title slide in a 1080p project</source>
        <translation>Útil para criar um mapa em tela cheia num projecto de 720p ou para adicionar um mapa para um slide de título num projecto de 1080p</translation>
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
        <translation>Útil para a criação de um tela cheia, dum mapa &lt;B&gt;animado&lt;/B&gt; num projecto de 720p ou para adicionar um mapa &lt;B&gt;animado&lt;/B&gt; para um slide de título num projecto de 1080p</translation>
    </message>
    <message>
        <source>1920x1080 (2 MPix)</source>
        <translation>1920x1080 (2 MPix)</translation>
    </message>
    <message>
        <source>Useful for creating a full-screen map in a 1080p project</source>
        <translation>Útil para criar um mapa tela cheia, num projecto de 1080p</translation>
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
        <translation>Útil para a criação de uma tela cheia, dum mapa &lt;B&gt;animado&lt;/B&gt; num projecto de 1080p</translation>
    </message>
    <message>
        <source>Note that all image sizes are 16:9 geometry to simplify computation.</source>
        <translation>Note que todos os tamanhos de imagem são de geometria 16:9 para simplificar o cálculo.</translation>
    </message>
    <message>
        <source>Because a map is formed by joining multiple pieces of map, based on the image size, the card will be a map greater or lesser.</source>
        <translation>Porque um mapa é formado pela união de várias peças de mapa, com base no tamanho da imagem, o cartão será um mapa maior ou menor.</translation>
    </message>
    <message>
        <source>The following table shows the &lt;U&gt;Map sizes&lt;/U&gt; in kilometers for each &lt;U&gt;Image sizes&lt;/U&gt; and &lt;U&gt;Google Maps zoom levels&lt;/U&gt;.</source>
        <translation>A tabela a seguir mostra os &lt;U&gt;Tamanhos de Mapa&lt;/U&gt; em quilômetros para cada &lt;U&gt;Tamanhos de de imagem&lt;/U&gt; e &lt;U&gt;Níveis de zoom Google Maps&lt;/U&gt;.</translation>
    </message>
    <message>
        <source>Zoom</source>
        <translation>Zoom</translation>
    </message>
    <message>
        <source>Maps sizes (kilometers)</source>
        <translation>Tamanhos de Mapas (km)</translation>
    </message>
    <message>
        <source>720p x4</source>
        <translation>720p x4</translation>
    </message>
    <message>
        <source>15011.315 km x 8613.829 km</source>
        <translation>15011,315 km x 8613,829 km</translation>
    </message>
    <message>
        <source>12509.429 km x 5930.123 km</source>
        <translation>12509,429 km x 5930,123 km</translation>
    </message>
    <message>
        <source>6254.715 km x 3351.985 km</source>
        <translation>6254,715 km x 3351,985 km</translation>
    </message>
    <message>
        <source>18764.144 km x 7605.642 km</source>
        <translation>18764,144 km x 7605,642 km</translation>
    </message>
    <message>
        <source>3127.357 km x 1737.202 km</source>
        <translation>3127,357 km x 1737,202 km</translation>
    </message>
    <message>
        <source>9382.072 km x 4760.424 km</source>
        <translation>9382,072 km x 4760,424 km</translation>
    </message>
    <message>
        <source>1563.679 km x 876.788 km</source>
        <translation>1563,679 km x 876,788 km</translation>
    </message>
    <message>
        <source>4691.036 km x 2566.349 km</source>
        <translation>4691,036 km x 2566,349 km</translation>
    </message>
    <message>
        <source>781.839 km x 439.436 km</source>
        <translation>781,839 km x 439,436 km</translation>
    </message>
    <message>
        <source>2345.518 km x 1310.024 km</source>
        <translation>2345,518 km x 1310,024 km</translation>
    </message>
    <message>
        <source>390.920 km x 219.849 km</source>
        <translation>390,920 km x 219,849 km</translation>
    </message>
    <message>
        <source>1172.759 km x 658.501 km</source>
        <translation>1172,759 km x 658,501 km</translation>
    </message>
    <message>
        <source>195.460 km x 109.941 km</source>
        <translation>195,460 km x 109,941 km</translation>
    </message>
    <message>
        <source>586.379 km x 329.691 km</source>
        <translation>586,379 km x 329,691 km</translation>
    </message>
    <message>
        <source>97.730 km x 54.972 km</source>
        <translation>97,730 km x 54,972 km</translation>
    </message>
    <message>
        <source>293.190 km x 164.901 km</source>
        <translation>293,190 km x 164,901 km</translation>
    </message>
    <message>
        <source>48.865 km x 27.486 km</source>
        <translation>48,865 km x 27,486 km</translation>
    </message>
    <message>
        <source>146.595 km x 82.457 km</source>
        <translation>146,595 km x 82,457 km</translation>
    </message>
    <message>
        <source>24.432 km x 13.743 km</source>
        <translation>24,432 km x 13,743 km</translation>
    </message>
    <message>
        <source>73.297 km x 41.230 km</source>
        <translation>73,297 km x 41,230 km</translation>
    </message>
    <message>
        <source>12.216 km x 6.872 km</source>
        <translation>12,216 km x 6,872 km</translation>
    </message>
    <message>
        <source>36.649 km x 20.615 km</source>
        <translation>36,649 km x 20,615 km</translation>
    </message>
    <message>
        <source>6.108 km x 3.436 km</source>
        <translation>6,108 km x 3,436 km</translation>
    </message>
    <message>
        <source>18.324 km x 10.307 km</source>
        <translation>18,324 km x 10,307 km</translation>
    </message>
    <message>
        <source>3.054 km x 1.718 km</source>
        <translation>3,054 km x 1,718 km</translation>
    </message>
    <message>
        <source>9.162 km x 5.154 km</source>
        <translation>9,162 km x 5,154 km</translation>
    </message>
    <message>
        <source>1.527 km x 0.859 km</source>
        <translation>1,527 km x 0,859 km</translation>
    </message>
    <message>
        <source>4.581 km x 2.577 km</source>
        <translation>4,581 km x 2,577 km</translation>
    </message>
    <message>
        <source>0.764 km x 0.429 km</source>
        <translation>0,764 km x 0,429 km</translation>
    </message>
    <message>
        <source>2.291 km x 1.288 km</source>
        <translation>2,291 km x 1,288 km</translation>
    </message>
    <message>
        <source>1.145 km x 0.644 km</source>
        <translation>1,145 km x 0,644 km</translation>
    </message>
    <message>
        <source>Notes:</source>
        <translation>Notas:</translation>
    </message>
    <message>
        <source>Because Google Maps don&apos;t respect perfect alignment when using high zoom level, all map sizes lesser than 400 meters are useless with ffDiaporama.</source>
        <translation>Porque o Google Maps não respeita o perfeito alinhamento ao usar alto nível de zoom, todos os mapas de tamanhos menor do que 400 metros são inúteis com ffDiaporama.</translation>
    </message>
    <message>
        <source>Google Maps zoom levels 0 and 1 are useless with ffDiaporama because they produce images that are too small.</source>
        <translation>Google Maps zoom níveis 0 e 1 são inúteis com ffDiaporama porque produzem imagens que são muito pequenas.</translation>
    </message>
    <message>
        <source>Google Maps zoom levels 20 and 11 are useless with ffDiaporama Google Maps don&apos;t respect perfect alignment when using high zoom level.</source>
        <translation>Google Maps níveis de zoom de 20 e 11 são inúteis com ffDiaporama Google Maps não respeita o perfeito alinhamento ao usar alto nível de zoom.</translation>
    </message>
    <message>
        <source>Bitmap image file and Bitmap image from clipboard</source>
        <translation>Ficheiro de imagem Bitmap e Imagem bitmap a partir da área de transferência</translation>
    </message>
    <message>
        <source>Google Maps</source>
        <translation>Google maps</translation>
    </message>
    <message>
        <source>ffDiaporama can use music file in the following formats: wav, aac, adts, ac3, mp2, mp3, m4a or m4b or m4p, 3g2 or 3ga or 3gp, ogg or oga, spx, wma, flac</source>
        <translation>ffDiaporama pode usar ficheiros de música nos seguintes formatos: wav, aac, adts, ac3, mp2, mp3, m4a ou m4b ou m4p, 3g2 ou 3ga ou 3gp, ogg ou oga, spx, wma, flac</translation>
    </message>
    <message>
        <source>See also: </source>
        <translation>Veja também: </translation>
    </message>
    <message>
        <source>Definition of music file on Wikipedia</source>
        <translation>Definição de ficheiros de música na Wikipedia</translation>
    </message>
    <message>
        <source>ffDiaporama can use bitmap images in the following formats: bmp, gif (but not animated gif), jpg or jpeg, png, pbm, pgm, ppm, tiff or tif, xbm, xpm</source>
        <translation>ffDiaporama pode usar imagens bitmap nos seguintes formatos: bmp, gif (mas não gif animado), jpg ou jpeg, png, pbm, pgm, ppm, tiff ou tif, xbm, xpm</translation>
    </message>
    <message>
        <source>Definition of Bitmap image file on Wikipedia</source>
        <translation>Definição de Ficheiro de imagem bitmap na Wikipedia</translation>
    </message>
    <message>
        <source>ffDiaporama can use vector images in the following formats: svg</source>
        <translation>ffDiaporama pode usar imagens vectoriais nos seguintes formatos: svg</translation>
    </message>
    <message>
        <source>Definition of vector image file on Wikipedia</source>
        <translation>Definição de arquivo de imagem vetorial na Wikipedia</translation>
    </message>
    <message>
        <source>ffDiaporama can use video files in the following formats: avi, mov, mpg or mpeg, mkv, mp4 or m4v, flv, 3gp, ogv, webm, dv, wmv, mts or m2ts or mod</source>
        <translation>ffDiaporama pode usar arquivos de vídeo nos seguintes formatos: avi, mov, mpg ou mpeg, mkv, mp4 ou m4v, flv, 3gp, ogv, WebM, dv, wmv, mts ou m2ts ou mod</translation>
    </message>
    <message>
        <source>Note: mts, m2ts and mod files are stream formats (AVCHD) which involve some limitations. For more information on AVCHD, see: </source>
        <translation>Nota: mts, m2ts e arquivos mod são formatos de fluxo (AVCHD), que envolvem algumas limitações. Para mais informações sobre AVCHD, veja:</translation>
    </message>
    <message>
        <source>Advanced Video Coding High Definition on Wikipedia</source>
        <translation>Advanced Video Coding Alta Definição na Wikipedia</translation>
    </message>
    <message>
        <source>Definition of video file on Wikipedia</source>
        <translation>Definição de ficheiros de vídeo na Wikipedia</translation>
    </message>
    <message>
        <source>Note: ffDiaporama uses the filename extension to determine the type of image. It is therefore necessary that this extension was valid.</source>
        <translation>Nota: ffDiaporama usa a extensão de nome de ficheiro para determinar o tipo de imagem. Portanto, é necessário que esta extensão seja válida.</translation>
    </message>
</context>
<context>
    <name>0101</name>
    <message>
        <source>Application options dialog</source>
        <translation>Caixa de diálogo das opções da aplicação</translation>
    </message>
    <message>
        <source>The Application options tab allows to define the general behavior of ffDiaporama.</source>
        <translation>O guia de Opções da aplicação, permite definir o comportamento geral do ffDiaporama.</translation>
    </message>
    <message>
        <source>The Project options tab allows to define the options by default of the current project and for the new projects.</source>
        <translation>O guia de Opções do projecto permite definir as opções por padrão do projecto actual e para os novos projectos.</translation>
    </message>
    <message>
        <source>The Rendering options Tab allows to define the options used by default during the generation of videos.</source>
        <translation>O guia Opções de renderização permite definir as opções usadas por padrão durante a geração de vídeos.</translation>
    </message>
    <message>
        <source>Application options</source>
        <translation>Opções da aplicação</translation>
    </message>
    <message>
        <source>Remember Windows size and positions</source>
        <translation>Lembrar Windows do tamanho e posições</translation>
    </message>
    <message>
        <source>If this box is checked, the sizes and the positions of all windows and dialogs will be saved and reused the next time you use ffDiaporama.</source>
        <translation>Se esta caixa estiver marcada, os tamanhos e as  posições de todas as janelas e diálogos serão salvas e reutilizadas na próxima vez que você usa ffDiaporama.</translation>
    </message>
    <message>
        <source>Remember last used folders</source>
        <translation>Lembrar últimas pastas usadas</translation>
    </message>
    <message>
        <source>If this box is checked, the directories for images, videos, projects, music and the generation of your movie will be saved and reused the next time you use ffDiaporama.</source>
        <translation>Se esta opção estiver marcada, os directórios para imagens, vídeos, projectos, música e geração de seu filme serão salvas e reutilizadas na próxima vez que você usa ffDiaporama.</translation>
    </message>
    <message>
        <source>Enable &quot;raster&quot; Graphics system</source>
        <translation>Activar sistema de gráficos &quot;raster&quot; </translation>
    </message>
    <message>
        <source>&lt;B&gt;For Linux users only: &lt;/B&gt;If this box is checked, the graphic system &quot;raster&quot; is used instead of the default graphic system. This option is used only at application start up. </source>
        <translation>&lt;B&gt;Para utilizadores Linux apenas: &lt;/B&gt;Se esta opção estiver marcada, o sistema gráfico &quot;raster&quot; é usado em vez do sistema padrão gráfico. Esta opção é usada apenas com a aplicação iniciar.</translation>
    </message>
    <message>
        <source>The &quot;raster&quot; Graphics accelerates the display but can raise problems on some computer in particular with KDE.</source>
        <translation>A utilização de Graphics &quot;raster&quot; acelera a exibição, mas pode levantar problemas em alguns computadores, em especial com o KDE.</translation>
    </message>
    <message>
        <source>Memory profil</source>
        <translation>Memória profil</translation>
    </message>
    <message>
        <source>Preview options</source>
        <translation>Opções de pré-visualização</translation>
    </message>
    <message>
        <source>Frame rate</source>
        <translation>Taxa de quadros</translation>
    </message>
    <message>
        <source>Defines the number of images per second which will be generated to show the preview. </source>
        <translation>Define o número de imagens por segundo que serão gerados para mostrar durante a pré-visualização. </translation>
    </message>
    <message>
        <source>Note: the higher this number, the more smooth the preview will be. On the other hand, more computer resources will be required. Reduce this number on slow computers or if the gauge for your multimedia reader is frequently in the red zone.</source>
        <translation>Nota: quanto maior esse número, mais suave a visualização será. Por outro lado, mais recursos do computador serão necessários. Reduzir este número em computadores lentos ou se o medidor para o seu leitor multimédia está muitas vezes na zona vermelha.</translation>
    </message>
    <message>
        <source>Image smoothing (smooth images during preview)</source>
        <translation>Suavização de imagem (imagens suaves durante a pré-visualização)</translation>
    </message>
    <message>
        <source>If this box is checked, the image smoothing effect will be applied to the images during the preview. </source>
        <translation>Se esta opção estiver marcada, o efeito de suavização da imagem será aplicada às imagens durante a visualização. </translation>
    </message>
    <message>
        <source>Editor options</source>
        <translation>Opções do editor</translation>
    </message>
    <message>
        <source>Coordinates unit</source>
        <translation>Unidade de coordenadas</translation>
    </message>
    <message>
        <source>This option allows to select the unit for the coordinates which will be used in the properties dialog. You can choose: </source>
        <translation>Esta opção permite seleccionar a unidade para as coordenadas que serão utilizadas no diálogo de propriedades. Você pode escolher:</translation>
    </message>
    <message>
        <source>Percentage: Coordinates (X, Y, Width and Height) are expressed in percentages</source>
        <translation>Percentagem: coordenadas (X, Y, largura e altura) são expressos em percentuais</translation>
    </message>
    <message>
        <source>Pixel: Coordinates (X, Y, Width and Height) are expressed in pixels relative to a screen in 1080p mode</source>
        <translation>Pixel: Coordenadas (X, Y, largura e altura) são expressos em pixeis em relação a uma tela em modo 1080p</translation>
    </message>
    <message>
        <source>Object position</source>
        <translation>Posição do objecto</translation>
    </message>
    <message>
        <source>This option allows you to adjust the positions occupied by new objects inserted into the timeline. </source>
        <translation>Esta opção permite ajustar as posições ocupadas pelos novos objectos inseridos na linha do tempo. </translation>
    </message>
    <message>
        <source>If &lt;I&gt;&lt;B&gt;Insert after the current selected object&lt;/B&gt;&lt;/I&gt; is selected, then the new slides will be created after the current slide.</source>
        <translation>Se &lt;I&gt;&lt;B&gt;Inserir após o objecto actual seleccionadot&lt;/B&gt;&lt;/I&gt; estiver seleccionada, os novos slides serão criados após o slide actual.</translation>
    </message>
    <message>
        <source>If &lt;I&gt;&lt;B&gt;Append to the end of the project&lt;/B&gt;&lt;/I&gt; is selected, then the new slides will be created at the end of the project.</source>
        <translation>Se &lt;I&gt;&lt;B&gt;Anexar ao final do projecto&lt;/B&gt;&lt;/I&gt; é seleccionado, então, os novos slides seãoá criadso no final do projecto.</translation>
    </message>
    <message>
        <source>Object deletion</source>
        <translation>Exclusão de objecto</translation>
    </message>
    <message>
        <source>If this box is checked, a confirmation prompt will be displayed every time you remove an object: </source>
        <translation>Se esta opção estiver marcada, uma mensagem de confirmação será exibida cada vez que você remover um objecto:</translation>
    </message>
    <message>
        <source>A slide from the main window</source>
        <translation>Um slide a partir da janela principal</translation>
    </message>
    <message>
        <source>A shot or bloc from the slide properties dialog box</source>
        <translation>Um tiro ou bloco da caixa de diálogo Propriedades de slides</translation>
    </message>
    <message>
        <source>If the &lt;B&gt;Activate deinterlace filter when add new MTS videos&lt;/B&gt; is checked, deinterlace filter will automatically be activated for all .mts videos added to the project. </source>
        <translation>Se o filtro &lt;B&gt;Activar deinterlace quando adicionar novos vídeos MTS”&lt;/B&gt; está marcada, o filtro será activado automaticamente para todos os vídeos .mts adicionados ao projecto.</translation>
    </message>
    <message>
        <source>interlaced video</source>
        <translation>Vídeo entrelaçado (interlaced video)</translation>
    </message>
    <message>
        <source>Project options</source>
        <translation>Opções do projecto</translation>
    </message>
    <message>
        <source>Project properties</source>
        <translation>Projecto - propriedades</translation>
    </message>
    <message>
        <source>Title</source>
        <translation>Título</translation>
    </message>
    <message>
        <source>Defined the automatic filling method to use for the title&apos;s project properties: </source>
        <translation>Definido o método de preenchimento automático para usar as propriedades do título do projecto: </translation>
    </message>
    <message>
        <source>No automatic filling : You will have to define manually the title</source>
        <translation>Não preenchimento automático: Você terá que definir manualmente o título</translation>
    </message>
    <message>
        <source>Fill with project name when project save : The title will take the same name as the .ffd file</source>
        <translation>Preencher com o nome do projecto ao salvar o projecto : O título terá o mesmo nome do arquivo .ffd</translation>
    </message>
    <message>
        <source>Author</source>
        <translation>Autor</translation>
    </message>
    <message>
        <source>Default language</source>
        <translation>Idioma padrão</translation>
    </message>
    <message>
        <source>Defines the default value for the field Language</source>
        <translation>Define o valor padrão para o campo Idioma. Para Português use &lt;B&gt;por&lt;/B&gt;</translation>
    </message>
    <message>
        <source>New project geometry</source>
        <translation>Geometria projecto (novo)</translation>
    </message>
    <message>
        <source>Selects the image geometry to be used for the creation of projects. Three geometries are available : </source>
        <translation>Selecciona a geometria da imagem a ser usada para a criação de projectos. Três geometrias estão disponíveis:</translation>
    </message>
    <message>
        <source> Note: the geometry of a project is defined once and for all when it is created. It is not possible to modify it afterwards.</source>
        <translation>Nota: a geometria de um projecto é definida de uma vez por todas, quando ele é criado. Não é possível modificá-lo depois.</translation>
    </message>
    <message>
        <source>Default 1&lt;SUP&gt;st&lt;/SUP&gt; shot duration</source>
        <translation>Padrão duração 1&lt;SUP&gt;º&lt;/SUP&gt; disparo</translation>
    </message>
    <message>
        <source>Defines the default duration of the first shot for slides during their creation.</source>
        <translation>Define a duração padrão do primeiro tiro de slides durante a sua criação.</translation>
    </message>
    <message>
        <source>Next shot duration</source>
        <translation>Duração próximo disparo</translation>
    </message>
    <message>
        <source>Defines the default duration of further shots.</source>
        <translation>Define a duração padrão de disparos adicionais.</translation>
    </message>
    <message>
        <source>Default transition</source>
        <translation>Transição padrão</translation>
    </message>
    <message>
        <source>Defines the transition to be inserted between inserted slides : </source>
        <translation>Define a transição para ser inserida entre os slides inseridos: </translation>
    </message>
    <message>
        <source> A transition chosen randomly from the library</source>
        <translation>Uma transição escolhida aleatóriamente a partir da biblioteca</translation>
    </message>
    <message>
        <source> No transition</source>
        <translation>Sem transição</translation>
    </message>
    <message>
        <source> Cross-fade transition</source>
        <translation>Transição Cross-fade</translation>
    </message>
    <message>
        <source>Default options for speed waves</source>
        <translation>Opções padrão para ondas de velocidade</translation>
    </message>
    <message>
        <source>Transition</source>
        <translation>Transição</translation>
    </message>
    <message>
        <source>Sets the default speed wave for the transitions of new projects</source>
        <translation>Define a velocidade padrão de onda para as transições de novos projectos</translation>
    </message>
    <message>
        <source>Blocks animation</source>
        <translation>Blocos de animação</translation>
    </message>
    <message>
        <source>Sets the default speed curve for the blocks animations of new projects</source>
        <translation>Define a velocidade padrão da curva para as animações de blocos de novos projectos</translation>
    </message>
    <message>
        <source>Images animation</source>
        <translation>Animação de Imagens</translation>
    </message>
    <message>
        <source>Sets the default speed for the image effects animations of new projects</source>
        <translation>Define a velocidade padrão da curva de efeitos nas animações de imagem de novos projectos</translation>
    </message>
    <message>
        <source>Default options for new text block</source>
        <translation>Opções padrão para os novos blocos de texto</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Texto</translation>
    </message>
    <message>
        <source>Allows to select the characters style applied to the new text blocks. This style defines the font, its size, its color and the shadow effects applied to the text.</source>
        <translation>Permite seleccionar o estilo de caracteres aplicados aos novos blocos de texto. Este estilo define a fonte, seu tamanho, sua cor e os efeitos de sombra aplicada ao texto.</translation>
    </message>
    <message>
        <source>Background</source>
        <translation>Fundo</translation>
    </message>
    <message>
        <source>Allows to select the style of background applied to the new text blocks. This style defines the transparency of the block and its filling.</source>
        <translation>Permite seleccionar o estilo de plano de fundo aplicada aos novos blocos de texto. Esse estilo define a transparência do bloco e o seu enchimento.</translation>
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
        <translation>Permite seleccionar, para cada geometria do projecto, o estilo do local aplicado aos novos blocos de texto. Esse estilo define o tamanho, as coordenadas, as rotações e a restrição geométrica.</translation>
    </message>
    <message>
        <source>Locking</source>
        <translation>Bloqueio</translation>
    </message>
    <message>
        <source>Allows to Select the geometric constraint applied to the new text blocks. </source>
        <translation>Permite seleccionar a restrição geométrica aplicada aos novos blocos de texto. </translation>
    </message>
    <message>
        <source>Unlock: The shape of the block is free</source>
        <translation>Desbloquear: A forma do bloco é de livre</translation>
    </message>
    <message>
        <source>Lock to project geometry: The shape of the has the same shape as the image</source>
        <translation>Bloquear a geometria projecto: A forma do bloco tem a mesma forma que a imagem</translation>
    </message>
    <message>
        <source>Default options for new image or video block (when creating slide)</source>
        <translation>Opções padrão de bloco de imagem ou vídeo (ao criar um slide)</translation>
    </message>
    <message>
        <source>The following settings apply to all image formats:</source>
        <translation>As definições seguintes aplicam-se a todos os formatos de imagem:</translation>
    </message>
    <message>
        <source>Text style</source>
        <translation>Estilo de texto</translation>
    </message>
    <message>
        <source>Allows to select the characters style applied to the text of the blocks. This style defines the font, its size, its color and the shadow effects applied to the text.</source>
        <translation>Permite seleccionar o estilo de caracteres aplicados ao texto dos blocos. Este estilo define a fonte, seu tamanho, sua cor e os efeitos de sombra aplicada ao texto.</translation>
    </message>
    <message>
        <source>For every image format and every project geometry select the style of location to applied to the new blocks. This style concerns the size, the coordinates, the rotations and the geometrical constraint.</source>
        <translation>Para cada formato de imagem, permite seleccionar, para cada geometria do projecto, o estilo do local aplicado aos novos blocos. Esse estilo define o tamanho, as coordenadas, as rotações e a restrição geométrica.</translation>
    </message>
    <message>
        <source>Framing styles define how to crop the image to make it compatible with the block in which is displayed.</source>
        <translation>Estilos de enquadramento definem como cortar a imagem para torná-lo compatível com o bloco em que é exibido.</translation>
    </message>
    <message>
        <source>The positioning styles define the the size, coordinates, rotations and geometric constraint to apply to blocks.</source>
        <translation>Os estilos de posicionamento definem o tamanho, coordenadas, rotações e restrição geométrica para aplicar nos blocos.</translation>
    </message>
    <message>
        <source>Default options for new image or video block (when adding block in slide dialog)</source>
        <translation>Opções padrão de bloco de imagem ou vídeo (ao adicionar bloco em diálogo do slide)</translation>
    </message>
    <message>
        <source>The same selection that when creating slides apply.</source>
        <translation>A mesma selecção que é usada na aplicação da criação de slides.</translation>
    </message>
    <message>
        <source>Rendering options</source>
        <translation>Opções de Renderização</translation>
    </message>
    <message>
        <source>Default video name</source>
        <translation>Nome por defeito, do vídeo</translation>
    </message>
    <message>
        <source>This option allows to select the name which will be proposed by default during the rendering of videos. This option can be applied only if the project was saved at first.</source>
        <translation>Esta opção permite seleccionar o nome que será proposto por padrão durante o processamento de vídeos. Esta opção só pode ser aplicada se o projecto foi salvo em primeiro lugar.</translation>
    </message>
    <message>
        <source>Use project name as video name</source>
        <translation>Usar o nome do projecto como nome do vídeo</translation>
    </message>
    <message>
        <source>If the project name is &quot;assembly.ffd&quot;, then &quot;assembly&quot; will be the proposed name</source>
        <translation>Se o nome do projecto é &quot;assembly.ffd&quot;, depois em &quot; assembly &quot; será o nome proposto</translation>
    </message>
    <message>
        <source>Use project folder&apos;s name as video name</source>
        <translation>Usar o nome da pasta projecto como nome do vídeo</translation>
    </message>
    <message>
        <source>If the project name is &quot;assembly.ffd&quot; and is saved in the &quot;My holidays 2011&quot; directory, then &quot;My holidays 2011&quot; will be the proposed name</source>
        <translation>Se o nome do projecto é &quot;assembly.ffd&quot; e é salvo no &quot;As minhas férias 2011&quot; directório, em seguida, &quot;As minhas férias 2011&quot; será o nome proposto</translation>
    </message>
    <message>
        <source>Use title project as video name</source>
        <translation>Usar título do projecto como nome do vídeo</translation>
    </message>
    <message>
        <source>Use the title defined in the project properties as the name of video</source>
        <translation>Usar o título definido nas propriedades do projecto, como o nome do vídeo</translation>
    </message>
    <message>
        <source>Default device mode rendering options</source>
        <translation>Opções padrão de renderização do modo dispositivo</translation>
    </message>
    <message>
        <source>Smartphone</source>
        <translation>Smartphone</translation>
    </message>
    <message>
        <source>Selects the default type and equipment model when you will click the &quot;Player and Smartphone&quot; button of the &quot;Render movie&quot; menu</source>
        <translation>Selecciona o tipo padrão e modelo do equipamento quando você clicar no botão &quot;leitor e Smartphone&quot; do menu &quot;Render filme&quot;</translation>
    </message>
    <message>
        <source>Multimedia system</source>
        <translation>Sistema multimédia</translation>
    </message>
    <message>
        <source>Selects the default type and equipment model when you will click the &quot;Multimedia system&quot; button of the &quot;Render movie&quot; menu</source>
        <translation>Selecciona o tipo padrão e modelo do equipamento quando você clicar no botão &quot;Sistema Multimédia&quot; do menu &quot;Render filme&quot; </translation>
    </message>
    <message>
        <source>For the WEB</source>
        <translation>Para a WEB</translation>
    </message>
    <message>
        <source>Selects the default type and equipment model when you will click the &quot;For the Web&quot; button of the &quot;Render movie&quot; menu</source>
        <translation>Selecciona o tipo padrão e modelo do equipamento quando você clicar no botão &quot;Para a Web&quot; do menu &quot;Render filme&quot; </translation>
    </message>
    <message>
        <source>Lossless</source>
        <translation>Sem Perdas</translation>
    </message>
    <message>
        <source>Selects the default image size to be used when you will click the &quot;Lossless&quot; button of the &quot;Render movie&quot; menu</source>
        <translation>Selecciona o tamanho da imagem padrão a ser usado quando você vai clicar no botão &quot;Sem Perdas&quot; do menu &quot;Render filme&quot; </translation>
    </message>
    <message>
        <source>Default advanced rendering options</source>
        <translation>Apções padrão de renderização avançadas</translation>
    </message>
    <message>
        <source>File format</source>
        <translation>Formato de arquivo</translation>
    </message>
    <message>
        <source>Selects the default file type to use for the rendering out of the proposed list.</source>
        <translation>Selecciona o tipo de arquivo padrão a ser usado para a prestação fora da lista proposta.</translation>
    </message>
    <message>
        <source>Video standard</source>
        <translation> Padrão Vídeo</translation>
    </message>
    <message>
        <source>Selects the default video standard to use: PAL or NTSC.</source>
        <translation>Selecciona a norma de vídeo padrão para usar: PAL ou NTSC.</translation>
    </message>
    <message>
        <source>Format</source>
        <translation>Formato</translation>
    </message>
    <message>
        <source>Selects the default image format to use for the rendering out of the proposed list.</source>
        <translation>Selecciona o formato de imagem padrão a ser usado para a prestação fora da lista proposta.</translation>
    </message>
    <message>
        <source>Video codec</source>
        <translation>Codec de vídeo</translation>
    </message>
    <message>
        <source>Selects the default video codec to use for the rendering out of the proposed list.</source>
        <translation>Seleccione o codec de vídeo padrão para usar para a renderização fora da lista proposta.</translation>
    </message>
    <message>
        <source>Selects the default bit rate to use for video during the rendering out of the proposed list.</source>
        <translation>Seleccione a taxa de bits padrão para usar em vídeo durante o processamento fora da lista proposta.</translation>
    </message>
    <message>
        <source>Audio codec</source>
        <translation>Codec de áudio</translation>
    </message>
    <message>
        <source>Selects the default audio codec to use for the rendering out of the proposed list.</source>
        <translation>Seleccione o codec de áudio padrão para usar para a renderização fora da lista proposta.</translation>
    </message>
    <message>
        <source>Selects the default bit rate to use for audio during the rendering out of the proposed list.</source>
        <translation>Seleccione a taxa de bits padrão para usar em áudio durante o processamento fora da lista proposta.</translation>
    </message>
    <message>
        <source>Other actions</source>
        <translation>Outras acções</translation>
    </message>
    <message>
        <source>This dialog box allows you to define options for the application. It consists of the following 3 tabs:</source>
        <translation>Esta caixa de diálogo permite que você defina as  opções da aplicação.É composto por três guias:</translation>
    </message>
    <message>
        <source>The Application options tab allows you to define the general behavior of ffDiaporama.</source>
        <translation>O guia de Opções da aplicação, permite definir o comportamento geral do ffDiaporama.</translation>
    </message>
    <message>
        <source>The Project options tab allows you to define the options by default of the current project and for the new projects.</source>
        <translation>O guia de Opções do projecto permite definir as opções por padrão do projecto actual e para os novos projectos.</translation>
    </message>
    <message>
        <source>The Rendering options Tab allows you to define the options used by default during the generation of videos.</source>
        <translation>O guia Opções de renderização permite definir as opções usadas por padrão durante a geração de vídeos.</translation>
    </message>
    <message>
        <source>Disable tooltips in dialog box</source>
        <translation>Desactivar dicas em caixa de diálogo</translation>
    </message>
    <message>
        <source>If this box is checked, tooltips will no longer appear in dialog boxes (only what&apos;s this will be available).</source>
        <translation>Se esta opção estiver marcada, as dicas não aparecerá mais nas caixas de diálogo (somente o que é estiver disponível).</translation>
    </message>
    <message>
        <source>Offer to open the download Web page when a new version is available</source>
        <translation>Ofereçe-se para abrir a página de download da Web quando uma nova versão está disponível</translation>
    </message>
    <message>
        <source>If this box is checked, a dialog box will appear at startup the next time a new version will be available. </source>
        <translation>Se esta opção estiver marcada, uma caixa de diálogo aparecerá na inicialização da próxima vez que uma nova versão estiver disponível. </translation>
    </message>
    <message>
        <source>By default, this box is checked for Windows users and unchecked for Linux users</source>
        <translation>Por padrão, essa caixa está marcada para utilizadores do Windows e desmarcada para utilizadores de Linux</translation>
    </message>
    <message>
        <source>Defines the quantity of memory used as cache memory by ffDiaporama. This parameter is important because it allows to adapt ffDiaporama to your hardware. </source>
        <translation>Define a quantidade de memória utilizada como memória cache ffDiaporama. Este parâmetro é importante porque permite adaptar ffDiaporama para o seu hardware.</translation>
    </message>
    <message>
        <source>For users of 32-bit systems, it is recommended that set this value to 512 MB if the computer has at least 2 GB of RAM. </source>
        <translation>Para utilizadores de sistemas de 32 bits, é recomendável que defina este valor para 512 MB ​​se o computador tem pelo menos 2 GB de RAM.</translation>
    </message>
    <message>
        <source>For users of 64-bit systems, it is recommended that set this value to 2 GB if the computer has at least 4 GB of RAM.</source>
        <translation>Para utilizadores de sistemas de 64 bits, é recomendável que defina este valor para 2 GB se o computador tem pelo menos 4 GB de RAM.</translation>
    </message>
    <message>
        <source>Max video preview height</source>
        <translation>Altura máxima de visualização de vídeo</translation>
    </message>
    <message>
        <source>Sets the maximum height of videos used for the preview. Beyond this height, the videos are automatically reduced for creating images. </source>
        <translation>Define a altura máxima dos vídeos utilizados para a visualização. Para além desta altura, os vídeos são automaticamente reduzidas para a criação de imagens.</translation>
    </message>
    <message>
        <source>This parameter affects only the preview and does not change the quality of rendered video. </source>
        <translation>Este parâmetro afecta apenas a visualização e não altera a qualidade do vídeo renderizado.</translation>
    </message>
    <message>
        <source>It is recommended to reduce this value for slow computer.</source>
        <translation>É recomendável reduzir este valor para um computador lento.</translation>
    </message>
    <message>
        <source>This effect consumes lots of resources and can result in slow preview on small machines. Unchecking this box allows then to keep a fluid preview. </source>
        <translation>Este efeito consome muitos recursos e pode resultar numa visualização lenta em máquinas pequenas. Desmarcar esta caixa permite, em seguida, manter uma pré-visualização fluida.</translation>
    </message>
    <message>
        <source>This parameter affects only the preview and does not change the quality of rendered video.</source>
        <translation>Este parâmetro afecta apenas a visualização e não altera a qualidade do vídeo renderizado.</translation>
    </message>
    <message>
        <source>Sound sample rate</source>
        <translation>Taxa de amostragem de som</translation>
    </message>
    <message>
        <source>Defines the frequency of the sound generated to show the preview. </source>
        <translation>Define a frequência do som gerado para mostrar na pré-visualização.</translation>
    </message>
    <message>
        <source>Video cropping</source>
        <translation>Corte de vídeo</translation>
    </message>
    <message>
        <source>If the &lt;B&gt;Automatically crop 1920x1088 video to 1920x1080&lt;/B&gt; is checked then video images are automatically cropped. </source>
        <translation>Se a caixa &lt;B&gt;Cortar automáticamente vídeo 1920x1088 para 1920x1080&lt;/B&gt; é marcada, então as imagens de vídeo são automáticamente cortadas.</translation>
    </message>
    <message>
        <source>Remark: Some manufacturers produce FullHD videos 1920x1088 rather than 1920x1080. They make it to accelerate the encoding which is faster with a multiple of 16 lines. But this size is not 16:9. To keep the whole image, not only the image is deformed to fit into the screen but besides black bands appear on the sides. To avoid all these problems, by checking this box, these videos are truncated to be returned to the 1920x1080 sizes. Then 4 lines are cut at the top and bottom.</source>
        <translation>Nota: Alguns fabricantes produzem vídeos FullHD 1920 × 1088 em vez de 1920 × 1080. Eles permitem acelerar a codificação que é mais rápida com um múltiplo de 16 linhas. Mas este tamanho não é de 16:9. Para manter a imagem inteira, não apenas a imagem é deformada para caber na tela, mas faixas pretas aparecem nas laterais. Para evitar todos esses problemas, verificando esta caixa, estes vídeos são truncados para ser devolvido ao tamanho 1920 × 1080. Em seguida, 4 linhas são cortadas na parte superior e inferior.</translation>
    </message>
    <message>
        <source>Video deinterlacing</source>
        <translation>Desentrelaçamento (deinterlacing) de vídeo</translation>
    </message>
    <message>
        <source>Remark: Some manufacturers produce videos using interlaced mode. They make it to accelerate the encoding. The problem is it deforms the image on which moved lines appear. For more information on interlaced video, see this Wikipedia page: </source>
        <translation>Nota: Alguns fabricantes produzem vídeos usando o modo entrelaçado. Eles tornam a acelerar a codificação. O problema é que ela deforma a imagem em que as linhas movidos aparecer. Para mais informações sobre o vídeo entrelaçado, consulte a página da Wikipedia em: </translation>
    </message>
    <message>
        <source>Various options</source>
        <translation>Opções várias</translation>
    </message>
    <message>
        <source>Short date format</source>
        <translation>Formato de data abreviada</translation>
    </message>
    <message>
        <source>This option allows you to specify the format in which computed dates are displayed. </source>
        <translation>Esta opção permite que você especifique o formato em que as datas calculadas são exibidas.</translation>
    </message>
    <message>
        <source>Normally this format depends on the language used on your system, but it can be useful to change it especially if the interface is not available for your language.</source>
        <translation>Normalmente, este formato depende do idioma usado no seu sistema, mas pode ser útil poder mudá-lo, especialmente se a interface não está disponível no seu idioma.</translation>
    </message>
    <message>
        <source>Defines the default value for the field Author that is often so called Artist by </source>
        <translation>Define o valor padrão para o campo Autor que é muitas vezes chamado por Artista pelo</translation>
    </message>
    <message>
        <source>Media Center Systems</source>
        <translation>Centro de Sistemas Média (Media Center Systems)</translation>
    </message>
    <message>
        <source>Enhance id3v2 comptatibility</source>
        <translation>Melhoria de compatibilidade id3v2</translation>
    </message>
    <message>
        <source>For more compatibility with the standard id3v2, check this box to limit Title, Author and Album fields to 30 characters</source>
        <translation>Para mais compatibilidade com o padrão id3v2, marque esta caixa para limitar campos Título do Album, Autor a 30 caracteres</translation>
    </message>
    <message>
        <source>Default thumbnail</source>
        <translation>Miniatura padrão</translation>
    </message>
    <message>
        <source>Defines the model use as default thumbnail. Thumbnails are images that are generated along with the videos. These images are used as a poster by most </source>
        <translation>Define o uso do modelo como Miniaturas padrão. Miniaturas são imagens que são geradas junto com os vídeos. Estas imagens são usadas como um cartaz por mais</translation>
    </message>
    <message>
        <source>For more information on joined files, see &lt;a href=&quot;003A.html&quot;&gt;File attachments&lt;/a&gt;</source>
        <translation>Para mais informações sobre os arquivos unidos, consulte &lt;a href=&quot;003A.html&quot;&gt; Arquivos anexos&lt;/a&gt;</translation>
    </message>
    <message>
        <source>4:3: Corresponds to an old TV with (almost) square screen</source>
        <translation>4:3 Corresponde a velhas Tv´s com (quase) telas quadradas</translation>
    </message>
    <message>
        <source>16:9: Corresponds to a modern TV with rectangular screen</source>
        <translation>16:9 Corresponde a modernas Tv´s com telas rectangulares</translation>
    </message>
    <message>
        <source>2.35:1: Corresponds to the Cinema format (on a TV, this format will use black strips at the top and below).</source>
        <translation>2.35:1: Corresponde ao formato de cinema (na TV, este formato irá usar tiras pretas no topo e em baixo).</translation>
    </message>
    <message>
        <source>This group of settings applies to the new text blocks created in slide dialogue by means of this button: </source>
        <translation>Este grupo de definições aplica-se aos novos blocos de texto criados na caixa de diálogo do slide, por meio deste botão:</translation>
    </message>
    <message>
        <source>Allows to select the style of the shape to applied to the new text blocks. This style defines the shape (rectangle, circle, ...), the border, the opaqueness and the shadow effect applied to the block.</source>
        <translation>Permite selecionar o estilo da forma para aplicada aos novos blocos de texto. Este estilo define a forma (retângulo, círculo, ...), os bordos, a opacidade e o efeito de sombra aplicado ao bloco.</translation>
    </message>
    <message>
        <source>This group of settings applies to the new image or video blocks created from the main window by means of this button: </source>
        <translation>Este grupo de definições aplica-se aos novos blocos de imagem ou vídeo criado a partir da janela principal, através deste botão:</translation>
    </message>
    <message>
        <source>Select, for each image format, the style of framing and the style of positioning to be applied to new blocks.</source>
        <translation>Seleccionar, para cada formato de imagem, o estilo de moldação e o estilo de posicionamento a ser aplicada a novos blocos.</translation>
    </message>
    <message>
        <source>This group of settings applies to the new image or video blocks created in slide dialogue by means of this button: </source>
        <translation>Este grupo de definições aplica-se aos novos blocos de imagem ou vídeo criados no diálogo do slide por meio deste botão:</translation>
    </message>
    <message>
        <source>Default joined files options</source>
        <translation>Opções de arquivos conjuntos predefinidos</translation>
    </message>
    <message>
        <source>Join thumbnail to rendered file</source>
        <translation>Juntar miniaturas ao arquivo renderizado</translation>
    </message>
    <message>
        <source>If this box is checked then a thumbnail file will be created with video.</source>
        <translation>Se esta opção estiver marcada, então um arquivo miniatura será criado com o vídeo.</translation>
    </message>
    <message>
        <source>Join XBMC .nfo file to rendered file</source>
        <translation>Juntar ficheiros .nfo XBMC ao arquivo renderizado</translation>
    </message>
    <message>
        <source>If this box is checked then a XMBC .nfo file will be created with video.</source>
        <translation>Se esta opção estiver marcada, então um arquivo XMBC .nfo será criado com o vídeo.</translation>
    </message>
    <message>
        <source>Bitrate</source>
        <translation>Taxa de bits</translation>
    </message>
    <message>
        <source>Frequency</source>
        <translation>Frequência</translation>
    </message>
    <message>
        <source>Select the default frequency to use for audio during the rendering.</source>
        <translation>Selecione a freqüência padrão a ser usado para o áudio durante a renderização.</translation>
    </message>
    <message>
        <source>Default soundtrack rendering options</source>
        <translation>Opções padrão de renderização da trilha sonora</translation>
    </message>
    <message>
        <source>At the bottom of the dialog these buttons allow you to:</source>
        <translation>Na parte inferior da caixa de diálogo estes botões permitem que você:</translation>
    </message>
    <message>
        <source> Check configuration allows to open the &lt;a href=&quot;0106.html&quot;&gt;Check configuration dialog&lt;/a&gt;</source>
        <translation>Verificar a configuração que permite abrir a &lt;a href=&quot;0106.html&quot;&gt; caixa de diálogo Verifique configuração &lt;/a&gt;</translation>
    </message>
    <message>
        <source> Manage device allows to open the &lt;a href=&quot;0102.html&quot;&gt;Manage device dialog&lt;/a&gt;</source>
        <translation>Gerir dispositivos que permite abrir a &lt;a href=&quot;0102.html&quot;&gt; caixa de diálogo Gerir dispositivos &lt;/a&gt;</translation>
    </message>
    <message>
        <source>Fill with project folder name when project save : The title will take the same name as the folder in which is save the .ffd file</source>
        <translation>Preencha com o nome da pasta do projecto quando salvar o projecto : O título terá o mesmo nome que a pasta na qual é salvo o arquivo .ffd</translation>
    </message>
    <message>
        <source>Network settings</source>
        <translation>As configurações de rede</translation>
    </message>
    <message>
        <source>Use a proxy to access the Internet</source>
        <translation>Use um proxy para aceder á Internet</translation>
    </message>
    <message>
        <source>Check this box if your network requires that you use a proxy.</source>
        <translation>Marque esta caixa se a sua rede exige que você use um proxy.</translation>
    </message>
    <message>
        <source>Proxy address</source>
        <translation>Endereço Proxy</translation>
    </message>
    <message>
        <source>Enter address of the proxy host.</source>
        <translation>Digite o endereço do host do proxy.</translation>
    </message>
    <message>
        <source>Proxy port</source>
        <translation>Porta Proxy</translation>
    </message>
    <message>
        <source>Enter the port number to access the proxy or nothing to use default port.</source>
        <translation>Digite o número da porta para acessar o proxy ou nada para usar a porta padrão.</translation>
    </message>
    <message>
        <source>Login</source>
        <translation>Iniciar sessão (Login)</translation>
    </message>
    <message>
        <source>Enter the login name to access the proxy or nothing if no login is required.</source>
        <translation>Digite o nome de login para aceder ao proxy ou nada se nenhum login é necessário.</translation>
    </message>
    <message>
        <source>Password</source>
        <translation>Senha (palavra passe)</translation>
    </message>
    <message>
        <source>Enter the login password to access the proxy or nothing if no login is required.</source>
        <translation>Digite a senha de login para aceder ao proxy ou nada se nenhum login é necessário.</translation>
    </message>
    <message>
        <source>Distance unit</source>
        <translation>Unidade de distância</translation>
    </message>
    <message>
        <source>This option lets you specify the unit to be used for distances.</source>
        <translation>Esta opção permite que você especifique a unidade a ser usado para distâncias.</translation>
    </message>
    <message>
        <source>Album</source>
        <translation>Álbum</translation>
    </message>
    <message>
        <source>Defines the default value for the field Album</source>
        <translation>Define o valor padrão para o campo Álbum</translation>
    </message>
    <message>
        <source>Default sound level</source>
        <translation>Nível de som padrão</translation>
    </message>
    <message>
        <source>Set the volume level to be achieved by amplification for music and audio tracks when the volume is set to auto</source>
        <translation>Defina o nível de volume a ser alcançado pela amplificação para a música e faixas de áudio quando o volume é definido para automático</translation>
    </message>
</context>
<context>
    <name>0102</name>
    <message>
        <source>Manage devices dialog</source>
        <translation>Caixa de diálogo Gerir dispositivos</translation>
    </message>
    <message>
        <source>The default database (supplied with ffDiaporama). These devices are registered in the global ffDiaporama configuration file.</source>
        <translation>O base de dados predefinido (fornecido com ffDiaporama). Estes dispositivos estão registrados no arquivo de configuração ffDiaporama global.</translation>
    </message>
    <message>
        <source>The devices which you modify or add. These are registered in your personal configuration file.</source>
        <translation>Os dispositivos que você pode modificar ou acrescentar. Estes são registrados no arquivo de configuração pessoal.</translation>
    </message>
    <message>
        <source>The device type zone allows you to select the type of equipment to be shown in the list.</source>
        <translation>A zona tipo de dispositivo permite que você selecione o tipo de equipamento a ser mostrado na lista.</translation>
    </message>
    <message>
        <source>The list shows the categories and the device types present in the database.</source>
        <translation>A lista mostra as categorias e os tipos de dispositivos presentes no banco de dados.</translation>
    </message>
    <message>
        <source>Devices preceded by this icon are defined in the default database.</source>
        <translation>Dispositivos precedidos por este ícone estão definidos na base de dados padrão.</translation>
    </message>
    <message>
        <source>Devices preceded by this icon are those that you defined yourself, or those from the default database that you have modified.</source>
        <translation>Dispositivos precedidos por este ícone são aqueles que você definiu, ou os do banco de dados padrão que você tenha modificado.</translation>
    </message>
    <message>
        <source>The following buttons allow you to act on the database:</source>
        <translation>Os seguintes botões permitem agir sobre o banco de dados:</translation>
    </message>
    <message>
        <source>Add device: Allows you to create a new device which will be added to the database. </source>
        <translation>Adicionar dispositivo: Permite criar um novo dispositivo que será adicionada ao banco de dados.</translation>
    </message>
    <message>
        <source>The creation of a new device is made in 3 steps: </source>
        <translation>A criação de um novo dispositivo é feito em três etapas:</translation>
    </message>
    <message>
        <source>You must first create a device</source>
        <translation>Você deve primeiro criar um dispositivo</translation>
    </message>
    <message>
        <source>You define the various parameters</source>
        <translation>Você define os vários parâmetros</translation>
    </message>
    <message>
        <source>You click the &quot;Apply modifications&quot; button to register the parameters</source>
        <translation>Você clica no botão &quot;Aplicar alterações&quot; para registrar os parâmetros</translation>
    </message>
    <message>
        <source>Remove device: Allows you to delete a device. </source>
        <translation>Remover dispositivo: Permite excluir um dispositivo.</translation>
    </message>
    <message>
        <source>Note that you can delete only devices which you created - those shown with this icon: </source>
        <translation>Note que você só pode excluir os dispositivos que você criou - aqueles mostrados com este ícone:</translation>
    </message>
    <message>
        <source>Reset to default: Cancels the modifications that you made on a device defined in the default ffDiaporama database</source>
        <translation>Redefinir para o padrão: Cancela as modificações que você fez em um dispositivo definido no banco de dados predefinido pelo ffDiaporama</translation>
    </message>
    <message>
        <source>Remarks:</source>
        <translation>Observações:</translation>
    </message>
    <message>
        <source>Device subtype</source>
        <translation>Dispositivo - Subtipo</translation>
    </message>
    <message>
        <source>Allows you to select the category in which the equipment is classified</source>
        <translation>Permite que você selecione a categoria em que o equipamento é classificado</translation>
    </message>
    <message>
        <source>Device model</source>
        <translation>Modelo do dispositivo</translation>
    </message>
    <message>
        <source>Enter here the name of the device (free text entry field) and then, enter all the parameters required for rendering videos that are to be associated with the device profile (File format, video Standard, etc.)</source>
        <translation>Digite aqui o nome do dispositivo (campo de entrada de texto livre) e, em seguida, entrar comm todos os parâmetros necessários para a prestação de vídeos que estão a ser associado com o perfil do dispositivo (formato do arquivo, o vídeo padrão, etc)</translation>
    </message>
    <message>
        <source>This dialog box allows you to modify the equipment profiles database.</source>
        <translation>Esta caixa de diálogo permite que você modifique o banco de dados de perfis de equipamento.</translation>
    </message>
    <message>
        <source>The database is actually composed of two parts:</source>
        <translation>O banco de dados é, actualmente, composto de duas partes:</translation>
    </message>
</context>
<context>
    <name>0103</name>
    <message>
        <source>Add or modify a predefined title slide</source>
        <translation>Adicionar ou modificar um slide de título predefinido</translation>
    </message>
    <message>
        <source>This dialog allows you to select a model and define chapter information for predefined title slides.</source>
        <translation>Esta caixa de diálogo permite que você selecione um modelo e defina as informações do capítulo para slide de título predefinido.</translation>
    </message>
    <message>
        <source>To understand the differences between &lt;B&gt;&lt;I&gt;Predefined title slides&lt;/I&gt;&lt;/B&gt; and &lt;B&gt;&lt;I&gt;Standard slides&lt;/I&gt;&lt;/B&gt;, see: &lt;a href=&quot;0012.html&quot;&gt;Predefined title slide&lt;/a&gt;</source>
        <translation>Para entender as diferenças entre &lt;B&gt;&lt;I&gt; Slides de título predefinidos&lt;/I&gt;&lt;/B&gt; e &lt;B&gt;&lt;I&gt; Slide Padrão&lt;/I&gt;&lt;/B&gt;, veja: &lt;a href = &quot;0012.html&quot;&gt;Slide de título predefinidos&lt;/a&gt;</translation>
    </message>
    <message>
        <source>At the top of the box, the following two settings allow you to filter the Predefined title slide that are displayed in the selection area.</source>
        <translation>No topo da caixa, as duas configurações a seguir permitem que você filtre o slide de título predefinidos que são exibidos na área de selecção.</translation>
    </message>
    <message>
        <source>Slide type</source>
        <translation>Tipo de slide</translation>
    </message>
    <message>
        <source>You can select between: </source>
        <translation>Você pode escolher entre:</translation>
    </message>
    <message>
        <source>Project title</source>
        <translation>Título do Projeto</translation>
    </message>
    <message>
        <source>This type of slide is usually used early in the project as the opening credits. </source>
        <translation>Este tipo de slide é usado geralmente no início do projeto, como os créditos de abertura.</translation>
    </message>
    <message>
        <source>The texts variables that are used by the models of this slide type are based only on project information. For more information on project information, see: &lt;a href=&quot;0108.html&quot;&gt;Project properties dialog&lt;/a&gt;</source>
        <translation>As variáveis ​​de textos que são usados ​​pelas modelos deste tipo de slide são baseadas apenas em informações do projecto. Para mais informações sobre informações sobre o projecto, consulte: &lt;a href=&quot;0108.html&quot;&gt; Caixa de diálogo Propriedades do projecto &lt;/a&gt;</translation>
    </message>
    <message>
        <source>Chapter title</source>
        <translation>Título do Capítulo</translation>
    </message>
    <message>
        <source>This type of slide is usually used several times in the project to mark the beginning of the chapter. </source>
        <translation>Este tipo de slide é normalmente usado várias vezes no projeto para marcar o início do capítulo.</translation>
    </message>
    <message>
        <source>The texts variables that are used by the models of this slide type are based on project information and on chapter information.</source>
        <translation>As variáveis ​​de textos que são usados ​​pelas modelos deste tipo de slides são baseados em informações do projeto e na informação capítulo.</translation>
    </message>
    <message>
        <source>Credit title</source>
        <translation>Título de créditos</translation>
    </message>
    <message>
        <source>This type of slide is usually used at the end of the project as the end credits. </source>
        <translation>Este tipo de slide é usado geralmente no final do projeto, como os créditos finais.</translation>
    </message>
    <message>
        <source>The texts variables that are used by the models of this slide type are generally computed. For more information on texts variables, see: &lt;a href=&quot;0013.html&quot;&gt;Dynamic variables&lt;/a&gt;</source>
        <translation>As variáveis ​​de textos que são usados ​​pelas modelos deste tipo de slide são geralmente calculadas. Para mais informações sobre variáveis ​​de textos, veja: &lt;a href=&quot;0013.html&quot;&gt; Variáveis ​​dinâmicas &lt;/ a&gt;</translation>
    </message>
    <message>
        <source>Category</source>
        <translation>Categoria</translation>
    </message>
    <message>
        <source>Statics models</source>
        <translation>Modelos estáticos</translation>
    </message>
    <message>
        <source>This type lists statics models ie without animations.</source>
        <translation>Este tipo de listas estática modelos ou seja, sem animações.</translation>
    </message>
    <message>
        <source>Animated models</source>
        <translation>Modelos animados</translation>
    </message>
    <message>
        <source>This type lists animated models ie with several shots.</source>
        <translation>Este tipo apresenta modelos animados ou seja, com vários tiros.</translation>
    </message>
    <message>
        <source>Custom models</source>
        <translation>Modelos personalizados</translation>
    </message>
    <message>
        <source>This type lists the templates that you saved with the &lt;B&gt;&lt;I&gt;Save as model&lt;/I&gt;&lt;/B&gt; function of the &lt;a href=&quot;0119.html&quot;&gt;Slide properties&lt;/a&gt; dialog box.</source>
        <translation>Este tipo lista os modelos que você salvou com o &lt;I&gt; &lt;B&gt; Salvar como modelo &lt;/I&gt; &lt;/B&gt; função da &lt;a href=&quot;0119.html&quot;&gt; caixa de diálogo propriedades do slide &lt;/a&gt;.</translation>
    </message>
    <message>
        <source> The selection area display models corresponding to the current Type and Category you previously selected.</source>
        <translation>Os modelos exibidos na área de seleção correspondentem ao actual Tipo e Categoria selecionada anteriormente.</translation>
    </message>
    <message>
        <source>The models are displayed and played, so you can see the slide as it will appear in your project with the content of dynamic variables.</source>
        <translation>Os modelos são apresentados e rodados, assim você pode ver o slide como ele aparecerá no seu projecto com o conteúdo das variáveis ​​dinâmicas.</translation>
    </message>
    <message>
        <source>The slide duration is displayed on the bottom of each thumbnails model.</source>
        <translation>A duração da slide é apresentada na parte inferior de cada modelo miniaturas.</translation>
    </message>
    <message>
        <source>When your selection of model is made, the following settings are available if slide type is &lt;B&gt;&lt;I&gt;Chapter model&lt;/I&gt;&lt;/B&gt;:</source>
        <translation>Quando a seleção de modelo é feito, as seguintes configurações estão disponíveis se o tipo de slide é &lt;B&gt; &lt;I&gt; Modelo do Capítulo &lt;/I&gt; &lt;/B&gt;:</translation>
    </message>
    <message>
        <source>Chapter name</source>
        <translation>Nome do Capítulo</translation>
    </message>
    <message>
        <source>Enter here the name of the chapter.</source>
        <translation>Digite aqui o nome do capítulo.</translation>
    </message>
    <message>
        <source>Chapter date different from project date</source>
        <translation>Data do capítulo diferente da data do projecto</translation>
    </message>
    <message>
        <source>If this box is checked, the date of the chapter is different from the date of the project. </source>
        <translation>Se esta opção estiver marcada, a data do capítulo é diferente da data do projecto.</translation>
    </message>
    <message>
        <source>Remark: It is often useful to differentiate the date of the chapter of the date of the project. </source>
        <translation>Observação: Muitas vezes é útilizado para diferenciar a data do capítulo da data do projecto.</translation>
    </message>
    <message>
        <source>Event date</source>
        <translation>Data do evento</translation>
    </message>
    <message>
        <source>Select a date for the chapter. </source>
        <translation>Selecione uma data para o capítulo. </translation>
    </message>
    <message>
        <source>Remark: This field is enabled only if the &lt;I&gt;&lt;B&gt;Chapter date different from project date&lt;/B&gt;&lt;/I&gt; check box is checked.</source>
        <translation>Observação: Este campo é habilitado somente se a caixa de seleção &lt;B&gt; &lt;I&gt; Data Capítulo diferente da data do projecto &lt;/B&gt; &lt;/I&gt; está marcada.</translation>
    </message>
    <message>
        <source>Override date</source>
        <translation>Substituir data</translation>
    </message>
    <message>
        <source>Check this box to override the date and offer you to enter the date as a free multi-line text. </source>
        <translation>Marque esta caixa para substituir a data e dispor do campo para inserir a data como um texto multi-linha livre.</translation>
    </message>
    <message>
        <source>Under these settings, the following two buttons allow you:</source>
        <translation>De acordo com estas definições, os dois botões a seguir permitem que você:</translation>
    </message>
    <message>
        <source> Project properties</source>
        <translation>Projecto - propriedades</translation>
    </message>
    <message>
        <source>This button allows you to open &lt;a href=&quot;0108.html&quot;&gt;Project properties dialog&lt;/a&gt;.</source>
        <translation>Este botão permite que você abra a &lt;a href=&quot;0108.html&quot;&gt; caixa de diálogo Propriedades do projecto &lt;/a&gt;.</translation>
    </message>
    <message>
        <source> Convert to standard slide</source>
        <translation>Converter para slide padrão</translation>
    </message>
    <message>
        <source>This button allows you to convert this slide to a standard slide which are fully customizable.</source>
        <translation>Este botão permite que você converta este slide para um slide padrão, que são totalmente personalizáveis​​.</translation>
    </message>
    <message>
        <source>For example, if the project is &lt;U&gt;My vacation from 1 to 15&lt;/U&gt;, the chapter may be limited to the &lt;U&gt;3&lt;/U&gt;.</source>
        <translation>Por exemplo, se o projecto for &lt;U&gt;Minhas férias de 1 a 15&lt;/U&gt;, o capítulo pode ser limitada ao &lt;U&gt;3&lt;/U&gt;.</translation>
    </message>
    <message>
        <source>Chapter location different from project location</source>
        <translation>Local do capítulo diferente do local do projecto</translation>
    </message>
    <message>
        <source>If this box is checked, the location of the chapter is different from the location of the project. </source>
        <translation>Se esta opção estiver marcada, o local do capítulo é diferente do local do projeto.</translation>
    </message>
    <message>
        <source>Remark: It is often useful to differentiate the location of the chapter of the location of the project. </source>
        <translation>Observação: Muitas vezes, é útil para diferenciar a localização do capítulo da localização do projeto.</translation>
    </message>
    <message>
        <source>For example, if the project location is &lt;U&gt;where I rented for the holidays&lt;/U&gt;, the chapter location may be &lt;U&gt;where I went on tour&lt;/U&gt;.</source>
        <translation>Por exemplo, se a localização do projeto é &lt;U&gt; onde eu aluguei para as férias &lt;/U&gt;, a localização capítulo pode ser &lt;U&gt; onde eu fui na excursão &lt;/U&gt;.</translation>
    </message>
    <message>
        <source>Event location</source>
        <translation>Local do evento</translation>
    </message>
    <message>
        <source>The location where the chapter&apos;s event took place</source>
        <translation>O local onde o evento do capítulo actual ocorreu</translation>
    </message>
    <message>
        <source>Click on this </source>
        <translation>Clique neste </translation>
    </message>
    <message>
        <source> button to select a location from the &lt;a href=&quot;0123.html&quot;&gt;Add or modify a location&lt;/a&gt; dialog or using a favorite</source>
        <translation>botão para selecionar um local da  caixa de diálogo &lt;a href=&quot;0123.html&quot;&gt;Adicionar ou modificar uma localização&lt;/a&gt; ou usando um favorito</translation>
    </message>
    <message>
        <source> button to remove actual location (set to empty)</source>
        <translation>botão para remover localização actual (definido como vazio)</translation>
    </message>
    <message>
        <source>Remark: These fields and buttons are enabled only if the &lt;I&gt;&lt;B&gt;Chapter location different from project location&lt;/B&gt;&lt;/I&gt; check box is checked.</source>
        <translation>Observação: Esses campos e botões são habilitados somente se a caixa de seleção &lt;I&gt;&lt;B&gt;Local do capítulo diferente do local do projecto&lt;/B&gt; &lt;/I&gt; está marcada.</translation>
    </message>
</context>
<context>
    <name>0104</name>
    <message>
        <source>Background properties</source>
        <translation>Propriedades do fundo</translation>
    </message>
    <message>
        <source>The &quot;Background properties&quot; dialog allows you to define settings for the background of the slide.</source>
        <translation>A caixa de diálogo &quot;Propriedades do fundo&quot; permite que você defina as configurações para o plano de fundo do slide.</translation>
    </message>
    <message>
        <source>Same background as preceding object.</source>
        <translation>Mesmo fundo como o precedente objecto.</translation>
    </message>
    <message>
        <source> If this option is selected, the slide will have no background definition  but will use the same background as the previous slide: </source>
        <translation>Se esta opção for selecionada, o slide não terá definição de fundo, mas vai usar a mesma origem que o slide anterior:</translation>
    </message>
    <message>
        <source>If the previous slide does not have a background definition either, the check continues backwards until a slide is found which does have a background definition.</source>
        <translation>Se o slide anterior não têm uma definição de fundo seja, a verificação continua para trás até que um slide é encontrado que não têm uma definição de fundo.</translation>
    </message>
    <message>
        <source>If no previous slide has a background definition, then a black frame will be used.</source>
        <translation>Se nenhum slide anterior tem uma definição de fundo, então será utilizada uma moldura preta.</translation>
    </message>
    <message>
        <source>Select a new background</source>
        <translation>Selecione um novo fundo</translation>
    </message>
    <message>
        <source> If this option is selected, the slide will have its own background definition. In that case, the following zones set properties for the background. </source>
        <translation>Se esta opção for selecionada, o slide vai ter a sua própria definição de fundo. Nesse caso, as seguintes zonas definem propriedades para o fundo.</translation>
    </message>
    <message>
        <source>Solid brush</source>
        <translation>Pincel sólido</translation>
    </message>
    <message>
        <source>Selects a plain color.</source>
        <translation>Selecione uma cor lisa.</translation>
    </message>
    <message>
        <source>Gradient 2 colors</source>
        <translation>Gradiente 2 cores</translation>
    </message>
    <message>
        <source>Selects a gradient of 2 colors</source>
        <translation>Selecione um gradiente de duas cores</translation>
    </message>
    <message>
        <source>Gradient 3 colors</source>
        <translation>Gradiente 3 cores</translation>
    </message>
    <message>
        <source>Selects a gradient of 3 colors</source>
        <translation>Selecione um gradiente de três cores</translation>
    </message>
    <message>
        <source>Image from library</source>
        <translation>Imagem da biblioteca</translation>
    </message>
    <message>
        <source>Selects a background image from the library </source>
        <translation>Selecione uma imagem de fundo da biblioteca</translation>
    </message>
    <message>
        <source>Remark: By default, the library contains a dozen of background screens. </source>
        <translation>Observação: Por padrão, a biblioteca contém uma dúzia de telas de fundo.</translation>
    </message>
    <message>
        <source>You can get additionals backgrounds installing the &lt;B&gt;&lt;U&gt;Texturemate&lt;/U&gt;&lt;/B&gt; extension from this page </source>
        <translation>Você pode obter fundos adicionais instalando a extensão desta página &lt;B&gt; &lt;U&gt; Texturemate &lt;/U&gt; &lt;/B&gt;</translation>
    </message>
    <message>
        <source>Download extensions</source>
        <translation>Baixar extensões</translation>
    </message>
    <message>
        <source>Image disk</source>
        <translation>Imagem do disco</translation>
    </message>
    <message>
        <source>Allows you to select a photo or an image. </source>
        <translation>Permite que você selecione uma foto ou uma imagem.</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Arquivo</translation>
    </message>
    <message>
        <source>Indicates the name of the current file</source>
        <translation>Indica o nome do ficheiro actual</translation>
    </message>
    <message>
        <source>Allow you to selects an image file</source>
        <translation>Permita que você seleciona um arquivo de imagem</translation>
    </message>
    <message>
        <source>Keep aspect ratio</source>
        <translation>Manter a relação de aspecto</translation>
    </message>
    <message>
        <source>If this box is checked, then the image will not be deformed, and: </source>
        <translation>Se esta opção estiver marcada, a imagem não será deformada, e:</translation>
    </message>
    <message>
        <source> Open the &lt;a href=&quot;0110.html&quot;&gt;Image framing and correction dialog&lt;/a&gt; to regulate framing and image corrections </source>
        <translation>Abra a caixa de diálogo &lt;a href=&quot;0110.html&quot;&gt; enquadramento e correção de imagem &lt;/a&gt; para regular o enquadramento e corrigir imagem </translation>
    </message>
    <message>
        <source>Full filling</source>
        <translation>Preenchimento integral</translation>
    </message>
    <message>
        <source>Allows the image to fill the whole screen with image deformation as needed.</source>
        <translation>Permite que a imagem preencha toda a tela com a imagem deformada, se necessário.</translation>
    </message>
</context>
<context>
    <name>0105</name>
    <message>
        <source>Chapter properties</source>
        <translation>Propriedades do Capítulo</translation>
    </message>
    <message>
        <source> All slides have information chaptering so each slide can mark the beginning of a new chapter. </source>
        <translation>Todos os slides têm informações dos capítulos então cada slide pode marcar o início de um novo capítulo.</translation>
    </message>
    <message>
        <source>Remarks:</source>
        <translation>Observações:</translation>
    </message>
    <message>
        <source>Except for the first chapter which start at 0, all other chapters begin after the entering transition.</source>
        <translation>Excepto para o primeiro capítulo, que começa a 0, todos os outros capítulos começam após a entrada da transição.</translation>
    </message>
    <message>
        <source>The 1st slide of the mount always mark the beginning of a new chapter.</source>
        <translation>O primeiro slide da montagem marcará sempre o início de um novo capítulo.</translation>
    </message>
    <message>
        <source>This dialog allows you to define settings for the chapter information of the slide:</source>
        <translation>Esta caixa de diálogo permite que você defina as configurações para as informações do capítulo do slide:</translation>
    </message>
    <message>
        <source>Start a new chapter with this slide</source>
        <translation>Iniciar um novo capítulo com este slide</translation>
    </message>
    <message>
        <source>If this box is checked, the slide will mark the beginning of a new chapter. </source>
        <translation>Se esta opção estiver marcada, o slide vai marcar o início de um novo capítulo.</translation>
    </message>
    <message>
        <source>Remark: This box cannot be deactivated for the first slide of the project.</source>
        <translation>Observação: Esta caixa não pode ser desactivada para o primeiro slide do projecto.</translation>
    </message>
    <message>
        <source>Chapter name</source>
        <translation>Nome do Capítulo</translation>
    </message>
    <message>
        <source>Enter here the name of the chapter.</source>
        <translation>Digite aqui o nome do capítulo.</translation>
    </message>
    <message>
        <source>Chapter date different from project date</source>
        <translation>Data do capítulo diferente da data do projecto</translation>
    </message>
    <message>
        <source>If this box is checked, the date of the chapter is different from the date of the project. </source>
        <translation>Se esta opção estiver marcada, a data do capítulo é diferente da data do projecto.</translation>
    </message>
    <message>
        <source>Remark: It is often useful to differentiate the date of the chapter of the date of the project. </source>
        <translation>Observação: Muitas vezes é útilizado para diferenciar a data do capítulo da data do projecto.</translation>
    </message>
    <message>
        <source>Event date</source>
        <translation>Data do evento</translation>
    </message>
    <message>
        <source>Select a date for the chapter. </source>
        <translation>Selecione uma data para o capítulo. </translation>
    </message>
    <message>
        <source>Remark: This field is enabled only if the &lt;I&gt;&lt;B&gt;Chapter date different from project date&lt;/B&gt;&lt;/I&gt; check box is checked.</source>
        <translation>Observação: Este campo é habilitado somente se a caixa de seleção &lt;B&gt; &lt;I&gt; Data Capítulo diferente da data do projecto &lt;/B&gt; &lt;/I&gt; está marcada.</translation>
    </message>
    <message>
        <source>Override date</source>
        <translation>Substituir data</translation>
    </message>
    <message>
        <source>Check this box to override the date and offer you to enter the date as a free multi-line text. </source>
        <translation>Marque esta caixa para substituir a data e dispor do campo para inserir a data como um texto multi-linha livre.</translation>
    </message>
    <message>
        <source>For example, if the project is &lt;U&gt;My vacation from 1 to 15&lt;/U&gt;, the chapter may be limited to the &lt;U&gt;3&lt;/U&gt;.</source>
        <translation>Por exemplo, se o projecto for &lt;U&gt;Minhas férias de 1 a 15&lt;/U&gt;, o capítulo pode ser limitada ao &lt;U&gt;3&lt;/U&gt;.</translation>
    </message>
    <message>
        <source>Chapter location different from project location</source>
        <translation>Local do capítulo diferente do local do projecto</translation>
    </message>
    <message>
        <source>If this box is checked, the location of the chapter is different from the location of the project. </source>
        <translation>Se esta opção estiver marcada, o local do capítulo é diferente do local do projeto.</translation>
    </message>
    <message>
        <source>Remark: It is often useful to differentiate the location of the chapter of the location of the project. </source>
        <translation>Observação: Muitas vezes, é útil para diferenciar a localização do capítulo da localização do projeto.</translation>
    </message>
    <message>
        <source>For example, if the project location is &lt;U&gt;where I rented for the holidays&lt;/U&gt;, the chapter location may be &lt;U&gt;where I went on tour&lt;/U&gt;.</source>
        <translation>Por exemplo, se a localização do projeto é &lt;U&gt; onde eu aluguei para as férias &lt;/U&gt;, a localização capítulo pode ser &lt;U&gt; onde eu fui na excursão &lt;/U&gt;.</translation>
    </message>
    <message>
        <source>Event location</source>
        <translation>Local do evento</translation>
    </message>
    <message>
        <source>The location where the chapter&apos;s event took place</source>
        <translation>O local onde o evento do capítulo actual ocorreu</translation>
    </message>
    <message>
        <source>Click on this </source>
        <translation>Clique neste </translation>
    </message>
    <message>
        <source> button to select a location from the &lt;a href=&quot;0123.html&quot;&gt;Add or modify a location&lt;/a&gt; dialog or using a favorite</source>
        <translation>botão para selecionar um local da  caixa de diálogo &lt;a href=&quot;0123.html&quot;&gt;Adicionar ou modificar uma localização&lt;/a&gt; ou usando um favorito</translation>
    </message>
    <message>
        <source> button to remove actual location (set to empty)</source>
        <translation>botão para remover localização actual (definido como vazio)</translation>
    </message>
    <message>
        <source>Remark: These fields and buttons are enabled only if the &lt;I&gt;&lt;B&gt;Chapter location different from project location&lt;/B&gt;&lt;/I&gt; check box is checked.</source>
        <translation>Observação: Esses campos e botões são habilitados somente se a caixa de seleção &lt;I&gt;&lt;B&gt;Local do capítulo diferente do local do projecto&lt;/B&gt; &lt;/I&gt; está marcada.</translation>
    </message>
</context>
<context>
    <name>0106</name>
    <message>
        <source>Check configuration</source>
        <translation>Verificar a configuração</translation>
    </message>
    <message>
        <source>This dialog allows to check external tools configuration and libraries used by ffDiaporama.</source>
        <translation>Esta caixa de diálogo permite verificar a configuração de ferramentas externas e bibliotecas usadas pelo ffDiaporama.</translation>
    </message>
    <message>
        <source>It is especially useful for the Linux users and for those who compiles the application.</source>
        <translation>Ele é especialmente útil para os utilizadores de Linux e para aqueles que compilam o aplicativo.</translation>
    </message>
    <message>
        <source>The most common shown errors concern the supported formats, codec and library versions.</source>
        <translation>Os erros mostrados mais comuns dizem respeito aos formatos suportados, versões codec e de biblioteca.</translation>
    </message>
    <message>
        <source>To solve the problems you will have to install additional packages on your computer and may be to make ffDiaporama from source and verify again the configuration.</source>
        <translation>Para resolver os problemas que você terá que instalar pacotes adicionais no seu computador e poderá reiniciar o ffDiaporama a partir do código fonte e verificar novamente a configuração.</translation>
    </message>
</context>
<context>
    <name>0107</name>
    <message>
        <source>Export project</source>
        <translation>Exportar projecto</translation>
    </message>
    <message>
        <source>This dialog box allows you to export the project and all ressources used by the project to a folder</source>
        <translation>Esta caixa de diálogo permite que você exporte o projeto e todos os recursos, utilizado pelo projeto, para uma pasta</translation>
    </message>
    <message>
        <source>Destination folder</source>
        <translation>Pasta de destino</translation>
    </message>
    <message>
        <source>Allows you to select the base destination folder. Click on the folder button to open the directory selector.</source>
        <translation>Permite que você selecione a pasta de destino base. Clique no botão de pasta para abrir o selector do diretório.</translation>
    </message>
    <message>
        <source>Project subfolder</source>
        <translation>Subpasta do projecto</translation>
    </message>
    <message>
        <source>Allows you to select the folder name to be created for the project files. By default the project title is proposed.</source>
        <translation>Permite que você selecione o nome da pasta a ser criada para os arquivos do projeto. Por padrão é proposto o título do projeto.</translation>
    </message>
    <message>
        <source> Once completed your selections, click the OK button to start the export. </source>
        <translation>Depois de concluído as suas selecções, clique no botão OK para iniciar a exportação.</translation>
    </message>
    <message>
        <source>At any time during this process, you can click the cancel button to stop the export. </source>
        <translation>A qualquer momento durante este processo, você pode clicar no botão Cancelar para interromper a exportação.</translation>
    </message>
    <message>
        <source>Remarks:</source>
        <translation>Observações:</translation>
    </message>
    <message>
        <source>The export takes into account all the resources that compose the project:</source>
        <translation>A exportação leva em conta todos os recursos que compõem o projeto:</translation>
    </message>
    <message>
        <source>Images</source>
        <translation>Imagens</translation>
    </message>
    <message>
        <source>Videos</source>
        <translation>Vídeos</translation>
    </message>
    <message>
        <source>Music</source>
        <translation>Música</translation>
    </message>
    <message>
        <source>Thumbnail elements</source>
        <translation>Elementos miniatura</translation>
    </message>
    <message>
        <source>Wallpapers</source>
        <translation>Papéis de parede</translation>
    </message>
    <message>
        <source>clipart that are not stored under the ClipArt alias.</source>
        <translation>clipart que não são armazenadas sob o pseudônimo de clipart.</translation>
    </message>
    <message>
        <source>Export does not just only copy the files. The following rules apply:</source>
        <translation>A exportação não copia somente os arquivos. As seguintes regras  aplicam-se:</translation>
    </message>
    <message>
        <source>If multiple files from different directories have the same names, these files are re-named.</source>
        <translation>Se vários arquivos de diretórios diferentes têm os mesmos nomes, esses arquivos são re-nomeados.</translation>
    </message>
    <message>
        <source>A .ffd project file is created taking into account any changes in directory and file name.</source>
        <translation>Um arquivo de projeto .ffd é criado levando em conta todas as alterações no diretório e o nome do arquivo.</translation>
    </message>
</context>
<context>
    <name>0108</name>
    <message>
        <source>Project properties</source>
        <translation>Projecto - propriedades</translation>
    </message>
    <message>
        <source>This information will then be registered in the form of TAGs in the rendered video files. </source>
        <translation>Esta informação será registrada na forma de TAGs nos arquivos de vídeo renderizados.</translation>
    </message>
    <message>
        <source>Some fields are automatically filled and do not appear in this dialog: </source>
        <translation>Alguns campos são preenchidos automaticamente e não aparecem nesta caixa de diálogo:</translation>
    </message>
    <message>
        <source>Remarks:</source>
        <translation>Observações:</translation>
    </message>
    <message>
        <source>The properties of the project are a partial implementation of the </source>
        <translation>As propriedades do projecto são uma implementação parcial do</translation>
    </message>
    <message>
        <source>MPEG-7</source>
        <translation>MPEG-7</translation>
    </message>
    <message>
        <source> standard on the descriptors of multimedia contents.</source>
        <translation>padrão sobre os descritores de conteúdo multimédia. </translation>
    </message>
    <message>
        <source>These properties are written into the video files during the rendering and can be exploited by indexing systems (collection managers) or by </source>
        <translation>Estas propriedades são escritas nos arquivos de vídeo durante a renderização e pode ser explorada por sistemas de indexação (gestores colheita) ou por </translation>
    </message>
    <message>
        <source>Media Center Systems</source>
        <translation>Centro de Sistemas Média (Media Center Systems)</translation>
    </message>
    <message>
        <source>Settable fields</source>
        <translation>Campos configuráveis</translation>
    </message>
    <message>
        <source>Fields</source>
        <translation>Campos</translation>
    </message>
    <message>
        <source>Remark</source>
        <translation>Observação</translation>
    </message>
    <message>
        <source>Project geometry</source>
        <translation>Geometria do projecto</translation>
    </message>
    <message>
        <source>This field allows you to select the geometry to be used for the project. </source>
        <translation>Este campo permite que você escolha a geometria a ser utilizada para o projecto. </translation>
    </message>
    <message>
        <source>Remark:</source>
        <translation>Observação:</translation>
    </message>
    <message>
        <source>This field is only editable when the dialog box is used for creating a new project. Subsequently, it is not possible to change this value.</source>
        <translation>Este campo só é editável quando a caixa de diálogo é usada para a criação de um novo projecto. Posteriormente, não é possível alterar este valor.</translation>
    </message>
    <message>
        <source>Title</source>
        <translation>Título</translation>
    </message>
    <message>
        <source>The title of the project </source>
        <translation>O Título do Projeto</translation>
    </message>
    <message>
        <source>If the id3v2 compatibility option is set in &lt;a href=&quot;0101.html&quot;&gt;option dialog&lt;/a&gt;, this fields is limited to 30 characters</source>
        <translation>Se a opção de compatibilidade id3v2 está marcada &lt;a href=&quot;0101.html&quot;&gt; caixa de diálogo opção&lt;/a&gt;, este campo é limitado a 30 caracteres</translation>
    </message>
    <message>
        <source>Event date</source>
        <translation>Data do evento</translation>
    </message>
    <message>
        <source>The date of the event of the project</source>
        <translation>A data do evento do projecto</translation>
    </message>
    <message>
        <source>Override date</source>
        <translation>Substituir data</translation>
    </message>
    <message>
        <source>Check this box to override the date and offer you to enter the date as a free multi-line text</source>
        <translation>Marque esta caixa para substituir a data e dispor do campo para inserir a data como um texto multi-linha livre</translation>
    </message>
    <message>
        <source>Author</source>
        <translation>Autor</translation>
    </message>
    <message>
        <source>The name of the author of the project. </source>
        <translation>O nome do autor do projeto. </translation>
    </message>
    <message>
        <source>This field is often shown by indexing system and </source>
        <translation>Este campo é mostrado frequentemente pelo sistema de indexação e </translation>
    </message>
    <message>
        <source> under the term Artist.</source>
        <translation>sob o termo Artista.</translation>
    </message>
    <message>
        <source>Album</source>
        <translation>Álbum</translation>
    </message>
    <message>
        <source>The album of the project </source>
        <translation>O álbum do projecto</translation>
    </message>
    <message>
        <source>Language</source>
        <translation>Idioma</translation>
    </message>
    <message>
        <source>The language of the audio track </source>
        <translation>O idioma da faixa de áudio</translation>
    </message>
    <message>
        <source>(ISO 639 standard - 3 characters)</source>
        <translation>(Norma ISO 639 - 3 caracteres)</translation>
    </message>
    <message>
        <source>Comment</source>
        <translation>Comentário</translation>
    </message>
    <message>
        <source>A free comment which can spread out on several lines. </source>
        <translation>Um comentário livre que pode espalhar-se em várias linhas.</translation>
    </message>
    <message>
        <source>Numerous indexing systems or </source>
        <translation>Numerosos sistemas de indexação ou</translation>
    </message>
    <message>
        <source> will read only the 1&lt;SUP&gt;st&lt;/SUP&gt; line.</source>
        <translation>vão ler apenas a 1 &lt;SUP&gt; ª &lt;/sup&gt; linha.</translation>
    </message>
    <message>
        <source>Timestamp</source>
        <translation>O selo de tempo</translation>
    </message>
    <message>
        <source>Date and time of generation of the video.</source>
        <translation>Data e hora da geração do vídeo.</translation>
    </message>
    <message>
        <source>Composer</source>
        <translation>Compositor</translation>
    </message>
    <message>
        <source>Contains the version of ffDiaporama with which the video was produced.</source>
        <translation>Contém a versão ffDiaporama com que o vídeo foi produzido.</translation>
    </message>
    <message>
        <source>Encoder</source>
        <translation>Encoder</translation>
    </message>
    <message>
        <source>Contains the version of libavformat (ffmpeg) with which the video was produced.</source>
        <translation>Contém a versão do libavformat (ffmpeg) com o qual o vídeo foi produzido.</translation>
    </message>
    <message>
        <source>For more compatibility with indexing systems and </source>
        <translation>Para mais compatibilidade com os sistemas de indexação e</translation>
    </message>
    <message>
        <source>, ffDiaporama does not include the whole video TAGs but is closer rather to the standard id3v2 than is the most used by these systems today. Furthermore, the video formats do not support every TAG in the same way.</source>
        <translation>, FfDiaporama não inclui todo o TAGs de vídeo, mas está próximo, em vez de o id3v2 padrão que é o mais utilizado por esses sistemas , actualmente. Além disso, os formatos de vídeo não suportam cada TAG da mesma forma.</translation>
    </message>
    <message>
        <source>Chapters</source>
        <translation>Capítulos</translation>
    </message>
    <message>
        <source> Chapters defined in the project are listed for consultation. (To modify chapters use Chapter button in &lt;a href=&quot;0119.html&quot;&gt;modify slide dialog&lt;/a&gt;.) </source>
        <translation>Capítulos definidos no projecto são listados para consulta. (Para modificar capítulos usar o botão capítulo na &lt;a href=&quot;0119.html&quot;&gt; caixa de diálogo modificar slide &lt;/a&gt;.) </translation>
    </message>
    <message>
        <source>The following fields appear: </source>
        <translation>Os seguintes campos são exibidos:</translation>
    </message>
    <message>
        <source>Chapter number</source>
        <translation>Número do capítulo</translation>
    </message>
    <message>
        <source>Slide</source>
        <translation>Slide</translation>
    </message>
    <message>
        <source>Slide number in wich chapter is defined</source>
        <translatorcomment>which</translatorcomment>
        <translation>Número do slide em que capítulo é definido</translation>
    </message>
    <message>
        <source>Chapter title</source>
        <translation>Título do Capítulo</translation>
    </message>
    <message>
        <source>Start</source>
        <translation>Inicio</translation>
    </message>
    <message>
        <source>Chapter start position</source>
        <translation>Posição de início do capítulo</translation>
    </message>
    <message>
        <source>End</source>
        <translation>Fim</translation>
    </message>
    <message>
        <source>Chapter end position</source>
        <translation>Posição final do Capítulo</translation>
    </message>
    <message>
        <source>Duration</source>
        <translation>Duração</translation>
    </message>
    <message>
        <source>Chapter duration</source>
        <translation>Duração do Capítulo</translation>
    </message>
    <message>
        <source>Remark: Video formats do not support all the chapters in the same way:</source>
        <translation>Nota: Os formatos de vídeo não suportam todos os capítulos da mesma maneira:</translation>
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
        <translation>Suporte completo</translation>
    </message>
    <message>
        <source>AVI/MPG/FLV/OGV/WEBM</source>
        <translation>AVI/MPG/FLV/OGV/WEBM</translation>
    </message>
    <message>
        <source>No support</source>
        <translation>Sem suporte</translation>
    </message>
    <message>
        <source>Options for speed waves</source>
        <translation>Opções para velocidade das ondas</translation>
    </message>
    <message>
        <source>Transition</source>
        <translation>Transição</translation>
    </message>
    <message>
        <source>Defined default speed curve for transitions</source>
        <translation>Curva de velocidade padrão definido para as transições</translation>
    </message>
    <message>
        <source>Block animations</source>
        <translation>Animações de Blocos</translation>
    </message>
    <message>
        <source>Defined default speed curve for block animations</source>
        <translation>Curva de velocidade padrão definido para animações de blocos</translation>
    </message>
    <message>
        <source>Image animations</source>
        <translation>Animações de imagem</translation>
    </message>
    <message>
        <source>Defined default speed curve for image animations</source>
        <translation>Curva de velocidade padrão definido para animações de imagem</translation>
    </message>
    <message>
        <source>Thumbnail</source>
        <translation>Miniatura</translation>
    </message>
    <message>
        <source>Create a new model from this thumbnail or edit custom thumbnail. Opens the &lt;a href=&quot;0117.html&quot;&gt;Edit thumbnail dialog&lt;/a&gt;.</source>
        <translation>Criar um novo modelo a partir desta miniatura ou editar miniatura personalizada. Abre a caixa de diálogo &lt;a href=&quot;0117.html&quot;&gt;Editar miniaturas&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Customize the thumbnail only for this project (without creating a new thumbnail model). Opens the &lt;a href=&quot;0117.html&quot;&gt;Edit thumbnail dialog&lt;/a&gt;.</source>
        <translation>Personalize a miniatura só para este projeto (sem a criação de um novo modelo de miniaturas).  Abre a caixa de diálogo &lt;a href=&quot;0117.html&quot;&gt;Editar miniaturas&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Expor thumbnail to a jpeg file. By default, the proposed file name is &quot;folder.jpg&quot;. ffDiaporama and many </source>
        <translatorcomment>Export</translatorcomment>
        <translation>Exportar miniaturas para um arquivo jpeg. Por padrão, o nome do arquivo proposto é &quot;folder.JPG&quot;. ffDiaporama e muitos</translation>
    </message>
    <message>
        <source> recognize this file as the icon to be used for the directory that contains it.</source>
        <translation>reconhecem esse arquivo como o ícone a ser usado para o diretório que o contém.</translation>
    </message>
    <message>
        <source>See also</source>
        <translation>Veja também</translation>
    </message>
    <message>
        <source>ISO 639</source>
        <translation>ISO 639</translation>
    </message>
    <message>
        <source>TAG in ffmpeg</source>
        <translation>TAG em ffmpeg</translation>
    </message>
    <message>
        <source>Standard ID3v2</source>
        <translation>Norma ID3v2</translation>
    </message>
    <message>
        <source>Standard MPEG-7 on the descriptors of multimedia contents</source>
        <translation>Norma MPEG-7 sobre os descritores de conteúdos multimédia</translation>
    </message>
    <message>
        <source> This dialog allows you to define the information which qualifies the project. </source>
        <translation>Esta caixa de diálogo permite que você defina as informações que qualifica o projecto.</translation>
    </message>
    <message>
        <source>These options allow you to define the thumbnail that will be attached to the video file when rendering </source>
        <translation>Estas opções permitem-lhe definir a miniatura que será anexado ao arquivo de vídeo na renderização</translation>
    </message>
    <message>
        <source>Event location</source>
        <translation>Local do evento</translation>
    </message>
    <message>
        <source>The location where the project&apos;s event took place</source>
        <translation>O local onde o evento do capítulo actual ocorreu</translation>
    </message>
    <message>
        <source>Click on this </source>
        <translation>Clique neste </translation>
    </message>
    <message>
        <source> button to select a location from the &lt;a href=&quot;0123.html&quot;&gt;Add or modify a location&lt;/a&gt; dialog or using a favorite</source>
        <translation>botão para selecionar um local da  caixa de diálogo &lt;a href=&quot;0123.html&quot;&gt;Adicionar ou modificar uma localização&lt;/a&gt; ou usando um favorito</translation>
    </message>
    <message>
        <source> button to remove actual location (set to empty)</source>
        <translation>botão para remover localização actual (definido como vazio)</translation>
    </message>
    <message>
        <source>These options sets the value of the velocity curves for use whenever the corresponding options are set to &quot;Project Default&quot; </source>
        <translation>Estas opções define o valor das curvas de velocidade para uso sempre que as opções correspondentes são definidas como &quot;Predefinição do Projecto&quot;</translation>
    </message>
</context>
<context>
    <name>0109</name>
    <message>
        <source>Select files</source>
        <translation>Selecione os arquivos</translation>
    </message>
    <message>
        <source>This dialog box is used in very many cases in the application.</source>
        <translation>Esta caixa de diálogo é usada em muitos casos na aplicação.</translation>
    </message>
    <message>
        <source>It is used to select either one or multiple files depending on the purpose for which is was called.</source>
        <translation>Ela é utilizada para seleccionar ou um arquivo ou vários arquivos, dependendo da finalidade para a qual é foi chamado.</translation>
    </message>
    <message>
        <source>It consists of a multimedia file browser.</source>
        <translation>Trata-se de um navegador de arquivos multimédia.</translation>
    </message>
    <message>
        <source>For more information on the ffDiaporama&apos;s multimedia file browser, see: &lt;a href=&quot;0024.html&quot;&gt;The multimedia file browser&lt;/a&gt;</source>
        <translation>Para mais informações sobre o navegador de arquivos multimédia do ffDiaporama, consulte: &lt;a href=&quot;0024.html&quot;&gt;O navegador de arquivos multimédia&lt;/a&gt;</translation>
    </message>
</context>
<context>
    <name>0110</name>
    <message>
        <source>Correct, reframe or cut image or video</source>
        <translation>Corrigir, reenquadrar ou cortar imagem ou vídeo</translation>
    </message>
    <message>
        <source>This dialog box allows you to:</source>
        <translation>Esta caixa de diálogo permite que você:</translation>
    </message>
    <message>
        <source>Change image framing (select a part of the image).</source>
        <translation>Alterar enquadramento de imagem (selecione uma parte da imagem).</translation>
    </message>
    <message>
        <source>Rotate image (change or restore the orientation portrait/landscape).</source>
        <translation>Rodar imagem (mudar ou restaurar a orientação retrato / paisagem).</translation>
    </message>
    <message>
        <source>Correct image (change the color and/or exposure parameters) but also applying graphical filters.</source>
        <translation>Corrigir imagem (mudar a cor e / ou parâmetros de exposição), mas também a aplicação de filtros gráficos.</translation>
    </message>
    <message>
        <source>Define the beginning and end of a video sequence.</source>
        <translation>Definir o início e fim de uma sequência de vídeo.</translation>
    </message>
    <message>
        <source> The image correct and reframe tag</source>
        <translatorcomment>tag? or tab. I use tab</translatorcomment>
        <translation>O guia correcção e reenquadramento de imagem</translation>
    </message>
    <message>
        <source>This tab is available for both images and video. It is divided into two parts:</source>
        <translation>Este guia está disponível para imagens e vídeo. Está dividido em duas partes:</translation>
    </message>
    <message>
        <source>To the left: The interactive area</source>
        <translation>À esquerda: A área interactiva</translation>
    </message>
    <message>
        <source>To the right: The settings area</source>
        <translation>À direita: A área de configurações</translation>
    </message>
    <message>
        <source>At the bottom of the interactive zone, is an area for changing the image or video file:</source>
        <translation>Na parte inferior da zona interactiva, é uma área para alterar o ficheiro de imagem ou de video:</translation>
    </message>
    <message>
        <source> This button allows you to change the file </source>
        <translation> Este botão permite que você altere o arquivo</translation>
    </message>
    <message>
        <source>Warning! If you replace a file (image or video) with another one with a different image geometry, you will need to review the image framing in all shots. </source>
        <translation>Atenção! Se você substituir um ficheiro (de imagem ou vídeo) com uma outra de imagem com uma geometria diferente, você terá que rever o enquadramento de imagem em todos os disparos. </translation>
    </message>
    <message>
        <source>At the bottom of the dialog box:</source>
        <translation>Na parte inferior da caixa de diálogo:</translation>
    </message>
    <message>
        <source> This button enables or disables the magnetic rulers: When rulers are enabled, the mouse will automatically snap to the edges of the photo, facilitating the framing. </source>
        <translation>Este botão activa ou desactiva as réguas magnéticas: quando réguas estão habilitadas, o rato irá ajustar automaticamente para as bordas da foto, facilitando o enquadramento.</translation>
    </message>
    <message>
        <source>The interactive area</source>
        <translation>A área interactiva</translation>
    </message>
    <message>
        <source>You can use the interactive zone to set the framing with the mouse or the keyboard:</source>
        <translation>Você pode usar a zona interactiva para definir o enquadramento com o rato ou o teclado:</translation>
    </message>
    <message>
        <source>With the mouse</source>
        <translation>Com o rato</translation>
    </message>
    <message>
        <source>Click one of the handles and, with the mouse button down, drag the mouse to modify the size (to increase or reduce the part of the image to be kept). </source>
        <translation>Clique numa das alças e, com o botão do rato pressionado, arraste o rato para modificar o tamanho (para aumentar ou reduzir a parte da imagem a ser mantida). </translation>
    </message>
    <message>
        <source>Click the image and, with the mouse button down, drag the mouse to modify the part of the image which will be kept.</source>
        <translation>Clique na imagem e, com o botão do rato premido, arraste o rato para modificar a parte da imagem que será mantida.</translation>
    </message>
    <message>
        <source>With the keyboard</source>
        <translation>Com o teclado</translation>
    </message>
    <message>
        <source>Use the arrows to move the part of the image which will be kept. </source>
        <translation>Use as setas para mover a parte da imagem que será mantida. </translation>
    </message>
    <message>
        <source>Use SHIFT+arrows to move the upper left corner handle or CTRL+arraows to move the lower right corner handle, to change the size of the part of the image which will be kept.</source>
        <translation>Utilize SHIFT + setas para mover a alça do canto superior esquerdo ou CTRL + setas para mover a alça do canto inferior direito, para alterar o tamanho da parte da imagem que será mantida.</translation>
    </message>
    <message>
        <source>The settings area - Framing and form</source>
        <translation>A área de configurações - Enquadramento e forma</translation>
    </message>
    <message>
        <source>Allows to select a framing from a list of predefined framings. The framings are classified in different categories: </source>
        <translation>Permite selecionar um enquadramento de uma lista de enquadramentos pré-definidos. Os enquadramentos são classificados em diferentes categorias:</translation>
    </message>
    <message>
        <source>Lock on the project geometry</source>
        <translation>Bloqueio na geometria do projecto</translation>
    </message>
    <message>
        <source>Lock the image framing selection rectangle to the same geometry as the project. If you place the image in full screen, the reframed part will correspond to the whole screen.</source>
        <translation>Bloqueie o enquadramento da imagem, rectângulo na selecção, para a mesma geometria como o projeto Se você colocar a imagem em tela cheia, a parte reenquadrada corresponderá a toda a tela.</translation>
    </message>
    <message>
        <source>Lock on the image geometry</source>
        <translation>Bloqueio na geometria da imagem</translation>
    </message>
    <message>
        <source>Lock the image framing selection rectangle to the same geometry as the image</source>
        <translation>Bloqueie o enquadramento image rectângulo na selecção, para a mesma geometria que a imagem</translation>
    </message>
    <message>
        <source>No constraint</source>
        <translation>Sem restrição</translation>
    </message>
    <message>
        <source>No constraint is applied to the image framing selection rectangle.</source>
        <translation>Sem restrição é aplicada à imagem enquadrada, rectângulo na selecção.</translation>
    </message>
    <message>
        <source>Lock on this geometry</source>
        <translation>Bloquear nesta geometria</translation>
    </message>
    <message>
        <source>Lock image framing selection rectangle to the actual geometry. This only has meaning when a shape has been defined in &quot;no constraint&quot; mode.</source>
        <translation>Bloquear da imagem rectângulo na selecção. enquadramento para a geometria actual Isso só tem sentido quando uma forma foi definida no modo &quot;sem restrição&quot;.</translation>
    </message>
    <message>
        <source>According to the image format, various choices will be proposed to you. For example: </source>
        <translation>De acordo com o formato de imagem, várias opções serão propostos a você. Por exemplo:</translation>
    </message>
    <message>
        <source>Shape</source>
        <translation>Forma</translation>
    </message>
    <message>
        <source>Select a shape for the current block.</source>
        <translation>Seleccionar uma forma para bloco atual.</translation>
    </message>
    <message>
        <source>The horizontal position from the left (X). This position is expressed as a percentage (%) of the width of the image.</source>
        <translation>A posição horizontal da esquerda (X). Esta posição é expressa como uma percentagem (%) da largura da imagem.</translation>
    </message>
    <message>
        <source>Example: if X=25% then the 1st quarter to the left of the image is eliminated.</source>
        <translation>Exemplo: se X = 25% então o primeiro quarto do lado esquerdo da imagem é eliminado.</translation>
    </message>
    <message>
        <source>The vertical position from the top of the image ( Y ). This position is expressed as a percentage (%) of the height of the image.</source>
        <translation>A posição vertical da parte superior da imagem (Y). Esta posição é expressa como uma percentagem (%) da altura da imagem.</translation>
    </message>
    <message>
        <source>Example: if Y=25% the 1st quarter at the top of the image is eliminated.</source>
        <translation>Exemplo: se Y = 25% o primeiro quarto da parte superior da imagem é eliminado.</translation>
    </message>
    <message>
        <source>The width. This value is expressed as a percentage (%) of the original width of the image.</source>
        <translation>A largura.  Este valor é expresso como uma percentagem (%) da largura original da imagem.</translation>
    </message>
    <message>
        <source>Example: if Width=33%, the re-framed image will represent 1/3 of the original.</source>
        <translation>Exemplo: se a Largura = 33%, a imagem reenquadrada irá representar 1/3 do original.</translation>
    </message>
    <message>
        <source>The height. This value is expressed as a percentage (%) of the original height of the image.</source>
        <translation>A altura Este valor é expresso como uma percentagem (%) da altura original da imagem.</translation>
    </message>
    <message>
        <source>Example: if Height=33%, the re-framed image will represent 1/3 of the original.</source>
        <translation>Exemplo: se a Altura = 33%, a imagem reenquadrada irá representar 1/3 do original.</translation>
    </message>
    <message>
        <source>Remarks:</source>
        <translation>Observações:</translation>
    </message>
    <message>
        <source>You can use the + and - buttons in each input field to change the settings, or directly enter values for the four parameters.</source>
        <translation>Você pode usar os botões + e -  em cada campo de entrada para alterar as configurações ou inserir valores diretamente para os quatro parâmetros.</translation>
    </message>
    <message>
        <source>When the image does not correspond to the geometry of the video to be produced, transparent zones appear. For example: an 4:3 image used in a 16:9 project will be shown by default with a transparent zone on each side.</source>
        <translation>Quando a imagem não corresponde à geometria do vídeo a ser produzida, as zonas transparentes aparece Por exemplo: uma imagem 4:3 usado num projecto 16:9 será exibido por padrão com uma zona transparente em cada lado.</translation>
    </message>
    <message>
        <source>The settings area - Annimation settings</source>
        <translation>A área de configurações - Configurações de animação</translation>
    </message>
    <message>
        <source>Speed wave</source>
        <translation>Velocidade das ondas</translation>
    </message>
    <message>
        <source>Defined speed curve for image animations.</source>
        <translation>Definida curva de velocidade para animações de de imagem.</translation>
    </message>
    <message>
        <source>The settings area - Image rotation</source>
        <translation>A área de configurações - Rotação de imagem</translation>
    </message>
    <message>
        <source>The settings area - Luminosity, contrast and gamma and Color enhancement</source>
        <translation>A área de configurações - Luminosidade, contraste e gama e aprimoramento de cor</translation>
    </message>
    <message>
        <source>Allows you to increase or decrease the luminosity of the image</source>
        <translation>Permite aumentar ou diminuir a luminosidade da da imagem</translation>
    </message>
    <message>
        <source>Allows you to increase or decrease the contrast of the image</source>
        <translation>Permite aumentar ou diminuir o contraste da imagem</translation>
    </message>
    <message>
        <source>Allows you to to increase or decrease the gamma value of the image</source>
        <translation>Permite aumentar ou diminuir o valor de gama da imagem</translation>
    </message>
    <message>
        <source>Allows you to activate the grayscale (black &amp; white) filter.</source>
        <translation>Permite activar o filtro escala de cinza (preto &amp; branco).</translation>
    </message>
    <message>
        <source>Allows you to activate the equalize (Histogram equalization) filter.</source>
        <translation>Permite activar o filtro equalizar (equalização de histograma).</translation>
    </message>
    <message>
        <source>Allows you to modify the colorization of an image by changing the primary color red. Example : Reducing the red component makes the image more yellow - increasing it makes make the image more red</source>
        <translation>Permite que você modifique a colorização de uma imagem alterando a cor vermelha primária. Exemplo: redução da componente vermelho torna a imagem mais amarelo - o aumento faz tornar a imagem mais vermelha</translation>
    </message>
    <message>
        <source>Allows you to modify the colorization of an image by changing the primary color green. Example : Reducing the green component makes the image more red - increasing it makes the image more green</source>
        <translation>Permite que você modifique a colorização de uma imagem alterando a cor verde primária. Exemplo: redução da componente verde torna a imagem mais vermelha - aumentando torna a imagem mais verde</translation>
    </message>
    <message>
        <source>Allows you to modify the colorization of an image by changing the primary color blue. Example : Reducing the green component makes the image more red - increasing it makes the image more blue</source>
        <translation>Permite que você modifique a colorização de uma imagem alterando a cor azul primário. Exemplo: redução da componente verde torna a imagem mais vermelha - aumentando torna a imagem mais azul</translation>
    </message>
    <message>
        <source>All the combinations are possible. For example: you can increase the red and reduce the green at the same time. The results depend on the initial strength of the primary color components of the source image.</source>
        <translation>Todas as combinações são possíveis. Por exemplo: é possível aumentar o vermelho e reduzir a verde ao mesmo tempo. Os resultados obtidos dependem da força inicial dos componentes de cores primárias de imagem original.</translation>
    </message>
    <message>
        <source> This button allows the value to be reset to zero for all correction settings.</source>
        <translation>Este botão permite que o valor seja reposto a zero para todas as configurações de correção.</translation>
    </message>
    <message>
        <source>The settings area - Image enhancement</source>
        <translation>A área de configurações - O aprimoramento da imagem</translation>
    </message>
    <message>
        <source> Apply a filter to the photo or video images. The following filters are available: </source>
        <translation> Aplicar um filtro para a imagens fotográficas ou de vídeo. Os seguintes filtros estão disponíveis:</translation>
    </message>
    <message>
        <source>Blur/Sharpen </source>
        <translation>Desfocar / Aguçar (nitidez)</translation>
    </message>
    <message>
        <source>Type: Select the blur/sharpen algorythm</source>
        <translation>Tipo: Selecione o algoritmo desfocar / aguçar (nitidez)</translation>
    </message>
    <message>
        <source>Increase the blur with a negative value, using radius.</source>
        <translation>Aumentar a desfocagem com um valor negativo, usando raio.</translation>
    </message>
    <message>
        <source>Increase the sharpen with a positive value, using radius.</source>
        <translation>Aumentar a nitidez com um valor positivo, usando raio.</translation>
    </message>
    <message>
        <source> This button allows you to reset the value to zero. (For some transformation settings.)</source>
        <translation>Este botão permite-lhe repor o valor a zero. (Para algumas definições de transformação.)</translation>
    </message>
    <message>
        <source>Allows you to activate the despeckle (Noise reduction) filter.</source>
        <translation>Permite ativar o filtro despeckle (redução de ruído).</translation>
    </message>
    <message>
        <source>Allows you to activate the antialias (minimizing the distortion artifacts) filter.</source>
        <translation>Permite activar o filtro antialias (suavização) (minimizando os artefatos de distorção).</translation>
    </message>
    <message>
        <source>The settings area - Artistic effects</source>
        <translation>A área de configurações - Efeitos artísticos</translation>
    </message>
    <message>
        <source>Allows you to activate the negative filter..</source>
        <translation>Permite activar o filtro negativo.</translation>
    </message>
    <message>
        <source>Allows you to activate the emboss filter.</source>
        <translation>Permite activar o filtro de relevo.</translation>
    </message>
    <message>
        <source>Allows you to activate the edge filter.</source>
        <translation>Permite activar o filtro de borda.</translation>
    </message>
    <message>
        <source>Allows you to activate the charcoal filter.</source>
        <translation>Permite activar o filtro de carvão.</translation>
    </message>
    <message>
        <source>Allows you to activate the oilpaint filter.</source>
        <translation>Permite activar o filtro de tinta a óleo.</translation>
    </message>
    <message>
        <source>The settings area - Image distortion</source>
        <translation>A área de configurações - A distorção da imagem</translation>
    </message>
    <message>
        <source>Allows you to activate the swirl transformation. Image swirling is a non-linear image deformation that creates a whirlpool effect.</source>
        <translation>Permite activar a transformação redemoinho Imagem turbulência é uma deformação da imagem não linear que cria um efeito de redemoinho.</translation>
    </message>
    <message>
        <source>Allows you to activate the implode transformation</source>
        <translation>Permite activar a transformação implodir</translation>
    </message>
    <message>
        <source>A value of 0 disables the filter.</source>
        <translation>Um valor de 0 desativa o filtro.</translation>
    </message>
    <message>
        <source>A negative or positive value active the filter in one direction or the other.</source>
        <translation>Um valor negativo ou positivo activa o filtro numa direcção ou noutra.</translation>
    </message>
    <message>
        <source> This button allows the value to be reset to zero.</source>
        <translation>Este botão permite que o valor seja reposto a zero.</translation>
    </message>
    <message>
        <source> The video tag</source>
        <translation>A tag de vídeo</translation>
    </message>
    <message>
        <source>This tag is available only for video.</source>
        <translation>Esta tag está disponível somente para o vídeo.</translation>
    </message>
    <message>
        <source>The progress bar</source>
        <translation>A barra de progresso</translation>
    </message>
    <message>
        <source> This button starts playback. Click again on this button to pause. </source>
        <translation>Este botão inicia a reprodução. Clique novamente neste botão para fazer uma pausa.</translation>
    </message>
    <message>
        <source>The working range</source>
        <translation>A faixa de trabalho</translation>
    </message>
    <message>
        <source> Positions the cursor at the starting point</source>
        <translation>Posiciona o cursor no ponto de partida</translation>
    </message>
    <message>
        <source> Uses the current cursor position as starting point (carries out an edit)</source>
        <translation>Usa a posição actual do cursor como ponto de partida (realiza um edit)</translation>
    </message>
    <message>
        <source> Positions the cursor at the end point</source>
        <translation>Posiciona o cursor no ponto final</translation>
    </message>
    <message>
        <source> Uses the current cursor position as end point (carries out an edit)</source>
        <translation>Usa a posição actual do cursor como ponto final (realiza um edit)</translation>
    </message>
    <message>
        <source>The additional settings zone</source>
        <translation>A zona de configurações adicionais</translation>
    </message>
    <message>
        <source>&lt;B&gt;Volume&lt;/B&gt; allows you to define the &quot;Master Volume&quot; for the file</source>
        <translation>&lt;B&gt;Volume&lt;/B&gt;  permite que você defina o &quot;Volume Master&quot; para o arquivo</translation>
    </message>
    <message>
        <source>&lt;B&gt;Deinterlace video&lt;/B&gt; allows you to activate the deinterlace filter</source>
        <translation>&lt;B&gt; Desentrelaçamento de vídeo &lt;/B&gt; permite ativar o filtro deinterlace</translation>
    </message>
    <message>
        <source>See also</source>
        <translation>Veja também</translation>
    </message>
    <message>
        <source>Ken Burns effects</source>
        <translation>Efeitos Ken Burns</translation>
    </message>
    <message>
        <source>Filter: Histogram equalization</source>
        <translation>Filtro: Equalização de histograma</translation>
    </message>
    <message>
        <source>Filter: Noise reduction</source>
        <translation>Filtro: Redução de ruído</translation>
    </message>
    <message>
        <source>Define a Google Maps map.</source>
        <translation>Definir um mapa do Google Maps.</translation>
    </message>
    <message>
        <source> The Google Maps Map tag</source>
        <translation>A etiqueta do Google Maps Mapa</translation>
    </message>
    <message>
        <source>This tag is available only for Google Maps map.</source>
        <translation>Esta etiqueta está disponível apenas para o Google Maps mapa.</translation>
    </message>
    <message>
        <source>this dialog box is organized in tab that are available depending on the type of the object to edit.</source>
        <translation>Esta caixa de diálogo está organizado nas aba que estão disponíveis, dependendo do tipo do objecto a ser editado.</translation>
    </message>
    <message>
        <source>&lt;a href=&quot;#IMAGETAG&quot;&gt;The image correct and reframe tag&lt;/a&gt; is available with all object types</source>
        <translation>&lt;a href=&quot;#IMAGETAG&quot;&gt;A etiqueta corrigir imagem e reenquadrar&lt;/a&gt; está disponível com todos os tipos de objectos</translation>
    </message>
    <message>
        <source>&lt;a href=&quot;#VIDEOTAG&quot;&gt;The video tag&lt;/a&gt; is available only with video object</source>
        <translation>&lt;a href=&quot;#VIDEOTAG&quot;&gt;A etiqueta de vídeo&lt;/a&gt; está disponível apenas com o objecto vídeo</translation>
    </message>
    <message>
        <source>For more information on available types of objects see: &lt;a href=&quot;0045.html&quot;&gt;Types of objects in ffDiaporama&lt;/a&gt;</source>
        <translation>Para mais informações sobre os tipos de objectos disponíveis ver: &lt;a href=&quot;0045.html&quot;&gt; tipos de objectos no ffDiaporama &lt;/a&gt;</translation>
    </message>
    <message>
        <source>&lt;a href=&quot;#GMAPSMAPTAG&quot;&gt;The Google Maps map tag&lt;/a&gt; is available only with Google Maps map object</source>
        <translation>&lt;a href=&quot;#GMAPSMAPTAG&quot;&gt;A etiqueta do Google Maps mapa&lt;/a&gt; está disponível apenas com o mapa do Google Maps</translation>
    </message>
    <message>
        <source>On the upper left part, you define the map properties</source>
        <translation>Na parte superior esquerda, você define as propriedades do mapa</translation>
    </message>
    <message>
        <source>On the bottom left part, the map is displayed with markers</source>
        <translation>Na parte inferior esquerda, o mapa é apresentado com marcadores</translation>
    </message>
    <message>
        <source>On the upper right part, the table of location is displayed</source>
        <translation>Na parte superior direita, a tabela de localização é exibida</translation>
    </message>
    <message>
        <source>On the bottom right part, you define the properties of the selected location</source>
        <translation>Na parte inferior direita, você define as propriedades do local selecionado</translation>
    </message>
    <message>
        <source>The map properties</source>
        <translation>As propriedades do mapa</translation>
    </message>
    <message>
        <source>Map type</source>
        <translation>Tipo de mapa </translation>
    </message>
    <message>
        <source>Define the type of the map. You can select between the four Google Maps possibilities:</source>
        <translation>Definir o tipo de mapa. Você pode selecionar entre as quatro possibilidades Google Maps:</translation>
    </message>
    <message>
        <source>Roadmap</source>
        <translation>Mapa rodoviário</translation>
    </message>
    <message>
        <source>Satellite</source>
        <translation>Satélite</translation>
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
        <translation>Tamanho do mapa</translation>
    </message>
    <message>
        <source>Define the size of the map. This size represents the distance in width and height of the map.</source>
        <translation>Definir o tamanho do do mapa. Este tamanho representa a distância em altura e comprimento do mapa.</translation>
    </message>
    <message>
        <source>Smaller the zoom is and huger the area represented by the map is.</source>
        <translation>Quanto menor seja o zoom maior será a área representada pelo mapa.</translation>
    </message>
    <message>
        <source>Higher the zoom is and smaller the area represented by the map is.</source>
        <translation>Quanto maior for o zoom menor será a área representada pelo mapa.</translation>
    </message>
    <message>
        <source>Image size</source>
        <translation>Tamanho da imagem</translation>
    </message>
    <message>
        <source>Define the size of the image generated for the map. ffDiaporama proposes to generate maps of several image sizes, so, to create a fluid zoom animation, you can use a large image.</source>
        <translation>Definir o tamanho do da Imagem gerada para o mapa. ffDiaporama propõe a geração de mapas de vários tamanhos de imagem, por isso, para criar uma fluida animação zoom, você pode usar uma imagem grande.</translation>
    </message>
    <message>
        <source>The table of locations</source>
        <translation>A tabela de locais</translation>
    </message>
    <message>
        <source>Select a location from the &lt;a href=&quot;0123.html&quot;&gt;Add or modify a location&lt;/a&gt; dialog or using a favorite.</source>
        <translation>Selecione um local da caixa de diálogo &lt;a href=&quot;0123.html&quot;&gt;Adicionar ou modificar uma localização&lt;/a&gt; ou usando um favorito.</translation>
    </message>
    <message>
        <source>Edit current location. Open the &lt;a href=&quot;0123.html&quot;&gt;Add or modify a location&lt;/a&gt; dialog.</source>
        <translation>Edite localização actual. Abre a caixa de diálogo &lt;a href=&quot;0123.html&quot;&gt;Adicionar ou modificar uma localização&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Remove current location.</source>
        <translation>Remover localização actual.</translation>
    </message>
    <message>
        <source>The marker properties</source>
        <translation>As propriedades do marcador</translation>
    </message>
    <message>
        <source>Properties for all shots</source>
        <translation>Propriedades para todos os disparos</translation>
    </message>
    <message>
        <source>This settings group defines properties for all shots, so, the modifications made to the following properties will apply to all shots. To understand the differences between the properties which apply to all shots and those which apply only to the current shot, consult: &lt;a href=&quot;0010.html&quot;&gt;How ffDiaporama works&lt;/a&gt;.</source>
        <translation>Este grupo define as configurações de propriedades para todos os disparos, por isso, as modificações feitas para as seguintes propriedades serão aplicadas a todos os disparos. Para entender as diferenças entre as propriedades que se aplicam a todos os disparos e que se aplicam apenas para o disparo actual consultar: &lt;a href=&quot;0010.html&quot;&gt;Como ffDiaporama funciona&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>GPS Position form</source>
        <translation>GPS forma da posição</translation>
    </message>
    <message>
        <source>Define a form for the GPS position</source>
        <translation>Definir uma forma para a posição GPS</translation>
    </message>
    <message>
        <source>Marker form</source>
        <translation>Forma do marcador</translation>
    </message>
    <message>
        <source>Define a form for the marker</source>
        <translation>Definir um forma para o marcador</translation>
    </message>
    <message>
        <source>Composition</source>
        <translation>Composição</translation>
    </message>
    <message>
        <source>Defined what information will be displayed in the marker</source>
        <translation>Definido quais informações serão exibidas no marcador</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Tamanho</translation>
    </message>
    <message>
        <source>Define the size of the marker and the GPS position</source>
        <translation>Definir o tamanho do marcador e a posição GPS</translation>
    </message>
    <message>
        <source>Distance</source>
        <translation>Distância</translation>
    </message>
    <message>
        <source>Defined where to display the marker (the distance between the marker and the GPS position)</source>
        <translation>Definido onde exibir o marcador (a distância entre o marcador e a posição GPS)</translation>
    </message>
    <message>
        <source>Properties for this shot</source>
        <translation>Propriedades para este disparo</translation>
    </message>
    <message>
        <source>This settings group defines properties for the current shot, so you can create animation of makers by defining different properties for each shots.</source>
        <translatorcomment>makers or markers?</translatorcomment>
        <translation>Este grupo define as configurações de propriedades para o disparo actual para que você possa criar uma animação de marcadores definindo propriedades diferentes para cada disparo.</translation>
    </message>
    <message>
        <source>Text color</source>
        <translation>Cor do texto</translation>
    </message>
    <message>
        <source>Defines the color of the text</source>
        <translation>Define a cor do texto</translation>
    </message>
    <message>
        <source>Background color</source>
        <translation>Cor do fundo</translation>
    </message>
    <message>
        <source>Defines the color of the background of the marker, of the GPS position and of the part between the two</source>
        <translation>Define a cor do plano de fundo do marcador, a posição GPS e da parte entre os dois</translation>
    </message>
    <message>
        <source>Line color</source>
        <translation>Cor da linha</translation>
    </message>
    <message>
        <source>Defines the color of the border</source>
        <translation>Define a cor da borda</translation>
    </message>
    <message>
        <source>Visibility</source>
        <translation>Visibilidade</translation>
    </message>
    <message>
        <source>Defined if the marker is visible, half-visible (masked) or hidden</source>
        <translation>Definido se o marcador estiver visível, meio-visível (mascarado) ou ocultado</translation>
    </message>
    <message>
        <source>The rotation angle for the z axis. This position is expressed in degrees. Example: if Rotation=90°, the image is turned by a quarter to the right.</source>
        <translation>O ângulo de rotação para o eixo z. Esta posição é expressa em graus. Exemplo: se a rotação = 90 °, a imagem é ligada em um quarto à direita.</translation>
    </message>
    <message>
        <source>Turn the image to the left (to the nearest multiple of 90°).</source>
        <translation>Gire a imagem para a esquerda (para o múltiplo mais próximo de 90 °).</translation>
    </message>
    <message>
        <source>Turn the image to the right (to the nearest multiple of 90°).</source>
        <translation>Gire a Imagem para a direita (para o múltiplo mais próximo de 90 °).</translation>
    </message>
    <message>
        <source>You can move with the mouse the </source>
        <translation>Você pode mover com o rato o</translation>
    </message>
    <message>
        <source> handle, on the progress bar, to move the current position</source>
        <translation>manusear, na barra de progresso, para mover a posição actual</translation>
    </message>
    <message>
        <source>You can move with the mouse the two </source>
        <translation>Você pode mover com o rato os dois</translation>
    </message>
    <message>
        <source> and </source>
        <translation>e</translation>
    </message>
    <message>
        <source> handles, on the progress bar, to move the Start and End positions</source>
        <translation>manusear, na barra de progresso, para mover para as posições Inicial e Final</translation>
    </message>
    <message>
        <source>Displays as follows: </source>
        <translation>Exibe o seguinte:</translation>
    </message>
    <message>
        <source>The ruler representing the duration of the video is dispayed under a black background. Remark than the length of the ruler is increased in proportion to the duration of the video.</source>
        <translation>A régua que representa a duração do vídeo é exibida sob um fundo preto. Observação: o comprimento da régua é aumentada em proporção com a duração do vídeo.</translation>
    </message>
    <message>
        <source>The blue part, on wave form and ruler, represents the part of the video which is selected (which will be used in the assembly).</source>
        <translation>A parte azul, na forma de onda e da régua, representa a parte do vídeo, a qual é seleccionado (que irá ser utilizado na montagem).</translation>
    </message>
    <message>
        <source>The wave form of the sound of the video is displayed under a white background.</source>
        <translation>A forma de onda do som do vídeo é exibida sob um fundo branco.</translation>
    </message>
</context>
<context>
    <name>0111</name>
    <message>
        <source>File information</source>
        <translation>Informações do ficheiro</translation>
    </message>
    <message>
        <source>This dialog allows to obtain detailed information on a multimedia file.</source>
        <translation>Esta caixa de diálogo permite a obtenção de informações detalhadas sobre um arquivo multimédia.</translation>
    </message>
    <message>
        <source>Information shown for the image files</source>
        <translation>Informações mostradas para os arquivos de imagem</translation>
    </message>
    <message>
        <source>Information on file</source>
        <translation>Informações sobre arquivos</translation>
    </message>
    <message>
        <source>File name</source>
        <translation>Nome do ficheiro</translation>
    </message>
    <message>
        <source>The name of the file</source>
        <translation>O nome do arquivo</translation>
    </message>
    <message>
        <source>File type</source>
        <translation>Tipo de arquivo</translation>
    </message>
    <message>
        <source>Image</source>
        <translation>Imagem</translation>
    </message>
    <message>
        <source>File size</source>
        <translation>O tamanho do arquivo</translation>
    </message>
    <message>
        <source>The size of the file on the disk (Mb)</source>
        <translation>O tamanho do arquivo no disco (Mb)</translation>
    </message>
    <message>
        <source>File created</source>
        <translation>Arquivo criado</translation>
    </message>
    <message>
        <source>The date and the hour of creation of the file on the disk (when you transferred it since the camera)</source>
        <translation>A data e hora da criação do arquivo no disco (quando se transferiu da câmera)</translation>
    </message>
    <message>
        <source>File modify</source>
        <translation>Modificação do Arquivo</translation>
    </message>
    <message>
        <source>The date and the hour of the last modification of the file (when the photo was taken or when you modified it with an image editor)</source>
        <translation>A data e a hora da última modificação do arquivo (quando a foto foi tirada ou quando foi modificada com um editor de imagem)</translation>
    </message>
    <message>
        <source>Additional information</source>
        <translation>Informações adicionais</translation>
    </message>
    <message>
        <source> Show the EXIF information supplied by the camera. </source>
        <translation>Mostrar as informações do EXIF fornecidas pela câmera.</translation>
    </message>
    <message>
        <source>This zone can contain several hundreds of lines according to what the camera supplies. </source>
        <translation>Esta zona pode conter várias centenas de linhas de acordo com o que as fontes da câmera.</translation>
    </message>
    <message>
        <source>Information shown for the audio and video files</source>
        <translation>Informações mostradas para os arquivos de áudio e vídeo</translation>
    </message>
    <message>
        <source>Information on file (audio and video files)</source>
        <translation>Informações sobre ficheiros (arquivos de áudio e vídeo)</translation>
    </message>
    <message>
        <source>Audio track information (audio and video files)</source>
        <translation>Informações sobre a faixa de áudio (arquivos de áudio e vídeo)</translation>
    </message>
    <message>
        <source> This zone contains a table listing every audio track present in the file. </source>
        <translation>Esta zona contém uma tabela listando todas as faixas de áudio presente no arquivo. </translation>
    </message>
    <message>
        <source>For every track, the following information is shown: </source>
        <translation>Para cada faixa, a seguinte informação é exibida:</translation>
    </message>
    <message>
        <source>Track number</source>
        <translation>Número da faixa</translation>
    </message>
    <message>
        <source>Language</source>
        <translation>Idioma</translation>
    </message>
    <message>
        <source>The language in which is the audio track (generally cameras and camcorders indicate &lt;B&gt;und&lt;/B&gt; for undefine)</source>
        <translation>A língua em que é a faixa de áudio (geralmente máquinas fotográficas e de filmar indicam &lt;B&gt; und &lt;/B&gt; para indefinido)</translation>
    </message>
    <message>
        <source>Codec</source>
        <translation>Codec</translation>
    </message>
    <message>
        <source>The audio codec used for compressed the sound</source>
        <translation>O codec de áudio usado para compressão do som</translation>
    </message>
    <message>
        <source>Channels</source>
        <translation>Canais</translation>
    </message>
    <message>
        <source>The number of audio channels (1=mono, 2=stereo, etc.)</source>
        <translation>O número de canais de áudio (1 = mono, 2 = estéreo, etc)</translation>
    </message>
    <message>
        <source>Bitrate</source>
        <translation>Taxa de bits</translation>
    </message>
    <message>
        <source>The audio compression ratio (when available)</source>
        <translation>A taxa de compressão de áudio (quando disponível)</translation>
    </message>
    <message>
        <source>Frequency</source>
        <translation>Frequência</translation>
    </message>
    <message>
        <source>The frequency of sampling used by the audio track</source>
        <translation>A frequência de amostragem utilizada pela faixa de áudio</translation>
    </message>
    <message>
        <source>Title</source>
        <translation>Título</translation>
    </message>
    <message>
        <source>A title (when available)</source>
        <translation>Um título (quando disponível)</translation>
    </message>
    <message>
        <source>Video track information (video files only)</source>
        <translation>Informações sobre a faixa de vídeo (apenas arquivos de vídeo)</translation>
    </message>
    <message>
        <source> This zone contains a board listing every video track present in the file. </source>
        <translation>Esta zona contém um quadro lista de cada faixa de vídeo presente no arquivo. </translation>
    </message>
    <message>
        <source>Image size</source>
        <translation>Tamanho da imagem</translation>
    </message>
    <message>
        <source>The size of the images of the video track in number of points by number of line</source>
        <translation>O tamanho das imagens da faixa vídeo em número de pontos por número de linha</translation>
    </message>
    <message>
        <source>Image format</source>
        <translation>Formato de imagem</translation>
    </message>
    <message>
        <source>The size of the images of the video track in million of pixels</source>
        <translation>O tamanho das imagens do da faixa vídeo em milhões de pixeis</translation>
    </message>
    <message>
        <source>Image geometry</source>
        <translation>Geometria da imagem</translation>
    </message>
    <message>
        <source>The image geometry of the video track (4:3, 16:9, etc.)</source>
        <translation>A geometria da imagem da faixa de vídeo (4:3, 16:9, etc)</translation>
    </message>
    <message>
        <source>The video codec used for compressed the images</source>
        <translation>O codec de vídeo utilizado para compressão das imagens</translation>
    </message>
    <message>
        <source>Frame rate</source>
        <translation>Taxa de quadros</translation>
    </message>
    <message>
        <source>The number of images per second of the video</source>
        <translation>O número de imagens por segundo do vídeo</translation>
    </message>
    <message>
        <source>The video compression ratio (when available)</source>
        <translation>A taxa de compressão de vídeo (quando disponível)</translation>
    </message>
    <message>
        <source>Chapter information (video files only)</source>
        <translation>Informações do capítulo (apenas arquivos de vídeo)</translation>
    </message>
    <message>
        <source> This zone appears only for files containing chapters. it contains a table listing every chapter present in the file. </source>
        <translation> Esta zona é exibida apenas para arquivos que contêm capítulos. Ela contém uma tabela listando todos os capítulos presentes no arquivo. </translation>
    </message>
    <message>
        <source>For every chapter, the following information is shown: </source>
        <translation>Para cada capítulo, a seguinte informação é exibida:</translation>
    </message>
    <message>
        <source>Chapter number</source>
        <translation>Número do capítulo</translation>
    </message>
    <message>
        <source>The title of the chapter</source>
        <translation>O título do capítulo</translation>
    </message>
    <message>
        <source>Start</source>
        <translation>Inicio</translation>
    </message>
    <message>
        <source>The temporal position of the beginning of the chapter</source>
        <translation>A posição temporal do início do capítulo</translation>
    </message>
    <message>
        <source>End</source>
        <translation>Fim</translation>
    </message>
    <message>
        <source>The temporal position of the end of the chapter</source>
        <translation>A posição temporal do fim do capítulo</translation>
    </message>
    <message>
        <source>Duration</source>
        <translation>Duração</translation>
    </message>
    <message>
        <source>The duration of the chapter</source>
        <translation>A duração do capítulo</translation>
    </message>
    <message>
        <source>Additional information (video files only)</source>
        <translation>Informações adicionais (apenas arquivos de vídeo)</translation>
    </message>
    <message>
        <source> This zone contains diverse information on the video. </source>
        <translation>Esta zona contém informação diversa acerca do vídeo.</translation>
    </message>
    <message>
        <source>At least the information about the duration of the video will be shown, but a lot of other information can appear according to what is available in the file, such as: </source>
        <translation>Pelo menos, as informações sobre a duração do vídeo será mostrado, mas muitas outras informações podem aparecer de acordo com o que está disponível no arquivo, tais como:</translation>
    </message>
    <message>
        <source>creation_time</source>
        <translation>tempo de criação</translation>
    </message>
    <message>
        <source>Date and time of creation of the video</source>
        <translation>Data e hora da criação do vídeo</translation>
    </message>
    <message>
        <source>title</source>
        <translation>Título</translation>
    </message>
    <message>
        <source>Title field of the TAG ID3v2 of the video</source>
        <translation>Campo Título da TAG ID3v2 do vídeo</translation>
    </message>
    <message>
        <source>artist</source>
        <translation>artista</translation>
    </message>
    <message>
        <source>Artist field of the TAG ID3v2 of the video</source>
        <translation>Campo Artista do TAG ID3v2 do vídeo</translation>
    </message>
    <message>
        <source>album</source>
        <translation>álbum</translation>
    </message>
    <message>
        <source>Album field of the TAG ID3v2 of the video</source>
        <translation>Campo Álbum do TAG ID3v2 do vídeo</translation>
    </message>
    <message>
        <source>date</source>
        <translation>data</translation>
    </message>
    <message>
        <source>Date field of the TAG ID3v2 of the video</source>
        <translation>Campo de data da TAG ID3v2 do vídeo</translation>
    </message>
    <message>
        <source>comment</source>
        <translation>comentário</translation>
    </message>
    <message>
        <source>Comment field of the TAG ID3v2 of the video</source>
        <translation>Campo Comentário da TAG ID3v2 do vídeo</translation>
    </message>
    <message>
        <source>composer</source>
        <translation>compositor</translation>
    </message>
    <message>
        <source>The software with which the video was created</source>
        <translation>O software com o qual o vídeo foi criado</translation>
    </message>
    <message>
        <source>See also</source>
        <translation>Veja também</translation>
    </message>
    <message>
        <source>Information on EXIF data</source>
        <translation>Informações sobre os dados EXIF</translation>
    </message>
    <message>
        <source>TAG in ffmpeg</source>
        <translation>TAG em ffmpeg</translation>
    </message>
    <message>
        <source>Standard ID3v2</source>
        <translation>Norma ID3v2</translation>
    </message>
    <message>
        <source>Standard MPEG-7 on the descriptors of multimedia contents</source>
        <translation>Norma MPEG-7 sobre os descritores de conteúdos multimédia</translation>
    </message>
</context>
<context>
    <name>0112</name>
    <message>
        <source>Manage favorites</source>
        <translation>Gerir favoritos</translation>
    </message>
    <message>
        <source>The Manage favorite dialog allows you to manage existing favorites</source>
        <translation>A caixa de diálogo Gerir favoritos permite gerir favoritos existentes</translation>
    </message>
    <message>
        <source>The existing favorites are listed in the high part of the dialog. Select one of them and click on one of the following buttons:</source>
        <translation>Os favoritos existentes são listados na parte alta da caixa de diálogo Escolha um deles e clique em um dos seguintes botões:</translation>
    </message>
    <message>
        <source> Rename: Allows to rename the selected favorite.</source>
        <translation>Renomear: Permite mudar o nome do favorito selecionado.</translation>
    </message>
    <message>
        <source> Remove: Allows to remove the selected favorite.</source>
        <translation>Remover: Permite eliminar o favorito selecionado.</translation>
    </message>
</context>
<context>
    <name>0113</name>
    <message>
        <source>Manage style</source>
        <translation>Gerir estilos</translation>
    </message>
    <message>
        <source>Reset a standard style (that you modified) has its default values.</source>
        <translation>Redefinir um estilo padrão (que você modificou) para os seus valores padrão.</translation>
    </message>
    <message>
        <source>The Manage style dialog allows several things:</source>
        <translation>A caixa de diálogo Gerir estilos permite várias coisas:</translation>
    </message>
    <message>
        <source>Rename existing style,</source>
        <translation>Renomear estilo existente,</translation>
    </message>
    <message>
        <source>Remove custom style,</source>
        <translation>Remover estilo personalizado,</translation>
    </message>
    <message>
        <source>The existing styles are listed in the high part of the dialog. They appear with an icon which has various meanings:</source>
        <translation>Os estilos existentes são listados na parte alta da caixa de diálogo Eles aparecem com um ícone que tem vários significados:</translation>
    </message>
    <message>
        <source>for a standard style</source>
        <translation>para um estilo padrão</translation>
    </message>
    <message>
        <source>for a standard style you modified or for a custom style</source>
        <translation>para um estilo padrão que você modificou ou para um estilo personalizado</translation>
    </message>
    <message>
        <source>According to the type of the selected style, you can execute various actions:</source>
        <translation>De acordo com o tipo do estilo selecionado, você pode executar várias ações:</translation>
    </message>
    <message>
        <source>Standard style</source>
        <translation>Estilos padrão</translation>
    </message>
    <message>
        <source>Rename</source>
        <translation>Renomear</translation>
    </message>
    <message>
        <source>Standard style you modified</source>
        <translation>Estilo padrão que você modificou</translation>
    </message>
    <message>
        <source>Rename, Reset to default</source>
        <translation>Renomear, Redefinir para o padrão</translation>
    </message>
    <message>
        <source>Custom style</source>
        <translation>Estilo personalizado</translation>
    </message>
    <message>
        <source>Rename, Remove</source>
        <translation>Renomear, remover</translation>
    </message>
    <message>
        <source>The followed actions are available:</source>
        <translation>As ações seguintes estão disponíveis:</translation>
    </message>
    <message>
        <source>Allows to rename the selected style.</source>
        <translation>Permite que mude o nome do estilo selecionado.</translation>
    </message>
    <message>
        <source>Reset to default</source>
        <translation>Redefinir para o padrão</translation>
    </message>
    <message>
        <source>Allows to delete the customizations of a standard style and thus to return it to the default values for this style. It concerns as well the name of the style as the associated settings.</source>
        <translation>Permite excluir as personalizações de um estilo padrão e, portanto, para devolvê-lo para os valores padrão para esse modelo. Trata-se, bem como o nome do estilo, bem como as definições associadas.</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Remover</translation>
    </message>
    <message>
        <source>Allows to remove the personalized style.</source>
        <translation>Permite remover o estilo personalizado.</translation>
    </message>
</context>
<context>
    <name>0114</name>
    <message>
        <source>Music properties</source>
        <translation>Propriedades da música</translation>
    </message>
    <message>
        <source>The fade in/out effects and the increase/decrease of volume take place during the entering slide transitions. Consequently: </source>
        <translation>Os efeitos fade in / out e de aumento / diminuição do volume ocorrem durante as transições de slides de entrada. Consequentemente:</translation>
    </message>
    <message>
        <source>The Music properties dialog allows you to specify the music track.</source>
        <translation>A caixa de diálogo Propriedades da música permite que você especifique a faixa musical.</translation>
    </message>
    <message>
        <source>Settings for the music track (upper part of the dialog)</source>
        <translation>Configurações para a faixa de música (parte superior da janela)</translation>
    </message>
    <message>
        <source>Functional Principles</source>
        <translation>Princípios funcionais</translation>
    </message>
    <message>
        <source> The main functional principle for music tracks is that as long as you do not change the settings, the previous settings apply. So, if: </source>
        <translation>O princípio funcional para faixas de música é que, enquanto você não alterar as configurações, as definições anteriores serão aplicadas. Assim, se:</translation>
    </message>
    <message>
        <source>Slide 1 - Defines a play list</source>
        <translation>- Slide 1 - Define uma lista de reprodução </translation>
    </message>
    <message>
        <source>Slide 2 - Contains no settings</source>
        <translation>- Slide 2 - Não contém definições </translation>
    </message>
    <message>
        <source>Slide 3 - Contains no settings</source>
        <translation>- Slide 3 - Não contém definições </translation>
    </message>
    <message>
        <source>Slide 4 - Defines a play list</source>
        <translation>- Slide 4 - Define uma lista de reprodução </translation>
    </message>
    <message>
        <source>Slide 5 - Contains no settings</source>
        <translation>- Slide 5 - Contains no settings </translation>
    </message>
    <message>
        <source>Then:</source>
        <translation>Então:</translation>
    </message>
    <message>
        <source>Slide 2 and 3 continue to play the play list defined in slide 1</source>
        <translation>- Slide 2 e 3 continuará a reproduzir a lista de reprodução definida no slide 1 </translation>
    </message>
    <message>
        <source>Slide 5 continues to play the play list define in slide 4</source>
        <translation>- Slide 5 continuará a reproduzir a lista de reprodução definida no slide 4 </translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Normal</translation>
    </message>
    <message>
        <source>No specific settings</source>
        <translation>Não há configurações específicas</translation>
    </message>
    <message>
        <source>Change sound level</source>
        <translation>Alterar o nível de som</translation>
    </message>
    <message>
        <source>Set to pause</source>
        <translation>Definir para fazer uma pausa</translation>
    </message>
    <message>
        <source>Start a new playlist</source>
        <translation>Iniciar uma nova lista de reprodução</translation>
    </message>
    <message>
        <source>Allows you to create a new playlist. If a list defined in a previous slide, is still playing, it is stopped with a fade-out effect (progressive decline of the sound volume up to complete stop).</source>
        <translation>Permite criar uma nova lista. Se uma lista definida num slide anterior, ainda está tocando, ele é interrompido com um efeito de fade-out (diminuição progressiva do volume do som até concluir).</translation>
    </message>
    <message>
        <source>The playlist (bottom part of the dialog)</source>
        <translation>A lista de reprodução (parte inferior da janela)</translation>
    </message>
    <message>
        <source> This playlist section consists of two parts: </source>
        <translation>Esta secção da lista de reprodução é composta de duas partes:</translation>
    </message>
    <message>
        <source>The toolbar containing controls for the playlist</source>
        <translation>A barra de ferramentas contém controles da lista de reprodução</translation>
    </message>
    <message>
        <source>The list of the music files composing the playlist</source>
        <translation>A lista dos arquivos de música que compõem a lista de reprodução</translation>
    </message>
    <message>
        <source>The toolbar</source>
        <translation>A barra de ferramentas</translation>
    </message>
    <message>
        <source>Adds a file to the playlist A file selection dialog appears, allowing you to select a file.</source>
        <translation>Adiciona um arquivo à lista de reprodução. Uma caixa de diálogo de selecção de arquivos é exibida, permitindo que você selecione um arquivo.</translation>
    </message>
    <message>
        <source>Changes the order in which the music files will be played. Moves the currently selected file one step up.</source>
        <translation>Muda a ordem em que os arquivos de música será reproduzida. Move o arquivo selecionado no momento um passo para cima.</translation>
    </message>
    <message>
        <source>Changes the order in which the music files will be played. Moves the currently selected file one step down.</source>
        <translation>Muda a ordem em que os arquivos de música será reproduzida. Move o arquivo selecionado no momento um passo para baixo.</translation>
    </message>
    <message>
        <source>The playlist</source>
        <translation>A lista de reprodução</translation>
    </message>
    <message>
        <source>They last for the same time as the entering transition.</source>
        <translation>Eles duram o mesmo tempo que a transição de entrada.</translation>
    </message>
    <message>
        <source>If a slide has an entering transition set to &quot;No transition&quot;, the sound effect is not progressive but instantaneous.</source>
        <translation>Se um slide tem uma transição de entrada em &quot;Sem transição&quot;, o efeito do som não é progressiva, mas instantânea.</translation>
    </message>
    <message>
        <source>The following options are apply to the current music during the slide:</source>
        <translation>As seguintes opções são aplicadas à música actual durante o slide:</translation>
    </message>
    <message>
        <source>Specifies that the sound volume is reduced during this slide. (This option is particularly useful, for example, to reduce the sound of the music during the play of a video.)</source>
        <translation>Especifica que o volume do som é reduzida durante este slide. (Esta opção particularmente útil, por exemplo, para reduzir o som da música durante a reprodução de um vídeo.)</translation>
    </message>
    <message>
        <source>Pauses the current play list.</source>
        <translation>Pausa a lista de reprodução actual.</translation>
    </message>
    <message>
        <source>The music files are listed in the order in which they will be played, from top to bottom.</source>
        <translation>Os ficheiros de música são listados na ordem em que elas serão reproduzidos, a partir de cima para baixo.</translation>
    </message>
    <message>
        <source>The Volume column defines the &quot; Master volume &quot; for the file. This volume is independent of any reductions in the volume that you define in the upper part of the dialog.</source>
        <translation>A coluna Volume define o &quot;volume Master&quot; para o arquivo. Este volume é independente de quaisquer reduções no volume que você define na parte superior da caixa de diálogo.</translation>
    </message>
    <message>
        <source>The Credit column defines if the file should appear or not when using %STM% variable in a credit title. For more information on variables, see: &lt;a href=&quot;0013.html&quot;&gt;Dynamic variables&lt;/a&gt;</source>
        <translation>A coluna de crédito define se o arquivo deve aparecer ou não pelo uso da variável %STM%  num título de crédito. Para mais informações sobre variáveis, consulte: &lt;a href=&quot;0013.html&quot;&gt; Variáveis ​​dinâmicas &lt;/a&gt;</translation>
    </message>
    <message>
        <source>Remarks</source>
        <translation>Observações</translation>
    </message>
    <message>
        <source>Cut the currently selected file from the playlist. The &lt;a href=&quot;0124.html&quot;&gt;Cut a sound file&lt;/a&gt; dialog appears.</source>
        <translation>Corte o arquivo actualmente seleccionado da lista de reprodução. A caixa de diálogo &lt;a href=&quot;0124.html&quot;&gt; Corte dum ficheiro de som &lt;/a&gt; aparece.</translation>
    </message>
    <message>
        <source>Removes the currently selected file from the playlist.</source>
        <translation>Remove o arquivo actualmente seleccionado da lista de reprodução.</translation>
    </message>
    <message>
        <source>You can double click a music file from the playlist to edit it, the &lt;a href=&quot;0124.html&quot;&gt;Cut a sound file&lt;/a&gt; dialog appears.</source>
        <translation>Você pode clicar duas vezes num ficheiro de música da lista de reprodução para editá-lo, a caixa de diálogo &lt;a href=&quot;0124.html&quot;&gt; Corte dum ficheiro de som &lt;/a&gt; aparece.</translation>
    </message>
</context>
<context>
    <name>0115</name>
    <message>
        <source>Render video</source>
        <translation>Renderização de vídeos</translation>
    </message>
    <message>
        <source>This dialog allows you to render the project as a video file.</source>
        <translation>Esta caixa de diálogo permite que você processe o projecto como um arquivo de vídeo.</translation>
    </message>
    <message>
        <source>This dialog has different appearances depending on whether you clicked the Device type, Lossless, Advanced or Soundtrack button. </source>
        <translation>Esta caixa de diálogo tem aparências diferentes dependendo se você clicou no botão Tipo de Dispositivo, Sem Perdas, Avançado ou Trilha Sonora.</translation>
    </message>
    <message>
        <source>Description of the dialog box</source>
        <translation>Descrição da caixa de diálogo</translation>
    </message>
    <message>
        <source>In device mode</source>
        <translation>No modo dispositivo</translation>
    </message>
    <message>
        <source>Destination file</source>
        <translation>Arquivo de destino</translation>
    </message>
    <message>
        <source>Indicate here the name of the destination file. </source>
        <translation>Indique aqui o nome do arquivo de destino.</translation>
    </message>
    <message>
        <source> Click on this button to select graphically a file and a directory.</source>
        <translation>Clique neste botão para selecionar graficamente um arquivo e um diretório.</translation>
    </message>
    <message>
        <source>Device type</source>
        <translation>Tipo de dispositivo</translation>
    </message>
    <message>
        <source>Allows you to select a device type.</source>
        <translation>Permite que você selecione um tipo de dispositivo.</translation>
    </message>
    <message>
        <source>Model</source>
        <translation>Modelo</translation>
    </message>
    <message>
        <source>Allows you to select a device model.</source>
        <translation>Permite que você selecione um modelo de dispositivo.</translation>
    </message>
    <message>
        <source>Rendering</source>
        <translation>Renderização</translation>
    </message>
    <message>
        <source>The rendering can be made on the whole project or only on a part.</source>
        <translation>A renderização pode ser feita em todo o projeto ou apenas uma parte.</translation>
    </message>
    <message>
        <source>This choice is made: </source>
        <translation>Essa escolha é feita:</translation>
    </message>
    <message>
        <source>By checking the option &lt;B&gt;All slides&lt;/B&gt; to render the video of the whole project</source>
        <translation>Ao marcar a opção &lt;B&gt; Todas os slides &lt;/B&gt; para renderizar o vídeo de todo o projecto</translation>
    </message>
    <message>
        <source>Or by checking the option &lt;B&gt;From&lt;/B&gt; and then entering the numbers of the start and end slides to generate a video of only a part of the project.</source>
        <translation>Ou marcando a opção &lt;B&gt; Desde &lt;/B&gt; e, em seguida, digitar os números do início e do fim slides para gerar um vídeo de apenas uma parte do projecto.</translation>
    </message>
    <message>
        <source>Sound (include sound in the video)</source>
        <translation>Som (inclui som no vídeo)</translation>
    </message>
    <message>
        <source>If this box is checked then the sound track will be included in the video</source>
        <translation>Se esta opção estiver marcada, então a trilha sonora será incluído no vídeo</translation>
    </message>
    <message>
        <source>Language</source>
        <translation>Idioma</translation>
    </message>
    <message>
        <source>Defines the value of the Language field. </source>
        <translation>Define o valor padrão para o campo Idioma. Para Português use &lt;B&gt;por&lt;/B&gt;. </translation>
    </message>
    <message>
        <source>This value is used by players to indicate in which language is the audio track. This value is on 3 characters and follows this recommendation: </source>
        <translation>Este valor é usado por leitores para indicar em que língua é a faixa de áudio. Este valor está em 3 caracteres e segue esta recomendação:</translation>
    </message>
    <message>
        <source>ISO 639</source>
        <translation>ISO 639</translation>
    </message>
    <message>
        <source>Join thumbnail to rendered file</source>
        <translation>Juntar miniaturas ao arquivo renderizado</translation>
    </message>
    <message>
        <source>If this box is checked then a thumbnail file will be created with video. </source>
        <translation>Se esta opção estiver marcada, então um arquivo miniatura será criado com o vídeo.</translation>
    </message>
    <message>
        <source>For more information on joined files, see &lt;a href=&quot;003A.html&quot;&gt;File attachments&lt;/a&gt;</source>
        <translation>Para mais informações sobre os arquivos unidos, consulte &lt;a href=&quot;003A.html&quot;&gt; Arquivos anexos&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Join XBMC .nfo file to rendered file</source>
        <translation>Juntar ficheiros .nfo XBMC ao arquivo renderizado</translation>
    </message>
    <message>
        <source>If this box is checked then a &lt;a href=&quot;0044.html&quot;&gt;XBMC .nfo&lt;/a&gt; file will be created with video. </source>
        <translation>Se esta opção estiver marcada, então um arquivo &lt;a href=&quot;0044.html&quot;&gt;XMBC .nfo&lt;/a&gt; será criado com o vídeo.</translation>
    </message>
    <message>
        <source>In lossless mode</source>
        <translation>No modo Sem perdas</translation>
    </message>
    <message>
        <source>Image format</source>
        <translation>Formato de imagem</translation>
    </message>
    <message>
        <source>Select the image format to be used to render the video from the displayed list.</source>
        <translation>Selecione o formato de imagem a ser usado para renderizar o vídeo na lista exibida.</translation>
    </message>
    <message>
        <source>In advanced mode</source>
        <translation>No modo avançado</translation>
    </message>
    <message>
        <source>File format</source>
        <translation>Formato de arquivo</translation>
    </message>
    <message>
        <source>Select the type of file to be used to render the video from the displayed list.</source>
        <translation>Selecione o tipo de arquivo a ser usado para renderizar o vídeo na lista exibida.</translation>
    </message>
    <message>
        <source>Video Standard</source>
        <translation> Padrão Vídeo</translation>
    </message>
    <message>
        <source>Select the video standard to be used: PAL or NTSC.</source>
        <translation>Selecciona a norma de vídeo padrão para usar: PAL ou NTSC.</translation>
    </message>
    <message>
        <source>Video codec</source>
        <translation>Codec de vídeo</translation>
    </message>
    <message>
        <source>Select the video codec to be used to render the video from the displayed list.</source>
        <translation>Selecione o tipo de arquivo a ser usado para renderizar o vídeo na lista exibida.</translation>
    </message>
    <message>
        <source>Bitrate</source>
        <translation>Taxa de bits</translation>
    </message>
    <message>
        <source>Select the video compression ratio from the displayed list</source>
        <translation>Selecione a taxa de compressão de vídeo na lista exibida</translation>
    </message>
    <message>
        <source>Audio codec</source>
        <translation>Codec de áudio</translation>
    </message>
    <message>
        <source>Select the audio codec to be used to render the video from the displayed list.</source>
        <translation>Seleccione o codec de áudio para usar para a renderização fora na lista exibida.</translation>
    </message>
    <message>
        <source>Select the audio compression ratio from the displayed list</source>
        <translation>Selecione a taxa de compressão de áudio na lista exibida</translation>
    </message>
    <message>
        <source>Frequency</source>
        <translation>Frequência</translation>
    </message>
    <message>
        <source>Select the frequency to use for audio during the rendering.</source>
        <translation>Selecione a freqüência a ser usada para o áudio durante a renderização.</translation>
    </message>
    <message>
        <source>In export soundtrack mode</source>
        <translation>No modo exportação de trilha sonora</translation>
    </message>
    <message>
        <source>Select the type of file to be used to render the soundtrack from the displayed list.</source>
        <translation>Selecione o tipo de arquivo a ser usado para processar a trilha sonora da lista apresentada.</translation>
    </message>
    <message>
        <source>Render the movie</source>
        <translation>Renderizando o vídeo</translation>
    </message>
    <message>
        <source> Once you have selected the device or set the advanced parameters, one click on the OK button starts the process of rendering the video. </source>
        <translation>Depois de ter seleccionado o dispositivo ou definir os parâmetros avançados, um clique no botão OK inicia o processo de renderização do vídeo.</translation>
    </message>
    <message>
        <source>At any time during this process, one click on the &quot;Cancel&quot; button stops the process. </source>
        <translation>A qualquer momento durante este processo, você pode clicar no botão Cancelar para interrompero processo. </translation>
    </message>
    <message>
        <source> Depending on the device model or the advanced parameters which you selected, the generation can take quite a long time. </source>
        <translation>Dependendo do modelo do dispositivo ou dos parâmetros avançados que você selecionou, a geração pode levar um longo tempo.</translation>
    </message>
    <message>
        <source>Generally, for a Full-HD 1080p video: </source>
        <translation>Geralmente, para um vídeo Full-HD 1080p:</translation>
    </message>
    <message>
        <source>On a PC with 4 fast cores (Core i7 for example) : The process will take approximately 2 minutes for each minute of video to be rendered</source>
        <translation>Num PC com quatro núcleos rápidos (Core i7, por exemplo): O processo vai demorar cerca de 2 minutos para cada minuto de vídeo a ser processado</translation>
    </message>
    <message>
        <source>On a PC with 2 cores (Core 2 duo for example) : The process will take approximately 5 minutes for each minute of video to be rendered</source>
        <translation>Num PC com dois núcleos (Core 2 Duo, por exemplo): O processo vai demorar cerca de 5 minutos para cada minuto de vídeo a ser processado</translation>
    </message>
    <message>
        <source> This amounts to 2 to 5 hours for a one-hour video. </source>
        <translation>Isso equivale a 2 a 5 horas para um vídeo de uma hora.</translation>
    </message>
    <message>
        <source>This duration will be much shorter for a video in VGA resolution. That is why we recommend you to carry out all tests and focusing trials at low resolution, and to render your videos in Full-HD only for the last step. </source>
        <translation>Este período será muito mais curto para um vídeo em resolução VGA. É por isso que recomendamos que você realize todos os testes e ensaios enfocando em baixa resolução, e tornar seus vídeos em Full-HD apenas para a última etapa.</translation>
    </message>
    <message>
        <source>At the dialog bottom</source>
        <translation>Na parte inferior da caixa de diálogo</translation>
    </message>
    <message>
        <source> The properties button allows you to open the &lt;a href=&quot;0108.html&quot;&gt;Project properties dialog&lt;/a&gt;. It allows you to adjust the properties before generating the video. </source>
        <translation>O botão propriedades permite que você abra a &lt;a href=&quot;0108.html&quot;&gt; caixa de diálogo das Propriedades do projecto &lt;/a&gt;. Ela permite que você ajuste as propriedades antes de gerar o vídeo.</translation>
    </message>
    <message>
        <source>Note: the project properties are saved into the video as TAG (METADATA) which are used by a lot of indexing programs or by </source>
        <translation>Nota: as propriedades do projeto são salvos no vídeo como TAG (metadados), que são usados ​​por uma série de programas de indexação ou por </translation>
    </message>
    <message>
        <source>Media Center Systems</source>
        <translation>Centro de Sistemas Média (Media Center Systems)</translation>
    </message>
    <message>
        <source>Variable bitrate</source>
        <translation>Taxa de bits variável</translation>
    </message>
    <message>
        <source>If this box is checked, the bitrate is variable. (Note: This option is available only for h264 codec.)</source>
        <translation>Se esta opção estiver marcada, a taxa de bits é variável. (Nota: Esta opção só está disponível para codec h264).</translation>
    </message>
    <message>
        <source>Remarks:</source>
        <translation>Observações:</translation>
    </message>
    <message>
        <source> &lt;U&gt;Rendering duration:&lt;/U&gt;</source>
        <translation> &lt;U&gt;Duração da renderização:&lt;/U&gt;</translation>
    </message>
    <message>
        <source> &lt;U&gt;Variable bitrate:&lt;/U&gt;</source>
        <translation> &lt;U&gt;Taxa de bits variável:&lt;/U&gt;</translation>
    </message>
    <message>
        <source> If variable bitrate is activated, the video compression bitrate could vary from -50% to +125% </source>
        <translation>Se taxa de bits variável é activado a taxa de bits de compressão de vídeo pode variar de -50% a +125% </translation>
    </message>
    <message>
        <source>If the project contains mostly pictures, this option can significantly reduce the size of the video file (up to 80%)</source>
        <translation>Se o projeto contém principalmente fotos, esta opção pode reduzir significativamente o tamanho do arquivo de vídeo (até 80%)</translation>
    </message>
    <message>
        <source>By cons, if the project contains mostly videos this option will increase the size of the video file</source>
        <translation>Pelo contrário, se o projeto contém principalmente vídeos esta opção irá aumentar o tamanho do arquivo de vídeo</translation>
    </message>
    <message>
        <source> By default, variable bitrate is activated when duration of videos are less than half of the total duration of the projet. </source>
        <translation>Por padrão, taxa de bits variável  é activada quando a duração de vídeos são menos de metade da duração total do projecto.</translation>
    </message>
</context>
<context>
    <name>0116</name>
    <message>
        <source>Ruler properties</source>
        <translation>Propriedades das réguas</translation>
    </message>
    <message>
        <source>This dialog allows you to enable or disable rulers.</source>
        <translation>Esta caixa de diálogo permite que você active ou desactive as réguas.</translation>
    </message>
    <message>
        <source>Edge of the screen</source>
        <translation>Borda da tela</translation>
    </message>
    <message>
        <source>Corresponds to the edge of the screen.</source>
        <translation>Corresponde à borda da tela.</translation>
    </message>
    <message>
        <source>TV margins</source>
        <translation>Margens de TV</translation>
    </message>
    <message>
        <source>In ffDiaporama, the TV margins are of type &quot;Title safe area&quot; and are defined on 90% in width and 90% in height, for all the project geometries.</source>
        <translation>No ffDiaporama, as margens são de TV do tipo &quot;Título área de segurança&quot; e que são definidos em 90% em largura e 90% em altura, para todas as geometrias do projecto.</translation>
    </message>
    <message>
        <source>Centre of the screen</source>
        <translation>Centro da tela</translation>
    </message>
    <message>
        <source>Corresponds to the center of the screen.</source>
        <translation>Corresponde ao centro da tela.</translation>
    </message>
    <message>
        <source>Unselected blocks</source>
        <translation>Blocos não selecionados</translation>
    </message>
    <message>
        <source>For all the objects which are not a part of the selection, create rulers for the top, bottom, left and right edges of blocks as well as for the centers of blocks.</source>
        <translation>Para todos os objectos que não são parte da selecção, crie réguas para a margens superior, inferior, esquerda e direita de blocos, bem como para os centros dos blocos.</translation>
    </message>
    <message>
        <source>Remarks:</source>
        <translation>Observações:</translation>
    </message>
    <message>
        <source>Rulers can be activated or deactivated one by one.</source>
        <translation>As réguas podem ser activadas ou desactivadas, uma por uma.</translation>
    </message>
    <message>
        <source>When a ruler is activated, the mouse is attracted towards this ruler. This is valid as well for the movements of blocks as for the resizing (movements of the handles).</source>
        <translation>Quando uma régua é activada, o rato é atraído para esta régua. Isso é válido também para os movimentos de blocos como para o redimensionamento (movimentos das alças).</translation>
    </message>
    <message>
        <source>TV margins rullers are not available for thumbnails editing.</source>
        <translation>Réguas Margens de TV não estão disponíveis para edição de miniaturas.</translation>
    </message>
    <message>
        <source>See also</source>
        <translation>Veja também</translation>
    </message>
    <message>
        <source>Description of TV margins and overscan</source>
        <translation>Descrição das Margens de televisão e de sobreexploração</translation>
    </message>
</context>
<context>
    <name>0117</name>
    <message>
        <source>Edit thumbnail model</source>
        <translation>Editar modelo de miniaturas</translation>
    </message>
    <message>
        <source>This dialog allows you to edit custom thumbnails and custom thumbnails models.</source>
        <translation>Esta caixa de diálogo permite que você edite miniaturas personalizadas e modelos de miniaturas personalizadas.</translation>
    </message>
    <message>
        <source>It&apos;s a simplified version of the &lt;a href=&quot;0119.html&quot;&gt;Slides properties dialog&lt;/a&gt; and as it, it includes numerous zones:</source>
        <translation>É uma versão simplificada da &lt;a href=&quot;0119.html&quot;&gt;caixa de diálogo propriedades dos Slides&lt;/a&gt; e, como ele, inclui numerosas zonas:</translation>
    </message>
    <message>
        <source>On the top: The &lt;a href=&quot;#Toolbar&quot;&gt;Toolbar&lt;/a&gt; allows to launch the main thumbnail editing commands.</source>
        <translation>No topo: A &lt;a href=&quot;#Toolbar&quot;&gt; Barra de Ferramentas &lt;/a&gt; permite lançar os principais comandos de edição de miniaturas.</translation>
    </message>
    <message>
        <source>On the left: The &lt;a href=&quot;#InteractiveZone&quot;&gt;Interactive&lt;/a&gt; zone allows you to graphically modify the blocks.</source>
        <translation>À esquerda: A zona &lt;a href=&quot;#InteractiveZone&quot;&gt; Interactiva &lt;/a&gt; permite modificar graficamente os blocos.</translation>
    </message>
    <message>
        <source>On the right: The &lt;a href=&quot;#BlockTable&quot;&gt;Blocks table&lt;/a&gt; and the &lt;a href=&quot;#BlockSettings&quot;&gt;Block settings&lt;/a&gt; zones.</source>
        <translation>À direita: As zonas&lt;a href=&quot;#BlockTable&quot;&gt;Tabela de Blocos&lt;/a&gt; e &lt;a href=&quot;#BlockSettings&quot;&gt; Configurações dos blocos &lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Toolbar</source>
        <translation>Barra de ferramentas</translation>
    </message>
    <message>
        <source> The toolbar allows to launch the main thumbnail editing commands. </source>
        <translation>A barra de ferramentas permite lançar os principais comandos de edição em miniatura.</translation>
    </message>
    <message>
        <source>Add a new title block - Open a sub menu with the following options: </source>
        <translation>Adicionar um novo bloco de título - Abre um submenu com as seguintes opções:</translation>
    </message>
    <message>
        <source>Add a simple title block</source>
        <translation>Adicionar um bloco de título simples</translation>
    </message>
    <message>
        <source>Add a title clip-art block</source>
        <translation>Adicionar um bloco de título clip-art</translation>
    </message>
    <message>
        <source>Once you have selected one of the options, the &lt;a href=&quot;0120.html&quot;&gt;Edit Text dialog&lt;/a&gt; opens.</source>
        <translation>Uma vez que você tenha selecionado uma das opções a &lt;a href=&quot;0120.html&quot;&gt;caixa de diálogo Editar texto&lt;/a&gt; abre-se.</translation>
    </message>
    <message>
        <source>Add one or several new blocks of images or video. A &lt;a href=&quot;0109.html&quot;&gt;file selection dialog&lt;/a&gt; appears allowing you to select files. </source>
        <translation>Adicionar um ou vários novos blocos de imagens ou vídeo. A &lt;a href=&quot;0109.html&quot;&gt;caixa de diálogo de seleção de arquivo&lt;/a&gt; aparece permitindo que você selecione os arquivos.</translation>
    </message>
    <message>
        <source>Note: in case of multiple selection, files are added in the alphabetical order of the filenames or in the digital order of shots (according to the option selected in the &lt;a href=&quot;0101.html&quot;&gt;Application options dialog&lt;/a&gt;).</source>
        <translation>Nota: em caso de selecção múltipla, os arquivos são adicionados na ordem alfabética dos nomes ou na ordem digitais de fotografias (de acordo com a opcção seleccionada na &lt;a href=&quot;0101.html&quot;&gt; caixa de diálogo Opções da Aplicação &lt;/a&gt; ).</translation>
    </message>
    <message>
        <source>Edit blocks - Open a sub menu with the following options: </source>
        <translation>Edite Blocos - Abre um submenu com as seguintes opções:</translation>
    </message>
    <message>
        <source>Copy the current block to the ffDiaporama clipboard and remove it from the thumbnail.</source>
        <translation>Copie o bloco actual para a área de transferência ffDiaporama e remova-o da miniatura.</translation>
    </message>
    <message>
        <source>Copy the current block to the ffDiaporama clipboard.</source>
        <translation>Copie o bloco actual para a área de transferência ffDiaporama.</translation>
    </message>
    <message>
        <source>Paste block from the ffDiaporama clipboard and insert it to the end of the block table</source>
        <translation>Colar bloco da área de transferência ffDiaporama e inseri-lo ao final da tabela do bloco</translation>
    </message>
    <message>
        <source>Remove the current block</source>
        <translation>Remover o bloco actual</translation>
    </message>
    <message>
        <source>Open the &lt;a href=&quot;0120.html&quot;&gt;Edit text block dialog&lt;/a&gt;.</source>
        <translation>Abra a &lt;a href=&quot;0120.html&quot;&gt; caixa de diálogo Editar bloco de texto &lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Open the &lt;a href=&quot;0110.html&quot;&gt;Image framing and correction dialog&lt;/a&gt;. This button is active only for objects containing images or videos.</source>
        <translation>Abrir a &lt;a href=&quot;0110.html&quot;&gt; caixa de diálogo enquadramento e correção  de imagem &lt;/a&gt;. Este botão fica ativo somente para objetos que contenham imagens ou vídeos.</translation>
    </message>
    <message>
        <source>Arrange blocks - Open a sub menu with the following options: </source>
        <translation>Organizar Blocos - Abre um submenu com as seguintes opções: </translation>
    </message>
    <message>
        <source>Align to top</source>
        <translation>Alinhar ao topo</translation>
    </message>
    <message>
        <source>Align to midle</source>
        <translation>Alinhar ao meio</translation>
    </message>
    <message>
        <source>Align to bottom</source>
        <translation>Alinhar à parte inferior</translation>
    </message>
    <message>
        <source>Align to left</source>
        <translation>Alinhar à esquerda</translation>
    </message>
    <message>
        <source>Align to center</source>
        <translation>Alinhar ao centro</translation>
    </message>
    <message>
        <source>Align to right</source>
        <translation>Alinhar à direita</translation>
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
        <translation>Alterar a ordem dos blocos movendo o bloco activo para cima (em direção ao plano de fundo)</translation>
    </message>
    <message>
        <source>Change the order of blocks by moving the active block downward (towards the foreground)</source>
        <translation>Alterar a ordem dos blocos movendo o bloco activo para baixo (em direção ao plano de fundo)</translation>
    </message>
    <message>
        <source>Display information on active block. (Remark: This function is available only for &quot;image&quot; or &quot;video&quot; blocks.)</source>
        <translation>Exibir informações sobre o bloco activo. (Nota:. Esta função está disponível apenas para blocos &quot;imagem&quot; ou &quot;vídeo&quot;)</translation>
    </message>
    <message>
        <source>Allows you to open the &lt;a href=&quot;0116.html&quot;&gt;Ruler properties dialog&lt;/a&gt;</source>
        <translation>Permite que você abra a &lt;a href=&quot;0116.html&quot;&gt; caixa de diálogo de propriedades das Réguas&lt;/a&gt;</translation>
    </message>
    <message>
        <source> It is also possible to open contextual menus by: </source>
        <translation>Também é possível abrir menus contextuais através de: </translation>
    </message>
    <message>
        <source>Right clicking on zones.</source>
        <translation>Botão direito do rato em zonas.</translation>
    </message>
    <message>
        <source>Right click on blocks table or on interactive zone when no block was selected.</source>
        <translation>Botão direito do rato na tabela de blocos ou em zona interactiva quando nenhum bloco foi selecionado.</translation>
    </message>
    <message>
        <source>Right click on one of the blocks of a multiple selection, on blocks table or on interactive zone.</source>
        <translation>Botão direito do rato num dos blocos de uma selecção múltipla, na tabela de blocos ou em zona interatciva.</translation>
    </message>
    <message>
        <source>Each of these contextual menus propose commands which depend on what you have clicked.</source>
        <translation>Cada um destes menus contextuais propõe comandos que dependem do que você ter clicado.</translation>
    </message>
    <message>
        <source>Interactive zone</source>
        <translation>Área interactiva</translation>
    </message>
    <message>
        <source> The interactive zone allows you to move and interactively re-size blocks. </source>
        <translation>A zona interactiva permite mover e interactivamente redimensionar blocos.</translation>
    </message>
    <message>
        <source>Selected blocks are shown with a frame. (It allows to differentiate them from other graphic elements of the thumbnail).</source>
        <translation>Blocos selecionados são mostrados com um quadro. (Ele permite diferenciá-los de outros elementos gráficos da miniatura).</translation>
    </message>
    <message>
        <source>Control handles (small square) are shown on sides and on corners of the selection frame.</source>
        <translation>Alças de controlo (quadrado pequeno) são mostradas nos lados e nos cantos da armação de selecção.</translation>
    </message>
    <message>
        <source>Rulers are displayed to facilitate the work with the mouse. See &lt;a href=&quot;0116.html&quot;&gt;Rulers settings&lt;/a&gt;</source>
        <translation>As réguas são exibidas para facilitar o trabalho com o rato. Veja &lt;a href=&quot;0116.html&quot;&gt; configurações das Réguas &lt;/a&gt;</translation>
    </message>
    <message>
        <source>Using the mouse:</source>
        <translation>Usando o rato:</translation>
    </message>
    <message>
        <source>To select a block: click the block</source>
        <translation>Para seleccionar um bloco: clique no bloco</translation>
    </message>
    <message>
        <source>To select multiple blocks: Select a first block by clicking on it and then, by clicking on the other blocks to be selected with pressing either the SHIFT or the CTRL key.</source>
        <translation>Para selecionar vários blocos: Selecione um primeiro bloco clicando nele e, em seguida, clicando nos outros blocos a serem selecionados e pressionando também a tecla SHIFT ou a tecla CTRL.</translation>
    </message>
    <message>
        <source>To select a block under another block : Click the block to be selected by pushing both SHIFT and CTRL keys.</source>
        <translation>Para selecionar um bloco sob um outro bloco: Clique no bloco a ser selecionado pressionando ambas teclas SHIFT e CTRL.</translation>
    </message>
    <message>
        <source>To unselect a block in a multiple selection: Click the block with pressing either the SHIFT or the CTRL key.</source>
        <translation>Para cancelar a seleção de um bloco numa selecção múltipla: Clique no bloco com pressionando também a tecla SHIFT ou a tecla CTRL.</translation>
    </message>
    <message>
        <source>To modify the size of the blocks of the selection: Click one of the handles of the selection and, while keeping the button of the mouse pressed, move the mouse.</source>
        <translation>Para modificar o tamanho dos blocos da selecção: Clique em uma das alças de seleção e, mantendo o botão do mouse pressionado, mova o rato.</translation>
    </message>
    <message>
        <source>To move the blocks of the selection: Click one of the blocks of the selection and, while keeping the button of the mouse pressed, move the mouse.</source>
        <translation>Para mover os blocos da seleção: Clique em um dos blocos da seleção e, mantendo o botão do mouse pressionado, mova o rato.</translation>
    </message>
    <message>
        <source>Using the keyboard:</source>
        <translation>Usando o teclado:</translation>
    </message>
    <message>
        <source>To move the blocks of the selection, use the arrow keys.</source>
        <translation>Para mover os blocos da selecção, use as teclas de seta.</translation>
    </message>
    <message>
        <source>To change the size of the blocks of the selection, use SHIFT+arrows to move the upper left corner handle or CTRL+arrows to move the lower right corner handle.</source>
        <translation>Para alterar o tamanho dos blocos da selecção, use Shift + setas para mover a alça do canto superior esquerdo ou CTRL + setas para mover a alça do canto inferior direito.</translation>
    </message>
    <message>
        <source>Remarks:</source>
        <translation>Observações:</translation>
    </message>
    <message>
        <source>A double click on a block opens the block editor associated with the block type (for a text block this will be the text editor, for an image block the reframing dialog, etc.)</source>
        <translation>Um duplo clique em um bloco abre o editor de bloco associado ao tipo de bloco (para um bloco de texto este será o editor de texto, por um bloco de imagem a caixa de diálogo reenquadramento, etc)</translation>
    </message>
    <message>
        <source>A right click on a block when the selection includes only a single block opens a contextual menu proposing the editing commands for a block.</source>
        <translation>Um clique direito sobre um bloco quando a selecção inclui apenas um único bloco abre um menu contextual propondo os comandos de edição para um bloco.</translation>
    </message>
    <message>
        <source>A right click on a block when the selection includes multiple blocks opens a contextual menu proposing the editing commands for multiple blocks.</source>
        <translation>Um clique direito num bloco quando a selecção inclui vários blocos abre um menu contextual propondo os comandos de edição para vários blocos.</translation>
    </message>
    <message>
        <source>Blocks table</source>
        <translation>Tabela de blocos</translation>
    </message>
    <message>
        <source>The blocks table lists, from top to bottom, the present blocks in the thumbnail.</source>
        <translation>Tabela de blocos lista, de cima para baixo, os blocos presentes na miniatura.</translation>
    </message>
    <message>
        <source>The order of the blocks is important! The first block (at the top of the list) is covered by the second block which is even covered by the following block and so on.</source>
        <translation>A ordem dos blocos é importante! O primeiro bloco (no topo da lista) é coberto pelo segundo bloco que é ainda coberto por bloco seguinte e assim por diante.</translation>
    </message>
    <message>
        <source>Blocks are shown on 3 columns:</source>
        <translation>Os blocos são mostrados em três colunas:</translation>
    </message>
    <message>
        <source>The first column contains or: </source>
        <translation>A primeira coluna contém ou:</translation>
    </message>
    <message>
        <source> If the block is a title.</source>
        <translation>Se o bloco é um título.</translation>
    </message>
    <message>
        <source>A thumbnail if the block is an image or a video.</source>
        <translation>Uma miniatura se o bloco é uma imagem ou um vídeo.</translation>
    </message>
    <message>
        <source> If the image or the video have a transformation filter.</source>
        <translation>Se a imagem ou o vídeo tem um filtro de transformação.</translation>
    </message>
    <message>
        <source>The second column contains icons giving the state of the blocks</source>
        <translation>A segunda coluna contém os ícones que dão o estado dos blocos</translation>
    </message>
    <message>
        <source>The third column indicates: </source>
        <translation>A terceira coluna indica:</translation>
    </message>
    <message>
        <source>If the block is a title: the text of the block</source>
        <translation>Se o bloco é um título: o texto do bloco</translation>
    </message>
    <message>
        <source>If the block is an image: </source>
        <translation>Se o bloco é uma imagem: </translation>
    </message>
    <message>
        <source>The filename.</source>
        <translation>Nome do ficheiro.</translation>
    </message>
    <message>
        <source>The width x the height of the image in pixel (the format of the image - the geometry of the image).</source>
        <translation>A largura x a altura da imagem em pixéis (o formato da imagem - a geometria da imagem).</translation>
    </message>
    <message>
        <source>A summary of EXIF information on the image.</source>
        <translation>Um resumo das informações EXIF ​​da imagem.</translation>
    </message>
    <message>
        <source>If the block is a video: </source>
        <translation>Se o bloco é um vídeo:</translation>
    </message>
    <message>
        <source>The duration of the video.</source>
        <translation>A duração do vídeo.</translation>
    </message>
    <message>
        <source>Double clicking on a block opens the block editor associated with the block type (for a text block this will be the text editor, for an image block the reframing dialog, etc.)</source>
        <translation>Um duplo clique em um bloco abre o editor de bloco associado ao tipo de bloco (para um bloco de texto este será o editor de texto, por um bloco de imagem a caixa de diálogo reenquadramento, etc)</translation>
    </message>
    <message>
        <source>Right clicking on a block when the selection includes only a single block opens a contextual menu proposing the editing commands for a block.</source>
        <translation>Um clique direito sobre um bloco quando a selecção inclui apenas um único bloco abre um menu contextual propondo os comandos de edição para um bloco.</translation>
    </message>
    <message>
        <source>Right clicking on a block when the selection includes multiple blocks opens a contextual menu proposing the editing commands for multiple blocks.</source>
        <translation>Um clique direito num bloco quando a selecção inclui vários blocos abre um menu contextual propondo os comandos de edição para vários blocos.</translation>
    </message>
    <message>
        <source>Blocks with locked properties are shown on a grey bottom.</source>
        <translation>Blocos com propriedades bloqueadas são mostrados sobre um fundo cinza.</translation>
    </message>
    <message>
        <source>Selected blocks are shown on a red bottom if the focus is on the blocks table or on a blue bottom if the focus is on another element.</source>
        <translation>Blocos selecionados são mostrados em um fundo vermelho, se o foco está na tabela blocos ou em um fundo azul, se o foco é outro elemento.</translation>
    </message>
    <message>
        <source>To change the blocks order, use Drag &amp; Drop or &lt;B&gt;Up&lt;/B&gt; and &lt;B&gt;Down&lt;/B&gt; functions of the contextual menu.</source>
        <translation>Para alterar a ordem blocos, use Drag &amp; Drop (arrastar e soltar) ou &lt;B&gt;para Cima&lt;/B&gt; e &lt;B&gt; para Baixo&lt;/B&gt;funções do menu contextual.</translation>
    </message>
    <message>
        <source>It is possible to add files directly in the blocks table by using Drag and Drop with the file explorer.</source>
        <translation>É possível adicionar arquivos directamente na tabela de blocos através de arrastar e soltar com o explorador de arquivos.</translation>
    </message>
    <message>
        <source>All blocks, whether title, image or video, possess a text element.</source>
        <translation>Todos os blocos sejam, título, imagem ou vídeo, possuem um elemento de texto.</translation>
    </message>
    <message>
        <source>During the insertion of a new block (Add title, Add file or Paste), the block is inserted: </source>
        <translation>Durante a inserção de um novo bloco (Adicionar título, Adicionar arquivo ou pasta), é inserido o bloco:</translation>
    </message>
    <message>
        <source>Always in the last position in the list of blocks (in the foreground)</source>
        <translation>Sempre na última posição na lista de blocos (no primeiro plano)</translation>
    </message>
    <message>
        <source>Block settings zone</source>
        <translation>Bloquear zona de configurações</translation>
    </message>
    <message>
        <source>Coordinates</source>
        <translation>Coordenadas</translation>
    </message>
    <message>
        <source>&lt;B&gt;For image or video blocks: &lt;/B&gt;Allows you to select a reframing style for the image. It has the same effect as selecting a style in the dialog: &lt;a href=&quot;0110.html&quot;&gt;Correct, reframe or cut image or video&lt;/a&gt;.</source>
        <translation>&lt;B&gt; Para blocos de imagem ou vídeo: &lt;/B&gt; Permite que você selecione um estilo de reenquadramento da imagem. Ele tem o mesmo efeito que selecionar um estilo na caixa de diálogo: &lt;a href=&quot;0110.html&quot;&gt;Corrigir, reenquadrar, cortar imagem ou vídeo&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>&lt;B&gt;For text blocks: &lt;/B&gt;Allows you to select the geometrical constraints to be applied to the block. Three type of constraint are available:</source>
        <translation>&lt;B&gt; Para blocos de texto: &lt;/B&gt; Permite que você selecione as restrições geométricas a serem aplicadas ao bloco. Três tipo de restrição estão disponíveis:</translation>
    </message>
    <message>
        <source>No constraint is applied to the selection rectangle.</source>
        <translation>Nenhuma restrição é aplicada ao retângulo de seleção.</translation>
    </message>
    <message>
        <source>Lock selection rectangle to the actual geometry. It has no meaning until you have defined a shape in &quot;no constraint&quot; mode.</source>
        <translation>Bloquear rectângulo de selecção para a geometria real. Não tem nenhum significado até que você tenha definido uma forma no modo &quot;nenhum constrangimento&quot;.</translation>
    </message>
    <message>
        <source>Lock selection rectangle to the same geometry as the project, such that, if you place the image in full screen, the reframed part will correspond to the whole screen.</source>
        <translation>Bloquear rectângulo de selecção para a mesma geometria que o projecto, de modo que, se você colocar a imagem em tela cheia, a parte reenquadrada corresponderá a toda a tela.</translation>
    </message>
    <message>
        <source>Allows you to select a pre-defined block size</source>
        <translation>Permite selecionar um tamanho de bloco pré-definido</translation>
    </message>
    <message>
        <source>Represents the horizontal offset of the block from the left. This position is defined as a percentage (%) of the total width of the image or in pixels (for a 1080p screen) according to the unit defined in the configuration dialog.</source>
        <translation>Representa o deslocamento horizontal do. bloco a partir da esquerda Esta posição é definida como uma percentagem (%) da largura total da imagem em pixeis (para um ecrã 1080p) de acordo com a unidade definida na janela de configuração.</translation>
    </message>
    <message>
        <source>Represents the vertical offset of the block from the top. This position is defined as a percentage (%) of the total height of the image or in pixels (for a 1080p screen) according to the unit defined in the configuration dialog.</source>
        <translation>Representa o deslocamento vertical do bloco a partir do topo. Esta posição é definida como uma percentagem (%) da altura total da imagem em pixeis (para um ecrã 1080p) de acordo com a unidade definida na janela de configuração.</translation>
    </message>
    <message>
        <source>Represents the width of the block. This value is defined as a percentage (%) of the total width of the image or in pixels (for a 1080p screen) according to the unit defined in the configuration dialog box.</source>
        <translation>Representa a largura do bloco. Este valor é definido como uma percentagem (%) da largura total da imagem em pixeis (para um ecrã 1080p) de acordo com a unidade definida na caixa de diálogo de configuração.</translation>
    </message>
    <message>
        <source>Represents the height of the block. This value is defined as a percentage (%) of the total height of the image or in pixels (for a 1080p screen) according to the unit defined in the configuration dialog.</source>
        <translation>Representa a altura do bloco. Este valor é definido como uma percentagem (%) da altura total da imagem em pixeis (para um ecrã 1080p) de acordo com a unidade definida na janela de configuração.</translation>
    </message>
    <message>
        <source>Rotation around the Z axis in degrees.</source>
        <translation>A rotação em torno do eixo Z, em graus.</translation>
    </message>
    <message>
        <source>Rotation around the Y axis in degrees.</source>
        <translation>A rotação em torno do eixo Y, em graus.</translation>
    </message>
    <message>
        <source>Rotation around the X axis in degrees.</source>
        <translation>A rotação em torno do eixo X, em graus.</translation>
    </message>
    <message>
        <source>Block shape</source>
        <translation>Forma do Bloco</translation>
    </message>
    <message>
        <source>This settings group deals with style management. For more information on style management, see : &lt;a href=&quot;0016.html&quot;&gt;Using style management&lt;/a&gt;</source>
        <translation>Este grupo configurações lida com estilo de gestão. Para mais informações sobre o estilo de gestão, veja: &lt;a href=&quot;0016.html&quot;&gt; Usando a gestão de estilo &lt;/a&gt;</translation>
    </message>
    <message>
        <source>Shape</source>
        <translation>Forma</translation>
    </message>
    <message>
        <source>Allows you to select a shape for the block. The selected shape will be used as:</source>
        <translation>Permite que você selecione uma forma para o bloco. A forma seleccionada será utilizado como:</translation>
    </message>
    <message>
        <source>a fusion mask for the images and the videos.</source>
        <translation>uma máscara de fusão para as imagens e os vídeos.</translation>
    </message>
    <message>
        <source>A cutting zone for texts</source>
        <translation>A zona de corte para textos</translation>
    </message>
    <message>
        <source>Opacity</source>
        <translation>Opacidade</translation>
    </message>
    <message>
        <source>Defines the opacity of the block. This value also applies to the text of the block.</source>
        <translation>Define a opacidade do bloco. Este valor também se aplica ao texto do bloco.</translation>
    </message>
    <message>
        <source>Border</source>
        <translation>Borda</translation>
    </message>
    <message>
        <source>Thickness of the border</source>
        <translation>A espessura da borda</translation>
    </message>
    <message>
        <source>Defines the thickness of the border (This value is defined as 1/1080 of the height of the screen. A value of 10 corresponds to 10 points on a 1920x1080 FullHD screen, but only to 6 points on a 1280x720 screen).</source>
        <translation>Define a espessura da borda (Este valor é definido como 1/1080 da altura do ecrã. Um valor 10 corresponde a 10 pontos no ecrã de um FullHD 1920x1080, mas apenas a 6 pontos sobre uma tela de 1280x720).</translation>
    </message>
    <message>
        <source>Border color</source>
        <translation>Cor da borda</translation>
    </message>
    <message>
        <source>Defines the color of the line to be used to draw the border</source>
        <translation>Define a cor da linha a ser utilizado para desenhar a borda</translation>
    </message>
    <message>
        <source>Line type of border</source>
        <translation>Tipo de linha da borda</translation>
    </message>
    <message>
        <source>Defines the type of line (solid, dotted line, etc.)</source>
        <translation>Define o tipo de linha ( linha pontilhada, sólida, etc)</translation>
    </message>
    <message>
        <source>Shadow</source>
        <translation>Sombra</translation>
    </message>
    <message>
        <source>Shadow position</source>
        <translation>Posição da Sombra</translation>
    </message>
    <message>
        <source>Defines in which corner the shadow will be positioned (Note: the position of the shadow is independent of rotation of the block: the right lower corner is always the right lower corner, whatever rotation is applied).</source>
        <translation>Define em que canto a sombra será posicionada (Nota: a posição da sombra é independente da rotação do bloco: o canto inferior direito é sempre o canto inferior direito, seja qual for a rotação é aplicada).</translation>
    </message>
    <message>
        <source>Distance of the shadow</source>
        <translation>Distância da sombra</translation>
    </message>
    <message>
        <source>Defines the distance between the block and its shadow</source>
        <translation>Define a distância entre o bloco e sua sombra</translation>
    </message>
    <message>
        <source>Color</source>
        <translation>Cor</translation>
    </message>
    <message>
        <source>Sets the color used to draw the shadow</source>
        <translation>Define a cor usada para desenhar a sombra</translation>
    </message>
    <message>
        <source>See also</source>
        <translation>Veja também</translation>
    </message>
    <message>
        <source>Description of EXIF - Exchangeable image file format</source>
        <translation>Descrição do EXIF - Exchangeable Image File Format</translation>
    </message>
</context>
<context>
    <name>0118</name>
    <message>
        <source>Set first shot duration for a set of slides</source>
        <translation>Define a duração do primeiro disparo para um conjunto de slides</translation>
    </message>
    <message>
        <source>First shot duration</source>
        <translation>Duração do primeiro disparo</translation>
    </message>
    <message>
        <source>Define the duration of the first shot.</source>
        <translation>Define a duração do primeiro disparo.</translation>
    </message>
    <message>
        <source>When you click the OK button, the new duration is applied to all the slides that were selected. </source>
        <translation>Quando você clica no botão OK, a nova duração é aplicada a todas os slides que foram selecionados.</translation>
    </message>
    <message>
        <source>This new duration affects only the first shot of each slide</source>
        <translation>Esta nova duração afecta apenas o primeiro tiro de cada slide</translation>
    </message>
    <message>
        <source>This new duration is applied only to standard slides. The predefined title slides are not impacted.</source>
        <translation>Esta nova duração é aplicado apenas aos slides padrão. Os slides de título predefinidos não são afectados.</translation>
    </message>
    <message>
        <source>This dialog allows you to define the duration of the fist shot of a set of slides:</source>
        <translation>Esta caixa de diálogo permite que você defina a duração do primeiro disparo de um conjunto de slides:</translation>
    </message>
</context>
<context>
    <name>0119</name>
    <message>
        <source>Slide properties</source>
        <translation>Propriedades dos slides</translation>
    </message>
    <message>
        <source>Remarks: </source>
        <translation>Observações:</translation>
    </message>
    <message>
        <source>This dialog allows you to define settings for the slides. It includes numerous zones:</source>
        <translation>Esta caixa de diálogo permite que você defina configurações para os slides. Ela inclui numerosas zonas:</translation>
    </message>
    <message>
        <source>On the top: The &lt;a href=&quot;#Toolbar&quot;&gt;Toolbar&lt;/a&gt; allows to launch the main slide editing commands, and the &lt;a href=&quot;#ShotSettings&quot;&gt;Shot settings&lt;/a&gt; zone.</source>
        <translation>No topo: A &lt;a href=&quot;#Toolbar&quot;&gt; Barra de Ferramentas&lt;/a&gt; permite lançar os principais comandos de edição de slides e a zona &lt;a href=&quot;#ShotSettings&quot;&gt; Definições de captura&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>On the left: The &lt;a href=&quot;#SlideSettings&quot;&gt;Slide settings zone&lt;/a&gt;, the &lt;a href=&quot;#ShotsTable&quot;&gt;Shots table&lt;/a&gt; and the &lt;a href=&quot;#InteractiveZone&quot;&gt;Interactive&lt;/a&gt; zones.</source>
        <translation>À esquerda: A &lt;a href=&quot;#SlideSettings&quot;&gt; Zona de configurações slides &lt;/a&gt;, a &lt;a href=&quot;#ShotsTable&quot;&gt; Tabela de disparos&lt;/a&gt; e  a &lt;a href=&quot;#InteractiveZone&quot;&gt;Zona interactiva&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>On the right: The &lt;a href=&quot;#BlockTable&quot;&gt;Blocks table&lt;/a&gt; and the &lt;a href=&quot;#BlockSettings&quot;&gt;Block settings&lt;/a&gt; zones.</source>
        <translation>À direita: As zonas &lt;a href=&quot;#BlockTable&quot;&gt; Tabela de Blocos &lt;/a&gt; e &lt;a href=&quot;#BlockSettings&quot;&gt; Configurações do bloco &lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Toolbar</source>
        <translation>Barra de ferramentas</translation>
    </message>
    <message>
        <source> The toolbar allows to launch the main slide editing commands. </source>
        <translation>A barra de ferramentas permite lançar os principais comandos de edição de slides.</translation>
    </message>
    <message>
        <source>Open the &lt;a href=&quot;0105.html&quot;&gt;Chapter properties dialog&lt;/a&gt;</source>
        <translation>Abra a &lt;a href=&quot;0105.html&quot;&gt;caixa de diálogo propriedades do Capítulo&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Append a shot to the end of the shot table</source>
        <translation>Anexar um disparo para o fim da tabela de disparo</translation>
    </message>
    <message>
        <source>Remove current selected shot</source>
        <translation>Remover disparo actualmente selecionado</translation>
    </message>
    <message>
        <source>Add a new title block - Open a sub menu with the following options: </source>
        <translation>Adicionar um novo bloco de título - Abre um submenu com as seguintes opções:</translation>
    </message>
    <message>
        <source>Add a simple title block</source>
        <translation>Adicionar um bloco de título simples</translation>
    </message>
    <message>
        <source>Add a title clip-art block</source>
        <translation>Adicionar um bloco de título clip-art</translation>
    </message>
    <message>
        <source>Once you have selected one of the options, the &lt;a href=&quot;0120.html&quot;&gt;Edit Text dialog&lt;/a&gt; opens.</source>
        <translation>Uma vez que você tenha selecionado uma das opções a &lt;a href=&quot;0120.html&quot;&gt;caixa de diálogo Editar texto&lt;/a&gt; abre-se.</translation>
    </message>
    <message>
        <source>Add one or several new blocks of images or video. A &lt;a href=&quot;0109.html&quot;&gt;file selection dialog&lt;/a&gt; appears allowing you to select files. </source>
        <translation>Adicionar um ou vários novos blocos de imagens ou vídeo. A &lt;a href=&quot;0109.html&quot;&gt;caixa de diálogo de seleção de arquivo&lt;/a&gt; aparece permitindo que você selecione os arquivos.</translation>
    </message>
    <message>
        <source>Note: in case of multiple selection, files are added in the alphabetical order of the filenames or in the digital order of shots (according to the option selected in the &lt;a href=&quot;0101.html&quot;&gt;Application options dialog&lt;/a&gt;).</source>
        <translation>Nota: em caso de selecção múltipla, os arquivos são adicionados na ordem alfabética dos nomes ou na ordem digitais de fotografias (de acordo com a opcção seleccionada na &lt;a href=&quot;0101.html&quot;&gt; caixa de diálogo Opções da Aplicação &lt;/a&gt; ).</translation>
    </message>
    <message>
        <source>Edit blocks - Open a sub menu with the following options: </source>
        <translation>Edite Blocos - Abre um submenu com as seguintes opções:</translation>
    </message>
    <message>
        <source>Change the order of the shots by moving the current selected shot a step to the left</source>
        <translation>Alterar a ordem dos disparos movendo o disparo actualmente selecionado um passo para a esquerda</translation>
    </message>
    <message>
        <source>Change the order of the shots by moving the current selected shot a step to the right</source>
        <translation>Alterar a ordem dos disparos movendo o disparo actualmente selecionado um passo para a direita</translation>
    </message>
    <message>
        <source>Copy the current block to the ffDiaporama clipboard and remove it from the slide. The copy is made with the block parameters defined for the current selected shot.</source>
        <translation>Copiar o bloco atual para a área de transferência do ffDiaporama e removê-lo do slide. A cópia é feita com os parâmetros dos blocos definidos para o actual disparo selecionado.</translation>
    </message>
    <message>
        <source>Copy the current block to the ffDiaporama clipboard. The copy is made with the block parameters defined for the current selected shot.</source>
        <translation>Copiar o bloco actual para a área de transferência do ffDiaporama. A cópia é feita com os parâmetros dos blocos definidos para o actual disparo selecionado.</translation>
    </message>
    <message>
        <source>Remove the current block</source>
        <translation>Remover o bloco actual</translation>
    </message>
    <message>
        <source>Make the active block visible or hidden. Note: Hidden video blocks are automatically paused</source>
        <translation>Faça o bloco activo visível ou oculto. Nota: os blocos vídeo ocultos são automaticamente pausados</translation>
    </message>
    <message>
        <source>Play the sound, during this shot, of the selected video block. (This button is active only for videos.)</source>
        <translation>Reproduzir o som durante este disparo, do bloco de vídeo selecionado. (Este botão fica activo somente para vídeos.)</translation>
    </message>
    <message>
        <source>Open the &lt;a href=&quot;0120.html&quot;&gt;Edit text block dialog&lt;/a&gt;.</source>
        <translation>Abre a &lt;a href=&quot;0120.html&quot;&gt; caixa de diálogo Editar bloco de texto &lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Open the &lt;a href=&quot;0110.html&quot;&gt;Image framing and correction dialog&lt;/a&gt;. This button is active only for objects containing images or videos.</source>
        <translation>Abrir a &lt;a href=&quot;0110.html&quot;&gt; caixa de diálogo enquadramento e correção  de imagem &lt;/a&gt;. Este botão fica ativo somente para objetos que contenham imagens ou vídeos.</translation>
    </message>
    <message>
        <source>Arrange blocks - Open a sub menu with the following options: </source>
        <translation>Organizar blocos - Abre um submenu com as seguintes opções:</translation>
    </message>
    <message>
        <source>Align to top</source>
        <translation>Alinhar ao topo</translation>
    </message>
    <message>
        <source>Align to midle</source>
        <translation>Alinhar ao meio</translation>
    </message>
    <message>
        <source>Align to bottom</source>
        <translation>Alinhar à parte inferior</translation>
    </message>
    <message>
        <source>Align to left</source>
        <translation>Alinhar à esquerda</translation>
    </message>
    <message>
        <source>Align to center</source>
        <translation>Alinhar ao centro</translation>
    </message>
    <message>
        <source>Align to right</source>
        <translation>Alinhar à direita</translation>
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
        <translation>Alterar a ordem dos blocos movendo o bloco activo para cima (em direção ao plano de fundo)</translation>
    </message>
    <message>
        <source>Change the order of blocks by moving the active block downward (towards the foreground)</source>
        <translation>Alterar a ordem dos blocos movendo o bloco activo para baixo (em direção ao plano de fundo)</translation>
    </message>
    <message>
        <source>Display information on active block. (Remark: This function is available only for &quot;image&quot; or &quot;video&quot; blocks.)</source>
        <translation>Exibir informações sobre o bloco activo. (Nota:. Esta função está disponível apenas para blocos &quot;imagem&quot; ou &quot;vídeo&quot;)</translation>
    </message>
    <message>
        <source>Save as model - Allows you to save current slide as a new Predefined custom title. </source>
        <translation>Salvar como modelo - Permite salvar slide actual como um novo Título personalizado predefinido.</translation>
    </message>
    <message>
        <source>For more information on predefined title slide, see: &lt;a href=&quot;0012.html&quot;&gt;Predefined title slide&lt;/a&gt;</source>
        <translation>Para mais informações sobre o slide de título predefinido, consulte: &lt;a href=&quot;0012.html&quot;&gt; título do slide predefinido &lt;/a&gt;</translation>
    </message>
    <message>
        <source> At the bottom of the box, the &quot;Rullers&quot; button allows you to open the &lt;a href=&quot;0116.html&quot;&gt;Ruler properties dialog&lt;/a&gt; </source>
        <translation>Na parte inferior da caixa, o botão &quot;Réguas&quot; permite que você abra a caixa de diálogo &lt;a href=&quot;0116.html&quot;&gt; propriedades das Réguas &lt;/a&gt; </translation>
    </message>
    <message>
        <source> It is also possible to open contextual menus by: </source>
        <translation>Também é possível abrir menus contextuais através de: </translation>
    </message>
    <message>
        <source>Right clicking on zones.</source>
        <translation>Botão direito do rato em zonas.</translation>
    </message>
    <message>
        <source>Right click on shots table.</source>
        <translation>Botão direito do rato na Tabela de tiros.</translation>
    </message>
    <message>
        <source>Right click on blocks table or on interactive zone when no block was selected.</source>
        <translation>Botão direito do rato na tabela de blocos ou em zona interactiva quando nenhum bloco foi selecionado.</translation>
    </message>
    <message>
        <source>Right click on one of the blocks of a multiple selection, on blocks table or on interactive zone.</source>
        <translation>Botão direito do rato num dos blocos de uma selecção múltipla, na tabela de blocos ou em zona interatciva.</translation>
    </message>
    <message>
        <source>Each of these contextual menus propose commands which depend on what you have clicked.</source>
        <translation>Cada um destes menus contextuais propõe comandos que dependem do que você ter clicado.</translation>
    </message>
    <message>
        <source>Slide settings zone</source>
        <translation>Zona de configurações de slides</translation>
    </message>
    <message>
        <source>Name of the slide</source>
        <translation>Nome do slide</translation>
    </message>
    <message>
        <source>Indicate here a name for the slide. It is this name which will appear on the thumbnail in the main window timeline.</source>
        <translation>Indique um nome para o slide. É este o nome que aparecerá na miniatura da janela  principal da linha de tempo.</translation>
    </message>
    <message>
        <source>Total slide duration</source>
        <translation>Duração do slide total</translation>
    </message>
    <message>
        <source>The total slide duration is displayed here. This duration takes into account possible adjustments for minimal duration of the shot as described above.</source>
        <translation>A duração total de slides é exibida aqui. Este período leva em conta possíveis ajustes de duração mínima do disparo como descrito acima.</translation>
    </message>
    <message>
        <source>Shots table</source>
        <translation>Tabela de disparos</translation>
    </message>
    <message>
        <source> The shots table shows the shots as thumbnails, in the order in which they will be played (from left to right). </source>
        <translation>A tabela de disparos mostra os disparos como miniaturas, na ordem em que eles serão executados (da esquerda para a direita).</translation>
    </message>
    <message>
        <source>For each shot, the thumbnail shows: </source>
        <translation>Para cada disparo, a miniatura mostra:</translation>
    </message>
    <message>
        <source>The shot duration (At the top of the thumbnail)</source>
        <translation>A duração do disparo (na parte superior da miniatura)</translation>
    </message>
    <message>
        <source>The temporal position of the shot at the end of its duration (At the bottom right of the thumbnail)</source>
        <translation>A posição temporal do disparo no final da sua duração (No canto inferior direito da miniatura)</translation>
    </message>
    <message>
        <source>An image representing the shot at the end of its duration</source>
        <translation>Uma imagem que representa o disparo no final da sua duração</translation>
    </message>
    <message>
        <source>Remark:</source>
        <translation>Observação:</translation>
    </message>
    <message>
        <source>The order of the shots can be changed by using Drag &amp; Drop.</source>
        <translation>A ordem dos tiros podem ser alteradas usando Arrastar e Soltar (Drag &amp; Drop).</translation>
    </message>
    <message>
        <source>Shot settings zone</source>
        <translation>Zona de configurações</translation>
    </message>
    <message>
        <source>Shot duration</source>
        <translation>Duração disparo</translation>
    </message>
    <message>
        <source> Indicate here the duration of the currently selected shot. For the last shot of the slide, there is a minimum duration.The following rules are used to calculate the minimum duration of the shot: </source>
        <translation>Indica a duração do disparo actualmente selecionado. Para o último disparo do slide, há uma duração mínima. As seguintes regras são usadas para calcular a duração mínima do tiro:</translation>
    </message>
    <message>
        <source>The total slide duration cannot be lower than the sum of the durations of the entering transition of the slide plus that of the transition to the following slide</source>
        <translation>A duração total de slides não pode ser menor do que a soma das durações de transição de entrada do slide  mais a transição para a sequência de slides</translation>
    </message>
    <message>
        <source>The total slide duration must permit complete play of the longest video sequence (time of breaks is taken into account)</source>
        <translation>A duração total de slides deve permitir que a reprodução completa da sequência de vídeo mais longo (tempo de quebras é tomado em conta)</translation>
    </message>
    <message>
        <source>The total slide duration cannot be lower than 1:30 second</source>
        <translation>A duração total de slides não pode ser inferior a 1:30 segundos</translation>
    </message>
    <message>
        <source>If you specify a duration lower than the minimum calculated duration for the shot, it is this minimum duration that will be used in place of the value which you specified.</source>
        <translation>Se você especificar uma duração inferior à duração mínima calculada para o disparo, é essa duração mínima que será utilizado no lugar do valor que você especificou.</translation>
    </message>
    <message>
        <source>Interactive zone</source>
        <translation>Área interactiva</translation>
    </message>
    <message>
        <source> The interactive zone allows you to move and interactively re-size blocks within the selected shot. </source>
        <translation>A zona interactiva permite mover e interactivamente redimensionar blocos.</translation>
    </message>
    <message>
        <source>Selected blocks are shown with a frame. (It allows to differentiate them from other graphic elements of the slide).</source>
        <translation>Blocos selecionados são mostrados com um quadro. (Ele permite diferenciá-los de outros elementos gráficos da miniatura).</translation>
    </message>
    <message>
        <source>Control handles (small square) are shown on sides and on corners of the selection frame.</source>
        <translation>Alças de controlo (quadrado pequeno) são mostradas nos lados e nos cantos da armação de selecção.</translation>
    </message>
    <message>
        <source>Rulers are displayed to facilitate the work with the mouse. See &lt;a href=&quot;0116.html&quot;&gt;Rulers settings&lt;/a&gt;</source>
        <translation>As réguas são exibidas para facilitar o trabalho com o rato. Veja &lt;a href=&quot;0116.html&quot;&gt; configurações das Réguas &lt;/a&gt;</translation>
    </message>
    <message>
        <source>Using the mouse:</source>
        <translation>Usando o rato:</translation>
    </message>
    <message>
        <source>To select a block: click the block</source>
        <translation>Para seleccionar um bloco: clique no bloco</translation>
    </message>
    <message>
        <source>To select multiple blocks: Select a first block by clicking on it and then, by clicking on the other blocks to be selected with pressing either the SHIFT or the CTRL key.</source>
        <translation>Para selecionar vários blocos: Selecione um primeiro bloco clicando nele e, em seguida, clicando nos outros blocos a serem selecionados e pressionando também a tecla SHIFT ou a tecla CTRL.</translation>
    </message>
    <message>
        <source>To select a block under another block : Click the block to be selected by pushing both SHIFT and CTRL keys.</source>
        <translation>Para selecionar um bloco sob um outro bloco: Clique no bloco a ser selecionado pressionando ambas teclas SHIFT e CTRL.</translation>
    </message>
    <message>
        <source>To unselect a block in a multiple selection: Click the block with pressing either the SHIFT or the CTRL key.</source>
        <translation>Para cancelar a seleção de um bloco numa selecção múltipla: Clique no bloco com pressionando também a tecla SHIFT ou a tecla CTRL.</translation>
    </message>
    <message>
        <source>To modify the size of the blocks of the selection: Click one of the handles of the selection and, while keeping the button of the mouse pressed, move the mouse.</source>
        <translation>Para modificar o tamanho dos blocos da selecção: Clique em uma das alças de seleção e, mantendo o botão do mouse pressionado, mova o rato.</translation>
    </message>
    <message>
        <source>To move the blocks of the selection: Click one of the blocks of the selection and, while keeping the button of the mouse pressed, move the mouse.</source>
        <translation>Para mover os blocos da seleção: Clique em um dos blocos da seleção e, mantendo o botão do mouse pressionado, mova o rato.</translation>
    </message>
    <message>
        <source>Using the keyboard:</source>
        <translation>Usando o teclado:</translation>
    </message>
    <message>
        <source>To move the blocks of the selection, use the arrow keys.</source>
        <translation>Para mover os blocos da selecção, use as teclas de seta.</translation>
    </message>
    <message>
        <source>To change the size of the blocks of the selection, use SHIFT+arrows to move the upper left corner handle or CTRL+arrows to move the lower right corner handle.</source>
        <translation>Para alterar o tamanho dos blocos da selecção, use Shift + setas para mover a alça do canto superior esquerdo ou CTRL + setas para mover a alça do canto inferior direito.</translation>
    </message>
    <message>
        <source>Remarks:</source>
        <translation>Observações:</translation>
    </message>
    <message>
        <source>A double click on a block opens the block editor associated with the block type (for a text block this will be the text editor, for an image block the reframing dialog, etc.)</source>
        <translation>Um duplo clique em um bloco abre o editor de bloco associado ao tipo de bloco (para um bloco de texto este será o editor de texto, por um bloco de imagem a caixa de diálogo reenquadramento, etc)</translation>
    </message>
    <message>
        <source>A right click on a block when the selection includes only a single block opens a contextual menu proposing the editing commands for a block.</source>
        <translation>Um clique direito sobre um bloco quando a selecção inclui apenas um único bloco abre um menu contextual propondo os comandos de edição para um bloco.</translation>
    </message>
    <message>
        <source>A right click on a block when the selection includes multiple blocks opens a contextual menu proposing the editing commands for multiple blocks.</source>
        <translation>Um clique direito num bloco quando a selecção inclui vários blocos abre um menu contextual propondo os comandos de edição para vários blocos.</translation>
    </message>
    <message>
        <source>Blocks table</source>
        <translation>Tabela de blocos</translation>
    </message>
    <message>
        <source>The blocks table lists, from top to bottom, the present blocks in the slide.</source>
        <translation>A tabela de blocos lista, de cima para baixo, os blocos presentes no slide.</translation>
    </message>
    <message>
        <source>The order of the blocks is important! The first block (at the top of the list) is covered by the second block which is even covered by the following block and so on.</source>
        <translation>A ordem dos blocos é importante! O primeiro bloco (no topo da lista) é coberto pelo segundo bloco que é ainda coberto por bloco seguinte e assim por diante.</translation>
    </message>
    <message>
        <source>The order of the blocks is defined shot by shot.</source>
        <translation>A ordem dos blocos é definido disparado por disparo.</translation>
    </message>
    <message>
        <source>Blocks are shown on 3 columns:</source>
        <translation>Os blocos são mostrados em três colunas:</translation>
    </message>
    <message>
        <source>The first column contains or: </source>
        <translation>A primeira coluna contém ou:</translation>
    </message>
    <message>
        <source> If the block is a title.</source>
        <translation>Se o bloco é um título.</translation>
    </message>
    <message>
        <source>A thumbnail if the block is an image or a video.</source>
        <translation>Uma miniatura se o bloco é uma imagem ou um vídeo.</translation>
    </message>
    <message>
        <source> If the image or the video have a transformation filter.</source>
        <translation>Se a imagem ou o vídeo tem um filtro de transformação.</translation>
    </message>
    <message>
        <source>The second column contains icons giving the state of the blocks for the current shot: </source>
        <translation>A segunda coluna contém os ícones que dão o estado dos blocos para o disparo actual: </translation>
    </message>
    <message>
        <source> If the video has the sound during this shot. This information appears only for the video blocks.</source>
        <translation>Se o vídeo tem o som durante este disparo. Esta informação aparece apenas para os blocos de vídeo.</translation>
    </message>
    <message>
        <source> If the block is visible during this shot.</source>
        <translation>Se o bloco é visível durante este disparo.</translation>
    </message>
    <message>
        <source> If the block is hidden during this shot.</source>
        <translation>Se o bloco está escondido (não visivel) durante este disparo.</translation>
    </message>
    <message>
        <source>The third column indicates: </source>
        <translation>A terceira coluna indica:</translation>
    </message>
    <message>
        <source>If the block is a title: the text of the block</source>
        <translation>Se o bloco é um título: o texto do bloco</translation>
    </message>
    <message>
        <source>If the block is an image: </source>
        <translation>Se o bloco é uma imagem: </translation>
    </message>
    <message>
        <source>The filename.</source>
        <translation>Nome do ficheiro.</translation>
    </message>
    <message>
        <source>The width x the height of the image in pixel (the format of the image - the geometry of the image).</source>
        <translation>A largura x a altura da imagem em pixéis (o formato da imagem - a geometria da imagem).</translation>
    </message>
    <message>
        <source>A summary of EXIF information on the image.</source>
        <translation>Um resumo das informações EXIF ​​da imagem.</translation>
    </message>
    <message>
        <source>If the block is a video: </source>
        <translation>Se o bloco é um vídeo:</translation>
    </message>
    <message>
        <source>The duration of the video.</source>
        <translation>A duração do vídeo.</translation>
    </message>
    <message>
        <source>Double clicking on a block opens the block editor associated with the block type (for a text block this will be the text editor, for an image block the reframing dialog, etc.)</source>
        <translation>Um duplo clique em um bloco abre o editor de bloco associado ao tipo de bloco (para um bloco de texto este será o editor de texto, por um bloco de imagem a caixa de diálogo reenquadramento, etc)</translation>
    </message>
    <message>
        <source>Right clicking on a block when the selection includes only a single block opens a contextual menu proposing the editing commands for a block.</source>
        <translation>Um clique direito sobre um bloco quando a selecção inclui apenas um único bloco abre um menu contextual propondo os comandos de edição para um bloco.</translation>
    </message>
    <message>
        <source>Right clicking on a block when the selection includes multiple blocks opens a contextual menu proposing the editing commands for multiple blocks.</source>
        <translation>Um clique direito num bloco quando a selecção inclui vários blocos abre um menu contextual propondo os comandos de edição para vários blocos.</translation>
    </message>
    <message>
        <source>Blocks with locked properties are shown on a grey bottom.</source>
        <translation>Blocos com propriedades bloqueadas são mostrados sobre um fundo cinza.</translation>
    </message>
    <message>
        <source>Selected blocks are shown on a red bottom if the focus is on the blocks table or on a blue bottom if the focus is on another element.</source>
        <translation>Blocos selecionados são mostrados em um fundo vermelho, se o foco está na tabela blocos ou em um fundo azul, se o foco é outro elemento.</translation>
    </message>
    <message>
        <source>To change the blocks order, use Drag &amp; Drop or &lt;B&gt;Up&lt;/B&gt; and &lt;B&gt;Down&lt;/B&gt; functions of the contextual menu.</source>
        <translation>Para alterar a ordem blocos, use Drag &amp; Drop (arrastar e soltar) ou &lt;B&gt;para Cima&lt;/B&gt; e &lt;B&gt; para Baixo&lt;/B&gt;funções do menu contextual.</translation>
    </message>
    <message>
        <source>It is possible to add files directly in the blocks table by using Drag and Drop with the file explorer.</source>
        <translation>É possível adicionar arquivos directamente na tabela de blocos através de arrastar e soltar com o explorador de arquivos.</translation>
    </message>
    <message>
        <source>All blocks, whether title, image or video, possess a text element.</source>
        <translation>Todos os blocos sejam, título, imagem ou vídeo, possuem um elemento de texto.</translation>
    </message>
    <message>
        <source>During the insertion of a new block (Add title, Add file or Paste), the block is inserted: </source>
        <translation>Durante a inserção de um novo bloco (Adicionar título, Adicionar arquivo ou pasta), é inserido o bloco:</translation>
    </message>
    <message>
        <source>In visible mode for the current shot and for all the following shots</source>
        <translation>No modo visível para o disparo actual e para todos disparos seguintes</translation>
    </message>
    <message>
        <source>In hidden mode for the shots located before the current shot</source>
        <translation>Em modo oculto para os disparos localizados antes do tiro actual</translation>
    </message>
    <message>
        <source>Always in the last position in the list of blocks (in the foreground)</source>
        <translation>Sempre na última posição na lista de blocos (no primeiro plano)</translation>
    </message>
    <message>
        <source>Block settings zone</source>
        <translation>Bloquear zona de configurações</translation>
    </message>
    <message>
        <source>Coordinates</source>
        <translation>Coordenadas</translation>
    </message>
    <message>
        <source>This settings group defines the coordinates of the block for the current shot, so, the modifications made to the following properties will apply only to current shot. To understand the differences between the properties which apply to all shots and those which apply only to the current shot, consult: &lt;a href=&quot;0010.html&quot;&gt;How ffDiaporama works&lt;/a&gt;.</source>
        <translation>Este grupo de configurações define as coordenadas do bloco para o disparo actual assim, as modificações feitas para as seguintes propriedades só se aplica a disparo actual. Para entender as diferenças entre as propriedades que se aplicam a todos os disparos e as que se aplicam apenas para o disparo actual consultar: &lt;a href=&quot;0010.html&quot;&gt; Como funciona ffDiaporama &lt;/a&gt;.</translation>
    </message>
    <message>
        <source>&lt;B&gt;For image or video blocks: &lt;/B&gt;Allows you to select a reframing style for the image. It has the same effect as selecting a style in the dialog: &lt;a href=&quot;0110.html&quot;&gt;Correct, reframe or cut image or video&lt;/a&gt;.</source>
        <translation>&lt;B&gt; Para blocos de imagem ou vídeo: &lt;/B&gt; Permite que você selecione um estilo de reenquadramento da imagem. Ele tem o mesmo efeito que selecionar um estilo na caixa de diálogo: &lt;a href=&quot;0110.html&quot;&gt;Corrigir, reenquadrar, cortar imagem ou vídeo&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>&lt;B&gt;For text blocks: &lt;/B&gt;Allows you to select the geometrical constraints to be applied to the block. Three type of constraint are available:</source>
        <translation>&lt;B&gt; Para blocos de texto: &lt;/B&gt; Permite que você selecione as restrições geométricas a serem aplicadas ao bloco. Três tipo de restrição estão disponíveis:</translation>
    </message>
    <message>
        <source>No constraint is applied to the selection rectangle.</source>
        <translation>Nenhuma restrição é aplicada ao retângulo de seleção.</translation>
    </message>
    <message>
        <source>Lock selection rectangle to the actual geometry. It has no meaning until you have defined a shape in &quot;no constraint&quot; mode.</source>
        <translation>Bloquear rectângulo de selecção para a geometria actuall. Não tem nenhum significado até que você tenha definido uma forma no modo &quot;nenhum constrangimento&quot;.</translation>
    </message>
    <message>
        <source>Lock selection rectangle to the same geometry as the project, such that, if you place the image in full screen, the reframed part will correspond to the whole screen.</source>
        <translation>Bloquear rectângulo de selecção para a mesma geometria que o projecto, de modo que, se você colocar a imagem em tela cheia, a parte reenquadrada corresponderá a toda a tela.</translation>
    </message>
    <message>
        <source>Allows you to select a pre-defined block size</source>
        <translation>Permite selecionar um tamanho de bloco pré-definido</translation>
    </message>
    <message>
        <source>Represents the horizontal offset of the block from the left. This position is defined as a percentage (%) of the total width of the image or in pixels (for a 1080p screen) according to the unit defined in the configuration dialog.</source>
        <translation>Representa o deslocamento horizontal do. bloco a partir da esquerda Esta posição é definida como uma percentagem (%) da largura total da imagem em pixeis (para um ecrã 1080p) de acordo com a unidade definida na janela de configuração.</translation>
    </message>
    <message>
        <source>Represents the vertical offset of the block from the top. This position is defined as a percentage (%) of the total height of the image or in pixels (for a 1080p screen) according to the unit defined in the configuration dialog.</source>
        <translation>Representa o deslocamento vertical do bloco a partir do topo. Esta posição é definida como uma percentagem (%) da altura total da imagem em pixeis (para um ecrã 1080p) de acordo com a unidade definida na janela de configuração.</translation>
    </message>
    <message>
        <source>Represents the width of the block. This value is defined as a percentage (%) of the total width of the image or in pixels (for a 1080p screen) according to the unit defined in the configuration dialog box.</source>
        <translation>Representa a largura do bloco. Este valor é definido como uma percentagem (%) da largura total da imagem em pixeis (para um ecrã 1080p) de acordo com a unidade definida na caixa de diálogo de configuração.</translation>
    </message>
    <message>
        <source>Represents the height of the block. This value is defined as a percentage (%) of the total height of the image or in pixels (for a 1080p screen) according to the unit defined in the configuration dialog.</source>
        <translation>Representa a altura do bloco. Este valor é definido como uma percentagem (%) da altura total da imagem em pixeis (para um ecrã 1080p) de acordo com a unidade definida na janela de configuração.</translation>
    </message>
    <message>
        <source>Rotation around the Z axis in degrees.</source>
        <translation>A rotação em torno do eixo Z, em graus.</translation>
    </message>
    <message>
        <source>Rotation around the Y axis in degrees.</source>
        <translation>A rotação em torno do eixo Y, em graus.</translation>
    </message>
    <message>
        <source>Rotation around the X axis in degrees.</source>
        <translation>A rotação em torno do eixo X, em graus.</translation>
    </message>
    <message>
        <source>Block shape</source>
        <translation>Forma do Bloco</translation>
    </message>
    <message>
        <source> This settings group defines the shape of the block for all shots, so, modification of the following properties will apply to all shots in the slide. To understand the differences between the properties which apply to all shots and those which apply only to the current shot, consult: &lt;a href=&quot;0010.html&quot;&gt;How ffDiaporama works&lt;/a&gt;. </source>
        <translation>Este grupo de configurações define as coordenadas do bloco para o disparo actual assim, as modificações feitas para as seguintes propriedades só se aplica ao disparo actual. Para entender as diferenças entre as propriedades que se aplicam a todos os disparos e as que se aplicam apenas para o disparo actual consultar: &lt;a href=&quot;0010.html&quot;&gt; Como funciona ffDiaporama &lt;/a&gt;.</translation>
    </message>
    <message>
        <source>This settings group deals with style management. For more information on style management, see: &lt;a href=&quot;0016.html&quot;&gt;Using style management&lt;/a&gt;</source>
        <translation>Este grupo configurações lida com estilo de gestão. Para mais informações sobre o estilo de gestão, veja: &lt;a href=&quot;0016.html&quot;&gt; Usando a gestão de estilo &lt;/a&gt;</translation>
    </message>
    <message>
        <source>Shape</source>
        <translation>Forma</translation>
    </message>
    <message>
        <source>Allows you to select a shape for the block. The selected shape will be used as:</source>
        <translation>Permite que você selecione uma forma para o bloco. A forma seleccionada será utilizado como:</translation>
    </message>
    <message>
        <source>a fusion mask for the images and the videos.</source>
        <translation>uma máscara de fusão para as imagens e os vídeos.</translation>
    </message>
    <message>
        <source>A cutting zone for texts</source>
        <translation>A zona de corte para textos</translation>
    </message>
    <message>
        <source>Opacity</source>
        <translation>Opacidade</translation>
    </message>
    <message>
        <source>Defines the opacity of the block. This value also applies to the text of the block.</source>
        <translation>Define a opacidade do bloco. Este valor também se aplica ao texto do bloco.</translation>
    </message>
    <message>
        <source>Border</source>
        <translation>Borda</translation>
    </message>
    <message>
        <source>Thickness of the border</source>
        <translation>A espessura da borda</translation>
    </message>
    <message>
        <source>Defines the thickness of the border (This value is defined as 1/1080 of the height of the screen. A value of 10 corresponds to 10 points on a 1920x1080 FullHD screen, but only to 6 points on a 1280x720 screen).</source>
        <translation>Define a espessura da borda (Este valor é definido como 1/1080 da altura do ecrã. Um valor 10 corresponde a 10 pontos no ecrã de um FullHD 1920x1080, mas apenas a 6 pontos sobre uma tela de 1280x720).</translation>
    </message>
    <message>
        <source>Border color</source>
        <translation>Cor da borda</translation>
    </message>
    <message>
        <source>Defines the color of the line to be used to draw the border</source>
        <translation>Define a cor da linha a ser utilizado para desenhar a borda</translation>
    </message>
    <message>
        <source>Line type of border</source>
        <translation>Tipo de linha da borda</translation>
    </message>
    <message>
        <source>Defines the type of line (solid, dotted line, etc.)</source>
        <translation>Define o tipo de linha ( linha pontilhada, sólida, etc)</translation>
    </message>
    <message>
        <source>Shadow</source>
        <translation>Sombra</translation>
    </message>
    <message>
        <source>Shadow position</source>
        <translation>Posição da Sombra</translation>
    </message>
    <message>
        <source>Defines in which corner the shadow will be positioned (Note: the position of the shadow is independent of rotation of the block: the right lower corner is always the right lower corner, whatever rotation is applied).</source>
        <translation>Define em que canto a sombra será posicionada (Nota: a posição da sombra é independente da rotação do bloco: o canto inferior direito é sempre o canto inferior direito, seja qual for a rotação é aplicada).</translation>
    </message>
    <message>
        <source>Distance of the shadow</source>
        <translation>Distância da sombra</translation>
    </message>
    <message>
        <source>Defines the distance between the block and its shadow</source>
        <translation>Define a distância entre o bloco e sua sombra</translation>
    </message>
    <message>
        <source>Color</source>
        <translation>Cor</translation>
    </message>
    <message>
        <source>Sets the color used to draw the shadow</source>
        <translation>Define a cor usada para desenhar a sombra</translation>
    </message>
    <message>
        <source>Animation option</source>
        <translation>Opcção de Animação</translation>
    </message>
    <message>
        <source>Speed wave</source>
        <translation>Velocidade das ondas</translation>
    </message>
    <message>
        <source>Text annimation</source>
        <translation>Animação de texto</translation>
    </message>
    <message>
        <source>Zoom</source>
        <translation>Zoom</translation>
    </message>
    <message>
        <source>Defines a level of zoom for the text</source>
        <translation>Define o nível de zoom do texto</translation>
    </message>
    <message>
        <source>Defines the horizontal position of the text inside the block</source>
        <translation>Define a posição horizontal do texto dentro do bloco</translation>
    </message>
    <message>
        <source>Defines the vertical position of the text inside the block</source>
        <translation>Define a posição vertical do texto dentro do bloco</translation>
    </message>
    <message>
        <source>To make animations of text, you have to create at least 2 shots then:</source>
        <translation>Para fazer animações de texto, você tem que criar pelo menos dois disparos e, em seguida:</translation>
    </message>
    <message>
        <source>Define values for zoom and scrolling for the 1st shot</source>
        <translation>Definir valores para zoom e rolagem para o primeiro disparo</translation>
    </message>
    <message>
        <source>Define different values for zoom and scrolling for the 2nd</source>
        <translation>Definir valores diferentes para zoom e rolagem para o 2 º disparo</translation>
    </message>
    <message>
        <source>Block animation</source>
        <translation>Animações de Blocos</translation>
    </message>
    <message>
        <source>Multiple rotations</source>
        <translation>Múltiplas rotações</translation>
    </message>
    <message>
        <source> This animation allows to turn a block several times during the shot. </source>
        <translation>Esta animação permite virar um bloco várias vezes durante o disparo.</translation>
    </message>
    <message>
        <source>Remark: the rotation direction is defined by the sign, so +5 will give 5 rotations in one direction while -5 will give 5 rotations in the other direction </source>
        <translation>Observação: o sentido de rotação é definido pelo sinal, para +5 vai dar 5 rotações numa direção, enquanto -5 vai dar 5 rotações noutra direção</translation>
    </message>
    <message>
        <source>Defines the number of rotation to be made according to the Z axis.</source>
        <translation>Define o número de rotações que deve ser feita em torno do eixo Z..</translation>
    </message>
    <message>
        <source>Defines the number of rotation to be made according to the Y axis.</source>
        <translation>Define o número de rotação a ser feita em torno do eixo Y.</translation>
    </message>
    <message>
        <source>Defines the number of rotation to be made according to the X axis.</source>
        <translation>Define o número de rotações que deve ser feita em torno do eixo dos x.</translation>
    </message>
    <message>
        <source>Dissolve</source>
        <translation>Dissolver</translation>
    </message>
    <message>
        <source>This animation dissolves between the block and a transparent zone according to the following settings.</source>
        <translation>Esta animação dissolve entre o bloco e uma zona transparente de acordo com as seguintes definições.</translation>
    </message>
    <message>
        <source>Appear</source>
        <translation>Aparecer</translation>
    </message>
    <message>
        <source>The block will appear during the shot</source>
        <translation>Bloco aparecerá durante o disparo</translation>
    </message>
    <message>
        <source>Disappear</source>
        <translation>Desaparecer</translation>
    </message>
    <message>
        <source>The block will disappear during the shot</source>
        <translation>Bloco irá desaparecer durante a disparo</translation>
    </message>
    <message>
        <source>Blink</source>
        <translation>Piscar</translation>
    </message>
    <message>
        <source>The block will blink during the shot (appear then disappear). 4 speeds are proposed (from slow to very fast).</source>
        <translation>Bloco irá piscar durante o disparo (aparece e em seguida, desaparece). 4 velocidades são propostos (de lenta até muito rápida).</translation>
    </message>
    <message>
        <source>See also</source>
        <translation>Veja também</translation>
    </message>
    <message>
        <source>Description of EXIF - Exchangeable image file format</source>
        <translation>Descrição do EXIF - Exchangeable Image File Format</translation>
    </message>
    <message>
        <source>Add special - Open a sub menu with the following options: </source>
        <translation>Adicionar especial - Abre um submenu com as seguintes opções:</translation>
    </message>
    <message>
        <source>Add image from clipboard</source>
        <translation>Adicionar Imagem a partir da área de transferência</translation>
    </message>
    <message>
        <source>Add a GMaps map</source>
        <translation>Adicionar um mapa GMaps</translation>
    </message>
    <message>
        <source>Once you have selected one of the options, the new object is inserted into the block table and depending on object, the &lt;a href=&quot;0110.html&quot;&gt;Image framing and correction dialog&lt;/a&gt; opens.</source>
        <translation>Uma vez que você tenha seleccionado uma das opções, o novo objecto é inserido na tabela do bloco e dependendo do objecto, a caixa de diálogo &lt;a href=&quot;0110.html&quot;&gt;Enquadramento de imagem e correção&lt;/a&gt; abre-se.</translation>
    </message>
    <message>
        <source>Paste block or image from the clipboard and insert it to the end of the block table</source>
        <translation>Colar bloco ou uma imagem da área de transferência e inseri-lo até o fim da tabela de bloco</translation>
    </message>
    <message>
        <source>Selects a speed curve for block animations (movement, resizing and rotating of blocks, animation of text and blocks)</source>
        <translation>Seleciona uma curva de velocidade para animações em bloco (movimento, redimensionamento e rotação de blocos, animação de texto e blocos)</translation>
    </message>
    <message>
        <source>To change the velocity curve for image animation (graphic effect and framing), edit the image or video and select a velocity in the Image framing and correction dialog</source>
        <translation>Para alterar a curva de velocidade para a animação de imagem (efeito gráfico e enquadramento), editar a imagem ou vídeo e selecione uma velocidade na caixa de diálogo enquadramento de imagem e correção</translation>
    </message>
    <message>
        <source>This setting is define for the current shot, so, the modifications made will apply only to current shot. To understand the differences between the properties which apply to all shots and those which apply only to the current shot, consult: &lt;a href=&quot;0010.html&quot;&gt;How ffDiaporama works&lt;/a&gt;.</source>
        <translation>Esta configuração define para o tiro actual assim, as modificações feitas serão aplicadas apenas para tiro actual. Para entender as diferenças entre as propriedades que se aplicam a todos os disparos e que se aplicam apenas para o disparo actual consultar: &lt;a href=&quot;0010.html&quot;&gt;Como funciona ffDiaporama&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>These settings are defines for the current shot, so, the modifications made will apply only to current shot. To understand the differences between the properties which apply to all shots and those which apply only to the current shot, consult: &lt;a href=&quot;0010.html&quot;&gt;How ffDiaporama works&lt;/a&gt;.</source>
        <translation>Essas configurações são definidas para o disparo actual assim, as modificações feitas serão aplicadas apenas para disparo actual. Para entender as diferenças entre as propriedades que se aplicam a todos os disparos e que se aplicam apenas para o disparo actual consultar: &lt;a href=&quot;0010.html&quot;&gt;Como funciona ffDiaporama&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>The block animations define which animations will run during the current shot. You can define different animations for every shot!</source>
        <translation>As animações do bloco definem quais animações serão executados durante o disparo actual. Você pode definir diferentes animações para cada disparo!</translation>
    </message>
    <message>
        <source> If changes made on previous shot are applied for this block also to this shot. (This information does not appear for the 1st shot.)</source>
        <translation>Se as alterações feitas no disparo anterior são aplicadas para este bloco também se aplicam para este disparo. (Esta informação não aparece para o primeiro disparo.)</translation>
    </message>
    <message>
        <source> If changes made on previous shot are not applied for this block to this shot. (This information does not appear for the 1st shot.)</source>
        <translation>Se as alterações feitas no disparo anterior não se aplicam para este bloco, também não se aplicam para este disparo. (Esta informação não aparece para o primeiro disparo.)</translation>
    </message>
    <message>
        <source>Inheritance changes</source>
        <translation>Mudanças de herança</translation>
    </message>
    <message>
        <source>Inherit changes: If this box is checked, the changes made in a previous shot will be applied to this object in this shot</source>
        <translation>Herdar mudanças: Se esta caixa estiver marcada, as alterações feitas em um tiro anterior será aplicada a este nesta foto</translation>
    </message>
    <message>
        <source>This settings group defines how changes to the block parameters are reflected to the different shots.</source>
        <translation>Este grupo de configurações define como as alterações nos parâmetros do bloco são refletidas para os diferentes disparos.</translation>
    </message>
</context>
<context>
    <name>0120</name>
    <message>
        <source>Edit text</source>
        <translation>Editar texto</translation>
    </message>
    <message>
        <source>This dialog allows you to modify the text within a block.</source>
        <translation>Esta caixa de diálogo permite que você modifique o texto dentro de um bloco.</translation>
    </message>
    <message>
        <source>Properties for all shots</source>
        <translation>Propriedades para todos os disparos</translation>
    </message>
    <message>
        <source> The modifications made to the following properties will apply to all shots of the slide. </source>
        <translation>As modificações feitas nas seguintes propriedades serão aplicadas a todos os disparos do slide.</translation>
    </message>
    <message>
        <source>To understand indeed the differences between the properties which apply to all shots and those who apply only to the current shot, consult: &lt;a href=&quot;0010.html&quot;&gt;How ffDiaporama works&lt;/a&gt;. </source>
        <translation>Para compreender de facto as diferenças entre as propriedades que se aplicam a todos os disparos e os que se aplicam apenas ao disparo actual consultar: &lt;a href=&quot;0010.html&quot;&gt; Como funciona ffDiaporama &lt;/a&gt;.</translation>
    </message>
    <message>
        <source>Text tab</source>
        <translation>Guia Texto</translation>
    </message>
    <message>
        <source>First line at the top of the dialog</source>
        <translation>Primeira linha na parte superior da caixa de diálogo</translation>
    </message>
    <message>
        <source>This settings group is the object of style management. for more information on style management, see : &lt;a href=&quot;0016.html&quot;&gt;Using style management&lt;/a&gt;</source>
        <translation>Este grupo de configurações é o objecto de estilo de gestão. para mais informações sobre o estilo de gestão, veja: &lt;a href=&quot;0016.html&quot;&gt; Usando estilo de gestão &lt;/a&gt;</translation>
    </message>
    <message>
        <source>Allows you to select the font to be used, its size and its colour. This setting applies to the current selection.</source>
        <translation>Permite que você selecione o tipo de letra a ser utilizado, seu tamanho e sua cor. Essa configuração  aplica-se à selecção actual.</translation>
    </message>
    <message>
        <source>Allows to establish (or to remove) a bullet list. This setting applies to the paragraphs of the current selection.</source>
        <translation>Permite estabelecer (ou remover) a lista de marcadores. Esta definição aplica-se aos parágrafos da selecção actual.</translation>
    </message>
    <message>
        <source>Allows to establish (or to remove) a numbered list. This setting applies to the paragraphs of the current selection.</source>
        <translation>Permite estabelecer (ou remover) uma lista numerada. Esta definição aplica-se aos parágrafos da selecção actual.</translation>
    </message>
    <message>
        <source>Horizontal alignment: left. This setting applies to the paragraph in which the cursor is.</source>
        <translation>Alinhamento horizontal: à esquerda. Esta definição aplica-se o parágrafo em que o cursor está.</translation>
    </message>
    <message>
        <source>Horizontal alignment: centered. This setting applies to the paragraph in which the cursor is.</source>
        <translation>Alinhamento horizontal: centrado. Esta definição aplica-se o parágrafo em que o cursor está.</translation>
    </message>
    <message>
        <source>Horizontal alignment: justified. This setting applies to the paragraph in which the cursor is.</source>
        <translation>Alinhamento horizontal: justificado. Esta definição aplica-se o parágrafo em que o cursor está.</translation>
    </message>
    <message>
        <source>Horizontal alignment: right. This setting applies to the paragraph in which the cursor is.</source>
        <translation>Alinhamento horizontal: à direita. Esta definição aplica-se o parágrafo em que o cursor está.</translation>
    </message>
    <message>
        <source>Second line at the top of the dialog</source>
        <translation>Segunda linha na parte superior da caixa de diálogo</translation>
    </message>
    <message>
        <source>Allows you to add outline or shadow to the whole text: </source>
        <translation>Permite adicionar contorno ou sombra para todo o texto:</translation>
    </message>
    <message>
        <source>The first list allows you to select the effect: </source>
        <translation>A primeira lista permite selecionar o efeito:</translation>
    </message>
    <message>
        <source>No effect</source>
        <translation>Sem efeito</translation>
    </message>
    <message>
        <source>Text is shown without any shadow or outline</source>
        <translation>O texto é apresentado sem qualquer sombra ou contorno</translation>
    </message>
    <message>
        <source>Outline</source>
        <translation>Contorno</translation>
    </message>
    <message>
        <source>Surrounds the characters with a line in the current shadow color</source>
        <translation>Rodeia os caracteres com uma linha na cor da sombra actual</translation>
    </message>
    <message>
        <source>Shadow ...</source>
        <translation>Sombra ...</translation>
    </message>
    <message>
        <source>Add a shadow in the current shadow color in one of the 4 corners.</source>
        <translation>Adiciona uma sombra na cor da sombra actual em um dos quatro cantos.</translation>
    </message>
    <message>
        <source>The second list allows you to select the color of the shadow or the outline.</source>
        <translation>A segunda lista permite selecionar a cor da sombra do contorno.</translation>
    </message>
    <message>
        <source>Sets bold characters. This setting applies to the current selection.</source>
        <translation>Define caracteres em negrito. Essa configuração  aplica-se à selecção actual.</translation>
    </message>
    <message>
        <source>Sets characters to italics. This setting applies to the current selection.</source>
        <translation>Define caracteres para itálico. Essa configuração  aplica-se à selecção actual.</translation>
    </message>
    <message>
        <source>Underlines the characters. This setting applies to the current selection.</source>
        <translation>Sublinha os carecteres. Essa configuração  aplica-se à selecção actual.</translation>
    </message>
    <message>
        <source>Puts the characters to super. This setting applies to the current selection.</source>
        <translation>Coloca os caracteres para superior. Essa configuração  aplica-se à selecção actual.</translation>
    </message>
    <message>
        <source>Puts the characters to sub. This setting applies to the current selection.</source>
        <translation>Coloca os caracteres para inferior. Essa configuração  aplica-se à selecção actual.</translation>
    </message>
    <message>
        <source>Move the paragraph of a notch towards the right (indent). This setting applies to the paragraph in which is the cursor.</source>
        <translation>Move o parágrafo de um nível para a direita (avanço). Esta definição aplica-se o parágrafo em que está o cursor.</translation>
    </message>
    <message>
        <source>Move the paragraph of a notch towards the left (unindent). This setting applies to the paragraph in which is the cursor.</source>
        <translation>Move o parágrafo de um nível para a esquerda (recuo). Esta definição aplica-se o parágrafo em que está o cursor.</translation>
    </message>
    <message>
        <source>Vertical alignment: top. This setting applies to the block (to the whole text).</source>
        <translation>Alinhamento vertical: topo. Esta definição aplica-se ao bloco (para todo o texto).</translation>
    </message>
    <message>
        <source>Vertical alignment: middle. This setting applies to the block (to the whole text).</source>
        <translation>Alinhamento vertical: meio. Esta definição aplica-se ao bloco (para todo o texto).</translation>
    </message>
    <message>
        <source>Vertical alignment: bottom. This setting applies to the block (to the whole text).</source>
        <translation>Alinhamento Vertical: fundo. Esta definição aplica-se ao bloco (para todo o texto).</translation>
    </message>
    <message>
        <source>Allows you to add a dynamic variable to the text. For more information on dynamic variables see: &lt;a href=&quot;0013.html&quot;&gt;Dynamic variables&lt;/a&gt;</source>
        <translation>Permite adicionar uma variável dinâmica ao texto. Para mais informações sobre variáveis ​​dinâmicas ver: &lt;a href=&quot;0013.html&quot;&gt; variáveis ​​dinâmicas &lt;/a&gt;</translation>
    </message>
    <message>
        <source>Background text tab</source>
        <translation>Guia de texto de fundo</translation>
    </message>
    <message>
        <source>&lt;U&gt;&lt;B&gt;&lt;I&gt;Note: This tab is available only for the title blocks (It&apos;s not available when the text applies to an image block).&lt;/I&gt;&lt;/B&gt;&lt;/U&gt;</source>
        <translation>&lt;U&gt; &lt;B&gt; &lt;I&gt; Nota: Este guia está disponível apenas para os blocos de título (não é disponível quando o texto se aplica a um bloco de imagem).&lt;/I&gt; &lt;/B&gt; &lt;/U&gt;</translation>
    </message>
    <message>
        <source>Allows you to define a background brush for the shape. The following options are available: </source>
        <translation>Permite definir um pincel de fundo para a forma. As seguintes opções estão disponíveis:</translation>
    </message>
    <message>
        <source>No brush</source>
        <translation>Sem pincel</translation>
    </message>
    <message>
        <source>The shape will have no background and will thus be totally transparent.</source>
        <translation>A forma não terá de fundo e, portanto, será totalmente transparente.</translation>
    </message>
    <message>
        <source>Solid brush</source>
        <translation>Pincel sólido</translation>
    </message>
    <message>
        <source>Allows you to select a plain color.</source>
        <translation>Permite que você selecione uma cor lisa.</translation>
    </message>
    <message>
        <source>Pattern brush</source>
        <translation>Pincel padrão</translation>
    </message>
    <message>
        <source>Allows you to select a hatched brush.</source>
        <translation>Permite que você selecione um pincel incubado.</translation>
    </message>
    <message>
        <source>Gradient 2 colors</source>
        <translation>Gradiente 2 cores</translation>
    </message>
    <message>
        <source>Allows you to select a gradient of 2 colors.</source>
        <translation>Permite que você selecione um gradiente de duas cores.</translation>
    </message>
    <message>
        <source>Gradient 3 colors</source>
        <translation>Gradiente 3 cores</translation>
    </message>
    <message>
        <source>Allows you to select a gradient of 3 colors.</source>
        <translation>Permite que você selecione um gradiente de três cores.</translation>
    </message>
    <message>
        <source>Image from library</source>
        <translation>Imagem da biblioteca</translation>
    </message>
    <message>
        <source>Allows you to select an image from the library.</source>
        <translation>Permite que você selecione uma imagem da biblioteca.</translation>
    </message>
    <message>
        <source>If background brush is Solid, Pattern or Gradient brush, then this line appears and allows you to select a color. (Depending on the brush you select, there will be one, two or three selectable colors.)</source>
        <translation>Se pincel de fundo é Sólido, Padrão ou Gradiente pincel, então esta linha aparece e permite que você selecione uma cor. (Dependendo da escova que você escolha, haverá uma, duas ou três cores selecionáveis.)</translation>
    </message>
    <message>
        <source>If background brush is Pattern brush, then this line appears and allows you to select a pattern.</source>
        <translation>Se pincel de fundo é Pincel padrão, então esta linha aparece e permite que você selecione um padrão.</translation>
    </message>
    <message>
        <source>If background brush is Gradient, then this line appears and allows you to select the gradient orientation. </source>
        <translation>Se pincel de fundo é Gradiente, então esta linha aparece e permite que você selecione a orientação do gradiente. </translation>
    </message>
    <message>
        <source>If the Gradient has 3 colors, additional controls allow to define the position (in percentage) of the 3rd gradient color.</source>
        <translation>Se o Gradiente tem três cores, controlos adicionais permitem definir a posição (em percentagem) da cor do terceiro gradiente.</translation>
    </message>
    <message>
        <source>If background brush is Image from library, then this line appears and allows you to select an image.</source>
        <translation>Se pincel de fundo é imagem da biblioteca, então esta linha aparece e permite que você selecione uma imagem.</translation>
    </message>
    <message>
        <source>Margins tab</source>
        <translation>Guia Margens</translation>
    </message>
    <message>
        <source>Default margins</source>
        <translation>Margens padrão</translation>
    </message>
    <message>
        <source>To use predefined margins for the shape of the block. In general, these margins ensure that the text is contained in the form.</source>
        <translation>Para utilizar as margens pré-definidos para a forma do bloco. Em geral, estas margens asseguram que o texto está contida no formulário.</translation>
    </message>
    <message>
        <source>Full shape</source>
        <translation>Forma plena</translation>
    </message>
    <message>
        <source>To use margins corresponding to the entire form, in fact, the selection rectangle shape regardless of the design.</source>
        <translation>Para utilizar as margens correspondentes à forma inteira, de facto, a forma de rectângulo de selecção independentemente do desenho.</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation>Personalizado</translation>
    </message>
    <message>
        <source>To use custom margins. The following settings allow you to adjust the margins: </source>
        <translation>Para usar margens personalizadas As seguintes configurações permitem ajustar as margens:</translation>
    </message>
    <message>
        <source>Represents the horizontal position of the margins relative to the top-left corner of the block. (This value is expressed in % of the width of the block.)</source>
        <translation>Representa a posição horizontal das margens em relação ao canto superior esquerdo do bloco. (Este valor é expresso em % da largura do bloco.)</translation>
    </message>
    <message>
        <source>Represents the vertical position of the margins relative to the top-left corner of the block. (This value is expressed in % of the height of the block.)</source>
        <translation>Representa a posição vertical das margens em relação ao canto superior esquerdo do bloco. (Este valor é expresso em % da altura do bloco.)</translation>
    </message>
    <message>
        <source>Represents the width of the margins. (This value is expressed in % of the width of the block.)</source>
        <translation>Representa a largura das margens. (Este valor é expresso em % da largura do bloco.)</translation>
    </message>
    <message>
        <source>Represents the height of the margins. (This value is expressed in % of the height of the block.)</source>
        <translation>Representa a altura das margens. (Este valor é expresso em % da altura do bloco.)</translation>
    </message>
</context>
<context>
    <name>0121</name>
    <message>
        <source>Select transition duration for a set of slides</source>
        <translation>Selecione duração da transição para um conjunto de slides</translation>
    </message>
    <message>
        <source>Duration</source>
        <translation>Duração</translation>
    </message>
    <message>
        <source>Define the animation duration.</source>
        <translation>Define a duração da animação.</translation>
    </message>
    <message>
        <source>When you click the OK button, the new transition duration is applied to all the slides that were selected. </source>
        <translation>Quando você clica no botão OK, a nova duração da transição é aplicada a todas os slides que foram selecionados.</translation>
    </message>
    <message>
        <source>This function can not be used to delete or change the slide&apos;s transition. </source>
        <translation>Esta função não pode ser utilizado para excluir ou alterar a transição do slide.</translation>
    </message>
    <message>
        <source>If it&apos;s what you want, then call the context transitions menu by right clicking on one of the slides of the selection from the &lt;a href=&quot;0023.html&quot;&gt;timeline&lt;/a&gt; and then select &quot;Modify the transition for all the slides of the selection&quot; option.</source>
        <translation>Se é o que você quer, em seguida, chamar o menu de contexto das transições, com o botão direito num dos slides da selecção da &lt;a href=&quot;0023.html&quot;&gt; linha do tempo &lt;/a&gt; e, em seguida, selecione  a opção &quot;Modificar a transição para todos os slides da da selecção &quot;.</translation>
    </message>
    <message>
        <source>This dialog allows you to define the transition duration for a set of slides:</source>
        <translation>Esta caixa de diálogo permite que você defina a duração da transição para um conjunto de slides:</translation>
    </message>
</context>
<context>
    <name>0122</name>
    <message>
        <source>Transition properties</source>
        <translation>Propriedades das transições</translation>
    </message>
    <message>
        <source> This dialog allows you to define the entering transition for a slide. </source>
        <translation>Esta caixa de diálogo permite que você defina a transição de entrada para um slide.</translation>
    </message>
    <message>
        <source>It shows a preview of the available transitions by transition family. </source>
        <translation>Ele mostra uma pré-visualização das transições disponíveis pela família de transições.</translation>
    </message>
    <message>
        <source>Remark : In case this dialog is opened for a multiple slide selection, it&apos;s the first slide of the selection that is used for the preview. </source>
        <translation>Observação: No caso de este caixa de diálogo ser aberta para uma selecção de múltiplos slides, é o primeiro slide da selecção que é usado para a visualização.</translation>
    </message>
    <message>
        <source>Transition type</source>
        <translation>Tipo de transição</translation>
    </message>
    <message>
        <source>Allows you to select a transition family: </source>
        <translation>Permite selecionar uma família de transição:</translation>
    </message>
    <message>
        <source>No transition</source>
        <translation>Sem transição</translation>
    </message>
    <message>
        <source>No transition: The new slide immediately replaces the old one. </source>
        <translation>Sem transição: O novo slide imediatamente substitui o anterior.</translation>
    </message>
    <message>
        <source>Note that this also deactivates:</source>
        <translation>Note-se que esta também desativa:</translation>
    </message>
    <message>
        <source>Sound fades (The playlist of the new slide immediately replaces that of the old one)</source>
        <translation>Fades (desvanecer) do som (A lista de reprodução do novo slide imediatamente substitui a do antigo)</translation>
    </message>
    <message>
        <source>Background transitions</source>
        <translation>Transições de fundo</translation>
    </message>
    <message>
        <source>Basic</source>
        <translation>Básico</translation>
    </message>
    <message>
        <source>Dissolve effect: The slide appears gradually, with gradually increasing opacity.</source>
        <translation>Efeito Dissolver: O slide é exibido de forma gradual, com aumento gradual de opacidade.</translation>
    </message>
    <message>
        <source>Scripted transition</source>
        <translation>Transição baseada num guião</translation>
    </message>
    <message>
        <source>Zoom: The new slide appears by getting bigger while the old slide disappears with a dissolve effect. </source>
        <translation>Zoom: O novo slide é exibido cada vez maior, enquanto o anterior desaparece com um efeito dissolver. </translation>
    </message>
    <message>
        <source>Slide: The new slide glides onto the old slide which disappears with a dissolve effect. </source>
        <translation>Deslizante: Os novos deslizes deslizam sobre o anterior que desaparece com um efeito dissolver. </translation>
    </message>
    <message>
        <source>Push: The new slide takes the place of the old slide by pushing it aside.</source>
        <translation>Empurrar: O novo slide toma o lugar do antigo, empurrando-a para o lado.</translation>
    </message>
    <message>
        <source>LUMA transition</source>
        <translation>Transições LUMA</translation>
    </message>
    <message>
        <source>The animation is based on a luminance mask : the darker the points in the mask, the faster the corresponding points in the new slide replace those in the old slide.</source>
        <translation>A animação é baseada numa máscara de luminância: quanto mais escura os pontos na máscara, mais rápido os pontos correspondentes no novo slide substituem as do anterior.</translation>
    </message>
    <message>
        <source>Speed wave</source>
        <translation>Velocidade das ondas</translation>
    </message>
    <message>
        <source>Allows you to select a speed curve to apply to the transition</source>
        <translation>Permite selecionar uma curva de velocidade para aplicar a Transições</translation>
    </message>
    <message>
        <source>Duration</source>
        <translation>Duração</translation>
    </message>
    <message>
        <source>Allows you to define the duration of the animation. </source>
        <translation>Permite definir a duração da animação.</translation>
    </message>
    <message>
        <source>The possible choices are of 0,5 seconds (very fast) to 10 seconds (very slow)</source>
        <translation>As opções possíveis são de 0,5 segundos (muito rápido) até 10 segundos (muito lento)</translation>
    </message>
    <message>
        <source>See also</source>
        <translation>Veja também</translation>
    </message>
    <message>
        <source>Description of LUMA</source>
        <translation>Descrição de LUMA</translation>
    </message>
</context>
<context>
    <name>0123</name>
    <message>
        <source>Add or modify a location</source>
        <translation>Adicionar ou modificar uma localização</translation>
    </message>
    <message>
        <source> This dialog allows you to define a location using Google Maps. </source>
        <translation>Esta caixa de diálogo permite que você defina um local usando o Google Maps.</translation>
    </message>
    <message>
        <source>Google address</source>
        <translation>Endereço do Google</translation>
    </message>
    <message>
        <source>Enter the postal adress to find in this zone.</source>
        <translation>Digite o endereço postal para encontrar nesta zona.</translation>
    </message>
    <message>
        <source>When you press the Enter key, a search is made using Google Maps and the addresses found are used to fill the list.</source>
        <translation>Quando você pressiona a tecla Enter, uma busca é feita usando o Google Maps e os endereços encontrados são usados ​​para preencher a lista.</translation>
    </message>
    <message>
        <source>Then select the correct address in the list</source>
        <translation>Em seguida, selecione o endereço correto na lista</translation>
    </message>
    <message>
        <source>Open the favorite menu: </source>
        <translation>Abra o menu de favoritos:</translation>
    </message>
    <message>
        <source>Add to favorite: Adds the current location to the list.</source>
        <translation>Adicionar a favoritos: adiciona a localização actual na lista.</translation>
    </message>
    <message>
        <source>Update this favorite: Update the favorite using current settings.</source>
        <translation>Actualize este favorito: Actualiza o favorito usando as configurações actuais.</translation>
    </message>
    <message>
        <source>Remove this favorites: Remove the favorite from the list</source>
        <translation>Remover este favorito: Remover o favorito da lista</translation>
    </message>
    <message>
        <source>The list of the favourite: Use a favorite to fill the dialog box fields.</source>
        <translation>A lista dos favoritos: Use um dos favoritos para preencher os campos da caixa de diálogo.</translation>
    </message>
    <message>
        <source>Friendly address</source>
        <translation>Endereço amigável</translation>
    </message>
    <message>
        <source>Enter the address in a more readable form. This form will be used to display the marker.</source>
        <translation>Digite o endereço de uma forma mais legível. Esta forma será utilizado para visualizar o marcador.</translation>
    </message>
    <message>
        <source>Friendly name</source>
        <translation>Nome amigável</translation>
    </message>
    <message>
        <source>Enter a name for this location. This name will be used to display the marker.</source>
        <translation>Digite um nome para este local. Este nome será utilizado para visualizar o marcador.</translation>
    </message>
    <message>
        <source>Icon</source>
        <translation>Ícone</translation>
    </message>
    <message>
        <source>Select an image to be used as icon to display the marker.</source>
        <translation>Seleccionar uma imagem para ser utilizada como um ícone para exibir o marcador.</translation>
    </message>
    <message>
        <source> Click on the icon zone or on the </source>
        <translation>Clique no ícone de zona ou no</translation>
    </message>
    <message>
        <source> button to select an image and edit it.</source>
        <translation>botão para selecionar uma imagem e editá-la.</translation>
    </message>
    <message>
        <source> Click on this </source>
        <translation>Clique neste </translation>
    </message>
    <message>
        <source> button to clear the icon.</source>
        <translation>botão para limpar o ícone.</translation>
    </message>
    <message>
        <source>Map zone</source>
        <translation>Mapa da zona</translation>
    </message>
    <message>
        <source>Click on a point on the map zone to select it.</source>
        <translation>Clique sobre um ponto da zona para selecioná-lo.</translation>
    </message>
    <message>
        <source>You can also use the slider and the </source>
        <translation>Você também pode usar o controle deslizante e o</translation>
    </message>
    <message>
        <source> and </source>
        <translation>e</translation>
    </message>
    <message>
        <source> buttons to modify the zoom level.</source>
        <translation>botões para modificar o nível de zoom.</translation>
    </message>
</context>
<context>
    <name>0124</name>
    <message>
        <source>Cut a sound file</source>
        <translation>Corte dum ficheiro de som</translation>
    </message>
    <message>
        <source>This dialog allows you to cut a sound file.</source>
        <translation>Esta caixa de diálogo permite que você corte um arquivo de som.</translation>
    </message>
    <message>
        <source>The progress bar</source>
        <translation>A barra de progresso</translation>
    </message>
    <message>
        <source>Displays as follows: </source>
        <translation>Exibe o seguinte:</translation>
    </message>
    <message>
        <source>The ruler representing the duration of the sound file is dispayed under a black background. Remark than the length of the ruler is increased in proportion to the duration of the sound file.</source>
        <translation>A régua que representa a duração do arquivo de som é exibida sob um fundo preto. Observação: o comprimento da régua é aumentada em proporção com a duração do ficheiro de som.</translation>
    </message>
    <message>
        <source>The blue part, on wave form and ruler, represents the part of the sound file which is selected (which will be used in the assembly).</source>
        <translation>A parte azul, na forma de onda e régua, representa a parte do arquivo de som que é seleccionado (que serão utilizados na montagem).</translation>
    </message>
    <message>
        <source> This button starts playback. Click again on this button to pause. </source>
        <translation>Este botão inicia a reprodução. Clique novamente neste botão para fazer uma pausa.</translation>
    </message>
    <message>
        <source>You can move with the mouse the </source>
        <translation>Você pode mover com o rato o</translation>
    </message>
    <message>
        <source> handle, on the progress bar, to move the current position</source>
        <translation>manusear, na barra de progresso, para mover a posição actual</translation>
    </message>
    <message>
        <source>You can move with the mouse the two </source>
        <translation>Você pode mover com o rato os dois</translation>
    </message>
    <message>
        <source> and </source>
        <translation>e</translation>
    </message>
    <message>
        <source> handles, on the progress bar, to move the Start and End positions</source>
        <translation>manusear, na barra de progresso, para mover para as posições Inicial e Final</translation>
    </message>
    <message>
        <source>The working range</source>
        <translation>A faixa de trabalho</translation>
    </message>
    <message>
        <source> Positions the cursor at the starting point</source>
        <translation>Posiciona o cursor no ponto de partida</translation>
    </message>
    <message>
        <source> Uses the current cursor position as starting point (carries out an edit)</source>
        <translation>Usa a posição actual do cursor como ponto de partida (realiza um edit)</translation>
    </message>
    <message>
        <source> Positions the cursor at the end point</source>
        <translation>Posiciona o cursor no ponto final</translation>
    </message>
    <message>
        <source> Uses the current cursor position as end point (carries out an edit)</source>
        <translation>Usa a posição actual do cursor como ponto final (realiza um edit)</translation>
    </message>
    <message>
        <source>The wave form of the sound is displayed under a white background.</source>
        <translation>A forma de onda do do som é exibida sob um fundo branco.</translation>
    </message>
</context>
<context>
    <name>QHP</name>
    <message>
        <source>How ffDiaporama works</source>
        <translation>Como trabalha ffDiaporama</translation>
    </message>
    <message>
        <source>Functional principles</source>
        <translation>Princípios funcionais</translation>
    </message>
    <message>
        <source>The Visible property of blocks and the management of the breaks</source>
        <translation>A propriedade &quot;Visível&quot; dos blocos e a gestão das pausas</translation>
    </message>
    <message>
        <source>All shots regulations versus current shot regulations</source>
        <translation>Regras “Todas os disparos” versus “Disparo actual”</translation>
    </message>
    <message>
        <source>Style sheets</source>
        <translation>Folhas de estilo</translation>
    </message>
    <message>
        <source>Interface description</source>
        <translation>Interface - Descrição</translation>
    </message>
    <message>
        <source>The main window</source>
        <translation>A janela principal</translation>
    </message>
    <message>
        <source>The toolbar</source>
        <translation>A barra de ferramentas</translation>
    </message>
    <message>
        <source>The timeline</source>
        <translation>A linha do tempo</translation>
    </message>
    <message>
        <source>The multimedia file browser</source>
        <translation>O navegador de arquivos multimédia</translation>
    </message>
    <message>
        <source>Rendering videos</source>
        <translation>Renderização de vídeos</translation>
    </message>
    <message>
        <source>Smartphones and tablets</source>
        <translation>Smartphones e tablets</translation>
    </message>
    <message>
        <source>Portable devices</source>
        <translation>Dispositivos portáteis</translation>
    </message>
    <message>
        <source>Multimedia system (Home cinema)</source>
        <translation>Sistema multimédia (cinema em casa)</translation>
    </message>
    <message>
        <source>For the WEB</source>
        <translation>Para a WEB</translation>
    </message>
    <message>
        <source>Video codec</source>
        <translation>Codec de vídeo</translation>
    </message>
    <message>
        <source>Audio codec</source>
        <translation>Codec de áudio</translation>
    </message>
    <message>
        <source>Containers</source>
        <translation>Recipiente</translation>
    </message>
    <message>
        <source>Video standards and resolutions</source>
        <translation>Padrões de vídeo e resoluções</translation>
    </message>
    <message>
        <source>Technical information on ffDiaporama</source>
        <translation>Informações técnicas sobre ffDiaporama</translation>
    </message>
    <message>
        <source>ffDiaporama command line arguments</source>
        <translation>Argumentos de linha de comando ffDiaporama</translation>
    </message>
    <message>
        <source>ffDiaporama project files</source>
        <translation>Arquivos de projecto ffDiaporama</translation>
    </message>
    <message>
        <source>The configuration files for ffDiaporama</source>
        <translation>Os arquivos de configuração para o ffDiaporama</translation>
    </message>
    <message>
        <source>Dialog boxes</source>
        <translation>Caixas de diálogo</translation>
    </message>
    <message>
        <source>Application options</source>
        <translation>Opções da aplicação</translation>
    </message>
    <message>
        <source>Manage devices</source>
        <translation>Gerir dispositivos</translation>
    </message>
    <message>
        <source>Welcome to the ffDiaporama WIKI</source>
        <translation>Bem vindo ao WIKI do ffDiaporama</translation>
    </message>
    <message>
        <source>File attachments (Thumbnails, nfo, etc...)</source>
        <translation>Ficheiros anexados (Miniaturas, nfo, etc...)</translation>
    </message>
    <message>
        <source>XBMC nfo files</source>
        <translation>Ficheiros XBMC nfo</translation>
    </message>
    <message>
        <source>Add or modify a predefined title slide</source>
        <translation>Adicionar ou modificar um slide de título predefinido</translation>
    </message>
    <message>
        <source>Background properties</source>
        <translation>Propriedades do fundo</translation>
    </message>
    <message>
        <source>Chapter properties</source>
        <translation>Propriedades do Capítulo</translation>
    </message>
    <message>
        <source>Check configuration</source>
        <translation>Verificar a configuração</translation>
    </message>
    <message>
        <source>Export project</source>
        <translation>Exportar projecto</translation>
    </message>
    <message>
        <source>Project properties</source>
        <translation>Projecto - propriedades</translation>
    </message>
    <message>
        <source>Select files</source>
        <translation>Selecione os arquivos</translation>
    </message>
    <message>
        <source>Correct, reframe or cut image or video</source>
        <translation>Corrigir, reenquadrar ou cortar imagem ou vídeo</translation>
    </message>
    <message>
        <source>File information</source>
        <translation>Informações do ficheiro</translation>
    </message>
    <message>
        <source>Manage favorite</source>
        <translation>Gerir favoritos</translation>
    </message>
    <message>
        <source>Manage style</source>
        <translation>Gerir estilos</translation>
    </message>
    <message>
        <source>Music properties</source>
        <translation>Propriedades da música</translation>
    </message>
    <message>
        <source>Render video</source>
        <translation>Renderização de vídeos</translation>
    </message>
    <message>
        <source>Ruler properties</source>
        <translation>Propriedades das réguas</translation>
    </message>
    <message>
        <source>Edit thumbnail model</source>
        <translation>Editar modelo de miniaturas</translation>
    </message>
    <message>
        <source>Set first shot duration for a set of slides</source>
        <translation>Define a duração do primeiro disparo para um conjunto de slides</translation>
    </message>
    <message>
        <source>Slide properties</source>
        <translation>Propriedades dos slides</translation>
    </message>
    <message>
        <source>Edit text</source>
        <translation>Editar texto</translation>
    </message>
    <message>
        <source>Select transition duration for a set of slides</source>
        <translation>Selecione duração da transição para um conjunto de slides</translation>
    </message>
    <message>
        <source>Transition properties</source>
        <translation>Propriedades das transições</translation>
    </message>
    <message>
        <source>Dynamic variables</source>
        <translation>Variáveis dinâmicas</translation>
    </message>
    <message>
        <source>Predefined title slide</source>
        <translation>Titulos de slides pré-definidos</translation>
    </message>
    <message>
        <source>Configuration dialog boxes</source>
        <translation>Caixas de diálogo de configuração</translation>
    </message>
    <message>
        <source>Editing dialog boxes</source>
        <translation>Edição de caixas de diálogo</translation>
    </message>
    <message>
        <source>Dialog boxes related to the project</source>
        <translation>Caixas de diálogo relacionados com o projecto</translation>
    </message>
    <message>
        <source>Various dialog boxes</source>
        <translation>Várias caixas de diálogo</translation>
    </message>
    <message>
        <source>Types of objects in ffDiaporama</source>
        <translation>Tipos de objectos no ffDiaporama</translation>
    </message>
    <message>
        <source>Add or modify a location</source>
        <translation>Adicionar ou modificar uma localização</translation>
    </message>
    <message>
        <source>Cut a sound file</source>
        <translation>Corte dum ficheiro de som</translation>
    </message>
</context>
<context>
    <name>main</name>
    <message>
        <source>Welcome to the ffDiaporama WIKI</source>
        <translation>Bem vindo ao WIKI do ffDiaporama</translation>
    </message>
    <message>
        <source>How ffDiaporama works</source>
        <translation>Como trabalha ffDiaporama</translation>
    </message>
    <message>
        <source>Interface description</source>
        <translation>Interface - Descrição</translation>
    </message>
    <message>
        <source>Rendering videos</source>
        <translation>Renderização de vídeos</translation>
    </message>
    <message>
        <source>Technical information on ffDiaporama</source>
        <translation>Informações técnicas sobre ffDiaporama</translation>
    </message>
    <message>
        <source>ffDiaporama Web site</source>
        <translation>Site web do ffDiaporama</translation>
    </message>
    <message>
        <source>Finally, you&apos;ll also find help on the </source>
        <translation>Finalmente, você também pode encontrar ajuda no</translation>
    </message>
    <message>
        <source>ffDiaporama forum</source>
        <translation>Forum ffDiaporama</translation>
    </message>
    <message>
        <source>Other elements of documentation are available on the </source>
        <translation>Outros elementos de documentação estão disponiveis no</translation>
    </message>
    <message>
        <source>This documentation is divided into the followed themes:</source>
        <translation>Esta documentação está dividida nos seguintes temas:</translation>
    </message>
</context>
</TS>
