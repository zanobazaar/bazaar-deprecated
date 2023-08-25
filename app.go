package main

import (
	"changeme/pkg/market"
	"changeme/pkg/wallet"
	"context"
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
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

type Addresses struct {
	Connected    bool `json:"connected"`
	AliasMatches bool `json:"alias"`
}

// CheckConnection returns a greeting for the given name
func (a *App) CheckConnection(walletUrl string, daemonUrl string, alias string) Addresses {

	connected, aliasMatches := wallet.CheckZanoServices(walletUrl, daemonUrl, alias)
	return Addresses{Connected: connected, AliasMatches: aliasMatches}
}

func (a *App) CreateBazaar(walletUrl string) string {

	pushed := market.PushOffer(walletUrl)
	return pushed
}

func (a *App) SendDonation(amount string, donateAddress string, walletUrl string) string {

	zAmount, _ := strconv.ParseInt(amount, 10, 64)

	txid := wallet.SendDonation(zAmount, donateAddress, walletUrl)
	return txid
}
