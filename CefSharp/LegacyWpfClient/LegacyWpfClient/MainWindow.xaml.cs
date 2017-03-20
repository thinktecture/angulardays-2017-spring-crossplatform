using System;
using System.Windows;
using System.Windows.Input;
using CefSharp;
using CefSharp.Wpf;

namespace LegacyWpfClient
{
  /// <summary>
  /// Interaction logic for MainWindow.xaml
  /// </summary>
  public partial class MainWindow : Window
  {
    private ChromiumWebBrowser webBrowser;

    public MainWindow()
    {
      InitializeComponent();

      Cef.Initialize(new CefSettings { CachePath = @".\cachepath" });

      var urlToNavigate = AppDomain.CurrentDomain.BaseDirectory + @"client\index.html";
      var browserSettings = new BrowserSettings
      {
        FileAccessFromFileUrls = CefState.Enabled,
        WebSecurity = CefState.Disabled
      };

      webBrowser = new ChromiumWebBrowser();
      webBrowser.Address = urlToNavigate;
      webBrowser.BrowserSettings = browserSettings;

      CefSharpContainer.Children.Add(webBrowser);
    }

    private void Window_KeyDown(object sender, KeyEventArgs e)
    {
      if (e.Key == Key.I &&
          (Keyboard.Modifiers & (ModifierKeys.Control | ModifierKeys.Shift)) == (ModifierKeys.Control | ModifierKeys.Shift))
      {
        webBrowser.ShowDevTools();
      }
    }

    private void MenuItem_OnClick(object sender, RoutedEventArgs e)
    {
      webBrowser.ShowDevTools();
    }
  }
}
