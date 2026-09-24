import { useNavigate } from 'react-router';
import { useState } from 'react';
import {
  CreditCard,
  Home,
  Phone,
  Mail,
  MapPin,
  Shield,
  CheckCircle,
  Smartphone,
  Banknote,
  Building2,
  Wallet,
  AlertCircle,
  FileText,
  Users,
  Award,
  Stethoscope,
  Activity,
  IdCard,
  TrendingUp,
} from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function PaiementPage() {
  const navigate = useNavigate();
  const [selectedPaymentType, setSelectedPaymentType] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ══════════ HEADER ══════════ */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => navigate('/')}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-[#2E7D5A] to-[#245F45] rounded-lg flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-[#2E7D5A]">PSPSCI</h1>
                <p className="text-xs text-gray-500 hidden sm:block">
                  Secteur Privé de la Santé en Côte d'Ivoire
                </p>
              </div>
            </div>
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-gray-700 hover:text-[#2E7D5A] transition-colors"
            >
              <Home className="w-5 h-5" />
              <span className="hidden sm:inline">Accueil</span>
            </button>
          </div>
        </div>
      </header>

      {/* ══════════ HERO ══════════ */}
      <section className="bg-gradient-to-br from-[#2E7D5A] to-[#245F45] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/15 backdrop-blur-sm mb-4 border border-white/20">
            <CreditCard className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl font-bold mb-4">Espace Paiement PSPSCI</h2>
          <p className="text-xl text-green-100">
            Réglez vos cotisations et frais en toute sécurité
          </p>
        </div>
      </section>

      {/* ══════════ CONTENU ══════════ */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border-t-4 border-[#2E7D5A]">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Effectuer un paiement
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Payez en toute sécurité vos <strong>cotisations annuelles</strong>, vos
            <strong> frais d'adhésion</strong>, vos <strong>certifications d'identité
            digitale</strong> et autres services de la PSPSCI. Nous acceptons plusieurs
            modes de paiement adaptés au contexte ivoirien pour votre convenance.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* ══════════ FORMULAIRE ══════════ */}
          <div className="lg:col-span-2 space-y-6">
            {/* ─────── Type de paiement ─────── */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#2E7D5A]/10 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-[#2E7D5A]" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">
                  1. Type de paiement
                </h4>
              </div>

              <div className="space-y-3">
                {/* Cotisation professionnelle */}
                <div
                  onClick={() => setSelectedPaymentType('cotisation')}
                  className={`border-2 rounded-xl p-5 cursor-pointer transition-all ${
                    selectedPaymentType === 'cotisation'
                      ? 'border-[#2E7D5A] bg-[#2E7D5A]/5'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <Stethoscope className="w-6 h-6 text-[#2E7D5A] mt-1" />
                      <div>
                        <h5 className="font-bold text-gray-900 text-lg mb-1">
                          Cotisation annuelle professionnel
                        </h5>
                        <p className="text-gray-600 text-sm">
                          Renouvellement de votre adhésion PSPSCI — Médecins, spécialistes,
                          pharmaciens, dentistes, sages-femmes, infirmiers libéraux
                        </p>
                      </div>
                    </div>
                    {selectedPaymentType === 'cotisation' && (
                      <CheckCircle className="w-6 h-6 text-[#2E7D5A]" />
                    )}
                  </div>
                </div>

                {/* Adhésion établissement */}
                <div
                  onClick={() => setSelectedPaymentType('adhesion')}
                  className={`border-2 rounded-xl p-5 cursor-pointer transition-all ${
                    selectedPaymentType === 'adhesion'
                      ? 'border-[#2E7D5A] bg-[#2E7D5A]/5'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <Building2 className="w-6 h-6 text-[#2E7D5A] mt-1" />
                      <div>
                        <h5 className="font-bold text-gray-900 text-lg mb-1">
                          Adhésion établissement de santé
                        </h5>
                        <p className="text-gray-600 text-sm">
                          Première inscription ou renouvellement — Cliniques, polycliniques,
                          laboratoires, centres médicaux, pharmacies
                        </p>
                      </div>
                    </div>
                    {selectedPaymentType === 'adhesion' && (
                      <CheckCircle className="w-6 h-6 text-[#2E7D5A]" />
                    )}
                  </div>
                </div>

                {/* Identité digitale */}
                <div
                  onClick={() => setSelectedPaymentType('identite')}
                  className={`border-2 rounded-xl p-5 cursor-pointer transition-all ${
                    selectedPaymentType === 'identite'
                      ? 'border-[#2E7D5A] bg-[#2E7D5A]/5'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <IdCard className="w-6 h-6 text-[#2E7D5A] mt-1" />
                      <div>
                        <h5 className="font-bold text-gray-900 text-lg mb-1">
                          Certification Identité Digitale
                        </h5>
                        <p className="text-gray-600 text-sm">
                          Création, renouvellement ou duplicata de votre identité digitale
                          PSPSCI — Profil vérifié et intégré à l'annuaire national
                        </p>
                      </div>
                    </div>
                    {selectedPaymentType === 'identite' && (
                      <CheckCircle className="w-6 h-6 text-[#2E7D5A]" />
                    )}
                  </div>
                </div>

                {/* Formation */}
                <div
                  onClick={() => setSelectedPaymentType('formation')}
                  className={`border-2 rounded-xl p-5 cursor-pointer transition-all ${
                    selectedPaymentType === 'formation'
                      ? 'border-[#2E7D5A] bg-[#2E7D5A]/5'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <Award className="w-6 h-6 text-[#2E7D5A] mt-1" />
                      <div>
                        <h5 className="font-bold text-gray-900 text-lg mb-1">
                          Formation continue & séminaires
                        </h5>
                        <p className="text-gray-600 text-sm">
                          Inscription aux formations certifiantes, séminaires et
                          ateliers organisés par la PSPSCI et ses partenaires
                        </p>
                      </div>
                    </div>
                    {selectedPaymentType === 'formation' && (
                      <CheckCircle className="w-6 h-6 text-[#2E7D5A]" />
                    )}
                  </div>
                </div>

                {/* Autre */}
                <div
                  onClick={() => setSelectedPaymentType('autre')}
                  className={`border-2 rounded-xl p-5 cursor-pointer transition-all ${
                    selectedPaymentType === 'autre'
                      ? 'border-[#2E7D5A] bg-[#2E7D5A]/5'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <CreditCard className="w-6 h-6 text-[#2E7D5A] mt-1" />
                      <div>
                        <h5 className="font-bold text-gray-900 text-lg mb-1">
                          Autre paiement
                        </h5>
                        <p className="text-gray-600 text-sm">
                          Amendes, frais de dossier, partenariats, événements PSPSCI
                        </p>
                      </div>
                    </div>
                    {selectedPaymentType === 'autre' && (
                      <CheckCircle className="w-6 h-6 text-[#2E7D5A]" />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* ─────── Mode de paiement ─────── */}
            {selectedPaymentType && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#2E7D5A]/10 rounded-lg flex items-center justify-center">
                    <Wallet className="w-6 h-6 text-[#2E7D5A]" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">
                    2. Mode de paiement
                  </h4>
                </div>

                <div className="space-y-3">
                  {/* Mobile Money */}
                  <div
                    onClick={() => setSelectedPaymentMethod('mobile')}
                    className={`border-2 rounded-xl p-5 cursor-pointer transition-all ${
                      selectedPaymentMethod === 'mobile'
                        ? 'border-[#2E7D5A] bg-[#2E7D5A]/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                          <Smartphone className="w-6 h-6 text-orange-600" />
                        </div>
                        <div>
                          <h5 className="font-bold text-gray-900 text-lg">
                            Mobile Money
                          </h5>
                          <p className="text-gray-600 text-sm">
                            Orange Money, MTN Money, Moov Money, Wave
                          </p>
                        </div>
                      </div>
                      {selectedPaymentMethod === 'mobile' && (
                        <CheckCircle className="w-6 h-6 text-[#2E7D5A]" />
                      )}
                    </div>
                  </div>

                  {/* Carte bancaire */}
                  <div
                    onClick={() => setSelectedPaymentMethod('carte')}
                    className={`border-2 rounded-xl p-5 cursor-pointer transition-all ${
                      selectedPaymentMethod === 'carte'
                        ? 'border-[#2E7D5A] bg-[#2E7D5A]/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <CreditCard className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h5 className="font-bold text-gray-900 text-lg">
                            Carte bancaire
                          </h5>
                          <p className="text-gray-600 text-sm">
                            Visa, Mastercard — Paiement sécurisé 3D Secure
                          </p>
                        </div>
                      </div>
                      {selectedPaymentMethod === 'carte' && (
                        <CheckCircle className="w-6 h-6 text-[#2E7D5A]" />
                      )}
                    </div>
                  </div>

                  {/* Virement */}
                  <div
                    onClick={() => setSelectedPaymentMethod('virement')}
                    className={`border-2 rounded-xl p-5 cursor-pointer transition-all ${
                      selectedPaymentMethod === 'virement'
                        ? 'border-[#2E7D5A] bg-[#2E7D5A]/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                          <Building2 className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <h5 className="font-bold text-gray-900 text-lg">
                            Virement bancaire
                          </h5>
                          <p className="text-gray-600 text-sm">
                            Virement depuis votre compte bancaire (SGCI, NSIA, etc.)
                          </p>
                        </div>
                      </div>
                      {selectedPaymentMethod === 'virement' && (
                        <CheckCircle className="w-6 h-6 text-[#2E7D5A]" />
                      )}
                    </div>
                  </div>

                  {/* Espèces */}
                  <div
                    onClick={() => setSelectedPaymentMethod('especes')}
                    className={`border-2 rounded-xl p-5 cursor-pointer transition-all ${
                      selectedPaymentMethod === 'especes'
                        ? 'border-[#2E7D5A] bg-[#2E7D5A]/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                          <Banknote className="w-6 h-6 text-[#2E7D5A]" />
                        </div>
                        <div>
                          <h5 className="font-bold text-gray-900 text-lg">
                            Paiement en espèces
                          </h5>
                          <p className="text-gray-600 text-sm">
                            Au siège de la PSPSCI — Sur présentation d'une pièce d'identité
                          </p>
                        </div>
                      </div>
                      {selectedPaymentMethod === 'especes' && (
                        <CheckCircle className="w-6 h-6 text-[#2E7D5A]" />
                      )}
                    </div>
                  </div>
                </div>

                {/* ─────── Formulaire Mobile Money ─────── */}
                {selectedPaymentMethod === 'mobile' && (
                  <div className="mt-6 p-6 bg-[#2E7D5A]/5 border border-[#2E7D5A]/20 rounded-xl">
                    <h5 className="font-bold text-gray-900 mb-4">
                      Informations Mobile Money
                    </h5>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Opérateur
                        </label>
                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D5A] focus:border-[#2E7D5A]">
                          <option>Sélectionnez votre opérateur</option>
                          <option>Orange Money</option>
                          <option>MTN Money</option>
                          <option>Moov Money</option>
                          <option>Wave</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Numéro de téléphone
                        </label>
                        <input
                          type="tel"
                          placeholder="+225 XX XX XX XX XX"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D5A] focus:border-[#2E7D5A]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Nom complet
                        </label>
                        <input
                          type="text"
                          placeholder="Votre nom complet"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D5A] focus:border-[#2E7D5A]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          N° d'ordre ou ID PSPSCI
                        </label>
                        <input
                          type="text"
                          placeholder="PSPSCI-PRO-XXXX-XXXXX"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D5A] focus:border-[#2E7D5A]"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* ─────── Formulaire Carte bancaire ─────── */}
                {selectedPaymentMethod === 'carte' && (
                  <div className="mt-6 p-6 bg-[#2E7D5A]/5 border border-[#2E7D5A]/20 rounded-xl">
                    <h5 className="font-bold text-gray-900 mb-4">
                      Informations carte bancaire
                    </h5>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Numéro de carte
                        </label>
                        <input
                          type="text"
                          placeholder="XXXX XXXX XXXX XXXX"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D5A] focus:border-[#2E7D5A]"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Date d'expiration
                          </label>
                          <input
                            type="text"
                            placeholder="MM/AA"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D5A] focus:border-[#2E7D5A]"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            CVV
                          </label>
                          <input
                            type="text"
                            placeholder="XXX"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D5A] focus:border-[#2E7D5A]"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Nom sur la carte
                        </label>
                        <input
                          type="text"
                          placeholder="NOM PRENOM"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D5A] focus:border-[#2E7D5A]"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* ─────── Coordonnées bancaires ─────── */}
                {selectedPaymentMethod === 'virement' && (
                  <div className="mt-6 p-6 bg-[#2E7D5A]/5 border border-[#2E7D5A]/20 rounded-xl">
                    <h5 className="font-bold text-gray-900 mb-4">
                      Coordonnées bancaires de la PSPSCI
                    </h5>
                    <div className="space-y-3 text-gray-700">
                      <div className="flex justify-between py-2 border-b border-[#2E7D5A]/20">
                        <span className="font-semibold">Banque :</span>
                        <span>SGCI — Société Générale Côte d'Ivoire</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-[#2E7D5A]/20">
                        <span className="font-semibold">Titulaire :</span>
                        <span>PSPSCI — Secteur Privé de la Santé CI</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-[#2E7D5A]/20">
                        <span className="font-semibold">IBAN :</span>
                        <span className="font-mono">CI00 0000 0000 0000 0000 0000 00</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-[#2E7D5A]/20">
                        <span className="font-semibold">Code BIC :</span>
                        <span className="font-mono">SGCICIAB</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="font-semibold">Référence :</span>
                        <span className="text-red-600 font-bold">
                          Votre N° PSPSCI (obligatoire)
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 bg-amber-50 border border-amber-300 rounded-lg p-4">
                      <p className="text-sm text-gray-700">
                        <strong>Important :</strong> Après votre virement, envoyez une
                        copie du reçu par email à{' '}
                        <strong>paiement@pspsci.ci</strong> avec votre N° PSPSCI en
                        référence.
                      </p>
                    </div>
                  </div>
                )}

                {/* ─────── Paiement au siège ─────── */}
                {selectedPaymentMethod === 'especes' && (
                  <div className="mt-6 p-6 bg-[#2E7D5A]/5 border border-[#2E7D5A]/20 rounded-xl">
                    <h5 className="font-bold text-gray-900 mb-4">
                      Paiement au siège de la PSPSCI
                    </h5>
                    <div className="space-y-3 text-gray-700">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-[#2E7D5A] mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold">Adresse :</p>
                          <p>Cocody Danga, Rue des Jardins</p>
                          <p>Abidjan, Côte d'Ivoire</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="w-5 h-5 text-[#2E7D5A] mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold">Téléphone :</p>
                          <p>+225 07 09 77 53 11</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CreditCard className="w-5 h-5 text-[#2E7D5A] mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold">Horaires d'ouverture :</p>
                          <p>Lundi – Vendredi : 8h00 – 16h00</p>
                          <p className="text-sm text-gray-600">
                            Fermé les week-ends et jours fériés
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 bg-amber-50 border border-amber-300 rounded-lg p-4">
                      <p className="text-sm text-gray-700">
                        <strong>À apporter :</strong> Votre carte d'identité nationale
                        et votre numéro d'ordre professionnel (si applicable).
                      </p>
                    </div>
                  </div>
                )}

                {selectedPaymentMethod && (
                  <button
                    onClick={() => alert('Paiement en cours de traitement...')}
                    className="w-full mt-6 bg-gradient-to-r from-[#2E7D5A] to-[#245F45] text-white py-4 px-6 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-3 shadow-lg shadow-[#2E7D5A]/30"
                  >
                    <Shield className="w-6 h-6" />
                    Procéder au paiement sécurisé
                  </button>
                )}
              </div>
            )}
          </div>

          {/* ══════════ SIDEBAR ══════════ */}
          <div className="space-y-6">
            {/* Sécurité */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#2E7D5A]/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#2E7D5A]" />
                </div>
                <h4 className="font-bold text-gray-900 text-lg">
                  Paiement sécurisé
                </h4>
              </div>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#2E7D5A] mt-0.5 flex-shrink-0" />
                  <span>Cryptage SSL 256 bits</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#2E7D5A] mt-0.5 flex-shrink-0" />
                  <span>Conformité PCI-DSS</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#2E7D5A] mt-0.5 flex-shrink-0" />
                  <span>Authentification 3D Secure</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#2E7D5A] mt-0.5 flex-shrink-0" />
                  <span>Reçu officiel envoyé par email</span>
                </div>
              </div>
            </div>

            {/* Avantages PSPSCI */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#2E7D5A]/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-[#2E7D5A]" />
                </div>
                <h4 className="font-bold text-gray-900 text-lg">
                  Votre adhésion vous donne accès à
                </h4>
              </div>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#2E7D5A] mt-0.5 flex-shrink-0" />
                  <span>Annuaire national des professionnels</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#2E7D5A] mt-0.5 flex-shrink-0" />
                  <span>Identité digitale certifiée PSPSCI</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#2E7D5A] mt-0.5 flex-shrink-0" />
                  <span>Formations continues certifiantes</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#2E7D5A] mt-0.5 flex-shrink-0" />
                  <span>Accès aux événements du secteur privé</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#2E7D5A] mt-0.5 flex-shrink-0" />
                  <span>Statistiques et veille sectorielle</span>
                </div>
              </div>
            </div>

            {/* Aide */}
            <div className="bg-[#7DD3AC]/20 border border-[#2E7D5A]/30 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <AlertCircle className="w-5 h-5 text-[#2E7D5A]" />
                <h4 className="font-bold text-gray-900">Besoin d'aide ?</h4>
              </div>
              <p className="text-sm text-gray-700 mb-4">
                Notre service comptabilité est à votre disposition pour toute
                question concernant les paiements.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <Phone className="w-4 h-4 text-[#2E7D5A]" />
                  <a href="tel:+2250709775311" className="hover:underline">
                    +225 07 09 77 53 11
                  </a>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Mail className="w-4 h-4 text-[#2E7D5A]" />
                  <a href="mailto:paiement@pspsci.ci" className="hover:underline">
                    paiement@pspsci.ci
                  </a>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
                  <a
                    href="https://wa.me/2250709775311"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="bg-[#245F45] text-white py-12 px-4 mt-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-lg font-bold">PSPSCI</p>
                <p className="text-xs text-green-200">
                  Secteur Privé de la Santé en Côte d'Ivoire
                </p>
              </div>
            </div>
            <div className="space-y-2 text-green-100 text-sm">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> +225 07 09 77 53 11
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> contact@pspsci.ci
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Cocody Danga, Abidjan — Côte d'Ivoire
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Liens rapides</h4>
            <div className="space-y-2 text-sm">
              <p
                className="text-green-100 hover:text-white cursor-pointer transition-colors"
                onClick={() => navigate('/')}
              >
                Accueil
              </p>
              <p
                className="text-green-100 hover:text-white cursor-pointer transition-colors"
                onClick={() => navigate('/annuaire')}
              >
                Annuaire
              </p>
              <p
                className="text-green-100 hover:text-white cursor-pointer transition-colors"
                onClick={() => navigate('/identite-digitale')}
              >
                Identité digitale
              </p>
              <p
                className="text-green-100 hover:text-white cursor-pointer transition-colors"
                onClick={() => navigate('/contact')}
              >
                Contact
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#1877F2] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#1DA1F2] flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#0A66C2] flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#E4405F] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/2250709775311"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#25D366] flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/10 text-center text-green-200 text-sm">
          <p>© 2025 PSPSCI — Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}