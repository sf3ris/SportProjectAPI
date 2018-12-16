-- MySQL dump 10.13  Distrib 5.7.24, for Linux (x86_64)
--
-- Host: %    Database: SportProjectDB
-- ------------------------------------------------------
-- Server version	5.7.24-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Temporary table structure for view `Elenco_Allenatori`
--

DROP TABLE IF EXISTS `Elenco_Allenatori`;
/*!50001 DROP VIEW IF EXISTS `Elenco_Allenatori`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `Elenco_Allenatori` AS SELECT 
 1 AS `IDIscritto`,
 1 AS `IDAllenatore`,
 1 AS `Nome`,
 1 AS `Cognome`,
 1 AS `DataNascita`,
 1 AS `LuogoNascita`,
 1 AS `CodiceFiscale`,
 1 AS `Indirizzo`,
 1 AS `Civico`,
 1 AS `CAP`,
 1 AS `Citta`,
 1 AS `Provincia`,
 1 AS `Sesso`,
 1 AS `Telefono`,
 1 AS `Email`,
 1 AS `IDFederazione`,
 1 AS `IDCategoria`,
 1 AS `Livello`,
 1 AS `Descrizione`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `Elenco_Appuntamenti`
--

DROP TABLE IF EXISTS `Elenco_Appuntamenti`;
/*!50001 DROP VIEW IF EXISTS `Elenco_Appuntamenti`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `Elenco_Appuntamenti` AS SELECT 
 1 AS `IDAppuntamento`,
 1 AS `Nome`,
 1 AS `Cognome`,
 1 AS `CodiceFiscale`,
 1 AS `Luogo`,
 1 AS `Data`,
 1 AS `IDAtleta`,
 1 AS `DataInserimento`,
 1 AS `Costo`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `Elenco_Atleti`
--

DROP TABLE IF EXISTS `Elenco_Atleti`;
/*!50001 DROP VIEW IF EXISTS `Elenco_Atleti`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `Elenco_Atleti` AS SELECT 
 1 AS `IDIscritto`,
 1 AS `IDAtleta`,
 1 AS `value`,
 1 AS `Nome`,
 1 AS `Cognome`,
 1 AS `DataNascita`,
 1 AS `label`,
 1 AS `LuogoNascita`,
 1 AS `CodiceFiscale`,
 1 AS `Indirizzo`,
 1 AS `Civico`,
 1 AS `CAP`,
 1 AS `Citta`,
 1 AS `Provincia`,
 1 AS `Sesso`,
 1 AS `Telefono`,
 1 AS `Email`,
 1 AS `IDFederazione`,
 1 AS `IDCategoria`,
 1 AS `StatoCertificato`,
 1 AS `StatoPagamento`,
 1 AS `InfoGenerale`,
 1 AS `InfoSalute`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `Elenco_Certificati`
--

DROP TABLE IF EXISTS `Elenco_Certificati`;
/*!50001 DROP VIEW IF EXISTS `Elenco_Certificati`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `Elenco_Certificati` AS SELECT 
 1 AS `IDCertificato`,
 1 AS `IDAtleta`,
 1 AS `Nome`,
 1 AS `Cognome`,
 1 AS `CodiceFiscale`,
 1 AS `IDAnnoSportivo`,
 1 AS `Descrizione`,
 1 AS `DataInizio`,
 1 AS `DataFine`,
 1 AS `IDAppuntamento`,
 1 AS `Esito`,
 1 AS `Note`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `Elenco_PagamentiTesseramento`
--

DROP TABLE IF EXISTS `Elenco_PagamentiTesseramento`;
/*!50001 DROP VIEW IF EXISTS `Elenco_PagamentiTesseramento`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `Elenco_PagamentiTesseramento` AS SELECT 
 1 AS `IDPagamentoTesseramentoAtleta`,
 1 AS `IDTesseramentoAtleta`,
 1 AS `Importo`,
 1 AS `Data`,
 1 AS `Tipo`,
 1 AS `IDAtleta`,
 1 AS `Nome`,
 1 AS `Cognome`,
 1 AS `CodiceFiscale`,
 1 AS `ImportoTotale`,
 1 AS `IDAnnoSportivo`,
 1 AS `AnnoSportivo`,
 1 AS `DataInizio`,
 1 AS `DataFine`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `Elenco_Promemoria`
--

DROP TABLE IF EXISTS `Elenco_Promemoria`;
/*!50001 DROP VIEW IF EXISTS `Elenco_Promemoria`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `Elenco_Promemoria` AS SELECT 
 1 AS `IDPromemoria`,
 1 AS `IDAppuntamento`,
 1 AS `Messaggio`,
 1 AS `IDUtente`,
 1 AS `IDAtleta`,
 1 AS `Luogo`,
 1 AS `Data`,
 1 AS `Costo`,
 1 AS `DataInserimento`,
 1 AS `Nome`,
 1 AS `Cognome`,
 1 AS `CodiceFiscale`,
 1 AS `Telefono`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `Elenco_ScadenzeTesseramento`
--

DROP TABLE IF EXISTS `Elenco_ScadenzeTesseramento`;
/*!50001 DROP VIEW IF EXISTS `Elenco_ScadenzeTesseramento`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `Elenco_ScadenzeTesseramento` AS SELECT 
 1 AS `IDTesseramentoAtleta`,
 1 AS `ImportoRata`,
 1 AS `DataInizio`,
 1 AS `DataFine`,
 1 AS `Descrizione`,
 1 AS `IDAtleta`,
 1 AS `Nome`,
 1 AS `Cognome`,
 1 AS `CodiceFiscale`,
 1 AS `IDScadenzaRataTesseramento`,
 1 AS `ImportoTotale`,
 1 AS `DataInserimento`,
 1 AS `DataScadenza`,
 1 AS `Mora`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `Elenco_Soci`
--

DROP TABLE IF EXISTS `Elenco_Soci`;
/*!50001 DROP VIEW IF EXISTS `Elenco_Soci`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `Elenco_Soci` AS SELECT 
 1 AS `IDIscritto`,
 1 AS `IDSOcio`,
 1 AS `Nome`,
 1 AS `Cognome`,
 1 AS `DataNascita`,
 1 AS `LuogoNascita`,
 1 AS `CodiceFiscale`,
 1 AS `Indirizzo`,
 1 AS `Civico`,
 1 AS `CAP`,
 1 AS `Citta`,
 1 AS `Provincia`,
 1 AS `Sesso`,
 1 AS `Telefono`,
 1 AS `Email`,
 1 AS `IDFederazione`,
 1 AS `IDCategoria`,
 1 AS `TipoSocio`,
 1 AS `StatoIscrizione`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `Elenco_Tesseramenti`
--

DROP TABLE IF EXISTS `Elenco_Tesseramenti`;
/*!50001 DROP VIEW IF EXISTS `Elenco_Tesseramenti`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `Elenco_Tesseramenti` AS SELECT 
 1 AS `IDTesseramentoAtleta`,
 1 AS `Importo`,
 1 AS `DataInizio`,
 1 AS `DataFine`,
 1 AS `IDAnnoSportivo`,
 1 AS `Descrizione`,
 1 AS `IDAtleta`,
 1 AS `Nome`,
 1 AS `Cognome`,
 1 AS `CodiceFiscale`,
 1 AS `IDFederazione`,
 1 AS `IDIscritto`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `Situazione_Pagamenti_Tesseramenti_Atleti`
--

DROP TABLE IF EXISTS `Situazione_Pagamenti_Tesseramenti_Atleti`;
/*!50001 DROP VIEW IF EXISTS `Situazione_Pagamenti_Tesseramenti_Atleti`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `Situazione_Pagamenti_Tesseramenti_Atleti` AS SELECT 
 1 AS `Descrizione`,
 1 AS `IDTesseramentoAtleta`,
 1 AS `IDAtleta`,
 1 AS `Nome`,
 1 AS `Cognome`,
 1 AS `CodiceFiscale`,
 1 AS `DataInizio`,
 1 AS `DataFine`,
 1 AS `ImportoTotaleTesseramento`,
 1 AS `IDScadenzaRataTesseramento`,
 1 AS `DataScadenza`,
 1 AS `Importo`,
 1 AS `importoPagato`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `Situazione_Scadenze_Tesseramenti_Atleti`
--

DROP TABLE IF EXISTS `Situazione_Scadenze_Tesseramenti_Atleti`;
/*!50001 DROP VIEW IF EXISTS `Situazione_Scadenze_Tesseramenti_Atleti`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `Situazione_Scadenze_Tesseramenti_Atleti` AS SELECT 
 1 AS `Descrizione`,
 1 AS `IDTesseramentoAtleta`,
 1 AS `IDAtleta`,
 1 AS `Nome`,
 1 AS `Cognome`,
 1 AS `CodiceFiscale`,
 1 AS `DataInizio`,
 1 AS `DataFine`,
 1 AS `ImportoTotaleTesseramento`,
 1 AS `IDScadenzaRataTesseramento`,
 1 AS `DataScadenza`,
 1 AS `Importo`,
 1 AS `importoPagato`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `Situazione_Tesseramenti_Atleti`
--

DROP TABLE IF EXISTS `Situazione_Tesseramenti_Atleti`;
/*!50001 DROP VIEW IF EXISTS `Situazione_Tesseramenti_Atleti`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `Situazione_Tesseramenti_Atleti` AS SELECT 
 1 AS `Descrizione`,
 1 AS `IDAtleta`,
 1 AS `Cognome`,
 1 AS `Nome`,
 1 AS `CodiceFiscale`,
 1 AS `IDTesseramentoAtleta`,
 1 AS `ImportoTotaleTesseramento`,
 1 AS `totalePagamenti`*/;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `Elenco_Allenatori`
