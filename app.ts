import HTMLVisualizationWrapper from './lib/visualizations/html/htmlvisualizationwrapper'
import Table from './lib/visualizations/html/table'

const badFitData = [
    [0.2, 0.3855589773275536],
    [0.20469321227319684, 0.29619549231469894],
    [0.2125411694499215, 0.26365444686702194],
    [0.20166314525953558, 0.27800921682261853],
    [0.22734413092320688, 0.4351782197065447],
    [0.227329921285034, 0.342468191227314],
    [0.23142009181375278, 0.33106366913870977],
    [0.24271025756434567, 0.36189323698355336],
    [0.2707430044254625, 0.35649744914144343],
    [0.30382571880628423, 0.3015936449389493],
    [0.2863899581788569, 0.2786632510138],
    [0.32137911421230136, 0.30691055068292317],
    [0.24863159889049624, 0.3834544853784207],
    [0.2699780962587803, 0.33223698997740037],
    [0.25338712912512096, 0.3526739489874487],
    [0.2852202577020045, 0.349806969307322],
    [0.3007855903190227, 0.2940639970062974],
    [0.33358194094185234, 0.2707306722454057],
    [0.31095797118162205, 0.25431333146036905],
    [0.214612038527819, 0.29608688144606676],
    [0.28467689287309195, 0.2787841412664001],
    [0.25187506838383805, 0.2596679375217161],
    [0.27986851678283403, 0.2519962341207967],
    [0.23421078635424195, 0.24638278215569517],
    [0.25467088409074395, 0.23777013326109803],
    [0.3353699645903755, 0.22030122232670193],
    [0.24250249570494278, 0.23142591232108975],
    [0.3241760539240153, 0.18828723489583385],
    [0.3221786983898899, 0.17982797422144983],
    [0.3062755244348596, 0.172003856629373],
    [0.45, 0.8496217301291247],
    [0.45687104797242706, 0.8660085783587174],
    [0.458987698883729, 0.9518392518658408],
    [0.4915690950901718, 0.9067689587468554],
    [0.47396412337744664, 0.8840232985243738],
    [0.4685330272791581, 0.8010446807890147],
    [0.5137365646751049, 0.9685692898376618],
    [0.5251892741089763, 0.8662860175000019],
    [0.5465504103251524, 0.851355978364974],
    [0.5333522930149958, 0.957362171273856],
    [0.4623199589833904, 0.8876469479973172],
    [0.4550984048988272, 0.8169959497517688],
    [0.5788866787443299, 0.8758345594065754],
    [0.49820594797332124, 0.8664399619936739],
    [0.4518094751327719, 0.8204705983841019],
    [0.5722138103955774, 0.8335010982924083],
    [0.522373895464376, 0.835636242300468],
    [0.6018965878106006, 0.8738605128551101],
    [0.628763532042242, 0.8032856499571208],
    [0.5102073602569284, 0.8039998969377609],
    [0.4818698739645516, 0.8346063383776013],
    [0.4748247960935448, 0.8117539231116141],
    [0.48566479515534605, 0.8030786071383471],
    [0.48454907314356105, 0.7938465507565989],
    [0.6377643178798771, 0.7962204005041699],
    [0.6418509273343889, 0.7686476628918218],
    [0.6277459862210375, 0.7538838982363656],
    [0.5003981324332384, 0.7626733261982481],
    [0.46192527085832885, 0.7619761224814242],
    [0.4579577280949071, 0.7849000901459097],
    [0.8, 0.4279143683955642],
    [0.8062037701798334, 0.4315137559330045],
    [0.8231255890251522, 0.4320223697349154],
    [0.8187171365695176, 0.2619298910630798],
    [0.8279378843002388, 0.40087864626844083],
    [0.84967257406232, 0.3259589204647009],
    [0.8482751733093256, 0.39158819855228133],
    [0.845791103968863, 0.3257502515158275],
    [0.8054199345972308, 0.4157097219431013],
    [0.8109602215502829, 0.27678195673048284],
    [0.8530907658510634, 0.28942885064024754],
    [0.9070967471212193, 0.28666790568799844],
    [0.8303783822426251, 0.3715384078305027],
    [0.8409033914472358, 0.35964923338088894],
    [0.9088063788092889, 0.3132647557750296],
    [0.8514587761564585, 0.3420956637298256],
    [0.8600654971680634, 0.2614376541035677],
    [0.8492572875671198, 0.2560074669117127],
    [0.9854730010562329, 0.2774616967200647],
    [0.9327427773510821, 0.28063660184504685],
    [0.8386396148043288, 0.28099917153832293],
    [0.9302451938383295, 0.2538254630471668],
    [0.8592541899501716, 0.2500261930259018],
    [0.8003879636746576, 0.24370485345994464],
    [0.8799482995792158, 0.24164295471563965],
    [0.8205864868978753, 0.2354561599037827],
    [0.8787209077672181, 0.2364873095012119],
    [0.8634576387580543, 0.2365106828441001],
    [0.9414119852293753, 0.23450585495211695],
    [0.8456054927662564, 0.24553922825334515]
]
const badTestData = [
    [0.2, 0.3074193560071877],
    [0.20046639377596503, 0.29579092373852917],
    [0.45, 0.9607292985700817],
    [0.45073247024749946, 0.8502143981999226],
    [0.8, 0.3001817394421715],
    [0.800883361445401, 0.2796184283045493]
]

const badCentroids = [
    [0.5016669685251278, 0.8144093460566045],
    [0.5051422253854481, 0.2583639093353909],
    [0.38681199729328225, 0.7874221334227902]
]
;(async () => {
    // const lab = new Lab('tables')
    // try {
    //     await lab.connected
    // } catch (err) {
    //     console.log('Unable to connect to lab...')
    // }

    const vis1 = new HTMLVisualizationWrapper(new Table({}), 'table-plot', false)
    await vis1.setup()

    const data: any[] = []
    badFitData.forEach((point: any) => data.push({ x: point[0], y: point[1], color: '#FF0000' }))
    badCentroids.forEach((point: any) => data.push({ x: point[0], y: point[1], color: '#00FF00' }))
    badTestData.forEach((point: any) => data.push({ x: point[0], y: point[1], color: '#0000FF' }))

    await vis1.dataUpdate(data)
})()
