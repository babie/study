// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__13962_13976 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13963_13977 = null;
var count__13964_13978 = (0);
var i__13965_13979 = (0);
while(true){
if((i__13965_13979 < count__13964_13978)){
var f_13980 = cljs.core._nth.call(null,chunk__13963_13977,i__13965_13979);
cljs.core.println.call(null,"  ",f_13980);

var G__13981 = seq__13962_13976;
var G__13982 = chunk__13963_13977;
var G__13983 = count__13964_13978;
var G__13984 = (i__13965_13979 + (1));
seq__13962_13976 = G__13981;
chunk__13963_13977 = G__13982;
count__13964_13978 = G__13983;
i__13965_13979 = G__13984;
continue;
} else {
var temp__4425__auto___13985 = cljs.core.seq.call(null,seq__13962_13976);
if(temp__4425__auto___13985){
var seq__13962_13986__$1 = temp__4425__auto___13985;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13962_13986__$1)){
var c__7592__auto___13987 = cljs.core.chunk_first.call(null,seq__13962_13986__$1);
var G__13988 = cljs.core.chunk_rest.call(null,seq__13962_13986__$1);
var G__13989 = c__7592__auto___13987;
var G__13990 = cljs.core.count.call(null,c__7592__auto___13987);
var G__13991 = (0);
seq__13962_13976 = G__13988;
chunk__13963_13977 = G__13989;
count__13964_13978 = G__13990;
i__13965_13979 = G__13991;
continue;
} else {
var f_13992 = cljs.core.first.call(null,seq__13962_13986__$1);
cljs.core.println.call(null,"  ",f_13992);

var G__13993 = cljs.core.next.call(null,seq__13962_13986__$1);
var G__13994 = null;
var G__13995 = (0);
var G__13996 = (0);
seq__13962_13976 = G__13993;
chunk__13963_13977 = G__13994;
count__13964_13978 = G__13995;
i__13965_13979 = G__13996;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_13997 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6789__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6789__auto__)){
return or__6789__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_13997);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_13997)))?cljs.core.second.call(null,arglists_13997):arglists_13997));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__13966 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13967 = null;
var count__13968 = (0);
var i__13969 = (0);
while(true){
if((i__13969 < count__13968)){
var vec__13970 = cljs.core._nth.call(null,chunk__13967,i__13969);
var name = cljs.core.nth.call(null,vec__13970,(0),null);
var map__13971 = cljs.core.nth.call(null,vec__13970,(1),null);
var map__13971__$1 = ((((!((map__13971 == null)))?((((map__13971.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13971.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13971):map__13971);
var doc = cljs.core.get.call(null,map__13971__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__13971__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__13998 = seq__13966;
var G__13999 = chunk__13967;
var G__14000 = count__13968;
var G__14001 = (i__13969 + (1));
seq__13966 = G__13998;
chunk__13967 = G__13999;
count__13968 = G__14000;
i__13969 = G__14001;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__13966);
if(temp__4425__auto__){
var seq__13966__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13966__$1)){
var c__7592__auto__ = cljs.core.chunk_first.call(null,seq__13966__$1);
var G__14002 = cljs.core.chunk_rest.call(null,seq__13966__$1);
var G__14003 = c__7592__auto__;
var G__14004 = cljs.core.count.call(null,c__7592__auto__);
var G__14005 = (0);
seq__13966 = G__14002;
chunk__13967 = G__14003;
count__13968 = G__14004;
i__13969 = G__14005;
continue;
} else {
var vec__13973 = cljs.core.first.call(null,seq__13966__$1);
var name = cljs.core.nth.call(null,vec__13973,(0),null);
var map__13974 = cljs.core.nth.call(null,vec__13973,(1),null);
var map__13974__$1 = ((((!((map__13974 == null)))?((((map__13974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13974):map__13974);
var doc = cljs.core.get.call(null,map__13974__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__13974__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__14006 = cljs.core.next.call(null,seq__13966__$1);
var G__14007 = null;
var G__14008 = (0);
var G__14009 = (0);
seq__13966 = G__14006;
chunk__13967 = G__14007;
count__13968 = G__14008;
i__13969 = G__14009;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map