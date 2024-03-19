export const EmailAccountsList = [
  {
    name: "gokul",
    email: "gokulsidharth@gmail.com",
    dailyLimit: 0,
    warmupEnabled: true,
  },
  {
    name: "sid",
    email: "gokulsidharth@gmail.com",
    dailyLimit: 0,
    warmupEnabled: true,
  },
];

export const overViewInfo = {
  id: "564576486758412",
  counts: {
    warmUpEmailsSent: "14",
    landedInInbox: "14",
    savedFromSpam: "0",
    emailsReceived: "226",
  },
  inboxVsSpam: {
    totalWarmUpEmailsSent: "14",
    totalEmailsLandedInInbox: "14",
    totalEmailsSavedFromSpam: "2",
  },
  warmUpEmailsSentLast7Days: {
    sent: [5, 8, 12, 10, 22, 27, 30],
    replied: [2, 4, 8, 4, 2, 3, 6],
    savedFromSpam: [0, 4, 1, 0, 0, 0, 2],
  },
};

export const generalInfo = {
  id: "564576486758412",
  general: {
    fromName: "Gokul",
    fromEmail: "gokulsidharth02@gmail.com",
    userName: "Gokulsid",
    appPassword: "edsgthytjykdkkj",
    smtpHost: "smtp.gmail.com",
    smtpPort: 465,
    messagePerDay: "40",
    minimumTimeGap: "10",
    imapHost: "imap.gmail.com",
    imapPort: "993",
    tagName: "None",
  },
};

export const warmUpSettings = {
  id: "564576486758412",
  warmUpSettings: {
    isOn: true,
    totalWarmUpEmailsPerDay: "40",
    dailyRampUpEnabled: true,
    rampUpIncrement: "2",
  },
};

export const backendBaseUrl = 'https://warmup-backend-j7v6.onrender.com/'

export const endPoints = {
  addEmailAccount : `${backendBaseUrl}client/accountadd`,
  fetchAllEmailAccounts : `${backendBaseUrl}client/getAll`,
  fetchEmailAccountById: `${backendBaseUrl}client/`,
  toggleWarmup: `${backendBaseUrl}client/updateWarmup/`,
  getWarmupSettingsById: `${backendBaseUrl}client/warmupdetails/`,
  getEmailAccountsDetailsById: `https://warmup-backend-j7v6.onrender.com/client/account`,
  signup:"https://warmup-backend-j7v6.onrender.com/user/signup",
  login: "https://warmup-backend-j7v6.onrender.com/user/login",
}
