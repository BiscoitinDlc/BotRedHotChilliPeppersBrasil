bot = '[RHCP Brazil]'
v = '5.0'
vbot = '[RHCP Brazil 5.0]'
autor = 'Biiscoitao'
API.sendChat(vbot + " Bot iniciado com sucesso!")

function msc(music){
var media = API.getMedia();
API.sendChat(bot + " Tocando:" + media.author + " - " + media.title)
}

function usrjn(userjoin){
  API.sendChat(bot + " Seja bem-vindo(a) a o Plugdj Ehaqui! " + userjoin.username)
}
function cmds(cmd){
  var id=cmd.uid;
  var msg=cmd.message;
  var perm=API.getUser(id).role;
  var use=API.getUser(id);
  if(msg=="!bot"){
    API.sendChat(vbot + " Bot criado por " + autor)
  }
  if(msg=="!biscoito"){
      API.sendChat(bot + " È Bolacha!")
  }
  if(msg=="!pular"){
    if(perm >= 2){
      API.sendChat(bot + " Sua musica foi pulada!")
      API.moderateForceSkip();
    }else{
      API.sendChat(bot + " Permissão insuficiente!")
    }
  }
  if(msg=="!v"){
    API.sendChat(bot + " " + v + " beta.")
  }
  if(msg=="!jooj"){
    API.sendChat(bot + " Um bom jooj para você " + use.username + "!" )
  }
   if(msg=="!cookie"){
      API.sendChat(bot + " Tome seu cookie! " + use.username + "!" )
  }   
   if(msg=="!boli"){
      API.sendChat(bot + " Boliiiiiii")
  }  
   if(msg=="!pimba"){
      API.sendChat(bot + " Cachaça pimba feat: DavaJonas")      
  }                 
   if(msg=="!bolacha"){
      API.sendChat(bot + " È Biscoito!")
  }   
   if(msg=="!chapolin"){
      API.sendChat(bot + " Não contavam com minha astúcia!")
  }  
   if(msg=="!monstro"){
      API.sendChat(bot + " Birllll!")
  }   
   if(msg=="!porno"){
      API.sendChat(bot + " redtube.com Seu punheteiro do crlh")
  }   
   if(msg=="!site"){
      API.sendChat(bot + " ehaqui.com")     
  }   
   if(msg=="!ovo"){
      API.sendChat(bot + " Você destruiu meu ovo!")
  }   
   if(msg=="!darth"){
      API.sendChat(bot + " Eu sou seu pai")
  }   
   if(msg=="!lava"){
      API.sendChat(bot + " agua!")
  }   
   if(msg=="!kpop"){
      API.sendChat(bot + " 몬스타엑스 Quer dizer gostei desse!")     
  }   
   if(msg=="!autowoot"){
      API.sendChat(bot + " http://pastebin.com/gyzZHU8R")      
  }   
   if(msg=="!cafe"){
      API.sendChat(bot + " QUERO CAFÈ! " + use.username + "!" )
  }   
   if(msg=="!ponei"){
      API.sendChat(bot + " Te quiero @ " + use.username + "!" )
  }   
   if(msg=="!ping"){
      API.sendChat(bot + " pong!")
  }   
   if(msg=="!pong"){
      API.sendChat(bot + " ping!")     
  } 
    if(msg=="!californication"){
      API.sendChat(bot + " is californiqueixon")
  }   
    if(msg=="!temdecarne"){
      API.sendChat(bot + " Hm? Hm? Hm?!")      
  } 
     if(msg=="!edelinguiça"){
      API.sendChat(bot + " HM HM HM HM HM!")      
  }   
   if(msg=="!forninho"){
      API.sendChat(bot + " O Forninho caiu!")     
  }   
   if(msg=="!pao"){
      API.sendChat(bot + " E morreu")     
  }   
   if(msg=="!peça"){
      API.sendChat(bot + " È essa peça que você queria " + use.username + "?" )  
  }    
   if(msg=="!pingu"){
      API.sendChat(bot + use.username + " È um penguim anão " )     
  }   
   if(msg=="!peppa"){
      API.sendChat(bot + " BACON!!!")      
  }  
   if(msg=="!jailson"){
      API.sendChat(bot + " QUE DELICIA " + use.username + "!" )     
  }   
   if(msg=="!musica"){
   var media = API.getMedia();
   API.sendChat(bot + " Tocando:" + media.author + " - " + media.title)    
  }
   if(msg=="!agua"){
      API.sendChat(bot + " Lava!")
  }  
   if(msg=="!autowoot"){
      API.sendChat(bot + " http://pastebin.com/gyzZHU8R")          
  }   
   if(msg=="!lag"){
      API.sendChat(bot + " O ehaqui tem lag, esse bot não e.e")     
  }
   if(msg=="!fogo"){
      API.sendChat(bot + " Tá pegando fogo bicho!")   
  }   
   if(msg=="!FUSRODAH"){
      API.sendChat(bot + " DAHROFUS!")        
  }   
   if(msg=="!comandos"){
      API.sendChat(bot + "!bot, !biscoito, !v, !jooj, !cookie, !boli, !bolacha, !chapolin, !monstro, !ovo, !darth, !lava, !ping, !musica, !agua, !lag, !fogo, !FUSROHDAH, !jailson, !cafe, !peppa, !pingu, !peça, !ponei, !pao, !kpop, !autowoot, !porno, !temdecarne, !edelinguiça, !californication")
  }
  }

API.on(API.HISTORY_UPDATE,msc);
API.on(API.USER_JOIN,usrjn);
API.on(API.CHAT,cmds);
API.moderateMuteUser(userID, reason, duration)
