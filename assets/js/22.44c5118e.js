(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{344:function(t,s,a){"use strict";a.r(s);var n=a(33),p=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"关键路径算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关键路径算法"}},[t._v("#")]),t._v(" 关键路径算法")]),t._v(" "),a("p",[t._v("转载自: https://www.jianshu.com/p/1857ed4d8128")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/Cooohooo/cary-notebook-image/master/images/g1.png",alt:"g1"}})]),t._v(" "),a("p",[t._v("如上图，是一个 AOE 网，点表示状态，边表示活动及其所需要的时间。为了求出关键路径，我们使用一下算法：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("关键路径通常是所有工程活动中最长的路径，关键路径上的活动如果延期将直接导致工程延期。\n")])])]),a("h2",{attrs:{id:"求出到达各个状态的最早时间（按最大计）-etv"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#求出到达各个状态的最早时间（按最大计）-etv"}},[t._v("#")]),t._v(" 求出到达各个状态的最早时间（按最大计）[etv]")]),t._v(" "),a("p",[a("em",[t._v("etv：（earlist time of vertex）即顶点 vk 的最早发生时间")]),t._v(" "),a("br")]),t._v(" "),a("p",[t._v("这个过程是要从源点开始向汇点顺推：")]),t._v(" "),a("ul",[a("li",[t._v("V1 是源点，其最早开始时间是 0。")]),t._v(" "),a("li",[t._v("V2、V3、V4 最早时间分别是是 6、4、5。")]),t._v(" "),a("li",[t._v("对于 V5 而言，V2 到 V5 所花费时间是 6+1=7，而 V3 到 V5 所花费时间是 4+1=5。我们要按最大计，也就是 V5 最早时间是 max{7,5}=7，按最大计是因为只有活动 a4 和 a5 同时完成了，才能到达 V5 状态。V3 到 V5 需要 5 分钟，但是此时 a4 活动尚未完成（7 分钟），所以都不能算到达 V5，故而要按最大计。")]),t._v(" "),a("li",[t._v("V6 只有从 V4 到达，所以 V6 的最早完成时间是（5+2=）7。")]),t._v(" "),a("li",[t._v("同理，V7 最早完成时间是 16。")]),t._v(" "),a("li",[t._v("对于 V8 而言，和 V5 处理方法一致。V8=max{V5+7,V6+4}={7+7,7+4}=14。")]),t._v(" "),a("li",[t._v("V9 可算出是 18。")])]),t._v(" "),a("p",[t._v("这样，我们可以得到各个状态的最早时间的表：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/Cooohooo/cary-notebook-image/master/images/g2.png",alt:"g2"}})]),t._v(" "),a("ol",[a("li",[t._v("求出到达各个状态的最晚时间（按最小计）[ltv]")])]),t._v(" "),a("p",[a("em",[t._v("ltv：（lastest time of vertex）即顶点 vk 的最晚发生时间")]),t._v(" "),a("br")]),t._v(" "),a("p",[t._v("这个过程是要从汇点开始向源点逆推：")]),t._v(" "),a("ol",[a("li",[t._v("V9 完成时间为 18，最 V7 最迟开始时间是（18-2=）16")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/Cooohooo/cary-notebook-image/master/images/g3.png",alt:"g3"}})]),t._v(" "),a("p",[t._v("因为活动 a10 所需时间 2。如果 V7 开始时间比 16 晚，则 V9 完成时间就会比 18 晚，这显然不对。")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[t._v("同理，V8 最迟开始时间为 14")])]),t._v(" "),a("li",[a("p",[t._v("对于 V5 而言，可以从 V7、V8 两个点开始向前推算，此时要按最小计，即 V5(最晚)=min{V7-9,V8-7}=min{16-9,14-7}=7 请注意！！，min{V7-9,V8-7}中，V7、V8 取的都是前面算出的最迟开始时间（而不是最早开始时间）")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/Cooohooo/cary-notebook-image/master/images/g4.png",alt:"g4"}})]),t._v(" "),a("p",[t._v("按最小计，是因为如果按最大计去计算 V5 的最晚开始时间，那么加上 a7 和 a8 的活动时间后，V7、V8 至少有一个会比之前逆推算得出的最晚时间还要晚，这就发生了错误")]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("同理，可计算出剩下的点\n"),a("br"),t._v("这样，我们可以得到各个状态的最晚时间的表：")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/Cooohooo/cary-notebook-image/master/images/g5.png",alt:"g5"}})]),t._v(" "),a("p",[t._v("事实上，源点和汇点的最晚时间和最早时间必定是相同的。")]),t._v(" "),a("h2",{attrs:{id:"求出关键路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#求出关键路径"}},[t._v("#")]),t._v(" 求出关键路径")]),t._v(" "),a("p",[t._v("求出关键活动，则关键活动所在路径即为关键路径")]),t._v(" "),a("ul",[a("li",[t._v("对于 a1：")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/Cooohooo/cary-notebook-image/master/images/g6.png",alt:"g6"}})]),t._v(" "),a("p",[t._v("这表明，a1 最早只能从 0 时刻开始，最晚也只能从（6-6=）0 时刻开始，因此，a1 是关键活动。")]),t._v(" "),a("ul",[a("li",[t._v("对于 a2：")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/Cooohooo/cary-notebook-image/master/images/g7.png",alt:"g7"}})]),t._v(" "),a("p",[t._v("a2 最早要从 0 时刻开始，但是它最晚开始时间却是（6-4=）2。也就是说，从 0 开始做，4 时刻即完成；从 2 开始做，6 时刻恰好完成。从而在[0,2]区间内任意时间开始做 a2 都能保证按时完成。（"),a("strong",[t._v("请区别顶点的最早最晚和活动的最早最晚时间")]),t._v("。图示中的最早最晚是顶点状态的时间，"),a("font",{attrs:{color:"red"}},[t._v(" 活动的最早最晚开始时间却是基于此来计算的")]),t._v("）"),a("br")],1),t._v(" "),a("p",[t._v("由于 a2 的开始时间是不定的，所以它不能主导工程的进度，从而它不是关键活动"),a("br")]),t._v(" "),a("p",[t._v("一般的，")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/Cooohooo/cary-notebook-image/master/images/g8.png",alt:"g8"}})]),t._v(" "),a("p",[t._v("活动用时 X 时间，它最早要从 E1 时刻开始（一开始就开始），最晚要从 L2-X 时刻开始（即恰好完成）。所以，如果它是关键活动，则必然有 E1=L2-X，否则它就不是关键活动")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("值得注意的是，顶点的最早开始时间等于最晚开始时间 是 该顶点处于关键路径 的 不充分不必要条件。\n")])])]),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/Cooohooo/cary-notebook-image/master/images/g9.png",alt:"g9"}})]),t._v(" "),a("p",[t._v("上表中蓝色底纹表示的点即为处于关键路径的点。尽管它们的最早时间与最晚时间都相同，但是这与它们是否为关键路径的点无关。因为这还取决于起始点的最早时间以及活动时间。")]),t._v(" "),a("h2",{attrs:{id:"关键路径代码讲解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关键路径代码讲解"}},[t._v("#")]),t._v(" 关键路径代码讲解")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/Cooohooo/cary-notebook-image/master/images/g11.jpg",alt:"g11"}})]),t._v(" "),a("p",[t._v("我们以上图为例：")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//改进的拓扑排序，用于关键路径算法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" GraphData"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("TopoLogicalSortAdv")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GraphListAdv "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("pList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    EdgeNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" ncount "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//统计输出顶点个数，用于判断是否有环")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" nIndex "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// y用于保存度为0的坐标")]),t._v("\n    stack"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" staNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" pList"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("numVertess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pList"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("vertexList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("in "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            staNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//将入度为0的顶点入栈")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("memset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("veArray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("pList"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("numVertess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("staNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("empty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        nIndex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" staNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取入度为0的顶点")]),t._v("\n        staNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//出栈")]),t._v("\n        staEtv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//将弹出的顶点序号压入拓扑序列堆栈")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%c ->"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("pList"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("vertexList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("nIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nNodeData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//打印顶点")]),t._v("\n        ncount "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//对此顶点的处理：下一个顶点入度减1，如果为0还要进栈")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pList"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("vertexList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("nIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pFirstNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("e "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//对此顶点弧表遍历")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" temp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("nNodevex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//将temp号顶点邻接点的入度减1,若为0，则入栈，以便于下次循环输出")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("pList"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("vertexList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("temp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("in"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                staNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("temp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//求取各个顶点的事件最早发生时间。")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("veArray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("nIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("nNodeWeight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" veArray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("temp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                veArray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("temp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" veArray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("nIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("nNodeWeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ncount "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" pList"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("numVertess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" 图有内环"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//关键路径算法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" GraphData"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("CriticalPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GraphListAdv "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("pList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    EdgeNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("top"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" ete"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("lte"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("TopoLogicalSortAdv")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" pList"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("numVertess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        vlArray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" veArray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//初始化ltv")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("staEtv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("empty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        top "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" staEtv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        staEtv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pList"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("vertexList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("top"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pFirstNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("node "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" node"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            k "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" node"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("nNodevex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vlArray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" node"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("nNodeWeight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" vlArray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("top"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//求取顶点事件的最晚发生时间")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                vlArray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("top"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vlArray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" node"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("nNodeWeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//求取关键路径")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" pList"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("numVertess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pList"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("vertexList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pFirstNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("node "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" node"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            k "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" node"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("nNodevex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            ete "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" veArray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            lte "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vlArray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ete "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" lte"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<v%c,v%c> length: %d,  "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("pList"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("vertexList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nNodeData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("pList"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("vertexList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nNodeData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("nNodeWeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("创建拓扑序列堆栈 staEtv 是为了 反向从汇点到源点的最晚时间 ltv")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/Cooohooo/cary-notebook-image/master/images/g12.jpg",alt:"g12"}})]),t._v(" "),a("p",[t._v("因为 etv[9] = 27，所以当前 ltv 数组当前的值为 {27,27,27,27,27,27,27,27,27,27 }，接下来执行 ltv 的值计算，现将 staEtv 的栈头出栈，由后进先出得到 gettop = 9，根据邻接表中，v9 没有弧表，"),a("br")]),t._v(" "),a("p",[t._v("接着执行循环，gettop = 8，v8 的弧表只有一条<v8, v9>，得到 k = 9，因为 ltv[9] - 3 < ltv[8]，所以 ltv[8] = ltv[9] - 3 = 24，再次循环，gettop = 7，5，6 时，ltv 的值更新为{ 27,27,27,27,27,13,25,19,24,27 }，"),a("br")]),t._v(" "),a("p",[t._v("当 gettop = 4，由邻接表可知 v4 有两条弧<v4, v6> <v4, v7>，通过循环可以得到 ltv[4] = min(ltv[7] -4, ltv[6]-9) = min(19-4, 25-9) = 15 "),a("br")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/Cooohooo/cary-notebook-image/master/images/g13.jpg",alt:"g13"}})]),t._v(" "),a("p",[t._v("比如 etv[1] = 3，而 ltv[1] = 7，表示的意思就是如果时间单位是天的话，哪怕 v1 这个时间在第七天才开始，也可以保证整个工程的按时完成，你可以提前 v1 时间开始时间，但是你最早也只能第三天开始")])])}),[],!1,null,null,null);s.default=p.exports}}]);