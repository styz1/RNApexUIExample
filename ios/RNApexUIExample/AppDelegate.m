/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  [self configRNWebsocketExecutorPort];
  RCTBundleURLProvider *provider = [RCTBundleURLProvider sharedSettings];
  [provider setJsLocation:@"192.168.10.5"];
//  [provider setJsLocation:@"localhost"];
  NSURL *jsCodeLocation = [provider jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];

  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"RNApexUIExample"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  
  return YES;
}

/**
 *  修改nodejs服务器启动端口后，也要一并修改此端口才能进入浏览器debug
 */
- (void)configRNWebsocketExecutorPort {
  NSUserDefaults *defaults = [NSUserDefaults standardUserDefaults];
  [defaults setObject:@"websocket-executor-port" forKey:[NSString stringWithFormat:@"%d",8083]];
  [defaults synchronize];
  
}

@end