--

/*!50001 DROP VIEW IF EXISTS `Elenco_Allenatori`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`sf3ris`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `Elenco_Allenatori` AS select `Iscritto`.`IDIscritto` AS `IDIscritto`,`A`.`IDAllenatore` AS `IDAllenatore`,`Iscritto`.`Nome` AS `Nome`,`Iscritto`.`Cognome` AS `Cognome`,`Iscritto`.`DataNascita` AS `DataNascita`,`Iscritto`.`LuogoNascita` AS `LuogoNascita`,`Iscritto`.`CodiceFiscale` AS `CodiceFiscale`,`Iscritto`.`Indirizzo` AS `Indirizzo`,`Iscritto`.`Civico` AS `Civico`,`Iscritto`.`CAP` AS `CAP`,`Iscritto`.`Citta` AS `Citta`,`Iscritto`.`Provincia` AS `Provincia`,`Iscritto`.`Sesso` AS `Sesso`,`Iscritto`.`Telefono` AS `Telefono`,`Iscritto`.`Email` AS `Email`,`Iscritto`.`IDFederazione` AS `IDFederazione`,`Iscritto`.`IDCategoria` AS `IDCategoria`,`L`.`Livello` AS `Livello`,`L`.`Descrizione` AS `Descrizione` from ((`Iscritto` join `Allenatore` `A` on((`Iscritto`.`IDIscritto` = `A`.`IDIscritto`))) join `Livello` `L` on((`L`.`IDLivello` = `A`.`IDLivello`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `Elenco_Appuntamenti`
--

/*!50001 DROP VIEW IF EXISTS `Elenco_Appuntamenti`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`sf3ris`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `Elenco_Appuntamenti` AS select `A`.`IDAppuntamento` AS `IDAppuntamento`,`I`.`Nome` AS `Nome`,`I`.`Cognome` AS `Cognome`,`I`.`CodiceFiscale` AS `CodiceFiscale`,`A`.`Luogo` AS `Luogo`,`A`.`Data` AS `Data`,`A`.`IDAtleta` AS `IDAtleta`,`A`.`DataInserimento` AS `DataInserimento`,`A`.`Costo` AS `Costo` from ((`Appuntamento` `A` join `Atleta` `IA` on((`IA`.`IDAtleta` = `A`.`IDAtleta`))) join `Iscritto` `I` on((`I`.`IDIscritto` = `IA`.`IDIScritto`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `Elenco_Atleti`
--

/*!50001 DROP VIEW IF EXISTS `Elenco_Atleti`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`sf3ris`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `Elenco_Atleti` AS select `Iscritto`.`IDIscritto` AS `IDIscritto`,`A`.`IDAtleta` AS `IDAtleta`,`A`.`IDAtleta` AS `value`,`Iscritto`.`Nome` AS `Nome`,`Iscritto`.`Cognome` AS `Cognome`,`Iscritto`.`DataNascita` AS `DataNascita`,concat(`Iscritto`.`Nome`,' ',`Iscritto`.`Cognome`,' - ',`Iscritto`.`CodiceFiscale`) AS `label`,`Iscritto`.`LuogoNascita` AS `LuogoNascita`,`Iscritto`.`CodiceFiscale` AS `CodiceFiscale`,`Iscritto`.`Indirizzo` AS `Indirizzo`,`Iscritto`.`Civico` AS `Civico`,`Iscritto`.`CAP` AS `CAP`,`Iscritto`.`Citta` AS `Citta`,`Iscritto`.`Provincia` AS `Provincia`,`Iscritto`.`Sesso` AS `Sesso`,`Iscritto`.`Telefono` AS `Telefono`,`Iscritto`.`Email` AS `Email`,`Iscritto`.`IDFederazione` AS `IDFederazione`,`Iscritto`.`IDCategoria` AS `IDCategoria`,`A`.`StatoCertificato` AS `StatoCertificato`,`A`.`StatoPagamento` AS `StatoPagamento`,`A`.`InfoGenerale` AS `InfoGenerale`,`A`.`InfoSalute` AS `InfoSalute` from (`Iscritto` join `Atleta` `A` on((`Iscritto`.`IDIscritto` = `A`.`IDIScritto`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `Elenco_Certificati`
--

/*!50001 DROP VIEW IF EXISTS `Elenco_Certificati`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`sf3ris`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `Elenco_Certificati` AS select `C`.`IDCertificato` AS `IDCertificato`,`C`.`IDAtleta` AS `IDAtleta`,`I`.`Nome` AS `Nome`,`I`.`Cognome` AS `Cognome`,`I`.`CodiceFiscale` AS `CodiceFiscale`,`C`.`IDAnnoSportivo` AS `IDAnnoSportivo`,`A`.`Descrizione` AS `Descrizione`,`C`.`DataInizio` AS `DataInizio`,`C`.`DataFine` AS `DataFine`,`C`.`IDAppuntamento` AS `IDAppuntamento`,`C`.`Esito` AS `Esito`,`C`.`Note` AS `Note` from (((`Certificato` `C` join `AnnoSportivo` `A` on((`C`.`IDAnnoSportivo` = `A`.`IDAnnoSportivo`))) join `Atleta` `IA` on((`C`.`IDAtleta` = `IA`.`IDAtleta`))) join `Iscritto` `I` on((`IA`.`IDIScritto` = `I`.`IDIscritto`))) order by `C`.`IDAnnoSportivo` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `Elenco_PagamentiTesseramento`
--

/*!50001 DROP VIEW IF EXISTS `Elenco_PagamentiTesseramento`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`sf3ris`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `Elenco_PagamentiTesseramento` AS select `P`.`IDPagamentoTesseramentoAtleta` AS `IDPagamentoTesseramentoAtleta`,`P`.`IDTesseramentoAtleta` AS `IDTesseramentoAtleta`,`P`.`Importo` AS `Importo`,`P`.`Data` AS `Data`,`P`.`Tipo` AS `Tipo`,`T`.`IDAtleta` AS `IDAtleta`,`I`.`Nome` AS `Nome`,`I`.`Cognome` AS `Cognome`,`I`.`CodiceFiscale` AS `CodiceFiscale`,`T`.`Importo` AS `ImportoTotale`,`T`.`IDAnnoSportivo` AS `IDAnnoSportivo`,`ASp`.`Descrizione` AS `AnnoSportivo`,`T`.`DataInizio` AS `DataInizio`,`T`.`DataFine` AS `DataFine` from ((((`PagamentoTesseramentoAtleta` `P` join `TesseramentoAtleta` `T` on((`P`.`IDTesseramentoAtleta` = `T`.`IDTesseramentoAtleta`))) join `Atleta` `A` on((`T`.`IDAtleta` = `A`.`IDAtleta`))) join `Iscritto` `I` on((`A`.`IDIScritto` = `I`.`IDIscritto`))) join `AnnoSportivo` `ASp` on((`ASp`.`IDAnnoSportivo` = `T`.`IDAnnoSportivo`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `Elenco_Promemoria`
--

/*!50001 DROP VIEW IF EXISTS `Elenco_Promemoria`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`sf3ris`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `Elenco_Promemoria` AS select `P`.`IDPromemoria` AS `IDPromemoria`,`P`.`IDAppuntamento` AS `IDAppuntamento`,`P`.`Messaggio` AS `Messaggio`,`P`.`IDUtente` AS `IDUtente`,`A`.`IDAtleta` AS `IDAtleta`,`A`.`Luogo` AS `Luogo`,`A`.`Data` AS `Data`,`A`.`Costo` AS `Costo`,`A`.`DataInserimento` AS `DataInserimento`,`EA`.`Nome` AS `Nome`,`EA`.`Cognome` AS `Cognome`,`EA`.`CodiceFiscale` AS `CodiceFiscale`,`EA`.`Telefono` AS `Telefono` from ((`Promemoria` `P` join `Appuntamento` `A` on((`P`.`IDAppuntamento` = `A`.`IDAppuntamento`))) left join `Elenco_Atleti` `EA` on((`A`.`IDAtleta` = `EA`.`IDAtleta`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `Elenco_ScadenzeTesseramento`
--

/*!50001 DROP VIEW IF EXISTS `Elenco_ScadenzeTesseramento`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`sf3ris`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `Elenco_ScadenzeTesseramento` AS select `ET`.`IDTesseramentoAtleta` AS `IDTesseramentoAtleta`,`ET`.`Importo` AS `ImportoRata`,`ET`.`DataInizio` AS `DataInizio`,`ET`.`DataFine` AS `DataFine`,`ET`.`Descrizione` AS `Descrizione`,`ET`.`IDAtleta` AS `IDAtleta`,`ET`.`Nome` AS `Nome`,`ET`.`Cognome` AS `Cognome`,`ET`.`CodiceFiscale` AS `CodiceFiscale`,`S`.`IDScadenzaRataTesseramento` AS `IDScadenzaRataTesseramento`,`S`.`Importo` AS `ImportoTotale`,`S`.`DataInserimento` AS `DataInserimento`,`S`.`DataScadenza` AS `DataScadenza`,`S`.`Mora` AS `Mora` from (`ScadenzaRataTesseramento` `S` join `Elenco_Tesseramenti` `ET` on((`S`.`IDTesseramentoAtleta` = `ET`.`IDTesseramentoAtleta`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `Elenco_Soci`
--

/*!50001 DROP VIEW IF EXISTS `Elenco_Soci`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`sf3ris`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `Elenco_Soci` AS select `Iscritto`.`IDIscritto` AS `IDIscritto`,`S`.`IDSocio` AS `IDSOcio`,`Iscritto`.`Nome` AS `Nome`,`Iscritto`.`Cognome` AS `Cognome`,`Iscritto`.`DataNascita` AS `DataNascita`,`Iscritto`.`LuogoNascita` AS `LuogoNascita`,`Iscritto`.`CodiceFiscale` AS `CodiceFiscale`,`Iscritto`.`Indirizzo` AS `Indirizzo`,`Iscritto`.`Civico` AS `Civico`,`Iscritto`.`CAP` AS `CAP`,`Iscritto`.`Citta` AS `Citta`,`Iscritto`.`Provincia` AS `Provincia`,`Iscritto`.`Sesso` AS `Sesso`,`Iscritto`.`Telefono` AS `Telefono`,`Iscritto`.`Email` AS `Email`,`Iscritto`.`IDFederazione` AS `IDFederazione`,`Iscritto`.`IDCategoria` AS `IDCategoria`,`S`.`TipoSocio` AS `TipoSocio`,`S`.`StatoIscrizione` AS `StatoIscrizione` from (`Iscritto` join `Socio` `S` on((`Iscritto`.`IDIscritto` = `S`.`IDIscritto`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `Elenco_Tesseramenti`
--

/*!50001 DROP VIEW IF EXISTS `Elenco_Tesseramenti`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`sf3ris`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `Elenco_Tesseramenti` AS select `T`.`IDTesseramentoAtleta` AS `IDTesseramentoAtleta`,`T`.`Importo` AS `Importo`,`T`.`DataInizio` AS `DataInizio`,`T`.`DataFine` AS `DataFine`,`A`.`IDAnnoSportivo` AS `IDAnnoSportivo`,`A`.`Descrizione` AS `Descrizione`,`EA`.`IDAtleta` AS `IDAtleta`,`EA`.`Nome` AS `Nome`,`EA`.`Cognome` AS `Cognome`,`EA`.`CodiceFiscale` AS `CodiceFiscale`,`EA`.`IDFederazione` AS `IDFederazione`,`EA`.`IDIscritto` AS `IDIscritto` from ((`TesseramentoAtleta` `T` join `Elenco_Atleti` `EA` on((`T`.`IDAtleta` = `EA`.`IDAtleta`))) join `AnnoSportivo` `A` on((`T`.`IDAnnoSportivo` = `A`.`IDAnnoSportivo`))) order by `A`.`IDAnnoSportivo` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `Situazione_Pagamenti_Tesseramenti_Atleti`
--

/*!50001 DROP VIEW IF EXISTS `Situazione_Pagamenti_Tesseramenti_Atleti`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`sf3ris`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `Situazione_Pagamenti_Tesseramenti_Atleti` AS select `ASP`.`Descrizione` AS `Descrizione`,`T`.`IDTesseramentoAtleta` AS `IDTesseramentoAtleta`,`A`.`IDAtleta` AS `IDAtleta`,`I`.`Nome` AS `Nome`,`I`.`Cognome` AS `Cognome`,`I`.`CodiceFiscale` AS `CodiceFiscale`,`T`.`DataInizio` AS `DataInizio`,`T`.`DataFine` AS `DataFine`,`T`.`Importo` AS `ImportoTotaleTesseramento`,`S`.`IDScadenzaRataTesseramento` AS `IDScadenzaRataTesseramento`,`S`.`DataScadenza` AS `DataScadenza`,`S`.`Importo` AS `Importo`,sum(`P`.`Importo`) AS `importoPagato` from (((((`TesseramentoAtleta` `T` join `ScadenzaRataTesseramento` `S` on((`T`.`IDTesseramentoAtleta` = `S`.`IDTesseramentoAtleta`))) left join `PagamentoTesseramentoAtleta` `P` on((`P`.`IDScadenzaRataTesseramento` = `S`.`IDScadenzaRataTesseramento`))) join `AnnoSportivo` `ASP` on((`ASP`.`IDAnnoSportivo` = `T`.`IDAnnoSportivo`))) join `Atleta` `A` on((`T`.`IDAtleta` = `A`.`IDAtleta`))) join `Iscritto` `I` on((`A`.`IDIScritto` = `I`.`IDIscritto`))) group by `ASP`.`Descrizione`,`T`.`IDTesseramentoAtleta`,`A`.`IDAtleta`,`I`.`Nome`,`I`.`Cognome`,`I`.`CodiceFiscale`,`T`.`DataInizio`,`T`.`DataFine`,`T`.`Importo`,`S`.`IDScadenzaRataTesseramento`,`S`.`DataScadenza`,`S`.`Importo` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `Situazione_Scadenze_Tesseramenti_Atleti`
--

/*!50001 DROP VIEW IF EXISTS `Situazione_Scadenze_Tesseramenti_Atleti`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`sf3ris`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `Situazione_Scadenze_Tesseramenti_Atleti` AS select `ASP`.`Descrizione` AS `Descrizione`,`T`.`IDTesseramentoAtleta` AS `IDTesseramentoAtleta`,`A`.`IDAtleta` AS `IDAtleta`,`I`.`Nome` AS `Nome`,`I`.`Cognome` AS `Cognome`,`I`.`CodiceFiscale` AS `CodiceFiscale`,`T`.`DataInizio` AS `DataInizio`,`T`.`DataFine` AS `DataFine`,`T`.`Importo` AS `ImportoTotaleTesseramento`,`S`.`IDScadenzaRataTesseramento` AS `IDScadenzaRataTesseramento`,`S`.`DataScadenza` AS `DataScadenza`,`S`.`Importo` AS `Importo`,sum(`P`.`Importo`) AS `importoPagato` from (((((`TesseramentoAtleta` `T` join `ScadenzaRataTesseramento` `S` on((`T`.`IDTesseramentoAtleta` = `S`.`IDTesseramentoAtleta`))) left join `PagamentoTesseramentoAtleta` `P` on((`P`.`IDScadenzaRataTesseramento` = `S`.`IDScadenzaRataTesseramento`))) join `AnnoSportivo` `ASP` on((`ASP`.`IDAnnoSportivo` = `T`.`IDAnnoSportivo`))) join `Atleta` `A` on((`T`.`IDAtleta` = `A`.`IDAtleta`))) join `Iscritto` `I` on((`A`.`IDIScritto` = `I`.`IDIscritto`))) group by `ASP`.`Descrizione`,`T`.`IDTesseramentoAtleta`,`A`.`IDAtleta`,`I`.`Nome`,`I`.`Cognome`,`I`.`CodiceFiscale`,`T`.`DataInizio`,`T`.`DataFine`,`T`.`Importo`,`S`.`IDScadenzaRataTesseramento`,`S`.`DataScadenza`,`S`.`Importo` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `Situazione_Tesseramenti_Atleti`
--

/*!50001 DROP VIEW IF EXISTS `Situazione_Tesseramenti_Atleti`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`sf3ris`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `Situazione_Tesseramenti_Atleti` AS select `ASP`.`Descrizione` AS `Descrizione`,`A`.`IDAtleta` AS `IDAtleta`,`I`.`Cognome` AS `Cognome`,`I`.`Nome` AS `Nome`,`I`.`CodiceFiscale` AS `CodiceFiscale`,`T`.`IDTesseramentoAtleta` AS `IDTesseramentoAtleta`,`T`.`Importo` AS `ImportoTotaleTesseramento`,sum(`P`.`Importo`) AS `totalePagamenti` from ((((`TesseramentoAtleta` `T` left join `PagamentoTesseramentoAtleta` `P` on((`T`.`IDTesseramentoAtleta` = `P`.`IDTesseramentoAtleta`))) join `Atleta` `A` on((`A`.`IDAtleta` = `T`.`IDAtleta`))) join `Iscritto` `I` on((`I`.`IDIscritto` = `A`.`IDIScritto`))) join `AnnoSportivo` `ASP` on((`ASP`.`IDAnnoSportivo` = `T`.`IDAnnoSportivo`))) group by `ASP`.`Descrizione`,`A`.`IDAtleta`,`I`.`Cognome`,`I`.`Nome`,`I`.`CodiceFiscale`,`T`.`IDTesseramentoAtleta`,`T`.`Importo` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-12-12 19:44:18
