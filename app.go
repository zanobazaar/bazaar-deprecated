package main

import (
	"changeme/pkg/market"
	"changeme/pkg/wallet"
	"context"
	"fmt"
	"strconv"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

type Addresses struct {
	Connected    bool `json:"connected"`
	AliasMatches bool `json:"alias"`
}

type Balance struct {
	Balance         uint64 `json:"balance"`
	UnlockedBalance uint64 `json:"unlocked_balance"`
}

// CheckConnection returns a greeting for the given name
func (a *App) CheckConnection(walletUrl string, daemonUrl string, alias string) Addresses {
	connected, aliasMatches := wallet.CheckZanoServices(walletUrl, daemonUrl, alias)
	return Addresses{Connected: connected, AliasMatches: aliasMatches}
}

func (a *App) HowManyOffers(daemonUrl string, alias string) int {

	numberOfOffers := 0

	offerALiasStr := fmt.Sprintf("offer:%s", alias)
	offers := market.GetAllOffers(daemonUrl)

	for _, offer := range offers.Result.Offers {
		if offer.Cnt == offerALiasStr {
			numberOfOffers++
		}
	}

	fmt.Println(offerALiasStr)

	return numberOfOffers
}

func (a *App) GetBalance(walletUrl string) Balance {

	balance, unlockedBalance := wallet.FetchBalance(walletUrl)

	// str := strconv.FormatUint(balance, 10)
	// trimBalanceStr := str[:len(str)-9]

	return Balance{Balance: balance, UnlockedBalance: unlockedBalance}
}

// FetchOffers TODO - fix strange loop
func (a *App) FetchOffers(daemonUrl string) market.Offers {
	offers := market.GetAllOffers(daemonUrl)
	return offers
}

func (a *App) VendorExistsCheck(alias string, daemonUrl string) bool {
	vendorExists := market.VendorCheck(alias, daemonUrl)
	return vendorExists
}

func (a *App) UpdateOffer(txIdToUpdate string, walletUrl string, title string, amount string, category string, comments string, conditions string, expire int, locationCity string, paymentType string) string {
	offerTxid := market.OfferUpdate(txIdToUpdate, walletUrl, title, amount, category, comments, conditions, expire, locationCity, paymentType)
	return offerTxid
}

func (a *App) PostOffer(walletUrl string, title string, amount string, category string, comments string, conditions string, expire int, locationCity string, paymentType string) string {
	offerTxid := market.CreateOffer(walletUrl, title, amount, category, comments, conditions, expire, locationCity, paymentType)
	return offerTxid
}

func (a *App) CreateBazaar(walletUrl string, title string, conditions string, comments string, category string, paymentType string, locationCountry string, locationCity string, url string) string {
	pushed := market.PushOffer(walletUrl, title, comments, conditions, category, paymentType, locationCountry, locationCity, url)
	return pushed
}

func (a *App) SendDonation(amount string, donateAddress string, walletUrl string) string {
	zAmount, _ := strconv.ParseUint(amount, 10, 64)
	txid := wallet.SendDonation(zAmount, donateAddress, walletUrl)
	return txid
}
