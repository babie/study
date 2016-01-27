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
var seq__11899_11913 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11900_11914 = null;
var count__11901_11915 = (0);
var i__11902_11916 = (0);
while(true){
if((i__11902_11916 < count__11901_11915)){
var f_11917 = cljs.core._nth.call(null,chunk__11900_11914,i__11902_11916);
cljs.core.println.call(null,"  ",f_11917);

var G__11918 = seq__11899_11913;
var G__11919 = chunk__11900_11914;
var G__11920 = count__11901_11915;
var G__11921 = (i__11902_11916 + (1));
seq__11899_11913 = G__11918;
chunk__11900_11914 = G__11919;
count__11901_11915 = G__11920;
i__11902_11916 = G__11921;
continue;
} else {
var temp__4425__auto___11922 = cljs.core.seq.call(null,seq__11899_11913);
if(temp__4425__auto___11922){
var seq__11899_11923__$1 = temp__4425__auto___11922;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11899_11923__$1)){
var c__7592__auto___11924 = cljs.core.chunk_first.call(null,seq__11899_11923__$1);
var G__11925 = cljs.core.chunk_rest.call(null,seq__11899_11923__$1);
var G__11926 = c__7592__auto___11924;
var G__11927 = cljs.core.count.call(null,c__7592__auto___11924);
var G__11928 = (0);
seq__11899_11913 = G__11925;
chunk__11900_11914 = G__11926;
count__11901_11915 = G__11927;
i__11902_11916 = G__11928;
continue;
} else {
var f_11929 = cljs.core.first.call(null,seq__11899_11923__$1);
cljs.core.println.call(null,"  ",f_11929);

var G__11930 = cljs.core.next.call(null,seq__11899_11923__$1);
var G__11931 = null;
var G__11932 = (0);
var G__11933 = (0);
seq__11899_11913 = G__11930;
chunk__11900_11914 = G__11931;
count__11901_11915 = G__11932;
i__11902_11916 = G__11933;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_11934 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6789__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6789__auto__)){
return or__6789__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_11934);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_11934)))?cljs.core.second.call(null,arglists_11934):arglists_11934));
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
var seq__11903 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11904 = null;
var count__11905 = (0);
var i__11906 = (0);
while(true){
if((i__11906 < count__11905)){
var vec__11907 = cljs.core._nth.call(null,chunk__11904,i__11906);
var name = cljs.core.nth.call(null,vec__11907,(0),null);
var map__11908 = cljs.core.nth.call(null,vec__11907,(1),null);
var map__11908__$1 = ((((!((map__11908 == null)))?((((map__11908.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11908.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11908):map__11908);
var doc = cljs.core.get.call(null,map__11908__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__11908__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__11935 = seq__11903;
var G__11936 = chunk__11904;
var G__11937 = count__11905;
var G__11938 = (i__11906 + (1));
seq__11903 = G__11935;
chunk__11904 = G__11936;
count__11905 = G__11937;
i__11906 = G__11938;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__11903);
if(temp__4425__auto__){
var seq__11903__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11903__$1)){
var c__7592__auto__ = cljs.core.chunk_first.call(null,seq__11903__$1);
var G__11939 = cljs.core.chunk_rest.call(null,seq__11903__$1);
var G__11940 = c__7592__auto__;
var G__11941 = cljs.core.count.call(null,c__7592__auto__);
var G__11942 = (0);
seq__11903 = G__11939;
chunk__11904 = G__11940;
count__11905 = G__11941;
i__11906 = G__11942;
continue;
} else {
var vec__11910 = cljs.core.first.call(null,seq__11903__$1);
var name = cljs.core.nth.call(null,vec__11910,(0),null);
var map__11911 = cljs.core.nth.call(null,vec__11910,(1),null);
var map__11911__$1 = ((((!((map__11911 == null)))?((((map__11911.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11911.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11911):map__11911);
var doc = cljs.core.get.call(null,map__11911__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__11911__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__11943 = cljs.core.next.call(null,seq__11903__$1);
var G__11944 = null;
var G__11945 = (0);
var G__11946 = (0);
seq__11903 = G__11943;
chunk__11904 = G__11944;
count__11905 = G__11945;
i__11906 = G__11946;
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
